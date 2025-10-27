"use client";

import Link from "next/link";

interface HeaderNavLinkProps {
  href: string;
  label: string;
  isDark: boolean;
}

export default function HeaderNavLink({ href, label, isDark }: HeaderNavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
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