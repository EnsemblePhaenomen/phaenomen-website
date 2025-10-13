import Image from "next/image";
import HeroBackground from "./Components/HeroSection/HeroBackground";
import hero2 from "@/public/heroGallery/hero2.jpeg";
import logoBlanc from "@/public/LOGONOM_BLANC_SVG.svg";

export default function Home() {
  return (
    <>
      <HeroBackground src={hero2} logo={logoBlanc}>
        {/* {children} */}
      </HeroBackground>
    </>
  );
}
