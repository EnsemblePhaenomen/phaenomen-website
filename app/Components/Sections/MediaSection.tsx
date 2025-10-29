export default function MediaSection() {
  return (
    <section
      id="media"
      className="min-h-screen bg-gradient-to-br from-rose-900 to-pink-700 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Médias</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
            Explorez notre univers sonore et visuel à travers nos créations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Audio</h3>
              <p className="opacity-80">Enregistrements et créations sonores</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Vidéo</h3>
              <p className="opacity-80">Captations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Photos</h3>
              <p className="opacity-80">Galerie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
