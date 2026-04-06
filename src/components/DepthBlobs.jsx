import { useEffect, useRef } from 'react'

export default function DepthBlobs() {
  const b1 = useRef(null)
  const b2 = useRef(null)
  const b3 = useRef(null)

  useEffect(() => {
    let scrollY = 0, mx = 0.5, my = 0.5
    let animId

    const onScroll = () => { scrollY = window.scrollY }
    const onMove   = e  => { mx = e.clientX / window.innerWidth; my = e.clientY / window.innerHeight }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMove)

    function anim() {
      if (b1.current) b1.current.style.transform = `translate(${mx*30}px,${-scrollY*.08+my*20}px)`
      if (b2.current) b2.current.style.transform = `translate(${-mx*20}px,${-scrollY*.12+my*15}px)`
      if (b3.current) b3.current.style.transform = `translate(${mx*15}px,${-scrollY*.06+my*10}px)`
      animId = requestAnimationFrame(anim)
    }
    anim()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="depth-layer">
      <div className="depth-blob blob1" ref={b1} />
      <div className="depth-blob blob2" ref={b2} />
      <div className="depth-blob blob3" ref={b3} />
    </div>
  )
}
