import { createFileRoute, Link } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { useEffect, useMemo, useState } from 'react'

import { beginStripeCheckout } from '#/server/payments/stripe.functions'
import { snacks } from '#/lib/snacks'
import * as styles from '#/styles/custom-cart.css'

const CART_KEY = 'chips-cookies-bag'
type Cart = Record<string, number>

export const Route = createFileRoute('/shop/cart')({ component: CartPage })

function CartPage() {
  const [cart, setCart] = useState<Cart>({})
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const startCheckout = useServerFn(beginStripeCheckout)

  useEffect(() => {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(CART_KEY) || '{}')
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        const next: Cart = {}
        for (const [id, quantity] of Object.entries(parsed)) {
          if (snacks.some((snack) => snack.id === id) && typeof quantity === 'number' && Number.isInteger(quantity) && quantity > 0 && quantity <= 99) next[id] = quantity
        }
        setCart(next)
      }
    } catch {
      setCart({})
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart, ready])

  const lines = useMemo(() => snacks.filter((snack) => cart[snack.id]).map((snack) => ({ ...snack, quantity: cart[snack.id] })), [cart])
  const total = lines.reduce((sum, line) => sum + line.price * line.quantity, 0)

  async function checkout() {
    setPending(true)
    setError('')
    try {
      const result = await startCheckout({ data: { items: lines.map(({ id, quantity }) => ({ id, quantity })) } })
      window.location.assign(result.checkoutUrl)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not open secure checkout.')
      setPending(false)
    }
  }

  if (!ready) return <main className={styles.page}><p>Loading your bag…</p></main>

  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>YOUR HAPPY LITTLE HAUL</p>
      <h1 className={styles.title}>Your bag</h1>
      {lines.length === 0 ? (
        <div className={styles.empty}>
          <p>Your bag is empty. Your next happy snack is waiting.</p>
          <Link to="/" className={styles.button}>Browse the snacks →</Link>
        </div>
      ) : (
        <div className={styles.layout}>
          <ul className={styles.lines}>
            {lines.map((line) => (
              <li className={styles.line} key={line.id}>
                <img src={line.image} alt={line.name} />
                <div className={styles.details}>
                  <h2>{line.name}</h2>
                  <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: line.currency }).format(line.price)}</p>
                  <div className={styles.quantity}>
                    <button aria-label={`Remove one ${line.name}`} onClick={() => setCart((old) => ({ ...old, [line.id]: Math.max(0, line.quantity - 1) }))}>−</button>
                    <span>{line.quantity}</span>
                    <button aria-label={`Add one ${line.name}`} disabled={line.quantity >= 99} onClick={() => setCart((old) => ({ ...old, [line.id]: Math.min(99, line.quantity + 1) }))}>+</button>
                    <button className={styles.remove} onClick={() => setCart((old) => { const next = { ...old }; delete next[line.id]; return next })}>Remove</button>
                  </div>
                </div>
                <strong className={styles.lineTotal}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: line.currency }).format(line.price * line.quantity)}</strong>
              </li>
            ))}
          </ul>
          <aside className={styles.summary}>
            <h2>Order summary</h2>
            <div className={styles.total}><span>Subtotal</span><strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</strong></div>
            <p>Shipping calculated at Stripe checkout.</p>
            {error && <p className={styles.error} role="alert">{error}</p>}
            <button className={styles.button} disabled={pending} onClick={checkout}>{pending ? 'Opening Cash App Pay…' : 'Pay with Cash App →'}</button>
            <small>Secure payment by Stripe · Cash App Pay (US only)</small>
          </aside>
        </div>
      )}
    </main>
  )
}
