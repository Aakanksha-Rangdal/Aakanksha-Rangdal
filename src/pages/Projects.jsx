import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

// ─── ADD YOUR PROJECTS HERE ───────────────────────────────────────────────────
// link: put a live URL, GitHub link, or Figma link
// link: null  →  card shows "Case study coming soon" on hover
// filter must be: 'Development' | 'Design' | 'Community'

const ALL_PROJECTS = [
  {
    id: 1,
    tag: 'React · TypeScript · Tailwind CSS',
    name: 'NYBE 2.0 Dashboard',
    desc: "Production dashboard for NY business owners — the platform's first unified account view. Proposed, built, and shipped during my internship at NYS OIT. Now owned and maintained full-time.",
    bg: 'linear-gradient(135deg, #0f3460 0%, #C4622D 100%)',
    filter: 'Development',
    year: '2025',
    link: null, // add live URL when available
    featured: true,
  },
  {
    id: 2,
    tag: 'React · Node.js · MongoDB · Gemini AI',
    name: 'PrepSmart',
    desc: 'AI-powered mock interview platform with Gemini-generated questions and real-time video interview feedback.',
    bg: 'linear-gradient(135deg, #0a2540 0%, #00b4d8 100%)',
    filter: 'Development',
    year: 'Aug – Dec 2024',
    link: 'https://github.com/Aakanksha-Rangdal/PrepSmart',
    featured: true,
  },
  {
    id: 3,
    tag: 'React · Next.js · Tailwind CSS · AWS · Docker',
    name: 'Blossomy',
    desc: 'Full-stack e-commerce platform with secure auth and dynamic listings; deployed on AWS with Docker.',
    bg: 'linear-gradient(135deg, #1a0a2e 0%, #e040fb 100%)',
    filter: 'Development',
    year: 'Sep – Dec 2024',
    link: 'https://github.com/Aakanksha-Rangdal/Blossomy',
    featured: false,
  },
  {
    id: 4,
    tag: 'Figma · UI/UX · Freelance',
    name: 'CareerMate',
    desc: 'Freelance end-to-end UI/UX design — interactive prototypes, component systems, and user flow screens for a career platform.',
    bg: 'linear-gradient(135deg, #C4622D 0%, #1A1208 100%)',
    filter: 'Design',
    year: 'Feb – Apr 2025',
    link: 'https://www.figma.com/design/zOHRbglSdVFqxQF5bWmeKT/CareerMate?node-id=0-1',
    featured: true,
  },
  {
    id: 5,
    tag: 'React · Figma · UI/UX',
    name: 'Plan Voyage',
    desc: 'Designed the full UI in Figma and built the frontend in React — interactive prototypes, reusable components, and a responsive travel app experience.',
    bg: 'linear-gradient(135deg, #2D1B69 0%, #11998e 100%)',
    filter: 'Design',
    year: 'Mar – May 2025',
    link: 'https://www.figma.com/design/BfxGIpwySc6y8ShMgUgp0h/PlanVoyage?node-id=0-1',
    featured: true,
  },
  // ── ADD MORE PROJECTS BELOW ────────────────────────────────────────────────
  // {
  //   id: 6,
  //   tag: 'Your Stack',
  //   name: 'Project Name',
  //   desc: 'Short description.',
  //   bg: 'linear-gradient(135deg, #hex1 0%, #hex2 100%)',
  //   filter: 'Development',
  //   year: '2025',
  //   link: 'https://...',  // or null
  //   featured: false,
  // },
]

