"use client";
import { useState } from "react";
export default function SkillsSection() {
  const [skills, setSkills] = useState(["Next.js", "React", "Node.js", "Pakistan Market"]);
  const [input, setInput] = useState("");
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-bold">Skills</h3>
      <div className="flex flex-wrap gap-2 mt-2">{skills.map((s, i) => <span key={i} className="bg-[#E8F0FE] text-[#0A66C2] px-3 py-1 rounded-full text-">{s}</span>)}</div>
      <div className="flex gap-2 mt-3"><input value={input} onChange={e => setInput(e.target.value)} placeholder="Add skill" className="border rounded px-2 py-1 text-sm flex-1" /><button onClick={() => { if (input) { setSkills([...skills, input]); setInput(""); } }} className="bg-[#0A66C2] text-white px-3 rounded text-sm">Add</button></div>
    </div>
  );
}