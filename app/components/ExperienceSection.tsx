"use client";
import { useState } from "react";
export default function ExperienceSection() {
  const [exps] = useState([{ title: "Founder", company: "Rozlance", duration: "2024 - Present" }]);
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-bold">Experience</h3>
      {exps.map((e, i) => <div key={i} className="mt-3 border-t pt-2"><p className="font-bold text-sm">{e.title}</p><p className="text-sm">{e.company}</p><p className="text- text-gray-500">{e.duration}</p></div>)}
      <button className="mt-3 text-[#0A66C2] text-sm font-bold">+ Add Experience</button>
    </div>
  );
}