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
        <a 
          href="mailto:hello@example.com" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] mb-12"
        >
          <FiMail className="text-xl" /> Say Hello
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
            <FiGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
            <FiLinkedin className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
            <FiTwitter className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm mt-8 border-t border-slate-800/50 pt-8 w-full max-w-sm">
          <p>© {new Date().getFullYear()} Ariel Lacsina. All rights reserved.</p>
          <p className="mt-2">Designed & Built by Ariel Lacsina</p>
        </div>
        
      </div>
    </footer>
  );
}