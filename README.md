# chips-and-cookies

An online storefront (boosting existing https://order.sweet-butter.com).

## Project Status

🚧 Early development

## Planned Features

- Cookie catalogue
- Shopping cart
- Payment
- Order confirmation
- Responsive

## Tech Stack

- TanStack Start

## Development

To run this application:

```bash
nub install
nub run dev
```

## Deployment
```bash
nub exec wrangler deploy
```

## Stripe checkout

Stripe-hosted Checkout with Cash App Pay. Follow the
[Stripe setup guide](docs/stripe-setup.md) to configure local test payments,
Cloudflare variables, and live credentials. The guide also lists the remaining
idempotency and order-fulfillment work needed before accepting real orders.
