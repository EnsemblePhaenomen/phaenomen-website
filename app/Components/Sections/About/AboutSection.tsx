import Lensemble from "./Lensemble";
import ProjetStoltzel from "./ProjetStoltzel";
import data from "@/app/data";
import AnimatedEntete from "./AnimatedEntete";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import LeChef from "./Lechef";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center w-full overflow-hidden"
    >
      <div className="flex w-full max-w-full">
        {/* Left image column - partagée entre les deux sections */}
        <div className="hidden md:block md:w-40 lg:w-52 flex-shrink-0">
          <AnimatedBorderCard className="" sides={["right"]} animationDuration={0.6} delay={0.2}>
            <AnimatedEntete className="w-full h-auto sticky top-0" />
          </AnimatedBorderCard>
        </div>

        {/* Right content column */}
        <div className="flex-1 min-w-0">
          <Lensemble data={data.musiciens} />
          <ProjetStoltzel />
          <LeChef data={data.chef}/>
        </div>
      </div>
    </section>
  );
}
