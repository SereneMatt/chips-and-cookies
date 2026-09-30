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

const travel = keyframes({
  from: { transform: 'translateX(calc(-50vw - 100%))' },
  to: { transform: 'translateX(-50%)' },
})
const roll = keyframes({
  from: { transform: 'rotate(-540deg)' },
  to: { transform: 'rotate(0deg)' },
})
export const traveler = style({
  position: 'absolute', bottom: 46, left: '50%',
  width: 'clamp(180px, 24vw, 260px)', height: 'clamp(180px, 24vw, 260px)',
  transform: 'translateX(-50%)',
  animation: `${travel} 3.5s cubic-bezier(0.22, 1, 0.36, 1) both`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})
export const cookie = style({
  display: 'block', width: '100%', height: '100%',
  filter: 'drop-shadow(0 8px 4px #5a392522)',
  animation: `${roll} 3.5s cubic-bezier(0.22, 1, 0.36, 1) both`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})
export const snowFront = style({
  position: 'absolute', width: '120%', left: '-10%', height: 77, bottom: -25,
  borderRadius: '45% 70% 0 0', background: '#ffffff', transform: 'rotate(2deg)',
})

const rotateWord = keyframes({
  '0%, 40%, 100%': { opacity: 1, transform: 'translateY(0)' },
  '48%': { opacity: 0, transform: 'translateY(-0.3em)' },
  '50%, 90%': { opacity: 0, transform: 'translateY(0.3em)' },
})

export const words = style({
  display: 'inline-grid',
  verticalAlign: 'baseline',
  color: 'var(--orange)',
  fontWeight: 500,
})

export const word = style({
  gridArea: '1 / 1',
  animation: `${rotateWord} 6s ease-in-out infinite`,
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
