export type EventItem = {
  date: string;
  title: string;
  city: string;
  place: string;
  info: string;
  url: string;
};

export const events: EventItem[] = [
  {
    date: "16 AVR. 18h",
    title:
      "L’Intégrale des Cantates Vol. I : cantates pour choeur, cordes et continuo",
    city: "Lyon",
    place: "Basilique de Fourvière",
    info: "En partenarariat avec la fondation Fourvière, la Stölzel-Gesellschaft et soutenu par le Fonds Citoyen Franco-Allemand.",
    url: "",
  },
  {
    date: "18 JUIL.",
    title: "Concert, programme en ligne en mai",
    city: "Brosse",
    place: "",
    info: "",
    url: "",
  },
  {
    date: "30 AOÛT",
    title: "Concert dans le cadre de Stölzel-Fest",
    city: "Gotha",
    place: "",
    info: "",
    url: "",
  },
  {
    date: "À venir",
    title:
      "Musique Instrumentale Vol. I : Concertos pour hautbois, et hautbois d’amour",
    city: "",
    place: "",
    info: "",
    url: "",
  },
];
