import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudo Solution | Engineering Digital Systems That Scale",
  description:
    "Sudo Solution designs mission-critical software systems across web, mobile, AI, ERP, and enterprise platforms for teams that need resilient delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${sora.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
