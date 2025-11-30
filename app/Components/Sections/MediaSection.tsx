import AnimatedBorderCard from "../(ui)/AnimatedBorderCard";
import PhotoGallery from "../(ui)/PhotoGallery";
import VideoList from "../(ui)/VideoList";
export default function MediaSection() {
  return (
    <section
      id="media"
      className="min-h-screen bg-gradient-to-br pt-20  flex items-center justify-center "
    >
      <div className="container max-w-full mx-auto px-6 py-20 ">
        <div className=" xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Médias</h2>
          <div className="flex flex-col gap-6 ">
            
            {/* AUDIO SI UN JOUR IL Y EN A */}
            {/* <AnimatedBorderCard
            className="w-full"
            sides={["top",]}
            animationDuration={0.3}
            delay={0.2}
          >
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Audio</h3>
                <p className="opacity-80">Enregistrements et créations sonores</p>
              </div>
            </AnimatedBorderCard> */}

            {/* VIDEOS SECTION */}

            <AnimatedBorderCard
              className="w-full"
              sides={["top"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <div className="rounded-lg p-6 w-full mx-auto">
                <h3 className="text-xl font-semibold mb-4">Vidéos</h3>
                      <div className="mt-10 mx-auto">
            <VideoList />
          </div>
              </div>
            </AnimatedBorderCard>
            {/* PHOTOS SECTION */}

            <AnimatedBorderCard
              className="w-full"
              sides={["top"]}
              animationDuration={0.3}
              delay={0.2}
            >
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Photos</h3>
                <p className="opacity-80">Galerie</p>
              </div>
            </AnimatedBorderCard>
          </div>
    
          <div>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
