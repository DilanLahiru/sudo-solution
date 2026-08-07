# Sudo Solution — marketing website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Design tokens

- **Colors** (from the Sudo Solution logo): brand blue `#1D63C4` → light `#4EA8ED`,
  deep navy `#0A1F3D`, slate gray `#5B6270`, paper background `#F7F8FB`.
  Defined in `tailwind.config.ts`.
- **Type**: display face Space Grotesk, body Inter, mono JetBrains Mono
  (used for eyebrow labels, a nod to the "sudo" command-line origin of the name).
- **Signature shape**: the hexagon from the logo mark is reused as a clip-path
  (`.hex-cut` / `.hex-corner` in `app/globals.css`) for the logo badge,
  service card icons, and the rotating hex constellation in the hero.

## Structure

```
app/
  layout.tsx      fonts + metadata
  page.tsx         assembles all sections
  globals.css      tokens, clip-paths, animations
components/
  Navbar, Hero, HexMark, TechMarquee,
  Services, Process, CTASection, Footer, ScrollReveal
```

## Next steps

- Swap the placeholder email/phone in `CTASection.tsx` and `Footer.tsx` for real contact details.
- Replace the `HexMark` SVG background with a client logo/case-study visual if you want something less abstract.
- Add a `/work` or case-studies page once you have projects to showcase — the nav in `Navbar.tsx` is ready for another link.
