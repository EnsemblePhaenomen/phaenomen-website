import Lensemble from "./Lensemble";
import ProjetStoltzel from "./ProjetStoltzel";
import data from "@/app/data";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Lensemble data={data.musiciens} />
      
      {/* Séparateur image */}
      {/* <div className="w-full relative h-52">
        <Image
          src="/entete.jpg"
          alt="Séparateur"
          fill
          className="object-cover "
          sizes="200vw"
        />
      </div> */}

      <ProjetStoltzel />
    </section>
  );
}
