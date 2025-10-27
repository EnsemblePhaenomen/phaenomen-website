"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Phaenomen" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/agenda", label: "Agenda" },
  { href: "/media", label: "Médias" },
];

function useScrollLock(locked: boolean) {
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    if (locked) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}

function MenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className="inline-flex size-10 items-center justify-center rounded-md border border-white/20 bg-white/5 backdrop-blur-sm
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 active:scale-[0.98]"
    >
      <span aria-hidden className="relative block h-4 w-6">
        <span
          className={`absolute inset-x-0 top-0 h-0.5 bg-white transition-transform ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-white transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

function NavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={`block rounded-lg px-4 py-3 text-lg leading-none
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                  ${active ? "bg-white/15" : "hover:bg-white/10"}`}
    >
      {item.label}
    </Link>
  );
}
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey, { passive: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const activePath = useMemo(() => pathname ?? "/", [pathname]);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50 md:hidden
        text-white
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
