import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} style={navStyle}>
      <a href="#hero" style={logoStyle}>KP<span style={{ color:'var(--accent)' }}>.</span></a>

      <ul className={`nav-links${open ? ' open' : ''}`} style={linksStyle}>
        {['about','projects','resume','certs','contact'].map(id => (
          <li key={id}>
            <a href={`#${id}`} onClick={close} style={linkItemStyle}>{id.charAt(0).toUpperCase()+id.slice(1)}</a>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle nav"
        style={toggleStyle}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

const navStyle = {
  position:'fixed', top:0, left:0, right:0,
  height:'var(--nav-h)',
  zIndex:100,
  display:'flex', alignItems:'center', justifyContent:'space-between',
  padding:'0 5vw',
  background:'rgba(5,5,15,0.6)',
  backdropFilter:'blur(18px)',
  borderBottom:'1px solid var(--border)',
  transition:'background var(--transition)',
}
const logoStyle = {
  fontFamily:"'Orbitron',monospace",
  fontSize:'1.35rem', fontWeight:900,
  color:'var(--primary)',
  letterSpacing:'2px',
  textShadow:'0 0 18px var(--glow-p)',
}
const linksStyle = {
  display:'flex', gap:'2rem', alignItems:'center',
}
const linkItemStyle = {
  fontSize:'.9rem', fontWeight:500,
  color:'var(--muted)',
  position:'relative', padding:'4px 0',
  transition:'color var(--transition)',
}
const toggleStyle = {
  display:'none', background:'none', border:'none', cursor:'pointer',
}
