"use client";
import { useState } from "react";
export default function Feed() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([{ id: 1, text: "Welcome to Rozlance - Rozgar Ka Naya Andaaz! 🇵🇰 Pakistan's Next Talent Network", author: "Ubaid Bin Mushtaq", time: "Just now" }]);
  const addPost = () => { if (!post.trim()) return; setPosts([{ id: Date.now(), text: post, author: "You", time: "Just now" },...posts]); setPost(""); };
  return (
    <div className="space-y-3">
      <div className="bg-white rounded-lg border p-3">
        <textarea value={post} onChange={e => setPost(e.target.value)} placeholder="Start a post - Rozlance pe kya chal raha hai?" className="w-full border rounded-full px-4 py-2 text-sm resize-none" rows={1} />
        <button onClick={addPost} className="mt-2 bg-[#0A66C2] text-white px-4 py-1 rounded-full text-sm font-bold">Post</button>
      </div>
      {posts.map(p => (
        <div key={p.id} className="bg-white rounded-lg border p-4">
          <p className="font-bold text-sm">{p.author} <span className="text-gray-400 font-normal text-">• {p.time}</span></p>
          <p className="text- mt-2">{p.text}</p>
        </div>
      ))}
    </div>
  );
}