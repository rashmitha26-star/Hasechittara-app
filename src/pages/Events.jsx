import React from 'react'
import './Events.css'

const events = [
  {
    id: 1,
    title: 'Chittara Art Exhibition 2026',
    date: 'June 15, 2026',
    location: 'Shimoga, Karnataka',
    description: 'A grand showcase of Chittara artworks by the women artists of the Deewaru community. Open to all art lovers.',
  },
  {
    id: 2,
    title: 'Bhoomi Hunnime Festival',
    date: 'August 10, 2026',
    location: 'Hasunvanthe Village, Karnataka',
    description: 'Witness the sacred festival where women collaborate to create elaborate floor paintings as an offering to mother earth.',
  },
  {
    id: 3,
    title: 'Chittara Workshop — Beginners',
    date: 'September 5, 2026',
    location: 'Bengaluru, Karnataka',
    description: 'Learn the basics of Chittara painting directly from master artists. Limited seats available.',
  },
]

export default function Events() {
  return (
    <div className="events-page page-enter">
      <div className="events-header">
        <div className="container">
          <p className="label">What's Happening</p>
          <div className="divider" />
          <h1>Events</h1>
          <p className="events-subhead">
            Join us at exhibitions, festivals, and workshops celebrating the living tradition of Chittara art.
          </p>
        </div>
      </div>
      <div className="container events-body">
        <div className="events-list">
          {events.map(ev => (
            <div className="event-card" key={ev.id}>
              <div className="event-date-badge">{ev.date}</div>
              <div className="event-info">
                <h3>{ev.title}</h3>
                <p className="event-location">📍 {ev.location}</p>
                <p className="event-desc">{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
