import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
         bg-transparent
        p-4
        text-white
        pointer-events-auto

      "
    // bg-transparent
    >
      <nav className="w-full mx-auto flex justify-between items-center bg-red-200">
        <Link href="#home" className="hover:opacity-80 transition-opacity">
          <Image
            src="/LOGO_ROSE_SVG.svg"
            alt="Phaenomen Logo"
            width={60}
            height={20}
            className="h-auto"
          />
        </Link>
        <div className="flex w-1/3 gap-6 bg-blue-200 justify-between">
          <Link href="/about" className="hover:underline">À propos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/agenda" className="hover:underline">Agenda</Link>
          <Link href="/media" className="hover:underline">Médias</Link>
        </div>
      </nav>
    </header>
  );
}
