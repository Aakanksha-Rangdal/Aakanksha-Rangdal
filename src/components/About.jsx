import { useEffect, useRef, useState } from 'react'

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-16 md:py-28 px-6 sm:px-10 md:px-14 flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20 items-start">
      <div>
        <div className="flex items-center gap-3 font-body text-[0.72rem] tracking-[0.18em] uppercase text-terracotta">
          About me
          <span className="flex-1 h-px bg-terracotta opacity-30" />
        </div>
      </div>

      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display font-bold leading-[1.15] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.8rem)' }}>
          Designing with{' '}
          <em className="text-terracotta not-italic font-display">purpose</em>
          <br />and poetry
        </h2>

        <p className="font-body text-sm md:text-base leading-[1.85] text-warm-gray max-w-[540px]">
          I'm a designer who believes great work lives at the intersection of craft and empathy.
          With a background spanning visual design, UX, and creative strategy, I bring a
          thoughtful, human-centered perspective to every project — from early concepts to
          pixel-perfect execution.
        </p>

        <p className="font-body text-sm md:text-base leading-[1.85] text-warm-gray max-w-[540px] mt-4">
          I'm passionate about building products that feel as good as they look, and stories
          that stick long after the screen goes dark.
        </p>

        <div className="flex flex-wrap gap-8 md:gap-12 mt-10 md:mt-14 pt-8 md:pt-12 border-t border-dark/10">
          {[{ num: '2+', label: 'Years Exp.' }, { num: '10+', label: 'Projects' }, { num: '6+', label: 'Years in tech and design' }].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display font-black text-4xl md:text-5xl text-dark leading-none">{num}</div>
              <div className="font-body text-[0.75rem] tracking-[0.12em] uppercase text-warm-gray mt-2">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
