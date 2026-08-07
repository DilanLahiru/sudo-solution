"use client";

import { motion } from "framer-motion";

const stack = [
  "Government Platforms",
  "Healthcare Systems",
  "AI Workflows",
  "ERP Engineering",
  "Mission-Critical Web",
  "Enterprise Mobile",
  "Cloud Infrastructure",
  "Data Intelligence",
  "Automation",
];

const toolchain = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Docker",
  "OpenAI",
];

export default function TechMarquee() {
  const loopMain = [...stack, ...stack];
  const loopTools = [...toolchain, ...toolchain];

  return (
    <section
      id="stack"
      className="relative overflow-hidden border-y border-[#2b4159] bg-[#0d1723] py-11 lg:py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(27,139,224,0.18),transparent_36%),radial-gradient(circle_at_80%_68%,rgba(255,143,63,0.1),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cb6da] to-transparent opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.55 }}
        className="relative mx-auto mb-7 flex max-w-content items-center justify-between gap-4 px-6 lg:px-10"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#84a0be]">
            Focus Areas
          </p>
          <p className="mt-2 font-display text-[1.35rem] font-semibold tracking-tight text-[#e2edf8] sm:text-[1.6rem]">
            Product, Platform, and AI Engineering
          </p>
        </div>

        <div className="hidden rounded-full border border-[#43607a] bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#aac2d8] md:inline-flex">
          Smooth delivery pipelines
        </div>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0d1723] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0d1723] to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-5">
          {loopMain.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="group inline-flex items-center gap-4 rounded-full border border-[#31485f] bg-[#132233]/65 px-6 py-3 transition-all duration-300 hover:border-[#7db3e3] hover:bg-[#18314a]"
            >
              <span className="h-2 w-2 rounded-full bg-[#56b3f5] shadow-[0_0_10px_rgba(86,179,245,0.8)]" />
              <span className="font-display text-[1.1rem] font-semibold text-[#dceaf7] transition-colors duration-300 group-hover:text-white">
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0d1723] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0d1723] to-transparent" />

        <div className="animate-marquee-reverse flex w-max items-center gap-4">
          {loopTools.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="relative overflow-hidden rounded-full border border-[#2f4357] px-4 py-1.5"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(27,139,224,0.18)_0%,rgba(255,255,255,0)_45%,rgba(255,143,63,0.12)_100%)]" />
              <span className="relative font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#abc2d8]">
                {tool}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -left-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#1b8be0]/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#ff8f3f]/16 blur-3xl animate-pulse-glow-delayed" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8cb6da] to-transparent opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_100%)] opacity-0 animate-sheen-pass" />
    </section>
  );
}
