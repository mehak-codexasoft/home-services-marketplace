import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Icon from '../components/Icons'
import Modal from '../components/Modal'
import { useUI } from '../components/UIContext'
import useReveal from '../components/useReveal'
import {
  kpisByView,
  dashBookings,
  dashDispatch,
  dashProviders,
  dashPayments,
  dashReviews,
  bookingsByCategory,
  topProviders,
  revenueTrend,
  dashNav,
  serviceCategories,
  serviceAreas,
  providersList,
} from '../data/content'

const kpiColors = {
  brand: { bg: 'rgba(64,37,196,.1)', fg: '#4025c4' },
  coral: { bg: 'rgba(255,106,61,.16)', fg: '#ee4f22' },
  teal: { bg: 'rgba(23,185,166,.14)', fg: '#0f9b8c' },
  violet: { bg: 'rgba(90,61,240,.12)', fg: '#5a3df0' },
}

const initials = (name) => name.split(' ').map((w) => w[0]).join('').slice(0, 2)

function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= Math.round(n) ? '#f5a623' : '#d9e0ec' }}>
          {Icon.star(14)}
        </span>
      ))}
    </span>
  )
}

export default function Dashboard() {
  const { search } = useLocation()
  const startView = new URLSearchParams(search).get('view')
  const { notify } = useUI()

  const [view, setView] = useState(
    dashNav.some((n) => n.key === startView) ? startView : 'overview'
  )
  const [bookings, setBookings] = useState(dashBookings)
  const [dispatch, setDispatch] = useState(dashDispatch)
  const [newOpen, setNewOpen] = useState(false)
  const [detail, setDetail] = useState(null) // booking detail modal
  const counterRef = useState(() => ({ n: 0 }))[0]

  // Follow ?view= when it changes (e.g. footer links clicked from this page)
  useEffect(() => {
    const v = new URLSearchParams(search).get('view')
    if (v && dashNav.some((n) => n.key === v)) setView(v)
  }, [search])

  useReveal([view, bookings.length, dispatch.length])

  const current = dashNav.find((n) => n.key === view) || dashNav[0]

  const navBadges = { bookings: bookings.length, dispatch: dispatch.length }

  const addBooking = (b) => {
    counterRef.n += 1
    const id = `BK-${8050 + counterRef.n}`
    setBookings((prev) => [{ ...b, id, status: 'Scheduled', s: 'info' }, ...prev])
    setNewOpen(false)
    setView('bookings')
    notify({ title: 'Booking created', text: `${id} scheduled and confirmed.` })
  }

  const assign = (id, ok) => {
    setDispatch((prev) => prev.filter((d) => d.id !== id))
    notify({
      type: ok ? 'success' : 'error',
      title: ok ? 'Provider assigned' : 'Sent to manual dispatch',
      text: ok
        ? `${id} assigned to the nearest available provider.`
        : `${id} escalated for manual assignment.`,
    })
  }

  return (
    <div className="dash">
      <div className="dash__wrap">
        {/* Sidebar */}
        <aside className="dash__side">
          <div className="dash__side-label">Marketplace</div>
          {dashNav.slice(0, 5).map((n) => (
            <SideLink key={n.key} n={n} view={view} setView={setView} badge={navBadges[n.key] ?? n.badge} />
          ))}
          <div className="dash__side-label">Insight</div>
          {dashNav.slice(5).map((n) => (
            <SideLink key={n.key} n={n} view={view} setView={setView} badge={navBadges[n.key] ?? n.badge} />
          ))}
        </aside>

        {/* Main */}
        <main className="dash__main">
          <div className="dash__header">
            <div>
              <h1>{current.label}</h1>
              <p>Welcome back, Noura — here's your marketplace snapshot for July 2026.</p>
            </div>
            <div className="dash__header-actions">
              <button
                className="btn btn-outline"
                onClick={() => notify({ title: 'Export started', text: `${current.label} exported to CSV.` })}
              >
                {Icon.doc(17)} Export
              </button>
              <button className="btn btn-primary" onClick={() => setNewOpen(true)}>
                {Icon.plus(17)} New Booking
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="kpi-grid">
            {(kpisByView[view] || kpisByView.overview).map((k, i) => {
              const c = kpiColors[k.color]
              return (
                <div className="kpi reveal" data-delay={i * 55} key={k.label}>
                  <div className="kpi__top">
                    <span className="kpi__label">{k.label}</span>
                    <span className="kpi__icon" style={{ background: c.bg, color: c.fg }}>
                      {Icon[k.icon](20)}
                    </span>
                  </div>
                  <div className="kpi__value">{k.value}</div>
                  <span className={`chip chip--${k.up ? 'success' : 'warning'}`}>{k.trend}</span>
                </div>
              )
            })}
          </div>

          {/* View content */}
          {view === 'overview' && (
            <OverviewView bookings={bookings} dispatch={dispatch} assign={assign} openDetail={setDetail} />
          )}
          {view === 'bookings' && <BookingsView bookings={bookings} openDetail={setDetail} notify={notify} />}
          {view === 'dispatch' && <DispatchView dispatch={dispatch} assign={assign} />}
          {view === 'providers' && <ProvidersView notify={notify} />}
          {view === 'payments' && <PaymentsView notify={notify} />}
          {view === 'reviews' && <ReviewsView />}
          {view === 'analytics' && <AnalyticsView />}

          <p className="dash-note">
            Interactive demo of the Khidma operations console · Sample data · Built by CodexaSoft
          </p>
        </main>
      </div>

      <NewBookingModal open={newOpen} onClose={() => setNewOpen(false)} onSubmit={addBooking} />
      <BookingDetailModal detail={detail} onClose={() => setDetail(null)} />
    </div>
  )
}

