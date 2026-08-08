import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const highlights = [
  { label: "Years Building", value: "1+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Client Retention", value: "95%" },
  { label: "Response Window", value: "24h" },
];

const capabilities = [
  {
    title: "Product Engineering",
    body: "Scalable web and mobile platforms designed for reliability, speed, and long-term maintainability.",
  },
  {
    title: "Enterprise Systems",
    body: "ERP, operations, and workflow modernization that removes friction and improves visibility.",
  },
  {
    title: "Data and AI Solutions",
    body: "Practical intelligence integrations that support decision making, automation, and measurable outcomes.",
  },
];

const principles = [
  "Architecture decisions tied to business outcomes",
  "Security and privacy embedded by default",
  "Transparent delivery with weekly progress visibility",
  "Quality gates across development, testing, and release",
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-36 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-[#1b8be0]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-28 h-72 w-72 rounded-full bg-[#ff8f3f]/12 blur-3xl" />

        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#ccd8e4] bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#425971]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1b8be0]" />
            About SUDO Solution
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] font-bold leading-[1.03] text-[#0d1723] sm:text-[3.25rem] lg:text-[3.85rem]">
            We design and deliver digital systems built for real operational pressure.
          </h1>

          <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-[#445871]">
            SUDO Solution partners with ambitious organizations to modernize how
            products are built, scaled, and operated. Our teams combine product
            thinking, engineering discipline, and measurable delivery to move
            critical initiatives from idea to impact.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#0d1723] px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f3b71]"
            >
              Start a conversation
            </Link>
            <Link
              href="/careers"
              className="rounded-full border border-[#c5d2de] bg-white/70 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#162a3f] transition-colors hover:border-[#1b8be0] hover:text-[#0f3b71]"
            >
              Explore careers
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#d2deea] bg-white/75 p-5">
                <p className="font-display text-3xl font-bold text-[#102438]">{item.value}</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.09em] text-[#4f6278]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#cfdbe7] bg-white/80 p-7">
              <p className="font-display text-2xl font-bold text-[#132338]">{item.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4b6077]">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-[#cfdae6] bg-white/80 p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6278]">How We Work</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[#0f2338]">Structured delivery without unnecessary overhead.</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4b6077]">
              From discovery to release, we keep momentum high and risk visible.
              Every sprint is built around clear outcomes, technical quality, and
              practical collaboration with your team.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                { step: "01", title: "Discover", body: "Clarify goals, constraints, and business value." },
                { step: "02", title: "Architect", body: "Design scalable, secure, and maintainable systems." },
                { step: "03", title: "Deliver", body: "Ship iteratively with strong engineering standards." },
                { step: "04", title: "Optimize", body: "Measure outcomes and continuously improve." },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-[#d8e3ee] bg-[#f9fcff] p-4">
                  <p className="font-mono text-[11px] tracking-[0.12em] text-[#45607d]">STEP {item.step}</p>
                  <p className="mt-1 font-semibold text-[#17304a]">{item.title}</p>
                  <p className="mt-1 text-[14px] text-[#52677d]">{item.body}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-[#cfdae6] bg-[linear-gradient(160deg,rgba(255,255,255,0.88)_0%,rgba(235,244,252,0.88)_100%)] p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6278]">Why Teams Choose Us</p>
            <ul className="mt-4 space-y-3">
              {principles.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#334e67]">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1b8be0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-[#0f2338] p-5 text-white">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#9fc4e6]">Next Step</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#dce8f5]">
                Have a product, platform, or transformation initiative in mind?
                Let us shape the execution plan together.
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#102438]"
              >
                Contact team
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
