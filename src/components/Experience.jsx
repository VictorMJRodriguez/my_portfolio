import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Senior Full-Stack Software Engineer",
      company: "Anchorstacktech",
      logo: "/logos/Anchorstacktech logo.png", // Add your logo path here
      date: "1/2024 - 6/2026",
      description: "Architected scalable applications with Python, React, and AWS Lambda, cutting average API response time from 1.8s to 650ms and improving platform stability. Modernized legacy services using Django, PostgreSQL, and AWS RDS, reducing production errors from 14% to 4% while supporting higher transaction volumes. ",
    },
    {
      role: "Software Engineer",
      company: "Exomindset",
      logo: "/logos/exomindest.png", // Add your logo path here
      date: "2/2022 - 12/2023",
      description: "Built web applications with JavaScript, TypeScript, and React, reducing frontend defects from 18% to 6%. Automated deployments with Docker, GitHub Actions, and AWS ECS, cutting deployment time from 45 to 12 minutes.",
    },
    {
      role: "Software Engineer",
      company: "NIC",
      logo: "/logos/nic.png", // Add your logo path here
      date: "8/2021 - 1/2022",
      description: "Delivered full-stack platforms with Python, JavaScript, and React, reducing average feature delivery time from 15 to 9 days through reusable architecture. Improved backend performance using Python, Django REST Framework, and PostgreSQL, reducing complex query latency from 2.4s to 800ms. ",
    },
    {
      role: "Web Developer, Internship",
      company: "OBT IT Services",
      logo: "/logos/obt.png", // Add your logo path here
      date: "7/2018 - 10/2020",
      description: "Assisted in developing web features with JavaScript, React, and Jest, helping reduce reported frontend defects from 15% to 8% across assigned modules. Tested application components using Jest, React Testing Library, and JavaScript, increasing test coverage from 55% to 78% for maintained frontend features.",
    }
  ];

  return (
    <section id="experience" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 -translate-x-1/2 w-6 h-6 bg-[#0f172a] border-2 border-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>

            {/* Experience Card */}
            <div className="bg-[#0f172a]/60 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  
                  {/* Company Name & Logo Flex Container */}
                  <div className="flex items-center gap-2 mt-1">
                    {exp.logo && (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-5 h-5 object-contain rounded-sm" 
                      />
                    )}
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                {/* Date Badge */}
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-slate-800/50 px-3 py-1.5 rounded-full w-fit">
                  <span>📅</span>
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {exp.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}