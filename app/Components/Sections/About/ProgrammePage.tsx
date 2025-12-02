"use client";

import { useEffect, useMemo, useState } from "react";
import type { Programme, Work } from "@/app/types/programmeConfig";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/app/data/events/events";

interface ProgrammePageProps {
  programmes: Programme[];
}

export default function ProgrammePage({ programmes }: ProgrammePageProps) {
  const [hoveredWork, setHoveredWork] = useState<Work | null>(null);
  const [videoToPlay, setVideoToPlay] = useState<{ id: string; title: string } | null>(null);
  const eventTitles = useMemo(
    () =>
      new Set(
        events
          .map((evt) => evt.title?.trim().toLowerCase())
          .filter(Boolean) as string[]
      ),
    []
  );

  useEffect(() => {
    if (!videoToPlay) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVideoToPlay(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [videoToPlay]);

  return (
    <>
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
      {/* Pas de padding horizontal ici, on laisse le parent (ProjetStolzel) gérer */}
      <div className="relative z-10 w-full py-4 md:py-8">
        {programmes.map((programme, index) => (
          <ProgrammeBlock
            key={index}
            programme={programme}
            setHoveredWork={setHoveredWork}
            isLinkedToAgenda={eventTitles.has(programme.title.trim().toLowerCase())}
            onSelectVideo={setVideoToPlay}
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
    {videoToPlay ? (
      <VideoModal
        videoId={videoToPlay.id}
        title={videoToPlay.title}
        onClose={() => setVideoToPlay(null)}
      />
    ) : null}
  </>
  );
}

function ProgrammeBlock({
  programme,
  setHoveredWork,
  isLinkedToAgenda,
  onSelectVideo,
}: {
  programme: Programme;
  setHoveredWork: (w: Work | null) => void;
  isLinkedToAgenda: boolean;
  onSelectVideo: (video: { id: string; title: string } | null) => void;
}) {
  return (
    <div className="mb-15">
      {isLinkedToAgenda ? (
        <Link
          href="/agenda"
          className="inline-flex items-center gap-2 text-xl md:text-2xl font-light mb-6  decoration-[#E42B54]/60 hover:decoration-[#E42B54]"
        >
          {programme.title}
          <span className="text-[0.7rem] underline underline-offset-4 uppercase tracking-[0.18em] text-[#E42B54]">
            Voir dates
          </span>
        </Link>
      ) : (
        <h2 className="text-xl md:text-2xl font-light mb-6">{programme.title}</h2>
      )}

      {programme.sections.map((section, sIndex) => (
        <div key={sIndex} className="mb-8">
          {section.title && (
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60 mb-3 ">
              {section.title}
            </h2>
          )}

          {section.works.map((work, wIndex) => {
            const hasVideo = Boolean(work.youtubeId);
            return (
              <div
                key={wIndex}
                className={`
                  py-3 border-b border-neutral-300
                  transition-colors
                  ${hasVideo ? "cursor-pointer hover:bg-white/40" : "cursor-default"}
                `}
                onMouseEnter={() => setHoveredWork(work)}
                onMouseLeave={() => setHoveredWork(null)}
                onClick={() =>
                  hasVideo
                    ? onSelectVideo({ id: work.youtubeId!, title: work.title })
                    : null
                }
                onKeyDown={(e) => {
                  if (!hasVideo) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectVideo({ id: work.youtubeId!, title: work.title });
                  }
                }}
                role={hasVideo ? "button" : undefined}
                tabIndex={hasVideo ? 0 : -1}
                aria-label={hasVideo ? `Lire la vidéo ${work.title}` : undefined}
              >
                <p
                  className={`text-base md:text-lg ${
                    hasVideo ? "hover:text-[#E42B54] focus:text-[#E42B54]" : ""
                  }`}
                >
                  {work.title}
                </p>

                {(work.catalogue || work.liturgicalPeriod) && (
                  <p className="text-[0.7rem] md:text-xs opacity-60 mt-1">
                    {work.catalogue && <span>{work.catalogue} • </span>}
                    {work.liturgicalPeriod}
                  </p>
                )}

                {hasVideo ? (
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#E42B54] mt-1">
                    Voir la vidéo
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Lecture vidéo : ${title}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
 
        <div className="w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
