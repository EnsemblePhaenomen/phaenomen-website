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
    targetId?: string;
    ariaLabel?: string;
  };
  priority?: boolean;
  layout?: "default" | "hero-with-logo";
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  director?: {
    name: string;
    role: string;
  };
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
