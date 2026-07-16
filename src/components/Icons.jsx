// Lightweight inline SVG icon set (stroke-based, currentColor)
const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const wrap = (children, size = 22) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...S}>
    {children}
  </svg>
)

export const Icon = {
  arrow: (s) => wrap(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>, s),
  arrowDown: (s) => wrap(<><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>, s),
  check: (s) => wrap(<path d="M20 6 9 17l-5-5" />, s),
  menu: (s) => wrap(<><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>, s),
  close: (s) => wrap(<><path d="M18 6 6 18" /><path d="M6 6l12 12" /></>, s),
  users: (s) =>
    wrap(
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>,
      s
    ),
  doc: (s) =>
    wrap(
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>,
      s
    ),
  flow: (s) =>
    wrap(
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3a3 3 0 0 0 3 3h6" />
      </>,
      s
    ),
  shield: (s) =>
    wrap(
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>,
      s
    ),
  compare: (s) =>
    wrap(
      <>
        <path d="M12 3v18" />
        <path d="M6 8H3l3-4 3 4H6v8" />
        <path d="M18 16h3l-3 4-3-4h3V8" />
      </>,
      s
    ),
  cart: (s) =>
    wrap(
      <>
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </>,
      s
    ),
  chart: (s) =>
    wrap(
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 3-4 3 3 5-7" />
      </>,
      s
    ),
  folder: (s) =>
    wrap(
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />,
      s
    ),
  wallet: (s) =>
    wrap(
      <>
        <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
        <path d="M21 12h-6a2 2 0 0 0 0 4h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
      </>,
      s
    ),
  clock: (s) => wrap(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>, s),
  mail: (s) =>
    wrap(
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </>,
      s
    ),
  eye: (s) =>
    wrap(
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>,
      s
    ),
  layers: (s) =>
    wrap(
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>,
      s
    ),
  trending: (s) =>
    wrap(<><path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></>, s),
  bolt: (s) => wrap(<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />, s),
  globe: (s) =>
    wrap(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>,
      s
    ),
  bell: (s) =>
    wrap(
      <>
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </>,
      s
    ),
  filter: (s) => wrap(<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" />, s),
  plus: (s) => wrap(<><path d="M12 5v14" /><path d="M5 12h14" /></>, s),
  grid: (s) =>
    wrap(
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>,
      s
    ),
  linkedin: (s) =>
    wrap(
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>,
      s
    ),
  twitter: (s) =>
    wrap(
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2Z" />,
      s
    ),
  building: (s) =>
    wrap(
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </>,
      s
    ),
  gauge: (s) =>
    wrap(<><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></>, s),
  home: (s) =>
    wrap(
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </>,
      s
    ),
  pin: (s) =>
    wrap(
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>,
      s
    ),
  navigation: (s) =>
    wrap(<path d="M3 11l19-9-9 19-2-8-8-2Z" />, s),
  star: (s) =>
    wrap(
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.9l-5.8 3.05 1.1-6.47L2.6 9.9l6.5-.95L12 2.5Z" />,
      s
    ),
  chat: (s) =>
    wrap(
      <>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M8 9h8M8 13h5" />
      </>,
      s
    ),
  calendar: (s) =>
    wrap(
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>,
      s
    ),
  wrench: (s) =>
    wrap(
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.3-.3-.3-2.3 2.9-2.7Z" />,
      s
    ),
  spark: (s) =>
    wrap(
      <>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        <path d="M12 8.5 13.4 11l2.6 1-2.6 1L12 15.5 10.6 13 8 12l2.6-1L12 8.5Z" />
      </>,
      s
    ),
  phone: (s) =>
    wrap(
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />,
      s
    ),
  card: (s) =>
    wrap(
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h4" />
      </>,
      s
    ),
  truck: (s) =>
    wrap(
      <>
        <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>,
      s
    ),
  heart: (s) =>
    wrap(
      <path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.5 0 5 3.5 3.5 6.5C19 15.65 12 20 12 20Z" />,
      s
    ),
}

export default Icon
