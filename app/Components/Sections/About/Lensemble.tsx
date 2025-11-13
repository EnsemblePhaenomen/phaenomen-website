import Image from "next/image";
import group12 from "@/public/group12.jpg"
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
export default function Lensemble() {
    return (
        <main className="w-full bg-red-200 text-black">
            <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Top title */}
                <div className="mb-8 w-full bg-blue-200">
                    <h2 className="section-title font-serif">L&apos;ensemble</h2>
                    <div className="mt-2 h-px w-full bg-black" />
                </div>

                {/* Main layout */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Left image column */}
                    <div className="md:w-1/4">
                        <div className="w-full aspect-[1/3] md:h-full md:aspect-auto  border border-neutral-400" />
                        {/* <Image src={group12} alt="" width={330} height={200} className="object-cover h-full w-full" /> */}
                    </div>

                    {/* Right content column */}
                    <div className="md:w-3/4 flex flex-col gap-8 text-sm leading-relaxed">
                        {/* Présentation */}
                        <section className="border-t border-black pt-4">
                            <div className="flex items-baseline gap-2 mb-3 bg-orange-200">
                                <div className="mr-3 md:mr-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45">
                                    <ArrowIcon className="w-10 h-auto md:w-12" />
                                </div>
                                <h2 className="text-lg font-semibold tracking-tight">
                                    Présentation
                                </h2>
                            </div>
                            <p className="max-w-[80%] bg-violet-400">
                                L&apos;ensemble Phænomen se consacre à la redécouverte de la musique baroque allemande du XVIIIᵉ siècle. Sous la direction de Noé Chapolard, il s&apos;attache tout particulièrement à faire revivre l&apos;œuvre de Gottfried Heinrich Stölzel (1690-1749), un compositeur majeur injustement tombé dans l&apos;oubli, tant des historiens que des musiciens.
                            </p>
                        </section>

                        {/* Notre ensemble */}
                        <section className="border-t border-black pt-4">
                            <div className="flex items-baseline gap-2 mb-3 bg-blue-200">
                                <div className="mr-3 md:mr-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45">
                                    <ArrowIcon className="w-10 h-auto md:w-12" />
                                </div>
                                <h2 className="text-lg font-semibold tracking-tight">
                                    Notre ensemble
                                </h2>
                            </div>
                            <div className="space-y-3 max-w-[80%] bg-green-200">
                                <p>
                                    À ce jour, le cœur de l&apos;ensemble Phænomen réunit un quatuor à cordes, un trio de continuo et un quatuor vocal. Formés dans les plus grandes institutions européennes dédiées à la musique ancienne — Schola Cantorum de Bâle, ESMUC, CMBV, CNSMD de Lyon —, nos musiciennes et musiciens collaborent régulièrement avec des ensembles de renom tels que la Capella Reial de Catalunya, le Bach Collegium Japan ou l&apos;Ensemble Correspondances.
                                </p>
                                <p>
                                    Spécialistes de la pratique historiquement informée, du jeu sur instruments d&apos;époque et de l&apos;interprétation du répertoire baroque, ils comptent parmi les artistes les plus prometteurs de la scène française et européenne, distingués par de nombreux prix internationaux, enregistrements discographiques et récitals en solistes.
                                </p>

                            </div>
                        </section>

                        {/* Nos interprètes */}
                        <section className="border-t border-black pt-4">
                            <div className="flex items-baseline gap-2 mb-3">
                                <div className="mr-3 md:mr-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45">
                                    <ArrowIcon className="w-10 h-auto md:w-12" />
                                </div>
                                <h2 className="text-lg font-semibold tracking-tight">
                                    Nos interprètes
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-xs sm:text-sm">
                                <div className="space-y-1">
                                    <p>Nom Prénom</p>
                                    <p>Nom Prénom</p>
                                    <p>Nom Prénom</p>
                                </div>
                                <div className="space-y-1">
                                    <p>Nom Prénom</p>
                                    <p>Nom Prénom</p>
                                    <p>Nom Prénom</p>
                                </div>
                                <div className="space-y-1">
                                    <p>Nom Prénom</p>
                                    <p>Nom Prénom</p>
                                    <p>Nom Prénom</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}