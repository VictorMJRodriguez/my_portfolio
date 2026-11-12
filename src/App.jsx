import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects'; 
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    // The dark background color matches the screenshot
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />
      <Hero /> 
      <AboutSkills />   
      <Projects /> 
      <Footer />    
    </div>
  );
}

export default App
