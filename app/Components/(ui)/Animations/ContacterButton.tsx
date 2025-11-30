"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface ContactButtonProps {
  className?: string;
  text?: string;
  href?: string;
}

export default function ContacterButton({
  className = "",
  text = "NOUS CONTACTER",
  href,
}: ContactButtonProps) {



  return (
    <motion.button
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
      <Link className="relative z-10 whitespace-pre-line text-center flex flex-col items-center gap-1 px-3" href={href || "/contact"}>
 
          <span className="text-xs md:text-sm leading-snug">{text}</span>
        
      </Link>
    </motion.button>
  );
}
