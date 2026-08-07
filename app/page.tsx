import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <Process />
      <CTASection />
      <Footer />
    </main>
  );
}
