import { NextResponse } from "next/server";
import { transporter, senderEmail, receiverEmail } from "../../../lib/mailConfig";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;
//     console.log("USER:", process.env.EMAIL_USER);
// console.log("PASS EXISTS:", !!process.env.EMAIL_PASSWORD);


    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: senderEmail,
      to: receiverEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { ok: true, message: "Message sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Mail Error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending email",
      },
      { status: 500 }
    );
  }
}
