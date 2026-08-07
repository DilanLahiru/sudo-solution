"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  CodeXml,
  Layers,
  LucideIcon,
  Orbit,
  ShieldCheck,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  copy: string;
  lines: string[];
};

const services = [
  {
    icon: Orbit,
    title: "Digital Transformation & Consulting",
    copy: "Transform legacy operations into cohesive, scalable digital ecosystems with strategy, platforms, and data-driven execution.",
    lines: [
      "TECHNOLOGY STRATEGY",
      "EXPERIENCE DESIGN",
      "INFRASTRUCTURE & PLATFORMS",
      "DATA-DRIVEN ORGANIZATION",
    ],
  },
  {
    icon: CodeXml,
    title: "Software Development & Engineering",
    copy: "Build secure, scalable digital products across web, mobile, e-commerce, and mission-critical systems.",
    lines: [
      "WEB-BASED SYSTEMS",
      "MOBILE APPLICATIONS",
      "E-COMMERCE PLATFORMS",
      "WEBSITES",
    ],
  },
  {
    icon: Layers,
    title: "Business-Critical Systems",
    copy: "Align product strategy and business analysis to reduce rework and move from idea to validated delivery faster.",
    lines: ["PRODUCT MANAGEMENT & STRATEGY", "BUSINESS ANALYSIS"],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    copy: "Embed quality from planning to release through test automation, performance validation, and regression confidence.",
    lines: ["AUTOMATION", "PERFORMANCE TESTING", "REGRESSION TESTING"],
  },
  {
    icon: Bot,
    title: "Artificial Intelligence & Data",
    copy: "Turn data into action with predictive analytics, NLP systems, agentic AI workflows, and production-ready LLM integration.",
    lines: ["PREDICTIVE ANALYTICS", "NLP & CHATBOTS", "AGENTIC AI", "LLM INTEGRATION"],
  },
] satisfies Service[];

