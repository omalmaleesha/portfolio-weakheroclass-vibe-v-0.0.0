import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './experience.css';
import './hero.css';

const experiences = [
  {
    role: 'Trainee Software Engineer',
    duration: '7 Months',
    status: 'completed',
    description:
      'Learned the fundamentals of real-world software development. Worked on bug fixes, code reviews, and feature implementations under senior guidance.',
    details: [
      'Fixed critical production bugs and participated in code reviews',
      'Implemented UI components using React and Tailwind CSS',
      'Wrote unit tests and improved code coverage by 20%',
      'Collaborated with senior engineers in agile sprints',
      'Gained hands-on experience with Git, CI/CD pipelines',
    ],
    icon: <FaBriefcase />,
  },
  {
    role: 'Associate Software Engineer',
    duration: '6 Months',
    status: 'completed',
    description:
      'Took ownership of modules and delivered production-ready features. Collaborated across teams to ship scalable, maintainable solutions.',
    details: [
      'Led development of key feature modules end-to-end',
      'Designed and built RESTful APIs with Spring Boot',
      'Optimized database queries reducing load time by 35%',
      'Mentored new trainees during onboarding process',
      'Deployed microservices to cloud infrastructure',
    ],
    icon: <FaBriefcase />,
  },
  {
    role: 'Finding the Best Next Challenge',
    duration: 'Present',
    status: 'active',
    description:
      'Open to opportunities where I can grow, contribute, and build something meaningful. Ready for the next chapter.',
    details: [
      'Exploring full-stack and cloud-native roles',
      'Building personal projects to sharpen skills',
      'Contributing to open-source communities',
      'Networking and learning from industry leaders',
      'Ready to take on impactful challenges',
    ],
    icon: <FaSearch />,
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="relative bg-slate-950 text-white h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}experincebackground.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark teal overlay — same cold WHC vibe */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60 z-0"></div>

      {/* Person cutout — same layered effect as Hero, hidden on small screens */}
      <img 
        src={`${import.meta.env.BASE_URL}experincebackgroundremoved.png`}
        alt="Experience" 
        className="exp-person-cutout absolute inset-0 w-full h-full object-cover object-center z-20 pointer-events-none select-none hidden sm:block"
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 flex flex-col h-screen">

        {/* --- HEADER (same as Hero) --- */}
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
                  <Link to={item.path} className={`relative py-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-red-500 after:transition-all after:duration-300 ${
                    item.label === 'Experience'
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
          <div className="max-w-2xl w-full">

            {/* Section heading */}
            <div className="mb-6 sm:mb-10">
              <div className="exp-reveal exp-reveal-1 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="block w-8 sm:w-10 h-[2px] bg-red-500"></span>
                <span className="text-red-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                  Career Path
                </span>
              </div>
              <h2 className="exp-reveal exp-reveal-2 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
                <span className="text-cyan-100/90">MY </span>
                <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                  EXPERIENCE
                </span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent"></div>

              <div className="space-y-2 sm:space-y-3">
                {experiences.map((exp, index) => {
                  const isExpanded = expandedIndex === index;
                  const isCollapsed = expandedIndex !== null && expandedIndex !== index;

                  return (
                    <div
                      key={index}
                      className={`exp-reveal exp-reveal-${index + 3} relative flex gap-3 sm:gap-5 items-start cursor-pointer transition-all duration-500 ease-in-out ${
                        isCollapsed ? 'opacity-40 scale-[0.97]' : 'opacity-100 scale-100'
                      }`}
                      onClick={() => toggleExpand(index)}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm border transition-all duration-500 ${
                          exp.status === 'active'
                            ? 'bg-red-600/20 border-red-500/50 text-red-400 timeline-pulse'
                            : isExpanded
                              ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                              : 'bg-cyan-950/50 border-cyan-500/20 text-cyan-400/60'
                        }`}
                      >
                        {exp.icon}
                      </div>

                      {/* Card */}
                      <div
                        className={`flex-1 rounded-xl sm:rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                          isExpanded ? 'p-3 sm:p-4 md:p-5' : isCollapsed ? 'p-2 sm:p-2 md:p-3' : 'p-3 sm:p-4 md:p-5'
                        } ${
                          exp.status === 'active'
                            ? 'bg-red-950/10 border-red-500/15 hover:border-red-500/30'
                            : isExpanded
                              ? 'bg-cyan-950/15 border-cyan-500/25 shadow-lg shadow-cyan-900/10'
                              : 'bg-cyan-950/10 border-cyan-500/10 hover:border-cyan-500/20'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1">
                          <h3 className={`font-bold tracking-tight transition-all duration-500 ${
                            isCollapsed ? 'text-xs sm:text-sm' : 'text-sm sm:text-base md:text-lg'
                          } ${
                            exp.status === 'active' ? 'text-red-400' : 'text-cyan-100/80'
                          }`}>
                            {exp.role}
                          </h3>
                          <span
                            className={`text-xs font-medium tracking-[0.3em] uppercase px-3 py-1 rounded-full w-fit transition-all duration-500 ${
                              isCollapsed ? 'hidden' : 'block'
                            } ${
                              exp.status === 'active'
                                ? 'bg-red-500/10 text-red-400/70 border border-red-500/20'
                                : 'bg-cyan-500/5 text-cyan-300/40 border border-cyan-500/10'
                            }`}
                          >
                            {exp.duration}
                          </span>
                        </div>

                        {/* Description — hidden when collapsed */}
                        {!isCollapsed && (
                          <p className="text-xs sm:text-sm text-cyan-200/30 font-light leading-relaxed tracking-wide mb-1">
                            {exp.description}
                          </p>
                        )}

                        {/* Expanded details — bullet points */}
                        <div className={`exp-details-wrapper ${isExpanded ? 'exp-details-open' : 'exp-details-closed'}`}>
                          <ul className="space-y-1 sm:space-y-1.5 pt-2 border-t border-cyan-500/10">
                            {exp.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                                <span className={`mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  exp.status === 'active' ? 'bg-red-500/60' : 'bg-cyan-500/40'
                                }`}></span>
                                <span className="text-cyan-200/50 font-light tracking-wide">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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

export default Experience;
