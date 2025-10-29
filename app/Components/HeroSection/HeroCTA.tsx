"use client";

import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  console.log("HeroCTA rendered:", label);

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
    <div
      className="relative z-50 flex justify-start pointer-events-auto bg-red-500/20 border border-red-500"
      onMouseEnter={() => {
        console.log("div hover");
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        onClick={handleClick}
        onMouseEnter={() => {
          console.log("link hover");
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel || label}
        className="flex items-center justify-start text-white w-fit cursor-pointer select-none pointer-events-auto"
        style={{ pointerEvents: "auto" }}
      >
        {/* Flèche animée */}
        <div
          className={`
            mr-3 md:mr-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out
            ${isHovered ? "translate-x-1 rotate-45" : "translate-x-0 rotate-0"}
          `}
        >
          <ArrowIcon className="w-10 h-auto md:w-12" />
        </div>

        {/* Label */}
        <p
          className={`
            hero-info leading-none transition-opacity duration-300
            ${isHovered ? "opacity-90" : "opacity-100"}
          `}
        >
          {label}
        </p>
      </Link>
    </div>
  );
}
