import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import CheckoutModal from './CheckoutModal'
import './CartDrawer.css'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart, clearCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <>
      {open && <div className="cart-backdrop" onClick={onClose} />}
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <div>
            <p className="cart-label">Your Selection</p>
            <h2 className="cart-heading">Cart ({cart.length})</h2>
          </div>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">◎</span>
            <p>Your cart is empty.</p>
            <p className="cart-empty-sub">Browse the gallery and add artworks you love.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-meta">{item.era} · {item.region}</p>
                    <h4 className="cart-item-title">{item.title}</h4>
                    <p className="cart-item-artist">{item.artist}</p>
                    <p className="cart-item-medium">{item.medium}</p>
                    {item.price
                      ? <span className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</span>
                      : <span className="cart-item-price">Price on request</span>
                    }
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-summary">
                <span>{cart.length} artwork{cart.length > 1 ? 's' : ''}</span>
                <span className="cart-summary-price">
                  ₹{cart.reduce((s, i) => s + (i.price || 0), 0).toLocaleString('en-IN')}
                </span>
              </div>
              <button className="btn-request-all" onClick={() => { onClose(); setShowCheckout(true) }}>
                Buy All — Pay Now →
              </button>
              <button className="cart-clear" onClick={clearCart}>Clear cart</button>
              <p className="cart-footer-note">
                🔒 Secure payment via Razorpay · UPI · Google Pay · PhonePe · Cards
              </p>
            </div>
          </>
        )}
      </div>

      {showCheckout && cart.length > 0 && (
        <CheckoutModal artwork={cart} onClose={() => setShowCheckout(false)} />
      )}
    </>
  )
}
