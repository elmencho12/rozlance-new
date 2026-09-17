import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F2EE]">
      <Header />
      <div className="max-w- mx-auto px-2 mt-2 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 text-[#0A66C2] text- p-2 rounded flex justify-between items-center flex-wrap gap-2">
        <span className="font-bold">🚀 ROZLANCE - Rozgar Ka Naya Andaaz 🇵🇰 | Founder: Ubaid Bin Mushtaq | Secure Mode Active 🔒</span>
        <div className="flex gap-2">
          <Link href="/profile/me" className="bg-white border border-[#0A66C2] px-3 py-1 rounded-full text- font-bold">Full Profile</Link>
          <Link href="/login" className="bg-[#0A66C2] text-white px-3 py-1 rounded-full text- font-bold">Login</Link>
          <Link href="/register" className="bg-[#10B981] text-white px-3 py-1 rounded-full text- font-bold">Join Rozlance</Link>
        </div>
      </div>
      <main className="max-w- mx-auto grid grid-cols-12 gap-4 mt-4 px-2">
        <div className="col-span-12 md:col-span-3"><LeftSidebar /></div>
        <div className="col-span-12 md:col-span-6"><Feed /></div>
        <div className="col-span-12 md:col-span-3"><RightSidebar /></div>
      </main>
    </div>
  );
}