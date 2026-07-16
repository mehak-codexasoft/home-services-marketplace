import { useEffect, useRef, useState } from 'react'

// Animates the numeric part of `value` up from zero when scrolled into view.
// Preserves any non-numeric prefix/suffix and comma / decimal formatting.
// e.g. "2,400" · "4.8" · "94%"  (a plain "8" counts up too)
function parse(value) {
  const m = String(value).match(/^([^\d]*)([\d,.]+)(.*)$/)
  if (!m) return null
  const rawNum = m[2].replace(/,/g, '')
  return {
    prefix: m[1],
    suffix: m[3],
    target: parseFloat(rawNum),
    decimals: (rawNum.split('.')[1] || '').length,
    grouped: m[2].includes(','),
  }
}

function format(n, { prefix, suffix, decimals, grouped }) {
  const fixed = n.toFixed(decimals)
  const num = grouped
    ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : fixed
  return prefix + num + suffix
}

export default function CountUp({ value, duration = 1500 }) {
  const ref = useRef(null)
  const spec = parse(value)
  const [display, setDisplay] = useState(spec ? format(0, spec) : value)

  useEffect(() => {
    if (!spec) { setDisplay(value); return }
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setDisplay(format(spec.target, spec))
      return
    }

    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(format(spec.target * eased, spec))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <span ref={ref}>{display}</span>
}
