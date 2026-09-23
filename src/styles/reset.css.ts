import { globalStyle } from '@vanilla-extract/css'

// Minimal application reset, independent of any utility framework.
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: 'currentColor',
})
globalStyle('html', { lineHeight: 1.5, WebkitTextSizeAdjust: '100%', tabSize: 4 })
globalStyle('body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd', { margin: 0 })
globalStyle('h1, h2, h3, h4, h5, h6', { fontSize: 'inherit', fontWeight: 'inherit' })
globalStyle('button, input, select, textarea', {
  font: 'inherit', color: 'inherit', letterSpacing: 'inherit',
  background: 'transparent', borderRadius: 0, padding: 0,
})
globalStyle('button, input[type="button"], input[type="submit"]', { appearance: 'button' })
globalStyle('a', { color: 'inherit', textDecoration: 'inherit' })
globalStyle('ol, ul, menu', { listStyle: 'none', margin: 0, padding: 0 })
globalStyle('img, svg, video, canvas', { display: 'block', verticalAlign: 'middle' })
globalStyle('img, video', { maxWidth: '100%', height: 'auto' })
globalStyle('summary', { display: 'list-item' })
globalStyle('table', { borderCollapse: 'collapse', borderColor: 'inherit', textIndent: 0 })
globalStyle('[hidden]:not([hidden="until-found"])', { display: 'none' })
