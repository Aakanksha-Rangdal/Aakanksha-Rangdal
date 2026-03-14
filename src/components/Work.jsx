import { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, tag: 'UX / Product Design / Development', name: 'Plan Voyage', desc: 'Designed the full UI in Figma and built the frontend in React — interactive prototypes and a responsive travel app.', bg: 'linear-gradient(135deg, #2D1B69 0%, #11998e 100%)', span: 'col-span-2', aspect: 'aspect-[16/7]', link: 'https://www.figma.com/design/BfxGIpwySc6y8ShMgUgp0h/PlanVoyage?node-id=0-1' },
  { id: 2, tag: 'React · Node.js · Gemini AI', name: 'PrepSmart', desc: 'AI-powered mock interview platform with Gemini-generated questions and real-time feedback.', bg: 'linear-gradient(135deg, #0a2540 0%, #00b4d8 100%)', span: 'col-span-1', aspect: 'aspect-[4/3]', link: 'https://github.com/Aakanksha-Rangdal/PrepSmart' },
  { id: 3, tag: 'Figma · UI/UX · Freelance', name: 'CareerMate', desc: 'Freelance end-to-end UI/UX design — interactive prototypes, component systems, and user flow screens.', bg: 'linear-gradient(135deg, #C4622D 0%, #1A1208 100%)', span: 'col-span-1', aspect: 'aspect-[4/3]', link: 'https://www.figma.com/design/zOHRbglSdVFqxQF5bWmeKT/CareerMate?node-id=0-1' },
]

function getBgStyle(bg) {
  if (typeof bg === 'string' && bg.includes('gradient')) return { background: bg }
  return { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const inner = (
    <>
      <div className="absolute inset-0 transition-transform duration-700 ease-out" style={{ ...getBgStyle(project.bg), transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
        <div className="font-body text-[0.65rem] md:text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-2 md:mb-3">{project.tag}</div>
        <div className="font-display font-bold text-cream leading-tight mb-2 md:mb-3" style={{ fontSize: project.span === 'col-span-2' ? 'clamp(1.4rem,2.5vw,2.5rem)' : 'clamp(1.2rem,1.8vw,1.8rem)' }}>
          {project.name}
        </div>
        <p className="font-body text-[0.85rem] text-white/55 max-w-md leading-relaxed hidden sm:block" style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 0.4s ease, transform 0.4s ease' }}>
          {project.desc}
        </p>
      </div>
      <div className="absolute top-5 right-5 md:top-8 md:right-8 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300"
        style={{ background: hovered ? '#C4622D' : 'transparent', borderColor: hovered ? '#C4622D' : 'rgba(255,255,255,0.3)', transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)' }}>
        <ArrowIcon />
      </div>
    </>
  )
  const cls = `relative overflow-hidden ${project.aspect} hoverable`
  if (project.link) return (
    <a href={project.link} target="_blank" rel="noreferrer" className={`${cls} ${project.span}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{inner}</a>
  )
  return (
    <div className={`${cls} ${project.span}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{inner}</div>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 sm:px-10 md:px-14 pb-16 md:pb-28">
      <div className="flex justify-between items-end mb-10 md:mb-16 flex-wrap gap-4">
        <h2 className="font-display font-black leading-none tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
          Featured<br /><em className="text-terracotta not-italic">Projects</em>
        </h2>
        <Link to="/projects" className="px-6 md:px-9 py-3 md:py-3.5 font-body text-[0.78rem] tracking-[0.12em] uppercase border-2 border-dark text-dark hover:bg-dark hover:text-cream transition-all duration-300 self-end">
          All Projects →
        </Link>
      </div>
      {/* Mobile: single column stack. Tablet+: 2-col grid */}
      <div className="flex flex-col gap-0.5 sm:grid sm:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
