import { createContext, useCallback, useContext, useState } from 'react'
import Modal from './Modal'
import Toast from './Toast'
import Icon from './Icons'

const interests = [
  'Customer booking app',
  'Provider app',
  'Marketplace operations',
  'Payments & payouts',
  'Partnership',
]

const UIContext = createContext(null)

export function useUI() {
  return useContext(UIContext)
}

export function UIProvider({ children }) {
  const [contactOpen, setContactOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const notify = useCallback((t) => setToast({ ...t }), [])
  const openContact = useCallback(() => setContactOpen(true), [])
  const closeContact = useCallback(() => setContactOpen(false), [])

  return (
    <UIContext.Provider value={{ openContact, notify }}>
      {children}
      <ContactModal
        open={contactOpen}
        onClose={closeContact}
        onSubmit={() => {
          closeContact()
          notify({ title: 'Request received', text: 'The Khidma team will reach out within one business day.' })
        }}
      />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </UIContext.Provider>
  )
}

function ContactModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '', message: '' })
  const [err, setErr] = useState({})

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = true
    if (!form.company.trim()) next.company = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = true
    setErr(next)
    if (Object.keys(next).length) return
    setForm({ name: '', company: '', email: '', interest: '', message: '' })
    onSubmit()
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Request a Demo"
      subtitle="See Khidma in action — tailored to your marketplace and service categories."
    >
      <form className="form-grid" onSubmit={submit}>
        <div className="form-row">
          <div className="field">
            <label>Full name *</label>
            <input
              className={err.name ? 'field-error' : ''}
              value={form.name}
              onChange={set('name')}
              placeholder="e.g. Ahmed Al Mansoori"
            />
          </div>
          <div className="field">
            <label>Company *</label>
            <input
              className={err.company ? 'field-error' : ''}
              value={form.company}
              onChange={set('company')}
              placeholder="Your company"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label>Work email *</label>
            <input
              className={err.email ? 'field-error' : ''}
              value={form.email}
              onChange={set('email')}
              placeholder="you@company.ae"
            />
          </div>
          <div className="field">
            <label>Interested in</label>
            <select value={form.interest} onChange={set('interest')}>
              <option value="">Select…</option>
              {interests.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label>What would you like to see?</label>
          <textarea
            value={form.message}
            onChange={set('message')}
            placeholder="Tell us about your marketplace and goals…"
          />
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary">
            {Icon.mail(17)} Send Request
          </button>
        </div>
      </form>
    </Modal>
  )
}
