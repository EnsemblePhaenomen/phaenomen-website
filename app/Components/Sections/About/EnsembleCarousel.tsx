"use client";

import { useRef, useState } from "react";
import data from "@/app/data";
import Image from "next/image";

type CarouselPhoto = {
  name: string;
  src: string;
  alt: string;
  bio?: string;
  instrument?: string;
};

const musicianPhotos: CarouselPhoto[] = data.musiciens
  .filter((musicien) => Boolean(musicien.portrait))
  .map((musicien) => ({
    name: `${musicien.prénom} ${musicien.nom}`.trim(),
    src: musicien.portrait!.src,
    alt: musicien.portrait!.alt,
    instrument: musicien.instrument ?? "",
    bio: musicien.bio ?? "",
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

  return (
    <>
      <div className="relative w-full py-6">
        {/* Viewport */}
        <div ref={viewportRef} className="overflow-hidden">
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
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-3 pt-12 text-sm font-semibold tracking-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {photo.name}
                  {photo.instrument ? ` — ${photo.instrument}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-xs shadow hover:bg-white hover:cursor-pointer"
          aria-label="Previous musician"
        >
          ◀
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-xs shadow hover:bg-white hover:cursor-pointer"
          aria-label="Next musician"
        >
          ▶
        </button>
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
            className="relative w-full max-w-md min-h-[50vh] overflow-hidden rounded-2xl p-6 text-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="absolute inset-0 h-full w-full object-cover blur-md"
              sizes="(max-width: 768px) 90vw, 50vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

            {/* Contenu */}
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">
                  {selectedPhoto.name}
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full px-2 py-1 text-sm text-neutral-200 hover:bg-white/10 hover:cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Instrument */}
              {selectedPhoto.instrument && (
                <p className="mb-3 text-sm text-neutral-200 italic">
                  {selectedPhoto.instrument}
                </p>
              )}

              {/* Bio */}
              {selectedPhoto.bio ? (
                <p className="text-sm leading-relaxed whitespace-pre-line text-neutral-100">
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
      )}
    </>
  );
}
