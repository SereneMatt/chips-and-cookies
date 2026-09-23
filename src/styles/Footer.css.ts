import { style } from '@vanilla-extract/css'
import './theme.css'

export const footer = style({
  "marginTop": "5rem",
  "borderTopWidth": "1px",
  "borderTopStyle": "solid",
  "borderColor": "var(--line)",
  "paddingInline": "1rem",
  "paddingBottom": "3.5rem",
  "paddingTop": "2.5rem",
  "color": "var(--sea-ink-soft)"
})

export const content = style({
  "maxWidth": "80rem",
  "marginInline": "auto",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": "1rem",
  "textAlign": "center",
  "@media": {
    "screen and (min-width: 640px)": {
      "flexDirection": "row",
      "textAlign": "left"
    }
  }
})

export const copyright = style({
  "margin": "0rem",
  "fontSize": ".875rem",
  "lineHeight": "1.25rem"
})

export const kicker = style({
  "fontSize": ".625rem",
  "fontWeight": 700,
  "letterSpacing": ".12em",
  "textTransform": "uppercase",
  "margin": "0rem"
})

export const socials = style({
  "marginTop": "1rem",
  "display": "flex",
  "justifyContent": "center",
  "gap": "1rem"
})

export const socialLink = style({
  "borderRadius": ".75rem",
  "padding": "0.5rem",
  "color": "var(--sea-ink-soft)",
  "transition": "color 150ms, background-color 150ms, border-color 150ms, opacity 150ms, transform 150ms",
  ":hover": {
    "background": "var(--link-bg-hover)",
    "color": "var(--sea-ink)"
  }
})

export const srOnly = style({
  "position": "absolute",
  "width": "1px",
  "height": "1px",
  "padding": 0,
  "margin": "-1px",
  "overflow": "hidden",
  "clip": "rect(0, 0, 0, 0)",
  "whiteSpace": "nowrap",
  "borderWidth": 0
})
