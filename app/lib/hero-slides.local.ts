import { HeroSlide } from "@/app/types/heroConfig";

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: {
      src: "/heroGallery/hero2.jpeg",
      alt: "Photographie de la page d'accueil",
    },
    headline: "ensemble",
    layout: "hero-with-logo",
    logo: {
      src: "/LOGONOM_BLANC_SVG.svg",
      alt: "Logo de Phaenomen",
      width: 800,
      height: 400,
    },
    director: {
      name: "Noé Chapolard",
      role: "Direction",
    },
    cta: {
      label: "Plus d'informations",
      href: "/about",
      targetId: "#about",
      ariaLabel: "Plus d'informations - Naviguer vers la section À propos",
    },
    priority: true,
  },
  {
    id: "slide-2",
    image: {
      src: "/heroGallery/Gotha_um_1730.jpg",
      alt: "Portrait d'un musicien jouant du violon baroque",
      focalPoint: {
        x: 0,
        y: 5,
      },
    },
    headline: "L’ensemble Phænomen",
    subheadline:
      "Spécialistes de la pratique musicale et du répertoire baroque",
    cta: {
      label: "En savoir plus",
      href: "/#projet-stoltzel",
    },
  },
];
// Ajout du troisième slide
heroSlides.push({
  id: "slide-3",
  image: {
    src: "/heroGallery/slide_2.jpg",
    alt: "Masterclass de musique baroque",
  },
  headline: "Project Stöltzel",
  subheadline:
    "Parcourir l'intégrale des cantates de Gottfried Heinrich Stölzel",
  cta: {
    label: "Découvrez nos projets",
    href: "/#about",
  },
});
