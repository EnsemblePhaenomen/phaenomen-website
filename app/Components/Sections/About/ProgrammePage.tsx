"use client";

import { useState } from "react";
import type { Programme, Work } from "@/app/types/programmeConfig";
import Image from "next/image";
import Link from "next/link";

interface ProgrammePageProps {
  programmes: Programme[];
}

export default function ProgrammePage({ programmes }: ProgrammePageProps) {
  const [hoveredWork, setHoveredWork] = useState<Work | null>(null);

  return (
    <div className="relative w-full bg-transparent">
      {/* === IMAGE CENTRÉE EN BACKGROUND === */}
{hoveredWork?.imageSrc && (
  <div
    className="
      pointer-events-none
      fixed inset-0
      flex items-center justify-center
      z-0
    "
  >
    <div
      className="
        relative
        w-64 h-64 md:w-150 md:h-130
        rounded-full overflow-hidden
        opacity-80
        translate-x-10 md:translate-x-100
      "
    >
      {/* Image floue + désaturée */}
      <Image
        src={hoveredWork.imageSrc}
        alt={hoveredWork.imageAlt || ""}
        fill
        className="object-cover  saturate-1"
      />

      {/* Halo clair sur les bords pour les fondre avec le background */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle,transparent_40%,#f4f4f4_100%)]
        "
      />
    </div>
  </div>
)}

      {/* === CONTENU AU-DESSUS DE L’IMAGE === */}
      {/* Pas de padding horizontal ici, on laisse le parent (ProjetStoltzel) gérer */}
      <div className="relative z-10 w-full py-4 md:py-8">
        {/* pas de max-w-5xl/mx-auto ici si tu veux qu'il colle au container du card */}
        {programmes.map((programme, index) => (
          <ProgrammeBlock
            key={index}
            programme={programme}
            setHoveredWork={setHoveredWork}
          />
        ))}

        <div className="mt-10 pt-6 border-t border-neutral-300">
          <Link
            href="/contact"
            className="inline-block text-sm md:text-base font-light hover:underline transition-all duration-300"
          >
            Contactez-nous pour programmer ces concerts ou accueillir d&apos;autres programmes →
          </Link>
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
    <div className="mb-10">
      <h1 className="text-xl md:text-2xl font-light mb-6">
        {programme.title}
      </h1>

      {programme.sections.map((section, sIndex) => (
        <div key={sIndex} className="mb-8">
          {section.title && (
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60 mb-3">
              {section.title}
            </h2>
          )}

          {section.works.map((work, wIndex) => (
            <div
              key={wIndex}
              className="
                py-3 border-b border-neutral-300
                cursor-pointer transition-colors
                hover:bg-white/40
              "
              onMouseEnter={() => setHoveredWork(work)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <p className="text-base md:text-lg">{work.title}</p>

              {(work.catalogue || work.liturgicalPeriod) && (
                <p className="text-[0.7rem] md:text-xs opacity-60 mt-1">
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
