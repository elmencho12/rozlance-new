"use client";
import { useState } from "react";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState(""), [pass, setPass] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F2EE]">
      <div className="bg-white p-6 rounded-lg border w-full max-w-sm">
        <h1 className="text-2xl font-bold text-[#0A66C2]">Rozlance Login</h1>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border rounded p-2 mt-4 text-sm" />
        <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="Password" className="w-full border rounded p-2 mt-2 text-sm" />
        <button className="w-full bg-[#0A66C2] text-white rounded-full py-2 mt-4 font-bold">Login</button>
        <p className="text-sm mt-3 text-center">No account? <Link href="/register" className="text-[#0A66C2] font-bold">Join Rozlance</Link></p>
      </div>
    </div>
  );
}