/* ---------- Sidebar link ---------- */
function SideLink({ n, view, setView, badge }) {
  return (
    <button className={`dash-navlink ${view === n.key ? 'active' : ''}`} onClick={() => setView(n.key)}>
      {Icon[n.icon](19)} {n.label}
      {badge != null && <span className="badge">{badge}</span>}
    </button>
  )
}

/* ---------- Status chip ---------- */
const StatusChip = ({ status, s }) => (
  <span className={`chip chip--${s}`}>
    <i className="dot" /> {status}
  </span>
)

/* ---------- Toolbar (search + filters) ---------- */
function Toolbar({ query, setQuery, placeholder, filters, active, setActive, count }) {
  return (
    <div className="dash-toolbar">
      <label className="search-box">
        {Icon.eye(18)}
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} />
      </label>
      {filters && (
        <div className="filter-pills">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-pill ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      )}
      <span className="result-count">{count} results</span>
    </div>
  )
}

/* ============================================================
   OVERVIEW
   ============================================================ */
function OverviewView({ bookings, dispatch, assign, openDetail }) {
  return (
    <>
      <div className="dash-panels">
        <div className="panel reveal">
          <div className="panel__head">
            <h3>Recent Bookings</h3>
            <span className="td-sub">{bookings.length} open</span>
          </div>
          <div className="panel__body">
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr><th>Service</th><th>Area</th><th>Provider</th><th>Amount</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {bookings.slice(0, 6).map((b) => (
                    <tr key={b.id} style={{ cursor: 'pointer' }} onClick={() => openDetail(b)}>
                      <td>
                        <span className="td-strong">{b.service}</span>
                        <span className="td-sub" style={{ display: 'block' }}>{b.id} · {b.cat}</span>
                      </td>
                      <td>{b.area}</td>
                      <td>{b.provider}</td>
                      <td className="td-strong">{b.amount}</td>
                      <td><StatusChip status={b.status} s={b.s} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 18 }}>
          <div className="panel reveal" data-delay={80}>
            <div className="panel__head">
              <h3>Live Dispatch</h3>
              <span className="td-sub">{dispatch.length} awaiting</span>
            </div>
            <div className="panel__body">
              {dispatch.slice(0, 3).map((d) => (
                <div className="approval-item" key={d.id}>
                  <div className="approval-item__avatar" style={{ background: d.color }}>{initials(d.customer)}</div>
                  <div className="approval-item__body">
                    <b>{d.service}</b>
                    <span>{d.area} · {d.nearest}</span>
                  </div>
                  <div className="approval-item__meta">
                    <div className="amt">{d.amount}</div>
                    <div className="row-actions" style={{ marginTop: 6, justifyContent: 'flex-end' }}>
                      <button className="btn btn-success btn-sm" onClick={() => assign(d.id, true)}>Assign</button>
                    </div>
                  </div>
                </div>
              ))}
              {dispatch.length === 0 && <p className="empty-row">All jobs dispatched — queue is clear.</p>}
            </div>
          </div>

          <CategoryPanel />
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <TopProvidersPanel />
      </div>
    </>
  )
}

/* ============================================================
   BOOKINGS
   ============================================================ */
const BOOKING_FILTERS = ['All', 'Scheduled', 'En Route', 'In Progress', 'Completed', 'Cancelled']

function BookingsView({ bookings, openDetail, notify }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return bookings.filter((b) => {
      const matchesQ =
        !q ||
        b.service.toLowerCase().includes(q) ||
        b.id.toLowerCase().includes(q) ||
        b.provider.toLowerCase().includes(q) ||
        b.customer.toLowerCase().includes(q) ||
        b.area.toLowerCase().includes(q)
      const matchesF = active === 'All' || b.status === active
      return matchesQ && matchesF
    })
  }, [bookings, query, active])

  return (
    <div className="panel panel--full reveal">
      <div className="panel__body">
        <Toolbar
          query={query} setQuery={setQuery}
          placeholder="Search services, providers, areas…"
          filters={BOOKING_FILTERS} active={active} setActive={setActive}
          count={filtered.length}
        />
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                <th>Service</th><th>Customer</th><th>Area</th><th>Slot</th><th>Amount</th><th>Status</th><th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id}>
                  <td>
                    <span className="td-strong">{b.service}</span>
                    <span className="td-sub" style={{ display: 'block' }}>{b.id} · {b.cat}</span>
                  </td>
                  <td>{b.customer}</td>
                  <td>{b.area}</td>
                  <td className="td-sub">{b.slot}</td>
                  <td className="td-strong">{b.amount}</td>
                  <td><StatusChip status={b.status} s={b.s} /></td>
                  <td>
                    <div className="row-actions">
                      <button className="icon-btn" title="View details" onClick={() => openDetail(b)}>{Icon.eye(17)}</button>
                      <button
                        className="icon-btn" title="Message provider"
                        onClick={() => notify({ title: 'Message sent', text: `Chat opened with ${b.provider}.` })}
                      >{Icon.chat(17)}</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td className="empty-row" colSpan={7}>No bookings match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   DISPATCH
   ============================================================ */
