import { Hero } from "@/components/landing/hero"
import { ImageCarousel } from "@/components/landing/image-carousel"
import { MusicPlayer } from "@/components/landing/music-player"
import { VideoReel } from "@/components/landing/video-reel"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
  )
}
