import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: "5+ years",
      subtitle: "Full Stack & AI Engineering",
      description: "Enterprise applications and AI-enabled solutions across AI, finance, payroll, and enterprise systems.",
    },
    {
      title: "Teamwork",
      subtitle: "Engineering Leadership",
      description: "Led an eight-engineer team, coordinated technical execution, enforced standards, and reviewed code.",
    },
    {
      title: "Eureka AI",
      subtitle: "Enterprise AI Platform",
      description: "Built Python APIs and reusable LLM and agent orchestration services.",
    },
    {
      title: "8/2017 - 7/2021",
      subtitle: "Software Engineering",
      description: "Bachelor's degree from the Technological University of Peru in Lima, Peru.",
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-slate-400">Highlights from my engineering experience and education.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-slate-600 transition-colors duration-300"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-8">
                {/* Ribbon Icon SVG */}
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              {/* Text Content */}
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <h4 className="text-sm font-semibold text-white mb-3">{item.subtitle}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}