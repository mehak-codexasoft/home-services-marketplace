import { useState } from 'react'
import Icon from './Icons'
import { modules } from '../data/content'

function ModuleVisual({ type }) {
  if (type === 'booking') {
    const rows = [
      { t: 'Deep home cleaning', c: 'Today · 10:00 · Dubai Marina', s: 'Confirmed', chip: 'success' },
      { t: 'AC servicing — 4 units', c: 'Today · 11:30 · Business Bay', s: 'En Route', chip: 'info' },
      { t: 'Bridal salon at home', c: 'Tomorrow · 15:00 · Abu Dhabi', s: 'Scheduled', chip: 'warning' },
    ]
    return (
      <div className="module-visual">
        {rows.map((r) => (
          <div className="mv-row" key={r.t}>
            <div className="mv-avatar" style={{ background: '#5a3df0' }}>
              {Icon.calendar(18)}
            </div>
            <div className="mv-row__body">
              <b>{r.t}</b>
              <span>{r.c}</span>
            </div>
            <span className={`chip chip--${r.chip}`}>{r.s}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'providers') {
    const rows = [
      { n: 'Sparkle Home Cleaning', c: 'Cleaning · Online', v: 98, bg: '#17b9a6', r: '4.9' },
      { n: 'CoolBreeze AC Experts', c: 'AC & Cooling · Online', v: 96, bg: '#5a3df0', r: '4.8' },
      { n: 'FlowFix Plumbing', c: 'Plumbing · Online', v: 96, bg: '#2f9e6f', r: '4.8' },
    ]
    return (
      <div className="module-visual">
        {rows.map((r) => (
          <div className="mv-row" key={r.n}>
            <div className="mv-avatar" style={{ background: r.bg }}>
              {r.n.charAt(0)}
            </div>
            <div className="mv-row__body">
              <b>{r.n}</b>
              <span>{r.c}</span>
              <div className="mv-bar">
                <i style={{ width: `${r.v}%` }} />
              </div>
            </div>
            <span className="chip chip--success">★ {r.r}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'payments') {
    const rows = [
      { id: 'PAY-30871', t: 'Plumbing · Apple Pay', s: 'Paid', chip: 'success', a: 'AED 180' },
      { id: 'PAY-30869', t: 'Pest Control · Wallet', s: 'Payout Pending', chip: 'warning', a: 'AED 240' },
      { id: 'PAY-30868', t: 'Cleaning · Card', s: 'Paid', chip: 'success', a: 'AED 290' },
    ]
    return (
      <div className="module-visual">
        {rows.map((r) => (
          <div className="mv-row" key={r.id}>
            <div className="mv-avatar" style={{ background: '#2c1c86' }}>
              {Icon.card(18)}
            </div>
            <div className="mv-row__body">
              <b>{r.a}</b>
              <span>{r.id} · {r.t}</span>
            </div>
            <span className={`chip chip--${r.chip}`}>{r.s}</span>
          </div>
        ))}
      </div>
    )
  }

  // tracking
  const steps = [
    { r: 'Booking confirmed', ok: true },
    { r: 'Provider en route', ok: true },
    { r: 'In progress', ok: false },
  ]
  return (
    <div className="module-visual">
      {steps.map((s, i) => (
        <div className="mv-row" key={i}>
          <div
            className="mv-avatar"
            style={{ background: s.ok ? '#2fa96a' : '#eef2f8', color: s.ok ? '#fff' : '#8493ad' }}
          >
            {s.ok ? Icon.check(18) : i + 1}
          </div>
          <div className="mv-row__body">
            <b>Step {i + 1}</b>
            <span>{s.r}</span>
          </div>
          <span className={`chip chip--${s.ok ? 'success' : 'neutral'}`}>
            {s.ok ? 'Done' : 'Active'}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Modules() {
  const [active, setActive] = useState(0)
  const m = modules[active]

  return (
    <section className="section modules" id="modules">
      <div className="container">
        <div className="section-head--center reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title center">
            Two apps and an operations core, working as one
          </h2>
          <p className="section-lead">
            Booking, providers, payments, and live tracking are built as clean,
            independent domains — each solving a distinct part of the journey.
          </p>
        </div>

        <div className="module-tabs reveal">
          {modules.map((mod, i) => (
            <button
              key={mod.key}
              className={`module-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {Icon[mod.icon](17)} {mod.tab}
            </button>
          ))}
        </div>

        <div className="module-panel reveal" key={m.key}>
          <div>
            <span className="module-panel__badge">{Icon[m.icon](15)} {m.badge}</span>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
            <ul className="module-checklist">
              {m.points.map((p) => (
                <li key={p}>
                  <span className="tick">{Icon.check(14)}</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <ModuleVisual type={m.visual} />
        </div>
      </div>
    </section>
  )
}
