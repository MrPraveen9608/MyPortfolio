import { useEffect, useRef } from 'react'

export default function CanvasBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const STAR_COUNT = 220
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:       Math.random() * window.innerWidth,
      y:       Math.random() * window.innerHeight,
      r:       Math.random() * 1.6 + 0.3,
      speed:   Math.random() * 0.3 + 0.05,
      depth:   Math.random() * 3 + 1,
      alpha:   Math.random() * 0.6 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
    }))

    let scrollY = 0
    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll)

    const shoots = []
    function shootingStar() {
      shoots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len:   80 + Math.random() * 100,
        speed: 6 + Math.random() * 4,
        alpha: 1,
        angle: Math.PI / 5,
      })
    }
    function drawShoots() {
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i]
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.alpha -= 0.025
        if (s.alpha <= 0) { shoots.splice(i, 1); continue }
        const grd = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        )
        grd.addColorStop(0, `rgba(255,255,255,${s.alpha})`)
        grd.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len)
        ctx.strokeStyle = grd
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    let animId
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const scroll_factor = scrollY * 0.0004

      stars.forEach(s => {
        s.twinkle += 0.02
        const tw    = 0.5 + 0.5 * Math.sin(s.twinkle)
        const alpha = s.alpha * tw
        const rawY  = (s.y - scrollY * s.depth * 0.025) % canvas.height
        const dy    = rawY < 0 ? rawY + canvas.height : rawY
        const radius = s.r * (1 + scroll_factor * s.depth * 0.4)

        ctx.beginPath()
        ctx.arc(s.x, dy, Math.max(0.1, radius), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,175,255,${alpha})`
        ctx.fill()

        if (s.depth > 2.5) {
          ctx.beginPath()
          ctx.arc(s.x, dy, radius * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(108,99,255,${alpha * 0.12})`
          ctx.fill()
        }
      })

      if (Math.random() < 0.003) shootingStar()
      drawShoots()
      animId = requestAnimationFrame(drawStars)
    }

    drawStars()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <canvas id="bg-canvas" ref={canvasRef} />
}
