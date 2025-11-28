"use client";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
import ProgrammePage from "./ProgrammePage";
import { programmeCantatesVolI } from "@/app/data/programmes/cantates-vol1";
import { programmeInstrumentalVolI } from "@/app/data/programmes/instrumental-vol1";

export default function ProjetStolzel() {
  const [openSections, setOpenSections] = useState({
    sonore: false,
    musicologique: false,
    programme: false,
  });

  const hibouRef = useRef(null);
  const isInView = useInView(hibouRef, { once: true, amount: 0.3 });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <main
      id="projet-stolzel"
      className="relative w-full max-w-full text-black overflow-hidden "
    >
      {/* Image du hibou en arrière-plan - visible uniquement sur écrans > md et quand programme est fermé */}
      <motion.div
        ref={hibouRef}
        initial={{ y: 100, opacity: 0 }}
        animate={
          isInView && !openSections.programme
            ? { y: 0, opacity: 0.2 }
            : { y: 100, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="hidden md:block absolute bottom-10 right-0 w-64 lg:w-80 xl:w-4xl h-auto pointer-events-none z-10"
      >
        <Image
          src="/hibou_bg.png"
          alt="Hibou décoratif"
          width={800}
          height={800}
          className="object-contain"
          priority={false}
        />
      </motion.div>

      <section className="relative z-0 mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-full">
        {/* Top title */}
        <div className="w-full flex flex-col">
          <h2 className="section-title pb-6">Projet Stölzel</h2>
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
            {/* Projet sonore */}
            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section className="pt-4">
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("sonore")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.sonore ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Projet sonore
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.sonore
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-full md:max-w-[80%]">
                    Au cœur de Phænomen, le projet sonore vise à jouer et
                    enregistrer l&apos;intégrale de l&apos;œuvre de Stölzel, en
                    commençant par ses cantates. <br /> <br /> Chaque concert
                    propose la redécouverte d&apos;œuvres inédites, souvent
                    jamais réentendues depuis leur création. Les enregistrements
                    issus des concerts ou des sessions nourrissent une archive
                    sonore accessible à tous. Le projet comprend également de
                    futures actions de médiation, de formation et de rencontres
                    autour de cette musique exceptionnelle.
                  </p>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Projet musicologique */}
            <AnimatedBorderCard
              className="pt-8"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section className="Projet musicologique">
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("musicologique")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.musicologique ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Projet musicologique
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.musicologique
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-full md:max-w-[80%] text-1xl">
                    Le Project Stölzel porte une ambition unique : rassembler,
                    numériser et rendre accessible l&apos;intégralité de l&apos;œuvre de
                    Gottfried Heinrich Stölzel. <br/> Phænomen développe une base de
                    données trilingue ouverte à tous, collabore avec
                    bibliothèques et institutions pour encourager la
                    numérisation des sources, et produit des éditions
                    scientifiques destinées chercheurs, interprètes et
                    passionnés. Ce travail remet en lumière un compositeur
                    essentiel de l&apos;histoire baroque.
                  </p>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Programme */}
            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section className="Programme">
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("programme")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.programme ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Notre programme
                  </h3>
                </div>
                <div
                  className={`overflow-y-auto transition-all duration-500 ease-in-out ${
                    openSections.programme
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ProgrammePage
                    programmes={[
                      programmeCantatesVolI,
                      programmeInstrumentalVolI,
                    ]}
                  />
                </div>
              </section>
            </AnimatedBorderCard>
          </div>
        </div>
      </section>
    </main>
  );
}
