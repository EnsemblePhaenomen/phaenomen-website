import Image from "next/image";
import { HeroSlide } from "@/app/types/heroConfig";
import DirectorInfo from "../DirectorInfo";
import HeroCTA from "../HeroCTA";

type OverlayProps = {
  slide: HeroSlide;
};

export default function Overlay({ slide }: OverlayProps) {
  // === LAYOUT SPÉCIAL AVEC LOGO (premier slide) ===
  if (slide.layout === "hero-with-logo") {
    return (
      <div className="absolute inset-0 z-10">
        {/* 🌱 MOBILE : tout centré, simple */}
        <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-6 text-center sm:hidden">
          {/* Titre */}
          <h2 className="hero-title text-white ">{slide.headline}</h2>

          {/* Logo */}
          {slide.logo && (
            <Image
              src={slide.logo.src}
              alt={slide.logo.alt}
              width={slide.logo.width || 800}
              height={slide.logo.height || 400}
              sizes="75vw"
              className="block w-auto h-auto max-w-[80vw]"
              style={{ objectFit: "contain" }}
              priority={slide.priority}
            />
          )}

          {/* Sous-titre + CTA / directeur */}
          {(slide.director || slide.cta) && (
            <div className="flex flex-col items-center gap-3">
              {slide.director && (
                <DirectorInfo
                  name={slide.director.name}
                  role={slide.director.role}
                />
              )}
              {slide.cta && (
                <HeroCTA
                  href={slide.cta.href}
                  label={slide.cta.label}
                  targetId={slide.cta.targetId}
                  ariaLabel={slide.cta.ariaLabel}
                />
              )}
            </div>
          )}
        </div>

        {/* DESKTOP+ : grille d’origine */}
        <div
          className="
            hidden sm:grid absolute inset-0 h-full gap-0
            sm:grid-cols-6 sm:grid-rows-[repeat(8,minmax(0,1fr))] sm:p-6
            md:grid-cols-12 md:grid-rows-12 md:p-8
          "
        >
          {/* Titre "ensemble" */}
    <div
  className="
    self-end justify-self-center     
    sm:col-start-2 sm:col-span-4 sm:row-start-3
    md:col-start-7 md:col-span-3 md:row-start-5 md:row-span-2 md:self-end md:justify-self-center
    lg:col-start-7 lg:w-full

    flex justify-center items-end    // centre horizontalement, place le h2 en bas
  "
>
  <h2 className="hero-title pb-2 md:pb-5 md:mb-10 text-white">
    {slide.headline}
  </h2>
</div>


          {/* Logo */}
          {slide.logo && (
            <div
              className="
                sm:col-start-2 sm:col-span-4 sm:row-start-4 flex items-end justify-center
                md:col-start-5 md:col-span-5 md:row-start-6 md:justify-end
                lg:h-fit
              "
            >
              <Image
                src={slide.logo.src}
                alt={slide.logo.alt}
                width={slide.logo.width || 800}
                height={slide.logo.height || 400}
                sizes="(max-width: 1080px) 55vw, 40vw"
                className="block w-auto h-auto sm:max-w-[55vw] md:max-w-[40vw]"
                style={{ objectFit: "contain" }}
                priority={slide.priority}
              />
            </div>
          )}

          {/* Container Sous-titre + CTA / directeur */}
          {(slide.director || slide.cta) && (
            <div
              className="
                sm:col-span-3 sm:col-start-3 sm:row-start-5 sm:row-span-2
                md:col-start-7 md:col-span-4 md:row-start-7 md:row-span-2
                lg:col-start-7 lg:row-start-7 lg:col-span-3 lg:flex-col lg:w-full 
                flex flex-col gap-3 
                
              "
            >
              {slide.director && (
                <DirectorInfo
                  name={slide.director.name}
                  role={slide.director.role}
                />
              )}
              {slide.cta && (
                <div className="pointer-events-auto">
                  <HeroCTA
                    href={slide.cta.href}
                    label={slide.cta.label}
                    targetId={slide.cta.targetId}
                    ariaLabel={slide.cta.ariaLabel}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bande supérieure du bas de page */}
        <div
          className="absolute inset-x-0 bottom-20 border-t border-white pointer-events-none"
          aria-hidden
        />
      </div>
    );
  }

  // === LAYOUT PAR DÉFAUT POUR LES AUTRES SLIDES ===
  return (
    <div className="absolute inset-0 z-10">
      {/* 🌱 MOBILE : tout centré */}
      <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-6 text-center sm:hidden">
        <h1 className="text-white text-4xl font-bold leading-[0.95] m-0">
          {slide.headline}
        </h1>

        {slide.subheadline && (
          <p className="text-white/90 text-2xl leading-[1.2] m-0">
            {slide.subheadline}
          </p>
        )}

        {slide.cta && (
          <HeroCTA
            href={slide.cta.href}
            label={slide.cta.label}
            targetId={slide.cta.targetId}
            ariaLabel={slide.cta.ariaLabel}
          />
        )}
      </div>

      {/* DESKTOP+ : grille */}
      <div
        className="
          hidden sm:grid h-full gap-0 p-6
          sm:grid-cols-6 sm:grid-rows-[repeat(8,minmax(0,1fr))]
          md:grid-cols-12 md:grid-rows-12 md:p-8
        "
      >
        {/* Titre principal */}
        <div
          className="
            sm:col-span-4 sm:col-start-2 sm:row-start-4 sm:row-span-1
            md:col-start-3 md:col-span-8 md:row-start-4 md:row-span-2
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
              sm:col-span-4 sm:col-start-2 sm:row-start-5
              md:col-start-3 md:col-span-6 md:row-start-6
              lg:col-start-2 lg:col-span-5
              xl:col-start-6 xl:col-span-6 xl:row-start-7
            "
          >
            <p
              className="
                text-white font-weight-600 leading-[1.2] m-0 text-2xl
              "
            >
              {slide.subheadline}
            </p>
          </div>
        )}

        {/* CTA */}
        {slide.cta && (
          <div
            className="
              sm:col-span-4 sm:col-start-2 sm:row-start-6
              md:col-start-3 md:col-span-6 md:row-start-8
              md: row-span-3 
              lg:col-start-2
              xl:col-start-6 xl:row-start-8
              pointer-events-auto
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
