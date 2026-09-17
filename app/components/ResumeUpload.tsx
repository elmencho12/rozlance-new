"use client";
import { useState } from "react";
export default function ResumeUpload() {
  const [file, setFile] = useState<string>("");
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-bold">Resume / CV</h3>
      <input type="file" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files?.[0]?.name || "")} className="mt-2 text-sm" />
      {file && <p className="text-green-600 text-sm mt-2">✅ Uploaded: {file}</p>}
      <p className="text- text-gray-500 mt-2">PDF, DOC, DOCX - Max 5MB</p>
    </div>
  );
}