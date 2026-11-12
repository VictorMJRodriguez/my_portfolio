import React from 'react';
import { FiArrowRight, FiClock } from 'react-icons/fi';

export default function BlogPreview() {
  // Sample blog posts
  const posts = [
    {
      title: "Architecting Scalable Systems with .NET",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      category: "Backend",
      link: "#", // Replace with your actual blog link later
    },
    {
      title: "Why I Switched to Vite for React",
      date: "Sep 28, 2024",
      readTime: "3 min read",
      category: "Frontend",
      link: "#",
    },
    {
      title: "Integrating LLMs into Enterprise Apps",
      date: "Sep 15, 2024",
      readTime: "7 min read",
      category: "AI",
      link: "#",
    }
  ];

  return (
    <div className="w-full max-w-md bg-[#0f172a]/80 border border-slate-700 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.15)] relative z-20">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📝</span>
          <h3 className="text-xl font-bold text-white">Latest Writing</h3>
        </div>
        <a href="#blog" className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors">
          View All <FiArrowRight />
        </a>
      </div>

      {/* Blog Post List */}
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <a 
            key={index} 
            href={post.link}
            className="group block p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{post.category}</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <FiClock />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors leading-tight mb-1">
              {post.title}
            </h4>
            
            <p className="text-xs text-gray-400">{post.date}</p>
          </a>
        ))}
      </div>

    </div>
  );
}