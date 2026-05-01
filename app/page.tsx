"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/landing/hero"
import { ImageCarousel } from "@/components/landing/image-carousel"
import { MusicPlayer } from "@/components/landing/music-player"
import { VideoReel } from "@/components/landing/video-reel"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { NavigationFooter } from "@/components/landing/navigation-footer"

export default function Home() {
  const [currentSection, setCurrentSection] = useState<"hero" | "gallery" | "music" | "videos" | "contact">("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "gallery", "music", "videos", "contact"]
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(sectionId as any)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <Hero />
        
        {/* Gallery Carousel */}
        <ImageCarousel />
        
        {/* Music Player */}
        <MusicPlayer />

        {/* Video Reel */}
        <VideoReel />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </main>

      {/* Floating Navigation Footer */}
      <NavigationFooter currentSection={currentSection} />
    </>
  )
}
