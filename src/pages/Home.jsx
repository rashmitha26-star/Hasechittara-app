import React from 'react'
import { Link } from 'react-router-dom'
import { ARTWORKS, SITE_CONFIG } from '../data/artworks'
import ArtCard from '../components/ArtCard'
import './Home.css'

const introItems = [
  { label: 'Etymology', text: "The Kannada word Chittara is related to the Sanskrit word chittra which means 'to draw'." },
  { label: 'Origin', text: "Chittara is an indigenous art form originating from Karnataka. The intricate patterns of Karnataka's Chittara folk art depict life's rituals and momentous ceremonies as geometric patterns." },
  { label: 'Location', text: 'Chittara painting is a folk art originating from the Malnad region, Karnataka. It is practised in the villages of Hasunvanthe, Honnemaradu, and Majina Kaanu (in the Shimoga district of South Karnataka) in the Western Ghats.' },
  { label: 'Community', text: "These murals are traditionally painted by the Deewaru community. They not only make wall paintings but also create floor paintings or rangoli. The majority of the community's women participate in it as a socio-cultural practice that represents an example of socio-cultural dynamics." },
  { label: 'Relevance', text: 'These paintings depict the important events of their lives; such as weddings, festivities, and other auspicious occasions and life cycle rituals.' },
]

const historyItems = [
  { label: 'Historical background', text: 'Since the Deewaru community is heavily populated and vastly spread out, there are many types of Chittara paintings. Namely, Theru Chittara which illustrates the temple chariot paintings, Cheeku Bagilu Chinmaani which represents the energy of the mind, Hadhinaaru Moole Arathi and Mumdige Chittara which are mural paintings, and Chittara Chaavadi that hold various themes.' },
  { label: 'Culture and societies', text: 'This is an art form that is exclusively practised by the women folk of the Deewaru tribe. Interestingly, they are a matriarchal community. These paintings are made on occasions of socio-cultural importance. The Deewaru community is an agricultural community that grows cash crops and also weaves baskets.' },
  { label: 'Religious significance', text: 'The Deewaru community are nature worshippers. In their community belief system, water has significant importance. Their art reflects the significance nature has over them as their central theme revolves around nature and its elements. There is a highly significant festival of Bhoomi Hunnime where they offer their appreciation to mother earth for their harvest. To celebrate this festival, the women folk collaborate and decorate the outer walls and floors of their huts.' },
]

export default function Home() {
  const featured = ARTWORKS.slice(0, 3)

  return (
    <div className="home page-enter">

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content container">
          <p className="hero-pre">Est. 2024 · Karnataka, India</p>
          <h1 className="hero-title">{SITE_CONFIG.name}</h1>
          <p className="hero-sub">{SITE_CONFIG.subtitle}</p>
          <div className="hero-actions">
            <Link to="/gallery" className="btn-primary">Explore Gallery</Link>
            <Link to="/about" className="btn-ghost">Our Mission</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <section className="section home-intro">
        <div className="container home-intro-inner">
          <div className="home-intro-text">
            <p className="label">Introduction</p>
            <div className="divider" />
            <h2>Five thousand years of visual memory</h2>

            {introItems.map(({ label, text }) => (
              <p key={label} style={{ marginBottom: 12 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--ink)' }}>
                  {label}:{' '}
                </strong>
                {text}
              </p>
            ))}

            <p className="label" style={{ marginTop: 32, marginBottom: 8 }}>History</p>
            <div className="divider" />

            {historyItems.map(({ label, text }) => (
              <p key={label} style={{ marginBottom: 12 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--ink)' }}>
                  {label}:{' '}
                </strong>
                {text}
              </p>
            ))}
          </div>

          <div className="home-intro-stat-grid">
            {[
              { num: '6+',   label: 'Art Traditions' },
              { num: '5000', label: 'Years of History' },
              { num: '28',   label: 'States Covered' },
              { num: '∞',    label: 'Stories to Tell' },
            ].map(s => (
              <div className="stat-block" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="label">From the collection</p>
          <div className="divider" />
          <h2 className="section-heading">Featured Artworks</h2>
          <div className="home-grid">
            {featured.map(a => <ArtCard key={a.id} artwork={a} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/gallery" className="btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      <section className="home-quote">
        <div className="container">
          <blockquote>
            "Art is not what you see, but what you make others see."
            <cite>— Edgar Degas</cite>
          </blockquote>
        </div>
      </section>

    </div>
  )
}
