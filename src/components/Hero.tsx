import React from 'react';
import { Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-6 md:px-12 pt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Hi, I'm
                </span>
                <br />
                <span className="inline-block mt-2 relative">
                  Sunku Giridhar Shanmukh
                  <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
                </span>
              </h1>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300">
                  Devops Engineer and Full Stack Developer 
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  I build exceptional digital experiences that are fast,
                  accessible, visually appealing, and responsive and depoly them in cloud. Let's create
                  something amazing together.
                </p>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/SUNKUSHANMUKH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <GitHub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sunku-giridhar-shanmukh-67514324a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:sunkushanmukh@gmail.com"
                    className="p-4 bg-gradient-to-br from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
                    aria-label="Email Me"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl transform scale-150 pointer-events-none"></div>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-3xl transform -rotate-6"></div>
              <img
                src="src/assests/Shanmukh-image.jpg"
                alt="Profile"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToAbout}
          className="animate-bounce p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown
            size={32}
            className="text-slate-700 dark:text-slate-300"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;