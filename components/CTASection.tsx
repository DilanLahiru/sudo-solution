export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#101f30] py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#1b8be0]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[320px] w-[320px] rounded-full bg-[#ff8f3f]/18 blur-3xl" />

      <div className="relative mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <div className="reveal-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8ec3ed]">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-[2.9rem]">
            Planning a platform your team will depend on daily?
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-[#a5bdd5]">
            Share your goals, timelines, and current challenges. We will follow
            up with a practical execution path and a transparent delivery plan.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-5">
            <div>
              <p className="font-display text-2xl font-bold text-white">24h</p>
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8fa9c1]">response time</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">100%</p>
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8fa9c1]">confidential consults</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@sudosolution.com"
              className="rounded-full bg-white px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#12253a] transition-transform hover:-translate-y-0.5"
            >
              hello@sudosolution.com
            </a>
            <a
              href="tel:+94712487141"
              className="rounded-full border border-white/25 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white/60"
            >
              (+94) 71 248 7141
            </a>
          </div>
        </div>

        <div className="reveal-right rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <p className="font-display text-[23px] font-bold text-white">Send Us a Message</p>
          <div className="mt-6 space-y-4">
            {[
              "Full Name",
              "Work Email",
              "Organization",
              "Service of Interest",
            ].map((field) => (
              <div key={field} className="rounded-xl border border-white/15 bg-[#0f2235] px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8eacc9]">{field}</p>
              </div>
            ))}
            <div className="rounded-xl border border-white/15 bg-[#0f2235] px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8eacc9]">Project Brief</p>
              <div className="mt-3 h-16 rounded-md border border-white/10" />
            </div>
          </div>

          <button className="mt-6 w-full rounded-full bg-[#1b8be0] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#227fd2]">
            Request Consultation
          </button>
          <p className="mt-3 text-center text-[12px] text-[#89a5bf]">We reply within one business day.</p>
        </div>
      </div>
    </section>
  );
}
