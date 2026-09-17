import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/user";
import { comparePassword, generateToken } from "@/lib/auth";
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const ok = await comparePassword(password, user.password);
    if (!ok) return NextResponse.json({ error: "Wrong password" }, { status: 401 });

    const token = generateToken(user._id.toString());
    return NextResponse.json({ token, user: { id: user._id, email: user.email, firstName: user.firstName } });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}