import React, { useState, useMemo } from 'react'
import { ARTWORKS, ERAS, REGIONS, MEDIUMS } from '../data/artworks'
import ArtCard from '../components/ArtCard'
import './Gallery.css'

export default function Gallery() {
  const [era, setEra] = useState('All')
  const [region, setRegion] = useState('All')
  const [medium, setMedium] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return ARTWORKS.filter(a => {
      const matchEra    = era === 'All' || a.era === era
      const matchRegion = region === 'All' || a.region === region
      const matchMedium = medium === 'All' || a.medium === medium
      const matchSearch = !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.artist.toLowerCase().includes(search.toLowerCase())
      return matchEra && matchRegion && matchMedium && matchSearch
    })
  }, [era, region, medium, search])

  const reset = () => { setEra('All'); setRegion('All'); setMedium('All'); setSearch('') }

  return (
    <div className="gallery-page page-enter">
      <div className="gallery-header">
        <div className="container">
          <p className="label">The Collection</p>
          <div className="divider" />
          <h1 className="gallery-heading">Malenadu Hase Chittara Artist Association</h1>
          <p className="gallery-subhead">Browse artworks by era, region, and medium.</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-search-wrap">
          <input
            className="gallery-search"
            type="text"
            placeholder="Search by title or artist…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="filters">
          <FilterGroup label="Era"    options={ERAS}    value={era}    onChange={setEra} />
          <FilterGroup label="Region" options={REGIONS} value={region} onChange={setRegion} />
          <FilterGroup label="Medium" options={MEDIUMS} value={medium} onChange={setMedium} />
          {(era !== 'All' || region !== 'All' || medium !== 'All' || search) && (
            <button className="filter-reset" onClick={reset}>Clear all</button>
          )}
        </div>

        <p className="gallery-count">{filtered.length} artwork{filtered.length !== 1 ? 's' : ''} found</p>

        {filtered.length > 0 ? (
          <div className="gallery-grid">
            {filtered.map(a => <ArtCard key={a.id} artwork={a} />)}
          </div>
        ) : (
          <div className="gallery-empty">
            <p>No artworks match your filters.</p>
            <button className="btn-primary" onClick={reset} style={{ marginTop: 16 }}>Reset filters</button>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="filter-group">
      <span className="filter-label">{label}</span>
      <div className="filter-chips">
        {options.map(o => (
          <button key={o} className={`chip ${value === o ? 'active' : ''}`} onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}
