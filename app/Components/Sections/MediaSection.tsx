import AnimatedBorderCard from "../(ui)/AnimatedBorderCard";
import PhotoGallery from "../(ui)/PhotoGallery";
export default function MediaSection() {
  return (
    <section
      id="media"
      className="min-h-screen bg-gradient-to-br flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Médias</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
            Explorez notre univers sonore et visuel à travers nos créations.
          </p>
          <div className="flex flex-col gap-6">
            
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
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Vidéo</h3>
                <p className="opacity-80">Captations</p>
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
