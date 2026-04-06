export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Built with <span style={{ color:'var(--accent)' }}>♥</span> by <span style={{ color:'var(--accent)' }}>K. Praveen</span> · 2025 · Hayathnagar, Hyderabad</p>
    </footer>
  )
}

const footerStyle = {
  position:'relative', zIndex:1,
  textAlign:'center',
  padding:'2rem 5vw',
  borderTop:'1px solid var(--border)',
  color:'var(--muted)', fontSize:'.82rem',
}
