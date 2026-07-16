import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icons'
import { useUI } from './UIContext'

// Every entry resolves to a real destination: a console view, a section of the
// home page, the legal page, or the contact modal.
const cols = [
  {
    title: 'Platform',
    links: [
      { label: 'Live Booking', to: '/dashboard?view=bookings' },
      { label: 'Live Dispatch', to: '/dashboard?view=dispatch' },
      { label: 'Providers', to: '/dashboard?view=providers' },
      { label: 'Payments', to: '/dashboard?view=payments' },
      { label: 'Reviews', to: '/dashboard?view=reviews' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Features', to: '/#features' },
      { label: 'How it works', to: '/#modules' },
      { label: 'Analytics', to: '/#analytics' },
      { label: 'The challenge', to: '/#challenges' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Live demo', to: '/dashboard' },
      { label: 'Request a demo', action: 'contact' },
      { label: 'Contact us', action: 'contact' },
      { label: 'Privacy & terms', to: '/legal' },
    ],
  },
]

// Real profile URLs go here. While a url is empty the icon opens the contact
// modal instead of pointing nowhere.
const socials = [
  { label: 'LinkedIn', icon: 'linkedin', url: '' },
  { label: 'X', icon: 'twitter', url: '' },
  { label: 'Email', icon: 'mail', url: '' },
  { label: 'Website', icon: 'globe', url: '' },
]

export default function Footer() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { openContact } = useUI()

  // "/#features" — scroll if we're already home, otherwise route home first.
  const handleHash = (e, to) => {
    if (!to || !to.startsWith('/#')) return
    e.preventDefault()
    const id = to.slice(2)
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link to="/" className="brand">
              <span className="brand__mark"><span>K</span></span>
              <span>
                Khidma
                <small>UAE Home Services</small>
              </span>
            </Link>
            <p className="footer__about">
              An on-demand home services marketplace connecting customers with
              verified professionals across the UAE — real-time booking, live
              dispatch, and secure payments.
            </p>
            <div className="footer__socials">
              {socials.map((s) =>
                s.url ? (
                  <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    {Icon[s.icon](18)}
                  </a>
                ) : (
                  <button key={s.label} onClick={openContact} aria-label={s.label} title={`${s.label} — get in touch`}>
                    {Icon[s.icon](18)}
                  </button>
                )
              )}
            </div>
          </div>

          {cols.map((c) => (
            <div className="footer__col" key={c.title}>
              <h5>{c.title}</h5>
              {c.links.map((l) =>
                l.action === 'contact' ? (
                  <button key={l.label} onClick={openContact}>{l.label}</button>
                ) : (
                  <Link key={l.label} to={l.to} onClick={(e) => handleHash(e, l.to)}>
                    {l.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Khidma — On-demand home services across the UAE.</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <Link to="/legal#privacy">Privacy</Link>
            <Link to="/legal#terms">Terms</Link>
            <Link to="/legal#security">Security</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
