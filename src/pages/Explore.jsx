import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ARTWORKS } from '../data/artworks'
import './Explore.css'

const REGIONS_DATA = [
  {
    name: 'Karnataka',
    traditions: ['Chittara Painting', 'Theru Chittara', 'Mumdige Chittara', 'Floor Art'],
    description: 'Home to the ancient Chittara folk art of the Deewaru community. Practised in the villages of the Malnad region in the Western Ghats, this art form has been kept alive for centuries by the women of the Deewaru tribe.',
    color: '#8B3A2A',
    artworks: ARTWORKS.filter(a => a.region === 'Karnataka'),
  },
]

const TIMELINE = [
  { era: 'Ancient Origins', period: 'Pre-history', note: 'Earliest geometric patterns and ritual art of the Deewaru tribe' },
  { era: 'Ritual Practice', period: 'Medieval period', note: 'Chittara established as a socio-cultural practice for weddings and festivals' },
  { era: 'Bhoomi Hunnime', period: 'Ongoing tradition', note: 'Annual festival where women paint walls and floors in celebration of harvest' },
  { era: 'Documentation', period: '20th century', note: 'Scholars begin documenting Chittara as a significant folk art tradition' },
  { era: 'Recognition', period: '21st century', note: 'Chittara gains national and international recognition as a heritage art' },
  { era: 'Revival', period: 'Present day', note: 'Young women artists continue and evolve the tradition through platforms like this' },
]

export default function Explore() {
  const [active, setActive] = useState(null)
  const region = active ? REGIONS_DATA.find(r => r.name === active) : null

  return (
    <div className="explore-page page-enter">
      <div className="explore-header">
        <div className="container">
          <p className="label">By Region</p>
          <div className="divider" />
          <h1 className="explore-heading">Explore</h1>
          <p className="explore-subhead">Select a region to discover its living art traditions.</p>
        </div>
      </div>

      <div className="container explore-body">
        <div className="region-grid">
          {REGIONS_DATA.map(r => (
            <button
              key={r.name}
              className={`region-card ${active === r.name ? 'active' : ''}`}
              style={{ '--accent': r.color }}
              onClick={() => setActive(active === r.name ? null : r.name)}
            >
              <span className="region-name">{r.name}</span>
              <span className="region-count">{r.traditions.length} traditions</span>
            </button>
          ))}
        </div>

        {region && (
          <div className="region-detail" key={region.name}>
            <div className="region-detail-header" style={{ borderColor: region.color }}>
              <div>
                <h2 className="region-detail-title">{region.name}</h2>
                <p className="region-detail-desc">{region.description}</p>
              </div>
              <button className="close-btn" onClick={() => setActive(null)}>✕</button>
            </div>

            <div className="region-traditions">
              <p className="label" style={{ marginBottom: 12 }}>Key traditions</p>
              <div className="tradition-list">
                {region.traditions.map(t => (
                  <span key={t} className="tradition-tag" style={{ borderColor: region.color }}>{t}</span>
                ))}
              </div>
            </div>

            {region.artworks.length > 0 && (
              <div className="region-artworks">
                <p className="label" style={{ marginBottom: 16 }}>From this region</p>
                <div className="region-artwork-list">
                  {region.artworks.map(a => (
                    <Link to={`/artwork/${a.id}`} key={a.id} className="region-artwork-item">
                      <img src={a.image} alt={a.title} />
                      <div>
                        <strong>{a.title}</strong>
                        <span>{a.year}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="era-timeline">
          <p className="label">Timeline of Chittara</p>
          <div className="divider" />
          <div className="timeline">
            {TIMELINE.map(e => (
              <div className="timeline-item" key={e.era}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <strong>{e.era}</strong>
                  <span className="timeline-period">{e.period}</span>
                  <p>{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
