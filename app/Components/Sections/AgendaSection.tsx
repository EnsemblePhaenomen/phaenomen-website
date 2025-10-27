export default function AgendaSection() {
  return (
    <section 
      id="agenda" 
      className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-700 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Agenda
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
            Découvrez nos prochaines représentations et événements musicaux.
          </p>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">Concert inaugural</h3>
                <span className="text-purple-200 font-medium">À venir</span>
              </div>
              <p className="opacity-80">Première représentation de l'ensemble Phaenomen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">Résidence artistique</h3>
                <span className="text-purple-200 font-medium">En cours</span>
              </div>
              <p className="opacity-80">Création et développement de nouvelles œuvres</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}