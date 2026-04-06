import { useEffect, useRef } from 'react'
import { useRevealOnMount } from '../hooks/useScrollReveal'

const skills = [
  { name:'Java',             pct:55 },
  { name:'C++',              pct:45 },
  { name:'Machine Learning', pct:30 },
  { name:'Problem Solving',  pct:50 },
]

export default function About() {
  useRevealOnMount()
  const skillsRef   = useRef(null)
  const profileWrap = useRef(null)
  const profileCard = useRef(null)

  /* skill bars animate on scroll */
  useEffect(() => {
    const block = skillsRef.current
    if (!block) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          block.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
            setTimeout(() => { bar.style.width = bar.dataset.pct + '%' }, i * 150)
          })
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    obs.observe(block)
    return () => obs.disconnect()
  }, [])

  /* profile card tilt */
  useEffect(() => {
    const wrap = profileWrap.current
    const card = profileCard.current
    if (!wrap || !card) return
    const onMove = ev => {
      const r = wrap.getBoundingClientRect()
      const x = (ev.clientX - r.left) / r.width  - 0.5
      const y = (ev.clientY - r.top)  / r.height - 0.5
      card.style.transform = `rotateX(${-y*18}deg) rotateY(${x*18}deg)`
      card.style.animation = 'none'
    }
    const onLeave = () => { card.style.transform = ''; card.style.animation = '' }
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)
    return () => { wrap.removeEventListener('mousemove', onMove); wrap.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section id="about" style={{ background:'rgba(10,10,30,0.5)' }}>
      <div className="about-grid" style={gridStyle}>
        {/* Left */}
        <div className="profile-3d-wrap reveal" ref={profileWrap} style={profileWrapStyle}>
          <div style={{ width:'260px', height:'300px', transformStyle:'preserve-3d', animation:'float3d 7s ease-in-out infinite .5s', position:'relative' }} ref={profileCard}>
            <div style={profileInnerStyle}>
              <div style={bigAvatarStyle}>KP</div>
              <div style={{ fontFamily:"'Orbitron',monospace", fontSize:'1rem', fontWeight:700, color:'var(--text)', textAlign:'center', position:'relative', zIndex:1 }}>K. Praveen</div>
              <div style={{ fontSize:'.78rem', color:'var(--accent)', textAlign:'center', position:'relative', zIndex:1 }}>Sree Datta College</div>
            </div>
          </div>
          <div style={statGridStyle}>
            {[['2nd','BTech Year'],['CSIT','B Section'],['HYD','Hyderabad'],['∞','Curiosity']].map(([n,l],i) => (
              <div key={l} className={`stat-card reveal delay-${i+1}`} style={statCardStyle}>
                <div style={statNumStyle}>{n}</div>
                <div style={statLabelStyle}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="about-content" style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
          <div>
            <span className="section-badge reveal">👤 About Me</span>
            <h2 className="section-title reveal delay-1">Hey, I'm <span className="hl">Praveen</span></h2>
            <p className="section-sub reveal delay-2">
              I'm a passionate Computer Science student currently in my second year of BTech (CSIT-B)
              at Sree Datta College of Engineering, Ibrahim Patnam. I live in Hayathnagar, Hyderabad,
              and I'm on a mission to master software development and machine intelligence.
              I believe strong focus and consistent effort can unlock anything.
            </p>
          </div>

          <div className="info-list reveal delay-1" style={{ display:'flex', flexDirection:'column', gap:'.9rem' }}>
            {[
              ['🎓','College','Sree Datta College of Engineering, Ibrahim Patnam'],
              ['📚','Programme','BTech – CSIT, B Section · 2nd Year'],
              ['📍','Location','Hayathnagar, Hyderabad, Telangana'],
              ['🛠️','Currently Learning','Java · C++ · Machine Learning'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display:'flex', alignItems:'flex-start', gap:'.8rem' }}>
                <div style={infoIconStyle}>{icon}</div>
                <div>
                  <div style={{ fontSize:'.7rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'1px' }}>{label}</div>
                  <div style={{ fontSize:'.9rem', color:'var(--text)', fontWeight:500 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="reveal delay-2" ref={skillsRef}>
            <p style={{ fontWeight:600, marginBottom:'1rem', color:'var(--text)' }}>Skills in Progress</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              {skills.map(s => (
                <div key={s.name} style={{ display:'flex', flexDirection:'column', gap:'.4rem' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.82rem' }}>
                    <span style={{ color:'var(--text)', fontWeight:500 }}>{s.name}</span>
                    <span style={{ color:'var(--muted)' }}>{s.pct}%</span>
                  </div>
                  <div style={barBgStyle}>
                    <div className="skill-bar-fill" data-pct={s.pct} style={barFillStyle} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobby */}
          <div className="hobby-card reveal delay-3" style={hobbyCardStyle}>
            <div style={hobbyIconStyle}>🎮</div>
            <div>
              <div style={{ fontWeight:600, fontSize:'.95rem', color:'var(--text)', marginBottom:'3px' }}>Online Gaming</div>
              <div style={{ fontSize:'.82rem', color:'var(--muted)' }}>
                Playing online games helps me unwind and recharge.
                It sharpens my reaction time, strategic thinking, and that
                relentless <em>strong focus</em> I bring into coding too.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const gridStyle = {
  display:'grid', gridTemplateColumns:'1fr 1.4fr',
  gap:'4rem', alignItems:'start',
  maxWidth:'1200px', margin:'0 auto',
}
const profileWrapStyle = {
  perspective:'900px', display:'flex',
  flexDirection:'column', alignItems:'center', gap:'1.5rem',
}
const profileInnerStyle = {
  position:'absolute', inset:0,
  borderRadius:'20px',
  background:'linear-gradient(145deg,var(--surface),rgba(67,232,200,.08))',
  border:'1.5px solid var(--border)',
  boxShadow:'0 25px 70px rgba(0,0,0,.55)',
  display:'flex', flexDirection:'column',
  alignItems:'center', justifyContent:'center', gap:'.8rem',
  padding:'1.5rem', overflow:'hidden',
}
const bigAvatarStyle = {
  width:'100px', height:'100px', borderRadius:'50%',
  background:'linear-gradient(135deg,var(--primary),var(--accent))',
  display:'flex', alignItems:'center', justifyContent:'center',
  fontSize:'2.8rem', fontWeight:900, color:'#fff',
  fontFamily:"'Orbitron',monospace",
  boxShadow:'0 0 35px var(--glow-p)',
  position:'relative', zIndex:1,
}
const statGridStyle = {
  display:'grid', gridTemplateColumns:'1fr 1fr',
  gap:'.8rem', width:'260px',
}
const statCardStyle = {
  background:'var(--surface)',
  border:'1px solid var(--border)',
  borderRadius:'var(--radius)', padding:'.9rem',
  textAlign:'center',
  transition:'transform var(--transition), box-shadow var(--transition)',
}
const statNumStyle = {
  fontFamily:"'Orbitron',monospace",
  fontSize:'1.4rem', fontWeight:900, color:'var(--primary)',
}
const statLabelStyle = { fontSize:'.72rem', color:'var(--muted)', marginTop:'2px' }
const infoIconStyle = {
  width:'36px', height:'36px', flexShrink:0,
  borderRadius:'8px',
  background:'rgba(108,99,255,0.12)',
  border:'1px solid var(--border)',
  display:'flex', alignItems:'center', justifyContent:'center',
  fontSize:'.9rem', color:'var(--primary)',
}
const barBgStyle = {
  height:'6px', borderRadius:'3px',
  background:'rgba(255,255,255,.06)', overflow:'hidden',
}
const barFillStyle = {
  height:'100%', borderRadius:'3px',
  background:'linear-gradient(90deg,var(--primary),var(--accent))',
  width:0,
  transition:'width 1.2s cubic-bezier(.4,0,.2,1)',
  boxShadow:'0 0 8px var(--glow-p)',
}
const hobbyCardStyle = {
  background:'var(--surface)',
  border:'1px solid var(--border)',
  borderRadius:'var(--radius)', padding:'1.2rem 1.5rem',
  display:'flex', alignItems:'center', gap:'1rem',
}
const hobbyIconStyle = {
  fontSize:'2rem', width:'52px', height:'52px',
  display:'flex', alignItems:'center', justifyContent:'center',
  background:'rgba(108,99,255,0.12)', borderRadius:'10px',
}
