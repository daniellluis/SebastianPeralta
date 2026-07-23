"use client"

import { AnimatedTitle } from "./animated-title"

export function Biography() {
  return (
    <section id="biography" className="relative min-h-[100svh] w-full flex items-center justify-center py-[clamp(2rem,6vh,6rem)] px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">

        <AnimatedTitle text="Biografía" className="text-foreground mb-8 md:mb-12" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Texto principal */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              <strong className="font-bold text-foreground">Sebastián Peralta</strong> es músico, compositor y productor musical uruguayo, con una amplia trayectoria en la producción, composición y dirección artística de proyectos de diversos géneros.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Como compositor ha participado en canciones y producciones de artistas y proyectos como <span className="text-foreground">Bajofondo</span>, <span className="text-foreground">Santullo</span>, <span className="text-foreground">Socio</span>, <span className="text-foreground">AFC</span>, <span className="text-foreground">DosTresCinco</span>, <span className="text-foreground">Kung Fú Ombijam</span>, <span className="text-foreground">Papina de Palma</span>, <span className="text-foreground">Se Armó Kokoa</span>, <span className="text-foreground">Soy Turista</span> y <span className="text-foreground">Cuareim 1080</span>, entre otros.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Se ha desempeñado como productor musical y arreglador en discos de artistas y bandas como <span className="text-foreground">No Te Va Gustar</span>, <span className="text-foreground">Socio</span>, <span className="text-foreground">La Santa</span>, <span className="text-foreground">DosTresCinco</span>, <span className="text-foreground">AFC</span>, <span className="text-foreground">Kung Fú Ombijam</span>, <span className="text-foreground">Se Armó Kokoa</span>, <span className="text-foreground">Mateo Moreno</span>, <span className="text-foreground">AliemRap</span>, <span className="text-foreground">La Mala Lengua</span>, <span className="text-foreground">Pepe Delay</span>, <span className="text-foreground">UFA</span>, <span className="text-foreground">Laura Chinelli</span>, <span className="text-foreground">Inquilinos del Reggae</span> e <span className="text-foreground">Ihara</span>, entre otros.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              También ha trabajado en la preparación y dirección musical de espectáculos en vivo de <span className="text-foreground">Socio</span>, <span className="text-foreground">DosTresCinco</span>, <span className="text-foreground">AFC</span> y <span className="text-foreground">Kung Fú Ombijam</span>, participando en escenarios y festivales como Montevideo Rock, Semana de la Cerveza, así como en salas como <span className="text-foreground">La Trastienda Montevideo</span> y la <span className="text-foreground">Sala Zavala Muniz del Teatro Solís</span>.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Ha sido nominado en los <span className="text-foreground">Premios Graffiti</span> en las categorías de <span className="text-foreground">Mejor Productor</span> y <span className="text-foreground">Mejor Compositor</span>. Además, obtuvo <strong className="font-bold text-foreground">ocho Premios Graffiti al Mejor Álbum de Hip Hop</strong> junto a distintos proyectos, entre ellos <span className="text-foreground">DosTresCinco</span>, <span className="text-foreground">AFC</span>, <span className="text-foreground">Kung Fú Ombijam</span> y <span className="text-foreground">AliemRap</span>. También recibió el premio a <strong className="font-bold text-foreground">Canción del Año en 2019</strong> por &ldquo;<span className="text-foreground">Juanas</span>&rdquo; de <span className="text-foreground">AFC</span> y el premio a <strong className="font-bold text-foreground">Mejor Single de Música Electrónica en 2024</strong> por &ldquo;<span className="text-foreground">Sálvame Remix</span>&rdquo;, de <span className="text-foreground">UFA</span> junto a <span className="text-foreground">Paola Dalto</span>.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              A nivel internacional, el álbum <span className="text-foreground">El calor del pleno invierno</span> de <span className="text-foreground">No Te Va Gustar</span> recibió dos nominaciones a los <strong className="font-bold text-foreground">Premios Grammy Latinos en 2013</strong>, a Mejor Álbum de Rock y Mejor Canción de Rock por &ldquo;<span className="text-foreground">A las Nueve</span>&rdquo;. Asimismo, <span className="text-foreground">Bajofondo presenta Santullo</span> fue nominado a los <span className="text-foreground">Premios Gardel</span> de Argentina en 2010, en la categoría Mejor Álbum Rock Pop Alternativo.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              En su labor como productor e ingeniero de grabación ha trabajado con destacados artistas de la música uruguaya y rioplatense, entre ellos <span className="text-foreground">Jorge Serrano</span>, <span className="text-foreground">Fernando Ruiz Díaz</span>, <span className="text-foreground">Gustavo Cordera</span>, <span className="text-foreground">Guillermo Peluffo</span>, <span className="text-foreground">Ana Prada</span>, <span className="text-foreground">Hugo Fattoruso</span>, <span className="text-foreground">Rubén Rada</span>, <span className="text-foreground">Julieta Rada</span>, <span className="text-foreground">Fernando Cabrera</span>, <span className="text-foreground">Roberto Musso</span>, <span className="text-foreground">Jorge Nasser</span>, <span className="text-foreground">Knak</span>, <span className="text-foreground">Facundo Balta</span>, <span className="text-foreground">Cuareim 1080</span> y numerosos referentes de la música uruguaya y de la región.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              En 2025 fue el responsable de la producción musical de la obra teatral <span className="text-foreground">No Nos Pasa Nada</span>, de la <span className="text-foreground">Comedia Nacional</span>, dirigida por <span className="text-foreground">Jimena Márquez</span>. Estrenada en el <span className="text-foreground">Teatro Solís</span>, la obra realizó una temporada de <strong className="font-bold text-foreground">21 funciones con localidades agotadas</strong>, consolidando una destacada incursión de <span className="text-foreground">Peralta</span> en la producción musical para teatro.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-0 divide-y divide-foreground/10">
            {[
              { number: "30+", label: "Premios Graffiti ganados" },
              { number: "8", label: "Premios Graffiti — Mejor Álbum de Hip Hop" },
              { number: "40+", label: "Artistas y bandas producidas" },
              { number: "2", label: "Nominaciones al Grammy Latino 2013 — Mejor Álbum y Mejor Canción de Rock, No Te Va Gustar" },
              { number: "1", label: "Nominación a los Premios Gardel (Argentina) — Bajofondo presenta Santullo" },
              { number: "21", label: "Funciones agotadas — No Nos Pasa Nada, Teatro Solís" },
              { number: "2019", label: "Canción del Año — “Juanas”, AFC" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 flex items-end justify-between">
                <span
                  className="font-display uppercase tracking-tighter text-foreground leading-none inline-flex items-center gap-2"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  {stat.number}
                  {stat.icon && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "clamp(1.3rem, 2.8vw, 1.9rem)", height: "clamp(1.3rem, 2.8vw, 1.9rem)" }}
                      aria-hidden="true"
                    >
                      {/* Tapa */}
                      <rect x="9.6" y="1.2" width="3.6" height="1.6" rx="0.3" />
                      <circle cx="11.4" cy="2" r="0.35" fill="currentColor" stroke="none" />
                      {/* Boquilla */}
                      <path d="M10.4 2.8v1.4h2v-1.4" />
                      {/* Cuerpo de la lata (inclinada) */}
                      <path d="M9.6 4.6l7 3.2-2.8 12.6a1.4 1.4 0 01-1.7 1l-4.4-1a1.4 1.4 0 01-1-1.7z" />
                      <path d="M8 9.6l7.5 3.4" />
                      {/* Gotas */}
                      <path d="M9.2 15.6c-.2.6-.7 1-.5 1.6.15.45.65.6.95.25" />
                      <path d="M11.6 20.4c-.15.5-.55.85-.4 1.3.12.38.55.5.8.2" />
                      {/* Rocío */}
                      <circle cx="4.2" cy="4.6" r="0.35" fill="currentColor" stroke="none" />
                      <circle cx="2.6" cy="5.8" r="0.5" fill="currentColor" stroke="none" />
                      <circle cx="5.6" cy="6.6" r="0.25" fill="currentColor" stroke="none" />
                      <circle cx="1.2" cy="7.4" r="0.3" fill="currentColor" stroke="none" />
                      <circle cx="4.4" cy="8.2" r="0.4" fill="currentColor" stroke="none" />
                    </svg>
                  )}
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
