import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ARTWORKS, SITE_CONFIG } from '../data/artworks'
import RequestModal from '../components/RequestModal'
import './About.css'

const TEAM = [
  { name: 'Ravichandra D', role: 'President', bio: 'Author of "Hase Chittara" — the definitive cultural documentation of the Chittara art tradition. Art historian specialising in South Asian visual traditions and folk art of Karnataka.' },
  { name: 'Meghana M B', role: 'Secretary', bio: 'PhD in Heritage Studies, Jawaharlal Nehru University. Documents endangered craft traditions across rural India.' },
  { name: 'Usha G A', role: 'Vice Secretary', bio: 'Oversees digitisation and metadata standards for the collection. Previously with the British Library Asian & African Studies division.' },
  { name: 'Laxmamma Gademane', role: 'Chief Promoter', bio: 'Dedicated to promoting and preserving the Chittara art tradition within the Deewaru community and beyond.' },
  { name: 'Chandrashekhar Sirivante', role: 'Team Member', bio: 'Supports the preservation and promotion of heritage art and cultural traditions of Karnataka.' },
  { name: 'Suresh Balegundi', role: 'Team Member', bio: 'Actively involved in outreach and community engagement initiatives for traditional art forms.' },
  { name: 'Nagaraj Nerige', role: 'Team Member', bio: 'Works on documentation and research of folk art traditions in rural Karnataka.' },
  { name: 'Dr. Mohan Chandragutti', role: 'Team Member', bio: 'Academic advisor specializing in cultural heritage and traditional art forms.' },
  { name: 'Krishnamurthy Mandagalale', role: 'Team Member', bio: 'Contributes to heritage conservation efforts and community outreach programs.' },
  { name: 'Shridhar Idur', role: 'Team Member', bio: 'Supports the mission of preserving and promoting indigenous art traditions.' },
  { name: 'Dr. Neelesh', role: 'Team Member', bio: 'Research consultant specializing in folk art and cultural studies.' },
  { name: 'Dr. Annaporna', role: 'Team Member', bio: 'Academic advisor focusing on heritage preservation and cultural documentation.' },
  { name: 'Dr. Shivappa', role: 'Team Member', bio: 'Advisor on traditional art forms and their contemporary relevance.' },
]

const INTRO_ITEMS = [
  { label: 'Etymology', text: "The Kannada word Chittara is related to the Sanskrit word chittra which means 'to draw'." },
  { label: 'Origin', text: "Chittara is an indigenous art form originating from Karnataka. The intricate patterns of Karnataka's Chittara folk art depict life's rituals and momentous ceremonies as geometric patterns." },
  { label: 'Location', text: 'Chittara painting is a folk art originating from the Malnad region, Karnataka. It is practised in the villages of Hasunvanthe, Honnemaradu, and Majina Kaanu (in the Shimoga district of South Karnataka) in the Western Ghats.' },
  { label: 'Community', text: "These murals are traditionally painted by the Deewaru community. They not only make wall paintings but also create floor paintings or rangoli. The majority of the community's women participate in it as a socio-cultural practice that represents an example of socio-cultural dynamics." },
  { label: 'Relevance', text: 'These paintings depict the important events of their lives; such as weddings, festivities, and other auspicious occasions and life cycle rituals.' },
]

const HISTORY_ITEMS = [
  { label: 'Historical background', text: 'Since the Deewaru community is heavily populated and vastly spread out, there are many types of Chittara paintings. Namely, Theru Chittara which illustrates the temple chariot paintings, Cheeku Bagilu Chinmaani which represents the energy of the mind, Hadhinaaru Moole Arathi and Mumdige Chittara which are mural paintings, and Chittara Chaavadi that hold various themes.' },
  { label: 'Culture and societies', text: 'This is an art form that is exclusively practised by the women folk of the Deewaru tribe. Interestingly, they are a matriarchal community. These paintings are made on occasions of socio-cultural importance. The Deewaru community is an agricultural community that grows cash crops and also weaves baskets.' },
  { label: 'Religious significance', text: 'The Deewaru community are nature worshippers. In their community belief system, water has significant importance. Their art reflects the significance nature has over them as their central theme revolves around nature and its elements. There is a highly significant festival of Bhoomi Hunnime where they offer their appreciation to mother earth for their harvest. To celebrate this festival, the women folk collaborate and decorate the outer walls and floors of their huts.' },
]

