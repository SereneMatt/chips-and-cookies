import * as styles from '#/styles/storefront.css'
import { Icon } from './Icon'

export function StoreHeader({ itemCount, onOpenBag }: { itemCount: number; onOpenBag: () => void }) {
  return (
    <>
      <div className={styles.announcement}>
        GOOD SNACKS. GREAT LITTLE MOMENTS. <span>✦</span> SWEET MEETS SALTY.
      </div>
      <header className={styles.storeHeader}>
        <a className={styles.wordmark} href="/">
          chips<span>&</span>cookies<span className={styles.brandDot}>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#catalogue">The snack shop</a>
          <a href="#story">Our little story</a>
          <a href="#faq">Good to know</a>
        </nav>
        <button className={styles.bagButton} onClick={onOpenBag} aria-label={`Open shopping bag, ${itemCount} items`}>
          <Icon name="bag" />
          <span>Bag</span>
          <b>{itemCount}</b>
        </button>
      </header>
    </>
  )
}
