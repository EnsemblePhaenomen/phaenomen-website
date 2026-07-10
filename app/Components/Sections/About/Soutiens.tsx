import Image from "next/image";

export function Soutiens() {
  return (
    <section className="w-full mt-16 md:mt-20 mb-16 md:mb-24 px-8">
      <div className="max-w-4xl mx-auto text-center text-neutral-600 leading-relaxed space-y-4">
        <p className="text-sm md:text-lg">
          <span className="font-semibold text-neutral-800">
            Ils nous soutiennent :
          </span>{" "}
          Fondation Fourvière, Fonds Franco-Allemand, Stölzel-Gesellschaft
        </p>

        <p className="text-sm md:text-lg max-w-2xl mx-auto">
          L'Ensemble Phaenomen a bénéficié du soutien de la Cité de la Voix
          (Vézelay) dans le cadre de son programme Jeunes ensembles en 2026.
        </p>

        <div className="pt-4 flex justify-center">
          <Image
            src="/logoSoutiens/citeDeLaVoixLogo.png"
            alt="Logo de la Cité de la Voix"
            width={240}
            height={80}
            className="h-auto max-w-[180px] md:max-w-[220px] object-contain opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
