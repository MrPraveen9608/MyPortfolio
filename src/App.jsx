import { useState } from 'react'
import './App.css'
import CanvasBg from './components/CanvasBg'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certs from './components/Certs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PdfModal from './components/PdfModal'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import DepthBlobs from './components/DepthBlobs'

function App() {
  const [modal, setModal] = useState({ open: false, src: '', title: '', dlName: '' })

  const openModal = (src, title, dlName) => setModal({ open: true, src, title, dlName })
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <DepthBlobs />
      <CanvasBg />
      <Nav />
      <Hero openModal={openModal} />
      <About />
      <Projects />
      <Resume openModal={openModal} />
      <Certs openModal={openModal} />
      <Contact />
      <Footer />
      <ScrollToTop />
      <PdfModal {...modal} onClose={closeModal} />
    </div>
  )
}

export default App
