import videosData from "@/app/data/videos/videos";
import type { VideoItem } from "@/app/types/videoConfig";

const videos: VideoItem[] = videosData.videos;

export default function VideoList() {
  if (!videos.length) return null;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/hibou_bg.png')] bg-contain bg-center bg-no-repeat opacity-20"
      />
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:flex-wrap">
        {videos.map((video) => {
          const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}`;

          return (
            <article
              key={video.youtubeId}
              className="w-full md:w-[calc(50%-0.75rem)] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur"
            >
              <div className="relative aspect-video bg-black">
                <iframe
                  src={embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">
                      {video.title}
                    </h3>
            
                  </div>

        
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
