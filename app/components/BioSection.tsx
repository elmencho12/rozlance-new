"use client";
import { useState } from "react";
export default function BioSection() {
  const [bio, setBio] = useState("Founder @ Rozlance - Rozgar Ka Naya Andaaz | Helping Pakistan find Rozi | Full Stack Developer");
  const [edit, setEdit] = useState(false);
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex justify-between"><h3 className="font-bold">About / Bio</h3><button onClick={() => setEdit(!edit)} className="text-[#0A66C2] text-sm">{edit? "Save" : "Edit"}</button></div>
      {edit? <textarea value={bio} onChange={e => setBio(e.target.value)} className="w-full border rounded p-2 mt-2 text-sm" rows={3} /> : <p className="text-sm mt-2 text-gray-700">{bio}</p>}
    </div>
  );
}