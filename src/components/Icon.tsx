export type IconName = 'bag' | 'arrow' | 'search' | 'close'

export function Icon({ name }: { name: IconName }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {name === 'bag' ? (
        <>
          <path d="M5 7h14l1 14H4L5 7Z" />
          <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        </>
      ) : name === 'arrow' ? (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      ) : name === 'search' ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      ) : (
        <path d="m6 6 12 12M6 18 18 6" />
      )}
    </svg>
  )
}
