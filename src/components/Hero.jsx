import { useRef, useEffect } from 'react'
import { useRevealOnMount } from '../hooks/useScrollReveal'

export default function Hero({ openModal }) {
  useRevealOnMount()
  const wrapRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const card = cardRef.current
    if (!wrap || !card) return

    const onMove = ev => {
      const r = wrap.getBoundingClientRect()
      const x = (ev.clientX - r.left)  / r.width  - 0.5
      const y = (ev.clientY - r.top)   / r.height - 0.5
      card.style.transform = `rotateX(${-y*22}deg) rotateY(${x*22}deg)`
      card.style.animation = 'none'
    }
    const onLeave = () => {
      card.style.transform = ''
      card.style.animation = ''
    }
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)
    return () => {
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="hero" style={heroStyle}>
      <div className="hero-inner" style={innerStyle}>
        {/* Left */}
        <div>
          <p className="hero-label reveal" style={labelStyle}>&lt; portfolio v1.0 /&gt;</p>
          <h1 className="hero-name reveal delay-1" style={nameStyle}>
            <div style={{ color:'var(--text)' }}>K.</div>
            <div style={{ color:'var(--primary)', textShadow:'0 0 30px var(--glow-p)' }}>Praveen</div>
          </h1>
          <p className="hero-role reveal delay-2" style={roleStyle}>CS Student &amp; Tech Enthusiast</p>
          <p className="hero-desc reveal delay-3" style={descStyle}>
            BTech 2nd Year · CSIT-B · Sree Datta College, Ibrahim Patnam ·
            Building skills in Java, C++ and Machine Learning —
            one line of code at a time.
          </p>
          <div className="hero-btns reveal delay-4" style={btnsStyle}>
            <a href="#about"    className="btn btn-primary">🚀 About Me</a>
            <a href="#projects" className="btn btn-outline">💡 Projects</a>
            <button
              className="btn-resume-3d btn-resume-hero"
              onClick={() => openModal('/MyPortfolio/RESUME.PRAVEEN.pdf','K. Praveen — Resume','K_Praveen_Resume.pdf')}
            >📄 Resume</button>
          </div>
          <div className="hero-tags reveal delay-4" style={tagsStyle}>
            {['Java','C++','Machine Learning','BTech 2nd Year','Hyderabad'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right – floating 3D card */}
        <div className="hero-card-wrap" ref={wrapRef} style={cardWrapStyle}>
          <div className="orbit orbit-1" style={orbit1Style}><div className="orbit-dot c1" style={orbitDotStyle} /></div>
          <div className="orbit orbit-2" style={orbit2Style}><div className="orbit-dot c2" style={orbitDot2Style} /></div>
          <div className="hero-card-3d" ref={cardRef} style={card3dStyle}>
            <div className="card-face" style={cardFaceStyle}>
              <div style={avatarStyle}>KP</div>
              <div style={cardNameStyle}>K. Praveen</div>
              <div style={cardSubStyle}>Sree Datta College · CSIT-B</div>
              <div style={{ display:'flex', gap:'.4rem', flexWrap:'wrap', justifyContent:'center', position:'relative', zIndex:1 }}>
                <span className="chip">Java</span>
                <span className="chip">C++</span>
                <span className="chip">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const heroStyle = {
  minHeight:'100vh',
  display:'flex', alignItems:'center',
  paddingTop:'calc(var(--nav-h) + 20px)',
  overflow:'hidden',
}
const innerStyle = {
  display:'grid',
  gridTemplateColumns:'1fr 1fr',
  gap:'4rem', alignItems:'center',
  width:'100%', maxWidth:'1200px', margin:'0 auto',
}
const labelStyle = {
  fontFamily:"'JetBrains Mono',monospace",
  fontSize:'.85rem', color:'var(--accent)',
  letterSpacing:'3px', marginBottom:'1.2rem',
}
const nameStyle = {
  fontFamily:"'Orbitron',monospace",
  fontSize:'clamp(2.5rem,6vw,4.4rem)',
  fontWeight:900, lineHeight:1.05,
  marginBottom:'.5rem',
}
const roleStyle = {
  fontSize:'clamp(1rem,2vw,1.3rem)',
  color:'var(--accent)', fontWeight:500,
  marginBottom:'1.2rem',
  display:'flex', alignItems:'center', gap:'.6rem',
}
const descStyle = {
  fontSize:'1rem', color:'var(--muted)',
  maxWidth:'480px', marginBottom:'2rem',
}
const btnsStyle = { display:'flex', gap:'1rem', flexWrap:'wrap' }
const tagsStyle = { display:'flex', gap:'.6rem', flexWrap:'wrap', marginTop:'2rem' }

const cardWrapStyle = {
  perspective:'800px',
  display:'flex', justifyContent:'center', alignItems:'center',
  position:'relative',
}
const card3dStyle = {
  width:'320px', height:'400px',
  position:'relative',
  transformStyle:'preserve-3d',
  animation:'float3d 6s ease-in-out infinite',
}
const cardFaceStyle = {
  position:'absolute', inset:0,
  borderRadius:'20px',
  background:'linear-gradient(135deg,var(--surface),rgba(108,99,255,.15))',
  border:'1.5px solid var(--border)',
  boxShadow:'0 30px 80px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.06)',
  display:'flex', flexDirection:'column',
  alignItems:'center', justifyContent:'center',
  gap:'1rem', padding:'2rem', overflow:'hidden',
}
const avatarStyle = {
  width:'90px', height:'90px', borderRadius:'50%',
  background:'linear-gradient(135deg,var(--primary),var(--accent))',
  display:'flex', alignItems:'center', justifyContent:'center',
  fontSize:'2.4rem', fontWeight:900,
  color:'#fff', fontFamily:"'Orbitron',monospace",
  boxShadow:'0 0 30px var(--glow-p)',
  position:'relative', zIndex:1,
}
const cardNameStyle = {
  fontFamily:"'Orbitron',monospace",
  fontSize:'1.1rem', fontWeight:700,
  color:'var(--text)', textAlign:'center',
  position:'relative', zIndex:1,
}
const cardSubStyle = {
  fontSize:'.8rem', color:'var(--muted)',
  textAlign:'center', position:'relative', zIndex:1,
}
const orbit1Style = {
  position:'absolute', borderRadius:'50%',
  border:'1px dashed rgba(108,99,255,0.3)',
  animation:'orbit-spin 12s linear infinite',
  pointerEvents:'none',
  width:'360px', height:'360px', top:'-30px', left:'-20px',
}
const orbit2Style = {
  ...orbit1Style,
  width:'420px', height:'420px', top:'-60px', left:'-50px',
  animationDuration:'18s', animationDirection:'reverse',
}
const orbitDotStyle = {
  position:'absolute', width:'8px', height:'8px',
  borderRadius:'50%', top:0, left:'50%',
  transform:'translateX(-50%)',
  background:'var(--primary)', boxShadow:'0 0 8px var(--glow-p)',
}
const orbitDot2Style = { ...orbitDotStyle, background:'var(--accent)', boxShadow:'0 0 8px var(--glow-a)' }
