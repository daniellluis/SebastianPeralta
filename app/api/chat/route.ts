import Groq from "groq-sdk"
import { NextResponse } from "next/server"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

const SYSTEM_PROMPT = `Eres el asistente virtual de Sebastián Peralta, productor musical con más de 10 años de experiencia en música urbana.

Sobre Sebastián:
- Productor especializado en trap, reggaeton, música urbana y rock
- Ha trabajado en España, Uruguay y Argentina
- Produce beats personalizados, hace mezcla y master, y está abierto a colaboraciones

Tu rol:
- Responder preguntas sobre Sebastián y su trabajo de forma cercana y relajada
- Si alguien quiere contratar, comprar un beat o colaborar, invitarlos a usar el formulario de contacto o escribir por WhatsApp
- Ser conciso, no escribir respuestas largas
- Hablar en español, con tono urbano pero profesional
- No inventar información que no tengas`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ],
    max_tokens: 300,
  })

  const reply = completion.choices[0]?.message?.content ?? ""
  return NextResponse.json({ reply })
}
