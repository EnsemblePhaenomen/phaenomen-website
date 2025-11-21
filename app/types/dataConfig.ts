export interface Musicien {
  nom: string;
  prénom: string;
  instrument: string;
  bio: string;
  portrait?: {
    src: string;
    alt: string;
  };
  modal?: {
    src: string;
    alt: string;
  }
}

export interface Credit {
  nom: string;
  prénom: string;
  role: string;
}
