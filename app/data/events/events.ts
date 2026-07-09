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
    date: "Du 13 au 19 JUIL.",
    title: "Résidence à la Cité de la Voix",
    city: "Vézelay",
    place: "16h Basilique - 17h Cité de la Voix",
    info: "Gratuit, sans réservation.",
    url: "",
  },
  {
    date: "18 JUIL.",
    title: "Concert : L’Intégrale des Cantates Vol. I et II",
    city: "Brosse",
    place: "Église Saint-Andoche",
    info: "Gratuit, sans réservation.",
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
