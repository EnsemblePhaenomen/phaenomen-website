export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryConfig = {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
  showCaptions?: boolean;
};