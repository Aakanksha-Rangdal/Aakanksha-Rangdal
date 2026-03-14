const items = ['UI / UX Design','Motion Design','Product Design','Visual Storytelling','Creative Direction','Interaction Design','Design Systems','Prototyping','Frontend Development']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="py-4 md:py-5 bg-dark overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 22s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 md:gap-8 px-6 md:px-8 font-display italic text-[0.9rem] md:text-[1.05rem] text-cream opacity-40 tracking-wide">
            {item}
            <span className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
