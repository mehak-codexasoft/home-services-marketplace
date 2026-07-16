import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Modules from '../components/Modules'
import Icon from '../components/Icons'
import CountUp from '../components/CountUp'
import { useUI } from '../components/UIContext'
import useReveal from '../components/useReveal'
import {
  stats,
  challenges,
  solutionPoints,
  workflowSteps,
  features,
} from '../data/content'

const categories = [
  { label: 'Cleaning', icon: 'spark' },
  { label: 'AC Repair', icon: 'navigation' },
  { label: 'Plumbing', icon: 'wrench' },
  { label: 'Electrical', icon: 'bolt' },
  { label: 'Painting', icon: 'home' },
  { label: 'Handyman', icon: 'wrench' },
  { label: 'Pest Control', icon: 'shield' },
  { label: 'Salon at Home', icon: 'heart' },
]

// Maps each feature (in order) to a console view
const featureViews = ['bookings', 'dispatch', 'dispatch', 'dispatch', 'payments', 'bookings', 'reviews', 'providers']

export default function Home() {
  useReveal([])
  const { openContact } = useUI()

  return (
    <main>
      <Hero />

      {/* Categories marquee */}
      <div className="marquee">
        <div className="container">
          <p className="marquee__label">Verified professionals across every home service</p>
        </div>
        <div className="marquee__track">
          {[...categories, ...categories].map((c, i) => (
            <span className="marquee__item" key={i}>
              {Icon[c.icon](20)} {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="section section--tight">
        <div className="container">
          <div className="stats-strip">
            {stats.map((s, i) => (
              <div className="stat-card reveal" data-delay={i * 70} key={s.label}>
                <b>
                  <CountUp value={s.value} />
                  {s.em && <em>{s.em}</em>}
                </b>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section challenges" id="challenges">
        <div className="container">
          <div className="section-head--center reveal">
            <span className="eyebrow">The challenge</span>
            <h2 className="section-title center">
              A UAE marketplace outgrew manual coordination
            </h2>
            <p className="section-lead">
              Matching demand to available professionals in real time — reliably,
              securely, and at scale — was impossible with manual processes.
            </p>
          </div>
          <div className="challenge-grid">
            {challenges.map((c, i) => (
              <div className="challenge-card reveal" data-delay={(i % 3) * 80} key={c.title}>
                <div className="challenge-card__icon">{Icon[c.icon](22)}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section solution" id="solution">
        <div className="container solution__inner">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--accent-500)' }}>The solution</span>
            <h2 className="section-title">
              A scalable platform, built around real-time service delivery
            </h2>
            <p className="section-lead">
              Khidma pairs native-feeling apps with a centralized backend that
              coordinates bookings, availability, and fulfillment — with
              independent services designed for reliable growth.
            </p>
            <ul className="solution-list">
              {solutionPoints.map((p) => (
                <li key={p.title}>
                  <span className="tick">{Icon.check(17)}</span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="workflow reveal" data-delay={120}>
            <div className="workflow__head">
              <h4>The booking journey</h4>
              <span className="chip chip--info"><i className="dot" /> Real-time</span>
            </div>
            {workflowSteps.map((s, i) => (
              <div className="flow-step" key={s.n}>
                <div
                  className="flow-step__num"
                  style={{
                    background: i === workflowSteps.length - 1 ? 'linear-gradient(135deg,#17b9a6,#0f9b8c)' : 'rgba(255,255,255,.08)',
                    color: i === workflowSteps.length - 1 ? '#04231f' : '#ff6a3d',
                    border: '1px solid rgba(255,255,255,.12)',
                  }}
                >
                  {s.n}
                </div>
                <div className="flow-step__body">
                  <b>{s.title}</b>
                  <span>{s.sub}</span>
                </div>
                {Icon.arrow(18)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-head--center reveal">
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-title center">
              Everything a service marketplace needs
            </h2>
            <p className="section-lead">
              From real-time booking to secure payouts — a complete toolkit for
              customers, professionals, and the operations team.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card reveal" data-delay={(i % 4) * 70} key={f.title}>
                <div className="feature-card__icon">{Icon[f.icon](24)}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <Link to={`/dashboard?view=${featureViews[i]}`} className="feature-card__link">
                  Explore {Icon.arrow(15)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <Modules />

      {/* Analytics showcase */}
      <AnalyticsShowcase />

      {/* Testimonial */}
      <section className="section section--tight">
        <div className="container">
          <div className="testimonial-wrap reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', width: '100%', display: 'inline-flex' }}>
              Impact
            </span>
            <p className="testimonial-quote">
              “Khidma gave us <span>real-time control</span> over every job.
              Dispatch is faster, double-bookings are gone, and customers finally
              see exactly where their professional is.”
            </p>
            <div className="testimonial-author">
              <div className="ta-avatar">NA</div>
              <div style={{ textAlign: 'left' }}>
                <b>Noura Al Suwaidi</b>
                <span>Head of Operations · UAE Service Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__box reveal">
            <div className="cta__inner">
              <div>
                <span className="eyebrow" style={{ color: 'var(--accent-500)' }}>Get started</span>
                <h2>Launch a home services marketplace customers trust</h2>
                <p>
                  See how Khidma coordinates booking, dispatch, payments, and
                  reviews in one real-time platform.
                </p>
              </div>
              <div className="cta__actions">
                <Link to="/dashboard" className="btn btn-primary btn-lg btn-block">
                  Explore the Live Demo {Icon.arrow(18)}
                </Link>
                <button className="btn btn-ghost btn-lg btn-block" onClick={openContact}>
                  Talk to our team
                </button>
                <p className="cta__note">No credit card · Guided walkthrough</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AnalyticsShowcase() {
  const legend = [
    { c: '#17b9a6', l: 'Cleaning', v: 'AED 1.4M' },
    { c: '#5a3df0', l: 'AC & Cooling', v: 'AED 0.9M' },
    { c: '#2f9e6f', l: 'Plumbing', v: 'AED 0.7M' },
    { c: '#f5a623', l: 'Electrical', v: 'AED 0.5M' },
  ]
  return (
    <section className="section analytics" id="analytics">
      <div className="container analytics__inner">
        <div className="section-head--center reveal">
          <span className="eyebrow" style={{ color: 'var(--accent-500)' }}>Analytics & reporting</span>
          <h2 className="section-title center">
            Real-time operational visibility
          </h2>
          <p className="section-lead">
            Operations, providers, and leadership share one live picture — from
            active jobs and dispatch times to revenue and provider performance.
          </p>
        </div>

        <div className="analytics-grid">
          <div className="a-card a-span-4 reveal">
            <h4>On-time completion</h4>
            <div className="a-sub">Jobs finished within window</div>
            <div className="donut" style={{ '--p': 94 }}>
              <b>94%</b>
            </div>
          </div>

          <div className="a-card a-span-8 reveal" data-delay={80}>
            <h4>Revenue trend</h4>
            <div className="a-sub">Rolling 6 months · AED thousands</div>
            <div className="trend-chart">
              <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5a3df0" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#5a3df0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 118 L66 100 L133 108 L200 74 L266 52 L333 40 L400 28 L400 150 L0 150 Z"
                  fill="url(#area)"
                />
                <path
                  d="M0 118 L66 100 L133 108 L200 74 L266 52 L333 40 L400 28"
                  fill="none"
                  stroke="#7d63f7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[[0,118],[66,100],[133,108],[200,74],[266,52],[333,40],[400,28]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="4" fill="#1d1152" stroke="#ff6a3d" strokeWidth="2.5" />
                ))}
              </svg>
            </div>
          </div>

          <div className="a-card a-span-4 reveal">
            <h4>Avg. dispatch</h4>
            <div className="a-sub">Booking → provider assigned</div>
            <div className="a-kpi">24m <small>▼ 31%</small></div>
            <div className="a-sub">Down from 35 minutes</div>
          </div>

          <div className="a-card a-span-4 reveal" data-delay={80}>
            <h4>Providers online</h4>
            <div className="a-sub">Available right now</div>
            <div className="a-kpi">214 <small>+18</small></div>
            <div className="a-sub">Across 8 categories</div>
          </div>

          <div className="a-card a-span-4 reveal" data-delay={160}>
            <h4>Revenue by category</h4>
            <div className="a-sub" style={{ marginBottom: 6 }}>YTD distribution</div>
            {legend.map((r) => (
              <div className="a-legend-row" key={r.l}>
                <span><i style={{ background: r.c }} /> {r.l}</span>
                <b>{r.v}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
