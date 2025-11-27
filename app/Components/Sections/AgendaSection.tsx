"use client";

import { useState } from "react";
import AnimatedBorderCard from "../(ui)/AnimatedBorderCard";
import ContactButton from "../(ui)/Animations/ContactButton";

const events = [
  { date: "24 JAN.", title: "Cantates de Bach", city: "Nantes", place: "Église Saint-Nicolas", info: "20h — Entrée libre." },
  { date: "02 FÉV.", title: "Project Stölzel", city: "Rennes", place: "Théâtre municipal", info: "19h30 — Réservation conseillée." },
  { date: "16 MARS", title: "Passions allemandes", city: "Angers", place: "Centre culturel", info: "18h — Concert commenté." },
  { date: "30 MARS", title: "Concert baroque", city: "Laval", place: "Chapelle St-Pierre", info: "20h." },
  { date: "12 AVR.", title: "Stabat Mater", city: "Vannes", place: "Cathédrale", info: "20h — Entrée libre." },
  { date: "20 AVR.", title: "Oratorio de Pâques", city: "Tours", place: "Grand Théâtre", info: "19h." },
  { date: "04 MAI", title: "Musique sacrée", city: "Brest", place: "Église St-Martin", info: "17h." },
  { date: "11 MAI", title: "Motets allemands", city: "Clisson", place: "Halle aux grains", info: "20h." },
  { date: "19 MAI", title: "Requiem allemand", city: "Quimper", place: "Théâtre", info: "18h." },
  { date: "01 JUIN", title: "Bach & Telemann", city: "Orléans", place: "Salle Philharmonique", info: "20h." },
  { date: "16 JUIN", title: "Concert estival", city: "La Roche-sur-Yon", place: "Auditorium", info: "19h." },
  { date: "29 JUIN", title: "Fête de la musique", city: "Nantes", place: "Place Royale", info: "21h — Extérieur." },
];

export default function AgendaSection() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop > 0 && !isScrolling) {
      setIsScrolling(true);
    } else if (target.scrollTop === 0 && isScrolling) {
      setIsScrolling(false);
    }
  };

  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-8">

        <div className="flex flex-col lg:flex-row">

          {/* LEFT */}
          <div
            className="
              w-full md:flex-[2] 
              flex items-center justify-center
              mb-12 md:mb-0
              md:pr-[4vw]
            "
          >
            <h1 className="text-4xl md:text-8xl leading-none">
              Agenda
            </h1>
          </div>

          {/* CENTER */}
          <AnimatedBorderCard
            className="w-full md:flex-[1]"
            responsive
            animationDuration={0.3}
            delay={0.2}
          >
            <div
              className="
                flex items-center justify-center
                h-[350px]
                md:h-[713px]
                px-8
              "
            >
              <ContactButton />
            </div>
          </AnimatedBorderCard>

          {/* RIGHT — scrollable event list */}
          <div
            className="
              w-full md:flex-[2]
              mt-12 md:mt-0
              md:pl-[4vw]
              flex
            "
          >
            <div
              onScroll={handleScroll}
              className={`
                w-full max-w-xl
                text-center md:text-left
                overflow-y-auto
                md:h-[713px]
                pr-2
                space-y-6
                ${isScrolling ? 'scrollbar-visible' : 'scrollbar-hidden'}
              `}
            >
              <p className="text-sm md:text-base uppercase tracking-[0.25em]">
                Prochains rendez-vous
              </p>

              <div className="space-y-8">
                {events.map((event, index) => (
                  <article
                    key={index}
                    className="border-b border-neutral-300 pb-6 last:border-none last:pb-0"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
                      <p className="font-serif text-xl md:text-2xl tracking-tight">
                        {event.date}
                      </p>
                      <div className="space-y-1">
                        <h2 className="font-serif text-lg md:text-xl leading-snug">
                          {event.title}
                        </h2>
                        <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.2em] text-neutral-500">
                          {event.city} — {event.place}
                        </p>
                        <p className="text-sm text-neutral-700">{event.info}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed pb-4">
                Certains horaires peuvent être modifiés — consultez régulièrement cette page.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
