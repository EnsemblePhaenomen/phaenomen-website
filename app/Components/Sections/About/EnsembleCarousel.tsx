"use client";

import { useRef, useState } from "react";
import data from "@/app/data";
import Image from "next/image";

type CarouselPhoto = {
  name: string;
  src: string;
  alt: string;
};

const musicianPhotos: CarouselPhoto[] = data.musiciens
  .filter((musicien) => Boolean(musicien.portrait))
  .map((musicien) => ({
    name: `${musicien.prénom} ${musicien.nom}`.trim(),
    src: musicien.portrait!.src,
    alt: musicien.portrait!.alt,
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
  if (!musicianPhotos.length) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<CarouselPhoto | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

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

    // 2️⃣ Sinon, on avance d’une carte (largeur carte + gap)
    const style = window.getComputedStyle(track);
    const gap =
      parseFloat(style.columnGap || "0") ||
      parseFloat(style.gap || "0") ||
      0;

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
      parseFloat(style.columnGap || "0") ||
      parseFloat(style.gap || "0") ||
      0;

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
          <div className="flex w-max gap-4" aria-live="off">
            {musicianPhotos.map((photo, index) => (
              <figure
                key={`${photo.src}-${index}`}
                className="relative aspect-[2/3] w-40 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm sm:w-48 md:w-56 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 224px"
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-3 pb-3 pt-12 text-sm font-semibold tracking-tight text-white">
                  {photo.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-xs shadow hover:bg-white"
          aria-label="Previous musician"
        >
          ◀
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-2 py-1 text-xs shadow hover:bg-white"
          aria-label="Next musician"
        >
          ▶
        </button>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal} // clic sur le fond → close
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()} // empêche la fermeture si on clique dans la modale
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight">
                {selectedPhoto.name}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Contenu de la modale (pour l’instant : juste le nom) */}
            <p className="text-sm text-neutral-700">
              {selectedPhoto.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
