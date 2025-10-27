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
  ariaLabel 
}: HeroCTAProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (targetId) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div className="flex justify-start">
      <Link
        href={href}
        onClick={handleClick}
        className="flex items-center justify-start text-white group w-fit cursor-pointer"
        aria-label={ariaLabel || label}
      >
        <ArrowIcon className="w-10 h-auto md:w-12 mr-3 md:mr-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45 motion-reduce:transition-none flex-shrink-0" />
        <p className="hero-info leading-none">{label}</p>
      </Link>
    </div>
  );
}