import { Component } from 'react'

const wrapStyle = {
  minHeight: '100vh', display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center',
  background: '#05050f', color: '#e8e8ff',
  fontFamily: "'Inter',sans-serif", gap: '1rem', padding: '2rem',
  textAlign: 'center',
}
const iconStyle = { fontSize: '3rem' }
const headingStyle = { fontFamily: "'Orbitron',monospace", color: '#6c63ff' }
const subStyle = { color: '#7878aa', maxWidth: '480px' }
const btnStyle = {
  marginTop: '1rem', padding: '.7rem 1.6rem',
  background: '#6c63ff', color: '#fff', border: 'none',
  borderRadius: '8px', cursor: 'pointer', fontSize: '.9rem',
  fontWeight: 600,
}

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
    this.handleReset = this.handleReset.bind(this)
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio error:', error, info)
  }

  handleReset() {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={wrapStyle}>
          <div style={iconStyle}>⚠️</div>
          <h2 style={headingStyle}>Something went wrong</h2>
          <p style={subStyle}>An unexpected error occurred. Please try again.</p>
          <button onClick={this.handleReset} style={btnStyle}>
            Try Again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
