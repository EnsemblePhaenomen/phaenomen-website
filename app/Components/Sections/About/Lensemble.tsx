"use client";

import { useState } from "react";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
import EnsembleCarousel from "./EnsembleCarousel";
import type { Musicien } from "@/app/types/dataConfig";

type EnfantProps = {
  data: Musicien[];
};

export default function Lensemble({ data }: EnfantProps) {
  const [openSections, setOpenSections] = useState({
    presentation: true,
    ensemble: true,
    interpretes: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <main className="w-full bg-red-200 text-black">
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top title */}
        <div className="w-full bg-orange-200 flex flex-col">
          <h2 className="section-title">L&apos;ensemble</h2>
          <div className="mt-4 h-px w-full bg-black" />
        </div>

        {/* Main layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-blue-200 pt-4 md:pt-16">
          {/* Left image column */}
          <div className="md:w-1/4">
            <div className="hidden w-full border border-neutral-400 lg:block">
              <div className="aspect-[1/3] w-full bg-rose-200" aria-hidden />
            </div>
          </div>

          {/* Right content column */}
          <div className="md:w-3/4 flex flex-col gap-8 text-sm leading-relaxed">
            {/* Présentation */}
            <section className="pt-4">
              <div
                className="flex items-center gap-2 mb-3 bg-orange-200 group cursor-pointer"
                onClick={() => toggleSection("presentation")}
              >
                <div
                  className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                    openSections.presentation ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="w-10 h-auto md:w-12" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Présentation
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.presentation
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-full bg-violet-400">
                  L&apos;ensemble Phænomen se consacre à la redécouverte de la
                  musique baroque allemande du XVIIIᵉ siècle. Sous la direction
                  de Noé Chapolard, il s&apos;attache tout particulièrement à
                  faire revivre l&apos;œuvre de Gottfried Heinrich Stölzel
                  (1690-1749), un compositeur majeur injustement tombé dans
                  l&apos;oubli, tant des historiens que des musiciens.
                </p>
              </div>
            </section>

            {/* Notre ensemble */}
            <section className="border-t border-black pt-4">
              <div
                className="flex items-center gap-2 mb-3 bg-blue-200 group cursor-pointer"
                onClick={() => toggleSection("ensemble")}
              >
                <div
                  className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                    openSections.ensemble ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="w-10 h-auto md:w-12" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Notre ensemble
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.ensemble
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="max-w-full bg-green-200">
                  <p>
                    À ce jour, le cœur de l&apos;ensemble Phænomen réunit un
                    quatuor à cordes, un trio de continuo et un quatuor vocal.
                    Formés dans les plus grandes institutions européennes
                    dédiées à la musique ancienne — Schola Cantorum de Bâle,
                    ESMUC, CMBV, CNSMD de Lyon —, nos musiciennes et musiciens
                    collaborent régulièrement avec des ensembles de renom tels
                    que la Capella Reial de Catalunya, le Bach Collegium Japan
                    ou l&apos;Ensemble Correspondances.
                  </p>
                  <br />
                  <p>
                    Spécialistes de la pratique historiquement informée, du jeu
                    sur instruments d&apos;époque et de l&apos;interprétation du
                    répertoire baroque, ils comptent parmi les artistes les plus
                    prometteurs de la scène française et européenne, distingués
                    par de nombreux prix internationaux, enregistrements
                    discographiques et récitals en solistes.
                  </p>
                </div>
              </div>
            </section>

            {/* Nos interprètes */}
            <section className="border-t border-black pt-4">
              <div
                className="flex items-center gap-2 mb-3 bg-orange-200 group cursor-pointer"
                onClick={() => toggleSection("interpretes")}
              >
                <div
                  className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                    openSections.interpretes ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="w-10 h-auto md:w-12" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Nos interprètes
                </h2>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.interpretes
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <p>Nom Prénom</p>
                    <p>Nom Prénom</p>
                    <p>Nom Prénom</p>
                  </div>
                  <div className="space-y-1">
                    <p>Nom Prénom</p>
                    <p>Nom Prénom</p>
                    <p>Nom Prénom</p>
                  </div>
                  <div className="space-y-1">
                    <p>Nom Prénom</p>
                    <p>Nom Prénom</p>
                    <p>Nom Prénom</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Carousel galerie */}
            <section className="border-t border-black pt-8">
              <h3 className="mb-6 text-2xl font-semibold tracking-tight">
                Galerie de l&apos;ensemble
              </h3>
              <EnsembleCarousel />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
