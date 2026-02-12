import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();


    console.log("CONTACT_FORM:", body);

    return NextResponse.json({ ok: true, message: "Received" });
  } catch (e) {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
