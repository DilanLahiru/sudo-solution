"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-[#eff3f6]/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="SUDO Solution home">
          <Image
            src="/sudo-solution-logo.svg"
            alt="SUDO Solution"
            width={860}
            height={260}
            priority
            className="h-[34px] w-auto sm:h-[40px]"
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#40536a] transition-colors hover:text-[#0f3b71]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-[#0d1723] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#0f3b71] lg:inline-block"
        >
          Start a project
        </Link>

        <button
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-[#243447] lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="font-mono text-sm">{menuOpen ? "x" : "≡"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mb-4 max-w-content px-6 lg:hidden">
          <div className="glass rounded-2xl p-5">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2b4159]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-[#0d1723] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white"
              >
                Start project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
