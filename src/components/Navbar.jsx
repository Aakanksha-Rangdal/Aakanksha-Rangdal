import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Work',       href: '/projects',    page: '/'           },
  { label: 'Experience', href: '/experience', page: '/experience' },
  { label: 'About',      href: '#about',      page: '/'           },
  { label: 'Contact',    href: '#contact',    page: '/'           },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDark = location.pathname === '/experience' || location.pathname === '/projects'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const navBg   = scrolled || isDark || menuOpen ? 'bg-dark/95 backdrop-blur-md' : ''
  const textCol = isDark || scrolled || menuOpen  ? 'text-cream'                 : 'text-dark'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-14 py-5 sm:py-7">
        <Link to="/" className={`font-display text-lg tracking-widest no-underline transition-colors duration-300 ${textCol}`}>
          A·R
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map(({ label, href, page }) => {
            const isActive  = location.pathname === page && label === 'Experience'
            const isRouter  = href.startsWith('/')
            return (
              <li key={label}>
                {isRouter ? (
                  <Link
                    to={href}
                    className={`font-body text-xs tracking-[0.15em] uppercase no-underline transition-opacity relative group ${textCol} ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" style={{ width: isActive ? '100%' : '0' }} />
                  </Link>
                ) : (
                  <a
                    href={isHome ? href : `/${href}`}
                    className={`font-body text-xs tracking-[0.15em] uppercase no-underline opacity-60 hover:opacity-100 transition-opacity relative group ${textCol}`}
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-1 ${textCol}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 pb-6 gap-5 list-none">
          {navLinks.map(({ label, href, page }) => {
            const isRouter = href.startsWith('/')
            return (
              <li key={label}>
                {isRouter ? (
                  <Link to={href} className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream no-underline transition-colors">
                    {label}
                  </Link>
                ) : (
                  <a href={isHome ? href : `/${href}`} className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream no-underline transition-colors">
                    {label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
