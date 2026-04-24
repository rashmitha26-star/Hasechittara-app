import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ArtworkDetail from './pages/ArtworkDetail'
import Explore from './pages/Explore'
import About from './pages/About'
import Donate from './pages/Donate'
import Events from './pages/Events'
import WomenEmpowerment from './pages/WomenEmpowerment'
import ArtEducation from './pages/ArtEducation'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/art-education" element={<ArtEducation />} />
          <Route path="/Support" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
