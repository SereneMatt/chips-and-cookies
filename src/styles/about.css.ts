import { style } from '@vanilla-extract/css'
import './theme.css'

export const page = style({
  "maxWidth": "80rem",
  "marginInline": "auto",
  "paddingInline": "1rem",
  "paddingBlock": "3rem"
})

export const panel = style({
  "background": "#ede9db",
  "borderRadius": "1rem",
  "padding": "1.5rem",
  "@media": {
    "screen and (min-width: 640px)": {
      "padding": "2rem"
    }
  }
})

export const kicker = style({
  "fontSize": ".625rem",
  "fontWeight": 700,
  "letterSpacing": ".12em",
  "textTransform": "uppercase",
  "marginBottom": "0.5rem"
})

export const title = style({
  "marginBottom": "0.75rem",
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem",
  "fontWeight": 700,
  "color": "var(--sea-ink)",
  "@media": {
    "screen and (min-width: 640px)": {
      "fontSize": "3rem",
      "lineHeight": "1"
    }
  }
})

export const description = style({
  "margin": "0rem",
  "maxWidth": "48rem",
  "fontSize": "1rem",
  "lineHeight": "2rem",
  "color": "var(--sea-ink-soft)"
})
