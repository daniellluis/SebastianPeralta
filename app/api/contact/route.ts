import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, projectType, message } = await req.json()

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    subject: `[Contacto] ${projectType} - ${name}`,
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo de proyecto:</strong> ${projectType}</p>
      <p><strong>Mensaje:</strong><br/>${message}</p>
    `,
  })

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
