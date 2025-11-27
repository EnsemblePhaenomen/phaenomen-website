"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const sentence =
"L'ensemble Phænomen est spécialisé dans la musique baroque allemande du XVIIIème siècle et qui se donne pour mission principale de promouvoir et de diffuser la musique de Gottfried Heinrich Stölzel (1690-1749)."
const words = sentence.split(" ");

export default function ScrollLinkedText() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalLetters = words.reduce((acc, w) => acc + w.length, 0);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Sur mobile, révéler plus rapidement
    const revealEnd = isMobile ? 0.4 : 0.5;
    const clamped = Math.min(latest / revealEnd, 1);
    const maxCursor = totalLetters - 1;
    setCursor(clamped * maxCursor);
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#f4f4f4]"
      style={{ height: isMobile ? '100vh' : '150vh' }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-4">
        <h1 className="inline-block relative text-center text-xl sm:text-2xl md:text-4xl font-serif leading-tight max-w-4xl">
          {(() => {
            let globalIndex = -1;
            // Sur mobile, réduire les effets pour de meilleures performances
            const blurMultiplier = isMobile ? 1 : 2;
            const fadeDistance = isMobile ? 4 : 6;

            return words.map((word, wIndex) => (
              <span
                key={wIndex}
                className="word inline-block mr-2"
              >
                {word.split("").map((char, cIndex) => {
                  globalIndex += 1;

                  const distance = globalIndex - cursor;
                  const isPast = distance < 0;

                  const opacity = isPast
                    ? 1
                    : Math.max(0.15, 1 - distance / fadeDistance);

                  const blur = isPast ? 0 : Math.min(8, distance * blurMultiplier);

                  const brightness = isPast ? 1 : 0.6;

                  return (
                    <span
                      key={cIndex}
                      className="char inline-block will-change-[filter,transform,opacity]"
                      style={{
                        opacity,
                        filter: `blur(${blur}px) brightness(${brightness})`,
                        transition: isMobile 
                          ? "opacity 0.15s ease-out, filter 0.15s ease-out"
                          : "opacity 0.12s linear, filter 0.12s linear",
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
