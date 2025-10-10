import Image, { StaticImageData } from "next/image";
import hero from "@/public/heroGallery/hero.jpeg";

type HeroBackgroundProps = {
  src: StaticImageData;
  children: React.ReactNode;
  //   overlay?: string;
};
export default function HeroBackground({
  children,
  src = hero,
}: //   overlay = "rgba(0,0,0,0.35)",
HeroBackgroundProps) {
  return (
    <section id="hero-section" className={`relative w-full min-h-[100vh]`}>
      {/* Background image */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Optional overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        // style={{ background: overlay }}
      />
    </section>
  );
}
