import Hero from "./Components/HeroSection/HeroSlideShow/Hero";
import {
  AboutSection,
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
      <AgendaSection />
      <MediaSection />
    </>
  );
}
