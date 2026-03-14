import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMouse, setIsMouse]       = useState(false)
  const pos  = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf  = useRef(null)

  useEffect(() => {
    // Only show on real pointer devices
    const onFirst = () => setIsMouse(true)
    window.addEventListener('mousemove', onFirst, { once: true })

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    setTimeout(() => {
      document.querySelectorAll('a, button, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }, 500)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  if (!isMouse) return null

  return (
    <>
      <div ref={cursorRef} className="fixed w-2.5 h-2.5 bg-terracotta rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" style={{ position: 'fixed' }} />
      <div ref={ringRef} className={`fixed rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-terracotta transition-all duration-300 ${isHovering ? 'w-14 h-14 opacity-25' : 'w-9 h-9 opacity-50'}`} style={{ position: 'fixed' }} />
    </>
  )
}
