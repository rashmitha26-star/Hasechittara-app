import React, { useState, useEffect } from 'react'
import './CheckoutModal.css'

// ─────────────────────────────────────────────────────────────
//  To enable LIVE payments:
//  1. Sign up at https://dashboard.razorpay.com
//  2. Get your Key ID and paste it below
//  3. Set RAZORPAY_KEY_ID to your actual key (starts with rzp_live_ or rzp_test_)
// ─────────────────────────────────────────────────────────────
const RAZORPAY_KEY_ID = '' // leave empty to use demo mode

const INITIAL = { name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '' }

export default function CheckoutModal({ artwork, onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [step, setStep] = useState('form') // 'form' | 'processing' | 'success'
  const [errors, setErrors] = useState({})
  const [payError, setPayError] = useState('')

  // Load Razorpay script if key is configured
  useEffect(() => {
    if (!RAZORPAY_KEY_ID) return
    if (document.getElementById('razorpay-script')) return
    const script = document.createElement('script')
    script.id = 'razorpay-script'
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  if (!artwork) return null

  const totalItems = Array.isArray(artwork) ? artwork : [artwork]
  const totalAmount = totalItems.reduce((sum, a) => sum + (a.price || 0), 0)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = '10-digit Indian mobile number'
    if (!form.address.trim()) e.address = 'Required'
    if (!form.city.trim()) e.city = 'Required'
    if (!form.state.trim()) e.state = 'Required'
    if (!form.pincode.match(/^\d{6}$/)) e.pincode = '6-digit pincode'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: undefined }))
    setPayError('')
  }

  const launchRazorpay = () => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'Malenadu Hase Chittara Artist Association',
      description: totalItems.map(a => a.title).join(', '),
      image: '/images/picture1.JPG',
      prefill: { name: form.name, email: form.email, contact: form.phone },
      notes: {
        shipping_address: `${form.address}, ${form.city}, ${form.state} - ${form.pincode}`,
        artworks: totalItems.map(a => a.title).join(', '),
      },
      theme: { color: '#C9A84C' },
      handler: function (response) {
        console.log('Payment ID:', response.razorpay_payment_id)
        setStep('success')
      },
      modal: {
        ondismiss: function () {
          setStep('form')
        },
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.on('payment.failed', function (response) {
      setStep('form')
      setPayError(`Payment failed: ${response.error.description}`)
    })
    rzp.open()
  }

  // Demo mode — simulates a payment without a real key
  const simulatePayment = () => {
    setStep('processing')
    setTimeout(() => setStep('success'), 2000)
  }

  const handlePay = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setPayError('')

    if (RAZORPAY_KEY_ID) {
      if (!window.Razorpay) {
        setPayError('Payment gateway is still loading. Please wait a moment and try again.')
        return
      }
      launchRazorpay()
    } else {
      // Demo mode — no real key configured yet
      simulatePayment()
    }
  }

  return (
    <div className="checkout-backdrop" onClick={step === 'processing' ? undefined : onClose}>
      <div className="checkout-box" onClick={e => e.stopPropagation()}>

        <div className="checkout-header">
          <div>
            <p className="checkout-label">Secure Checkout</p>
            <h2 className="checkout-title">
              {totalItems.length === 1 ? totalItems[0].title : `${totalItems.length} Artworks`}
            </h2>
            <p className="checkout-artist">
              {totalItems.length === 1
                ? `${totalItems[0].artist} · ${totalItems[0].medium}`
                : totalItems.map(a => a.title).join(', ')}
            </p>
          </div>
          {step !== 'processing' && (
            <button className="checkout-close" onClick={onClose} aria-label="Close">✕</button>
          )}
        </div>

        {step === 'processing' && (
          <div className="checkout-processing">
            <div className="processing-spinner" />
            <p>Processing your payment…</p>
          </div>
        )}

        {step === 'success' && (
          <div className="checkout-success">
            <div className="success-circle">✓</div>
            <h3>Order Confirmed!</h3>
            <p>Thank you, <strong>{form.name}</strong>! Your order has been placed successfully. A confirmation will be sent to <strong>{form.email}</strong>. Your artwork will be shipped within 5–7 business days.</p>
            <button className="btn-primary" onClick={onClose}>Done</button>
          </div>
        )}

        {step === 'form' && (
          <form className="checkout-form" onSubmit={handlePay} noValidate>

            <div className="checkout-order-summary">
              {totalItems.map(a => (
                <div className="order-row" key={a.id}>
                  <img src={a.image} alt={a.title} className="order-thumb" />
                  <div className="order-info">
                    <p className="order-name">{a.title}</p>
                    <p className="order-medium">{a.medium}</p>
                  </div>
                  <p className="order-price">₹{(a.price || 0).toLocaleString('en-IN')}</p>
                </div>
              ))}
              <div className="order-total">
                <span>Total</span>
                <span className="order-total-amount">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="checkout-section-title">Your Details</div>
            <div className="checkout-row">
              <Field label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Your full name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="your@email.com" />
            </div>
            <Field label="Mobile Number" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="9876543210" maxLength={10} />

            <div className="checkout-section-title">Shipping Address</div>
            <Field label="Street Address" name="address" value={form.address} onChange={handleChange} error={errors.address} placeholder="House no., street, area" />
            <div className="checkout-row three">
              <Field label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} placeholder="City" />
              <Field label="State" name="state" value={form.state} onChange={handleChange} error={errors.state} placeholder="State" />
              <Field label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} error={errors.pincode} placeholder="560001" maxLength={6} />
            </div>

            {payError && <div className="pay-error">{payError}</div>}

            <div className="checkout-pay-section">
              <div className="payment-methods">
                <span>Pay via</span>
                <span className="pm-badge">UPI</span>
                <span className="pm-badge">Google Pay</span>
                <span className="pm-badge">PhonePe</span>
                <span className="pm-badge">Cards</span>
                <span className="pm-badge">Net Banking</span>
              </div>
              {!RAZORPAY_KEY_ID && (
                <div className="demo-notice">
                  ⚙️ Demo mode — no real payment will be charged. Add your Razorpay key to go live.
                </div>
              )}
              <button type="submit" className="checkout-pay-btn">
                {RAZORPAY_KEY_ID ? `Pay ₹${totalAmount.toLocaleString('en-IN')} Securely →` : `Place Order (Demo) →`}
              </button>
              <p className="checkout-secure-note">🔒 Powered by Razorpay · UPI · Google Pay · PhonePe · Cards</p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, maxLength }) {
  return (
    <div className={`checkout-field ${error ? 'has-error' : ''}`}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="on"
      />
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}