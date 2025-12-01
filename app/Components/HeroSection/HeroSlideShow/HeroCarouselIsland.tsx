"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { HeroSlide, HeroConfig } from "@/app/types/heroConfig";
import Slide from "./Slide";
import CarouselControls from "../../(ui)/CarouselControls";

type HeroCarouselIslandProps = {
  slides: HeroSlide[];
  config: HeroConfig;
};

export default function HeroCarouselIsland({
  slides,
  config,
}: HeroCarouselIslandProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // refs pour swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Détection prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setHasReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setHasReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Page Visibility API
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Timer autoplay
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    const shouldPlay =
      config.autoplay &&
      !isHovering &&
      !isTabHidden &&
      !hasReducedMotion &&
      slides.length > 1;

    if (shouldPlay) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, config.intervalMs || 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [
    config.autoplay,
    isHovering,
    isTabHidden,
    hasReducedMotion,
    goToNext,
    config.intervalMs,
    slides.length,
  ]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  // Pause on focus
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      if (containerRef.current?.contains(e.target as Node)) {
        setIsHovering(true);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      if (!containerRef.current?.contains(e.relatedTarget as Node)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  // SWIPE HANDLERS
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const deltaX = touchStartX.current - touchEndX.current;
    const SWIPE_THRESHOLD = 50;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (slides.length === 0) return null;

  return (
    <section
      id="hero-section"
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero"
      className="relative w-full min-h-[100svh] overflow-hidden group/carousel"
      onMouseEnter={() => config.pauseOnHover && setIsHovering(true)}
      onMouseLeave={() => config.pauseOnHover && setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          slide={slide}
          isActive={index === currentIndex}
          slideIndex={index}
          currentIndex={currentIndex}
          transitionMs={hasReducedMotion ? 0 : config.transitionMs || 600}
        />
      ))}

      {/* Controls */}
      {config.showControls && (
        <CarouselControls
          totalSlides={slides.length}
          currentIndex={currentIndex}
          showDots={config.showDots}
          onPrev={goToPrev}
          onNext={goToNext}
          onGoToSlide={goToSlide}
          variant="overlay"
          theme="dark"
        />
      )}
    </section>
  );
}
