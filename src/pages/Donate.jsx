import React, { useState } from 'react'
import { SITE_CONFIG } from '../data/artworks'
import './Donate.css'

const AMOUNTS = [100, 250, 500, 1000, 2500, 5000]

export default function Donate() {
  const [selected, setSelected] = useState(500)
  const [custom, setCustom] = useState('')
  const [paid, setPaid] = useState(false)

  const amount = custom ? parseInt(custom) || 0 : selected
  const upiId = SITE_CONFIG.about.upiId
  const name = encodeURIComponent('Malenadu Hase Chittara Artist Association')
  const note = encodeURIComponent('Donation for Chittara Art Preservation')

  // UPI deep links
  const gpayLink = `tez://upi/pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`
  const phonepeLink = `phonepe://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`
  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=${note}`

  return (
    <div className="donate-page page-enter">
      <div className="donate-header">
        <div className="container">
          <p className="label">Support the Cause</p>
          <div className="divider" />
          <h1>Donate</h1>
          <p className="donate-subhead">
            Your contribution helps preserve the ancient Chittara art tradition and supports the women artists of the Deewaru community.
          </p>
        </div>
      </div>

      <div className="container donate-body">
        <div className="donate-left">
          <div className="donate-card">
            <h2>Choose an Amount</h2>
            <div className="amount-grid">
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  className={`amount-btn ${selected === a && !custom ? 'active' : ''}`}
                  onClick={() => { setSelected(a); setCustom('') }}
                >
                  ₹{a.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
            <div className="custom-amount">
              <label>Or enter custom amount</label>
              <div className="custom-input-wrap">
                <span className="rupee-sign">₹</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setSelected(null) }}
                  min={1}
                />
              </div>
            </div>

            {amount > 0 && (
              <div className="donate-pay-section">
                <p className="donate-pay-label">Pay ₹{amount.toLocaleString('en-IN')} via</p>
                <div className="pay-buttons">
                  <a href={gpayLink} className="pay-btn gpay" onClick={() => setPaid(true)}>
                    <span className="pay-btn-icon">G</span>
                    Google Pay
                  </a>
                  <a href={phonepeLink} className="pay-btn phonepe" onClick={() => setPaid(true)}>
                    <span className="pay-btn-icon">P</span>
                    PhonePe
                  </a>
                  <a href={upiLink} className="pay-btn upi" onClick={() => setPaid(true)}>
                    <span className="pay-btn-icon">U</span>
                    Any UPI App
                  </a>
                </div>

                <div className="upi-manual">
                  <p className="upi-manual-label">Or pay directly to UPI ID</p>
                  <div className="upi-id-box">
                    <span>{upiId}</span>
                    <button onClick={() => navigator.clipboard.writeText(upiId)} className="copy-btn">Copy</button>
                  </div>
                  <p className="upi-note">Open Google Pay, PhonePe, or any UPI app → Send money → Enter UPI ID above</p>
                </div>

                {paid && (
                  <div className="donate-thankyou">
                    ✓ Thank you for your generosity! Your support means the world to the Deewaru artists.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="donate-right">
          <h3>Your donation helps</h3>
          <ul className="donate-list">
            <li><span>🎨</span> Fund art workshops for young women in Deewaru villages</li>
            <li><span>🏡</span> Help artists set up dedicated studio spaces</li>
            <li><span>📚</span> Support documentation of rare Chittara patterns</li>
            <li><span>🌱</span> Enable participation in national art exhibitions</li>
            <li><span>📖</span> Publish books and educational materials on Chittara</li>
            <li><span>💻</span> Build online learning resources for global reach</li>
          </ul>

          <div className="donate-impact">
            <div className="impact-item">
              <span>₹500</span>
              <p>Funds one day of art materials for a workshop</p>
            </div>
            <div className="impact-item">
              <span>₹1,000</span>
              <p>Supports one artist for a week of creation</p>
            </div>
            <div className="impact-item">
              <span>₹5,000</span>
              <p>Sponsors a full community art documentation session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
