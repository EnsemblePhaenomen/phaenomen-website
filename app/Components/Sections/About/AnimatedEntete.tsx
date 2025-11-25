"use client";

import { useEffect, useRef, useState } from "react";
import Entete from "./Entete";

interface AnimatedEnteteProps {
  className?: string;
}

export default function AnimatedEntete({ className }: AnimatedEnteteProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Délai de 1 seconde avant l'animation
            setTimeout(() => {
              setShouldAnimate(true);
            }, 1000);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`group overflow-hidden ${className}`}
    >
      <div
        className={`transition-all duration-700 ease-out group-hover:bg-[#E42B54] ${
          shouldAnimate
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{
          transition: "transform 0.7s ease-out, opacity 0.7s ease-out, background-color 0.3s ease",
        }}
      >
        <Entete className="w-full h-auto object-contain" />
      </div>
    </div>
  );
}
