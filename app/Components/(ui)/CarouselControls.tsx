type CarouselControlsProps = {
  totalSlides: number;
  currentIndex: number;
  showDots?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  variant?: "overlay" | "bottom";
  theme?: "light" | "dark";
};

/**
 * Composant de contrôles de carousel réutilisable
 * 
 * @param variant - "overlay" pour superposer les contrôles (Hero), "bottom" pour les placer en bas (Ensemble)
 * @param theme - "light" pour fond clair (boutons noirs), "dark" pour fond sombre (boutons blancs)
 */
export default function CarouselControls({
  totalSlides,
  currentIndex,
  showDots = true,
  onPrev,
  onNext,
  onGoToSlide,
  variant = "bottom",
  theme = "light",
}: CarouselControlsProps) {
  if (totalSlides <= 1) return null;

  // Styles conditionnels selon le thème
  const buttonStyles = theme === "dark" 
    ? "bg-black/20 border-white/20 text-white hover:bg-black/40 hover:border-white/40 focus:ring-white/50"
    : "bg-black/10 border-black/20 text-black hover:bg-black/20 hover:border-black/40 focus:ring-black/50";

  const dotStyles = theme === "dark"
    ? "bg-white/40 hover:bg-white/60 data-[active=true]:bg-white"
    : "bg-black/30 hover:bg-black/50 data-[active=true]:bg-black";

  // Variante overlay (Hero)
  if (variant === "overlay") {
    return (
      <>
        {/* Boutons Prev/Next superposés */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between  z-20 pointer-events-none">
          {/* Bouton Précédent */}
          <button
            onClick={onPrev}
            aria-label="Précédent"
            className={`
              cursor-pointer ml-4 p-3 rounded-full backdrop-blur-sm border
              focus:outline-none focus:ring-2 transition-all duration-200 pointer-events-auto
              opacity-0 group-hover/carousel:opacity-100 md:opacity-100
              ${buttonStyles}
            `}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Bouton Suivant */}
          <button
            onClick={onNext}
            aria-label="Suivant"
            className={`
              cursor-pointer mr-4 p-3 rounded-full backdrop-blur-sm border
              focus:outline-none focus:ring-2 transition-all duration-200 pointer-events-auto
              opacity-0 group-hover/carousel:opacity-100 md:opacity-100
              ${buttonStyles}
            `}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots en bas */}
        {showDots && (
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="flex space-x-2 pointer-events-auto" role="tablist" aria-label="Navigation">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => onGoToSlide(index)}
                  aria-label={`Aller à ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  role="tab"
                  data-active={index === currentIndex}
                  className={`
                    cursor-pointer w-3 h-3 rounded-full transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
                    ${index === currentIndex ? "scale-125" : ""}
                    ${dotStyles}
                  `}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  // Variante bottom (Ensemble)
  return (
    <div className="mt-6 flex items-center justify-center gap-4 md:gap-8">
      {/* Bouton Précédent */}
      <button
        onClick={onPrev}
        aria-label="Précédent"
        className={`
          cursor-pointer p-2 rounded-full backdrop-blur-sm border
          focus:outline-none focus:ring-2 transition-all duration-200
          ${buttonStyles}
        `}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Dots de navigation */}
      {showDots && (
        <div className="flex space-x-2" role="tablist" aria-label="Navigation">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              aria-label={`Aller à ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
              role="tab"
              data-active={index === currentIndex}
              className={`
                cursor-pointer w-2.5 h-2.5 rounded-full transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${index === currentIndex ? "scale-125" : ""}
                ${dotStyles}
              `}
            />
          ))}
        </div>
      )}

      {/* Bouton Suivant */}
      <button
        onClick={onNext}
        aria-label="Suivant"
        className={`
          cursor-pointer p-2 rounded-full backdrop-blur-sm border
          focus:outline-none focus:ring-2 transition-all duration-200
          ${buttonStyles}
        `}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
