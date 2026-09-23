import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  color: { background: '#faf7ef', foreground: '#34291f', muted: '#746958', line: '#ded9ce', accent: '#bf4a2d', onAccent: '#fff9ed' },
  radius: '0.5rem',
})
// Shared names used by storefront components and dynamic image placeholders.
globalStyle(':root', {
  vars: {
    '--storefront-bg': theme.color.background,
    '--storefront-fg': theme.color.foreground,
    '--storefront-fg-muted': theme.color.muted,
    '--storefront-line': theme.color.line,
    '--storefront-accent': theme.color.accent,
    '--storefront-accent-fg': theme.color.onAccent,
    '--storefront-radius': theme.radius,
    '--sea-ink': theme.color.foreground,
    '--sea-ink-soft': theme.color.muted,
    '--chip-bg': theme.color.background,
    '--chip-line': theme.color.line,
    '--header-bg': theme.color.background,
    '--link-bg-hover': '#ede9db',
  },
})
export const prose = style({ maxWidth: '65ch', lineHeight: 1.7 })
globalStyle(`${prose} h1, ${prose} h2, ${prose} h3`, { fontWeight: 600, letterSpacing: '-0.02em', marginTop: '1.5em' })
globalStyle(`${prose} p`, { margin: '0.75em 0' })
globalStyle(`${prose} a`, { color: theme.color.accent, textDecoration: 'underline', textUnderlineOffset: '2px' })
