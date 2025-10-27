import Link from "next/link";
import Image from "next/image";

// Types
interface NavItem {
  href: string;
  label: string;
}

// Constants - Single Responsibility Principle
const NAVIGATION_ITEMS: NavItem[] = [
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/agenda", label: "Agenda" },
  { href: "/media", label: "Médias" },
];

const LOGO_CONFIG = {
  src: "/LOGO_ROSE_SVG.svg",
  alt: "Phaenomen Logo",
  width: 70,
  height: 40,
} as const;

// Components - Single Responsibility Principle
function Logo() {
  return (
    <Link href="#home" className="hover:opacity-80 transition-opacity duration-200">
      <Image
        src={LOGO_CONFIG.src}
        alt={LOGO_CONFIG.alt}
        width={LOGO_CONFIG.width}
        height={LOGO_CONFIG.height}
        className="h-auto"
        priority
      />
    </Link>
  );
}

function NavigationLink({ href, label }: NavItem) {
  return (
    <Link
      href={href}
      className="hover:underline transition-all duration-200 hover:text-gray-200"
    >
      {label}
    </Link>
  );
}

function NavigationMenu() {
  return (
    <div className="pr-10 w-1/3 flex gap-6 justify-between">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationLink key={item.href} {...item} />
      ))}
    </div>
  );
}

// Main Header Component - Open/Closed Principle
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent p-4 text-white pointer-events-auto">
      <nav className="w-full mx-auto flex justify-between items-center">
        <Logo />
        <NavigationMenu />
      </nav>
    </header>
  );
}
