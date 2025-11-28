"use client";

import { useEffect, useState } from "react";
import type { GalleryImages } from "@/app/types/galleryConfig";


const galleryColumns: GalleryImages[][] = [
  [
    {
      src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "gallery-photo",
    },
    {
      src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      alt: "gallery-photo",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "gallery-photo",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "gallery-photo",
    },
    {
      src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "gallery-photo",
    },
    {
      src: "https://docs.material-tailwind.com/img/team-3.jpg",
      alt: "gallery-photo",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "gallery-photo",
    },
    {
      src: "https://docs.material-tailwind.com/img/team-3.jpg",
      alt: "gallery-photo",
    },
    {
      src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "gallery-photo",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "gallery-photo",
    },
    {
      src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      alt: "gallery-photo",
    },
  ],
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImages | null>(null);

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
        {galleryColumns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="grid gap-4">
            {column.map((image, imageIndex) => (
              <button
                key={`${image.src}-${imageIndex}`}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative block overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:cursor-pointer"
              >
                <img
                  className="h-auto w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  src={image.src}
                  alt={image.alt}
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
              ✕
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="h-[60vh] w-full bg-neutral-950 object-contain"
            />
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
