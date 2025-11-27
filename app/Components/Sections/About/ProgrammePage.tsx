"use client";

import { useState } from "react";
import type { Programme, Work } from "@/app/types/programmeConfig";
import Image from "next/image";

interface ProgrammePageProps {
  programmes: Programme[];
}

export default function ProgrammePage({ programmes }: ProgrammePageProps) {
  const [hoveredWork, setHoveredWork] = useState<Work | null>(null);

  return (
    <div className="relative w-full bg-[#f4f4f4] overflow-hidden">

      {/* === IMAGE CENTRÉE EN BACKGROUND === */}
      {hoveredWork?.imageSrc && (
        <div
          className="
            pointer-events-none
            absolute inset-0
            flex items-center justify-center
            z-0
          "
        >
          <div
            className="
              relative
              w-64 h-64 md:w-150 md:h-96
              rounded-full overflow-hidden
              opacity-30 
              transition-all duration-300
            "
          >
            <Image
              src={hoveredWork.imageSrc}
              alt={hoveredWork.imageAlt || ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* === CONTENU AU-DESSUS DE L’IMAGE === */}
      <div className="relative z-10 w-full px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto text-left">

          {programmes.map((programme, index) => (
            <ProgrammeBlock
              key={index}
              programme={programme}
              setHoveredWork={setHoveredWork}
            />
          ))}

          {/* CTA vers Contact */}
          <div className="mt-16 pt-8 border-t border-neutral-300">
            <a
              href="/pages/contact"
              className="inline-block text-lg md:text-xl font-light hover:underline transition-all duration-300"
            >
              Contactez-nous pour programmer ces concerts ou accueillir d`&apos;autres programmes →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function ProgrammeBlock({
  programme,
  setHoveredWork,
}: {
  programme: Programme;
  setHoveredWork: (w: Work | null) => void;
}) {
  return (
    <div className="mb-16">
      <h1 className="text-2xl md:text-4xl font-light mb-8">
        {programme.title}
      </h1>

      {programme.sections.map((section, sIndex) => (
        <div key={sIndex} className="mb-10">

          {/* Titre de section */}
          {section.title && (
            <h2 className="text-sm md:text-base uppercase tracking-[0.2em] opacity-60 mb-4">
              {section.title}
            </h2>
          )}

          {/* Lignes */}
          {section.works.map((work, wIndex) => (
            <div
              key={wIndex}
              className="
                py-4 border-b border-neutral-300
                cursor-pointer transition-colors
                hover:bg-white/40
              "
              onMouseEnter={() => setHoveredWork(work)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <p className="text-lg md:text-xl">{work.title}</p>

              {(work.catalogue || work.liturgicalPeriod) && (
                <p className="text-xs md:text-sm opacity-60 mt-1">
                  {work.catalogue && <span>{work.catalogue} • </span>}
                  {work.liturgicalPeriod}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}