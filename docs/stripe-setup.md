# Stripe checkout setup

The app already integrates Stripe-hosted Checkout with Cash App Pay. No Stripe
frontend SDK, publishable key, or Stripe product import is needed. The server
reads products and prices from `src/data/snacks.ts` and sends them to Stripe.

## Test locally without charging money

1. Open your Stripe Dashboard and select a sandbox/test environment. Enable
   Cash App Pay in payment method settings. This integration requires a US
   Stripe business, USD prices, and US shipping addresses. See
   [Stripe's Cash App Pay guide](https://docs.stripe.com/payments/cash-app-pay/accept-a-payment).
2. Copy the environment's secret API key (`sk_test_…`). Never put it in a
   `VITE_` variable, browser code, source control, or a chat message.
3. In the same Stripe environment, create a USD shipping rate and copy its
   `shr_…` ID. A zero-dollar rate works for free shipping. See
   [Stripe shipping rates](https://docs.stripe.com/payments/during-payment/charge-shipping).
4. Create or update `.env.local` in the project root with the following values.
   Preserve any existing settings. `.env.local` is ignored by Git.

   ```dotenv
   STRIPE_SECRET_KEY=sk_test_replace_with_your_key
   STRIPE_SHIPPING_RATE_ID=shr_replace_with_your_rate
   PUBLIC_APP_URL=http://localhost:3000
   ```

   Use `.env.local`/`.env` or `.dev.vars` for local Worker variables, never both.
   Restart the development server after changing variables.
5. Run `nub install` if dependencies are missing, then `nub run dev` and open
   `http://localhost:3000`.
6. Add a snack, open `/shop/cart`, and select **Pay with Cash App**. Stripe's
   test flow lets you approve or decline a simulated payment; no real payment
   is made. This app enables Cash App Pay only, so test card numbers do not apply.

## Verify the flow

- Approve a test payment: Stripe redirects to
  `/order/confirmation?session_id=cs_test_…`. The server retrieves the session
  from Stripe and shows confirmation only for a complete, paid session. The
  browser bag is then cleared. Check the payment and shipping total in Stripe.
- Decline a test payment: it must not produce a paid confirmation.
- Cancel checkout: return to `/shop/cart?checkout=cancelled`; the bag remains.
- Check missing credentials and an unavailable catalogue item: checkout should
  show an error rather than redirect to payment.

There is no credential-free mock mode. Stripe's test environment exercises the
existing integration with simulated payments, including server verification.

## How the integration works

- `src/routes/shop.cart.tsx` calls `beginStripeCheckout` with product IDs and
  quantities, then redirects to the returned `{ checkoutUrl }`.
- `src/server/payments/stripe.functions.ts` validates quantities, availability,
  currency, and catalogue prices, then calls `POST /v1/checkout/sessions`.
- `src/routes/order.confirmation.tsx` calls `getStripeCheckoutStatus`, which
  retrieves the session from Stripe. Its response is `paid` (with amount in
  cents and currency), `expired`, or `processing`.

## Cloudflare configuration

After local testing, sign in and store the secret interactively:

```bash
nub exec wrangler login
nub exec wrangler secret put STRIPE_SECRET_KEY
```

Merge a `vars` object into `wrangler.jsonc`, keeping its existing settings:

```json
"vars": {
  "STRIPE_SHIPPING_RATE_ID": "shr_replace_with_your_rate",
  "PUBLIC_APP_URL": "https://your-store.example.com"
}
```

Use test credentials for a test deployment. For real payments, activate the
Stripe account, use its live secret (`sk_live_…`), and create a live shipping
rate. Test and live resources are separate. Set the actual HTTPS storefront
origin, then run:

```bash
nub run typecheck
nub run deploy
```

## Remaining work before accepting real orders

- Fix checkout idempotency: the current key hashes only product IDs and
  quantities. Identical bags across customers can reuse the same Stripe session.
  Use a unique checkout-attempt ID, reused only for retries of that attempt,
  and validate its association with the same cart on the server.
- Implement durable orders and a signature-verified Stripe webhook for
  fulfillment. Handle repeated events idempotently and confirm payment status
  before fulfilling. The current confirmation page verifies payment but does
  not save an order or initiate delivery. Customers can pay without returning
  to that page. See [Stripe fulfillment](https://docs.stripe.com/checkout/fulfillment).
- Configure receipt emails in Stripe; the confirmation page mentions a receipt,
  but this app does not send email itself.
- Replace illustrative prices, product details, and availability in the
  catalogue, and verify the shipping charge.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Checkout is not configured | Set `STRIPE_SECRET_KEY` and restart the server. |
| Configure a shipping rate | Set `STRIPE_SHIPPING_RATE_ID`. |
| Invalid API key / no such shipping rate | Replace placeholders; ensure key and rate belong to the same Stripe environment. |
| Cash App Pay unavailable | Check account eligibility, payment method settings, and USD currency. |
| HTTPS error | Use `http://localhost:3000` locally and HTTPS on deployed hosts. |
| Repeated checkout opens an old session | See the idempotency limitation above. |

Live payments and test payments have not been exercised as part of this setup
documentation. Account credentials and a shipping rate must be configured first.
