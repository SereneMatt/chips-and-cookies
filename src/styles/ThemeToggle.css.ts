import { style } from '@vanilla-extract/css'
import './theme.css'

export const toggle = style({
  "borderRadius": "9999px",
  "borderWidth": "1px",
  "borderStyle": "solid",
  "borderColor": "var(--chip-line)",
  "background": "var(--chip-bg)",
  "paddingInline": "0.75rem",
  "paddingBlock": "0.375rem",
  "fontSize": ".875rem",
  "lineHeight": "1.25rem",
  "fontWeight": 600,
  "color": "var(--sea-ink)",
  "boxShadow": "0 8px 22px rgba(30,90,72,0.08)",
  "transition": "color 150ms, background-color 150ms, border-color 150ms, opacity 150ms, transform 150ms",
  ":hover": {
    "transform": "translateY(-0.125rem)"
  }
})
