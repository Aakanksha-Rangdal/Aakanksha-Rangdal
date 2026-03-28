import { useEffect, useState } from "react";
import Link from 'next/link'

const roles = ["a Designer", "a Storyteller", "a Creator", "a Problem Solver"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:grid md:grid-cols-2 relative overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-end px-6 sm:px-10 md:px-14 pt-28 pb-12 md:pb-20 relative z-10 order-2 md:order-1">
        <div
          className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.18em] uppercase text-sage mb-6 md:mb-8"
          style={{ animation: "fadeUp 0.8s 0.3s both" }}
        >
          <span className="w-6 md:w-8 h-px bg-sage" />
          Open to Work — 2026
        </div>

        <h1
          className="font-display font-black text-dark leading-[0.88] tracking-tight"
          style={{
            fontSize: "clamp(3.2rem, 8.5vw, 9rem)",
            animation: "fadeUp 0.9s 0.5s both",
          }}
        >
          Aakan<em className="text-terracotta not-italic">k</em>
          <br />
          sha
          <br />
          Rang<em className="text-terracotta not-italic">d</em>al
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-sm font-body text-sm md:text-base leading-[1.85] text-warm-gray"
          style={{ animation: "fadeUp 0.8s 0.7s both" }}
        >
          I am{" "}
          <span
            className="font-display italic text-dark transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {roles[roleIdx]}
          </span>
          <br />
          crafting meaningful digital experiences with intention, warmth, and
          depth.
        </p>

        <div
          className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-5 items-center"
          style={{ animation: "fadeUp 0.8s 0.9s both" }}
        >
          <Link
            href="/experience"
            className="px-6 md:px-9 py-3 md:py-3.5 bg-dark text-cream font-body text-[0.78rem] tracking-[0.12em] uppercase border-2 border-dark hover:bg-terracotta hover:border-terracotta transition-all duration-300"
          >
            View Experience
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 md:px-9 py-3 md:py-3.5 bg-transparent text-dark font-body text-[0.78rem] tracking-[0.12em] uppercase border-2 border-dark hover:bg-dark hover:text-cream transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right — Photo */}
      <div
        className="relative overflow-hidden h-64 sm:h-80 md:h-auto order-1 md:order-2"
        style={{ animation: "fadeIn 1.2s 0.2s both" }}
      >
        <div className="absolute inset-0 bg-dark">
          <img
            src="/me.jpeg"
            alt="Aakanksha"
            className="w-full h-full object-cover object-top opacity-80"
          />
        </div>
        <div
          className="absolute -bottom-16 -left-4 font-display font-black text-stroke-white pointer-events-none leading-none z-10 select-none hidden md:block"
          style={{ fontSize: "38vw", animation: "fadeIn 1.5s 0.4s both" }}
        >
          A
        </div>
      </div>

      {/* Scroll hint — desktop only */}
      <div
        className="hidden md:flex absolute bottom-10 left-14 items-center gap-3 font-body text-[0.7rem] tracking-[0.18em] uppercase text-warm-gray"
        style={{ animation: "fadeIn 1s 1.5s both" }}
      >
        <span
          className="w-10 h-px bg-warm-gray origin-left"
          style={{ animation: "lineGrow 1s 1.8s ease both" }}
        />
        Scroll
      </div>
    </section>
  );
}
