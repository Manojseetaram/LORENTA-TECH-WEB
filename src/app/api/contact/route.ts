import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "All fields are required" }, 
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'abhirocks.benachigere2005@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p style="margin: 10px 0;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong>Phone:</strong> ${phone}
            </p>
            <p style="margin: 10px 0;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="margin: 10px 0;">
              <strong>Message:</strong>
            </p>
            <div style="background: white; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { ok: true, message: "Message sent successfully!" },
      { status: 200 }
    );
    
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json(
      { ok: false, message: "Failed to send message" }, 
      { status: 500 }
    );
  }
}