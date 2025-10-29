// import Image, { StaticImageData } from "next/image";
// import HeroCTA from "./HeroCTA";
// import DirectorInfo from "./DirectorInfo";

// type HeroBackgroundProps = {
//   src: StaticImageData;
//   logo: StaticImageData;
//   title?: string;
//   directorName?: string;
//   directorRole?: string;
//   ctaLabel?: string;
//   ctaHref?: string;
//   ctaTargetId?: string;
//   ctaAriaLabel?: string;
// };

// export default function HeroBackground({
//   src,
//   logo,
//   title = "ensemble",
//   directorName = "Noé Chapolard",
//   directorRole = "Direction",
//   ctaLabel = "Plus d'informations",
//   ctaHref = "/about",
//   ctaTargetId = "",
//   ctaAriaLabel = "Plus d'informations - Naviguer vers la section À propos",
// }: HeroBackgroundProps) {
//   return (
//     <section
//       id="hero-section"
//       className="relative w-full min-h-[100svh] pb-[env(safe-area-inset-bottom)]"
//       aria-labelledby="hero-title"
//     >
//       {/* Background image — décoratif */}
//       <Image
//         src={src}
//         alt="illustration décorative de la section héro"
//         aria-hidden
//         fill
//         placeholder="blur"
//         sizes="100vw"
//         className="object-cover object-center -z-10"
//         priority
//       />

//       {/* Overlay lisibilité au-dessus de l'image */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-0" />

//       {/* Grille : mobile (base) → sm → md: 12×12 */}
//       <div
//         className="
//           absolute inset-0 grid h-full gap-0
//           grid-cols-2 grid-rows-[repeat(12,minmax(0,1fr))]
//           sm:grid-cols-6 sm:grid-rows-[repeat(8,minmax(0,1fr))] sm:place-content-start sm:p-6
//           md:grid-cols-12 md:grid-rows-12 md:p-8

//         "
//       >
//         {/* Titre "ensemble" */}
//         <div
//           className="place-self-center col-span-2 row-start-5 flex items-end justify-end
//             sm:col-span-2 sm:col-start-4 sm:row-start-4
//             md:col-start-7 md:col-span-3 md:row-start-4 md:row-span-2
//              lg:row-span-auto lg:col-span-auto lg:col-start-7 lg:w-full"
//         >
//           <h2
//             id="hero-title"
//             className="hero-title pb-2 md:pb-5 md:mb-10 text-white"
//           >
//             {title}
//           </h2>
//         </div>

//         {/* Logo */}
//         <div
//           className="
//             col-span-2 row-start-6 flex items-end justify-center
//             sm:col-span-4 sm:col-start-2 sm:row-start-4
//             md:col-start-5 md:col-span-5 md:row-start-5 md:row-span-4 md:justify-end
//              lg:h-fit"
//         >
//           <Image
//             src={logo}
//             alt="Logo de Phaenomen"
//             width={800}
//             height={400}
//             sizes="(max-width: 639px) 75vw, (max-width: 1080px) 55vw, 40vw"
//             className="block w-auto h-auto max-w-[90vw] sm:max-w-[55vw] md:max-w-[40vw]"
//             style={{ objectFit: "contain" }}
//             priority
//           />
//         </div>

//         {/* Container Sous-titre + CTA */}
//         <div
//           className="col-span-2 row-start-8 row-span-3 flex flex-col h-fit w-fit place-self-center
//             sm:col-span-3 sm:col-start-3 sm:row-start-6 sm:row-span-2 sm:flex-row sm:items-start sm:justify-between
//             md:col-start-7 md:col-span-3 md:row-start-8 md:row-span-2 md:flex-row md:items-start md:justify-between
//             lg:col-start-7 lg:row-start-8 lg:col-span-3 lg:flex-col lg:w-full lg:items-start"
//         >
//           {/* Sous-titre */}
//           <DirectorInfo name={directorName} role={directorRole} />

//           {/* CTA bouton */}
//           <div className="flex justify-start">
//             <HeroCTA
//               href={ctaHref}
//               label={ctaLabel}
//               targetId={ctaTargetId}
//               ariaLabel={ctaAriaLabel}
//             />
//           </div>
//         </div>

//         {/* Bande supérieure du bas de page */}
//         <div
//           className="absolute inset-x-0 bottom-17 border-t border-white pointer-events-none"
//           aria-hidden
//         />
//       </div>
//     </section>
//   );
// }
