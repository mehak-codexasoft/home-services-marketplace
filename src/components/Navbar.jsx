import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icons'
import { useUI } from './UIContext'

const links = [
  { to: '/#features', label: 'Features' },
  { to: '/#modules', label: 'How it works' },
  { to: '/#analytics', label: 'Analytics' },
  { to: '/dashboard', label: 'Live Demo' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { openContact } = useUI()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const forceSolid = pathname === '/dashboard'

  const handleHash = (e, to) => {
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (pathname === '/') {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        e.preventDefault()
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
      }
    }
  }

  return (
    <>
      <header className={`nav ${solid || forceSolid ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="brand" aria-label="Khidma home">
            <span className="brand__mark"><span>K</span></span>
            <span>
              Khidma
              <small>UAE Home Services</small>
            </span>
          </Link>

          <nav className="nav__links">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={(e) => handleHash(e, l.to)}
                className={pathname === l.to ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav__cta">
            <Link to="/dashboard" className="btn btn-outline">Sign in</Link>
            <button className="btn btn-primary" onClick={openContact}>
              Request Demo {Icon.arrow(17)}
            </button>
            <button
              className="nav__toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? Icon.close(22) : Icon.menu(22)}
            </button>
          </div>
        </div>
      </header>

      <div className={`nav__mobile ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={(e) => handleHash(e, l.to)}>
            {l.label}
          </Link>
        ))}
        <Link to="/dashboard" className="btn btn-outline btn-block">Sign in</Link>
        <button className="btn btn-primary btn-block" onClick={() => { setOpen(false); openContact() }}>
          Request a Demo
        </button>
      </div>
    </>
  )
}
