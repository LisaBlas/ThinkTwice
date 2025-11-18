import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon, MusicalNoteIcon, BookOpenIcon, WrenchScrewdriverIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';

const Module1Page = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [modulesExpanded, setModulesExpanded] = useState(false);
  const [quickNavExpanded, setQuickNavExpanded] = useState(true);

  const modules = [
    { id: 1, title: 'Introduction to Core Concepts', available: true, current: true },
    { id: 2, title: 'Spotlight on News and Reporting', available: false },
    { id: 3, title: 'Spotlight on Social Media and AI', available: false },
    { id: 4, title: 'Your daily Cognitive Biases', available: false },
    { id: 5, title: 'Heated Argument or constructive Debate?', available: false },
  ];

  const resources = [
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      type: 'Book',
      url: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
      description: 'A foundational text on cognitive biases and decision-making.'
    },
    {
      title: 'Your Logical Fallacy Is',
      author: 'yourlogicalfallacyis.com',
      type: 'Website',
      url: 'https://yourlogicalfallacyis.com/',
      description: 'Interactive guide to logical fallacies with examples.'
    },
    {
      title: 'The Cognitive Bias Codex',
      author: 'Buster Benson',
      type: 'Article',
      url: 'https://betterhumans.pub/cognitive-bias-cheat-sheet-55a472476b18',
      description: 'Comprehensive visual guide to cognitive biases.'
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-beige-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Module Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white shadow-lg p-6">
              {/* Course Modules Section */}
              <div>
                <button
                  onClick={() => setModulesExpanded(!modulesExpanded)}
                  className="w-full flex items-center justify-between mb-4 group"
                >
                  <h3 className="font-playfair font-bold text-xl text-editorial-charcoal">
                    Course Modules
                  </h3>
                  {modulesExpanded ? (
                    <ChevronUpIcon className="h-5 w-5 text-editorial-charcoal group-hover:text-editorial-orange transition-colors" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-editorial-charcoal group-hover:text-editorial-orange transition-colors" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {modulesExpanded ? (
                    <motion.nav
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="space-y-2 overflow-hidden"
                    >
                      {modules.map((module) => (
                        <div
                          key={module.id}
                          className={`p-3 border-l-4 transition-all ${
                            module.current
                              ? 'border-editorial-orange bg-editorial-orange/10'
                              : module.available
                              ? 'border-editorial-cream hover:border-editorial-charcoal cursor-pointer'
                              : 'border-editorial-cream opacity-50'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-xs font-mono text-editorial-charcoal/60 mb-1">
                                Module {module.id}
                              </p>
                              <p className={`text-sm font-light ${module.current ? 'font-bold' : ''}`}>
                                {module.title}
                              </p>
                            </div>
                            {module.current && (
                              <CheckCircleIcon className="h-5 w-5 text-editorial-orange flex-shrink-0 ml-2" />
                            )}
                            {!module.available && !module.current && (
                              <span className="text-xs font-mono bg-editorial-charcoal text-editorial-cream px-2 py-0.5 ml-2">
                                Soon
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.nav>
                  ) : (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Show only current module when collapsed */}
                      {modules.filter(m => m.current).map((module) => (
                        <div
                          key={module.id}
                          className="p-3 border-l-4 border-editorial-orange bg-editorial-orange/10"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-xs font-mono text-editorial-charcoal/60 mb-1">
                                Module {module.id}
                              </p>
                              <p className="text-sm font-light font-bold">
                                {module.title}
                              </p>
                            </div>
                            <CheckCircleIcon className="h-5 w-5 text-editorial-orange flex-shrink-0 ml-2" />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Navigation */}
              <div className="mt-8 pt-6 border-t border-editorial-charcoal/20">
                <button
                  onClick={() => setQuickNavExpanded(!quickNavExpanded)}
                  className="w-full flex items-center justify-between mb-3 group"
                >
                  <h4 className="font-playfair font-bold text-sm text-editorial-charcoal">
                    On This Page
                  </h4>
                  {quickNavExpanded ? (
                    <ChevronUpIcon className="h-4 w-4 text-editorial-charcoal group-hover:text-editorial-orange transition-colors" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 text-editorial-charcoal group-hover:text-editorial-orange transition-colors" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {quickNavExpanded ? (
                    <motion.nav
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="space-y-2 overflow-hidden"
                    >
                      <button
                        onClick={() => scrollToSection('intro')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'intro' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Introduction
                      </button>
                      <button
                        onClick={() => scrollToSection('video')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'video' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Video Lesson
                      </button>
                      <button
                        onClick={() => scrollToSection('podcast')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'podcast' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Podcast
                      </button>
                      <button
                        onClick={() => scrollToSection('resources')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'resources' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Resources
                      </button>
                      <button
                        onClick={() => scrollToSection('practice')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'practice' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Practice Tool
                      </button>
                    </motion.nav>
                  ) : (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Show only current section when collapsed */}
                      <button
                        onClick={() => scrollToSection(activeSection)}
                        className="block w-full text-left text-sm font-mono text-editorial-orange font-bold"
                      >
                        {activeSection === 'intro' && 'Introduction'}
                        {activeSection === 'video' && 'Video Lesson'}
                        {activeSection === 'podcast' && 'Podcast'}
                        {activeSection === 'resources' && 'Resources'}
                        {activeSection === 'practice' && 'Practice Tool'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-mono text-editorial-orange">Module 1</span>
                <span className="h-px flex-1 bg-editorial-charcoal/20"></span>
              </div>
              <h1 className="font-playfair font-bold text-4xl md:text-6xl text-editorial-charcoal mb-6">
                Introduction to Core Concepts
              </h1>
            </div>

            {/* Introduction Section */}
            <section id="intro" className="mb-16 scroll-mt-24">
              <div className="bg-editorial-cream shadow-lg p-8">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal mb-6">
                  Welcome to Module 1
                </h2>
                <div className="space-y-4 text-editorial-charcoal font-light leading-relaxed">
                  <p>
                    Understanding logical fallacies and cognitive biases is the foundation of critical thinking. 
                    In this module, you'll learn to recognize the most common errors in reasoning and the mental 
                    shortcuts that can lead us astray.
                  </p>
                  <div className="bg-editorial-orange/10 border-l-4 border-editorial-orange p-4 mt-6">
                    <p className="font-mono text-sm">
                      <strong>Learning Objectives:</strong> Identify common logical fallacies • Understand cognitive biases 
                      • Apply critical thinking to real-world examples • Practice with interactive tools
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section id="video" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Watch: Introduction to Logical Fallacies
                </h2>
              </div>
              <div className="bg-editorial-cream shadow-lg overflow-hidden">
                <div className="aspect-video bg-editorial-charcoal flex items-center justify-center">
                  {/* Placeholder for video - replace with actual embed */}
                  <div className="text-center text-editorial-cream p-8">
                    <PlayCircleIcon className="h-20 w-20 mx-auto mb-4 opacity-50" />
                    <p className="font-mono text-sm">Video: Introduction to Logical Fallacies</p>
                    <p className="font-light text-xs mt-2 opacity-75">Duration: 15 minutes</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-3">
                    Understanding Logical Fallacies
                  </h3>
                  <p className="text-editorial-charcoal font-light leading-relaxed">
                    This video introduces the most common logical fallacies you'll encounter in everyday media. 
                    Learn to spot ad hominem attacks, straw man arguments, false dichotomies, and more through 
                    real-world examples.
                  </p>
                </div>
              </div>
            </section>

            {/* Podcast Section */}
            <section id="podcast" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Listen: dgergerqg
                </h2>
              </div>
              <div className="bg-editorial-cream shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="hidden md:block w-32 h-32 bg-editorial-orange flex-shrink-0 flex items-center justify-center">
                    <MusicalNoteIcon className="h-16 w-16 text-editorial-cream" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-2">
                      Cognitive Biases in Everyday Life
                    </h3>
                    <p className="text-sm font-mono text-editorial-charcoal/60 mb-4">
                      Episode 1 • 28 minutes
                    </p>
                    <p className="text-editorial-charcoal font-light leading-relaxed mb-6">
                      Join us as we explore how cognitive biases affect our daily decisions, from what we buy 
                      to what we believe. Featuring expert insights and practical examples you can apply immediately.
                    </p>
                    <div className="bg-editorial-charcoal h-12 flex items-center justify-center">
                      <p className="text-editorial-cream font-mono text-sm">Audio Player Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Want more?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-editorial-cream shadow-lg p-6 hover:shadow-xl transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-mono bg-editorial-orange text-editorial-cream px-2 py-1">
                        {resource.type}
                      </span>
                      <span className="text-editorial-orange group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                    <h3 className="font-playfair font-bold text-lg text-editorial-charcoal mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm font-mono text-editorial-charcoal/60 mb-3">
                      {resource.author}
                    </p>
                    <p className="text-sm font-light text-editorial-charcoal">
                      {resource.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </section>

            {/* Practice Tool Section */}
            <section id="practice" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Time to practice!
                </h2>
              </div>
              <div className="bg-editorial-orange shadow-lg p-8">
                <h3 className="font-playfair font-bold text-2xl text-editorial-cream mb-4">
                  Fallacy Detector Tool
                </h3>
                <p className="text-editorial-cream font-light leading-relaxed mb-6">
                  Put your knowledge into practice! Use our Fallacy Detector to analyze real news headlines 
                  and identify logical fallacies. This interactive tool provides instant feedback and detailed 
                  explanations to help you sharpen your critical thinking skills.
                </p>
                <Link
                  to="/articles"
                  className="inline-block bg-editorial-cream text-editorial-orange border-2 border-editorial-cream font-mono hover:bg-editorial-charcoal hover:text-editorial-cream hover:border-editorial-charcoal text-sm py-3 px-8 transition-all transform hover:scale-105"
                >
                  Try the Fallacy Detector →
                </Link>
              </div>
            </section>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t-2 border-editorial-charcoal/20">
              <Link
                to="/"
                className="text-editorial-charcoal hover:text-editorial-orange font-mono text-sm transition-colors"
              >
                ← Back to Home
              </Link>
              <div className="text-editorial-charcoal/50 font-mono text-sm">
                Module 2 Coming Soon
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Module1Page;

