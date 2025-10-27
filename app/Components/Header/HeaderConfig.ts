// Types
export interface NavItem {
  href: string;
  label: string;
}

export interface LogoConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Constants
export const NAVIGATION_ITEMS: NavItem[] = [
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
  { href: "#agenda", label: "Agenda" },
  { href: "#media", label: "Médias" },
];

export const LOGO_CONFIG: LogoConfig = {
  src: "/LOGO_ROSE_SVG.svg",
  alt: "Phaenomen Logo",
  width: 70,
  height: 40,
} as const;