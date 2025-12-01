"use client";

import { useEffect, useState } from "react";
import type { Chef } from "@/app/types/musiciensConfig";
import Image from "next/image";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";

type EnfantProps = {
  data: Chef;
};

export default function Lechef({ data: _data }: EnfantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  // Utiliser modal si disponible, sinon portrait
  const imageSrc = _data.modal?.src || _data.portrait?.src;
  const imageAlt = _data.modal?.alt || _data.portrait?.alt || _data.nom;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (isOpen) {
      timer = setTimeout(() => setShowName(true), 300);
    } else {
      setShowName(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOpen]);

  if (!imageSrc) {
    return null;
  }

  return (
    <main className="w-full max-w-full text-black ">
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-full">
 

        <div className="flex flex-col gap-8 pt-4 md:pt-16">
          <section>
            <div
              className="flex items-center  gap-2 mb-3 group cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <ArrowIcon className="w-10 h-auto md:w-12" />
              </div>

              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                {_data.prénom} {_data.nom}
              </h3>
            </div>

            <div
              className={`overflow-hidden flex flex-col md:flex-row lg:flex-row items-center justify-evenly transition-all duration-500 ease-in-out ${
                isOpen
                  ? "max-h-[2000px] opacity-100 pt-4 px-4 pb-8"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="max-w-[80%] md:max-w-[40%] md:flex-row gap-6">
                <p className="flex-1 leading-relaxed whitespace-pre-line text-md md:text-xl ">{_data.bio}</p>
              </div>
              <div className="relative group w-full md:w-1/2 aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover pt-4 md:pt-0"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />

                {/* Overlay avec gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div
                  className={`absolute inset-0 z-20 flex items-center text-center justify-center p-4 transition-opacity duration-500 ${
                    showName ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h2 className="text-[#E42B54] text-xl md:text-2xl font-semibold drop-shadow">
                    {_data.prénom} {_data.nom}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
