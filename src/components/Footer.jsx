import { Link } from 'react-router-dom'
import Icon from './Icons'

const cols = [
  {
    title: 'Platform',
    links: ['Service Booking', 'Provider App', 'Live Dispatch', 'Payments'],
  },
  {
    title: 'Company',
    links: ['About CodexaSoft', 'Case Studies', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Security', 'Support Center', 'Status'],
  },
]

export default function Footer() {
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
              verified professionals through real-time booking, dispatch, and
              payments — engineered by CodexaSoft.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn">{Icon.linkedin(18)}</a>
              <a href="#" aria-label="X">{Icon.twitter(18)}</a>
              <a href="#" aria-label="Email">{Icon.mail(18)}</a>
              <a href="#" aria-label="Website">{Icon.globe(18)}</a>
            </div>
          </div>

          {cols.map((c) => (
            <div className="footer__col" key={c.title}>
              <h5>{c.title}</h5>
              {c.links.map((l) => (
                <a href="#" key={l}>{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Khidma — Built by CodexaSoft for a UAE service marketplace.</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
