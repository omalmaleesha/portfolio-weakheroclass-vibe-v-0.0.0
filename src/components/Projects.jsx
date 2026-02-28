import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava, FaNodeJs, FaDatabase, FaBars, FaTimes } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import './projects.css';
import './hero.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration, real-time inventory tracking, and admin dashboard.',
    tech: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    highlights: [
      'Built responsive UI with React & Tailwind CSS',
      'Implemented JWT authentication & role-based access',
      'Integrated Stripe payment gateway',
      'Real-time order tracking with WebSocket',
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with drag-and-drop boards, team assignments, and progress analytics.',
    tech: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'MySQL', icon: <FaDatabase /> },
    ],
    highlights: [
      'REST API with Spring Boot & Spring Security',
      'Drag-and-drop Kanban board interface',
      'Team collaboration with real-time updates',
      'Automated email notifications',
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Cinematic personal portfolio inspired by Weak Hero Class K-drama aesthetic with layered image effects.',
    tech: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
    highlights: [
      'Weak Hero Class inspired cold teal/red design',
      'Layered PNG cutout effects with CSS animations',
      'Fully responsive single-page sections',
      'Deployed on Firebase Hosting',
    ],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative bg-slate-950 text-white h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}projects.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay — heavy left fade for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50 z-0"></div>

      {/* Person cutout — layered on top of everything, hidden on small screens */}
      <div className="proj-person-cutout absolute inset-0 z-30 pointer-events-none hidden sm:block">
        <img
          src={`${import.meta.env.BASE_URL}projectsbackgroundremoves.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 flex flex-col h-screen">

        {/* --- HEADER --- */}
        <header className="header-cinematic flex items-center justify-between py-3 sm:py-5 px-4 sm:px-6 md:px-10 rounded-full mt-2 backdrop-blur-md bg-cyan-950/30 border border-cyan-500/10 shadow-lg shadow-black/30 relative z-50">
          <div className="text-base sm:text-lg md:text-xl font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase">
            <Link to="/">
              <span className="text-cyan-100">Omal</span>{' '}
              <span className="text-cyan-100/40">Maleesha</span>
            </Link>
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
                  <Link to={item.path} className={`relative py-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-red-500 after:transition-all after:duration-300 ${
                    item.label === 'Projects'
                      ? 'text-cyan-300 after:w-full'
                      : 'hover:text-cyan-300 after:w-0 hover:after:w-full'
                  }`}>
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

        {/* --- MAIN CONTENT --- */}
        <main className="flex-grow flex flex-col justify-center py-4 md:py-6">

          {/* Section heading */}
          <div className="mb-5 sm:mb-8">
            <div className="proj-reveal proj-reveal-1 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="block w-8 sm:w-10 h-[2px] bg-red-500"></span>
              <span className="text-red-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                What I've Built
              </span>
            </div>
            <h2 className="proj-reveal proj-reveal-2 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
              <span className="text-cyan-100/90">MY </span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
          </div>

          {/* Project cards grid — stacks on mobile, scrollable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl overflow-y-auto max-h-[55vh] sm:max-h-none sm:overflow-visible scrollbar-hide">
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              const isFaded = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <div
                  key={index}
                  className={`proj-reveal proj-reveal-${index + 3} project-card relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border backdrop-blur-sm cursor-pointer transition-all duration-500 ${
                    isHovered
                      ? 'bg-cyan-950/20 border-cyan-500/30 shadow-xl shadow-cyan-900/15 scale-[1.02]'
                      : isFaded
                        ? 'bg-cyan-950/5 border-cyan-500/5 opacity-40 scale-[0.97]'
                        : 'bg-cyan-950/10 border-cyan-500/10 hover:border-cyan-500/20'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Project number */}
                  <span className="text-cyan-500/10 text-4xl sm:text-6xl font-extrabold absolute top-3 right-4 leading-none pointer-events-none select-none">
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-cyan-100/80 mb-1 sm:mb-2 relative z-10">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm font-light leading-relaxed tracking-wide mb-2 sm:mb-3 transition-all duration-500 ${
                    isHovered ? 'text-cyan-200/50' : 'text-cyan-200/25'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-300/50">
                        <span className="text-cyan-400/40">{t.icon}</span>
                        {t.name}
                      </span>
                    ))}
                  </div>

                  {/* Expanded highlights — visible on hover */}
                  <div className={`project-highlights ${isHovered ? 'highlights-open' : 'highlights-closed'}`}>
                    <ul className="space-y-1.5 pt-3 border-t border-cyan-500/10">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0"></span>
                          <span className="text-cyan-200/40 font-light tracking-wide">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action links */}
                  <div className={`flex items-center gap-4 pt-3 transition-all duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-30'
                  }`}>
                    <a href={project.github} className="flex items-center gap-1.5 text-xs text-cyan-300/50 hover:text-cyan-300 transition-colors duration-300">
                      <FaGithub size={14} /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-1.5 text-xs text-red-400/50 hover:text-red-400 transition-colors duration-300">
                      <FaExternalLinkAlt size={12} /> Live
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* --- FOOTER --- */}
        <footer className="py-3 sm:py-4 border-t border-cyan-500/10 flex justify-between items-center text-xs sm:text-sm text-cyan-200/30">
          <div>© 2026 Omal Maleesha.</div>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
