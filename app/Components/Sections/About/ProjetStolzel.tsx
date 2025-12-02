"use client";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
import ProgrammePage from "./ProgrammePage";
import { programmeCantatesVolI } from "@/app/data/programmes/cantates-vol1";
import { programmeInstrumentalVolI } from "@/app/data/programmes/instrumental-vol1";
import ContacterButton from "../../(ui)/Animations/ContacterButton";
import { useAutoCloseOnLeave } from "@/app/hooks/useAutoCloseOnLeave";

export default function ProjetStolzel() {
  const [openSections, setOpenSections] = useState({
    stolzel: false,
    pourquoi: false,
    sonore: false,
    musicologique: false,
    programme: false,
  });

  const hibouRef = useRef(null);
  const isInView = useInView(hibouRef, { once: true, amount: 0.3 });
  const programmeSectionRef = useRef<HTMLElement | null>(null);

  const closeProgrammeSection = useCallback(() => {
    setOpenSections((prev) =>
      prev.programme ? { ...prev, programme: false } : prev
    );
  }, []);

  useAutoCloseOnLeave(
    programmeSectionRef,
    openSections.programme,
    closeProgrammeSection,
    { amount: 0 }
  );

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
            {/* Gottfried Heinrich Stölzel (1690-1749) */}

            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section className="pt-4">
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("stolzel")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.stolzel ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Gottfried Heinrich Stölzel (1690-1749){" "}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.stolzel
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-full text-md md:text-2xl md:max-w-[80%]">
                    Gottfried Heinrich Stölzel est né le 13 janvier 1690 à
                    Grünstädel, en Saxe. En 1707, il commence à étudier la
                    musique à Leipzig avec Melchior Hoffmann (successeur de
                    Telemann à la Neukirche et au Collegium Musicum), époque à
                    laquelle on retrouve les traces de ses premières
                    compositions. Sa carrière commence par une percée dans
                    l&apos;écriture d&apos;œuvres lyriques (<em>Narcissus</em>
                    Narcissus, <em>Valeria</em>,{" "}
                    <em>Rosen und Dornen der Liebe</em>, <em>Artemisia</em>,{" "}
                    <em>Orion</em>), toutes considérées comme perdues à ce jour.{" "}
                    <br /> De 1713 à 1715, Stölzel voyage d&apos;abord en Italie
                    où il se forme notamment auprès de Vivaldi, Heinichen et
                    Antonio Scarlatti, avant de s&apos;établir à Prague (où il
                    compose encore principalement des opéras), et reste
                    jusqu&apos;à sa nomination au poste de Kapellmeister à
                    Bayreuth puis à Gera. En 1719, il est nommé Kapellmeister à
                    la cour de Saxe-Gotha-Altenburg, où il travaille
                    jusqu&apos;à la fin de sa vie en 1749. <br /> <br />
                    En parallèle de son poste à Gotha, Stölzel était chargé de
                    fournir la musique pour le culte de 1730 à 1740 à la cour de
                    Sondershausen, dont quatre cycles de cantates. Il écrit par
                    ailleurs plusieurs ouvrages théoriques dont deux sont
                    publiés : un sur le canon, et un sur le récitatif. Selon
                    différentes sources, parmi les douze cycles et huit doubles
                    cycles de cantates (soit plus d&apos;un millier au total),
                    605 cantates seraient partiellement ou totalement
                    disponibles. Certaines sont conservées à la Staatsbibliothek
                    de Berlin, numérisées et accessibles en ligne, d&apos;autres
                    sont au château de Sondershausen, retrouvées en 1870,
                    d&apos;autres enfin, dans d&apos;autres bibliothèques
                    allemandes, ainsi qu&apos;à Vienne, Gdansk (Pologne), ou
                    encore Uppsala (Suède). En plus des cantates sacrées et
                    profanes, une partie de ses oratorios, passions et œuvres
                    concertantes (concertos de soliste, sinfonias, pièces
                    d&apos;orgues) sont conservées dans les divers manuscrits
                    retrouvés et inventoriés à ce jour. <br /> <br />
                    Comme de nombreux compositeurs de son temps, son nom a vite
                    été oublié au profit de celui de ceux dont la visibilité a
                    été renforcée par leurs descendants ou par le système de
                    publication et de performance (Bach, Händel ou Telemann par
                    exemple). De son vivant, Stölzel jouit cependant de la
                    réputation d&apos;être un excellent compositeur, apprécié et
                    considéré par ses contemporains. Les éditions modernes de
                    ses oeuvres, les performances des ensembles qui ont commencé
                    à jouer sa musique, ainsi que nos premières expériences avec
                    Phænomen montrent que sa réputation était justifiée : sa
                    musique est d&apos;une facture harmonique et contrapuntique
                    excellente, mêlant aux traits italiens de l&apos;art lyrique
                    les éléments germaniques et luthériens du goût de
                    l&apos;époque. L&apos;œuvre laisse l&apos;espace aux
                    interprètes d&apos;aller au-delà de la théâtralité des
                    affects pour incarner une pluralité d&apos;émotions
                    complexes. Son écriture préfigure les préoccupations de
                    l&apos;Empfindsamkeit en germe au milieu du XVIIIème siècle
                    en Allemagne.
                  </p>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Pourquoi jouer Stolzel ajd? */}
            <AnimatedBorderCard
              className="pt-4"
              sides={["bottom"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <section className="pt-4">
                <div
                  className="flex items-center gap-2 mb-3 group cursor-pointer"
                  onClick={() => toggleSection("pourquoi")}
                >
                  <div
                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      openSections.pourquoi ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <ArrowIcon className="w-10 h-auto md:w-12" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    Pourquoi jouer Stölzel aujourd&apos;hui ?
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.pourquoi
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-full text-md md:text-2xl md:max-w-[80%]">
                    Il s&apos;agit d&apos;une musique sublime, profonde et
                    touchante en soi. L&apos;entendre, la travailler et la jouer
                    bénéficie à tous, de l&apos;historien à l&apos;élève de
                    conservatoire, en passant par le public fidèle de la musique
                    baroque. <br />
                    Historiquement, cette musique a une forte signification -
                    elle ajoute une pierre fondamentale à la compréhension non
                    seulement historique mais aussi sensorielle d&apos;un
                    paysage musical et culturel que l&apos;on connaît
                    principalement à travers Johann Sebastian Bach. Par
                    ailleurs, elle est le témoignage de deux phénomènes
                    historiques qui font écho aux enjeux européens actuels.
                    D&apos;une part, elle soulève la question de la réunion des
                    goûts, c&apos;est-à-dire d&apos;un mélange des cultures
                    européennes à travers les styles musicaux, et donc la
                    construction d&apos;une identité aux frontières poreuses par
                    le mélange des influences. D&apos;autre part, elle interroge
                    la quête d&apos;innovation et de création par les voyages et
                    les rencontres : Stölzel crée son langage propre par ses
                    interactions avec les références de son temps, d&apos;abord
                    à Leipzig, en Italie, puis à Prague, Dresde et Gotha – son
                    oeuvre laisse transparaître sa sensibilité et son ouverture
                    sur le monde. <br /> <br />
                    Par ailleurs, une injustice historique doit être réparée –
                    le hasard de l&apos;histoire a fait que la musique de
                    Stölzel a rapidement été vendue, jetée, perdue. Puis à
                    l&apos;heure du mouvement de redécouverte de la musique
                    ancienne, et du développement de la pratique musicale sur
                    instruments d&apos;époques au milieu du XXème siècle, la RDA
                    a été un terreau inégal pour la redécouverte de l&apos;œuvre
                    d&apos;un maître de chapelle de cour luthérien. <br />{" "}
                    <br /> Musicalement, l&apos;œuvre de Stölzel est à la fois
                    abondante et excellente, et il est difficile d&apos;imaginer
                    qu&apos;une telle musique reste très marginalement explorée.
                    Les pièces que nous avons abordées jusqu&apos;à présent
                    démontrent leur qualité de la facture, mais aussi la
                    profondeur et la force qui émanent de ce langage. En effet,
                    une grande liberté d&apos;expressivité est accordée aux
                    interprètes, les effets musicaux sont maîtrisés, tout en
                    présentant une forme de spontanéité innovante. Il nous
                    paraît évident que cette musique doit être donnée à
                    entendre, à étudier et à travailler, et que ses implications
                    historiques ne sont pas négligeables, pour le patrimoine
                    culturel allemand mais aussi européen au sens large. Se
                    faisant la voix de Stölzel, Phænomen souhaite marquer une
                    identité à la fois européenne et transfrontalière, engagée
                    pour la redécouverte du patrimoine et de l&apos;histoire de
                    la musique, et en faveur de l&apos;écoute d&apos;œuvres
                    nouvelles pour le public.
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
                  <p className="max-w-full md:max-w-[80%] text-md md:text-2xl">
                    Le Project Stölzel porte une ambition unique : rassembler,
                    numériser et rendre accessible l&apos;intégralité de
                    l&apos;œuvre de Gottfried Heinrich Stölzel. <br /> Phænomen
                    développe une base de données trilingue ouverte à tous,
                    collabore avec bibliothèques et institutions pour encourager
                    la numérisation des sources, et produit des éditions
                    scientifiques destinées chercheurs, interprètes et
                    passionnés. Ce travail remet en lumière un compositeur
                    essentiel de l&apos;histoire baroque.
                    <br /> <br />
                    La plupart des partitions est dans des bibliothèques, et
                    pour certaines numérisées, mais pas toutes. Nous accueillons
                    donc volontiers l&apos;aide des musicologues ou de spécialistes
                    des manuscrits allemands du XVIIIème siècle pour nous épauler dans ce
                    travail.
                  </p>
                </div>
              </section>
            </AnimatedBorderCard>

            {/* Phaenomen lintegrale des cantates */}
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
                    <em>Phænomen</em> : l&apos;intégrale des Cantates de Stölzel
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.sonore
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-full text-md md:text-2xl md:max-w-[80%]">
                    La clef de voûte de l&apos;activité de l&apos;ensemble est
                    la redécouverte des œuvres de Stölzel dans le monde du
                    sonore : jouer, travailler, donner en concerts et
                    enregistrer les œuvres de Stölzel. L&apos;Ensemble Phænomen
                    se lance donc dans l&apos;intégrale des cantates de
                    Gottfried Heinrich Stölzel, par volumes correspondant à des
                    formats de concerts thématiques et par effectif instrumental
                    et vocal, avec l&apos;ambition d&apos;enregistrer chaque
                    nouvelle redécouverte. <br /> <br /> Soutenez cette
                    initiative en programmant l&apos;ensemble ou en donnant au
                    projet, pour nous aider à financer les différents éléments
                    de cette mission.
                  </p>
                  <ContacterButton className="mx-auto mt-8" />
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
              <section className="Programme" ref={programmeSectionRef}>
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
                    Nos prochains programmes
                  </h3>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openSections.programme
                      ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {openSections.programme ? (
                    <ProgrammePage
                      programmes={[
                        programmeCantatesVolI,
                        programmeInstrumentalVolI,
                      ]}
                    />
                  ) : null}
                </div>
              </section>
            </AnimatedBorderCard>
          </div>
        </div>
      </section>
    </main>
  );
}
