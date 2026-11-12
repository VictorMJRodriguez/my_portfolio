import React from "react";
import { FiDownload } from 'react-icons/fi'; // Import the download icon
export default function Navbar(){
    return(
        <nav className="absolute top-0 w-full flex items-center justify-between px-6 py-6 md:px-12 z-50 bg-transparent">   
            {/* 1. Logo Area */}
            <div className="flex items-center gap-3 cursor-pointer">
                {/* Styled 'AL' logo placeholder (matching your screenshot) */}                
                <div className="text-3xl font-black italic tracking-tighter">
                <span className="text-blue-500">V</span>
                <span className="text-white">R</span>
                </div>
                <span className="text-white font-semibold text-xl hidden sm:block tracking-wide">
                    Victor Rodriguez
                </span>
            </div>
            {/* 2. CENTER: Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
                {/* Active Link (Home) */}
                <a href="#home" className="text-white border-b-2 border-blue-500 pb-1">
                Home
                </a>
                {/* Inactive Links */}
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                About
                </a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                Skills
                </a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                Projects
                </a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                Experience
                </a>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                Blog
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact
                </a>
            </div>
            {/* 3. RIGHT: Download Resume Button */}
            <div>
                <a 
                href="#resume" 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500 text-white text-sm font-medium hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                >
                <FiDownload className="text-lg" />
                <span>Download Resume</span>
                </a>
            </div>
        </nav>
    );
}