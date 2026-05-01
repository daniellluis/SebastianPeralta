"use client"

interface NavigationFooterProps {
  currentSection: "hero" | "gallery" | "music" | "videos" | "contact"
}

const SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "gallery", label: "Galería" },
  { id: "music", label: "Beats" },
  { id: "videos", label: "Videos" },
  { id: "contact", label: "Contacto" },
]

export function NavigationFooter({ currentSection }: NavigationFooterProps) {
  const currentIndex = SECTIONS.findIndex(s => s.id === currentSection)
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-background/80 backdrop-blur px-4 py-3 rounded-full border border-foreground/20">
      {/* Flecha Anterior */}
      {prevSection && (
        <button
          onClick={() => scrollToSection(prevSection.id)}
          className="text-foreground hover:opacity-60 transition-opacity"
          aria-label={`Ir a ${prevSection.label}`}
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ width: "clamp(1.5rem, 4vw, 2rem)", height: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Indicador de página */}
      <div className="flex items-center gap-2 px-2">
        <span className="text-xs uppercase font-mono text-muted-foreground tracking-wider">
          {String(currentIndex + 1).padStart(2, "0")} / {String(SECTIONS.length).padStart(2, "0")}
        </span>
      </div>

      {/* Flecha Siguiente */}
      {nextSection && (
        <button
          onClick={() => scrollToSection(nextSection.id)}
          className="text-foreground hover:opacity-60 transition-opacity"
          aria-label={`Ir a ${nextSection.label}`}
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ width: "clamp(1.5rem, 4vw, 2rem)", height: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
