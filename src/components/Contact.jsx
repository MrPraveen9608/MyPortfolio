import { useRevealOnMount } from '../hooks/useScrollReveal'

export default function Contact() {
  useRevealOnMount()

  return (
    <section id="contact">
      <div style={innerStyle}>
        <span className="section-badge reveal">📬 Contact</span>
        <h2 className="section-title reveal delay-1">Let's <span className="hl">Connect</span></h2>
        <p className="section-sub reveal delay-2">
          Whether you want to collaborate, chat about tech, or just say hi
          — I'm always open.
        </p>
        <div className="reveal delay-3" style={{ display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center' }}>
          <a href="https://github.com/MrPraveen9608" target="_blank" rel="noopener" style={linkStyle}>
            <span style={{ fontSize:'1.1rem' }}>🐙</span> GitHub
          </a>
          <a href="mailto:praveenkorra9608@gmail.com" style={linkStyle}>
            <span style={{ fontSize:'1.1rem' }}>✉️</span> Email
          </a>
        </div>
      </div>
    </section>
  )
}

const innerStyle = {
  maxWidth:'600px', margin:'0 auto',
  display:'flex', flexDirection:'column',
  alignItems:'center', textAlign:'center', gap:'1.5rem',
}
const linkStyle = {
  display:'flex', alignItems:'center', gap:'.5rem',
  padding:'.7rem 1.4rem',
  borderRadius:'10px',
  background:'var(--surface)',
  border:'1.5px solid var(--border)',
  fontSize:'.88rem', fontWeight:500,
  color:'var(--text)',
  transition:'all var(--transition)',
}
