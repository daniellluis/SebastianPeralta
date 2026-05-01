"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { AnimatedTitle } from "./animated-title"

// ============================================
// IMAGENES DEL CARRUSEL - EDITA AQUI
// ============================================
const GALLERY_IMAGES = [
  { src: "/images/hero-sebastian.jpg", alt: "Sebastian Peralta" },
  { src: "/images/gallery-1.jpg", alt: "Sebastian Peralta en el estudio" },
  { src: "/images/gallery-2.jpg", alt: "Tocando el AKAI MPK" },
  { src: "/images/gallery-3.jpg", alt: "Setup de monitores y DAW" },
  { src: "/images/gallery-4.jpg", alt: "Estudio completo con monitores" },
  { src: "/images/20251206_154820.jpg", alt: "Estudio" },
  { src: "/images/20251206_154849.jpg", alt: "Estudio" },
  { src: "/images/20251206_154924.jpg", alt: "Estudio" },
  { src: "/images/20251206_154933.jpg", alt: "Estudio" },
  { src: "/images/20251206_155338.jpg", alt: "Estudio" },
  { src: "/images/20251206_155557.jpg", alt: "Estudio" },
  { src: "/images/20251206_155827.jpg", alt: "Estudio" },
  { src: "/images/20251206_160439.jpg", alt: "Estudio" },
  { src: "/images/20251206_162303.jpg", alt: "Estudio" },
  { src: "/images/473426808_8904903752907936_1443398074034441067_n.jpg", alt: "Sebastian Peralta" },
  { src: "/images/504032805_9854238647974437_8018283924190847014_n.jpg", alt: "Sebastian Peralta" },
  { src: "/images/622182080_18084825950135294_6849992108727169855_n.jpg", alt: "Sebastian Peralta" },
  { src: "/images/653643197_18107677294634095_5337121724212476342_n.webp", alt: "Sebastian Peralta" },
  { src: "/images/669835240_18137129851512408_7559908685080292506_n.webp", alt: "Sebastian Peralta" },
  { src: "/images/8b7aefff-b4c5-46db-ab81-f4b4527ba491.jpg", alt: "Sebastian Peralta" },
  { src: "/images/DSC07747.jpg", alt: "Sebastian Peralta" },
  { src: "/images/DSC07751.jpg", alt: "Sebastian Peralta" },
  { src: "/images/DSC_6475-2.jpg", alt: "Sebastian Peralta" },
  { src: "/images/G0021035.JPG", alt: "Sebastian Peralta" },
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
    <section id="gallery" className="relative min-h-[100svh] w-full flex items-center justify-center py-16 px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <AnimatedTitle text="Galería" className="text-foreground" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />
          <span className="text-muted-foreground font-mono text-sm mb-2">
            {String(currentIndex + 1).padStart(2, "0")} / {String(GALLERY_IMAGES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]">
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
