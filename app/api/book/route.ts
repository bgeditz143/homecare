import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // In a real application, you would:
    // 1. Send an email using an SMTP service (Gmail, SendGrid, etc.)
    // 2. Store the booking in a database
    // 3. Send confirmation emails to both client and customer

    // For now, we'll just log the booking request
    console.log("[v0] Booking Request Received:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending
    // In production, integrate with your SMTP service:
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});

    return NextResponse.json({
      success: true,
      message: "Booking request received successfully",
    })
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking request" }, { status: 500 })
  }
}
