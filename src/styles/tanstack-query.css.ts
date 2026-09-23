import { style, globalStyle } from '@vanilla-extract/css'
import './theme.css'

export const page = style({
  "padding": "48px 24px",
  "display": "flex",
  "justifyContent": "center"
})

export const panel = style({
  "padding": "32px",
  "background": "#ede9db",
  "borderRadius": "8px",
  "width": "100%",
  "maxWidth": "42rem"
})

export const kicker = style({
  "fontSize": ".625rem",
  "fontWeight": 700,
  "letterSpacing": ".12em",
  "textTransform": "uppercase",
  "marginBottom": "0.5rem"
})

export const title = style({
  "fontSize": "2rem",
  "marginBottom": "1.5rem"
})

export const list = style({
  "marginBottom": "1rem"
})

export const item = style({
  "padding": "12px",
  "background": "#faf7ef"
})

export const name = style({
  "fontSize": "1rem",
  "lineHeight": "1.5rem",
  "fontWeight": 500
})

globalStyle(`${list} > * + *`, {
  "marginTop": "0.5rem"
})
