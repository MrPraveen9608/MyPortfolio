import { useEffect, useRef } from 'react'

export default function PdfModal({ open, src, title, dlName, onClose }) {
  const frameRef = useRef(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      if (frameRef.current) frameRef.current.src = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const viewerUrl = src
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(
        `https://mrpraveen9608.github.io${src}`
      )}&embedded=true`
    : ''

  if (!open) return null

  return (
    <div
      style={overlayStyle}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={boxStyle}>
        <div style={headerStyle}>
          <span style={titleStyle}>{title || 'Document'}</span>
          <div style={{ display:'flex', alignItems:'center', gap:'.6rem', flexShrink:0 }}>
            <a href={src} download={dlName || 'document.pdf'} style={dlBtnStyle}>📥 Download</a>
            <button onClick={onClose} style={closeBtnStyle} aria-label="Close">✕</button>
          </div>
        </div>
        <div style={{ flex:1, overflow:'hidden', position:'relative' }}>
          <iframe
            ref={frameRef}
            src={viewerUrl}
            title="PDF Viewer"
            style={{ width:'100%', height:'100%', border:'none', display:'block' }}
          />
        </div>
      </div>
    </div>
  )
}

const overlayStyle = {
  position:'fixed', inset:0, zIndex:600,
  background:'rgba(0,0,0,.88)',
  backdropFilter:'blur(10px)',
  display:'flex', alignItems:'center', justifyContent:'center',
  padding:'1rem',
}
const boxStyle = {
  width:'100%', maxWidth:'920px', height:'90vh',
  background:'var(--surface)',
  border:'1.5px solid var(--border)',
  borderRadius:'18px', overflow:'hidden',
  display:'flex', flexDirection:'column',
  boxShadow:'0 30px 80px rgba(0,0,0,.7),0 0 50px rgba(108,99,255,.2)',
}
const headerStyle = {
  display:'flex', alignItems:'center', justifyContent:'space-between',
  padding:'.8rem 1.2rem', gap:'1rem',
  borderBottom:'1px solid var(--border)', flexShrink:0,
}
const titleStyle = {
  fontFamily:"'Orbitron',monospace", fontSize:'.85rem',
  color:'var(--text)', flex:1, whiteSpace:'nowrap',
  overflow:'hidden', textOverflow:'ellipsis',
}
const dlBtnStyle = {
  padding:'.45rem 1.1rem',
  fontFamily:"'Orbitron',monospace", fontSize:'.78rem', fontWeight:700,
  letterSpacing:'.5px', color:'#fff', textDecoration:'none',
  background:'linear-gradient(135deg,#6c63ff,#43e8c8)',
  borderRadius:'8px', cursor:'pointer', border:'none',
}
const closeBtnStyle = {
  background:'none', border:'none', color:'var(--muted)',
  fontSize:'1.4rem', lineHeight:1, cursor:'pointer', padding:'0 .2rem',
}
