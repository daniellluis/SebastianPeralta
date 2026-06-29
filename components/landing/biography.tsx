"use client"

import { AnimatedTitle } from "./animated-title"

export function Biography() {
  return (
    <section id="biography" className="relative min-h-[100svh] w-full flex items-center justify-center py-24 pb-32 px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">

        <AnimatedTitle text="Biografía" className="text-foreground mb-16" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Texto principal */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Sebastián Peralta es un productor musical con más de una década de trayectoria en la escena urbana latinoamericana. Nacido en Uruguay, su pasión por la música lo llevó a forjar su camino entre estudios de grabación en Montevideo, Madrid y Buenos Aires.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Desde sus inicios en el trap y el reggaeton, Seba desarrolló un sonido propio que fusiona la intensidad del rap latino con melodías que trascienden fronteras. Su oído para los detalles y su obsesión por la calidad lo convirtieron en un referente para artistas emergentes y consagrados por igual.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              A lo largo de su carrera ha colaborado con artistas de España, Uruguay y Argentina, aportando su sello a producciones que suman millones de reproducciones. Su estudio es un espacio donde la creatividad no tiene límites y cada proyecto se trabaja con dedicación absoluta.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-0 divide-y divide-foreground/10">
            {[
              { number: "10+", label: "Años de experiencia" },
              { number: "3", label: "Países — España, Uruguay, Argentina" },
              { number: "500+", label: "Beats producidos" },
              { number: "50+", label: "Artistas colaborados" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 flex items-end justify-between">
                <span
                  className="font-display uppercase tracking-tighter text-foreground leading-none"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground text-right max-w-[50%]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
