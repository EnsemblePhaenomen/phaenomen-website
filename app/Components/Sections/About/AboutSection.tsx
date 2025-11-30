import Lensemble from "./Lensemble";
import ProjetStolzel from "./ProjetStolzel";
import musiciensData from "@/app/data/musiciens/musiciens";
import AnimatedEntete from "./AnimatedEntete";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center w-full overflow-x-hidden"    >
      <div className="flex w-full max-w-full">
        {/* Left image column - partagée entre les deux sections */}
        <div className="hidden md:block md:w-40 lg:w-52 flex-shrink-0">
          <AnimatedBorderCard className="h-full" sides={["right"]} animationDuration={0.6} delay={0.2}>
            <AnimatedEntete className="w-full h-full" />
          </AnimatedBorderCard>
        </div>

        {/* Right content column */}
        <div className="flex-1 min-w-0">
          <Lensemble data={musiciensData.musiciens} />
          <ProjetStolzel />
        </div>
      </div>
    </section>
  );
}
