import type { ErrorComponentProps } from '@tanstack/react-router'
import * as styles from '#/styles/storefront.css'

export function StorefrontError({ reset }: ErrorComponentProps) {
  return (
    <main className={styles.errorPage}>
      <h1>The cookie jar is taking a moment.</h1>
      <p>We couldn’t load the shop. Please try again.</p>
      <button className={styles.button} onClick={reset}>
        Try again
      </button>
    </main>
  )
}
