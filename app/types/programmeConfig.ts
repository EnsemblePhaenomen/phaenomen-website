export interface Work {
  title: string;                // “Gelobet Sey Gott und der Vater”
  catalogue?: string;           // "H. 388"
  liturgicalPeriod?: string;    // "Exaudi", "4. Avent", etc.
  notes?: string;
  imageSrc: string;  
  imageAlt: string;
  imageCredits: string;
  audioSrc: string;           
  youtubeId?: string;          // Id YouTube optionnel pour lecture vidéo
}

export interface ProgrammeSection {
  title: string;
  works: Work[];
}

export interface Programme {
  title: string;
  sections: ProgrammeSection[];
}
