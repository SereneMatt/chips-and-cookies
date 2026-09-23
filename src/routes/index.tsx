import * as styles from '#/styles/storefront.css'
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { beginStripeCheckout } from "#/server/payments/stripe.functions";
import { money, snacks, type Snack } from "#/data/snacks";
import { Icon } from "#/components/Icon";
import { StoreFooter } from "#/components/StoreFooter";
import { StoreHeader } from "#/components/StoreHeader";

export const Route = createFileRoute("/")({
  loader: () => ({ products: snacks }),
  head: () => ({
    meta: [
      { title: "Chips & Cookies — A little crunch. A lot of joy." },
      { name: "description", content: "Find your happy snack. Discover cookies, crispy chips and sweet-and-salty bundles at Chips & Cookies." }
    ]
  }),
  errorComponent: ({ reset }) => (
    <main className={styles.errorPage}>
      <h1>The cookie jar is taking a moment.</h1>
      <p>We couldn’t load the shop. Please try again.</p>
      <button className={styles.button} onClick={reset}>
        Try again
      </button>
    </main>
  ),
  component: Storefront
});

function Storefront() {
  const { products } = Route.useLoaderData();
  const [category, setCategory] = useState("All snacks");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("favorites");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<Snack | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [checkoutPending, setCheckoutPending] = useState(false);
  const startCheckout = useServerFn(beginStripeCheckout);
  const bag = useRef<HTMLDialogElement>(null);
  const detail = useRef<HTMLDialogElement>(null);
  const storageKey = "chips-cookies-bag";
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(storageKey) || "{}");
      if (saved && typeof saved === "object" && !Array.isArray(saved)) {
        setQuantities(Object.fromEntries(Object.entries(saved).filter(([id, q]) => products.some((p) => p.id === id) && typeof q === "number" && Number.isInteger(q) && q > 0 && q <= 99)));
      }
    } catch {
      /* An unavailable or corrupted browser store starts an empty bag. */
    }
    setReady(true);
  }, [storageKey, products]);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(quantities));
      } catch {
        /* Shopping still works without persistence. */
      }
    }
  }, [quantities, ready, storageKey]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 2500);
    return () => clearTimeout(timer);
  }, [notice]);
  const lines = products.filter((p) => quantities[p.id]).map((p) => ({ ...p, quantity: quantities[p.id] }));
  const count = lines.reduce((sum, p) => sum + p.quantity, 0);
  const currencies = [...new Set(lines.map((p) => p.currency))];
  const total = lines.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const shown = products
    .filter((p) => (category === "All snacks" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0));
  function add(p: Snack) {
    setQuantities((q) => ({ ...q, [p.id]: Math.min(99, (q[p.id] || 0) + 1) }));
    setNotice(`${p.name} added to your bag`);
  }
  function change(id: string, delta: number) {
    setQuantities((q) => ({ ...q, [id]: Math.max(0, Math.min(99, (q[id] || 0) + delta)) }));
    setError("");
  }
  function openBag() {
    setError("");
    bag.current?.showModal();
  }
  async function pay() {
    setCheckoutPending(true);
    setError("");
    try {
      const result = await startCheckout({ data: { items: lines.map(({ id, quantity }) => ({ id, quantity })) } });
      window.location.assign(result.checkoutUrl);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not open secure checkout.");
      setCheckoutPending(false);
    }
  }
  const displayedCount = count;
  return (
    <>
      <StoreHeader itemCount={displayedCount} onOpenBag={openBag} />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <span className={styles.tinySpark}>✳</span> MADE FOR YOUR SNACK BREAK
            </span>
            <h1>
              A little crunch.
              <br />A lot of <em>joy.</em>
            </h1>
            <p>
              Soft cookies. Crispy chips. The sweet and salty
              <br className={styles.desktopBreak} /> little things that make your day a whole lot better.
            </p>
            <a className={styles.button} href="#catalogue">
              Find your happy snack <Icon name="arrow" />
            </a>
            <div className={styles.heroNote}>
              <span>♡</span> For sharing. Or keeping all to yourself.
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <img src="/images/cookies.jpg" alt="Fresh chocolate chip cookies cooling on a wire rack" fetchPriority="high" />
            <div className={styles.roundStamp}>
              SWEET + SALTY
              <span>
                the perfect
                <br />
                <em>little break</em>
              </span>
              HAPPINESS INSIDE
            </div>
            <div className={styles.photoCaption}>Meet your new everyday favorites. ↗</div>
          </div>
        </section>
        <div className={styles.promiseStrip}>
          <span>✳ A little sweet</span>
          <span>✧ A little salty</span>
          <span>♡ A whole lot to love</span>
          <span>✳ Better together</span>
        </div>
        <section className={styles.catalogue} id="catalogue">
          <div className={styles.sectionTitle}>
            <div>
              <span className={styles.eyebrow}>OPEN THE COOKIE JAR</span>
              <h2>What are you craving?</h2>
            </div>
            <p>Pick your favorites. Make a little moment of it.</p>
          </div>
          <div className={styles.catalogueTools}>
            <div className={styles.tabs} role="group" aria-label="Snack category">
              {["All snacks", "Cookies", "Chips", "Bundles"].map((c) => (
                <button key={c} aria-pressed={category === c} className={category === c ? styles.active : undefined} onClick={() => setCategory(c)}>
                  {c === "Cookies" ? "◌ " : c === "Chips" ? "◒ " : c === "Bundles" ? "▧ " : ""}
                  {c}
                </button>
              ))}
            </div>
            <div className={styles.searchSort}>
              <label className={styles.search}>
                <Icon name="search" />
                <input aria-label="Search snacks" placeholder="Find a favorite…" value={query} onChange={(e) => setQuery(e.target.value)} />
              </label>
              <select aria-label="Sort snacks" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="favorites">Our favorites</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>
          </div>
          <p className={styles.sampleNote}>Small-batch favorites, picked by us and packed with care.</p>
          <div className={styles.productGrid}>
            {shown.map((p, i) => (
              <article data-testid="snack-card" className={`${styles.snackCard} ${[styles.snack0, styles.snack1, styles.snack2, styles.snack3][i % 4]}`} key={p.id}>
                <button
                  className={styles.productPicture}
                  onClick={() => {
                    setSelected(p);
                    detail.current?.showModal();
                  }}
                  aria-label={`View ${p.name}`}
                >
                  <img src={p.image} alt={p.name} loading="lazy" />
                  {p.badge && <span className={styles.productBadge}>{p.badge}</span>}
                  <span className={styles.viewProduct}>Take a closer look ↗</span>
                </button>
                <div className={styles.productMeta}>
                  <span>{p.category}</span>
                  <span>SMALL-BATCH FAVORITE</span>
                </div>
                <div className={styles.productTitle}>
                  <h3>{p.name}</h3>
                  <span>{money(p.price, p.currency)}</span>
                </div>
                <button className={styles.addButton} disabled={!p.available || !ready} onClick={() => add(p)}>
                  {p.available ? "Add to bag" : "Sold out"}
                  <span>+</span>
                </button>
              </article>
            ))}
          </div>
          {shown.length === 0 && (
            <div className={styles.empty}>
              <h3>No crumbs here.</h3>
              <p>Try another snack or search.</p>
              <button
                className={styles.button}
                onClick={() => {
                  setCategory("All snacks");
                  setQuery("");
                }}
              >
                See all snacks
              </button>
            </div>
          )}
        </section>
        <section id="story" className={styles.story}>
          <div className={styles.storyIllustration} aria-hidden="true">
            &
          </div>
          <div>
            <span className={styles.eyebrow}>SWEET TOOTH. SALTY SOUL.</span>
            <h2>
              Life’s better with
              <br />a little bit of both.
            </h2>
            <p>We’re here for the afternoon pick-me-up, the movie-night handful, and the “just one more” cookie. A happy little place for your favorite snacks — and your next favorite, too.</p>
            <a href="#catalogue">
              Find your perfect pair <span>↗</span>
            </a>
          </div>
        </section>
        <section className={styles.faq} id="faq">
          <span className={styles.eyebrow}>GOOD TO KNOW</span>
          <h2>A few little details.</h2>
          <details>
            <summary>How does ordering work?</summary>
              <p>Choose your snacks and add them to your bag. Secure Cash App Pay and order confirmation are handled through Stripe Checkout.</p>
          </details>
          <details>
            <summary>What about ingredients and allergens?</summary>
            <p>
              Check each product’s details before ordering. Sample cookies contain wheat, milk, eggs and soy. Final ingredients, pack sizes and cross-contact information must be confirmed on the live
              product listing.
            </p>
          </details>
          <details>
            <summary>Where do you deliver?</summary>
            <p>Available US destinations, shipping rates and delivery estimates will appear in Stripe Checkout once the shop opens.</p>
          </details>
        </section>
      </main>
      <StoreFooter />
      <div role="status" className={`${styles.toast} ${notice ? styles.visible : ""}`}>
        {notice}
      </div>
      <dialog ref={detail} className={styles.productDialog}>
        <button className={styles.close} aria-label="Close product details" onClick={() => detail.current?.close()}>
          <Icon name="close" />
        </button>
        {selected && (
          <>
            <img src={selected.image} alt={selected.name} />
            <div className={styles.detailCopy}>
              <span className={styles.eyebrow}>{selected.category}</span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <strong>{money(selected.price, selected.currency)}</strong>
              <button
                className={styles.button}
                disabled={!selected.available || !ready}
                onClick={() => {
                  add(selected);
                  detail.current?.close();
                }}
              >
                Add to bag <span>+</span>
              </button>
            </div>
          </>
        )}
      </dialog>
      <dialog ref={bag} className={styles.bagDialog}>
        <div className={styles.bagHeading}>
          <span className={styles.eyebrow}>YOUR HAPPY LITTLE HAUL</span>
          <button className={styles.close} aria-label="Close shopping bag" onClick={() => bag.current?.close()}>
            <Icon name="close" />
          </button>
          <h2>Your bag ({count})</h2>
        </div>
        {count === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>◌</span>
            <h3>Your next happy snack is waiting.</h3>
            <p>Let’s put something good in here.</p>
            <button className={styles.button} onClick={() => bag.current?.close()}>
              Explore the snacks <Icon name="arrow" />
            </button>
          </div>
        ) : (
          <>
            <div className={styles.bagLines}>
              {lines.map((p) => (
                <div className={styles.bagLine} key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <div>
                    <h3>{p.name}</h3>
                    <span>{money(p.price, p.currency)}</span>
                    <div className={styles.quantity}>
                      <button aria-label={`Remove one ${p.name}`} onClick={() => change(p.id, -1)}>
                        −
                      </button>
                      <output>{p.quantity}</output>
                      <button aria-label={`Add one ${p.name}`} disabled={p.quantity >= 99} onClick={() => change(p.id, 1)}>
                        +
                      </button>
                      <button className={styles.remove} onClick={() => change(p.id, -p.quantity)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bagSummary}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <strong>{money(total, currencies[0] ?? "USD")}</strong>
              </div>
              <p>Shipping calculated at Stripe checkout.</p>
              {error && (
                <p role="alert" className={styles.error}>
                  {error}
                </p>
              )}
              <button className={styles.button} disabled={checkoutPending} onClick={pay}>
                {checkoutPending ? "Opening Cash App Pay…" : "Continue to secure checkout"}
                <Icon name="arrow" />
              </button>
              <small>Secure Cash App Pay & order confirmation by Stripe</small>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
