"use client";

import { useRef, useState } from "react";
import data from "@/app/data";
import musiciensData from "@/app/data/musiciens/musiciens";
import Image from "next/image";
import CarouselControls from "../../(ui)/CarouselControls";

type CarouselPhoto = {
  name: string;
  src: string;
  alt: string;
  bio?: string;
  instrument?: string;
  modalSrc?: string;
  modalAlt?: string;
};

const musicianPhotos: CarouselPhoto[] = musiciensData.musiciens
  .filter((musicien) => Boolean(musicien.portrait))
  .map((musicien) => ({
    name: `${musicien.prénom} ${musicien.nom}`.trim(),
    src: musicien.portrait!.src,
    alt: musicien.portrait!.alt,
    instrument: musicien.instrument ?? "",
    bio: musicien.bio ?? "",
    modalSrc: musicien.modal?.src,
    modalAlt: musicien.modal?.alt,
  }));

function isElementFullyInViewport(
  viewport: HTMLElement,
  element: HTMLElement,
  tolerance = 1
) {
  const viewportRect = viewport.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return (
    elementRect.left >= viewportRect.left - tolerance &&
    elementRect.right <= viewportRect.right + tolerance
  );
}

export default function EnsembleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<CarouselPhoto | null>(
    null
  );
  const viewportRef = useRef<HTMLDivElement | null>(null);

  if (!musicianPhotos.length) return null;

  const goNext = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const track = viewport.firstElementChild as HTMLElement | null;
    if (!track) return;

    const lastCard = track.lastElementChild as HTMLElement | null;
    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!lastCard || !firstCard) return;

    // 1️⃣ Si la dernière carte est ENTIEREMENT visible → retour au début
    if (isElementFullyInViewport(viewport, lastCard)) {
      viewport.scrollTo({ left: 0, behavior: "smooth" });
      setCurrentIndex(0);
      return;
    }

    // 2️⃣ Sinon, on avance d’une carte
    const style = window.getComputedStyle(track);
    const gap =
      parseFloat(style.columnGap || "0") || parseFloat(style.gap || "0") || 0;

    const step = firstCard.offsetWidth + gap;
    const target = viewport.scrollLeft + step;

    viewport.scrollTo({ left: target, behavior: "smooth" });
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const track = viewport.firstElementChild as HTMLElement | null;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const style = window.getComputedStyle(track);
    const gap =
      parseFloat(style.columnGap || "0") || parseFloat(style.gap || "0") || 0;

    const step = firstCard.offsetWidth + gap;
    const target = viewport.scrollLeft - step;

    // Si on dépasse le début → on saute à la fin
    if (target < 0) {
      const maxScroll = track.scrollWidth - viewport.clientWidth;
      viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
      setCurrentIndex(musicianPhotos.length - 1);
      return;
    }

    viewport.scrollTo({ left: target, behavior: "smooth" });
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const closeModal = () => setSelectedPhoto(null);

  const goToSlide = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const track = viewport.firstElementChild as HTMLElement | null;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const style = window.getComputedStyle(track);
    const gap =
      parseFloat(style.columnGap || "0") || parseFloat(style.gap || "0") || 0;

    const step = firstCard.offsetWidth + gap;
    const target = step * index;

    viewport.scrollTo({ left: target, behavior: "smooth" });
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative w-full py-6">
        {/* Viewport - Enable native scroll on mobile for swipe */}
        <div 
          ref={viewportRef} 
          className="overflow-x-auto overflow-y-hidden md:overflow-hidden scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Track */}
          <div
            className="flex w-max gap-4"
            aria-live="off"
            aria-label={`Musicien ${currentIndex + 1} sur ${
              musicianPhotos.length
            }`}
          >
            {musicianPhotos.map((photo, index) => (
              <figure
                key={`${photo.src}-${index}`}
                className="group relative aspect-[2/3] w-40 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm sm:w-48 md:w-56"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 224px"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-3 pt-12 text-sm font-semibold tracking-tight text-[#E42B54] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {photo.name}
                  {photo.instrument ? ` — ${photo.instrument}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Controls Component - Sides on desktop, bottom on mobile */}
        <CarouselControls
          totalSlides={musicianPhotos.length}
          currentIndex={currentIndex}
          showDots={false}
          onPrev={goPrev}
          onNext={goNext}
          onGoToSlide={goToSlide}
          variant="sides"
          theme="light"
        />
      </div>
      {selectedPhoto && console.log("Selected photo bio:", selectedPhoto.src)}
      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          {/* Modale avec background-image */}
          <div
            className="relative w-full max-w-6xl h-[90vh] overflow-hidden rounded-2xl text-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background image */}
            <Image
              src={selectedPhoto.modalSrc || selectedPhoto.src}
              alt={selectedPhoto.modalAlt || selectedPhoto.alt}
              fill
              className="absolute inset-0 h-full w-full object-cover object-top blur-md"
              sizes="(max-width: 768px) 90vw, 80vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

            {/* Bouton fermer */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full px-3 py-1 text-sm text-neutral-200 hover:bg-white/30 hover:cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Contenu */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 p-8 md:flex-row md:gap-8">
              {/* Photo du musicien */}
              <div className="relative aspect-[2/3] w-48 flex-shrink-0 overflow-hidden rounded-xl border-2 border-white/20 shadow-lg md:w-64">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="h-full w-full object-cover "
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>

              {/* Texte */}
              <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
                {/* Titre */}
                <div>
                  <h2 className="text-4xl font-semibold tracking-tight">
                    {selectedPhoto.name}
                  </h2>
                  {selectedPhoto.instrument && (
                    <p className="mt-1 text-2xl text-neutral-200 ">
                      {selectedPhoto.instrument}
                    </p>
                  )}
                </div>

                {/* Bio */}
                {selectedPhoto.bio ? (
                  <p className="text-lg leading-relaxed whitespace-pre-line text-neutral-100">
                    {selectedPhoto.bio}
                  </p>
                ) : (
                  <p className="text-sm text-neutral-300 italic">
                    Biographie à venir.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
