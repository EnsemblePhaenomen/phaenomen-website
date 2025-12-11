"use client";

import { useState } from "react";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
import EnsembleCarousel from "./EnsembleCarousel";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import type { Musicien } from "@/app/types/musiciensConfig";
import LeChef from "./Lechef";
import musiciensData from "@/app/data/musiciens/musiciens";

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
                  className={`transition-all duration-500 ease-in-out ${
                    openSections.presentation
                      ? "max-h-[calc(100vh-200px)] overflow-y-auto opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <p className="max-w-full text-md md:text-2xl md:max-w-[80%]">
                    <span className="font-nova">
                      Phénomène : Ce qui apparaît, ce qui se manifeste aux sens
                      ou à la conscience, tant dans l&apos;ordre physique que
                      dans l&apos;ordre psychique, et qui peut devenir
                      l&apos;objet d&apos;un savoir.
                    </span>
                    <br /> <br /> Phænomen naît sous l&apos;impulsion de son
                    chef Noé Chapolard en 2025, avec pour vocation de se
                    consacrer à la musique baroque allemande. L&apos;ensemble se
                    constitue d&apos;un noyau fixe de musiciens autour duquel
                    gravitent différents artistes invités. Phænomen, graphie
                    ancienne du mot allemand signifiant “phénomène” (Phänomen en
                    allemand moderne), évoque l&apos;aspiration de ses musiciens
                    à explorer la puissance des événements musicaux, des
                    phénomènes sonores, des apparitions auditives qui donnent
                    saveur et émotion à la musique baroque.
                    <br /> <br /> Phænomen est aussi un clin d&apos;œil au grec
                    ancien et au latin, qui ont laissé leurs racines communes de
                    ce mot à presque toutes les langues du continent européen,
                    lui donnant un aspect universel et fédérateur. Pour
                    l&apos;ensemble Phænomen, se rassembler par la musique
                    au-delà des frontières linguistiques et culturelles, et se
                    placer face à des phénomènes, c&apos;est à dire comme
                    témoins d&apos;apparitions ou d&apos;événements rares, est
                    un acte fort pour affirmer que l&apos;art vivant a une place
                    essentielle face aux enjeux d&apos;aujourd&apos;hui. Nos
                    artistes viennent de nombreuses régions d&apos;Europe
                    (France, Suisse, Espagne, Hongrie, Allemagne, Italie) et
                    au-delà (Japon, USA), et nous sommes fiers de promouvoir à
                    la fois l&apos;excellence et la diversité d&apos;expériences
                    artistiques, culturelles et linguistiques. Dans cette même
                    démarche, l&apos;ensemble souhaite s&apos;affirmer fermement
                    dans sa diversité et promeut l&apos;inclusion dans
                    l&apos;élaboration de son environnement de travail.
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
                    L&apos;ensemble et ses membres
                  </h3>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openSections.ensemble
                      ? "max-h-[calc(100vh-200px)] overflow-y-auto opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <div className="max-w-full md:max-w-[80%]">
                    <p className="text-md md:text-2xl ">
                      À ce jour le cœur de l&apos;ensemble Phænomen est
                      constitué d&apos;un quatuor à cordes, d&apos;un trio de
                      continuo, et d&apos;un quatuor vocal. <br /> <br /> Issus
                      des grandes écoles et conservatoires européens de musique
                      ancienne (Schola Cantorum de Bâle, ESMUC (Barcelone), CMBV
                      (Versailles), CNSMD de Lyon), et membres d&apos;ensembles
                      prestigieux établis sur la scène européenne et
                      internationale (Capella Reial de Catalunya, Bach Collegium
                      Japan, Ensemble Correspondances… ), nos musiciennes et
                      musiciens sont spécialistes de la pratique musicale
                      historiquement informée, du jeu sur instruments
                      d&apos;époque, et de l&apos;interprétation du répertoire
                      baroque, et comptent parmi les artistes montants de la
                      scène française et européenne, avec à leur actif :
                      récompenses et concours internationaux, enregistrements de
                      disques et récitals en solistes.
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
                    Les artistes
                  </h3>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openSections.interpretes
                      ? "max-h-[calc(100vh-200px)] overflow-y-auto opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm">
                    {musiciens && musiciens.length > 0 ? (
                      musiciens.map((musicien, index) => (
                        <div
                          key={index}
                          className="space-y-1 text-md md:text-2xl "
                        >
                          <p className="">
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
              <LeChef data={musiciensData.chef} />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
