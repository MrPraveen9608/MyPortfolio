import { useEffect, useRef } from 'react'
import { useCountdown } from '../hooks/useCountdown'
import { useRevealOnMount } from '../hooks/useScrollReveal'

const TARGET = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)

export default function Projects() {
  useRevealOnMount()
  const { days, hours, mins, secs } = useCountdown(TARGET)
  const progressRef = useRef(null)

  useEffect(() => {
    const el = progressRef.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { el.style.width = '18%'; obs.unobserve(e.target) }
      })
    }, { threshold: 0.3 })
    obs.observe(el.closest('section'))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects">
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="section-badge reveal">💡 Projects</span>
          <h2 className="section-title reveal delay-1">My <span className="hl">Work</span></h2>
          <p className="section-sub reveal delay-2" style={{ margin:'0 auto' }}>
            Big ideas, being brought to life. Stay tuned.
          </p>
        </div>

        <div className="cs-card glow-card reveal delay-2" style={csCardStyle}>
          {/* floating decoration cards */}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
            {[0,1,2,3].map(i => <div key={i} style={floatCardStyle(i)} />)}
          </div>

          <div style={{ position:'absolute', top:'-60px', left:'50%', transform:'translateX(-50%)', width:'400px', height:'400px', background:'radial-gradient(circle,rgba(108,99,255,.18),transparent 65%)', pointerEvents:'none' }} />

          <div style={{ fontSize:'4rem', marginBottom:'1.5rem', position:'relative', zIndex:1, filter:'drop-shadow(0 0 20px var(--glow-p))', animation:'pulse-icon 3s ease-in-out infinite' }}>🚧</div>
          <h3 style={{ fontFamily:"'Orbitron',monospace", fontSize:'clamp(2rem,5vw,3.2rem)', fontWeight:900, color:'var(--text)', marginBottom:'.5rem', position:'relative', zIndex:1 }}>
            Coming <span style={{ color:'var(--primary)' }}>Soon</span>
          </h3>
          <p style={{ fontSize:'1rem', color:'var(--muted)', maxWidth:'480px', margin:'0 auto 2.5rem', position:'relative', zIndex:1 }}>
            I'm actively building projects in Java, C++ and Machine Learning.
            They'll land here soon — follow along!
          </p>

          {/* Countdown */}
          <div style={countdownStyle}>
            {[['Days',days],['Hours',hours],['Mins',mins],['Secs',secs]].map(([label,val]) => (
              <div key={label} style={cdBoxStyle}>
                <div style={cdNumStyle}>{val}</div>
                <div style={cdLabelStyle}>{label}</div>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div style={progressWrapStyle}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.78rem', color:'var(--muted)', marginBottom:'.5rem' }}>
              <span>Dev progress</span><span>18%</span>
            </div>
            <div style={progressBgStyle}>
              <div ref={progressRef} style={progressFillStyle} />
            </div>
          </div>

          <div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap', justifyContent:'center', position:'relative', zIndex:1 }}>
            {['Java','C++','Machine Learning','Web Dev'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

const csCardStyle = {
  position:'relative', overflow:'hidden',
  borderRadius:'24px',
  background:'linear-gradient(135deg,var(--surface),rgba(108,99,255,.1))',
  border:'1.5px solid var(--border)',
  padding:'4rem 2rem',
  display:'flex', flexDirection:'column', alignItems:'center',
  textAlign:'center',
  boxShadow:'0 0 80px rgba(108,99,255,.12)',
}
const floatCardStyle = i => ({
  position:'absolute',
  width:'100px', height:'120px',
  borderRadius:'12px',
  background:'rgba(108,99,255,.08)',
  border:'1px solid rgba(108,99,255,.2)',
  animation:`float-card-anim 10s ease-in-out infinite`,
  animationDelay: ['0s','-3s','-1.5s','-5s'][i],
  ...[
    { top:'10%', left:'5%' },
    { top:'60%', left:'8%' },
    { top:'15%', right:'5%' },
    { top:'65%', right:'8%' },
  ][i],
})
const countdownStyle = {
  display:'flex', gap:'1.5rem', justifyContent:'center',
  flexWrap:'wrap', marginBottom:'2.5rem', position:'relative', zIndex:1,
}
const cdBoxStyle = {
  display:'flex', flexDirection:'column', alignItems:'center',
  background:'rgba(108,99,255,0.1)',
  border:'1px solid var(--border)',
  borderRadius:'var(--radius)', padding:'.8rem 1.4rem',
  minWidth:'70px',
}
const cdNumStyle = {
  fontFamily:"'Orbitron',monospace",
  fontSize:'1.8rem', fontWeight:900,
  color:'var(--primary)',
  textShadow:'0 0 15px var(--glow-p)',
}
const cdLabelStyle = { fontSize:'.68rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'1px' }
const progressWrapStyle = {
  width:'min(400px,80vw)', margin:'0 auto 2.5rem',
  position:'relative', zIndex:1,
}
const progressBgStyle = {
  height:'8px', borderRadius:'4px',
  background:'rgba(255,255,255,.06)', overflow:'hidden',
}
const progressFillStyle = {
  height:'100%', borderRadius:'4px',
  background:'linear-gradient(90deg,var(--primary),var(--accent))',
  width:0,
  boxShadow:'0 0 12px var(--glow-p)',
  transition:'width 1.5s ease',
}
