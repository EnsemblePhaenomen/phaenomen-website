import Image from "next/image";
import { HeroSlide } from "@/app/types/heroConfig";
import DirectorInfo from "../DirectorInfo";
import HeroCTA from "../HeroCTA";

type OverlayProps = {
  slide: HeroSlide;
};

export default function Overlay({ slide }: OverlayProps) {

  // Layout spécial pour le premier slide avec logo
  if (slide.layout === "hero-with-logo") {
    return (
      <div className="absolute inset-0 z-10">
        <div
          className="
          absolute inset-0 grid h-full gap-0
          grid-cols-2 grid-rows-[repeat(12,minmax(0,1fr))]
          sm:grid-cols-6 sm:grid-rows-[repeat(8,minmax(0,1fr))] sm:place-content-start sm:p-6
          md:grid-cols-12 md:grid-rows-12 md:p-8
        "
        >
          {/* Titre "ensemble" */}
          <div
            className="place-self-center col-span-2 row-start-5 flex items-end justify-end
            sm:col-span-2 sm:col-start-4 sm:row-start-4
            md:col-start-7 md:col-span-3 md:row-start-4 md:row-span-2
            lg:row-span-auto lg:col-span-auto lg:col-start-7 lg:w-full"
          >
            <h2 className="hero-title pb-2 md:pb-5 md:mb-10 text-white">
              {slide.headline}
            </h2>
          </div>

          {/* Logo */}
          {slide.logo && (
            <div
              className="
              col-span-2 row-start-6 flex items-end justify-center
              sm:col-span-4 sm:col-start-2 sm:row-start-4
              md:col-start-5 md:col-span-5 md:row-start-5 md:row-span-4 md:justify-end
              lg:h-fit"
            >
              <Image
                src={slide.logo.src}
                alt={slide.logo.alt}
                width={slide.logo.width || 800}
                height={slide.logo.height || 400}
                sizes="(max-width: 639px) 75vw, (max-width: 1080px) 55vw, 40vw"
                className="block w-auto h-auto max-w-[90vw] sm:max-w-[55vw] md:max-w-[40vw]"
                style={{ objectFit: "contain" }}
                priority={slide.priority}
              />
            </div>
          )}

          {/* Container Sous-titre + CTA */}
          <div
            className="col-span-2 row-start-8 row-span-3 flex flex-col h-fit w-fit place-self-center
            sm:col-span-3 sm:col-start-3 sm:row-start-6 sm:row-span-2 sm:flex-row sm:items-start sm:justify-between
            md:col-start-7 md:col-span-3 md:row-start-8 md:row-span-2 md:flex-row md:items-start md:justify-between
            lg:col-start-7 lg:row-start-8 lg:col-span-3 lg:flex-col lg:w-full lg:items-start"
          >
            {/* Infos directeur */}
            {slide.director && (
              <DirectorInfo
                name={slide.director.name}
                role={slide.director.role}
              />
            )}

            {/* CTA avec flèche animée */}
            {slide.cta && (
              <div className="flex justify-start pointer-events-auto">
                <HeroCTA
                  href={slide.cta.href}
                  label={slide.cta.label}
                  targetId={slide.cta.targetId}
                  ariaLabel={slide.cta.ariaLabel}
                />
              </div>
            )}
          </div>
        </div>
        {/* Bande supérieure du bas de page */}
        <div
          className="absolute inset-x-0 bottom-20 border-t border-white pointer-events-none"
          aria-hidden
        />
      </div>
    );
  }

  // Layout par défaut pour les autres slides
  return (
    <div className="absolute inset-0 z-10 ">
      {/* Grille responsive */}
      <div
        className="
        h-full grid gap-0 p-6
        grid-cols-2 grid-rows-[repeat(12,minmax(0,1fr))]
        sm:grid-cols-6 sm:grid-rows-[repeat(8,minmax(0,1fr))] sm:p-6
        md:grid-cols-12 md:grid-rows-12 md:p-8
      "
      >
        {/* Titre principal */}
        <div
          className="
          col-span-2 row-start-5 flex items-end justify-center
          sm:col-span-4 sm:col-start-2 sm:row-start-3 sm:row-span-2
          md:col-start-3 md:col-span-8 md:row-start-4 md:row-span-2 md:justify-start
          lg:col-start-2 lg:col-span-6
          xl:col-start-6 xl:col-span-6 xl:row-start-5
        "
        >
          <h1
            className="
            text-white text-4xl font-bold leading-[0.95] m-0
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
          >
            {slide.headline}
          </h1>
        </div>

        {/* Sous-titre */}
        {slide.subheadline && (
          <div
            className="
            col-span-2 row-start-6 flex items-start justify-center
            sm:col-span-4 sm:col-start-2 sm:row-start-5
            md:col-start-3 md:col-span-6 md:row-start-6 md:justify-start
            lg:col-start-2 lg:col-span-5
            xl:col-start-6 xl:col-span-6 xl:row-start-7
          "
          >
            <p
              className="
              text-white/90 text-lg leading-[1.2] m-0
              sm:text-xl
              md:text-2xl
            "
            >
              {slide.subheadline}
            </p>
          </div>
        )}

        {/* CTA avec flèche animée pour tous les slides */}
        {slide.cta && (
          <div
            className="
            col-span-2 row-start-8 flex items-start justify-center pointer-events-auto
            sm:col-span-2 sm:col-start-2 sm:row-start-6
            md:col-start-3 md:col-span-3 md:row-start-8 md:justify-start
            lg:col-start-2
            xl:col-start-6 xl:row-start-8
          "
          >
            <HeroCTA
              href={slide.cta.href}
              label={slide.cta.label}
              targetId={slide.cta.targetId}
              ariaLabel={slide.cta.ariaLabel}
            />
          </div>
        )}
      </div>
      {/* Bande supérieure du bas de page */}
      <div
        className="absolute inset-x-0 bottom-17 border-t border-white pointer-events-none"
        aria-hidden
      />
    </div>
  );
}
