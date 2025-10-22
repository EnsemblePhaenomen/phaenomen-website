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
    >
      <div className="flex items-center justify-between px-4 py-3">
        <Link
          href="#home"
          className="text-base font-medium tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Phaenomen
        </Link>
        <MenuButton open={open} onToggle={() => setOpen((v) => !v)} />
      </div>

      {/* Overlay + Panel */}
      <div
        className={`
          pointer-events-none fixed inset-0 transition
          ${open ? "pointer-events-auto" : ""}
        `}
      >
        <div
          className={`
            absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity
            ${open ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
          className={`
            absolute inset-x-0 top-0 h-fit origin-top  rounded-b-2xl bg-transparent-90/60 backdrop-blur
            border-b border-white/10 shadow-2xl
            transition-all duration-200
            ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
            }
          `}
        >
          <nav className="flex flex-col gap-1 px-4 pb-6 pt-2">
            {NAV_ITEMS.map((item, i) => {
              const active = item.href !== "#home" && item.href === activePath;
              return (
                <NavLink
                  key={item.href}
                  item={item}
                  active={active}
                  onClick={() => setOpen(false)}
                />
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
