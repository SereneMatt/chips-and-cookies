import * as styles from '#/styles/storefront.css'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { getStripeCheckoutStatus } from '#/server/payments/stripe.functions'

const sessionPattern = /^cs_(test|live)_[A-Za-z0-9]+$/

export const Route = createFileRoute('/order/confirmation')({
  validateSearch: (search: Record<string, unknown>) => ({
    session_id: typeof search.session_id === 'string' && sessionPattern.test(search.session_id)
      ? search.session_id
      : '',
  }),
  loaderDeps: ({ search }) => ({ sessionId: search.session_id }),
  loader: ({ deps }) => deps.sessionId
    ? getStripeCheckoutStatus({ data: { sessionId: deps.sessionId } })
    : null,
  head: () => ({ meta: [{ title: 'Order confirmation — Chips & Cookies' }] }),
  component: OrderConfirmation,
})

function OrderConfirmation() {
  const result = Route.useLoaderData()
  useEffect(() => {
    if (result?.status === 'paid') localStorage.removeItem('chips-cookies-bag')
  }, [result?.status])

  const paid = result?.status === 'paid'
  const expired = result?.status === 'expired'

  return (
    <main className={styles.orderConfirmation}>
      <span className={styles.eyebrow}>{paid ? 'PAYMENT CONFIRMED' : expired ? 'CHECKOUT EXPIRED' : 'PAYMENT STATUS'}</span>
      <h1>{paid ? 'Your happy little haul is on its way.' : expired ? 'This checkout has expired.' : 'Your payment is still processing.'}</h1>
      <p>
        {paid
          ? 'Stripe confirmed your Cash App Pay purchase. Look for your order receipt by email.'
          : expired
            ? 'No payment was taken. Head back to your bag to start a new checkout.'
            : 'Stripe has not confirmed this payment yet. Check your email for an update before trying again.'}
      </p>
      {paid && result?.amount != null && result.currency && (
        <p className={styles.orderAmount}>Paid {(result.amount / 100).toLocaleString('en-US', { style: 'currency', currency: result.currency.toUpperCase() })}</p>
      )}
      <Link className={styles.button} to="/">Back to the snack shop <span aria-hidden>→</span></Link>
    </main>
  )
}
