import Image from "next/image";
import { HeroSlide } from "@/app/types/heroConfig";
import Overlay from "./Overlay";

type SlideProps = {
  slide: HeroSlide;
  isActive: boolean;
  transitionMs: number;
};

export default function Slide({ slide, isActive, transitionMs }: SlideProps) {
  console.log("Slide rendering:", slide.id, "isActive:", isActive);

  return (
    <div
      className={`
        absolute inset-0 transition-opacity ease-in-out
        ${
          isActive
            ? "opacity-100 z-10 pointer-events-auto"
            : "opacity-0 z-0 pointer-events-none"
        }
      `}
      style={{
        pointerEvents: isActive ? "auto" : "none",
        transitionDuration: `${transitionMs}ms`,
      }}
    >
      {/* Image */}
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        priority={slide.priority}
        sizes="100vw"
        className="object-cover object-center -z-10"
        style={{
          objectPosition: slide.image.focalPoint
            ? `${slide.image.focalPoint.x}% ${slide.image.focalPoint.y}%`
            : "center",
        }}
      />

      {/* Gradient overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-0" />

      {/* Contenu textuel */}
      <Overlay slide={slide} />
    </div>
  );
}
