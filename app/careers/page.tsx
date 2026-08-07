import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Sudo Solution",
  description:
    "Join Sudo Solution. We are a startup founded in 2025 and looking for suitable, ownership-driven builders.",
};

const roles = [
  {
    title: "Frontend Engineer",
    type: "Full-time / Remote-friendly",
    focus: "Next.js, React, performance, UI systems",
  },
  {
    title: "Backend Engineer",
    type: "Full-time / Hybrid",
    focus: "Node.js, APIs, architecture, reliability",
  },
  {
    title: "AI Product Engineer",
    type: "Contract / Full-time",
    focus: "LLM workflows, RAG, product integration",
  },
];

const values = [
  "You take ownership and finish what you start.",
  "You can explain your technical decisions clearly.",
  "You value product impact, not just shipping code.",
  "You are still learning and comfortable with fast startup pace.",
];

export default function CareersPage() {
  return (
    <main id="top" className="min-h-screen bg-[#eff3f6] text-[#0d1723]">
      <header className="sticky top-0 z-40 border-b border-[#d7e0e8] bg-[#eff3f6]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex items-center gap-2.5">
            <span className="hex-cut flex h-9 w-9 items-center justify-center bg-[linear-gradient(145deg,#1b8be0_0%,#0f3b71_100%)]">
              <span className="font-display text-sm font-bold text-white">S</span>
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight text-[#0d1723]">
              SUDO SOLUTION
            </span>
          </a>

          <nav className="flex items-center gap-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#40536a]">
            <a href="/" className="transition-colors hover:text-[#0f3b71]">Home</a>
            <a href="/about" className="transition-colors hover:text-[#0f3b71]">About</a>
            <a href="/careers" className="text-[#0f3b71]">Careers</a>
            <a href="mailto:careers@sudosolution.com" className="hidden rounded-full bg-[#0d1723] px-4 py-2 text-[12px] text-white transition-colors hover:bg-[#0f3b71] sm:inline-block">
              Apply Now
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-4 h-[340px] w-[340px] rounded-full bg-[#1b8be0]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-[300px] w-[300px] rounded-full bg-[#ff8f3f]/16 blur-3xl" />

        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#1b8be0]">
            Careers at Sudo Solution
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-[#0d1723] sm:text-[3.35rem]">
            Startup speed. Real ownership. Meaningful engineering work.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#4e6077]">
            We started in 2025 and we are still growing as a startup. If you are someone with suitable skills, discipline, and curiosity, we want to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:careers@sudosolution.com" className="rounded-full bg-[#0d1723] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f3b71]">
              careers@sudosolution.com
            </a>
            <a href="/about" className="rounded-full border border-[#c8d5e2] bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#17314d] transition-colors hover:border-[#8db9df] hover:text-[#0f3b71]">
              Learn About Us
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-content gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="space-y-5">
            {roles.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-[#d3dde7] bg-white p-6 shadow-[0_16px_28px_-24px_rgba(15,59,113,0.46)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#69819a]">{role.type}</p>
                <h2 className="mt-2 font-display text-[1.55rem] font-bold text-[#0d1723]">{role.title}</h2>
                <p className="mt-2 text-[15px] text-[#4e6077]">{role.focus}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-3xl border border-[#d3dde7] bg-[#f8fbfd] p-7 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#69819a]">Who Should Apply</p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0d1723] sm:text-[2.2rem]">
              Suitable builders who can grow with a startup.
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#4e6077]">
              {values.map((item) => (
                <li key={item} className="rounded-xl border border-[#dde6ee] bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:careers@sudosolution.com?subject=Application%20for%20Sudo%20Solution"
              className="mt-6 inline-flex rounded-full bg-[#0d1723] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f3b71]"
            >
              Send Your Profile
            </a>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
