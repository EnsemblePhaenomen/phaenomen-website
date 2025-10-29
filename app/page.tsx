import Hero from "./Components/HeroSection/HeroSlideShow/Hero";
import {
  AboutSection,
  ContactSection,
  AgendaSection,
  MediaSection,
} from "./Components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ContactSection />
      <AgendaSection />
      <MediaSection />
    </>
  );
}
