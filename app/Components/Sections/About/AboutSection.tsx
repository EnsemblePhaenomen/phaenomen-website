import Lensemble from "./Lensemble";
import ProjetStoltzel from "./ProjetStoltzel";
import data from "@/app/data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Lensemble data={data.musiciens} />
      <ProjetStoltzel />
    </section>
  );
}
