import React, { useState } from 'react';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { 
  SiSharp, SiPython, SiReact, SiAngular, SiNodedotjs, 
  SiMongodb, SiDocker, SiGithub 
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaCube, FaCloud } from 'react-icons/fa';

export default function AboutSkills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          
          {/* The Button that triggers the modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/50 text-white text-sm font-medium hover:bg-blue-500/10 transition-colors z-10 relative cursor-pointer"
          >
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
        {/* ================= MODAL (POP-UP) ================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            
            {/* Modal Content Box */}
            <div className="bg-[#0f172a] border border-slate-700 rounded-2xl max-w-2xl w-full p-8 relative shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              
              {/* Close Button (X) */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-all"
              >
                <FiX className="text-xl" />
              </button>

              <h2 className="text-3xl font-bold text-white mb-4">
                More About <span className="text-blue-500">Me</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Beyond writing code, I am a passionate problem solver with over a decade of experience across the full software development lifecycle. My expertise includes designing scalable backend architectures, database development, enterprise software engineering, and modern application development.
                </p>
                <p>
                  I have extensive experience with C#, .NET, ASP.NET, SQL Server, and MongoDB, alongside frontend technologies such as React and Angular. I also specialize in CAD and .NET integration, developing custom engineering applications, CAD automation solutions, API integrations, and software tools that improve engineering workflows and productivity.
                  My technical interests extend to Cloud Architecture using Microsoft Azure and AWS, as well as AI integration and intelligent automation.
                </p>
                <p>
                  Recently, I have been focusing on integrating Large Language Models (LLMs) into enterprise applications to streamline business workflows, automate complex processes, analyze technical documents, and extract valuable insights from large volumes of data.
                  I enjoy solving challenging technical problems and transforming complex business and engineering requirements into scalable, secure, and high-performance software solutions.
                </p>
              </div>

              {/* Modal Action Button */}
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
    </section>
  );
}