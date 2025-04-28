import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Namn, e-post och meddelande krävs' }, { status: 400 });
    }

    // Använd miljövariabler för Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontaktformulär" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,  // skicka till dig själv
      subject: `Nytt meddelande från ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || 'Ej angivet'}\nMeddelande: ${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internt serverfel' }, { status: 500 });
  }
}
