"use client";

import Link from "next/link";
import { useState } from "react";
import { scrollToSection } from "@/app/utils/scrollToSection";

interface SubMenuItem {
  href: string;
  label: string;
}

interface HeaderNavLinkProps {
  href: string;
  label: string;
  isDark: boolean;
  subMenu?: SubMenuItem[];
}

export default function HeaderNavLink({ href, label, isDark, subMenu }: HeaderNavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
    e.preventDefault();
    scrollToSection(targetHref);
    setIsOpen(false);
  };

  // Si pas de sous-menu, afficher un lien simple
  if (!subMenu || subMenu.length === 0) {
    return (
      <Link
        href={href}
        onClick={(e) => handleClick(e, href)}
        className={`hover:underline transition-all duration-300 cursor-pointer ${
          isDark 
            ? 'text-black hover:text-gray-600' 
            : 'text-white hover:text-gray-200'
        }`}
        suppressHydrationWarning
      >
        {label}
      </Link>
    );
  }

  // Avec sous-menu
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        onClick={(e) => handleClick(e, href)}
        className={`hover:underline transition-all duration-300 cursor-pointer flex items-center gap-1 whitespace-nowrap ${
          isDark 
            ? 'text-black hover:text-gray-600' 
            : 'text-white hover:text-gray-200'
        }`}
        suppressHydrationWarning
      >
        {label}
        <svg 
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Sous-menu */}
      <div 
        className={`absolute top-full left-0 mt-2 min-w-[200px] rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        } ${
          isDark 
            ? 'bg-white border border-gray-200' 
            : 'bg-gray-900 border border-gray-700'
        }`}
      >
        {subMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`block px-4 py-3 transition-colors duration-200 cursor-pointer ${
              isDark
                ? 'text-black hover:bg-gray-100'
                : 'text-white hover:bg-gray-800'
            }`}
            suppressHydrationWarning
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}