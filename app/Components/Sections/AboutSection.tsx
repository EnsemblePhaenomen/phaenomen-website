export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            À propos
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            Découvrez l'univers de Phaenomen, un ensemble musical qui repousse les limites 
            de la création artistique contemporaine.
          </p>
        </div>
      </div>
    </section>
  );
}