"use client";
import { useState } from "react";
export default function Register() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      alert("✅ Rozlance mein welcome! MongoDB mein save ho gaya: " + data.user.email);
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F2EE]">
      <div className="bg-white p-6 rounded-lg border w-full max-w-sm">
        <h1 className="text-2xl font-bold text-[#10B981]">Join Rozlance</h1>
        <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} className="w-full border rounded p-2 mt-4 text-sm" />
        <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} className="w-full border rounded p-2 mt-2 text-sm" />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border rounded p-2 mt-2 text-sm" />
        <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border rounded p-2 mt-2 text-sm" />
        <button onClick={handleRegister} disabled={loading} className="w-full bg-[#10B981] text-white rounded-full py-2 mt-4 font-bold">{loading ? "Saving to MongoDB..." : "Agree & Join"}</button>
      </div>
    </div>
  );
}