import Image, { StaticImageData } from "next/image";

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
        <div className=" col-start-8 col-span-2 row-start-5 flex justify-start items-end">
          <h2 className="hero-title  mb-4">ensemble</h2>
        </div>

        {/* Logo — occupe 2 cellules en largeur, juste en dessous */}
        <div className="col-start-5 col-span-5 row-start-6 flex justify-end items-start">
          <Image
            src={logo}
            alt="Logo"
            width={800}
            height={400}
            className="max-w-[70vw] sm:max-w-[50vw] md:max-w-[40vw] w-auto h-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-fit col-start-8 col-span-2 row-start-9 text-start flex justify-start items-center flex-col">
          <p className="w-100  text-white text-4xl mb-4">Noé CHAPOLARD</p>
          <p className="w-100 text-white text-4xl mb-4">Direction</p>
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
