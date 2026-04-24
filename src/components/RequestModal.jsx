import React, { useState } from 'react'
import './RequestModal.css'

const INITIAL_FORM = {
  name: '', email: '', phone: '',
  address: '', city: '', state: '', pincode: '', message: '',
}

export default function RequestModal({ artwork, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  if (!artwork) return null

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')
    // Replace YOUR_FORM_ID with your Formspree form ID from formspree.io
    const FORMSPREE_ID = 'YOUR_FORM_ID'
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ artwork_title: artwork.title, artwork_id: artwork.id, artist: artwork.artist, medium: artwork.medium, ...form }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-label">Request to Buy</p>
            <h2 className="modal-title">{artwork.title}</h2>
            <p className="modal-artist">{artwork.artist} · {artwork.medium}</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {status === 'success' ? (
          <div className="modal-success">
            <span className="success-icon">✓</span>
            <h3>Request Sent!</h3>
            <p>Thank you! We will contact you within 24–48 hours with pricing and a Razorpay payment link.</p>
            <button className="btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-notice">
              Fill in your details below. We will get back to you with the price and a secure Razorpay payment link within 48 hours.
            </div>

            <div className="form-section-title">Personal Details</div>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
            </div>

            <div className="form-section-title">Shipping Address</div>
            <div className="form-group">
              <label>Street Address *</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="House no., street, area" required />
            </div>
            <div className="form-row three-col">
              <div className="form-group">
                <label>City *</label>
                <input name="city" value={form.city} onChange={handleChange} placeholder="City" required />
              </div>
              <div className="form-group">
                <label>State *</label>
                <input name="state" value={form.state} onChange={handleChange} placeholder="State" required />
              </div>
              <div className="form-group">
                <label>Pincode *</label>
                <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="560001" required maxLength={6} />
              </div>
            </div>
            <div className="form-group">
              <label>Message (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any questions or special requests..." rows={3} />
            </div>

            {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}

            <div className="form-actions">
              <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Request →'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