function DispatchView({ dispatch, assign }) {
  return (
    <div className="panel panel--full reveal">
      <div className="panel__head">
        <h3>Dispatch Queue</h3>
        <span className="td-sub">{dispatch.length} awaiting assignment</span>
      </div>
      <div className="panel__body">
        {dispatch.map((d) => (
          <div className="approval-item" key={d.id}>
            <div className="approval-item__avatar" style={{ background: d.color }}>{initials(d.customer)}</div>
            <div className="approval-item__body">
              <b>{d.service}</b>
              <span>{d.id} · {d.customer} · {d.area}</span>
              <span className="td-sub" style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                {Icon.pin(13)} Nearest: {d.nearest}
              </span>
            </div>
            <div className="approval-item__meta">
              <div className="amt">{d.amount}</div>
              <span className={`chip ${d.priority === 'High priority' ? 'chip--danger' : 'chip--neutral'}`} style={{ marginTop: 6 }}>
                {d.priority}
              </span>
              <div className="row-actions" style={{ marginTop: 8, justifyContent: 'flex-end' }}>
                <button className="btn btn-danger-soft btn-sm" onClick={() => assign(d.id, false)}>
                  {Icon.close(15)} Manual
                </button>
                <button className="btn btn-success btn-sm" onClick={() => assign(d.id, true)}>
                  {Icon.check(15)} Assign
                </button>
              </div>
            </div>
          </div>
        ))}
        {dispatch.length === 0 && (
          <p className="empty-row">🎉 All caught up — every job has a provider on the way.</p>
        )}
      </div>
    </div>
  )
}

