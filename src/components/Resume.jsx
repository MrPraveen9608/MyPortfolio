import { useRevealOnMount } from '../hooks/useScrollReveal'
import { buildAbsoluteAssetUrl, buildPublicAssetPath } from '../utils/publicAsset'

export default function Resume({ openModal }) {
  useRevealOnMount()

  return (
    <section id="resume" style={{ background:'rgba(10,10,30,0.5)' }}>
      <div style={{ textAlign:'center', marginBottom:'3rem' }}>
        <span className="section-badge reveal">📄 Resume</span>
        <h2 className="section-title reveal delay-1">My <span className="hl">Resume</span></h2>
        <p className="section-sub reveal delay-2" style={{ margin:'0 auto' }}>
          View my resume right here — always up to date.
        </p>
      </div>

      <div style={liveStyle}>
        <div className="reveal delay-2" style={{ display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <a
            href={buildPublicAssetPath('RESUME.PRAVEEN.pdf')}
            download="K_Praveen_Resume.pdf"
            className="btn-resume-3d"
          >
            📥 Download Resume
          </a>
          <button
            className="btn-resume-3d"
            style={{ padding:'1.1rem 2.2rem', fontSize:'.9rem' }}
            onClick={() => openModal(buildPublicAssetPath('RESUME.PRAVEEN.pdf'),'K. Praveen — Resume','K_Praveen_Resume.pdf')}
          >
            👁 View Resume
          </button>
        </div>

        {/* Inline PDF viewer – desktop only */}
        <div className="resume-viewer-wrap reveal delay-3" style={viewerWrapStyle}>
          <div style={viewerFrameStyle}>
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(buildAbsoluteAssetUrl('RESUME.PRAVEEN.pdf'))}&embedded=true`}
              title="K. Praveen — Resume"
              style={{ width:'100%', height:'100%', border:'none', display:'block' }}
            />
          </div>
          <p style={{ fontSize:'.82rem', color:'var(--muted)' }}>
            Not loading?{' '}
            <a href={buildPublicAssetPath('RESUME.PRAVEEN.pdf')} target="_blank" rel="noopener" style={{ color:'var(--accent)', textDecoration:'underline' }}>Open in new tab</a>
            {' '}or{' '}
            <a href={buildPublicAssetPath('RESUME.PRAVEEN.pdf')} download="K_Praveen_Resume.pdf" style={{ color:'var(--accent)', textDecoration:'underline' }}>Download directly</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

const liveStyle = {
  maxWidth:'900px', margin:'0 auto',
  display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem',
}
const viewerWrapStyle = {
  width:'100%',
  display:'flex', flexDirection:'column', alignItems:'center', gap:'.8rem',
}
const viewerFrameStyle = {
  width:'100%', height:'640px',
  borderRadius:'16px', overflow:'hidden',
  border:'1.5px solid var(--border)',
  boxShadow:'0 20px 60px rgba(0,0,0,.5), 0 0 40px rgba(108,99,255,.15)',
  background:'var(--surface)',
}
