import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/user";
import { hashPassword, generateToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstName, lastName, email, password } = await req.json();
    
    const existing = await User.findOne({ email });
    if (existing) return NextResponse.json({ error: "User already exists" }, { status: 400 });

    const hashed = await hashPassword(password);
    const user = await User.create({ firstName, lastName, email, password: hashed });
    const token = generateToken(user._id.toString());

    return NextResponse.json({ message: "Registered", token, user: { id: user._id, email: user.email, firstName } });
  } catch (e: any) {
    console.log("MONGO ERROR:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}