/* ============================================================
   PROVIDERS
   ============================================================ */
const PROVIDER_FILTERS = ['All', 'Verified', 'Review', 'Onboarding']

function ProvidersView({ notify }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return dashProviders.filter((p) => {
      const matchesQ = !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.area.toLowerCase().includes(q)
      const matchesF = active === 'All' || p.status === active
      return matchesQ && matchesF
    })
  }, [query, active])

  return (
    <div className="panel panel--full reveal">
      <div className="panel__body">
        <Toolbar
          query={query} setQuery={setQuery}
          placeholder="Search providers, categories, areas…"
          filters={PROVIDER_FILTERS} active={active} setActive={setActive}
          count={filtered.length}
        />
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr><th>Provider</th><th>Category</th><th>Jobs</th><th>Rating</th><th>Earnings (YTD)</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.name}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <span className="mv-avatar" style={{ background: p.color, width: 34, height: 34, fontSize: '.82rem' }}>
                        {p.name.charAt(0)}
                      </span>
                      <div>
                        <span className="td-strong">{p.name}</span>
                        <span className="td-sub" style={{ display: 'block' }}>{p.area}</span>
                      </div>
                    </div>
                  </td>
                  <td>{p.cat}</td>
                  <td>{p.jobs}</td>
                  <td style={{ minWidth: 120 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Stars n={p.rating} />
                      <b style={{ fontSize: '.85rem', color: '#1d1152' }}>{p.rating}</b>
                    </div>
                  </td>
                  <td className="td-strong">{p.earnings}</td>
                  <td><StatusChip status={p.status} s={p.s} /></td>
                  <td>
                    <button
                      className="icon-btn" title="Contact provider"
                      onClick={() => notify({ title: 'Chat opened', text: `Messaging ${p.name}.` })}
                    >{Icon.chat(17)}</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td className="empty-row" colSpan={7}>No providers match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   PAYMENTS
   ============================================================ */
const PAYMENT_FILTERS = ['All', 'Paid', 'Payout Pending', 'Processing', 'Refunded']

function PaymentsView({ notify }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return dashPayments.filter((o) => {
      const matchesQ = !q || o.id.toLowerCase().includes(q) || o.provider.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q) || o.booking.toLowerCase().includes(q)
      const matchesF = active === 'All' || o.status === active
      return matchesQ && matchesF
    })
  }, [query, active])

  return (
    <div className="panel panel--full reveal">
      <div className="panel__body">
        <Toolbar
          query={query} setQuery={setQuery}
          placeholder="Search payment, customer or provider…"
          filters={PAYMENT_FILTERS} active={active} setActive={setActive}
          count={filtered.length}
        />
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr><th>Payment</th><th>Booking</th><th>Customer</th><th>Provider</th><th>Method</th><th>Amount</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id}>
                  <td>
                    <span className="td-strong">{o.id}</span>
                    <span className="td-sub" style={{ display: 'block' }}>{o.date}</span>
                  </td>
                  <td className="td-sub">{o.booking}</td>
                  <td>{o.customer}</td>
                  <td>{o.provider}</td>
                  <td>{o.method}</td>
                  <td className="td-strong">{o.amount}</td>
                  <td><StatusChip status={o.status} s={o.s} /></td>
                  <td>
                    <button
                      className="icon-btn" title="View receipt"
                      onClick={() => notify({ title: `Receipt ${o.id}`, text: `${o.amount} · ${o.status}.` })}
                    >{Icon.eye(17)}</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td className="empty-row" colSpan={8}>No payments match your search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   REVIEWS
   ============================================================ */
