import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import ContacterButton from "../../(ui)/Animations/ContacterButton";
import LegalInfoContact from "./LegalInfoContact";
export default function ContactSection() {
  return (
    <>
      <section className="min-h-screen pt-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8">
          {/* MOBILE = flex-col / DESKTOP = flex-row */}
          <div className="flex flex-col lg:flex-row">
            {/* LEFT – mobile: full width centered / desktop: 2/5 */}
            <div
              className="
              w-full md:flex-[2] 
              flex items-center justify-center
              mb-12 md:mb-0
              md:pr-[4vw]
            "
            >
              <h1 className="text-4xl md:text-8xl leading-none">Contact</h1>
            </div>

            {/* CENTER – mobile: auto height / desktop: big height */}
            <AnimatedBorderCard
              className="w-full md:flex-[1]"
              responsive
              animationDuration={0.3}
              delay={0.2}
            >
              <div
                className="
                flex items-center justify-center
                h-[350px]          /* mobile */
                md:h-[713px]       /* desktop */
                px-8
              "
              >
                <ContacterButton href="mailto:contact@ensemble-phaenomen.eu" />
              </div>
            </AnimatedBorderCard>

            {/* RIGHT – mobile: full width / desktop: 2/5 */}
            <div
              className="
              w-full md:flex-[2]
              flex items-center justify-center
              mt-12 md:mt-0
              md:pl-[4vw]
              relative              
            "
            >
              <div
                className="
                space-y-6 xl:space-y-0    /* l'espacement vertical disparaît en xl */
                text-center md:text-left
                w-full
              "
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  Nous comptons sur votre aide pour donner vie à cette musique -
                  toute aide est la bienvenue : musiciens, programmateurs,
                  acteurs du secteur musical, mélomanes ou passionnés de culture
                  allemande, vous pouvez nous aider - contactez-nous !
                </p>

                <a
                  href="mailto:contact@ensemble-phaenomen.eu"
                  className="
                  text-2xl font-semibold hover:text-[#E42B54]
                  block
                  mt-6
                  xl:mt-0
                  xl:absolute xl:bottom-0 xl:left-21
                "
                >
                  contact@ensemble-phaenomen.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LegalInfoContact />
    </>
  );
}