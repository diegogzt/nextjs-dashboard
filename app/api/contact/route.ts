import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_69Nwpit9_7DqvvDRoEhMsP6jQxc621KR4");
const TO_EMAIL = "tovard799@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios" },
      { status: 400 }
    );
  }
  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[Contacto] ${subject}`,
      replyTo: email,
      html: `<p><b>Nombre:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Mensaje:</b><br/>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });
    if (result.error) {
      return NextResponse.json(
        { error: "No se pudo enviar el correo" },
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: "No se pudo enviar el correo" },
      { status: 500 }
    );
  }
}
