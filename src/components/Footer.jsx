import React from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../data/artworks'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">{SITE_CONFIG.name}</span>
            <p className="footer-tagline">{SITE_CONFIG.tagline}</p>
            <p className="footer-sub">{SITE_CONFIG.subtitle}</p>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Navigate</p>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/about">About</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/events">Events</Link>
              <Link to="/women-empowerment">Women Empowerment</Link>
              <Link to="/art-education">Art Based Education</Link>
            </nav>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact">
              <a href={`mailto:${SITE_CONFIG.about.contact}`} className="footer-contact-item">
                ✉ {SITE_CONFIG.about.contact}
              </a>
              <a href={`tel:${SITE_CONFIG.about.phone}`} className="footer-contact-item">
                📞 {SITE_CONFIG.about.phone}
              </a>
              <a href={SITE_CONFIG.about.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-item footer-instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                @{SITE_CONFIG.about.instagram}
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.tagline} — Preserving living heritage
        </p>
      </div>
    </footer>
  )
}
