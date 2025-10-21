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
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 h-full pointer-events-none">
        {/* Texte "ensemble"  */}
        <div className=" col-start-7 col-span-3 row-span-2 row-start-5 flex justify-end items-end bg-green-200 ">
          <h2 className="hero-title  mb-10">ensemble</h2>
        </div>

        {/* Logo — occupe 2 cellules en largeur, juste en dessous */}
        <div className="col-start-5 col-span-5 row-span-4 row-start-6 flex justify-end items-start">
          <Image
            src={logo}
            alt="Logo"
            width={800}
            height={400}
            className="max-w-[70vw] sm:max-w-[50vw] md:max-w-[40vw] w-auto h-auto"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="col-start-8 col-span-2 row-start-9 flex justify-end">
          <div className="flex flex-col items-end leading-none">
            <p className="text-white text-4xl leading-none">
              <span>Noé</span>&thinsp;<span>CHAPOLARD</span>
            </p>
            <p className="text-white text-4xl leading-none mt-2 self-start">
              Direction
            </p>
          </div>
        </div>
        <div className="cursor-pointer col-start-8 col-span-2 row-start-11 flex justify-start bg-red-200/30">
          <ArrowIcon className="text-white w-12 h-12 p-2 mt-2" />
          <p className="text-white text-4xl">Plus d'informations</p>
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
