"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface ContactButtonProps {
  className?: string;
  text?: string;
  dateLabel?: string | null;
  titleLabel?: string | null;
  ctaLabel?: string;
  href?: string;
  onUnavailable?: () => void;
}

export default function ContactButton({
  className = "",
  text = "SÉLECTIONNER\nUNE DATE",
  dateLabel = null,
  titleLabel = null,
  ctaLabel = "réserver",
  href,
  onUnavailable,
}: ContactButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (href?.trim()) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    setShowModal(true);
    onUnavailable?.();
  };

  const hasSelection = Boolean(dateLabel && titleLabel);

  return (
    <>
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

      {showModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white text-black shadow-2xl p-6">

            <h2 className="text-lg font-serif mb-2">
              Lien de réservation indisponible
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Le lien de réservation sera bientôt disponible. Revenez très vite ou
              contactez-nous pour plus d&apos;infos.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-full border border-black hover:cursor-pointer text-sm uppercase tracking-[0.18em] hover:bg-black hover:text-white transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
