<!-- intent-skills:start -->
## Skill Loading

Before editing files for a substantial task:
- Run `nub dlx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `nub dlx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Project context

- Brand: Chips & Cookies. Responsive custom cookie/chip catalogue, browser-persisted cart, Stripe Checkout using Cash App Pay, and server-verified order confirmation. No Shopify runtime dependency.
- Exact requested scaffold: `npx @tanstack/cli@latest create my-tanstack-app --agent --package-manager pnpm --tailwind --deployment cloudflare --template shopify-storefront`.
- CLI 0.71.0 failed the template alias: no template registry configured. Its shipped `shopify-storefront` add-on contains the requested starter. Successful fallback: `npx @tanstack/cli@latest create my-tanstack-app --agent --package-manager pnpm --tailwind --deployment cloudflare --add-ons shopify-storefront`.
- Scratch scaffold `/tmp/chips-cookies-scaffold/my-tanstack-app` was merged into the actual repo. Shopify-specific routes, code, and runtime dependency were subsequently removed; Cloudflare and TanStack structure remain. Do not overwrite the user's `.node-version`.
- Follow-up commands run: `npx @tanstack/intent@latest install` and `npx @tanstack/intent@latest list`. Install required interactive skill permissions and dependencies first; both subsequently succeeded.
- Loaded shipped skills using `npx @tanstack/intent@latest load`: `@tanstack/react-start#react-start`, `@tanstack/start-client-core#start-core/server-functions`, `@tanstack/start-client-core#start-core/deployment`. CLI create-app-scaffold skill was also read.
- Stack: React 19, TanStack Start/Router/Query, Valibot, vanilla-extract, Vite 8, TypeScript, nub 0.9.3, Cloudflare Workers. CSS is authored in typed `.css.ts` files; Tailwind dependencies and utilities are removed. Use nub for installs/scripts; `nub.lock` locks dependencies and `package.json` allowScripts carries build permissions.
- `src/data/snacks.ts` is the editable, self-contained product catalogue (name, description, price, currency, image, category, availability). `src/routes/index.tsx` renders it and maintains the bag in `localStorage` under `chips-cookies-bag`; `/shop/cart` reads and edits the same bag. To change products, edit `snacks` there. Checkout sends only product IDs and quantities; the server revalidates them against the catalogue and uses catalogue prices, never client-supplied prices.
- Reusable storefront UI belongs in `src/components/` (currently `StoreHeader`, `StoreFooter`, and `Icon`); route components keep page-specific state and layout. Avoid using the unused TanStack demo header/theme toggle as the storefront shell.
- Stripe Checkout creates payment sessions from the custom catalogue. The order confirmation route verifies payment status with Stripe server-side and never trusts client parameters alone. A confirmed purchase clears the browser bag.
- No Shopify credentials or external catalogue are required.
- Cloudflare: generated Vite adapter, nodejs_compat, server-entry and deploy script retained. `vite.config.ts` clears vanilla-extract SSR helper externals before Cloudflare validates its Worker environment; the helpers are bundled into the Worker. `nub exec wrangler login`, configure secrets, then `nub run deploy`. No deployment performed.
- Stripe Cash App Pay: configure `STRIPE_SECRET_KEY` as a Cloudflare Worker secret (`nub exec wrangler secret put STRIPE_SECRET_KEY`), and `STRIPE_SHIPPING_RATE_ID` plus `PUBLIC_APP_URL` as Worker vars and in local `.env.local` (copy `.env.example`). Use either `.env.local`/`.env` or `.dev.vars` for local Worker variables, never both. Create a USD shipping rate in the Stripe Dashboard and use an HTTPS production URL. Stripe-hosted Checkout is used; payment details never enter the app. Cash App Pay requires a US-based Stripe business and USD-priced products. Current catalogue prices are illustrative; set business-ready prices in `src/data/snacks.ts`. Stripe API credentials are only read by `src/server/payments/stripe.functions.ts`.
- CodeRabbit: `.coderabbit.yaml`; install https://github.com/apps/coderabbitai for this repo and open PRs. External tooling only; no runtime SDK or custom workflow. GitHub App not installed by this task.
- Gotchas: `src/data/snacks.ts` is the price authority for Stripe sessions; never accept price values from the browser. Cash App Pay only accepts USD and US shipping addresses. The app has no inventory service, so update `available` in the catalogue manually.
- Validation: `nub run typecheck`, `nub run build`, desktop/mobile browser flow checks (docs/browser-smoke.mjs). Live payment/confirmation requires a Stripe test account with Cash App Pay enabled; it was not exercised.
- Next steps: replace illustrative catalogue copy, prices, ingredients, allergens and images; configure Stripe Cash App Pay and shipping; test complete purchase and declined/cancelled payment; Cloudflare deploy/domain; install CodeRabbit GitHub App. See README for exact steps.

- Migration: `nub pm use nub@0.9.3` preserved locked versions and migrated build permissions. Removed pnpm lock/workspace files and cached pnpm executables. Historical scaffold commands retain their exact original flags; never reinstall pnpm to run this project.
