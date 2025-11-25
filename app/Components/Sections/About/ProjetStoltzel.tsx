"use client";

import { useState } from "react";
import ArrowIcon from "../../(ui)/Arrows/ArrowIcon";
export default function ProjetStoltzel() {
  const [openSections, setOpenSections] = useState({
    sonore: false,
    musicologique: false,
    programme: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <main className="w-full max-w-full text-black">
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-full">
        {/* Top title */}
        <div className="w-full flex flex-col">
          <h2 className="section-title">Projet Stöltzel</h2>
          <div className="mt-4 h-px w-full bg-black" />
        </div>

        {/* Main layout */}
        <div className="flex flex-col gap-8 pt-4 md:pt-16">
          {/* Content column */}
          <div className="flex flex-col gap-8 text-sm leading-relaxed">
            {/* Projet sonore */}
            <section className="pt-4">
              <div
                className="flex items-center gap-2 mb-3 group cursor-pointer"
                onClick={() => toggleSection("sonore")}
              >
                <div
                  className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                    openSections.sonore ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="w-10 h-auto md:w-12" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Projet sonore
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.sonore
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </section>

            {/* Projet musicologique */}
            <section className="border-t border-black pt-4">
              <div
                className="flex items-center gap-2 mb-3 group cursor-pointer"
                onClick={() => toggleSection("musicologique")}
              >
                <div
                  className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                    openSections.musicologique ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="w-10 h-auto md:w-12" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Projet musicologique
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.musicologique
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </section>

            {/* Programme */}
            <section className="border-t border-black pt-4">
              <div
                className="flex items-center gap-2 mb-3 group cursor-pointer"
                onClick={() => toggleSection("programme")}
              >
                <div
                  className={`mr-3 md:mr-4 flex-shrink-0 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                    openSections.programme ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="w-10 h-auto md:w-12" />
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Notre programme
                </h2>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.programme
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
