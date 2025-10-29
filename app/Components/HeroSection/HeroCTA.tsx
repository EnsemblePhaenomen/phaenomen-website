"use client";

import Link from "next/link";
import ArrowIcon from "../(ui)/Arrows/ArrowIcon";

interface HeroCTAProps {
  href: string;
  label: string;
  targetId?: string;
  ariaLabel?: string;
}

export default function HeroCTA({
  href,
  label,
  targetId,
  ariaLabel,
}: HeroCTAProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si targetId fourni, on scrolle vers la section sans rechargement
    if (targetId) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative z-50 flex justify-start pointer-events-auto">
      <Link
        href={href}
        onClick={handleClick}
        aria-label={ariaLabel || label}
        className="group flex items-center justify-start text-white w-fit cursor-pointer select-none pointer-events-auto"
        style={{ pointerEvents: "auto" }}
      >
        {/* Flèche animée */}
        <div className="mr-3 md:mr-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45">
          <ArrowIcon className="w-10 h-auto md:w-12" />
        </div>

        {/* Label */}
        <p className="hero-info leading-none transition-opacity duration-300 group-hover:opacity-90">
          {label}
        </p>
      </Link>
    </div>
  );
}
