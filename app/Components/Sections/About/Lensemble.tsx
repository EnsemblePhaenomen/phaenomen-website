"use client";

import { useState } from "react";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
import EnsembleCarousel from "./EnsembleCarousel";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import type { Musicien } from "@/app/types/musiciensConfig";

type EnfantProps = {
  data: Musicien[];
};

export default function Lensemble({ data: musiciens }: EnfantProps) {
  const [openSections, setOpenSections] = useState({
    presentation: false,
    ensemble: false,
    interpretes: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <main className="w-full max-w-full text-black">
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-full">
        {/* Top title */}
        <div className="w-full flex flex-col">
          <h2 className="section-title pb-6">L&apos;ensemble</h2>
          <AnimatedBorderCard
            className=""
            sides={["top"]}
            animationDuration={0.3}
            delay={0.2}
          >
            <div className="w-full" />
          </AnimatedBorderCard>
        </div>

        {/* Main layout */}
        <div className="flex flex-col gap-8 pt-4 md:pt-16">
          {/* Content column */}
          <div className="flex flex-col gap-8 text-sm leading-relaxed">
            {/* Présentation */}
            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section className="Présentation">
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("presentation")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.presentation ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Présentation
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.presentation
                      ? "max-h-[500px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-full md:max-w-[80%]">
                    L&apos;ensemble Phænomen se consacre à la redécouverte de la
                    musique baroque allemande du XVIIIᵉ siècle. Sous la
                    direction de Noé Chapolard, il s&apos;attache tout
                    particulièrement à faire revivre l&apos;œuvre de Gottfried
                    Heinrich Stölzel (1690-1749), un compositeur majeur
                    injustement tombé dans l&apos;oubli, tant des historiens que
                    des musiciens. <br/> <br/> Phænomen rassemble un noyau de musiciens
                    issus des grands conservatoires européens (Schola Cantorum
                    de Bâle, CNSMD de Lyon, CMBV, ESMUC…) et actifs au sein
                    d&apos;ensembles internationaux de renom. Son effectif flexible —
                    quatuor à cordes, continuo, quatuor vocal et artistes
                    invités — permet d&apos;explorer un large répertoire baroque avec
                    des instruments d&apos;époque et une approche historiquement
                    informée. Porteur d&apos;une identité européenne, diverse et
                    inclusive, Phænomen cherche à créer des expériences
                    musicales fortes, sensibles et profondément ancrées dans
                    l&apos;art vivant.
                  </p>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Notre ensemble */}
            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section>
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("ensemble")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.ensemble ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Notre ensemble
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.ensemble
                      ? "max-h-[1000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="max-w-full md:max-w-[80%]">
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
                      Spécialistes de la pratique historiquement informée, du
                      jeu sur instruments d&apos;époque et de
                      l&apos;interprétation du répertoire baroque, ils comptent
                      parmi les artistes les plus prometteurs de la scène
                      française et européenne, distingués par de nombreux prix
                      internationaux, enregistrements discographiques et
                      récitals en solistes.
                    </p>
                  </div>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Nos interprètes */}
            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section>
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("interpretes")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.interpretes ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Nos interprètes
                  </h3>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.interpretes
                      ? "max-h-[1000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm">
                    {musiciens && musiciens.length > 0 ? (
                      musiciens.map((musicien, index) => (
                        <div key={index} className="space-y-1">
                          <p className="font-medium">
                            {musicien.prénom} {musicien.nom}
                          </p>
                          <p className="text-neutral-600">
                            {musicien.instrument}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-neutral-500">
                        Aucun musicien disponible
                      </p>
                    )}
                  </div>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Carousel galerie */}
            <section>
              <EnsembleCarousel />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
