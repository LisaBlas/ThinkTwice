import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Footer from './Footer';

const ModuleLayout = ({ moduleId, moduleTitle, children }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const [modulesExpanded, setModulesExpanded] = useState(false);
  const [quickNavExpanded, setQuickNavExpanded] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    { id: 1, title: 'Understand Core Concepts', available: true, link: '/module/1' },
    { id: 2, title: 'Spotlight on News and Reporting', available: false, link: '/module/2' },
    { id: 3, title: 'Spotlight on Social Media and AI', available: false, link: '/module/3' },
    { id: 4, title: 'Spotlight on Science and Academia', available: false, link: '/module/4' },
    { id: 5, title: 'Spotlight on Consumption: Your daily Cognitive Biases', available: false, link: '/module/5' },
    { id: 6, title: 'Spotlight on Interactions: Heated Argument or constructive Debate?', available: false, link: '/module/6' },
  ];

  const quickNavItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'video', label: 'Watch' },
    { id: 'keyterms', label: 'Key Terms' },
    { id: 'podcast', label: 'Listen' },
    { id: 'resources', label: 'Explore' },
    { id: 'practice', label: 'Practice' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = quickNavItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentModule = modules.find(m => m.id === moduleId);

  return (
    <div className="min-h-screen bg-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Modules Navigation */}
              <div className="bg-editorial-cream shadow-lg p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => setModulesExpanded(!modulesExpanded)}
                >
                  <h3 className="font-playfair font-bold text-lg text-editorial-charcoal">Modules</h3>
                  {modulesExpanded ? (
                    <ChevronUpIcon className="h-5 w-5 text-editorial-charcoal" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-editorial-charcoal" />
                  )}
                </div>
                
                <AnimatePresence initial={false}>
                  {modulesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3">
                        {modules.map((module) => (
                          <li key={module.id}>
                            {module.available ? (
                              <Link
                                to={module.link}
                                className={`block text-sm font-mono transition-colors ${
                                  module.id === moduleId
                                    ? 'text-editorial-orange font-bold'
                                    : 'text-editorial-charcoal hover:text-editorial-orange'
                                }`}
                              >
                                {module.id}. {module.title}
                                {module.id === moduleId && (
                                  <CheckCircleIcon className="inline-block h-4 w-4 ml-2" />
                                )}
                              </Link>
                            ) : (
                              <span className="block text-sm font-mono text-editorial-charcoal/40">
                                {module.id}. {module.title}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!modulesExpanded && currentModule && (
                  <div className="text-sm font-mono text-editorial-orange font-bold">
                    {currentModule.id}. {currentModule.title}
                  </div>
                )}
              </div>

              {/* Quick Navigation */}
              <div className="bg-editorial-cream shadow-lg p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer mb-4"
                  onClick={() => setQuickNavExpanded(!quickNavExpanded)}
                >
                  <h3 className="font-playfair font-bold text-lg text-editorial-charcoal">Quick Navigation</h3>
                  {quickNavExpanded ? (
                    <ChevronUpIcon className="h-5 w-5 text-editorial-charcoal" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-editorial-charcoal" />
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {quickNavExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2">
                        {quickNavItems.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                                activeSection === item.id ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                              }`}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!quickNavExpanded && (
                  <div className="text-sm font-mono text-editorial-orange font-bold">
                    {quickNavItems.find(item => item.id === activeSection)?.label}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-mono text-editorial-orange">Module {moduleId}</span>
                <span className="h-px flex-1 bg-editorial-charcoal/20"></span>
              </div>
              <h1 className="font-playfair font-bold text-4xl md:text-6xl text-editorial-charcoal mb-6">
                {moduleTitle}
              </h1>
            </div>

            {/* Module Content */}
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModuleLayout;

