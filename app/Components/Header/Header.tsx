import Link from "next/link";

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
      <nav className="max-w-screen-xl mx-auto flex gap-6">
        <Link href="#home" className="hover:underline">Phaenomen</Link>
        <Link href="/about" className="hover:underline">À propos</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/agenda" className="hover:underline">Agenda</Link>
        <Link href="/media" className="hover:underline">Médias</Link>
      </nav>
    </header>
  );
}
