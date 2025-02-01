// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  // Here, you would typically send the email or save the data in a database.
  // For demonstration, we will log the form data.
  console.log("Form Data:", { email, subject, message });

  // Simulate a successful response after handling the data
  return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
}
