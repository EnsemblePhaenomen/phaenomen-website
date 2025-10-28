import { HeroSlide } from "@/app/types/heroConfig";

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: {
      src: "/heroGallery/hero2.jpeg",
      alt: "Photographie de la page d'accueil",
    },
    headline: "Redécouvrir Stöltzel",
    subheadline: "Une aventure musicale européenne",
    cta: {
      label: "Découvrir le projet",
      href: "/projet",
    },
    priority: true,
  },
  {
    id: "slide-2",
    image: {
      src: "/heroGallery/test.jpg",
      alt: "Portrait d'un musicien jouant du violon baroque",
    },
    headline: "L’ensemble Phænomen",
    subheadline: "La passion de la musique ancienne",
    cta: {
      label: "En savoir plus",
      href: "/about",
    },
  },
];
