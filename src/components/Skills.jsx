import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'UX Research & Strategy', pct: 90 },
  { name: 'Visual & UI Design',      pct: 95 },
  { name: 'Figma / Prototyping',     pct: 92 },
  { name: 'Design Systems',          pct: 80 },
  { name: 'Motion & Interaction',    pct: 75 },
  { name: 'Frontend Development',    pct: 78 },
]

function SkillRow({ name, pct, visible, delay }) {
  return (
    <div className="py-4 md:py-5 border-b border-white/[0.08] flex justify-between items-center gap-4">
      <span className="font-display italic text-[1rem] md:text-[1.25rem] text-cream">{name}</span>
      <div className="w-28 md:w-44 h-[3px] bg-white/10 rounded-full overflow-hidden flex-shrink-0">
        <div className="h-full bg-terracotta rounded-full origin-left" style={{ transform: visible ? `scaleX(${pct / 100})` : 'scaleX(0)', transition: `transform 1s ease ${delay}ms` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-14 md:py-20 px-6 sm:px-10 md:px-14 bg-dark text-cream flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-start md:items-center">
      <div>
        <div className="flex items-center gap-3 font-body text-[0.72rem] tracking-[0.18em] uppercase text-terracotta mb-4 md:mb-5">
          Expertise <span className="flex-1 h-px bg-terracotta opacity-30" />
        </div>
        <h2 className="font-display font-black leading-[1.1] tracking-tight mb-4 md:mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}>
          What I<br />Bring to<br />the Table
        </h2>
        <p className="font-body text-[0.95rem] leading-[1.85] text-white/50 max-w-sm">
          A blend of strategic thinking, visual craft, and technical fluency — grounded in curiosity and care.
        </p>
      </div>
      <div className="w-full">
        {skills.map((s, i) => <SkillRow key={s.name} name={s.name} pct={s.pct} visible={visible} delay={i * 120} />)}
      </div>
    </section>
  )
}
