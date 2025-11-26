import type { Chef } from "@/app/types/dataConfig"
import Image from "next/image";
import AnimatedBorderCard from "../../(ui)/AnimatedBorderCard";

type EnfantProps = {
    data: Chef;
};

export default function Lechef({ data: _data }: EnfantProps) {
    // Utiliser modal si disponible, sinon portrait
    const imageSrc = _data.modal?.src || _data.portrait?.src;
    const imageAlt = _data.modal?.alt || _data.portrait?.alt || _data.nom;
    console.log(imageSrc)
    if (!imageSrc) {
        return null;
    }

    return (
        <main className="w-full max-w-full text-black">
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-full">

            <div className="w-full flex flex-col">
                <h2 className="section-title pb-6">Le chef</h2>
                <AnimatedBorderCard className="" sides={["top"]} animationDuration={0.3} delay={0.2}>
                    <div className="w-full" />
                </AnimatedBorderCard>
            </div>
            <div className="w-full flex justify-center py-8">

                <div
                    className="
          relative
          group
          mx-auto
          w-full           
          lg:w-[90vw]      
          max-w-6xl        
          aspect-[16/9]    
          rounded-xl
          overflow-hidden
        "
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 90vw, 100vw"
                    />

                    {/* Overlay avec gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Titre avec animation - centré au milieu */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2 className="text-[#ff1f57] text-center text-2xl md:text-4xl font-semibold tracking-tight">
                            {_data.prénom} {_data.nom}
                        </h2>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}