"use client";

import { useState } from "react";
import type { Chef } from "@/app/types/musiciensConfig"
import Image from "next/image";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";

type EnfantProps = {
    data: Chef;
};

export default function Lechef({ data: _data }: EnfantProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Utiliser modal si disponible, sinon portrait
    const imageSrc = _data.modal?.src || _data.portrait?.src;
    const imageAlt = _data.modal?.alt || _data.portrait?.alt || _data.nom;

    if (!imageSrc) {
        return null;
    }

    return (
        <main className="w-full max-w-full text-black">
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-full">
                <div className="w-full flex flex-col">
                    <h2 className="section-title pb-6">Le chef</h2>
                    <AnimatedBorderCard className="" sides={["top"]} animationDuration={0.3} delay={0.2}>
                        <div className="w-full" />
                    </AnimatedBorderCard>
                </div>

                <div className="flex flex-col gap-8 pt-4 md:pt-16">
                    <AnimatedBorderCard className="pt-4" sides={["bottom"]} animationDuration={0.3} delay={0.2}>
                        <section>
                            <div
                                className="flex items-center justify-between gap-2 mb-3 group cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div
                                    className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${isOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                >
                                    <ArrowIcon className="w-10 h-auto md:w-12" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                                    {_data.prénom} {_data.nom}
                                </h3>
                                <div className="relative group w-full md:w-1/2 aspect-[16/9] rounded-xl overflow-hidden">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                    />

                                    {/* Overlay avec gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                                        ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="flex flex-col max-w-[30%] md:flex-row gap-6">
                                    <div className="flex-1">
                                        {_data.bio}
                                    </div>

                                </div>
                            </div>
                        </section>
                    </AnimatedBorderCard>
                </div>
            </section>
        </main>
    )
}