export interface VideoItem {
  title: string;
  youtubeId: string;
  description?: string;
  thumbnail?: string;
}

export interface VideoConfig {
  videos: VideoItem[];
}
