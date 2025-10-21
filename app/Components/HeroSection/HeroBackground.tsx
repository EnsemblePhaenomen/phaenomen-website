import Image, { StaticImageData } from "next/image";
import ArrowIcon from "../(ui)/Arrows/ArrowIcon";

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
    <section id="hero-section" className="relative w-full min-h-[99vh]">
      {/* Background image */}
      <Image
        src={src}
        alt="photo d'accueil"
        aria-hidden
        fill
        placeholder="blur"
        sizes="80vw"
        className="object-cover object-center -z-10"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 h-full">
        {/* Texte "ensemble"  */}
        <div className=" col-start-7 col-span-3 row-span-2 row-start-4 flex justify-end items-end bg-green-200/20 ">
          <h2 className="hero-title pb-5 mb-10">ensemble</h2>
        </div>

        {/* Logo — occupe 2 cellules en largeur, juste en dessous */}
        <div className="col-start-5 col-span-5 row-span-4 row-start-5 flex justify-end items-start">
          <Image
            src={logo}
            alt="Logo"
            width={800}
            height={400}
            className="max-w-[70vw] sm:max-w-[50vw] md:max-w-[40vw] w-auto h-auto"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="col-start-7 col-span-3 row-span-2 row-start-8 flex justify-start bg-blue-200/30 ">
          <div className="flex flex-col items-end leading-none">
            <p className="hero-name leading-none">
              <span>Noé</span>&thinsp;<span>Chapolard</span>
            </p>
            <p className=" hero-role mb-4 leading-none mt-2 self-start">
              Direction
            </p>
          </div>
        </div>
        <div className="hover:cursor-pointer  col-start-7 col-span-3 row-start-9 row-span-1 flex justify-start items-center bg-red-200/30">
          <ArrowIcon className="text-white w-12 h-20 pr-5 mt-2" />
          <p className="hero-info bg-red-200/30">
            Plus d'informations
          </p>
        </div>
        <div className="col-start-1 border-white col-span-12 row-start-12 border-t-1">
          hello
        </div>

        {/* Optional children */}
        {children && (
          <div className="col-span-5 row-start-5 flex justify-center items-center pointer-events-auto hero-name">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
