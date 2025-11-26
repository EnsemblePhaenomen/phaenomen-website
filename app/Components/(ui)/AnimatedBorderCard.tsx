"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  animationDuration?: number;
  delay?: number;
}

/**
 * AnimatedBorderCard Component
 * 
 * A reusable component that draws its border when it enters the viewport.
 * The animation plays only once and uses 4 absolutely positioned lines
 * that animate in sequence: top → right → bottom → left.
 * 
 * @param children - Content to be wrapped inside the card
 * @param className - Additional CSS classes for the container
 * @param borderColor - Color of the border (default: "black")
 * @param animationDuration - Duration of each border line animation in seconds (default: 0.15)
 * @param delay - Delay before animation starts after entering viewport (default: 0)
 */
export default function AnimatedBorderCard({
  children,
  className = "",
  borderColor = "black",
  animationDuration = 0.15,
  delay = 0,
}: AnimatedBorderCardProps) {
  // Create a ref to track the element
  const ref = useRef(null);
  
  /**
   * useInView hook detects when the element enters the viewport
   * once: true ensures the animation only plays once
   * amount: 0.2 means trigger when 20% of the element is visible
   */
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Calculate staggered delays for each border line
  const topDelay = delay;
  const rightDelay = delay + animationDuration;
  const bottomDelay = delay + animationDuration * 2;
  const leftDelay = delay + animationDuration * 3;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Top border - animates from left to right */}
      {/* <motion.div
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ backgroundColor: borderColor }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: animationDuration,
          delay: topDelay,
          ease: "easeOut",
        }}
      /> */}

      {/* Right border - animates from top to bottom */}
      {/* <motion.div
        className="absolute top-0 right-0 bottom-0 w-px origin-top"
        style={{ backgroundColor: borderColor }}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{
          duration: animationDuration,
          delay: rightDelay,
          ease: "easeOut",
        }}
      /> */}

      {/* Bottom border - animates from right to left */}
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

      {/* Left border - animates from bottom to top */}
      {/* <motion.div
        className="absolute top-0 left-0 bottom-0 w-px origin-bottom"
        style={{ backgroundColor: borderColor }}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{
          duration: animationDuration,
          delay: leftDelay,
          ease: "easeOut",
        }}
      /> */}
    </div>
  );
}
