// Types
export interface SubMenuItem {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  subMenu?: SubMenuItem[];
}

export interface LogoConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Constants
export const NAVIGATION_ITEMS: NavItem[] = [
  { 
    href: "#about", 
    label: "À propos",
    subMenu: [
      { href: "#about", label: "L'ensemble" },
      { href: "#projet-stoltzel", label: "Projet Stöltzel" },
    ]
  },
  { href: "/pages/contact", label: "Contact" },
  { href: "/pages/agenda", label: "Agenda" },
  { href: "/pages/medias", label: "Médias" },
];

export const LOGO_CONFIG: LogoConfig = {
  src: "/LOGO_ROSE_SVG.svg",
  alt: "Phaenomen Logo",
  width: 70,
  height: 40,
} as const;