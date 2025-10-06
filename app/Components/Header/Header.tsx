import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-10 text-black p-4">
      <nav>
        <Link href="#home" className="mr-4 hover:underline">
          Phaenomen
        </Link>
        <Link href="/about" className="mr-4 hover:underline">
          À propos
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/agenda" className="ml-4 hover:underline">
          Agenda
        </Link>
        <Link href="/media" className="ml-4 hover:underline">
          Médias
        </Link>
      </nav>
    </header>
  );
}
