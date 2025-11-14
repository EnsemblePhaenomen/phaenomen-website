"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const sentence =
"L'ensemble Phænomen est un ensemble spécialisé dans la musique baroque allemande du XVIIIème siècle. Sous la direction de Noé Chapolard, l'ensemble se donne pour mission principale de promouvoir et de diffuser la musique de Gottfried Heinrich Stölzel (1690-1749), pour la plupart oubliée tant par les historiens que par les interprètes."
const words = sentence.split(" ");

export default function ScrollLinkedText() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState(0);

  const totalLetters = words.reduce((acc, w) => acc + w.length, 0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const revealEnd = 0.8; // 80% du scroll pour tout révéler
    const clamped = Math.min(latest / revealEnd, 1);
    const maxCursor = totalLetters - 1;
    setCursor(clamped * maxCursor);
  });

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center justify-center px-4">
        <h1 className="inline-block relative text-center text-2xl md:text-4xl font-serif leading-tight">
          {(() => {
            let globalIndex = -1;

            return words.map((word, wIndex) => (
              <span
                key={wIndex}
                className="word inline-block mr-2" // mot = bloc, pas de coupure
              >
                {word.split("").map((char, cIndex) => {
                  globalIndex += 1;

                  const distance = globalIndex - cursor;
                  const isPast = distance < 0;

                  const opacity = isPast
                    ? 1
                    : Math.max(0.1, 1 - distance / 6);

                  const blur = isPast ? 0 : Math.min(10, distance * 2);

                  const brightness = isPast
                    ? 1
                    : 0.6; // léger assombrissement comme sur le site

                  return (
                    <span
                      key={cIndex}
                      className="char inline-block will-change-[filter,transform,opacity]"
                      style={{
                        opacity,
                        filter: `blur(${blur}px) brightness(${brightness})`,
                        transition:
                          "opacity 0.12s linear, filter 0.12s linear",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ));
          })()}
        </h1>
      </div>
    </section>
  );
}
