"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  Compass,
  Rocket,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Discovery & Scoping",
    copy: "We map users, process friction, technical constraints, and delivery risks before defining architecture and roadmap.",
    chip: "Research + System Audit",
    icon: Compass,
  },
  {
    n: "02",
    title: "Architecture & Design",
    copy: "Interaction design and engineering decisions evolve together to ensure every screen has a clean path to production.",
    chip: "UX + Technical Blueprint",
    icon: BrainCircuit,
  },
  {
    n: "03",
    title: "Build & Validate",
    copy: "Short sprint cycles with demos, test coverage, and iterative validation so stakeholders see progress every week.",
    chip: "Agile Delivery + QA",
    icon: ClipboardCheck,
  },
  {
    n: "04",
    title: "Launch & Operate",
    copy: "We deploy with observability, handover clarity, and long-term support to keep systems resilient post-launch.",
    chip: "Release + Optimization",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0b1521] py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(27,139,224,0.2),transparent_38%),radial-gradient(circle_at_86%_80%,rgba(255,143,63,0.14),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:240px_100%,100%_130px]" />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:sticky lg:top-24"
          >
            <div className="rounded-[30px] border border-white/12 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 backdrop-blur-[2px] sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#7ab7e8]">
                How We Work
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-[2.75rem]">
                Operating Model Built for Regulated, High-Stakes Delivery.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#9cb0c6]">
                Our execution framework keeps product, engineering, and
                operations synchronized from strategy through post-launch
                performance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/14 bg-white/[0.05] p-4">
                  <div className="flex items-center gap-2 text-[#98b5d1]">
                    <ShieldCheck className="h-4 w-4" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em]">Delivery Confidence</p>
                  </div>
                  <p className="mt-2 font-display text-3xl font-bold text-white">98%</p>
                  <p className="text-[13px] text-[#a8bdd2]">Client continuation rate</p>
                </div>

                <div className="rounded-2xl border border-white/14 bg-white/[0.05] p-4">
                  <div className="flex items-center gap-2 text-[#98b5d1]">
                    <TimerReset className="h-4 w-4" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em]">Response Rhythm</p>
                  </div>
                  <p className="mt-2 font-display text-3xl font-bold text-white">24h</p>
                  <p className="text-[13px] text-[#a8bdd2]">Average decision turnaround</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[26px] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-[#5e8eb8]/30 via-[#7ab7e8]/75 to-[#5e8eb8]/30" />

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.n}
                    initial={{ opacity: 0, x: 22, y: 18 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.38 }}
                    className="group relative pl-14"
                  >
                    <span className="absolute left-0 top-5 flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-[#7ab7e8]/55 bg-[#10263a] shadow-[0_12px_24px_-16px_rgba(27,139,224,0.75)]">
                      <Icon className="h-5 w-5 text-[#b7d6f2]" strokeWidth={2} />
                    </span>

                    <div className="overflow-hidden rounded-[24px] border border-white/12 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 transition-colors duration-300 group-hover:border-[#88bbea]/65 group-hover:bg-[linear-gradient(140deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))]">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#1b8be0]/14 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="mb-3 flex items-center justify-between">
                        <p className="font-mono text-[11px] tracking-[0.12em] text-[#88a3bf]">STAGE {step.n}</p>
                        <ArrowRight className="h-4 w-4 text-[#8abce7] transition-transform duration-300 group-hover:translate-x-1" />
                      </div>

                      <h3 className="font-display text-[23px] font-bold text-white">{step.title}</h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-[#9fb3c9]">{step.copy}</p>

                      <div className="mt-5">
                        <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#adc1d5]">
                          {step.chip}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
