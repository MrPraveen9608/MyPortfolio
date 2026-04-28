import { useEffect, useRef } from 'react'

function revealInViewport() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add('visible')
    }
  })
}

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0 }
    )
    const items = el.querySelectorAll ? el.querySelectorAll('.reveal') : []
    items.forEach(item => {
      if (!item.classList.contains('visible')) observer.observe(item)
    })
    if (el.classList?.contains('reveal') && !el.classList.contains('visible')) {
      observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useRevealOnMount(deps = []) {
  useEffect(() => {
    // Immediately reveal any element already in the viewport
    revealInViewport()

    // Use IntersectionObserver for elements that scroll into view later
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0 }
    )
    document.querySelectorAll('.reveal').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el)
    })

    // Safety fallback: force-reveal everything after 1 s in case IO never fires.
    // This is intentionally shorter than the CSS 2 s animation fallback so JS
    // always wins and the CSS animation (the last line of defence) never fires
    // under normal circumstances.
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
    }, 1000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, deps)
}
