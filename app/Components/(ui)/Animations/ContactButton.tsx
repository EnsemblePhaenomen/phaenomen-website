"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

interface ContactButtonProps {
  className?: string;
  text?: string;
}

export default function ContactButton({ 
  className = "",
  text = "NOUS\nCONTACTER"
}: ContactButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`h-44 w-44 rounded-full bg-black text-white border-2 border-black flex flex-col items-center justify-center text-1xl uppercase tracking-[0.18em] relative overflow-hidden transition-all duration-300 hover:bg-[#f4f4f4] hover:text-black ${className} hover:cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10 whitespace-pre-line text-center">
        {text}
      </span>
    </motion.button>
  );
}
