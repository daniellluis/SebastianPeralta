"use client"

import { useState, useRef, useEffect } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function Chatbox() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hola! Soy el asistente de Seba Peralta. ¿En qué te puedo ayudar?" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: "user", content: input.trim() }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages([...updated, { role: "assistant", content: data.reply }])
    } catch {
      setMessages([...updated, { role: "assistant", content: "Error al conectar. Intentá de nuevo." }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed z-50 flex flex-col overflow-hidden bg-background/40 backdrop-blur-xl border border-foreground/20 rounded-[10px] bottom-20 left-4 right-4 md:left-auto md:bottom-24 md:right-5 md:w-[22rem]" style={{ height: "580px" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/20">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Asistente</p>
              <p className="font-display uppercase tracking-tighter text-foreground text-lg leading-none">Seba Peralta</p>
            </div>
            <button onClick={() => { setOpen(false); setMessages([{ role: "assistant", content: "Hola! Soy el asistente de Seba Peralta. ¿En qué te puedo ayudar?" }]) }} className="text-foreground hover:opacity-50 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`text-sm max-w-[80%] px-4 py-2 rounded-[10px] ${
                    msg.role === "user"
                      ? "bg-foreground text-background"
                      : "border-[2px] border-foreground/20 text-foreground"
                  }`}
                >
                  {msg.content}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <p className="text-sm border-[2px] border-foreground/20 text-muted-foreground px-4 py-2 rounded-[10px]">...</p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-foreground/20 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Escribí tu mensaje..."
              className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-4 text-foreground hover:opacity-50 transition-opacity disabled:opacity-20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      {/* Mobile: círculo */}
      <button
        onClick={() => { if (open) { setOpen(false); setMessages([{ role: "assistant", content: "Hola! Soy el asistente de Seba Peralta. ¿En qué te puedo ayudar?" }]) } else { setOpen(true) } }}
        className="fixed bottom-5 right-4 z-50 w-[48px] h-[48px] border border-foreground/20 rounded-full bg-background/80 backdrop-blur text-foreground/70 hover:border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center md:hidden"
        aria-label="Abrir chat"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Desktop: botón con texto */}
      <button
        onClick={() => { if (open) { setOpen(false); setMessages([{ role: "assistant", content: "Hola! Soy el asistente de Seba Peralta. ¿En qué te puedo ayudar?" }]) } else { setOpen(true) } }}
        className="fixed bottom-5 right-5 z-50 hidden md:flex items-center gap-2 px-5 py-3 border-[2px] border-foreground/30 rounded-[10px] bg-background/80 backdrop-blur text-foreground/70 font-semibold hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
        aria-label="Abrir chat"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {open ? "Cerrar" : "Chat"}
      </button>
    </>
  )
}
