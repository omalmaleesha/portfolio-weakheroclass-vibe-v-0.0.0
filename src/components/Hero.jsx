import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaBehance, FaDribbble, FaBars, FaTimes } from 'react-icons/fa';
import './hero.css';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // MAIN SECTION: Weak Hero Class — cold, desaturated, gritty
    <div 
      className="relative bg-slate-950 text-white h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. DARK TEAL OVERLAY: Stronger on mobile so text is readable over cutout */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/90 via-slate-950/85 to-slate-950/95 sm:from-cyan-950/80 sm:via-slate-950/70 sm:to-slate-950/90 z-0"></div>

      {/* PERSON CUTOUT — behind content on mobile, on top on desktop */}
      <img 
        src={`${import.meta.env.BASE_URL}backgroundperson.png`}
        alt="Profile" 
        className="person-cutout absolute inset-0 w-full h-full object-cover object-center z-5 sm:z-50 pointer-events-none select-none"
      />

      {/* Quote — hidden on mobile, shown on md+ */}
      <div className="hero-reveal hero-reveal-3 absolute top-15 right-10 md:right-30 z-40 max-w-xs text-right pointer-events-none select-none pt-[4.5rem] hidden md:block">
        <p className="text-cyan-200/30 text-6xl md:text-7xl font-serif leading-none mb-2">&ldquo;</p>
        <p className="text-cyan-100/50 text-sm md:text-base font-light italic tracking-wide leading-relaxed">
          For every action, there is an equal and opposite reaction
        </p>
        <p className="text-cyan-200/30 text-6xl md:text-7xl font-serif leading-none text-left mt-2">&rdquo;</p>
        <span className="block text-red-500/40 text-xs tracking-[0.3em] uppercase mt-3">— Weak Hero Class</span>
      </div>

      {/* 2. CONTENT WRAPPER */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 flex flex-col h-screen">
        
        {/* --- HEADER --- */}
        <header className="header-cinematic flex items-center justify-between py-3 sm:py-5 px-4 sm:px-6 md:px-10 rounded-full mt-2 backdrop-blur-md bg-cyan-950/30 border border-cyan-500/10 shadow-lg shadow-black/30 relative z-50">
          <div className="text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase">
            <span className="text-cyan-100">Omal</span>{' '}
            <span className="text-cyan-100/40">Maleesha</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-cyan-200/50">
              {[
                { label: 'Home', path: '/' },
                { label: 'Projects', path: '/projects' },
                { label: 'Experience', path: '/experience' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="relative py-1 hover:text-cyan-300 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-red-500 hover:after:w-full after:transition-all after:duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cyan-200/60 hover:text-cyan-300 transition-colors z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Mobile menu overlay */}
          {menuOpen && (
            <div className="mobile-menu-overlay absolute top-full right-0 mt-3 w-56 rounded-2xl backdrop-blur-xl bg-cyan-950/80 border border-cyan-500/15 shadow-2xl shadow-black/50 p-4 md:hidden z-50">
              <ul className="flex flex-col gap-4 text-sm font-medium tracking-[0.2em] uppercase text-cyan-200/60">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Projects', path: '/projects' },
                  { label: 'Experience', path: '/experience' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="block py-2 px-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* --- MAIN HERO CONTENT --- */}
        <main className="flex-grow flex flex-col justify-center py-4 md:py-6">
          
          <div className="max-w-2xl space-y-4 sm:space-y-5">

            {/* Decorative accent line + tagline */}
            <div className="hero-reveal hero-reveal-1 flex items-center gap-3 sm:gap-4">
              <span className="block w-8 sm:w-10 h-[2px] bg-red-500"></span>
              <span className="text-red-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                Software Engineer
              </span>
            </div>

            {/* Main name — cold teal cinematic tracking */}
            <h1 className="hero-reveal hero-reveal-2 leading-none">
              <span className="block text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-cyan-100/90">
                OMAL
              </span>
              <span className="block text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mt-1">
                MALEESHA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-reveal hero-reveal-3 text-sm sm:text-base md:text-xl text-cyan-200/40 font-light tracking-wide leading-relaxed max-w-lg">
              Analyze complex problems and design scalable, efficient solutions that meet performance and maintainability standards.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-reveal hero-reveal-4 flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="group relative bg-red-600 text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30 text-sm sm:text-base">
                <span className="relative z-10">RESUME</span>
              </button>
              <button className="bg-transparent border border-cyan-500/20 px-8 sm:px-10 py-2.5 sm:py-3 rounded-full font-medium tracking-wide text-cyan-200/60 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 text-sm sm:text-base">
                CONTACT ME
              </button>
            </div>

            {/* Contact strip */}
            <div className="hero-reveal hero-reveal-5 flex flex-wrap gap-x-10 gap-y-3 pt-3 sm:pt-4 mt-1 sm:mt-2">
              <div>
                <span className="text-cyan-300/25 text-[10px] sm:text-xs tracking-[0.3em] uppercase">Email</span>
                <p className="text-xs sm:text-sm text-red-400 mt-1">omalmaleesha03@gmail.com</p>
              </div>
            </div>

          </div>
        </main>

        {/* --- FOOTER: Social Icons --- */}
        <footer className="py-4 sm:py-6 border-t border-cyan-500/10 flex justify-between items-center text-xs sm:text-sm text-cyan-200/30">
          <div>© 2026 Omal Maleesha.</div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300"><FaLinkedinIn size={16} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300"><FaGithub size={16} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300"><FaBehance size={16} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300"><FaDribbble size={16} /></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HeroSection;