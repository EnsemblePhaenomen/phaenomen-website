export type HeroSlide = {
  id: string;
  image: {
    src: string;
    alt: string;
    focalPoint?: { x: number; y: number };
  };
  headline: string;
  subheadline?: string;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  priority?: boolean;
};

export type HeroConfig = {
  autoplay: boolean;
  intervalMs?: number;
  transitionMs?: number;
  pauseOnHover?: boolean;
  showControls?: boolean;
  showDots?: boolean;
};

export type HeroProps = {
  slides: HeroSlide[];
  config?: HeroConfig;
};
