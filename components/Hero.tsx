import HexMark from "./HexMark";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] rounded-full bg-[#1b8be0]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-[340px] w-[340px] rounded-full bg-[#ff8f3f]/15 blur-3xl" />
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[65%] opacity-30" />

      <div className="relative mx-auto grid max-w-content items-center gap-16 px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-10">
        <div className="reveal-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cbd7e2] bg-white/80 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#40536a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1b8be0]" />
            Engineering Since 2016
          </div>

          <h1 className="font-display text-[2.65rem] font-bold leading-[1.02] tracking-[-0.02em] text-[#0d1723] sm:text-[4rem] lg:text-[4.55rem]">
            Digital Systems
            <br />
            <span className="text-[#0f3b71]">Built For Real-World</span>
            <br />
            Pressure.
          </h1>

          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[#445871]">
            We partner with ambitious teams to architect, build, and scale
            mission-critical platforms across web, mobile, AI, and ERP. Our
            work is measured by uptime, adoption, and operational impact.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#0d1723] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_20px_40px_-20px_rgba(10,23,35,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="rounded-full border border-[#c5d2de] bg-white/70 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#162a3f] transition-colors hover:border-[#1b8be0] hover:text-[#0f3b71]"
            >
              Explore capabilities
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-[#cfdbe5] pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-[#0d1723]">120+</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.08em] text-[#506177]">
                Projects delivered
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#0d1723]">9+</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.08em] text-[#506177]">
                Years building
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#0d1723]">24h</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.08em] text-[#506177]">
                Response window
              </p>
            </div>
          </div>
        </div>

        <div className="reveal-right relative">
          <HexMark />

          <div className="glass animate-drift absolute -left-7 top-10 hidden w-48 rounded-xl p-4 md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5a6a7d]">
              active sprint
            </p>
            <p className="mt-2 font-display text-lg font-bold text-[#132338]">Healthcare ERP</p>
            <p className="mt-2 text-[12px] text-[#4f6178]">Integrated records, labs, billing, and patient flow.</p>
          </div>

          <div className="glass absolute -bottom-8 right-0 w-52 rounded-xl p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5a6a7d]">
              deployment model
            </p>
            <p className="mt-2 text-[13px] font-semibold text-[#1b2f46]">Cloud, Hybrid, or On-Prem</p>
          </div>
        </div>
      </div>
    </section>
  );
}