function NumberLabel({ n, dark = false }: { n: number; dark?: boolean }) {
  return (
    <span
      className={`font-display text-6xl font-bold leading-none tracking-tight ${
        dark ? "text-white/[0.18]" : "text-[#dfe3e8]"
      }`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);
  const scrollTargetRef = useRef(0);
  const scrollAnimationRef = useRef<ReturnType<typeof animate> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const pane = rightColumnRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const idx = Number(visible[0].target.getAttribute("data-service-index"));
          if (!Number.isNaN(idx)) {
            setActiveIndex(idx);
          }
        }
      },
      {
        threshold: [0.35, 0.5, 0.7],
        root: pane,
        rootMargin: "-8% 0px -22% 0px",
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const pane = rightColumnRef.current;
    if (pane) {
      scrollTargetRef.current = pane.scrollTop;
    }

    const animateTo = (paneEl: HTMLDivElement, nextTop: number) => {
      const maxScroll = Math.max(0, paneEl.scrollHeight - paneEl.clientHeight);
      const clampedTarget = Math.max(0, Math.min(nextTop, maxScroll));
      scrollTargetRef.current = clampedTarget;

      scrollAnimationRef.current?.stop();

      if (prefersReducedMotion) {
        paneEl.scrollTop = clampedTarget;
        return;
      }

      scrollAnimationRef.current = animate(paneEl.scrollTop, clampedTarget, {
        type: "spring",
        stiffness: 210,
        damping: 33,
        mass: 0.45,
        onUpdate: (latest) => {
          paneEl.scrollTop = latest;
        },
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) {
        return;
      }

      const section = sectionRef.current;
      const pane = rightColumnRef.current;
      if (!section || !pane) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionInFocus = rect.top <= 90 && rect.bottom >= window.innerHeight - 90;
      if (!sectionInFocus) {
        return;
      }

      const atTop = pane.scrollTop <= 0;
      const atBottom = Math.ceil(pane.scrollTop + pane.clientHeight) >= pane.scrollHeight;

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;
      const canConsumeScroll = (scrollingDown && !atBottom) || (scrollingUp && !atTop);

      if (canConsumeScroll) {
        event.preventDefault();
        animateTo(pane, scrollTargetRef.current + event.deltaY);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      scrollAnimationRef.current?.stop();
    };
  }, [prefersReducedMotion]);

  const activeService = services[activeIndex];

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[44px] border border-white/[0.08] bg-[linear-gradient(130deg,#2b352d_0%,#243127_43%,#26342a_100%)] px-6 py-9 sm:px-10 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_0%,rgba(93,107,163,0.35)_0%,transparent_36%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:320px_100%,100%_160px]" />
          <div className="pointer-events-none absolute -bottom-28 left-[-8%] h-[320px] w-[140%] rounded-[100%] border border-white/[0.08]" />

          <div className="relative grid gap-8 lg:max-h-[calc(100vh-8rem)] lg:grid-cols-[1fr_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="reveal-left max-w-[670px]">
                <h2 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.02em] text-white sm:text-7xl">
                  What We Do
                </h2>
                <p className="mt-8 max-w-xl text-xl leading-[1.35] text-[rgb(157,171,188)] sm:text-4xl">
                  Engineering excellence meets human-centric design. Our values
                  reflect in our results.
                </p>
                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center justify-center rounded-2xl border border-white/[0.18] bg-white/[0.08] px-9 py-4 font-mono text-[14px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/[0.14]"
                >
                  Talk To Us
                </a>
              </div>

              <div className="reveal-left mt-10 min-h-[300px] sm:min-h-[320px]">
                <AnimatePresence initial={false} mode="wait">
                  <motion.article
                    key={`left-active-${activeService.title}`}
                    className="rounded-[26px] border border-white/[0.1] bg-white/[0.08] p-5 sm:p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.12]">
                        <activeService.icon className="h-7 w-7 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/[0.48]">
                          {String(activeIndex + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 font-display text-[1.45rem] font-bold leading-tight tracking-tight text-white sm:text-[1.65rem]">
                          {activeService.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-[14px] leading-relaxed text-[rgb(185,196,208)] sm:text-[15px]">
                      {activeService.copy}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeService.lines.map((line) => (
                        <span
                          key={`left-${activeService.title}-${line}`}
                          className="rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[rgb(185,196,208)]"
                        >
                          {line}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:text-[rgb(198,220,244)]"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </a>
                  </motion.article>
                </AnimatePresence>
              </div>
            </div>

            <div
              ref={rightColumnRef}
              className="no-scrollbar space-y-8 pt-1 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-3 lg:pt-10"
            >
              {services.map(({ icon: Icon, title, copy, lines }, i) => (
                <article
                  key={`right-${title}`}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-service-index={i}
                  className="reveal-right rounded-[44px] bg-[#f8f8f9] px-7 py-8 shadow-[0_14px_30px_-22px_rgba(0,0,0,0.42)] sm:px-10 sm:py-10"
                  style={{ transitionDelay: `${i * 55}ms` }}
                >
                  <div className="flex items-center gap-6">
                    <NumberLabel n={i + 1} />
                    <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#1f242c] sm:text-5xl">
                      {title}
                    </h3>
                  </div>

                  <div className="mt-5 flex items-start gap-6">
                    <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-[24px] bg-[#1f2126] shadow-[0_12px_18px_-14px_rgba(0,0,0,0.6)]">
                      <Icon className="h-11 w-11 text-white" strokeWidth={1.85} />
                    </div>
                    <p className="max-w-[640px] text-lg leading-[1.42] text-[#747982] sm:text-2xl">
                      {copy}
                    </p>
                  </div>

                  <div className="mt-8 flex max-w-[860px] flex-wrap gap-3">
                    {lines.map((line) => (
                      <span
                        key={`right-${title}-${line}`}
                        className="rounded-full border border-[#e0e4ea] bg-[#eceff3] px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[#70757e] sm:text-sm"
                      >
                        {line}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-10 inline-flex items-center gap-4 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-[#23272f] transition-colors hover:text-[#11151b] sm:text-base"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
