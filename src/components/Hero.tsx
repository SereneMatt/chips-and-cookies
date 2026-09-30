import { button, desktopBreak } from '#/styles/storefront.css'
import {
  cookie,
  copy,
  description,
  heading,
  hero,
  note,
  salt,
  scene,
  snowBack,
  snowFront,
  snowGround,
  traveler,
  word,
  words,
} from './Hero.css'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className={hero}>
      <div className={copy}>
        <h1 className={heading}>
          A little crunch.
          <br />A lot of{' '}
          <em className={words} aria-label="sweet and salt">
            <span className={word} aria-hidden="true">sweet.</span>
            <span className={`${word} ${salt}`} aria-hidden="true">salt.</span>
          </em>
        </h1>
        <p className={description}>
          Soft cookies. Crispy chips. The sweet and salty
          <br className={desktopBreak} /> little things that make your day a whole lot better.
        </p>
        <a className={button} href="#catalogue">
          Find your happy snack <Icon name="arrow" />
        </a>
        <div className={note}>
          <span>♡</span> For sharing. Or keeping all to yourself.
        </div>
      </div>
      <div className={scene} aria-hidden="true">
        <div className={snowBack} />
        <div className={snowGround} />
        <div className={traveler}>
          <svg className={cookie} viewBox="0 0 100 100" focusable="false">
            <circle cx="50" cy="50" r="46" fill="#cf8b44" />
            <circle cx="50" cy="48" r="41" fill="#edb76d" stroke="#e0a054" strokeWidth="3" />
            <path d="m28 23 9 3-2 10-10-3zm32-5 10 4-4 9-9-3zm13 33 8 5-5 10-9-4zM40 63l11-2 3 10-12 3zM20 49l8-4 5 8-8 6zM57 40l8 1-1 9-9-2z" fill="#593322" />
            <g fill="#c78b47">
              <circle cx="46" cy="22" r="2" /><circle cx="36" cy="48" r="2" />
              <circle cx="63" cy="73" r="2" /><circle cx="25" cy="70" r="2" />
              <circle cx="78" cy="36" r="2" /><circle cx="49" cy="82" r="2" />
            </g>
          </svg>
        </div>
        <div className={snowFront} />
      </div>
    </section>
  )
}
