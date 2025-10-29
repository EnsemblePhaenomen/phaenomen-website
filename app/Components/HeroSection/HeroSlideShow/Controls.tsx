import { HeroSlide } from "@/app/types/heroConfig";

type ControlsProps = {
  slides: HeroSlide[];
  currentIndex: number;
  showDots?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
};

export default function Controls({
  slides,
  currentIndex,
  showDots = true,
  onPrev,
  onNext,
  onGoToSlide,
}: ControlsProps) {
  if (slides.length <= 1) return null;

  return (
    <>
      {/* Boutons Prev/Next */}
      <div
        className="absolute inset-y-0 left-0 right-0 flex items-center justify-between 
 z-20 pointer-events-none"
      >
        {/* Bouton Précédent */}
        <button
          onClick={onPrev}
          aria-label="Slide précédent"
          className="
            cursor-pointer
            ml-4 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/20
            text-white hover:bg-black/40 hover:border-white/40
            focus:outline-none focus:ring-2 focus:ring-white/50
            transition-all duration-200 pointer-events-auto
            opacity-0 group-hover/carousel:opacity-100 md:opacity-100
          "
        >
          <svg
            className="w-6 h-6"
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

        {/* Bouton Suivant */}
        <button
          onClick={onNext}
          aria-label="Slide suivant"
          className="
            cursor-pointer
            mr-4 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-white/20
            text-white hover:bg-black/40 hover:border-white/40
            focus:outline-none focus:ring-2 focus:ring-white/50
            transition-all duration-200 pointer-events-auto
            opacity-0 group-hover/carousel:opacity-100 md:opacity-100
          "
        >
          <svg
            className="w-6 h-6"
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

      {/* Contrôles du bas */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center z-20 pointer-events-none">
        {/* Dots de navigation */}
        {showDots && (
          <div
            className="flex space-x-2 pointer-events-auto"
            role="tablist"
            aria-label="Navigation des slides"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => onGoToSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
                role="tab"
                className={`
                  cursor-pointer
                  w-3 h-3 rounded-full transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent
                  ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
