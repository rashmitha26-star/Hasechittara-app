import React from 'react'
import './WomenEmpowerment.css'

const stories = [
  {
    name: 'Renukamma',
    role: 'Master Artist',
    story: 'Renukamma has been painting Chittara for over 30 years. Through this platform, she now earns a sustainable income and has trained 12 young women in her village.',
  },
  {
    name: 'Ravichandra D',
    role: 'Community Leader & Artist',
    story: 'Ravichandra leads the women\'s collective in Hasunvanthe. He believes Chittara is not just art — it is the voice of their community, and selling it gives that voice power.',
  },
  {
    name: 'Usha G A',
    role: 'Young Artist',
    story: 'Usha is one of the passionable Chittara artists. She combines traditional patterns with contemporary themes, keeping the art form alive for a new generation.',
  },
]

export default function WomenEmpowerment() {
  return (
    <div className="women-page page-enter">
      <div className="women-header">
        <div className="container">
          <p className="label">Strength Through Art</p>
          <div className="divider" />
          <h1>Women Empowerment</h1>
          <p className="women-subhead">
            Chittara has always been the art of women. We are committed to ensuring it remains a source of pride, identity, and livelihood for the women who carry it forward.
          </p>
        </div>
      </div>

      <div className="container women-body">
        <div className="women-mission">
          <h2>Our Commitment</h2>
          <p>
            The Deewaru community is matriarchal — women have always been the keepers of Chittara. Our mission is to amplify their voices, ensure fair compensation, and create opportunities for women artists to thrive economically and creatively.
          </p>
          <div className="women-stats">
            <div className="women-stat"><span>50+</span><p>Women Artists Supported</p></div>
            <div className="women-stat"><span>12</span><p>Villages Reached</p></div>
            <div className="women-stat"><span>100%</span><p>Revenue to Artists</p></div>
          </div>
        </div>

        <div className="women-stories">
          <h2>Artist Stories</h2>
          <div className="stories-grid">
            {stories.map(s => (
              <div className="story-card" key={s.name}>
                <div className="story-avatar">{s.name[0]}</div>
                <h3>{s.name}</h3>
                <p className="story-role">{s.role}</p>
                <p className="story-text">{s.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
