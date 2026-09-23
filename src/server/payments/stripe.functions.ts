import { createServerFn } from '@tanstack/react-start'
import { setResponseHeader } from '@tanstack/react-start/server'
import * as v from 'valibot'

import { snacks } from '#/lib/snacks'

const SESSION_ID = /^cs_(test|live)_[A-Za-z0-9]+$/
const checkoutInput = v.object({
  items: v.pipe(
    v.array(v.object({
      id: v.string(),
      quantity: v.pipe(v.number(), v.integer(), v.minValue(1), v.maxValue(99)),
    })),
    v.minLength(1),
    v.maxLength(100),
  ),
})

function getStripeSecret() {
  return typeof process !== 'undefined' ? process.env.STRIPE_SECRET_KEY : undefined
}

async function stripeRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const key = getStripeSecret()
  if (!key) throw new Error('Stripe checkout is not configured yet.')
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    ...init,
    signal: AbortSignal.timeout(15_000),
    headers: {
      Authorization: `Basic ${btoa(`${key}:`)}`,
      ...(init.body ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
      ...init.headers,
    },
  })
  const result = (await response.json()) as T & { error?: { message?: string } }
  if (!response.ok) throw new Error(result.error?.message ?? `Stripe request failed (${response.status}).`)
  return result
}

type StripeCheckoutSession = {
  id: string
  url: string | null
  mode: string | null
  status: string | null
  payment_status: string | null
  currency: string | null
  amount_total: number | null
}

async function idempotencyKey(items: Array<{ id: string; quantity: number }>) {
  const canonical = [...items].sort((a, b) => a.id.localeCompare(b.id))
    .map(({ id, quantity }) => `${id}:${quantity}`).join(',')
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(canonical))
  return `snack-cart-${Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')}`
}

export const beginStripeCheckout = createServerFn({ method: 'POST' })
  .validator(checkoutInput)
  .handler(async ({ data }) => {
    setResponseHeader('Cache-Control', 'private, no-store')
    const stripeKey = getStripeSecret()
    if (!stripeKey) throw new Error('Stripe checkout is not configured yet.')
    const shippingRate = process.env.STRIPE_SHIPPING_RATE_ID
    const publicAppUrl = process.env.PUBLIC_APP_URL
    if (!shippingRate || !publicAppUrl) {
      throw new Error('Stripe setup is incomplete. Configure a shipping rate and public app URL.')
    }
    const appUrl = new URL(publicAppUrl)
    if (appUrl.protocol !== 'https:' && appUrl.hostname !== 'localhost') {
      throw new Error('PUBLIC_APP_URL must use HTTPS.')
    }

    const lines = data.items.map(({ id, quantity }) => {
      const product = snacks.find((snack) => snack.id === id)
      if (!product || !product.available) throw new Error('A snack in your bag is unavailable. Please update your bag.')
      if (product.currency !== 'USD') throw new Error('Cash App Pay requires every product in your bag to be priced in USD.')
      const unitAmount = Math.round(product.price * 100)
      if (!Number.isSafeInteger(unitAmount) || unitAmount < 1) throw new Error('A product has an invalid price.')
      return { product, quantity, unitAmount }
    })

    const form = new URLSearchParams()
    form.set('mode', 'payment')
    form.set('payment_method_types[0]', 'cashapp')
    form.set('shipping_address_collection[allowed_countries][0]', 'US')
    form.set('shipping_options[0][shipping_rate]', shippingRate)
    form.set('success_url', `${appUrl.origin}/order/confirmation?session_id={CHECKOUT_SESSION_ID}`)
    form.set('cancel_url', `${appUrl.origin}/shop/cart?checkout=cancelled`)
    lines.forEach(({ product, quantity, unitAmount }, index) => {
      const prefix = `line_items[${index}]`
      form.set(`${prefix}[quantity]`, String(quantity))
      form.set(`${prefix}[price_data][currency]`, 'usd')
      form.set(`${prefix}[price_data][unit_amount]`, String(unitAmount))
      form.set(`${prefix}[price_data][product_data][name]`, product.name)
      form.set(`${prefix}[price_data][product_data][description]`, product.description)
      form.set(`${prefix}[price_data][product_data][images][0]`, new URL(product.image, appUrl).toString())
    })

    const session = await stripeRequest<StripeCheckoutSession>('checkout/sessions', {
      method: 'POST',
      body: form,
      headers: { 'Idempotency-Key': await idempotencyKey(data.items) },
    })
    if (!session.url) throw new Error('Stripe did not return a checkout URL.')
    return { checkoutUrl: session.url }
  })

export const getStripeCheckoutStatus = createServerFn({ method: 'GET' })
  .validator(v.object({ sessionId: v.pipe(v.string(), v.regex(SESSION_ID)) }))
  .handler(async ({ data }) => {
    setResponseHeader('Cache-Control', 'private, no-store')
    const session = await stripeRequest<StripeCheckoutSession>(
      `checkout/sessions/${encodeURIComponent(data.sessionId)}`,
    )
    if (session.mode !== 'payment') throw new Error('This checkout session is not a purchase.')
    if (session.payment_status === 'paid' && session.status === 'complete') {
      return { status: 'paid' as const, amount: session.amount_total, currency: session.currency }
    }
    if (session.status === 'expired') return { status: 'expired' as const }
    return { status: 'processing' as const }
  })
