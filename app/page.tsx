import HeroBackground from "./Components/HeroSection/HeroBackground";
import { AboutSection, ContactSection, AgendaSection, MediaSection } from "./Components/Sections";
import hero2 from "@/public/heroGallery/hero2.jpeg";
import logoBlanc from "@/public/LOGONOM_BLANC_SVG.svg";

export default function Home() {
  return (
    <>
      <HeroBackground 
        src={hero2} 
        logo={logoBlanc}
        ctaHref="#about"
        ctaTargetId="#about"
        ctaLabel="Plus d'informations"
        ctaAriaLabel="Plus d'informations - Naviguer vers la section À propos"
      />
      <AboutSection />
      <ContactSection />
      <AgendaSection />
      <MediaSection />
    </>
  );
}
