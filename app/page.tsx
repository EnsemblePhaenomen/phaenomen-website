import Hero from "./Components/HeroSection/HeroSlideShow/Hero";
import {
  AboutSection,
  ContactSection,
  AgendaSection,
  MediaSection,

} from "./Components/Sections";
import ScrollLinkedText from "./Components/(ui)/Animations/ScrollLinkedText";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollLinkedText/>
      <AboutSection />
      <ContactSection />
      <AgendaSection />
      <MediaSection />
    </>
  );
}
