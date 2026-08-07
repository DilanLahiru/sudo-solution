import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1730",        // near-black navy, primary text / dark sections
        navy: {
          DEFAULT: "#0D2B54",
          light: "#123B72",
        },
        brand: {
          50: "#EAF4FE",
          100: "#CFE7FC",
          300: "#7FC1F5",
          400: "#4EA8ED",       // logo light blue
          500: "#2E86DE",
          600: "#1D63C4",       // logo mid blue
          700: "#14459A",
          900: "#0A1F3D",       // logo deep navy
        },
        slate: {
          150: "#E7E9EC",
          350: "#9AA1AC",
          450: "#5B6270",       // logo charcoal gray
          650: "#363B44",
        },
        paper: "#F7F8FB",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4EA8ED 0%, #1D63C4 45%, #0A1F3D 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #EAF4FE 0%, #CFE7FC 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,23,48,0.04), 0 12px 32px -12px rgba(10,23,48,0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
