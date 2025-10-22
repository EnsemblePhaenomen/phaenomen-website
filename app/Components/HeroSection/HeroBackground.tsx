import Image, { StaticImageData } from "next/image";
import ArrowIcon from "../(ui)/Arrows/ArrowIcon";
// import Link from "next/link"; // si le CTA doit naviguer

type HeroBackgroundProps = {
  src: StaticImageData;
  logo: StaticImageData;
  children?: React.ReactNode;
};

export default function HeroBackground({
  children,
  src,
  logo,
}: HeroBackgroundProps) {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[100svh] pb-[env(safe-area-inset-bottom)]"
      aria-labelledby="hero-title"
    >
      {/* Background image — décoratif */}
      <Image
        src={src}
        alt="illustration décorative de la section héro"
        aria-hidden
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center -z-10"
        priority
      />

      {/* Overlay lisibilité au-dessus de l'image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-0" />

      {/* Grille : mobile (base) → sm → md: 12×12 */}
      <div
        className="
          absolute inset-0 grid h-full gap-3 
          grid-cols-2 grid-rows-[repeat(12,minmax(0,1fr))]
          place-content-center          
          sm:grid-cols-6 sm:grid-rows-[repeat(8,minmax(0,1fr))] sm:place-content-start sm:p-6
          md:grid-cols-12 md:grid-rows-12 md:p-8
          
        "
      >
        {/* Titre "ensemble" */}
        <div
          className="place-self-center col-span-2 row-start-4 flex items-end justify-start
            sm:col-span-2 sm:col-start-4 sm:row-start-4
            md:col-start-7 md:col-span-3 md:row-start-4 md:row-span-2"
        >
          <h2
            id="hero-title"
            className="hero-title pb-2 md:pb-5 md:mb-10 text-white"
          >
            ensemble
          </h2>
        </div>

        {/* Logo */}
        <div
          className="
            col-span-2 row-start-5 flex items-start justify-center
            sm:col-span-4 sm:col-start-2 sm:row-start-4
            md:col-start-5 md:col-span-5 md:row-start-5 md:row-span-4 md:justify-end"
        >
          <Image
            src={logo}
            alt="Logo de l’ensemble"
            width={800}
            height={400}
            sizes="(max-width: 639px) 75vw, (max-width: 1023px) 55vw, 40vw"
            className="w-auto h-auto max-w-[90vw] sm:max-w-[55vw] md:max-w-[40vw]"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Sous-titre */}
        <div
          className="
           place-self-center
            col-span-2 row-start-8 flex justify-start
            sm:col-span-3 sm:col-start-3 sm:row-start-6
            md:col-start-7 md:col-span-3 md:row-start-8 md:row-span-2
          "
        >
          <div className="flex flex-col items-end leading-none">
            <p className="hero-name leading-none">
              <span>Noé</span>&thinsp;<span>Chapolard</span>
            </p>
            <p className="hero-role mb-3 md:mb-4 leading-none mt-2 self-start">
              Direction
            </p>
          </div>
        </div>

        {/* CTA bouton si c’est une action, sinon Link) */}
        <button
          type="button"
          className="
           place-self-center
            col-span-2 row-start-9 flex items-center justify-start text-white group
            sm:col-span-3 sm:col-start-3 sm:row-start-7
            md:col-start-7 md:col-span-3 md:row-start-9 md:row-span-1
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-md
          "
          aria-label="Plus d'informations"
        >
          <ArrowIcon className="w-10 h-16 md:w-12 md:h-20 pr-4 md:pr-5 mt-2 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          <p className="hero-info">Plus d'informations</p>
        </button>

        {/* Si navigation : 
        <Link href="#plus" className="...">...</Link>
        */}

        {/* Bande supérieure du bas de page */}
        <div
          className={`
            col-span-2 row-start-11 self-end
            sm:col-span-6 sm:row-start-8
            md:col-span-12 md:row-start-12
            border-t border-white/70
          `}
          aria-hidden
        />

        {/* Slot enfants (toujours présent, jamais masqué) */}
        <div
          className={`
            col-span-2 row-start-3 flex items-center justify-center pointer-events-auto hero-name text-white
            sm:col-span-6 sm:row-start-5
            md:col-span-5 md:row-start-5 md:justify-center
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
