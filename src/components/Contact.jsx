import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-16 md:py-28 px-6 sm:px-10 md:px-14 relative overflow-hidden">
      <div className="absolute font-display font-black text-stroke pointer-events-none select-none leading-none whitespace-nowrap hidden md:block"
        style={{ fontSize: '30vw', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Hello
      </div>

      <div className={`relative max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-terracotta mb-4 md:mb-6">Let's create something</p>

        <h2 className="font-display font-black leading-[0.92] tracking-tight mb-8 md:mb-12" style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}>
          Get in <em className="text-terracotta not-italic">touch</em>
        </h2>

        <a href="mailto:aakanksharangdal@email.com" className="font-display italic text-lg md:text-2xl text-dark border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors duration-300 no-underline break-all">
          aakanksharangdal@email.com
        </a>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 md:mt-14">
          {[
            { label: 'LinkedIn',  url: 'https://linkedin.com/in/aakanksha-rangdal' },
            { label: 'YouTube',   url: 'https://www.youtube.com/@tinycanvas' },
            { label: 'Instagram', url: 'https://www.instagram.com/tinycanvas._/' },
          ].map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer"
              className="font-body text-[0.75rem] tracking-[0.14em] uppercase text-dark opacity-50 hover:opacity-100 transition-opacity no-underline">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
