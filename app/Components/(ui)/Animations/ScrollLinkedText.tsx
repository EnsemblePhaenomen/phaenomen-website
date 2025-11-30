"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";

const sentence =
  "L'ensemble Phænomen est spécialisé dans la musique baroque allemande du XVIIIème siècle et se donne pour mission principale de promouvoir et de diffuser la musique de Gottfried Heinrich Stölzel (1690-1749).";

const words = sentence.split(" ");

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "0.3em",
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ScrollLinkedText() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <section className="bg-[#f4f4f4] py-16 px-4 flex justify-center">
      <motion.h1
        ref={ref}
        className="inline-block text-center text-xl sm:text-2xl md:text-4xl font-serif leading-tight max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </section>
  );
}
