"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w- mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text- text-[#0A66C2]">
          <span className="bg-[#0A66C2] text-white w-8 h-8 flex items-center justify-center rounded">R</span> Rozlance
        </Link>
        <div className="flex gap-3">
          <Link href="/login" className="text-sm font-semibold">Login</Link>
          <Link href="/register" className="bg-[#10B981] text-white px-4 py-1.5 rounded-full text-sm font-bold">Join Rozlance</Link>
        </div>
      </div>
    </header>
  );
}