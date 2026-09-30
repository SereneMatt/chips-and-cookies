import { keyframes, style } from '@vanilla-extract/css'

export const hero = style({
  position: 'relative',
  overflow: 'hidden',
  isolation: 'isolate',
  textAlign: 'center',
  background: 'radial-gradient(circle at 20% 30%, #fff 0 2px, transparent 3px) 0 0 / 110px 100px, radial-gradient(circle at 70% 60%, #fff 0 3px, transparent 4px) 0 0 / 170px 140px, linear-gradient(180deg, #e6f0f4 0%, #f5f9fb 75%, #fff 100%)',
  padding: '48px 24px 320px',
  '@media': { '(max-width: 760px)': { padding: '32px 20px 260px' } },
})

export const copy = style({ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' })
export const heading = style({
  fontSize: 'clamp(44px, 6vw, 82px)',
  letterSpacing: '-0.045em',
  lineHeight: 1.09,
  margin: '24px 0',
})
export const description = style({ fontSize: 14, lineHeight: 1.8, margin: '0 auto 28px', maxWidth: 480 })
export const note = style({
  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 9,
  fontSize: 11, color: '#837767', marginTop: 22,
})

export const scene = style({ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 290, pointerEvents: 'none' })
export const snowBack = style({
  position: 'absolute', width: '120%', left: '-10%', height: 130, bottom: -20,
  borderRadius: '50% 65% 0 0', background: '#e1ebee', transform: 'rotate(-3deg)',
})
export const snowGround = style({
  position: 'absolute', width: '120%', left: '-10%', height: 95, bottom: -10,
  borderRadius: '65% 40% 0 0', background: '#fafcfc',
  boxShadow: '0 -2px 20px #ffffff80',
})

/** Rolls in from off-screen with three soft hops, then settles. */
const travel = keyframes({
  '0%': { transform: 'translateX(calc(-50vw - 100%)) translateY(0) scale(1, 1)' },
  '18%': { transform: 'translateX(calc(-38vw - 70%)) translateY(-28px) scale(0.96, 1.04)' },
  '28%': { transform: 'translateX(calc(-30vw - 55%)) translateY(0) scale(1.06, 0.94)' },
  '38%': { transform: 'translateX(calc(-22vw - 40%)) translateY(-20px) scale(0.97, 1.03)' },
  '48%': { transform: 'translateX(calc(-14vw - 25%)) translateY(0) scale(1.04, 0.96)' },
  '60%': { transform: 'translateX(calc(-6vw - 10%)) translateY(-12px) scale(0.98, 1.02)' },
  '72%': { transform: 'translateX(-50%) translateY(0) scale(1.03, 0.97)' },
  '82%': { transform: 'translateX(-50%) translateY(-4px) scale(0.99, 1.01)' },
  '90%': { transform: 'translateX(-50%) translateY(0) scale(1.01, 0.99)' },
  '100%': { transform: 'translateX(-50%) translateY(0) scale(1, 1)' },
})

/** Spin that matches the hop journey, with a tiny overshoot into place. */
const roll = keyframes({
  '0%': { transform: 'rotate(-720deg)' },
  '72%': { transform: 'rotate(8deg)' },
  '82%': { transform: 'rotate(-4deg)' },
  '92%': { transform: 'rotate(2deg)' },
  '100%': { transform: 'rotate(0deg)' },
})

/** Soft breathing wobble once the cookie has arrived. */
const idle = keyframes({
  '0%, 100%': { transform: 'translateX(-50%) translateY(0) rotate(0deg)' },
  '35%': { transform: 'translateX(-50%) translateY(-3px) rotate(-1.5deg)' },
  '70%': { transform: 'translateX(-50%) translateY(-1px) rotate(1.2deg)' },
})

const gleam = keyframes({
  '0%, 100%': { opacity: 0.15, transform: 'scale(0.85)' },
  '50%': { opacity: 0.55, transform: 'scale(1.05)' },
})

export const traveler = style({
  position: 'absolute', bottom: 46, left: '50%',
  width: 'clamp(180px, 24vw, 260px)', height: 'clamp(180px, 24vw, 260px)',
  transform: 'translateX(-50%)',
  transformOrigin: '50% 85%',
  animation: `${travel} 3.2s cubic-bezier(0.22, 1, 0.36, 1) both, ${idle} 3.6s ease-in-out 3.2s infinite`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})

export const cookie = style({
  display: 'block', width: '100%', height: '100%',
  filter: 'drop-shadow(0 8px 4px #5a392522)',
  transformOrigin: '50% 50%',
  animation: `${roll} 3.2s cubic-bezier(0.22, 1, 0.36, 1) both`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})

export const chipGleam = style({
  transformOrigin: 'center',
  animation: `${gleam} 2.8s ease-in-out 3.4s infinite`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none', opacity: 0.35 } },
})

export const snowFront = style({
  position: 'absolute', width: '120%', left: '-10%', height: 77, bottom: -25,
  borderRadius: '45% 70% 0 0', background: '#ffffff', transform: 'rotate(2deg)',
})

const rotateWord = keyframes({
  // Linear opacity hold + longer crossfade; salt uses -3s (half-cycle) delay.
  '0%, 42%': { opacity: 1 },
  '50%': { opacity: 0 },
  '50.01%, 92%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const words = style({
  display: 'inline-grid',
  position: 'relative',
  verticalAlign: 'baseline',
  justifyItems: 'start',
  color: 'var(--orange)',
  fontWeight: 500,
  fontStyle: 'italic',
})

/** Locks width to the longer label so the heading never reflows. */
export const wordMeasure = style({
  gridArea: '1 / 1',
  visibility: 'hidden',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  userSelect: 'none',
})

export const word = style({
  gridArea: '1 / 1',
  whiteSpace: 'nowrap',
  animation: `${rotateWord} 6s linear infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': { animation: 'none' },
  },
})

export const salt = style({
  animationDelay: '-3s',
  '@media': {
    '(prefers-reduced-motion: reduce)': { visibility: 'hidden' },
  },
})

/** Period rides with each word but uses the root text color, not orange. */
export const period = style({
  color: '#34291f',
  fontStyle: 'normal',
  fontWeight: 'inherit',
})
