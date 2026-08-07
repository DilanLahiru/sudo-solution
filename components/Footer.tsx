const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/#services" },
      { label: "Products", href: "/#services" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Digital Transformation", href: "/#services" },
      { label: "Software Engineering", href: "/#services" },
      { label: "AI & Data", href: "/#services" },
      { label: "QA & Testing", href: "/#services" },
      { label: "Platform & DevOps", href: "/#services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1522] pt-16">
      <div className="mx-auto max-w-content px-6 pb-10 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="hex-cut flex h-9 w-9 items-center justify-center bg-[linear-gradient(145deg,#1b8be0_0%,#0f3b71_100%)]">
                <span className="font-display text-sm font-bold text-white">S</span>
              </span>
              <span className="font-display text-[15px] font-bold tracking-tight text-white">
                SUDO SOLUTION
              </span>
            </a>

            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#98aec5]">
              Building resilient digital systems with engineering-first delivery,
              product clarity, and measurable operational impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com"
                className="rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-[#b0c5da] transition-colors hover:border-white/40 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com"
                className="rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-[#b0c5da] transition-colors hover:border-white/40 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#93abc3]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[#d4e3f0] transition-colors hover:text-[#8ec3ed]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#93abc3]">Get in Touch</p>
            <div className="mt-4 space-y-3 text-[14px] text-[#d4e3f0]">
              <p>Colombo, Sri Lanka</p>
              <a href="tel:+94712487141" className="block transition-colors hover:text-[#8ec3ed]">
                (+94) 71 248 7141
              </a>
              <a href="mailto:hello@sudosolution.com" className="block transition-colors hover:text-[#8ec3ed]">
                hello@sudosolution.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[13px] text-[#8fa6bd] sm:flex-row">
          <p>© {new Date().getFullYear()} Sudo Solution (Pvt) Ltd. All rights reserved.</p>
          <p className="font-mono text-[12px]">ISO-aligned delivery and privacy-first engineering</p>
        </div>
      </div>
    </footer>
  );
}
