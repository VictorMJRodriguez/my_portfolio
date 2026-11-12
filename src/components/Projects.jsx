import React, { useState } from 'react';
import { FiArrowRight, FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  // State to control the "View All" modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Your main 3 projects (shown on the homepage)
  const featuredProjects = [
    {
      title: "Enterprise Inventory System",
      description: "A scalable inventory management platform with real-time analytics.",
      tags: [".NET", "React", "SQL Server"],
      image: "/project1.png", 
      link: "https://www.optiproerp.com/",
    },
    {
      title: "Digital E-Invoicing Platform",
      description: "Automated e-invoicing solution for multi-company retail platforms.",
      tags: ["C#", "Angular", "Azure"],
      image: "/project2.png",
      link: "https://www.avalara.com/us/en/index.html",
    },
    {
      title: "AI-Powered Document Analyzer",
      description: "Intelligent document processing using Python and LLMs.",
      tags: ["Python", "FastAPI", "MongoDB"],
      image: "/project3.png",
      link: "https://www.docuzer.com/",
    }
  ];

  // 2. The extra projects (shown only in the modal)
  const allOtherProjects = [
    {
      title: "Cloud VPN Gateway",
      description: "Secure multi-region VPN infrastructure using AWS and Terraform.",
      tags: ["AWS", "Terraform", "Go"],
      image: "/project4.png",
      link: "https://www07.beijerelectronics.com/",
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting application ensuring transparency and immutability.",
      tags: ["Solidity", "Ethereum", "React"],
      image: "/project5.png",
      link: "https://chain.link/",
    },
    {
      title: "E-Commerce Microservices",
      description: "High-traffic backend architecture using Node.js and RabbitMQ.",
      tags: ["Node.js", "Docker", "PostgreSQL"],
      image: "/project6.png",
      link: "https://www.spurtcommerce.com/",
    },
    {
      title: "Task Management API",
      description: "RESTful API with JWT authentication and role-based access control.",
      tags: ["C#", "ASP.NET Core", "SQL Server"],
      image: "/project7.png",
      link: "https://www.aurinko.io/",
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat app supporting rooms and direct messaging.",
      tags: ["React", "Socket.io", "Express"],
      image: "/project8.png",
      link: "https://www.vonage.com/",
    }
  ];

  // Component to render a single project card (reused in main page and modal)
  const ProjectCard = ({ project }) => (
    <div className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/50 hover:bg-[#0f172a] transition-all duration-300 group h-full">
      
      {/* Top Section: Image & Text */}
      <div className="flex flex-col sm:flex-row gap-5 mb-4">
        {/* Project Image */}
        <div className="w-full sm:w-2/5 h-32 rounded-xl overflow-hidden bg-[#0B1120] border border-slate-800 flex-shrink-0 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.src = "https://placehold.co/600x400/0f172a/3b82f6?text=Project"; }}
          />
        </div>

        {/* Project Details */}
        <div className="flex flex-col justify-center flex-grow">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-snug line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Tags & Link */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-slate-800/50">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="px-2.5 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* The Link Button */}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-white transition-colors cursor-pointer"
        >
          View Project <FiArrowRight className="text-lg" />
        </a>

      </div>
    </div>
  );


  return (
    <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-7 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>
        
        {/* THE BUTTON: Opens the Modal */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
        >
          View All Projects <FiArrowRight />
        </button>
      </div>

      {/* Main Grid (Shows only the 3 featured projects) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* ================= ALL PROJECTS MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          
          <div className="bg-[#0B1120] border border-slate-700 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-all z-10"
            >
              <FiX className="text-xl" />
            </button>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">All Projects</h2>
            </div>
            
            {/* Grid for all 8 projects inside the modal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Combine both arrays for the full list */}
              {[...featuredProjects, ...allOtherProjects].map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Close Projects
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}