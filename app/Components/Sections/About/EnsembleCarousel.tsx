"use client";

import data from "@/app/data";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
  console.log(musicianPhotos)

export default function EnsembleCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [selectedArtist, setSelectedArtist] = useState<CarouselPhoto | null>(
    null
  );

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setSlidesPerView(5);
      } else if (width >= 1280) {
        setSlidesPerView(4);
      } else if (width >= 1024) {
        setSlidesPerView(3);
      } else if (width >= 768) {
        setSlidesPerView(2.5);
      } else if (width >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1.5);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    setStartIndex((prev) =>
      Math.min(prev, Math.max(musicianPhotos.length - slidesPerView, 0))
    );
  }, [slidesPerView]);

  const totalImages = musicianPhotos.length;
  const maxIndex = Math.max(totalImages - Math.ceil(slidesPerView), 0);
  const canSlide = totalImages > slidesPerView;

  const goToPrevious = () => {
    if (!canSlide) return;
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    if (!canSlide) return;
    setStartIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const trackOffset = (100 / slidesPerView) * startIndex;
  const cardBasis = `${100 / slidesPerView}%`;

  return (
    <div className="relative flex w-full flex-col gap-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${trackOffset}%)`,
            width: `${(totalImages / slidesPerView) * 100}%`,
          }}
        >
          {musicianPhotos.map((photo) => (
            <div
              key={photo.src}
              className="px-1 sm:px-2"
              style={{ flex: `0 0 ${cardBasis}` }}
            >
              <button
                type="button"
                className="group relative block aspect-[2/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900/30"
                onClick={() => setSelectedArtist(photo)}
                aria-label={`Voir la fiche de ${photo.name}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <p className="pointer-events-none absolute inset-x-0 bottom-2 px-2 text-left text-sm font-semibold tracking-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {photo.name}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 text-xs uppercase tracking-wide sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={goToPrevious}
          disabled={!canSlide}
          className="w-full rounded-full border border-neutral-400 px-4 py-3 font-semibold transition-colors hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:flex-1"
          aria-label="Photos précédentes"
        >
          ← Précédent
        </button>

        <button
          type="button"
          onClick={goToNext}
          disabled={!canSlide}
          className="w-full rounded-full border border-neutral-400 px-4 py-3 font-semibold transition-colors hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:flex-1"
          aria-label="Photos suivantes"
        >
          Suivant →
        </button>
      </div>

      {selectedArtist && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 sm:p-6">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl sm:max-w-md sm:p-8">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 transition hover:bg-neutral-900 hover:text-white sm:px-4 sm:py-1.5 sm:text-sm"
              onClick={() => setSelectedArtist(null)}
              aria-label="Fermer la modale"
            >
              X
            </button>
            <h4 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {selectedArtist.name}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
