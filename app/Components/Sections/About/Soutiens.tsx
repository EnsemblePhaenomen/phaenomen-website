import Image from "next/image";

type SoutiensProps = {
  variant?: "full" | "compact";
};

export function Soutiens({ variant = "full" }: SoutiensProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={
        isCompact
          ? "hidden md:block px-4 pb-3"
          : "w-full mt-16 md:mt-20 mb-16 md:mb-24 px-8"
      }
    >
      <div
        className={`leading-relaxed ${
          isCompact
            ? "text-neutral-200 space-y-1 text-right"
            : "max-w-4xl mx-auto text-center text-neutral-600 space-y-4"
        }`}
      >
        <p className={isCompact ? "text-sm md:text-lg" : "text-sm md:text-lg"}>
          <span
            className={`font-semibold ${
              isCompact ? "text-white" : "text-neutral-800"
            }`}
          >
            Ils nous soutiennent :
          </span>{" "}
          Fondation Fourvière, Fonds Franco-Allemand, Stölzel-Gesellschaft
        </p>

        <p className="text-sm md:text-lg max-w-2xl mx-auto">
          L&apos;Ensemble Phaenomen a bénéficié du soutien de la Cité de la Voix
          (Vézelay) dans le cadre de son programme Jeunes ensembles en 2026.
        </p>

        {!isCompact && (
          <div className="flex justify-center pt-4">
            <Image
              src="/logoSoutiens/citeDeLaVoixLogo.png"
              alt="Logo de la Cité de la Voix"
              width={240}
              height={80}
              className="h-auto object-contain transition-opacity hover:opacity-100 max-w-[180px] md:max-w-[220px] opacity-80"
            />
          </div>
        )}
      </div>
    </section>
  );
}