function ReviewsView() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return dashReviews.filter((r) => !q || r.provider.toLowerCase().includes(q) || r.customer.toLowerCase().includes(q) || r.service.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="panel panel--full reveal">
      <div className="panel__body">
        <Toolbar query={query} setQuery={setQuery} placeholder="Search reviews by provider, customer or service…" count={filtered.length} />
        <div className="review-list">
          {filtered.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-card__top">
                <div className="review-card__who">
                  <span className="mv-avatar" style={{ background: '#5a3df0', width: 38, height: 38, fontSize: '.85rem' }}>
                    {initials(r.customer)}
                  </span>
                  <div>
                    <b>{r.customer}</b>
                    <span className="td-sub">{r.service} · {r.provider}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <Stars n={r.rating} />
                  <div className="td-sub" style={{ marginTop: 2 }}>{r.date}</div>
                </div>
              </div>
              <p className="review-card__text">“{r.comment}”</p>
            </div>
          ))}
          {filtered.length === 0 && <p className="empty-row">No reviews match your search.</p>}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   ANALYTICS
   ============================================================ */
function AnalyticsView() {
  const max = Math.max(...revenueTrend.map((d) => d.v))
  const pts = revenueTrend.map((d, i) => {
    const x = (i / (revenueTrend.length - 1)) * 400
    const y = 150 - (d.v / max) * 120 - 12
    return [x, y]
  })
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
  const area = `${line} L400 150 L0 150 Z`

  return (
    <div className="dash-panels" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
      <div className="panel reveal">
        <div className="panel__head">
          <h3>Revenue Trend</h3>
          <span className="td-sub">Rolling 6 months · AED thousands</span>
        </div>
        <div className="panel__body">
          <div style={{ height: 190 }}>
            <svg viewBox="0 0 400 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="da" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5a3df0" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#5a3df0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={area} fill="url(#da)" />
              <path d={line} fill="none" stroke="#5a3df0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {pts.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4.5" fill="#fff" stroke="#ff6a3d" strokeWidth="2.5" />
              ))}
            </svg>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            {revenueTrend.map((d) => (
              <span key={d.m} className="td-sub">{d.m}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="panel reveal" data-delay={80}>
        <div className="panel__head"><h3>Bookings by Category</h3><span className="td-sub">This month</span></div>
        <div className="panel__body">
          <div className="seg-bar">
            {bookingsByCategory.map((s) => (<i key={s.label} style={{ width: `${s.value}%`, background: s.color }} />))}
          </div>
          <div className="seg-legend">
            {bookingsByCategory.map((s) => (
              <div className="seg-legend-row" key={s.label}>
                <span className="lbl"><i style={{ background: s.color }} /> {s.label}</span>
                <b>{s.value}%</b>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel reveal panel--full" data-delay={120} style={{ gridColumn: '1 / -1' }}>
        <TopProvidersPanel />
      </div>
    </div>
  )
}

/* ---------- Shared panels ---------- */
function CategoryPanel() {
  return (
    <div className="panel reveal" data-delay={140}>
      <div className="panel__head"><h3>Bookings by Category</h3><span className="td-sub">This month</span></div>
      <div className="panel__body">
        <div className="seg-bar">
          {bookingsByCategory.map((s) => (<i key={s.label} style={{ width: `${s.value}%`, background: s.color }} />))}
        </div>
        <div className="seg-legend">
          {bookingsByCategory.map((s) => (
            <div className="seg-legend-row" key={s.label}>
              <span className="lbl"><i style={{ background: s.color }} /> {s.label}</span>
              <b>{s.value}%</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TopProvidersPanel() {
  return (
    <div className="panel reveal">
      <div className="panel__head"><h3>Top Providers by Rating</h3><span className="td-sub">YTD</span></div>
      <div className="panel__body">
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr><th>Provider</th><th>Category</th><th>Jobs</th><th>Rating</th><th>Earnings (YTD)</th><th>Status</th></tr>
            </thead>
            <tbody>
              {topProviders.map((p) => (
                <tr key={p.name}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                      <span className="mv-avatar" style={{ background: p.color, width: 34, height: 34, fontSize: '.82rem' }}>
                        {p.name.charAt(0)}
                      </span>
                      <span className="td-strong">{p.name}</span>
                    </div>
                  </td>
                  <td>{p.cat}</td>
                  <td>{p.jobs}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Stars n={p.rating} />
                      <b style={{ fontSize: '.85rem', color: '#1d1152' }}>{p.rating}</b>
                    </div>
                  </td>
                  <td className="td-strong">{p.earnings}</td>
                  <td><span className="chip chip--success"><i className="dot" /> Verified</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   MODALS
   ============================================================ */
function NewBookingModal({ open, onClose, onSubmit }) {
  const empty = { service: '', cat: serviceCategories[0], area: serviceAreas[0], provider: providersList[0], slot: '', amountNum: '', notes: '' }
  const [form, setForm] = useState(empty)
  const [err, setErr] = useState({})
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.service.trim()) next.service = true
    if (!form.slot.trim()) next.slot = true
    if (!form.amountNum || Number(form.amountNum) <= 0) next.amountNum = true
    setErr(next)
    if (Object.keys(next).length) return
    const amount = 'AED ' + Number(form.amountNum).toLocaleString('en-US')
    onSubmit({
      service: form.service.trim(),
      cat: form.cat,
      area: form.area,
      customer: 'Walk-in customer',
      provider: form.provider === 'Auto-match nearest' ? 'Auto-matching…' : form.provider,
      slot: form.slot.trim(),
      amount,
    })
    setForm(empty)
    setErr({})
  }

  return (
    <Modal open={open} onClose={onClose} title="New Booking" subtitle="Create a service booking — it routes to the nearest available professional." maxWidth={580}>
      <form className="form-grid" onSubmit={submit}>
        <div className="field">
          <label>Service / description *</label>
          <input className={err.service ? 'field-error' : ''} value={form.service} onChange={set('service')} placeholder="e.g. Deep home cleaning (3BR)" />
        </div>
        <div className="form-row">
          <div className="field">
            <label>Category</label>
            <select value={form.cat} onChange={set('cat')}>
              {serviceCategories.map((c) => (<option key={c}>{c}</option>))}
            </select>
          </div>
          <div className="field">
            <label>Service area</label>
            <select value={form.area} onChange={set('area')}>
              {serviceAreas.map((a) => (<option key={a}>{a}</option>))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label>Provider</label>
            <select value={form.provider} onChange={set('provider')}>
              {providersList.map((p) => (<option key={p}>{p}</option>))}
            </select>
          </div>
          <div className="field">
            <label>Time slot *</label>
            <input className={err.slot ? 'field-error' : ''} value={form.slot} onChange={set('slot')} placeholder="e.g. 16 Jul · 10:00" />
          </div>
        </div>
        <div className="field">
          <label>Price (AED) *</label>
          <input
            type="number" min="0" className={err.amountNum ? 'field-error' : ''}
            value={form.amountNum} onChange={set('amountNum')} placeholder="e.g. 320"
          />
          <span className="hint">The nearest available, top-rated provider is matched automatically.</span>
        </div>
        <div className="field">
          <label>Notes</label>
          <textarea value={form.notes} onChange={set('notes')} placeholder="Access instructions, preferences…" />
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">{Icon.plus(16)} Create Booking</button>
        </div>
      </form>
    </Modal>
  )
}

function BookingDetailModal({ detail, onClose }) {
  return (
    <Modal open={!!detail} onClose={onClose} title={detail?.service || ''} subtitle={detail ? `${detail.id} · ${detail.slot}` : ''} maxWidth={520}>
      {detail && (
        <>
          <div style={{ marginBottom: 16 }}><StatusChip status={detail.status} s={detail.s} /></div>
          <div className="form-grid">
            <DetailRow label="Category" value={detail.cat} />
            <DetailRow label="Customer" value={detail.customer} />
            <DetailRow label="Provider" value={detail.provider} />
            <DetailRow label="Service area" value={detail.area} />
            <DetailRow label="Time slot" value={detail.slot} />
            <DetailRow label="Amount" value={detail.amount} strong />
          </div>
          <div className="form-actions" style={{ marginTop: 20 }}>
            <button className="btn btn-outline" onClick={onClose}>Close</button>
          </div>
        </>
      )}
    </Modal>
  )
}

function DetailRow({ label, value, strong }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--slate-100)' }}>
      <span style={{ color: 'var(--slate-500)', fontSize: '.9rem' }}>{label}</span>
      <span style={{ fontWeight: strong ? 700 : 600, color: 'var(--brand-800)', fontSize: '.92rem' }}>{value}</span>
    </div>
  )
}
