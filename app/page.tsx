import Hero from "./Components/HeroSection/HeroSlideShow/Hero";
import { AboutSection } from "./Components/Sections";
import ScrollLinkedText from "./Components/(ui)/Animations/ScrollLinkedText";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollLinkedText/>
      <AboutSection />
    </>
  );
}
