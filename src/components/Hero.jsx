import React from 'react';
import BlogPreview from './BlogPreview';
import VideoPreview from './videoPreview';
import Achievements from './Achievements'; 
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { SiSharp, SiPython, SiReact, SiAngular, SiNodedotjs, SiMongodb, SiDocker, SiGit, SiGithub } from 'react-icons/si';
import { FaDatabase, FaBrain, FaCube, FaCloud } from 'react-icons/fa';  

export default function Hero() {
  // Tech stack data for the bottom ribbon
  const techs = [
    { name: 'C# / .NET', icon: <SiSharp className="text-purple-500" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Angular', icon: <SiAngular className="text-red-600" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'SQL Server', icon: <FaDatabase className="text-red-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { name: 'Azure', icon: <FaCloud className="text-blue-400" /> }, // Using Cloud icon for Azure
    { name: 'Git', icon: <SiGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'AI / LLMs', icon: <FaBrain className="text-pink-500" /> }, // New icon
    { name: 'Blockchain', icon: <FaCube className="text-blue-500" /> },
  ];

  return (
    <section className="relative w-full pt-32 pb-0 overflow-hidden bg-[#0B1120]">
      
      {/* Top glowing background effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* ================= LEFT SIDE: TEXT ================= */}
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10 lg:pl-8">
          
          <div className="flex items-center gap-2">
            <span className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 tracking-wide uppercase">
              ⚡ Terrific Solutions
            </span>
            <span className="text-2xl animate-wave origin-bottom-right inline-block">👋</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] tracking-tight">
            Senior <span className="text-blue-500">Full-Stack</span><br />
            Software Engineer
          </h1>
          
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mt-2">
            Building Scalable Solutions with Modern Technologies
          </h3>
          
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
            Experienced developer specializing in C#/.NET, Python, React.js, and cloud technologies. Passionate about creating innovative software solutions and turning ideas into reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <a href="#projects" className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer">
              🚀 View My Projects <FiArrowRight />
              </a>
            </button>
            <button className="flex items-center gap-2 border border-gray-500 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition-all">
              <a href="#contact" className="flex items-center justify-center gap-2 border border-gray-500 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition-all cursor-pointer">
              <FiMail /> Contact Me
              </a>
            </button>
          </div>
        </div>
        {/* ================= RIGHT SIDE: Video Animation ================= */}
        <div id="blog" className="relative w-full lg:w-1/2 h-[600px] flex items-center justify-center mt-16 lg:mt-0 lg:pr-8">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* The Wrapper */}
          {/* Added lg:ml-8 to ensure there is always a gap between the text and this card */}
          <div className="relative z-10 w-full lg:max-w-xl lg:ml-8">
            <VideoPreview className="w-full" />
          </div>  
      </div>
      </div>

      {/* ================= BOTTOM: TECH STACK RIBBON ================= */}
      <Achievements />

    </section>
  );
}