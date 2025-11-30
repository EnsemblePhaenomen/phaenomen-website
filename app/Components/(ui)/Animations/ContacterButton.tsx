"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type React from "react";

interface ContactButtonProps {
  className?: string;
  text?: string;
  href?: string;
  /**
   * For external links (mailto, http...) render a native <a> instead of Next <Link>
   */
  useAnchor?: boolean;
  children?: React.ReactNode;
}

export default function ContacterButton({
  className = "",
  text = "NOUS CONTACTER",
  href,
  useAnchor,
  children,
}: ContactButtonProps) {
  const targetHref = href || "/contact";
  const shouldUseAnchor =
    useAnchor ?? (targetHref.startsWith("mailto:") || targetHref.startsWith("http"));

  const baseClasses = `
    h-44 w-44 rounded-full bg-black text-white border-2 border-black
    flex flex-col items-center justify-center
    text-1xl uppercase tracking-[0.18em]
    relative overflow-hidden
    transition-all duration-300
    hover:bg-[#f4f4f4] hover:text-black
    hover:cursor-pointer
  `;

  if (shouldUseAnchor) {
    return (
      <motion.a
        href={targetHref}
        className={`${baseClasses} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="relative z-10 whitespace-pre-line text-center flex flex-col items-center gap-1 px-3">
          {children ?? <span className="text-xs md:text-sm leading-snug">{text}</span>}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        className="relative z-10 whitespace-pre-line text-center flex flex-col items-center gap-1 px-3"
        href={targetHref}
      >
        {children ?? <span className="text-xs md:text-sm leading-snug">{text}</span>}
      </Link>
    </motion.div>
  );
}
