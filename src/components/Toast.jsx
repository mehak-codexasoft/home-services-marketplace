import { useEffect } from 'react'
import Icon from './Icons'

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(onClose, 3200)
    return () => clearTimeout(t)
  }, [toast, onClose])

  if (!toast) return null

  return (
    <div className={`toast toast--${toast.type || 'success'}`} role="status">
      <span className="toast__icon">
        {toast.type === 'error' ? Icon.close(18) : Icon.check(18)}
      </span>
      <div>
        <b>{toast.title}</b>
        {toast.text && <span>{toast.text}</span>}
      </div>
    </div>
  )
}
