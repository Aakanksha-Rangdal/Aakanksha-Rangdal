export default function Footer({ dark = false }) {
  return (
    <footer className={`px-6 md:px-14 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-2 ${dark ? 'bg-black/30 border-t border-white/[0.06]' : 'bg-dark'}`}>
      <span className="font-body text-[0.75rem] tracking-[0.1em] text-white/25">© 2025 Aakanksha Rangdal</span>
      <span className="font-body text-[0.75rem] tracking-[0.1em] text-white/25">Designed with care</span>
    </footer>
  )
}
