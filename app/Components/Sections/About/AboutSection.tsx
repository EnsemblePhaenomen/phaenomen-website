import Lensemble from "./Lensemble";
import ProjetStoltzel from "./ProjetStoltzel";
import data from "@/app/data";
import AnimatedEntete from "./AnimatedEntete";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center w-full overflow-hidden"
    >
      <div className="flex w-full max-w-full">
        {/* Left image column - partagée entre les deux sections */}
        <div className="hidden md:block md:w-40 lg:w-52 flex-shrink-0 border-r border-black/10">
          <AnimatedEntete className="w-full h-auto sticky top-0" />
        </div>

        {/* Right content column */}
        <div className="flex-1 min-w-0">
          <Lensemble data={data.musiciens} />
          <ProjetStoltzel />
        </div>
      </div>
    </section>
  );
}
