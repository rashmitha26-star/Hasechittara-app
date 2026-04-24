import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE_CONFIG } from '../data/artworks'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()
  const { cart } = useCart()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/explore', label: 'Explore' },
    { to: '/about', label: 'About' },
    { to: '/donate', label: 'Donate' },
    { to: '/events', label: 'Events' },
    { to: '/women-empowerment', label: 'Women Empowerment' },
    { to: '/art-education', label: 'Art Based Education' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'solid' : ''}`}>
        <div className="navbar-inner container">
          <Link to="/" className="navbar-brand">
            <span className="brand-name">{SITE_CONFIG.name}</span>
            <span className="brand-sub">{SITE_CONFIG.tagline}</span>
          </Link>

          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <button className="cart-icon-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
