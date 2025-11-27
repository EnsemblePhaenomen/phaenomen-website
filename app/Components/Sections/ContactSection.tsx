import AnimatedBorderCard from "../(ui)/AnimatedBorderCard";
import MapRevealButton from "../(ui)/Animations/MapRevealButton";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-[#f4f4f4] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-8">

        <div className="flex">

          {/* LEFT – 2/5 */}
          <div className="flex-[2] flex items-center justify-center pr-[4vw] ">
            <h1 className="text-2xl md:text-8xl leading-none ">
              Contact
            </h1>
          </div>

          {/* CENTER – 1/5 – grande hauteur + bouton centré */}
          <AnimatedBorderCard className="flex-[1]" sides={["left", "right"]} animationDuration={0.3} delay={0.2}>
            <div className="flex items-center justify-center h-[713px] px-8">
              <MapRevealButton />
            </div>
          </AnimatedBorderCard>

          {/* RIGHT – 2/5 */}
          <div className="flex-[2] flex items-center justify-center pl-[4vw] ">
            <div className="max-w-fit space-y-6">

              <p className="text-2xl  uppercase leading-relaxed">
                POUR PRENDRE RENDEZ-VOUS, N&apos;HÉSITEZ-PAS À NOUS<br />
                CONTACTER PAR TÉLÉPHONE OU PAR MAIL
              </p>

              <p className=" text-2xl lg:text-4xl leading-none">
                06 06 06 06 06
              </p>

              <a
                href="mailto:ensemblephaenomen@gmail.com"
                className=" text-2xl lg:text-4xl "
              >
                ensemblephaenomen@gmail.com
              </a>

              <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase">
                <span className="h-[6px] w-[6px] rounded-full bg-black inline-block" />
                ADRESSE DE L&apos;ENSEMBLE.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>


  );
}

