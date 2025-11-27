import AnimatedBorderCard from "../(ui)/AnimatedBorderCard";
import MapRevealButton from "../(ui)/Animations/MapRevealButton";

export default function ContactSection() {
  return (
    <section className="min-h-screen pt-20  flex items-center">
      <div className="w-full max-w-7xl mx-auto px-8">

        {/* MOBILE = flex-col / DESKTOP = flex-row */}
        <div className="flex flex-col lg:flex-row">

          {/* LEFT – mobile: full width centered / desktop: 2/5 */}
          <div className="
            w-full md:flex-[2] 
            flex items-center justify-center
            md:justify-center 
            mb-12 md:mb-0
            md:pr-[4vw]
          ">
            <h1 className="text-4xl md:text-8xl leading-none">
              Contact
            </h1>
          </div>

          {/* CENTER – mobile: auto height / desktop: big height */}
          <AnimatedBorderCard
            className="w-full md:flex-[1]"
            responsive
            animationDuration={0.3}
            delay={0.2}
          >
            <div className="
              flex items-center justify-center
              h-[350px]          /* mobile auto or smaller */
              md:h-[713px]       /* desktop full height */
              px-8
            ">
              <MapRevealButton />
            </div>
          </AnimatedBorderCard>

          {/* RIGHT – mobile: full width / desktop: 2/5 */}
          <div className="
            w-full md:flex-[2]
            flex items-center justify-center
            mt-12 md:mt-0
            md:pl-[4vw]
          ">
            <div className="space-y-6 text-center md:text-left">

              <p className="text-lg md:text-2xl uppercase leading-relaxed">
                POUR PRENDRE RENDEZ-VOUS,<br />
                N&apos;HÉSITEZ-PAS À NOUS CONTACTER <br />
                PAR TÉLÉPHONE OU PAR MAIL
              </p>

              <p className="text-2xl lg:text-2xl leading-none hover:text-[#E42B54]">
                06 06 06 06 06
              </p>

              <a
                href="mailto:ensemblephaenomen@gmail.com"
                className="text-2xl lg:text-2xl hover:text-[#E42B54]"
              >
                ensemblephaenomen@gmail.com
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
