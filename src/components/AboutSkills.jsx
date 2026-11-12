import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaCloud } from 'react-icons/fa';
import { 
  SiSharp, SiPython, SiReact, SiAngular, SiNodedotjs, 
  SiMongodb, SiDocker, SiGithub 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

export default function AboutSkills() {
  // Skills data for the right card
  const skills = [
    { name: 'C# / .NET', icon: <SiSharp className="text-purple-500 text-2xl" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-400 text-2xl" /> },
    { name: 'React.js', icon: <SiReact className="text-cyan-400 text-2xl" /> },
    { name: 'Angular', icon: <SiAngular className="text-red-600 text-2xl" /> },
    { name: 'SQL Server', icon: <FaDatabase className="text-red-500 text-2xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-2xl" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-2xl" /> },
    { name: 'Azure', icon: <FaCloud  className="text-blue-400 text-2xl" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500 text-2xl" /> },
    { name: 'CI / CD', icon: <SiGithub className="text-white text-2xl" /> }, // Placeholder for CI/CD
    { name: 'AI / LLMs', icon: <span className="text-2xl">🧠</span> }, // Emoji placeholder
    { name: 'Blockchain', icon: <span className="text-2xl">🟦</span> }, // Emoji placeholder
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
      
      {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT CARD: About Me */}
        <div id="about" className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm">
          
          {/* Title with vertical blue bar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">About Me</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-8 z-10 relative">
            I am a Full-Stack Software Engineer with over 10 years of experience in designing, developing, and maintaining robust web applications and enterprise systems. I enjoy solving complex problems, optimizing performance, and working with talented teams to build great products.
          </p>
          
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/50 text-white text-sm font-medium hover:bg-blue-500/10 transition-colors z-10 relative">
            Learn More About Me <FiArrowRight />
          </button>
        </div>

        {/* RIGHT CARD: My Key Skills */}
        <div id="skills" className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          
          {/* Title with vertical blue bar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-white">My Key Skills</h2>
          </div>

          {/* Skills Grid: 3 columns on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center gap-2 bg-[#0B1120]/80 border border-slate-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors cursor-default"
              >
                {skill.icon}
                <span className="text-xs text-gray-300 font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}