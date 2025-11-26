type CarouselControlsProps = {
  totalSlides: number;
  currentIndex: number;
  showDots?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
};

export default function CarouselControls({
  totalSlides,
  currentIndex,
  showDots = true,
  onPrev,
  onNext,
  onGoToSlide,
}: CarouselControlsProps) {
  if (totalSlides <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-between gap-4 md:gap-8 ">
      {/* Bouton Précédent */}
      <button
        onClick={onPrev}
        aria-label="Musicien précédent"
        className="
          cursor-pointer
          p-2 rounded-full bg-black/10 backdrop-blur-sm border border-black/20
          text-black hover:bg-black/20 hover:border-black/40
          focus:outline-none focus:ring-2 focus:ring-black/50
          transition-all duration-200
        "
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Dots de navigation */}
      {showDots && (
        <div
          className="flex space-x-2"
          role="tablist"
          aria-label="Navigation des musiciens"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              aria-label={`Aller au musicien ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
              role="tab"
              className={`
                cursor-pointer
                w-2.5 h-2.5 rounded-full transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2
                ${
                  index === currentIndex
                    ? "bg-black scale-125"
                    : "bg-black/30 hover:bg-black/50"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* Bouton Suivant */}
      <button
        onClick={onNext}
        aria-label="Musicien suivant"
        className="
          cursor-pointer
          p-2 rounded-full bg-black/10 backdrop-blur-sm border border-black/20
          text-black hover:bg-black/20 hover:border-black/40
          focus:outline-none focus:ring-2 focus:ring-black/50
          transition-all duration-200
        "
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
