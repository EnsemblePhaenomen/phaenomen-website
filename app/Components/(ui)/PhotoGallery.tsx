"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImages } from "@/app/types/galleryConfig";
import galleryImages from "@/app/data/galleryImage/galleryImage";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImages | null>(
    null
  );

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryImages.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="grid gap-4">
            {column.map((image, imageIndex) => (
              <button
                key={`${image.src}-${imageIndex}`}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative block overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1200}
                  height={image.height ?? 1600}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full rounded-lg object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-900/90 shadow-2xl ring-1 ring-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Fermer la modale"
            >
              X
            </button>

            <div className="relative h-[60vh] w-full bg-neutral-950">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {selectedImage.caption && (
              <div className="px-6 py-4 text-left">
                <p className="text-lg font-semibold text-white">
                  {selectedImage.caption}
                </p>
                <p className="text-sm text-neutral-300">{selectedImage.alt}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


