import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Inventory System",
      description: "A scalable inventory management platform with real-time analytics.",
      tags: [".NET", "React", "SQL Server"],
      image: "/Enterprise Inventory.png", // You can add these images to your /public folder later
    },
    {
      title: "Digital E-Invoicing Platform",
      description: "Automated e-invoicing solution for multi-company retail platforms.",
      tags: ["C#", "Angular", "Azure"],
      image: "/Digital-E Invoice.png",
    },
    {
      title: "AI-Powered Document Analyzer",
      description: "Intelligent document processing using Python and LLMs.",
      tags: ["Python", "FastAPI", "MongoDB"],
      image: "/AI-Power.png",
    }
  ];

  return (
    <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-7 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
          View All Projects <FiArrowRight />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 hover:border-blue-500/50 hover:bg-[#0f172a] transition-all duration-300 group cursor-pointer"
          >
            
            {/* Project Image Left Side */}
            <div className="w-full sm:w-2/5 h-32 rounded-xl overflow-hidden bg-[#0B1120] border border-slate-800 flex-shrink-0 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details Right Side */}
            <div className="flex flex-col justify-center flex-grow">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-snug mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2.5 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}