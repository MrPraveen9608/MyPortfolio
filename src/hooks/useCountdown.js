import { useState, useEffect, useRef } from 'react'

const pad = n => String(n).padStart(2, '0')

export function useCountdown(targetDate) {
  const [time, setTime] = useState({ days:'00', hours:'00', mins:'00', secs:'00' })
  const targetRef = useRef(targetDate)

  useEffect(() => {
    function tick() {
      const diff = targetRef.current - Date.now()
      if (diff <= 0) {
        setTime({ days:'00', hours:'00', mins:'00', secs:'00' })
        return
      }
      setTime({
        days:  pad(Math.floor(diff / 864e5)),
        hours: pad(Math.floor((diff % 864e5) / 36e5)),
        mins:  pad(Math.floor((diff % 36e5) / 6e4)),
        secs:  pad(Math.floor((diff % 6e4) / 1e3)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
