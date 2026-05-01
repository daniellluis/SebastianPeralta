"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatedTitle } from "./animated-title"

// ============================================
// LISTA DE CANCIONES - EDITA AQUI
// ============================================
// Para usar canciones reales:
// 1. Agrega tus archivos .mp3 en /public/audio/
// 2. Actualiza el campo "src" con la ruta
const TRACKS = [
  {
    id: 1,
    title: "Noche de Verano",
    genre: "Reggaeton",
    duration: "3:24",
    bpm: 95,
    src: "/audio/track1.mp3", // Agrega tu archivo aqui
  },
  {
    id: 2,
    title: "Trap Latino",
    genre: "Trap",
    duration: "2:58",
    bpm: 140,
    src: "/audio/track2.mp3",
  },
  {
    id: 3,
    title: "Dembow Flow",
    genre: "Dembow",
    duration: "3:15",
    bpm: 118,
    src: "/audio/track3.mp3",
  },
  {
    id: 4,
    title: "Melodia Urbana",
    genre: "R&B",
    duration: "4:02",
    bpm: 85,
    src: "/audio/track4.mp3",
  },
  {
    id: 5,
    title: "Perreo Intenso",
    genre: "Reggaeton",
    duration: "3:45",
    bpm: 100,
    src: "/audio/track5.mp3",
  },
]

export function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [currentTime, setCurrentTime] = useState("0:00")
  const audioRef = useRef<HTMLAudioElement>(null)

  const track = TRACKS[currentTrack]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restriction
        console.log("[v0] Audio playback failed - user interaction required")
      })
    }
    setIsPlaying(!isPlaying)
  }

  const playTrack = (index: number) => {
    setCurrentTrack(index)
    setProgress(0)
    setCurrentTime("0:00")
    setIsPlaying(true)
    
    setTimeout(() => {
      audioRef.current?.play().catch(() => {})
    }, 100)
  }

  const nextTrack = () => {
    const next = (currentTrack + 1) % TRACKS.length
    playTrack(next)
  }

  const prevTrack = () => {
    const prev = (currentTrack - 1 + TRACKS.length) % TRACKS.length
    playTrack(prev)
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    const { currentTime: time, duration } = audioRef.current
    if (duration) {
      setProgress((time / duration) * 100)
      const mins = Math.floor(time / 60)
      const secs = Math.floor(time % 60)
      setCurrentTime(`${mins}:${secs.toString().padStart(2, "0")}`)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audioRef.current.currentTime = percent * audioRef.current.duration
  }

  const handleTrackEnd = () => {
    nextTrack()
  }

  return (
    <section id="music" className="relative min-h-[100svh] w-full flex items-center justify-center py-24 px-[clamp(1.5rem,7vw,6rem)]">
      <div className="max-w-[82vw] lg:max-w-[78vw] mx-auto w-full">
        {/* Contenido del reproductor de música */}
        <AnimatedTitle text="Mis Beats" className="text-foreground mb-16" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }} />

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={track.src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleTrackEnd}
        />

        {/* Now Playing */}
        <div className="mb-12">
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Reproduciendo</p>
              <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tighter text-foreground">{track.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{track.genre} · {track.bpm} BPM</p>
            </div>
            <span className="text-muted-foreground font-mono text-sm mb-1">{currentTime} / {track.duration}</span>
          </div>

          {/* Progress Bar */}
          <div
            className="h-[2px] bg-foreground/10 rounded-full cursor-pointer mt-4 mb-6"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-foreground rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button onClick={prevTrack} className="text-foreground hover:opacity-50 transition-opacity" aria-label="Anterior">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            <button
              onClick={togglePlay}
              className="px-8 py-3 border-[3px] border-foreground rounded-[10px] text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors flex items-center gap-3"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                  Pausar
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  Play
                </>
              )}
            </button>

            <button onClick={nextTrack} className="text-foreground hover:opacity-50 transition-opacity" aria-label="Siguiente">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2 ml-auto">
              <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
              <input
                type="range" min="0" max="1" step="0.01" value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 accent-foreground"
              />
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Playlist</p>
          <ul className="divide-y divide-foreground/10">
            {TRACKS.map((t, index) => (
              <li key={t.id}>
                <button
                  onClick={() => playTrack(index)}
                  className={`w-full py-4 flex items-center gap-4 hover:opacity-60 transition-opacity ${index === currentTrack ? "opacity-100" : "opacity-50"}`}
                >
                  <span className="w-8 font-mono text-sm text-left">
                    {index === currentTrack && isPlaying ? (
                      <span className="flex gap-0.5 items-end h-4">
                        <span className="w-1 h-4 bg-foreground animate-pulse" />
                        <span className="w-1 h-3 bg-foreground animate-pulse delay-75" />
                        <span className="w-1 h-4 bg-foreground animate-pulse delay-150" />
                      </span>
                    ) : (
                      String(index + 1).padStart(2, "0")
                    )}
                  </span>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-foreground">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.genre}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{t.bpm} BPM</span>
                  <span className="font-mono text-sm text-muted-foreground w-12 text-right">{t.duration}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
