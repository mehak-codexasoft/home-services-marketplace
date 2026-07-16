import { Link } from 'react-router-dom'
import Icon from './Icons'

const bars = [42, 55, 38, 71, 60, 84, 66, 92]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid" />
      <div className="hero__orbs" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>
      <div className="container hero__inner">
        {/* Copy */}
        <div className="hero__copy">
          <span className="hero__badge">
            <b>UAE</b> Built for on-demand home services
          </span>
          <h1>
            Trusted home pros, <span className="text-gradient">booked</span> in
            seconds.
          </h1>
          <p className="hero__lead">
            Khidma connects customers with verified professionals through
            real-time booking, GPS-based dispatch, and live tracking — with
            secure payments from first tap to final review.
          </p>
          <div className="hero__actions">
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Explore the Console {Icon.arrow(18)}
            </Link>
            <a href="#features" className="btn btn-ghost btn-lg">
              See how it works
            </a>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <b>4.8★</b>
              <span>Avg. customer rating</span>
            </div>
            <div className="hero__trust-sep" />
            <div className="hero__trust-item">
              <b>&lt;25 min</b>
              <span>Average dispatch</span>
            </div>
            <div className="hero__trust-sep" />
            <div className="hero__trust-item">
              <b>8</b>
              <span>Service categories</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero__visual">
          <div className="float-badge float-badge--tl">
            <span
              className="float-badge__icon"
              style={{ background: 'rgba(47,169,106,.12)', color: '#2fa96a' }}
            >
              {Icon.check(20)}
            </span>
            <div>
              <b>Provider assigned</b>
              <span>CoolBreeze AC · en route</span>
            </div>
          </div>

          <div className="float-badge float-badge--br">
            <span
              className="float-badge__icon"
              style={{ background: 'rgba(255,106,61,.16)', color: '#ee4f22' }}
            >
              {Icon.bell(20)}
            </span>
            <div>
              <b>5 jobs</b>
              <span>Dispatching now</span>
            </div>
          </div>

          <div className="glass-card hero__panel">
            <div className="hero__panel-top">
              <h4>Live Operations</h4>
              <span className="chip chip--success">
                <i className="dot" /> Live
              </span>
            </div>
            <div className="hero__panel-body">
              <div className="mini-stat-row">
                <div className="mini-stat">
                  <span>Live jobs</span>
                  <b>42</b>
                  <span className="trend">▲ 8%</span>
                </div>
                <div className="mini-stat">
                  <span>Bookings</span>
                  <b>168</b>
                  <span className="trend">▲ 12%</span>
                </div>
                <div className="mini-stat">
                  <span>Pros online</span>
                  <b>214</b>
                  <span className="trend">+18</span>
                </div>
              </div>
              <div className="chart-bars">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="bar"
                    style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>
              <div className="chart-legend">
                <span>
                  <i style={{ background: '#2c1c86' }} /> Bookings / hour
                </span>
                <span>
                  <i style={{ background: '#ff6a3d' }} /> Provider capacity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
