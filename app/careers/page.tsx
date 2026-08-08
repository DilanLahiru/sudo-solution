import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const roles = [
  {
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Sri Lanka | Remote-friendly",
    stack: "Next.js, Node.js, PostgreSQL",
    summary:
      "Build product features end-to-end with strong emphasis on architecture, performance, and code quality.",
  },
  {
    title: "QA Automation Engineer",
    type: "Full-time",
    location: "Sri Lanka | Hybrid",
    stack: "Playwright, API testing, CI/CD",
    summary:
      "Design robust test pipelines and quality gates that keep releases stable and predictable.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract / Full-time",
    location: "Remote",
    stack: "interaction design, design systems",
    summary:
      "Shape intuitive user journeys and interfaces that turn complex workflows into simple experiences.",
  },
];

const benefits = [
  "High ownership with meaningful product impact",
  "Flexible remote and hybrid collaboration model",
  "Learning budget and mentorship support",
  "Clear engineering standards and growth paths",
  "Exposure to enterprise-grade projects",
  "People-first culture with healthy delivery rhythm",
];

const hiringSteps = [
  "Intro conversation",
  "Skills and portfolio review",
  "Practical interview",
  "Final alignment and offer",
];

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <section className="relative overflow-hidden pb-20 pt-36 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute -left-10 top-20 h-64 w-64 rounded-full bg-[#1b8be0]/14 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-16 h-72 w-72 rounded-full bg-[#ff8f3f]/12 blur-3xl" />

        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#ccd8e4] bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#425971]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1b8be0]" />
            Careers
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-[2.45rem] font-bold leading-[1.03] text-[#0d1723] sm:text-[3.2rem] lg:text-[3.7rem]">
            Build resilient digital products with a team that values craft, clarity, and impact.
          </h1>

          <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-[#445871]">
            We are growing an engineering-focused team for ambitious projects
            across product platforms, enterprise systems, and AI-powered
            operations. If you care about quality and ownership, you will fit in.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:operation@sudosolution.lk"
              className="rounded-full bg-[#0d1723] px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f3b71]"
            >
              Apply now
            </a>
            <Link
              href="/about"
              className="rounded-full border border-[#c5d2de] bg-white/70 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#162a3f] transition-colors hover:border-[#1b8be0] hover:text-[#0f3b71]"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 lg:px-10">
        <div className="rounded-3xl border border-[#cfdae6] bg-white/80 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6278]">Open Positions</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#102438]">Current opportunities</h2>
            </div>
            <p className="text-[14px] text-[#4f6178]">Did not find your role? Send your profile anyway.</p>
          </div>

          <div className="mt-7 grid gap-5">
            {roles.map((role) => (
              <article key={role.title} className="rounded-2xl border border-[#d8e3ee] bg-[#f9fcff] p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#132338]">{role.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#4f6178]">{role.summary}</p>
                  </div>
                  <span className="w-fit rounded-full border border-[#c6d6e6] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#35506b]">
                    {role.type}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 text-[13px] text-[#3e5872] sm:grid-cols-3">
                  <p className="rounded-lg bg-white px-3 py-2">Location: {role.location}</p>
                  <p className="rounded-lg bg-white px-3 py-2">Stack: {role.stack}</p>
                  <a
                    href="mailto:operation@sudosolution.lk?subject=Application%20-%20SUDO%20Solution"
                    className="rounded-lg bg-[#0f2338] px-3 py-2 text-center font-semibold text-white transition-colors hover:bg-[#0f3b71]"
                  >
                    Apply for this role
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-[#cfdae6] bg-[linear-gradient(165deg,rgba(255,255,255,0.9)_0%,rgba(237,245,252,0.9)_100%)] p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6278]">Benefits and Culture</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-[#102438]">Work where growth is part of the system.</h3>
            <ul className="mt-5 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#334e67]">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1b8be0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#cfdae6] bg-white/80 p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6278]">Hiring Process</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-[#102438]">Simple, fair, and transparent.</h3>
            <div className="mt-6 grid gap-3">
              {hiringSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-xl border border-[#d8e3ee] bg-[#f9fcff] p-4">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0f2338] text-[11px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-[15px] text-[#2f4a64]">{step}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:operation@sudosolution.lk"
              className="mt-7 inline-flex rounded-full bg-[#0d1723] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f3b71]"
            >
              Send your CV
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
