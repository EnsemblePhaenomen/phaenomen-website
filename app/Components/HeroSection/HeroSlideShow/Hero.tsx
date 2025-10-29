// Server wrapper (render 1er slide SSR)
/* Charge slides (mock local).

Rend la structure et le 1er slide déjà visible SSR (pas de FOUC).

Monte HeroCarouselIsland en lui passant slides + config sérialisables.*/

import { heroSlides } from "@/app/lib/hero-slides.local";
import { heroConfig } from "@/app/lib/hero-config.local";
import HeroCarouselIsland from "@/app/Components/HeroSection/HeroSlideShow/HeroCarouselIsland";

export default function Hero() {
  return (
    <HeroCarouselIsland slides={heroSlides} config={heroConfig} />
  );
}