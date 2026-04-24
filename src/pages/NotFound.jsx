import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound page-enter">
      <span className="notfound-num">404</span>
      <h1>Page not found</h1>
      <p>The artwork or page you are looking for does not exist in our collection.</p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  )
}
