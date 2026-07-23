"use client"

import { AnimatedTitle } from "./animated-title"

// ============================================
// PLAYLISTS DE SPOTIFY - EDITA AQUI
// ============================================
const PLAYLISTS = [
  {
    title: "Rap y Música Urbana",
    id: "40ok2yYt8NsYQ6uxp2tfnb",
  },
  {
    title: "Bandas y Solistas",
    id: "1BnqfIUn0tZ85GO7wXbQNj",
  },
]

export function MusicPlayer() {
  return (
    <section id="music" className="relative min-h-[100svh] w-full flex items-center justify-center py-[clamp(2rem,6vh,6rem)] px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">
        <AnimatedTitle text="Producciones" className="text-foreground mb-8 md:mb-12" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PLAYLISTS.map((playlist) => (
            <div key={playlist.id} className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{playlist.title}</p>
              <div className="rounded-2xl overflow-hidden border border-foreground/10">
                <iframe
                  title={playlist.title}
                  src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
                  width="100%"
                  height="480"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
