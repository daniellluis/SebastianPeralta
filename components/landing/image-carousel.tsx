"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { AnimatedTitle } from "./animated-title"

// ============================================
// IMAGENES DEL CARRUSEL - EDITA AQUI
// ============================================
const GALLERY_IMAGES = [
  { src: "/images/1.jpg", alt: "Sebastian Peralta" },
  // { src: "/images/2.jpg", alt: "Sebastian Peralta" }, // quitada
  { src: "/images/3.jpg", alt: "Sebastian Peralta" },
  { src: "/images/4.jpg", alt: "Sebastian Peralta" },
  { src: "/images/5.webp", alt: "Sebastian Peralta" },
  // { src: "/images/6.jpeg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/7.jpeg", alt: "Sebastian Peralta" }, // quitada
  { src: "/images/8.jpg", alt: "Sebastian Peralta" },
  { src: "/images/9.jpg", alt: "Sebastian Peralta" },
  { src: "/images/10.JPG", alt: "Sebastian Peralta" },
  { src: "/images/11.jpg", alt: "Sebastian Peralta" },
  // { src: "/images/12.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/13.jpg", alt: "Sebastian Peralta" }, // quitada
  { src: "/images/14.webp", alt: "Sebastian Peralta", position: "50% 35%" },
  { src: "/images/15.jpg", alt: "Sebastian Peralta" },
  // { src: "/images/16.jpeg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/17.jpeg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/18.jpg", alt: "Sebastian Peralta" }, // quitada
  { src: "/images/19.jpg", alt: "Sebastian Peralta" },
  // { src: "/images/20.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/21.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/22.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/23.jpg", alt: "Sebastian Peralta" }, // quitada
  { src: "/images/24.jpg", alt: "Sebastian Peralta" },
  // { src: "/images/25.jpeg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/26.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/27.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/28.jpg", alt: "Sebastian Peralta" }, // quitada
  // { src: "/images/29.jpg", alt: "Sebastian Peralta" }, // quitada
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    nextSlide()
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section id="gallery" className="relative min-h-[100svh] w-full flex items-center justify-center py-[clamp(2rem,6vh,4rem)] px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <AnimatedTitle text="Galería" className="text-foreground" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />
          <span className="text-muted-foreground font-mono text-sm mb-2">
            {String(currentIndex + 1).padStart(2, "0")} / {String(GALLERY_IMAGES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-[10px]" style={{ height: "min(60vh, 44vw)" }}>
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                style={image.position ? { objectPosition: image.position } : undefined}
              />
            </div>
          ))}

          {/* Gradientes laterales */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Flechas laterales */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-foreground animate-bounce hover:opacity-60 transition-opacity"
            style={{ animationDirection: "alternate", animationDuration: "900ms" }}
            aria-label="Imagen anterior"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "clamp(2rem, 5vw, 3rem)", height: "clamp(2rem, 5vw, 3rem)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-foreground animate-bounce hover:opacity-60 transition-opacity"
            style={{ animationDirection: "alternate", animationDuration: "900ms" }}
            aria-label="Imagen siguiente"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "clamp(2rem, 5vw, 3rem)", height: "clamp(2rem, 5vw, 3rem)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Barra de progreso + contador */}
        <div className="flex items-center gap-4 mt-5">
          <div className="flex-1 h-[2px] bg-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-foreground transition-all duration-700"
              style={{ width: `${((currentIndex + 1) / GALLERY_IMAGES.length) * 100}%` }}
            />
          </div>
          <span className="text-muted-foreground font-mono text-sm shrink-0">
            {String(currentIndex + 1).padStart(2, "0")} / {String(GALLERY_IMAGES.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  )
}
