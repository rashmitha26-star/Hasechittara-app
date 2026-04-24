import React, { useState } from 'react'
import { SITE_CONFIG } from '../data/artworks'
import './ArtEducation.css'

const programs = [
  {
    title: 'School Outreach Program',
    icon: '🏫',
    desc: 'We bring Chittara art into government schools across the Malnad region, introducing children to their cultural heritage through hands-on painting sessions.',
  },
  {
    title: 'Artist Mentorship',
    icon: '🎨',
    desc: 'Experienced Deewaru artists mentor young women in the community, ensuring the intricate techniques and patterns of Chittara are passed down authentically.',
  },
  {
    title: 'Online Teaching Program',
    icon: '💻',
    desc: 'Live and recorded online classes taught directly by Deewaru master artists. Learn Chittara from home — from basic geometric patterns to advanced compositions. Available in Kannada and English.',
    highlight: true,
  },
  {
    title: 'Cultural Documentation',
    icon: '📖',
    desc: 'Partnering with researchers and universities to document the history, symbolism, and techniques of Chittara for future generations.',
  },
]

const onlineCourses = [
  { level: 'Beginner', title: 'Introduction to Chittara Geometry', duration: '4 weeks', sessions: '8 live sessions', price: '₹1,200', desc: 'Learn the foundational geometric patterns, tools, and natural pigments used in Chittara.' },
  { level: 'Intermediate', title: 'Thematic Chittara Compositions', duration: '6 weeks', sessions: '12 live sessions', price: '₹2,000', desc: 'Create complete Chittara works based on wedding, festival, and nature themes.' },
  { level: 'Advanced', title: 'Mural & Wall Painting Techniques', duration: '8 weeks', sessions: '16 live sessions', price: '₹3,500', desc: 'Master large-scale Chittara murals and traditional wall painting methods used by the Deewaru community.' },
]

export default function ArtEducation() {
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '', phone: '', course: '' })
  const [enrolled, setEnrolled] = useState(false)

  const handleEnroll = e => {
    e.preventDefault()
    setEnrolled(true)
  }

  return (
    <div className="education-page page-enter">
      <div className="education-header">
        <div className="container">
          <p className="label">Learn & Preserve</p>
          <div className="divider" />
          <h1>Art Based Education</h1>
          <p className="education-subhead">
            Education is the bridge between tradition and the future. We use Chittara art as a tool to teach, inspire, and connect communities worldwide.
          </p>
        </div>
      </div>

      <div className="container education-body">

        {/* Programs */}
        <div className="programs-grid">
          {programs.map(p => (
            <div className={`program-card ${p.highlight ? 'highlight' : ''}`} key={p.title}>
              <span className="program-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.highlight && <span className="program-badge">Now Enrolling</span>}
            </div>
          ))}
        </div>

        {/* Online Teaching Program */}
        <div className="online-section">
          <p className="label">Online Teaching Program</p>
          <div className="divider" />
          <h2>Learn Chittara from Anywhere</h2>
          <p className="online-intro">
            Our online classes are taught live by master artists of the Deewaru community via Zoom. Each course includes recorded sessions, a digital pattern booklet, and a certificate of completion.
          </p>

          <div className="courses-grid">
            {onlineCourses.map(c => (
              <div className="course-card" key={c.title}>
                <div className="course-level">{c.level}</div>
                <h3>{c.title}</h3>
                <p className="course-desc">{c.desc}</p>
                <div className="course-meta">
                  <span>⏱ {c.duration}</span>
                  <span>📅 {c.sessions}</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">{c.price}</span>
                  <button className="btn-enroll" onClick={() => setEnrollForm(f => ({ ...f, course: c.title }))}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Enroll Form */}
          <div className="enroll-form-wrap" id="enroll">
            <h3>Register Your Interest</h3>
            {enrolled ? (
              <div className="enroll-success">
                ✓ Thank you! We will contact you within 24 hours with course details and payment link.
              </div>
            ) : (
              <form className="enroll-form" onSubmit={handleEnroll}>
                <div className="enroll-row">
                  <div className="enroll-field">
                    <label>Full Name</label>
                    <input required placeholder="Your name" value={enrollForm.name} onChange={e => setEnrollForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="enroll-field">
                    <label>Email</label>
                    <input type="email" required placeholder="your@email.com" value={enrollForm.email} onChange={e => setEnrollForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className="enroll-row">
                  <div className="enroll-field">
                    <label>Phone</label>
                    <input type="tel" required placeholder="9876543210" value={enrollForm.phone} onChange={e => setEnrollForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                  <div className="enroll-field">
                    <label>Course</label>
                    <select value={enrollForm.course} onChange={e => setEnrollForm(f => ({ ...f, course: e.target.value }))}>
                      <option value="">Select a course</option>
                      {onlineCourses.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn-primary">Submit Enrollment →</button>
              </form>
            )}
          </div>
        </div>

        {/* Get Involved */}
        <div className="education-cta">
          <h2>Get Involved</h2>
          <p>
            Whether you are a teacher, researcher, student, or art enthusiast — there is a place for you in our education initiatives. Reach out to collaborate, volunteer, or enroll.
          </p>
          <div className="cta-contacts">
            <a href={`mailto:${SITE_CONFIG.about.contact}?subject=Art Education Collaboration`} className="cta-contact-item">
              <span>✉</span> {SITE_CONFIG.about.contact}
            </a>
            <a href={`tel:${SITE_CONFIG.about.phone}`} className="cta-contact-item">
              <span>📞</span> {SITE_CONFIG.about.phone}
            </a>
            <a href={SITE_CONFIG.about.instagramUrl} target="_blank" rel="noopener noreferrer" className="cta-contact-item">
              <span>📸</span> @{SITE_CONFIG.about.instagram}
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
