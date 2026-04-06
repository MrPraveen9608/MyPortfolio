import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }
    document.addEventListener('mousemove', onMove)

    function animRing() {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      animId = requestAnimationFrame(animRing)
    }
    animRing()

    const enlarge = () => {
      ring.style.width = '56px'; ring.style.height = '56px'
      ring.style.borderColor = 'var(--accent)'
    }
    const shrink = () => {
      ring.style.width = '36px'; ring.style.height = '36px'
      ring.style.borderColor = 'var(--primary)'
    }

    const targets = document.querySelectorAll('a,button,.stat-card,.hobby-card')
    targets.forEach(el => {
      el.addEventListener('mouseenter', enlarge)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enlarge)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
