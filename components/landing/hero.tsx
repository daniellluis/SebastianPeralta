"use client"

import { useRef, useState, useEffect } from "react"

// ============================================
// CONFIGURACION DEL PRODUCTOR - EDITA AQUI
// ============================================
const PRODUCER_CONFIG = {
  name: "SEBASTIAN PERALTA",
  tagline: "Beatmaker · Productor Musical",
  description: "Creando sonidos que definen el futuro del urban y trap latino",
  heroImage: "/images/hero-sebastian.jpg",
  logo: null, // Puedes agregar "/images/logo.png" si tienes un logo
}

// ============================================
// REDES SOCIALES - EDITA AQUI
// ============================================
const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://instagram.com/sebastianperalta", icon: "instagram" },
  { name: "X", url: "https://x.com/sebastianperalta", icon: "x" },
  { name: "Facebook", url: "https://facebook.com/sebastianperalta", icon: "facebook" },
  { name: "TikTok", url: "https://tiktok.com/@sebastianperalta", icon: "tiktok" },
  { name: "Apple Music", url: "https://music.apple.com/artist/sebastianperalta", icon: "applemusic" },
  { name: "Spotify", url: "https://open.spotify.com/artist/sebastianperalta", icon: "spotify" },
  { name: "YouTube", url: "https://youtube.com/@sebastianperalta", icon: "youtube" },
  { name: "Email", url: "mailto:contact@sebastianperalta.com", icon: "email" },
]

function SocialIcon({ icon }: { icon: string }) {
  const style = { width: "clamp(1.2rem, 2vw, 1.6rem)", height: "clamp(1.2rem, 2vw, 1.6rem)" }
  switch (icon) {
    case "instagram":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case "x":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    case "facebook":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    case "tiktok":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    case "applemusic":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.455-2.105-1.245-.38-.94.093-2.01 1.095-2.372.396-.143.81-.216 1.225-.27.45-.057.897-.11 1.345-.164.268-.033.474-.178.548-.447.025-.09.04-.18.04-.27V8.78c0-.353-.088-.424-.436-.357-.236.046-.472.09-.708.135l-4.176.795c-.2.04-.304.15-.322.35-.006.067-.01.134-.01.2v7.376c0 .4-.048.796-.216 1.166-.262.58-.703.96-1.3 1.16-.386.13-.787.2-1.194.232-.756.06-1.467-.068-2.07-.58-.606-.514-.823-1.18-.69-1.95.093-.53.38-.96.81-1.272.335-.243.71-.4 1.107-.5.303-.073.61-.122.917-.172l.853-.138c.418-.066.57-.232.58-.655V5.656c0-.235.03-.468.132-.686.15-.32.39-.51.723-.583l5.873-1.19c.296-.06.594-.12.893-.168.22-.036.373.08.374.307.003.53 0 1.06 0 1.59v5.188z"/>
        </svg>
      )
    case "spotify":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    case "youtube":
      return (
        <svg style={style} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    case "email":
      return (
        <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    default:
      return null
  }
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(videoRef.current.muted)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {})
    }
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/images/reel_3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Botón mute/unmute */}
      <button
        onClick={toggleMute}
        className="absolute top-5 right-5 z-20 p-2 border-[2px] border-foreground rounded-[10px] text-foreground hover:opacity-60 transition-opacity"
        aria-label={muted ? "Activar sonido" : "Silenciar"}
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M12 18.75V5.25m0 0L7.5 9H4.5A.75.75 0 003.75 9.75v4.5c0 .414.336.75.75.75H7.5l4.5 3.75z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Name */}
        <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-display text-foreground leading-none tracking-tighter uppercase">
          {PRODUCER_CONFIG.name}
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-foreground font-sans font-semibold mt-4">
          {PRODUCER_CONFIG.tagline}
        </p>

        {/* Listen Button - bordes redondeados pill como Pharrell */}
        <div className="mt-20">
          <button
            onClick={() => document.getElementById("music")?.scrollIntoView({ behavior: "smooth" })}
            className="border-[3px] border-foreground rounded-[10px] text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors"
            style={{ padding: "clamp(0.4rem, 0.8vw, 0.7rem) clamp(1.2rem, 2.5vw, 2rem)", fontSize: "clamp(0.8rem, 1vw, 1rem)" }}
          >
            Listen
          </button>
        </div>

        {/* Social Links Bar - con borde redondeado como Pharrell */}
        <div className="mt-8 inline-flex items-center border-[3px] border-foreground rounded-[10px] gap-4"
          style={{ padding: "clamp(0.4rem, 0.7vw, 0.6rem) clamp(0.8rem, 1.5vw, 1.2rem)" }}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label={social.name}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Flecha hacia abajo pulsante */}
      <button
        onClick={() => {
          const next = document.querySelector("section:nth-of-type(2)")
          next?.scrollIntoView({ behavior: "smooth" })
        }}
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
