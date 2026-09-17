import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ 
      success: true, 
      message: "✅ MongoDB Connected! Ubaid Bhai Atlas live hai!" 
    });
  } catch (e: any) {
    console.log("DB Error:", e.message);
    return NextResponse.json({ 
      success: false, 
      error: e.message,
      hint: "Check .env.local MONGODB_URI and Network Access 0.0.0.0/0" 
    }, { status: 500 });
  }
}