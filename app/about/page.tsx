import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Sudo Solution",
  description:
    "Learn about Sudo Solution, a startup software company founded in 2025 and focused on resilient digital systems.",
};

const principles = [
  {
    title: "Build for operations, not demos",
    copy: "Every product decision is tested against real-world usage, uptime, and team adoption.",
  },
  {
    title: "Design with engineering depth",
    copy: "We shape user experience and architecture together, so execution stays fast and reliable.",
  },
  {
    title: "Move with startup intensity",
    copy: "As a startup, we combine speed and ownership while maintaining high standards for quality.",
  },
];

export default function AboutPage() {
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
            <a href="/about" className="text-[#0f3b71]">About</a>
            <a href="/careers" className="transition-colors hover:text-[#0f3b71]">Careers</a>
            <a href="/#contact" className="hidden rounded-full bg-[#0d1723] px-4 py-2 text-[12px] text-white transition-colors hover:bg-[#0f3b71] sm:inline-block">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-[320px] w-[320px] rounded-full bg-[#1b8be0]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-16 h-[260px] w-[260px] rounded-full bg-[#ff8f3f]/16 blur-3xl" />

        <div className="relative mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#1b8be0]">
              About Sudo Solution
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-[#0d1723] sm:text-[3.3rem]">
              A startup engineering company founded in 2025, built to deliver software that performs under pressure.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#4e6077]">
              We are still early-stage, but we operate with production-level discipline. Our mission is to help organizations launch and scale dependable digital systems across web, mobile, AI, and ERP.
            </p>
          </div>

          <div className="rounded-3xl border border-[#cfdae6] bg-white p-7 shadow-[0_20px_40px_-30px_rgba(15,59,113,0.45)] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6c8098]">Company Snapshot</p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div>
                <p className="font-display text-3xl font-bold text-[#0d1723]">2025</p>
                <p className="text-[13px] text-[#52627a]">Founded</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#0d1723]">Startup</p>
                <p className="text-[13px] text-[#52627a]">Growth stage</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#0d1723]">LK</p>
                <p className="text-[13px] text-[#52627a]">Based in Sri Lanka</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#0d1723]">24h</p>
                <p className="text-[13px] text-[#52627a]">Response culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#d3dde7] bg-[#f8fbfd] p-6 shadow-[0_18px_30px_-26px_rgba(15,59,113,0.5)]"
              >
                <h2 className="font-display text-[1.35rem] font-bold text-[#0d1723]">{item.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4e6077]">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#d3dde7] bg-white p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6c8098]">Where we are heading</p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0d1723] sm:text-[2.4rem]">
              Building category-defining digital systems, one reliable release at a time.
            </h3>
            <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-[#4e6077]">
              As a new startup, we are intentionally focused on execution quality, transparent communication, and long-term partnerships. We are growing carefully with people who value ownership, craft, and impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/careers" className="rounded-full bg-[#0d1723] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f3b71]">
                Explore Careers
              </a>
              <a href="/#contact" className="rounded-full border border-[#c8d5e2] bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#17314d] transition-colors hover:border-[#8db9df] hover:text-[#0f3b71]">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
