"use client"

import { AnimatedTitle } from "./animated-title"

const VIDEOS = [
  { src: "/images/reel_4.mp4", title: "Reel 4" },
  { src: "/images/reel_5.mp4", title: "Reel 5" },
]

export function VideoReel() {
  return (
    <section id="videos" className="relative min-h-[100svh] py-24 px-4 pb-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedTitle text="Videos" className="text-5xl md:text-7xl text-foreground mb-16" />

        <div className="grid md:grid-cols-2 gap-6">
          {VIDEOS.map((video) => (
            <div key={video.src} className="border-[3px] border-foreground rounded-[10px] overflow-hidden">
              <video
                src={video.src}
                controls
                className="w-full aspect-video object-cover"
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground animate-bounce hover:opacity-60 transition-opacity"
        aria-label="Scroll hacia abajo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
