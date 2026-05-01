"use client"

import { useRef, useState, useEffect } from "react"

interface AnimatedTitleProps {
  text: string
  className?: string
}

export function AnimatedTitle({ text, className = "" }: AnimatedTitleProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <h2
      ref={ref}
      className={`font-display uppercase leading-none tracking-tighter ${className}`}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500"
          style={{
            transitionDelay: `${i * 55}ms`,
            transform: visible ? "translateX(0)" : "translateX(-50px)",
            opacity: visible ? 1 : 0,
          }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </h2>
  )
}