const FILTERS = ['All', 'Development', 'Design', 'Community']

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function resolveBg(bg) {
  if (!bg) return {}
  const isGradient = typeof bg === 'string' && bg.trim().includes('gradient')
  if (isGradient) return { background: bg }
  const url = typeof bg === 'string' ? bg : bg.src ?? bg
  return { backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' }
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const cardContent = (
    <>
      {/* Background */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          ...resolveBg(project.bg),
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Top row: year + featured badge */}
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <span className="font-body text-[0.65rem] tracking-[0.16em] uppercase text-white/30">
          {project.year}
        </span>
        {project.featured && (
          <span className="font-body text-[0.6rem] tracking-[0.14em] uppercase px-2 py-0.5 border border-gold/40 text-gold/70 rounded-sm">
            Featured
          </span>
        )}
      </div>

      {/* Arrow */}
      <div
        className="absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered && project.link ? '#C4622D' : 'transparent',
          borderColor: hovered && project.link ? '#C4622D' : 'rgba(255,255,255,0.2)',
          transform: hovered && project.link ? 'rotate(45deg)' : 'rotate(0deg)',
          opacity: project.link ? 1 : 0.3,
        }}
      >
        <ArrowIcon />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <div className="font-body text-[0.65rem] tracking-[0.16em] uppercase text-gold/80 mb-2">
          {project.tag}
        </div>
        <div className="font-display font-bold text-cream leading-tight text-[1.6rem] mb-2">
          {project.name}
        </div>
        <p
          className="font-body text-[0.85rem] text-white/50 leading-relaxed"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            maxWidth: '340px',
          }}
        >
          {project.desc}
        </p>
        {!project.link && (
          <div
            className="mt-3 font-body text-[0.62rem] tracking-[0.14em] uppercase text-white/20"
            style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease' }}
          >
            Case study coming soon
          </div>
        )}
      </div>
    </>
  )

  const wrapperClass = `
    relative overflow-hidden aspect-[4/3] hoverable
    transition-all duration-700
    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `
  const wrapperStyle = { transitionDelay: `${index * 80}ms` }

  if (project.link) {
    return (
      <a
        ref={ref}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={wrapperClass}
        style={wrapperStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {cardContent}
      </a>
    )
  }

  return (
    <div
      ref={ref}
      className={wrapperClass}
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cardContent}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.filter === activeFilter)

  return (
    <div className="min-h-screen bg-cream">

      {/* Header */}
      <div className="pt-28 md:pt-40 pb-10 md:pb-16 px-6 sm:px-10 md:px-14 relative overflow-hidden border-b border-dark/[0.07]">
        <div
          className="absolute font-display font-black leading-none pointer-events-none select-none"
          style={{
            fontSize: '24vw',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,0,0,0.04)',
            whiteSpace: 'nowrap',
          }}
        >
          Projects
        </div>

        <div className="relative" style={{ animation: 'fadeUp 0.9s 0.2s both' }}>
          <div className="flex items-center gap-3 font-body text-[0.72rem] tracking-[0.18em] uppercase text-terracotta mb-6">
            <span className="w-8 h-px bg-terracotta" />
            All Work
          </div>
          <h1
            className="font-display font-black text-dark leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}
          >
            All
            <br />
            <em className="text-terracotta not-italic">Projects</em>
          </h1>
          <p className="font-body text-[1rem] leading-[1.85] text-warm-gray max-w-lg mt-6">
            Everything I've designed, built, and shipped — from production apps to
            UI/UX design and community projects.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="relative flex gap-2 mt-12 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 font-body text-[0.72rem] tracking-[0.14em] uppercase transition-all duration-250 border hoverable"
              style={{
                background: activeFilter === f ? '#1A1208' : 'transparent',
                color: activeFilter === f ? '#F5EFE4' : '#9B9189',
                borderColor: activeFilter === f ? '#1A1208' : 'rgba(26,18,8,0.15)',
              }}
            >
              {f}
              <span className="ml-2 opacity-40 text-[0.6rem]">
                {f === 'All' ? ALL_PROJECTS.length : ALL_PROJECTS.filter(p => p.filter === f).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 sm:px-10 md:px-14 py-10 md:py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-24 font-display italic text-warm-gray text-2xl">
            Nothing here yet — coming soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* Back link */}
      <div className="px-6 sm:px-10 md:px-14 pb-12 md:pb-20 pt-4 border-t border-dark/[0.07] flex justify-between items-center">
        <Link
          to="/"
          className="font-body text-[0.75rem] tracking-[0.14em] uppercase text-warm-gray hover:text-terracotta transition-colors duration-200 no-underline flex items-center gap-2"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M13 5H1M1 5L5 1M1 5l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          Back to Home
        </Link>
        <span className="font-body text-[0.72rem] text-warm-gray/50 tracking-wide">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <Footer />
    </div>
  )
}