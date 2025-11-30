"use client";

import { useState } from "react";
import AnimatedBorderCard from "../(ui)/AnimatedBorderCard";
import ContactButton from "../(ui)/Animations/ContactButton";

type EventItem = {
  date: string;
  title: string;
  city: string;
  place: string;
  info: string;
  url: string;
};

const events: EventItem[] = [
  {
    date: "16 MAI.",
    title:
      "Cantates Sacrées - Volume I : cantates pour choeur, cordes, et continuo",
    city: "",
    place: "",
    info: "",
    url: "",
  },
];

export default function AgendaSection() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(
    events[0] ?? null
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setIsScrolling(target.scrollTop > 0);
  };

  const handleSelect = (event: EventItem) => {
    setSelectedEvent(event);
  };

  const isSelected = (event: EventItem) =>
    selectedEvent &&
    selectedEvent.date === event.date &&
    selectedEvent.title === event.title;

  // 💡 Helpers UI en fonction de l'event sélectionné
  const hasReservationUrl = Boolean(selectedEvent?.url);
  const hasVenue =
    Boolean(selectedEvent?.city?.trim()) || Boolean(selectedEvent?.place?.trim());

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
            <h1 className="text-4xl md:text-8xl leading-none">Agenda</h1>
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
                flex flex-col items-center justify-center gap-4
                h-[350px]
                md:h-[713px]
                px-8
              "
            >
              {/* Petit texte d'état */}
              {!hasVenue || !hasReservationUrl ? (
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 text-center">
                  Informations complètes à venir
                </p>
              ) : null}

              <ContactButton
                dateLabel={selectedEvent?.date ?? null}
                titleLabel={selectedEvent?.title ?? null}
                ctaLabel={hasReservationUrl ? "réserver" : "coming soon!"}
                // On ne passe un href que si on a vraiment une URL
                href={hasReservationUrl ? selectedEvent!.url : undefined}
              />
            </div>
          </AnimatedBorderCard>

          {/* RIGHT – scrollable event list */}
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
                ${isScrolling ? "scrollbar-visible" : "scrollbar-hidden"}
              `}
            >
              <p className="text-sm md:text-base uppercase tracking-[0.25em]">
                Prochains concerts
              </p>

              <div className="space-y-8">
                {events.map((event, index) => {
                  const eventHasVenue =
                    Boolean(event.city?.trim()) ||
                    Boolean(event.place?.trim());
                  const eventHasUrl = Boolean(event.url?.trim());

                  return (
                    <article
                      key={index}
                      className={`
                        border-b border-neutral-300 pb-6 last:border-none last:pb-0
                        cursor-pointer transition-colors
                        ${isSelected(event) ? "bg-black p-5 text-white" : "hover:bg-black/5"}
                      `}
                      onClick={() => handleSelect(event)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSelect(event);
                        }
                      }}
                      tabIndex={0}
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
                        <p className="font-serif text-xl md:text-2xl tracking-tight">
                          {event.date}
                        </p>

                        <div className="space-y-1">
                          <h2 className="font-serif text-lg md:text-xl leading-snug">
                            {event.title}
                          </h2>

                          {/* Lieu */}
                          <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.2em] text-white">
                            {eventHasVenue ? (
                              <>
                                {event.city}
                                {event.city && event.place && " — "}
                                {event.place}
                              </>
                            ) : (
                              <span className="italic">
                                Lieu et horaires à venir
                              </span>
                            )}
                          </p>

                          {/* Infos / réservation */}
                          <p className="text-sm text-neutral-700">
                            {event.info ? (
                              event.info
                            ) : eventHasUrl ? (
                              "Plus d'informations et réservation via le bouton ci-contre."
                            ) : (
                              <span className="italic text-white">
                                Détails pratiques et réservation à venir.
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed pb-4">
                Certains horaires peuvent être modifiés – consultez régulièrement
                cette page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
