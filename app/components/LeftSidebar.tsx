"use client";
export default function LeftSidebar() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-[#0A66C2] to-[#10B981] rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">UB</div>
        <h3 className="mt-2 font-bold">Ubaid Bin Mushtaq</h3>
        <p className="text- text-gray-600">Founder @ Rozlance | Pakistan 🇵🇰</p>
        <p className="text- text-gray-500 mt-1">Rozgar Ka Naya Andaaz</p>
      </div>
      <div className="mt-4 border-t pt-3 text-">
        <p className="flex justify-between"><span>Profile views</span><span className="text-[#0A66C2] font-bold">128</span></p>
        <p className="flex justify-between mt-1"><span>Post impressions</span><span className="text-[#0A66C2] font-bold">1.2k</span></p>
      </div>
    </div>
  );
}