import { useRevealOnMount } from '../hooks/useScrollReveal'
import { buildPublicAssetPath } from '../utils/publicAsset'

const certs = [
  {
    id: '4Y7LN4V6AT3M',
    name: 'Coursera Certificate — I',
    file: 'Coursera 4Y7LN4V6AT3M.pdf',
    dlName: 'Coursera_4Y7LN4V6AT3M.pdf',
  },
  {
    id: '64W0THDFWP7W',
    name: 'Coursera Certificate — II',
    file: 'Coursera 64W0THDFWP7W.pdf',
    dlName: 'Coursera_64W0THDFWP7W.pdf',
  },
]

export default function Certs({ openModal }) {
  useRevealOnMount()

  return (
    <section id="certs" style={{ background:'rgba(10,10,30,0.4)' }}>
      <div style={{ textAlign:'center', marginBottom:'3rem' }}>
        <span className="section-badge reveal">🏆 Certificates</span>
        <h2 className="section-title reveal delay-1">My <span className="hl">Certificates</span></h2>
        <p className="section-sub reveal delay-2" style={{ margin:'0 auto' }}>
          Certifications I've earned through online learning — click to view any certificate.
        </p>
      </div>

      <div style={gridStyle}>
        {certs.map((c, i) => (
          <div key={c.id} className={`cert-card glow-card reveal${i > 0 ? ' delay-1' : ''}`} style={cardStyle}>
            <div style={{ fontSize:'2.4rem', lineHeight:1 }}>🎓</div>
            <div>
              <p style={{ fontSize:'.8rem', color:'var(--accent)', fontWeight:600, letterSpacing:'.5px', textTransform:'uppercase' }}>Coursera</p>
              <h3 style={{ fontFamily:"'Orbitron',monospace", fontSize:'1rem', color:'var(--text)', lineHeight:1.3, margin:'.3rem 0 .1rem' }}>{c.name}</h3>
              <p style={{ fontSize:'.8rem', color:'var(--muted)' }}>Credential ID: {c.id}</p>
            </div>
            <div style={{ display:'flex', gap:'.8rem', flexWrap:'wrap', marginTop:'.4rem' }}>
              <button
                className="btn btn-primary"
                onClick={() => openModal(buildPublicAssetPath(c.file), c.name, c.dlName)}
              >
                👁 View
              </button>
              <a
                href={buildPublicAssetPath(c.file)}
                download={c.dlName}
                className="btn btn-outline"
              >
                📥 Save
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const gridStyle = {
  display:'grid',
  gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
  gap:'2rem', maxWidth:'900px', margin:'0 auto',
}
const cardStyle = {
  background:'var(--surface)',
  border:'1.5px solid var(--border)',
  borderRadius:'var(--radius)',
  padding:'2rem',
  display:'flex', flexDirection:'column', gap:'1.2rem',
  transition:'border-color var(--transition), box-shadow var(--transition), transform var(--transition)',
}