export default function About() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="about-page page-enter">

      {/* Header */}
      <div className="about-header">
        <div className="container">
          <p className="label">Who we are</p>
          <div className="divider" />
          <h1 className="about-heading">About {SITE_CONFIG.name}</h1>
        </div>
      </div>

      <div className="container about-body">

        {/* Mission */}
        <section className="about-section about-mission">
          <div className="about-section-label">
            <p className="label">Our Mission</p>
          </div>
          <div className="about-section-content">
            <h2>Heritage is not the past — it is the present speaking through time</h2>
            <div className="divider" />
            <p>{SITE_CONFIG.about.mission}</p>
            <p style={{ marginTop: 16 }}>{SITE_CONFIG.about.vision}</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="about-section">
          <div className="about-section-label">
            <p className="label">Introduction</p>
          </div>
          <div className="about-section-content">
            <h2>What is Chittara?</h2>
            <div className="divider" />
            {INTRO_ITEMS.map(({ label, text }) => (
              <p key={label} style={{ marginBottom: 16 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--ink)' }}>
                  {label}:{' '}
                </strong>
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="about-section">
          <div className="about-section-label">
            <p className="label">History</p>
          </div>
          <div className="about-section-content">
            <h2>The story behind Chittara</h2>
            <div className="divider" />
            {HISTORY_ITEMS.map(({ label, text }) => (
              <p key={label} style={{ marginBottom: 16 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--ink)' }}>
                  {label}:{' '}
                </strong>
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* Cultural Documentation — Book */}
        <section className="about-section">
          <div className="about-section-label">
            <p className="label">Cultural Documentation</p>
          </div>
          <div className="about-section-content">
            <h2>Published Works</h2>
            <div className="divider" />
            <div className="book-card">
              <div className="book-cover">
                <span className="book-cover-title">Hase Chittara</span>
                <span className="book-cover-author">Ravichandra D</span>
              </div>
              <div className="book-info">
                <p className="book-label">Book</p>
                <h3 className="book-title">Hase Chittara</h3>
                <p className="book-author">by Ravichandra D</p>
                <p className="book-desc">
                  The definitive cultural documentation of the Chittara art tradition of the Deewaru community. This book traces the origins, symbolism, techniques, and social significance of Chittara — from its roots in the Malnad region to its place in contemporary folk art. Written in both Kannada and English, it serves as an essential reference for researchers, artists, and art lovers.
                </p>
                <div className="book-meta">
                  <span>Language: Kannada / English</span>
                  <span>Subject: Folk Art · Heritage · Karnataka</span>
                </div>
                <a href={`mailto:${SITE_CONFIG.about.contact}?subject=Enquiry about Hase Chittara book`} className="btn-primary" style={{ display: 'inline-block', marginTop: 20 }}>
                  Enquire to Purchase
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <p className="label" style={{ marginBottom: 32 }}>What drives us</p>
          <div className="values-grid">
            {[
              { icon: '◎', title: 'Authenticity', text: 'We work directly with master artisans and art historians to ensure every piece is accurately documented and contextualised.' },
              { icon: '◈', title: 'Accessibility', text: 'Heritage art belongs to everyone. We believe in open access to cultural knowledge across all languages and geographies.' },
              { icon: '◉', title: 'Preservation', text: 'Many art traditions are at risk of extinction. We actively support living practitioners through documentation and advocacy.' },
              { icon: '◇', title: 'Scholarship', text: 'Every artwork in our collection is backed by rigorous research, primary sources, and peer-reviewed historical context.' },
            ].map(v => (
              <div className="value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="about-team">
          <p className="label">The people behind the project</p>
          <div className="divider" />
          <h2 style={{ marginBottom: 40, fontSize: 36 }}>Our Team</h2>
          <div className="team-grid">
            {TEAM.map(member => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="team-info">
                  <strong className="team-name">{member.name}</strong>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="about-contact">
          <div className="contact-inner">
            <h2>Get in touch</h2>
            <p>We welcome contributions, collaborations with institutions, and inquiries from researchers and art lovers around the world.</p>
            <div className="contact-links">
              <a href={`mailto:${SITE_CONFIG.about.contact}`} className="contact-link-item">
                <span className="contact-icon">✉</span>
                <span>{SITE_CONFIG.about.contact}</span>
              </a>
              <a href={`tel:${SITE_CONFIG.about.phone}`} className="contact-link-item">
                <span className="contact-icon">📞</span>
                <span>{SITE_CONFIG.about.phone}</span>
              </a>
              <a href={SITE_CONFIG.about.instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-icon">📸</span>
                <span>@{SITE_CONFIG.about.instagram}</span>
              </a>
            </div>
            <div style={{ marginTop: 32 }}>
              <Link to="/gallery" className="btn-primary">Explore the Collection</Link>
            </div>
          </div>
        </section>

      </div>

      {/* ── Shop section ── */}
      <section className="shop-section" id="shop">
        <div className="container">
          <p className="label">Support the Artists</p>
          <div className="divider" />
          <h2 className="shop-heading">Buy Original Artwork</h2>
          <p className="shop-subhead">
            Every piece is handcrafted by women artists of the Deewaru community.
            Request an artwork and we will connect you directly with the artist,
            share the price, and process your payment securely via Razorpay.
          </p>

          <div className="how-it-works">
            {[
              { step: '01', title: 'Request', desc: 'Fill in your details and shipping address for the artwork you love.' },
              { step: '02', title: 'We Contact You', desc: 'We respond within 48 hours with price, availability, and artist details.' },
              { step: '03', title: 'Pay Securely', desc: 'Pay via Razorpay — UPI, cards, net banking all accepted.' },
              { step: '04', title: 'Delivered to You', desc: 'Artwork is carefully packed and shipped to your address.' },
            ].map(s => (
              <div className="step-card" key={s.step}>
                <span className="step-num">{s.step}</span>
                <strong className="step-title">{s.title}</strong>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="shop-grid">
            {ARTWORKS.map(artwork => (
              <div className="shop-card" key={artwork.id}>
                <div className="shop-card-image">
                  <img src={artwork.image} alt={artwork.title} loading="lazy" />
                </div>
                <div className="shop-card-body">
                  <p className="shop-card-meta">{artwork.era} · {artwork.region}</p>
                  <h3 className="shop-card-title">{artwork.title}</h3>
                  <p className="shop-card-artist">{artwork.artist}</p>
                  <p className="shop-card-medium">{artwork.medium}</p>
                  <div className="shop-card-footer">
                    <span className="shop-price-tag">Price on request</span>
                    <button className="btn-buy" onClick={() => setSelected(artwork)}>
                      Request to Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="razorpay-notice">
            <span>🔒</span>
            <p>Payments are processed securely via <strong>Razorpay</strong> — supporting UPI, credit/debit cards, and net banking. You will receive a payment link after we confirm your request.</p>
          </div>
        </div>
      </section>

      {selected && <RequestModal artwork={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
