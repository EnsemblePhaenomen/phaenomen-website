export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-emerald-900 to-teal-700 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Contact
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
            Entrez en contact avec nous pour vos projets musicaux et collaborations.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Direction artistique</h3>
              <p className="opacity-80">Noé Chapolard</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Informations</h3>
              <p className="opacity-80">contact@phaenomen.fr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}