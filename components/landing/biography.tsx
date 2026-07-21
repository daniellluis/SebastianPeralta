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
              Sebastián Peralta es músico, compositor y productor musical uruguayo, con una amplia trayectoria en la producción, composición y dirección artística de proyectos de diversos géneros.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Como compositor ha participado en canciones y producciones de artistas y proyectos como Bajofondo, Santullo, Socio, AFC, DosTresCinco, Kung Fú Ombijam, Papina de Palma, Se Armó Kokoa, Soy Turista y Cuareim 1080, entre otros.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Se ha desempeñado como productor musical y arreglador en discos de artistas y bandas como No Te Va Gustar, Socio, La Santa, DosTresCinco, AFC, Kung Fú Ombijam, Se Armó Kokoa, Mateo Moreno, AliemRap, La Mala Lengua, Pepe Delay, UFA, Laura Chinelli, Inquilinos del Reggae e Ihara, entre otros.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              También ha trabajado en la preparación y dirección musical de espectáculos en vivo de Socio, DosTresCinco, AFC y Kung Fú Ombijam, participando en escenarios y festivales como Montevideo Rock, Semana de la Cerveza, así como en salas como La Trastienda Montevideo y la Sala Zavala Muniz del Teatro Solís.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Ha sido nominado en los Premios Graffiti en las categorías de Mejor Productor y Mejor Compositor. Además, obtuvo ocho Premios Graffiti al Mejor Álbum de Hip Hop junto a distintos proyectos, entre ellos DosTresCinco, AFC, Kung Fú Ombijam y AliemRap. También recibió el premio a Canción del Año en 2019 por &ldquo;Juanas&rdquo; de AFC y el premio a Mejor Single de Música Electrónica en 2024 por &ldquo;Sálvame Remix&rdquo;, de UFA junto a Paola Dalto.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              En su labor como productor e ingeniero de grabación ha trabajado con destacados artistas de la música uruguaya y rioplatense, entre ellos Jorge Serrano, Fernando Ruiz Díaz, Gustavo Cordera, Guillermo Peluffo, Ana Prada, Hugo Fattoruso, Rubén Rada, Julieta Rada, Fernando Cabrera, Roberto Musso, Jorge Nasser, Knak, Facundo Balta, Cuareim 1080 y numerosos referentes de la música uruguaya y de la región.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              En 2025 fue el responsable de la producción musical de la obra teatral No Nos Pasa Nada, de la Comedia Nacional, dirigida por Jimena Márquez. Estrenada en el Teatro Solís, la obra realizó una temporada de 21 funciones con localidades agotadas, consolidando una destacada incursión de Peralta en la producción musical para teatro.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-0 divide-y divide-foreground/10">
            {[
              { number: "8", label: "Premios Graffiti — Mejor Álbum de Hip Hop" },
              { number: "30+", label: "Artistas y bandas producidos" },
              { number: "21", label: "Funciones agotadas — No Nos Pasa Nada, Teatro Solís" },
              { number: "2019", label: "Canción del Año — “Juanas”, AFC" },
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
