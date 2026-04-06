import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    const items = el.querySelectorAll ? el.querySelectorAll('.reveal') : []
    items.forEach(item => observer.observe(item))
    if (el.classList?.contains('reveal')) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useRevealOnMount(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, deps)
}
