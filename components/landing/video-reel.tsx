"use client"

import { AnimatedTitle } from "./animated-title"

const VIDEOS = [
  { id: "reel-4", src: "https://res.cloudinary.com/dxjyijvt9/video/upload/v1777660116/reel_4_i5wyfi.mp4", title: "Reel 4" },
  { id: "reel-5", src: "https://res.cloudinary.com/dxjyijvt9/video/upload/v1777658267/reel_5_r47u24.mp4", title: "Reel 5" },
]

export function VideoReel() {
  return (
    <section id="videos" className="relative min-h-[100svh] w-full flex items-center justify-center py-24 px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">
        <AnimatedTitle text="Videos" className="text-foreground mb-16" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />

        <div className="grid md:grid-cols-2 gap-6">
          {VIDEOS.map((video) => (
            <div key={video.id} className="border-[3px] border-foreground rounded-[10px] overflow-hidden">
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

    </section>
  )
}
