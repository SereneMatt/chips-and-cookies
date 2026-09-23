import * as styles from '#/styles/storefront.css'

export function StoreFooter() {
  return (
    <footer className={styles.storeFooter}>
      <a className={styles.wordmark} href="/">
        chips<span>&</span>cookies
      </a>
      <p>A little crunch. A lot of joy.</p>
      <a href="#catalogue">Back to the good stuff ↑</a>
      <small>© {new Date().getFullYear()} Chips & Cookies. Sweet meets salty.</small>
    </footer>
  )
}
