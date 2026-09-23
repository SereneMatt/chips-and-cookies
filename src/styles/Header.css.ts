import { style } from '@vanilla-extract/css'
import './theme.css'

export const header = style({
  "position": "sticky",
  "top": "0rem",
  "zIndex": 50,
  "borderBottomWidth": "1px",
  "borderBottomStyle": "solid",
  "borderColor": "var(--line)",
  "background": "var(--header-bg)",
  "paddingInline": "1rem",
  "backdropFilter": "blur(16px)"
})

export const nav = style({
  "maxWidth": "80rem",
  "marginInline": "auto",
  "display": "flex",
  "flexWrap": "wrap",
  "alignItems": "center",
  "columnGap": "0.75rem",
  "rowGap": "0.5rem",
  "paddingBlock": "0.75rem",
  "@media": {
    "screen and (min-width: 640px)": {
      "paddingBlock": "1rem"
    }
  }
})

export const title = style({
  "margin": "0rem",
  "flexShrink": 0,
  "fontSize": "1rem",
  "lineHeight": "1.5rem",
  "fontWeight": 600,
  "letterSpacing": "-.025em"
})

export const brand = style({
  "display": "inline-flex",
  "alignItems": "center",
  "gap": "0.5rem",
  "borderRadius": "9999px",
  "borderWidth": "1px",
  "borderStyle": "solid",
  "borderColor": "var(--chip-line)",
  "background": "var(--chip-bg)",
  "paddingInline": "0.75rem",
  "paddingBlock": "0.375rem",
  "fontSize": ".875rem",
  "lineHeight": "1.25rem",
  "color": "var(--sea-ink)",
  "textDecoration": "none",
  "boxShadow": "0 8px 24px rgba(30,90,72,0.08)",
  "@media": {
    "screen and (min-width: 640px)": {
      "paddingInline": "1rem",
      "paddingBlock": "0.5rem"
    }
  }
})

export const dot = style({
  "height": "0.5rem",
  "width": "0.5rem",
  "borderRadius": "9999px",
  "background": "linear-gradient(90deg,#56c6be,#7ed3bf)"
})

export const links = style({
  "order": 3,
  "display": "flex",
  "width": "100%",
  "flexWrap": "wrap",
  "alignItems": "center",
  "columnGap": "1rem",
  "rowGap": "0.25rem",
  "paddingBottom": "0.25rem",
  "fontSize": ".875rem",
  "lineHeight": "1.25rem",
  "fontWeight": 600,
  "@media": {
    "screen and (min-width: 640px)": {
      "order": 0,
      "width": "auto",
      "flexWrap": "nowrap",
      "paddingBottom": "0rem"
    }
  }
})

export const link = style({
  "padding": "6px 0"
})

export const activeLink = style({
  "padding": "6px 0",
  "color": "#bf4a2d"
})

export const menu = style({
  "position": "relative",
  "width": "100%",
  "@media": {
    "screen and (min-width: 640px)": {
      "width": "auto"
    }
  }
})

export const summary = style({
  "padding": "6px 0",
  "listStyleType": "none",
  "cursor": "pointer"
})

export const dropdown = style({
  "marginTop": "0.5rem",
  "minWidth": "14rem",
  "borderRadius": ".75rem",
  "borderWidth": "1px",
  "borderStyle": "solid",
  "borderColor": "var(--line)",
  "background": "var(--header-bg)",
  "padding": "0.5rem",
  "boxShadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
  "@media": {
    "screen and (min-width: 640px)": {
      "position": "absolute",
      "right": "0rem"
    }
  }
})

export const menuLink = style({
  "display": "block",
  "borderRadius": ".5rem",
  "paddingInline": "0.75rem",
  "paddingBlock": "0.5rem",
  "fontSize": ".875rem",
  "lineHeight": "1.25rem",
  "color": "var(--sea-ink-soft)",
  "textDecoration": "none",
  "transition": "color 150ms, background-color 150ms, border-color 150ms, opacity 150ms, transform 150ms",
  ":hover": {
    "background": "var(--link-bg-hover)",
    "color": "var(--sea-ink)"
  }
})

export const actions = style({
  "marginLeft": "auto",
  "display": "flex",
  "alignItems": "center",
  "gap": "0.375rem",
  "@media": {
    "screen and (min-width: 640px)": {
      "gap": "0.5rem"
    }
  }
})

export const socialLink = style({
  "display": "none",
  "borderRadius": ".75rem",
  "padding": "0.5rem",
  "color": "var(--sea-ink-soft)",
  "transition": "color 150ms, background-color 150ms, border-color 150ms, opacity 150ms, transform 150ms",
  ":hover": {
    "background": "var(--link-bg-hover)",
    "color": "var(--sea-ink)"
  },
  "@media": {
    "screen and (min-width: 640px)": {
      "display": "block"
    }
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
