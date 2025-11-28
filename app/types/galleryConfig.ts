export type GalleryImages = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type GalleryConfig = {
  images: GalleryImages[];
  columns?: number;
  gap?: number;
  showCaptions?: boolean;
};
