import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../components/Icons'
import { useUI } from '../components/UIContext'

const sections = [
  {
    id: 'privacy',
    icon: 'shield',
    title: 'Privacy',
    body: [
      'Khidma is a demonstration build. It runs entirely in your browser on sample data — there is no backend, no account system, and no analytics or tracking scripts.',
      'Nothing you type into this demo leaves your device. The booking and demo-request forms validate your input and then simply show a confirmation message; no data is transmitted or stored.',
      'The customers, professionals, bookings, and payments shown throughout the product are fictional sample records created to illustrate how the platform works.',
    ],
  },
  {
    id: 'terms',
    icon: 'doc',
    title: 'Terms',
    body: [
      'This site is a demonstration build of an on-demand home services marketplace. It is not a live booking service — no real professional can be hired and no real payment can be taken through it.',
      'You are welcome to explore the demo; please do not present or deploy it as a live commercial service.',
      'The demo is provided as-is, without warranty, and may change or be taken offline at any time.',
    ],
  },
  {
    id: 'security',
    icon: 'gauge',
    title: 'Security',
    body: [
      'Because this build has no server, no database, and no authentication, it holds no credentials or personal data to protect. The "Sign in" action opens the demo console directly.',
      'The payment flows shown in the console are illustrative only. No card details are ever collected, processed, or stored anywhere in this demo.',
      'In a production deployment, payments are handled by a certified payment provider so that card data never touches the application servers.',
    ],
  },
]

export default function Legal() {
  const { hash } = useLocation()
  const { openContact } = useUI()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <main className="legal">
      <div className="container">
        <div className="legal__head">
          <span className="eyebrow">Legal</span>
          <h1 className="section-title">Privacy, terms & security</h1>
          <p className="section-lead">
            Khidma is a demonstration product. Here's exactly what that means
            for your data.
          </p>
          <div className="legal__nav">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="filter-pill">
                {Icon[s.icon](15)} {s.title}
              </a>
            ))}
          </div>
        </div>

        {sections.map((s) => (
          <section className="legal__card" id={s.id} key={s.id}>
            <div className="legal__card-head">
              <span className="legal__icon">{Icon[s.icon](20)}</span>
              <h2>{s.title}</h2>
            </div>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

        <div className="legal__foot">
          <p>Questions about this demo or how it works?</p>
          <div className="legal__foot-actions">
            <button className="btn btn-primary" onClick={openContact}>
              {Icon.mail(17)} Contact us
            </button>
            <Link to="/" className="btn btn-outline">Back to home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
