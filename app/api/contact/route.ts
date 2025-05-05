import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Namn, e-post och meddelande krävs" },
        { status: 400 }
      );
    }

    const smtpUser = process.env.MAIL_USER;
    const smtpPass = process.env.MAIL_PASS;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Send form to yourself
    await transporter.sendMail({
      from: `"Kontaktformulär" <${smtpUser}>`,
      to: smtpUser,
      subject: `Nytt meddelande från ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${
        phone || "Ej angivet"
      }\nMeddelande:\n${message}`,
    });

    // 2. Send confirmation to user
    await transporter.sendMail({
      from: `"Moreito" <${smtpUser}>`,
      to: email,
      subject: "Vi har tagit emot ditt meddelande",
      text: `Hej ${name},\n\nTack för att du kontaktade oss. Vi har tagit emot ditt meddelande och kommer att kontakta dig så snart som möjligt.\n\nVänliga hälsningar,\nMoreito`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
