import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ARTWORKS } from '../data/artworks'
import { useCart } from '../context/CartContext'
import ArtCard from '../components/ArtCard'
import CheckoutModal from '../components/CheckoutModal'
import './ArtworkDetail.css'

export default function ArtworkDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const artwork = ARTWORKS.find(a => a.id === id)
  const [zoomed, setZoomed] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const { addToCart, isInCart } = useCart()
  const inCart = isInCart(artwork?.id)

  if (!artwork) {
    return (
      <div className="detail-notfound">
        <p>Artwork not found.</p>
        <Link to="/gallery" className="btn-primary">Back to Gallery</Link>
      </div>
    )
  }

  const related = ARTWORKS.filter(a => a.id !== id && (a.era === artwork.era || a.region === artwork.region)).slice(0, 3)

  return (
    <div className="detail-page page-enter">
      <div className="detail-nav container">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <span className="breadcrumb">Gallery / {artwork.title}</span>
      </div>

      <div className="container detail-body">
        <div className="detail-image-wrap">
          <img
            src={artwork.image}
            alt={artwork.title}
            className={`detail-image ${zoomed ? 'zoomed' : ''}`}
            onClick={() => setZoomed(z => !z)}
            title="Click to zoom"
          />
          <p className="detail-zoom-hint">Click image to zoom</p>
          {zoomed && (
            <div className="zoom-overlay" onClick={() => setZoomed(false)}>
              <img src={artwork.image} alt={artwork.title} />
            </div>
          )}
        </div>

        <div className="detail-info">
          <div className="detail-meta">
            <span className="chip-static">{artwork.era}</span>
            <span className="chip-static">{artwork.region}</span>
          </div>
          <h1 className="detail-title">{artwork.title}</h1>
          <div className="divider" />

          <div className="detail-attrs">
            <DetailRow label="Artist" value={artwork.artist} />
            <DetailRow label="Year"   value={artwork.year} />
            <DetailRow label="Medium" value={artwork.medium} />
            <DetailRow label="Region" value={artwork.region} />
            {artwork.price && <DetailRow label="Price" value={`₹${artwork.price.toLocaleString('en-IN')}`} />}
          </div>

          <div className="detail-section">
            <h3>About this work</h3>
            <p>{artwork.description}</p>
          </div>

          <div className="detail-section">
            <h3>Historical context</h3>
            <p>{artwork.story}</p>
          </div>

          {artwork.specifications && (
            <div className="detail-section">
              <h3>Product Specifications</h3>
              <div className="detail-specs">
                <SpecRow label="Type" value={artwork.specifications.type} />
                <SpecRow label="Size" value={artwork.specifications.size} />
                <SpecRow label="Material" value={artwork.specifications.material} />
                <SpecRow label="Framing" value={artwork.specifications.framed} />
                <SpecRow label="Shipping" value={artwork.specifications.shipping} />
                <SpecRow label="Online Learning" value={artwork.specifications.onlineLearning ? '✓ Learn to paint this style online' : 'Not available'} />
              </div>
            </div>
          )}

          <div className="detail-tags">
            {artwork.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          <button
            className={`detail-cart-btn ${inCart ? 'in-cart' : ''}`}
            onClick={() => { if (!inCart) addToCart(artwork) }}
            disabled={inCart}
          >
            {inCart ? '✓ Added to Cart' : '+ Add to Cart'}
          </button>
          <button className="detail-buy-btn" onClick={() => setShowCheckout(true)}>
            Buy Now — ₹{artwork.price ? artwork.price.toLocaleString('en-IN') : 'Contact for price'}
          </button>
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal artwork={artwork} onClose={() => setShowCheckout(false)} />
      )}

      {related.length > 0 && (
        <section className="section detail-related">
          <div className="container">
            <p className="label">From the same tradition</p>
            <div className="divider" />
            <h2 style={{ marginBottom: 32, fontSize: 32 }}>Related Artworks</h2>
            <div className="related-grid">
              {related.map(a => <ArtCard key={a.id} artwork={a} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <span className="detail-row-label">{label}</span>
      <span className="detail-row-value">{value}</span>
    </div>
  )
}

function SpecRow({ label, value }) {
  return (
    <div className="detail-row">
      <span className="detail-row-label">{label}</span>
      <span className="detail-row-value">{value}</span>
    </div>
  )
}
