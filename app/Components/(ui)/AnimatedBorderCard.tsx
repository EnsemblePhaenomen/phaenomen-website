"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  animationDuration?: number;
  delay?: number;
  sides?: ("top" | "right" | "bottom" | "left")[]; 
}

export default function AnimatedBorderCard({
  children,
  className = "",
  borderColor = "black",
  animationDuration = 0.15,
  delay = 0,
  sides = ["top", "right", "bottom", "left"], // default: full frame
}: AnimatedBorderCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const topDelay = delay;
  const rightDelay = delay + animationDuration;
  const bottomDelay = delay + animationDuration * 2;
  const leftDelay = delay + animationDuration * 3;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>

      {/* TOP */}
      {sides.includes("top") && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-px origin-right"
          style={{ backgroundColor: borderColor }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: animationDuration,
            delay: topDelay,
            ease: "easeOut",
          }}
        />
      )}

      {/* RIGHT */}
      {sides.includes("right") && (
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-px origin-top"
          style={{ backgroundColor: borderColor }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: animationDuration,
            delay: rightDelay,
            ease: "easeOut",
          }}
        />
      )}

      {/* BOTTOM */}
      {sides.includes("bottom") && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ backgroundColor: borderColor }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: animationDuration,
            delay: bottomDelay,
            ease: "easeOut",
          }}
        />
      )}

      {/* LEFT */}
      {sides.includes("left") && (
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-px origin-bottom"
          style={{ backgroundColor: borderColor }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: animationDuration,
            delay: leftDelay,
            ease: "easeOut",
          }}
        />
      )}
    </div>
  );
}
