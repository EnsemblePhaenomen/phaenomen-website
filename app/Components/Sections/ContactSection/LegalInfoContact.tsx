import Link from "next/link";

export default function LegalInfoContact() {
  return (
    <div className="w-full mt-16 md:mt-20 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-2 text-neutral-600  leading-relaxed">
        <div className="text-sm md:text-xl">

        <p>
          <span className="font-semibold">Coordination de la recherche : </span>
          Claire Laplace
        </p>

        <p>
          <span className="font-semibold">Siège social :</span> 16 rue du Mont
          d’Or, 69009 Lyon, France
        </p>
        </div>

        <div className="mt-5 text-sm md:text-base">
          <p>
            <span className="font-semibold font-sm">
              Directrice de la publication :{" "}
            </span>
            Claire Laplace
          </p>

          <p>
            <span className="font-semibold font-sm">Hébergeur :</span> OVH SAS –
            2 rue Kellermann, 59100 Roubaix, France
          </p>

          <p className="mt-2">
            <span className="font-semibold font-sm">Développement du site : </span>
            <Link
              href="https://www.louissanson.dev"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              Louis Sanson
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
