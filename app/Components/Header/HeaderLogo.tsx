"use client";

import Link from "next/link";
import Image from "next/image";

interface HeaderLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  targetId?: string;
}

export default function HeaderLogo({ 
  src, 
  alt, 
  width, 
  height, 
  targetId = '#hero-section' 
}: HeaderLogoProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Link 
      href="#home" 
      onClick={handleClick}
      className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto"
        priority
      />
    </Link>
  );
}