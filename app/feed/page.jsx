'use client';
import { useState, useEffect } from 'react';

const MOCK_USER = {
  name: "Ubaid Bin Mushtaq",
  headline: "Founder @ Rozlance | Rozgar Ka Naya Andaaz 🇵🇰",
  avatar: "UB",
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
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start a post, Ubaid..."
          className="flex-1 px-4 py-2.5 rounded-full bg-[#1a1a1a] border border-[#333] text-white text-sm outline-none focus:border-[#00ff88]"
        />
      </div>
      <div className="flex justify-between mt-4 pt-3 border-t border-[#222]">
        <button className="flex items-center gap-2 text-xs text-[#888] hover:text-white">🖼 Media</button>
        <button className="flex items-center gap-2 text-xs text-[#888] hover:text-white">💼 Job</button>
        <button className="flex items-center gap-2 text-xs text-[#888] hover:text-white">📝 Article</button>
        <button onClick={() => { if(content.trim()){ onPost(content); setContent(''); }}} className="px-5 py-1.5 bg-[#00ff88] text-black text-xs font-bold rounded-full hover:bg-[#00cc6a]">Post</button>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  const authorName = post.user?.name || post.author;
  const headline = post.user?.headline || post.role;
  return (
    <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden mb-4">
      <div className="p-4 flex gap-3">
        <div className="w-10 h-10 rounded-full bg-[#00ff88] text-black border border-[#333] flex items-center justify-center text-xs font-bold">{authorName?.[0]}</div>
        <div>
          <p className="text- font-semibold text-white">{authorName}</p>
          <p className="text- text-[#777]">{headline} • {new Date(post.createdAt).toLocaleDateString()} • 🌐</p>
        </div>
      </div>
      <p className="px-4 pb-3 text- leading-5 text-[#ccc]">{post.content}</p>
      {post.image && <img src={post.image} className="w-full max-h- object-cover border-y border-[#222]" alt="post" />}
      <div className="px-4 py-2 flex justify-between text- text-[#666] border-b border-[#222]">
        <span>👍 {post.likesCount || post.likes?.length || post.likes || 0} • 💬 {post.commentsCount || post.comments || 0}</span><span>{post.reposts?.length || post.reposts || 0} reposts</span>
      </div>
      <div className="grid grid-cols-4 text-">
        {['👍 Like','💬 Comment','↗ Repost','✉ Send'].map(a => (
          <button key={a} className="py-3 text-[#777] hover:bg-[#1a1a1a] hover:text-white transition">{a}</button>
        ))}
      </div>
    </div>
  );
}

export default function FeedPage() {
  const [posts, setPosts] = useState([
    { author: "Ayesha Khan", role: "UI/UX @ Careem", content: "Just shipped Rozlance v2! Dark mode + full LinkedIn clone features. Alhamdulillah! 🚀 #Rozlance #PakistaniStartup", likes: 243, comments: 32, reposts: 12, image: null },
  ]);

  // Real API se posts lao
  useEffect(() => {
    fetch('/api/posts')
     .then(r => r.json())
     .then(d => {
        if(d.posts && d.posts.length > 0) setPosts(d.posts);
      })
     .catch(() => {});
  }, []);

  const handlePost = async (content) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });
      const data = await res.json();
      if(res.ok) {
        setPosts([data.post,...posts]);
      }
    } catch(e) {
      // Agar API fail ho to mock se add karo (testing ke liye)
      setPosts([{ user: { name: MOCK_USER.name, headline: MOCK_USER.headline }, content, likesCount: 0, commentsCount: 0, reposts: [], createdAt: new Date() },...posts]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w- mx-auto px-4 py-6 grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden sticky top-6">
            <div className="h- bg-gradient-to-r from-[#00ff88] to-[#00cc6a]" />
            <div className="px-4 pb-4 -mt-8">
              <div className="w- h- rounded-full bg-[#00ff88] border-4 border-[#111] flex items-center justify-center text-black font-black text-xl">UB</div>
              <h2 className="mt-3 font-bold text-">{MOCK_USER.name}</h2>
              <p className="text- text-[#888] mt-1 leading-4">{MOCK_USER.headline}</p>
              <div className="mt-4 border-t border-[#222] pt-3 space-y-2">
                <div className="flex justify-between text-"><span className="text-[#777]">Profile viewers</span><span className="text-[#00ff88] font-bold">{MOCK_USER.views}</span></div>
                <div className="flex justify-between text-"><span className="text-[#777]">Post impressions</span><span className="text-white">2.4k</span></div>
                <div className="flex justify-between text-"><span className="text-[#777]">Connections</span><span className="text-white">{MOCK_USER.connections}</span></div>
              </div>
              <div className="mt-4 bg-[#1a1a1a] border border-[#333] rounded-lg p-3">
                <p className="text- text-[#666]">🇵🇰 Lahore • Open to work</p>
                <p className="text- text-[#00ff88] mt-1">● #OpenToWork – Full Stack</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <CreatePost onPost={handlePost} />
          {posts.map((p,i) => <PostCard key={p._id || i} post={p} />)}
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[#111] border border-[#333] rounded-xl p-4 sticky top-6">
            <h3 className="font-bold text-sm">Add to your feed</h3>
            <div className="mt-4 space-y-4">
              {[{ n: "Rozlance Official", d: "Company • Internet" },{ n: "Pakistan Tech", d: "Newsletter • 45k followers" }].map(c => (
                <div key={c.n} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333]" />
                  <div className="flex-1">
                    <p className="text- font-semibold">{c.n}</p>
                    <p className="text- text-[#666]">{c.d}</p>
                    <button className="mt-2 px-3 py-1 rounded-full border border-[#333] text- hover:bg-white hover:text-black transition">+ Follow</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
              <p className="text- text-[#00ff88] font-medium">Rozlance Premium</p>
              <p className="text- text-[#aaa] mt-1">Try 1 month free – See who viewed your profile.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}