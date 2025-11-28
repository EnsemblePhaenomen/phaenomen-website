export type GalleryImages = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryConfig = {
  images: GalleryImages[];
  columns?: number;
  gap?: number;
  showCaptions?: boolean;
};