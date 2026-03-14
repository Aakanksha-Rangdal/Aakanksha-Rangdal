import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'

const experiences = [
  {
    id: 'its2',
    org: 'NYS Office of Information Technology Services',
    shortOrg: 'NYS',
    role: 'Information Technology Specialist 2 (Programming)',
    period: 'Jun 2025 – Present',
    location: 'Albany, NY',
    type: 'Government · Full-Time',
    accent: '#C4622D',
    bg: 'from-[#1a0e06] to-[#2e1a0b]',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'WCAG Accessibility', 'Production'],
    summary:
      'Owning and evolving the NYBE 2.0 Dashboard in production — the platform that helps New York business owners find and navigate state resources. Promoted twice in 8 months based on ownership and impact.',
    bullets: [
      'Own and maintain the NYBE 2.0 Dashboard in production — built with React, TypeScript, and Tailwind CSS, enabling NY business owners to navigate resources 80% faster than the previous experience.',
      'Resolved 80+ UI bugs across the full application and built 7+ features, collaborating with backend engineers to design RESTful API contracts and request/response structures.',
      'Ensured WCAG accessibility compliance across all UI components for a diverse, statewide public user base.',
      'Promoted twice in 8 months — Intern → Hourly Employee → IT Specialist 2 — based on consistent ownership and measurable impact.',
    ],
    highlight: 'Promoted twice in 8 months',
  },
  {
    id: 'intern',
    org: 'NYS Office of Information Technology Services',
    shortOrg: 'NYS',
    role: 'Frontend Developer Intern',
    period: 'Feb 2025 – Jun 2025',
    location: 'Albany, NY',
    type: 'Government · Internship',
    accent: '#e08a5a',
    bg: 'from-[#1a0e06] to-[#241408]',
    tags: ['React', 'Tailwind CSS', 'UI Design', 'Team Advocacy', 'Shipped to Production'],
    summary:
      'Proposed, designed, and independently shipped the NYBE 2.0 Dashboard — the platform\'s first ever unified account view — before the internship was even over. Also introduced Tailwind CSS to the entire team.',
    bullets: [
      'Proposed, designed, and independently built the NYBE 2.0 Dashboard — the platform\'s first unified account view — using React and Tailwind CSS; shipped to production within internship tenure.',
      'Introduced Tailwind CSS to the team, advocated for its adoption, and led its integration across the entire frontend codebase.',
    ],
    highlight: 'Shipped to production as an intern',
  },
  {
    id: 'its-desk',
    org: 'ITS Service Desk, University at Albany',
    shortOrg: 'UAlb',
    role: 'Student IT Assistant',
    period: 'Aug 2024 – Feb 2025',
    location: 'Albany, NY',
    type: 'University · Part-Time',
    accent: '#C9A84C',
    bg: 'from-[#1a1508] to-[#2a2210]',
    tags: ['Technical Support', 'Tooling', 'Academic IT', 'Workflow Automation'],
    summary:
      'Supported students and faculty with day-to-day technical issues while building custom internal tools to make academic and administrative workflows smoother and faster.',
    bullets: [
      'Provided technical support to students and faculty across hardware, software, network, and account-related issues.',
      'Developed custom tools to streamline academic and administrative workflows, reducing manual effort for staff.',
    ],
    highlight: null,
  },
  {
    id: 'hackerabad',
    org: 'Hackerabad Tech Community',
    shortOrg: 'HBD',
    role: 'Founder & Lead Mentor',
    period: '2021 – 2025',
    location: 'Hyderabad, India',
    type: 'Leadership · Community',
    accent: '#b0a8ff',
    bg: 'from-[#0f0f18] to-[#1a1a2e]',
    tags: ['Community Building', 'Mentorship', 'Leadership', 'Tech Education', '4+ Years'],
    summary:
      'Founded and led a student tech community for 4+ years — mentoring developers and designers to build real-world solutions, grow their skills, and launch careers in tech.',
    bullets: [
      'Founded Hackerabad from the ground up and led it for 4+ years, growing it into an active student tech community.',
      'Mentored developers and designers to build real-world projects, improving their technical skills and career readiness.',
      'Organised community events, workshops, and hackathons that brought students together around practical problem-solving.',
    ],
    highlight: 'Founder · 4+ years',
  },
]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Tag({ label, accent }) {
  return (
    <span
      className="inline-block px-3 py-1 font-body text-[0.68rem] tracking-[0.12em] uppercase rounded-sm border"
      style={{ borderColor: accent + '55', color: accent, background: accent + '12' }}
    >
      {label}
    </span>
  )
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <div className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${exp.bg} border border-white/[0.06]`}>
        {/* Accent bar */}
        <div className="h-[3px] w-full" style={{ background: exp.accent }} />

        <div className="p-6 md:p-10">
          <div className="flex items-start justify-between gap-4 flex-wrap">

            {/* Left: org + role */}
            <div className="flex-1 min-w-0">
              <div
                className="flex items-center gap-2 font-body text-[0.68rem] tracking-[0.18em] uppercase mb-2"
                style={{ color: exp.accent }}
              >
                <span className="w-5 h-px flex-shrink-0" style={{ background: exp.accent }} />
                {exp.type}
              </div>
              <h3
                className="font-display font-black text-cream leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
              >
                {exp.org}
              </h3>
              <p className="font-display italic mt-1.5 text-[1.05rem]" style={{ color: exp.accent }}>
                {exp.role}
              </p>

              {/* Highlight badge */}
              {exp.highlight && (
                <div
                  className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-sm font-body text-[0.65rem] tracking-[0.12em] uppercase"
                  style={{ background: exp.accent + '20', color: exp.accent, border: `1px solid ${exp.accent}40` }}
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                  {exp.highlight}
                </div>
              )}
            </div>

            {/* Right: dates + ghost text */}
            <div className="text-right flex-shrink-0">
              <div className="font-body text-[0.75rem] tracking-[0.12em] uppercase text-white/40 mb-1">
                {exp.period}
              </div>
              <div className="font-body text-[0.72rem] text-white/25">{exp.location}</div>
              <div
                className="font-display font-black mt-3 leading-none select-none"
                style={{
                  fontSize: '3.2rem',
                  color: 'transparent',
                  WebkitTextStroke: `1px ${exp.accent}25`,
                }}
              >
                {exp.shortOrg}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {exp.tags.map((t) => <Tag key={t} label={t} accent={exp.accent} />)}
          </div>

          {/* Summary */}
          <p className="font-body text-[0.95rem] leading-[1.85] text-white/50 mt-6 max-w-2xl">
            {exp.summary}
          </p>

          {/* Expandable bullets */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: open ? '600px' : '0px' }}
          >
            <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-4 font-body text-[0.9rem] leading-relaxed text-white/60">
                  <span
                    className="mt-[9px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: exp.accent }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-6 flex items-center gap-2 font-body text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200 bg-transparent border-0 cursor-none"
            style={{ color: open ? exp.accent : 'rgba(255,255,255,0.3)' }}
          >
            <span
              className="w-4 h-px"
              style={{ background: open ? exp.accent : 'rgba(255,255,255,0.3)', transition: 'background 0.3s' }}
            />
            {open ? 'Show less' : 'See responsibilities'}
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <div className="min-h-screen bg-dark">

      {/* Page header */}
      <div className="pt-28 md:pt-40 pb-10 md:pb-16 px-6 sm:px-10 md:px-14 relative overflow-hidden">
        <div
          className="absolute font-display font-black leading-none pointer-events-none select-none"
          style={{
            fontSize: '26vw',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.03)',
            whiteSpace: 'nowrap',
          }}
        >
          Career
        </div>

        <div className="relative max-w-3xl" style={{ animation: 'fadeUp 0.9s 0.2s both' }}>
          <div className="flex items-center gap-3 font-body text-[0.72rem] tracking-[0.18em] uppercase text-terracotta mb-6">
            <span className="w-8 h-px bg-terracotta" />
            Professional Experience
          </div>
          <h1
            className="font-display font-black text-cream leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}
          >
            Where I've
            <br />
            <em className="text-terracotta not-italic">Been</em>
          </h1>
          <p className="font-body text-[1rem] leading-[1.85] text-white/40 max-w-lg mt-8">
            From founding a tech community in Hyderabad to shipping production React apps
            for New York State — here's the journey so far.
          </p>
        </div>

        {/* Timeline strip */}
        <div className="relative mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/[0.06] flex flex-wrap gap-y-4 gap-x-2 max-w-5xl">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
              <div>
                <div className="font-body text-[0.62rem] tracking-[0.14em] uppercase text-white/25">{exp.period}</div>
                <div className="font-display italic text-cream text-[0.88rem] leading-tight">{exp.role}</div>
              </div>
              {i < experiences.length - 1 && (
                <div className="w-8 h-px bg-white/10 ml-2 flex-shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="px-6 sm:px-10 md:px-14 pb-16 md:pb-28 flex flex-col gap-4 max-w-6xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>

      {/* Resume CTA */}
      <div className="px-6 sm:px-10 md:px-14 pb-16 md:pb-24 text-center border-t border-white/[0.06] pt-10 md:pt-16">
        <p className="font-body text-[0.78rem] text-white/25 mb-6 tracking-widest uppercase">
          Want the full picture?
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-10 py-4 font-body text-[0.8rem] tracking-[0.14em] uppercase border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-cream transition-all duration-300"
        >
          Download Resume →
        </a>
      </div>

      <Footer dark />
    </div>
  )
}
