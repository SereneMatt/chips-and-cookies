import * as styles from '#/styles/storefront.css'
import { HeadContent, Scripts, createRootRouteWithContext, useRouterState } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "Chips & Cookies" }], links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" }] }),
  notFoundComponent: () => (
    <main className={styles.errorPage}>
      <h1>Just crumbs here.</h1>
      <p>That page doesn’t exist.</p>
      <a className={styles.button} href="/">
        Back to the snack shop
      </a>
    </main>
  ),
  shellComponent: RootDocument
});
function RootDocument({ children }: { children: React.ReactNode }) {
  const home = useRouterState({ select: (s) => s.location.pathname === "/" });
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {!home && (
          <header className={styles.secondaryHeader}>
            <a className={styles.wordmark} href="/">
              chips<span>&</span>cookies
            </a>
            <div>
              <a href="/">← Snack shop</a> · <a href="/shop/cart">Shopping bag →</a>
            </div>
          </header>
        )}
        {children}
        <Scripts />
      </body>
    </html>
  );
}
