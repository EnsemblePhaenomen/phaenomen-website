"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

interface ContactButtonProps {
  className?: string;
  text?: string;
  dateLabel?: string | null;
  titleLabel?: string | null;
  ctaLabel?: string;
  href?: string;
}

export default function ContactButton({
  className = "",
  text = "SÉLECTIONNER\nUNE DATE",
  dateLabel = null,
  titleLabel = null,
  ctaLabel = "réserver",
  href,
}: ContactButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // fallback si jamais aucune URL n'est fournie
    router.push("/contact");
  };

  const hasSelection = Boolean(dateLabel && titleLabel);

  return (
    <motion.button
      onClick={handleClick}
      className={`
        h-44 w-44 rounded-full bg-black text-white border-2 border-black
        flex flex-col items-center justify-center
        text-1xl uppercase tracking-[0.18em]
        relative overflow-hidden
        transition-all duration-300
        hover:bg-[#f4f4f4] hover:text-black
        ${className}
        hover:cursor-pointer
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10 whitespace-pre-line text-center flex flex-col items-center gap-1 px-3">
        {hasSelection ? (
          <>
            <span className="text-sm md:text-base font-serif tracking-tight leading-none">
              {dateLabel}
            </span>
            <span className="text-[0.6rem] md:text-[0.7rem] font-light normal-case leading-tight line-clamp-2">
              {titleLabel}
            </span>
            <span className="text-[0.65rem] md:text-xs tracking-[0.18em] leading-none uppercase">
              {ctaLabel}
            </span>
          </>
        ) : (
          <span className="text-xs md:text-sm leading-snug">{text}</span>
        )}
      </span>
    </motion.button>
  );
}
