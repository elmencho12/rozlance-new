'use client';
import { useState, useEffect } from 'react';

const MOCK_USER = {
  name: "Ubaid Bin Mushtaq",
  headline: "Founder @ Rozlance | Rozgar Ka Naya Andaaz 🇵🇰",
  avatar: "UB",
  banner: "https://images.unsplash.com/photo-1557682224-33bb4a46bbde?w=600",
  views: 128,
  connections: 542,
  location: "Lahore, Pakistan"
};

function CreatePost({ onPost }) {
  const [content, setContent] = useState('');
  return (
    <div className="bg-[#111] border border-[#333] rounded-xl p-4 mb-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-[#00ff88] text-black flex items-center justify-center font-bold">UB</div>
        <button className="flex-1 text-left px-4 py-2.5 rounded-full bg-[#1a1a1a] border border-[#333] text-[#777] text-sm hover:bg-[#222]">
          Start a post, Ubaid...
        </button>
      </div>
      <div className="flex justify-between mt-4 pt-3 border-t border-[#222]">
        <button className="flex items-center gap-2 text-xs text-[#888] hover:text-white"><span>🖼️</span> Media</button>
        <button className="flex items-center gap-2 text-xs text-[#888] hover:text-white"><span>💼</span> Job</button>
        <button className="flex items-center gap-2 text-xs text-[#888] hover:text-white"><span>📝</span> Article</button>
        <button onClick={() => { if(content){ onPost(content); setContent(''); }}} className="px-4 py-1.5 bg-[#00ff88] text-black text-xs font-bold rounded-full">Post</button>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden mb-4">
      <div className="p-4 flex gap-3">
        <div className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-xs font-bold">{post.author[0]}</div>
        <div>
          <p className="text-[13px] font-semibold text-white">{post.author}</p>
          <p className="text-[11px] text-[#777]">{post.role} • 2h • 🌐</p>
        </div>
      </div>
      <p className="px-4 pb-3 text-[13px] leading-5 text-[#ccc]">{post.content}</p>
      {post.image && <div className="w-full h-[260px] bg-[#0a0a0a] border-y border-[#222] flex items-center justify-center text-[#333]">Post Image</div>}
      <div className="px-4 py-2 flex justify-between text-[11px] text-[#666] border-b border-[#222]">
        <span>👍 {post.likes} • 💬 {post.comments}</span><span>{post.reposts} reposts</span>
      </div>
      <div className="grid grid-cols-4 text-[12px]">
        {['👍 Like','💬 Comment','↗️ Repost','✉️ Send'].map(a => (
          <button key={a} className="py-3 text-[#777] hover:bg-[#1a1a1a] hover:text-white transition">{a}</button>
        ))}
      </div>
    </div>
  );
}

export default function FeedPage() {
  const [posts, setPosts] = useState([
    { author: "Ayesha Khan", role: "UI/UX @ Careem", content: "Just shipped Rozlance v2! Dark mode + full LinkedIn clone features. Alhamdulillah! 🚀 #Rozlance #PakistaniStartup", likes: 243, comments: 32, reposts: 12, image: true },
    { author: "Bilal Ahmed", role: "Founder @ Bazaar", content: "Proud of Ubaid and team. Rozgar ka naya andaaz is real. Pakistan needs more builders like this.", likes: 189, comments: 18, reposts: 7, image: false }
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1128px] mx-auto px-4 py-6 grid grid-cols-12 gap-5">
        {/* Left */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden sticky top-6">
            <div className="h-[56px] bg-gradient-to-r from-[#00ff88] to-[#00cc6a]" />
            <div className="px-4 pb-4 -mt-8">
              <div className="w-[68px] h-[68px] rounded-full bg-[#00ff88] border-4 border-[#111] flex items-center justify-center text-black font-black text-xl">UB</div>
              <h2 className="mt-3 font-bold text-[15px]">{MOCK_USER.name}</h2>
              <p className="text-[12px] text-[#888] mt-1 leading-4">{MOCK_USER.headline}</p>
              <div className="mt-4 border-t border-[#222] pt-3 space-y-2">
                <div className="flex justify-between text-[12px]"><span className="text-[#777]">Profile viewers</span><span className="text-[#00ff88] font-bold">128</span></div>
                <div className="flex justify-between text-[12px]"><span className="text-[#777]">Post impressions</span><span className="text-white">2.4k</span></div>
                <div className="flex justify-between text-[12px]"><span className="text-[#777]">Connections</span><span className="text-white">{MOCK_USER.connections}</span></div>
              </div>
              <div className="mt-4 bg-[#1a1a1a] border border-[#333] rounded-lg p-3">
                <p className="text-[11px] text-[#666]">🇵🇰 Lahore • Open to work</p>
                <p className="text-[11px] text-[#00ff88] mt-1">● #OpenToWork – Full Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="col-span-12 lg:col-span-6">
          <CreatePost onPost={(c) => setPosts([{ author: MOCK_USER.name, role: MOCK_USER.headline, content: c, likes: 0, comments: 0, reposts: 0, image: false }, ...posts])} />
          {posts.map((p,i) => <PostCard key={i} post={p} />)}
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#111] border border-[#333] rounded-xl p-4 sticky top-6">
            <h3 className="font-bold text-sm">Add to your feed</h3>
            <div className="mt-4 space-y-4">
              {[
                { n: "Rozlance Official", d: "Company • Internet" },
                { n: "Pakistan Tech", d: "Newsletter • 45k followers" }
              ].map(c => (
                <div key={c.n} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333]" />
                  <div className="flex-1">
                    <p className="text-[12px] font-semibold">{c.n}</p>
                    <p className="text-[11px] text-[#666]">{c.d}</p>
                    <button className="mt-2 px-3 py-1 rounded-full border border-[#333] text-[11px] hover:bg-white hover:text-black transition">+ Follow</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
              <p className="text-[11px] text-[#00ff88] font-medium">Rozlance Premium</p>
              <p className="text-[11px] text-[#aaa] mt-1">Try 1 month free – See who viewed your profile.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}