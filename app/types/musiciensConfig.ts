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

export interface Chef {
  nom: string;
  prénom: string;
  role: string;
  portrait?: {
    src: string;
    alt: string;
  }
  modal?: {
    src: string;
    alt: string;
  }
}