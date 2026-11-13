import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0f172a]/80 border-t border-slate-800 mt-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="w-full mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center relative z-10">
        
        {/* Contact Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's Build Something <span className="text-blue-500">Great</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
          I'm currently open to find new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Button */}
        <a href="mailto:work.victormr@gmail.com"  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Let's stay connected.
        </a>

        <div className="hidden md:block w-px h-12 "></div>
        {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/VictorMJRodriguez/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
              <FiGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/v%C3%ADctor-rodriguez-8ba972280/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
              <FiLinkedin className="text-2xl" />
            </a>
          </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm mt-8 border-t border-slate-800/50 pt-8 w-full max-w-sm">
          <p>© {new Date().getFullYear()} Victor M. Rodriguez. All rights reserved.</p>
          <p className="mt-2">Designed & Built by Victor M. Rodriguez</p>
        </div>
        
      </div>
    </footer>
  );
}