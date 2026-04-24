import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CheckoutModal from './CheckoutModal'
import './ArtCard.css'

export default function ArtCard({ artwork }) {
  const [loaded, setLoaded] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const { addToCart, isInCart } = useCart()
  const inCart = isInCart(artwork.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!inCart) addToCart(artwork)
  }

  const handleBuyNow = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowCheckout(true)
  }

  return (
    <div className="artcard-wrap">
      <Link to={`/artwork/${artwork.id}`} className="artcard">
        <div className="artcard-image-wrap">
          {!loaded && <div className="artcard-skeleton" />}
          <img
            src={artwork.image}
            alt={artwork.title}
            className={`artcard-image ${loaded ? 'loaded' : ''}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
          <div className="artcard-overlay">
            <span className="artcard-view">View Artwork →</span>
          </div>
          <span className="artcard-medium">{artwork.medium}</span>
        </div>
        <div className="artcard-body">
          <div className="artcard-meta">
            <span className="artcard-era">{artwork.era}</span>
            <span className="artcard-dot">·</span>
            <span className="artcard-region">{artwork.region}</span>
          </div>
          <h3 className="artcard-title">{artwork.title}</h3>
          <p className="artcard-artist">{artwork.artist}</p>
          <p className="artcard-year">{artwork.year}</p>
          {artwork.price && (
            <p className="artcard-price">₹{artwork.price.toLocaleString('en-IN')}</p>
          )}
        </div>
      </Link>
      <div className="artcard-actions">
        <button
          className={`artcard-cart-btn ${inCart ? 'in-cart' : ''}`}
          onClick={handleAddToCart}
          disabled={inCart}
        >
          {inCart ? '✓ In Cart' : '+ Add to Cart'}
        </button>
        <button className="artcard-buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {showCheckout && (
        <CheckoutModal artwork={artwork} onClose={() => setShowCheckout(false)} />
      )}
    </div>
  )
}
