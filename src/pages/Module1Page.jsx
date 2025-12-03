import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, WrenchScrewdriverIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, EyeIcon, SpeakerWaveIcon, ChatBubbleLeftIcon, CogIcon } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';

const Module1Page = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [modulesExpanded, setModulesExpanded] = useState(false);
  const [quickNavExpanded, setQuickNavExpanded] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    { id: 1, title: 'Understand Core Concepts', available: true, current: true },
    { id: 2, title: 'Spotlight on News and Reporting', available: false },
    { id: 3, title: 'Spotlight on Social Media and AI', available: false },
    { id: 4, title: 'Spotlight on Science and Academia', available: false },
    { id: 5, title: 'Spotlight on Consumption: Your daily Cognitive Biases', available: false },
    { id: 6, title: 'Spotlight on Interactions: Heated Argument or constructive Debate?', available: false },
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
                        Watch
                      </button>
                      <button
                        onClick={() => scrollToSection('keyterms')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'keyterms' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Key Terms
                      </button>
                      <button
                        onClick={() => scrollToSection('podcast')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'podcast' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Listen
                      </button>
                      <button
                        onClick={() => scrollToSection('resources')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'resources' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Explore
                      </button>
                      <button
                        onClick={() => scrollToSection('practice')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'practice' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Practice
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
                Understand Core Concepts
              </h1>
            </div>

            {/* Introduction Section */}
            <section id="intro" className="mb-24 scroll-mt-24">
              <div className="bg-editorial-orange shadow-lg p-8">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-cream mb-6">
                  Why am I here?
                </h2>
                <div className="space-y-4 text-editorial-cream font-light leading-relaxed text-lg">
                  <p>
                    Understanding logical fallacies and cognitive biases is the foundation of critical thinking.
                    In this module, you'll learn to recognize the most common errors in reasoning and the mental
                    shortcuts that can lead us astray.
                  </p>
                  <div className="bg-editorial-cream/20 border-l-4 border-editorial-cream p-4 mt-6">
                    <p className="font-normal text-sm text-editorial-cream">
                      <strong>Learning Objectives:</strong> Identify common logical fallacies • Understand cognitive biases
                      • Apply critical thinking to real-world examples • Practice with interactive tools
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section id="video" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <EyeIcon className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Watch: Introduction to Logical Fallacies
                </h2>
              </div>
              <div className="shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/nYYkRaU0xh8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-editorial-charcoal">
                  <h3 className="font-playfair font-bold text-xl text-editorial-cream mb-3">
                    Understanding Logical Fallacies
                  </h3>
                  <p className="text-editorial-cream/60 font-light leading-relaxed">
                    This video introduces the most common logical fallacies you'll encounter in everyday media.
                    Learn to spot ad hominem attacks, straw man arguments, false dichotomies, and more through
                    real-world examples.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Terms Section */}
            <section id="keyterms" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <ChatBubbleLeftIcon className="h-5 w-5 text-editorial-charcoal flex-shrink-0" />
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Key Terms to Know
                </h2>
              </div>
              <p className="text-editorial-charcoal font-light leading-relaxed mb-8">
                Click each card to reveal the definition of important concepts in critical thinking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DefinitionCard
                  term="Logic"
                  definition="The systematic study of valid reasoning and inference. Logic helps us distinguish between sound arguments and flawed ones by examining the structure and relationships between premises and conclusions."
                  color="#6F1D1B"
                />
                <DefinitionCard
                  term="Rational"
                  definition="Based on reason, facts, and logical thinking rather than emotions or opinions. A rational approach involves evaluating evidence objectively and drawing conclusions that follow logically from available information."
                  color="#2e5266"
                />
                <DefinitionCard
                  term="Critical Thinking"
                  definition="The disciplined process of actively analyzing, synthesizing, and evaluating information to reach well-reasoned conclusions. It involves questioning assumptions, identifying biases, and considering alternative perspectives."
                  color="#d4a574"
                />
                <DefinitionCard
                  term="Cognitive Bias"
                  definition="Systematic patterns of deviation from rational judgment that occur due to the way our brains process information. These mental shortcuts can lead to errors in thinking, perception, and decision-making."
                  color="#8b4513"
                />
                <DefinitionCard
                  term="Fallacy"
                  definition="An error in reasoning that undermines the logic of an argument. Fallacies can be intentional (used to manipulate) or unintentional, and recognizing them is essential for critical analysis of claims and arguments."
                  color="#c44536"
                />
                <DefinitionCard
                  term="Systems 1 and 2 Thinking"
                  definition="Two modes of thought identified by Daniel Kahneman: System 1 is fast, automatic, and intuitive; System 2 is slow, deliberate, and analytical. Understanding both helps us recognize when we need to engage deeper critical thinking."
                  color="#4a5859"
                />
              </div>
            </section>

            {/* Podcast Section */}
            <section id="podcast" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <SpeakerWaveIcon className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                  Listen: dgergerqg
                </h2>
              </div>
              <div className="shadow-lg overflow-hidden">
                <iframe
                  src="https://open.spotify.com/embed/episode/08M6pzHcv8mH5eZcQLBkIT?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <div className="bg-editorial-cream p-6">
                  <p className="text-editorial-charcoal/60 font-light text-sm mb-4">
                    Listen on other platforms:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://podcasts.apple.com/podcast/id1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-editorial-charcoal text-editorial-cream font-mono text-xs py-2 px-4 hover:bg-editorial-orange transition-colors"
                    >
                      Apple Podcasts
                    </a>
                    <a
                      href="https://podcasts.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-editorial-charcoal text-editorial-cream font-mono text-xs py-2 px-4 hover:bg-editorial-orange transition-colors"
                    >
                      Google Podcasts
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-editorial-charcoal text-editorial-cream font-mono text-xs py-2 px-4 hover:bg-editorial-orange transition-colors"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://overcast.fm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-editorial-charcoal text-editorial-cream font-mono text-xs py-2 px-4 hover:bg-editorial-orange transition-colors"
                    >
                      Overcast
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <BookOpenIcon className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
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
            <section id="practice" className="mb-24 scroll-mt-24">
              <div className="bg-editorial-orange shadow-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <CogIcon className="h-8 w-8 text-editorial-cream flex-shrink-0" />
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-cream">
                    Time to practice!
                  </h2>
                </div>
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

// Definition Card Component
const DefinitionCard = ({ term, definition, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      className="relative h-64 overflow-hidden shadow-lg"
      style={{ borderColor: color }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={!isFlipped ? { scale: 1.02 } : {}}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Front of card - Term */}
      <div
        className="w-full h-full card-background-pattern bg-editorial-cream p-4 flex flex-col justify-between cursor-pointer"
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${term} definition card. Click to reveal definition.`}
      >
        <div className="flex-1 flex items-center justify-center">
          <h3
            className="font-playfair font-bold text-3xl text-center text-editorial-charcoal"
          >
            {term}
          </h3>
        </div>

        <div className="flex items-center self-end opacity-80">
          <p
            className="text-xs font-mono mr-2 leading-tight"
            style={{ color: color }}
          >
            Click to reveal
          </p>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <EyeIcon
              className="w-5 h-5"
              style={{ color: color }}
            />
          </motion.div>
        </div>
      </div>

      {/* Back of card - Definition (Revealed overlay) */}
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            onClick={handleFlip}
            className="absolute inset-0 cursor-pointer bg-editorial-cream p-4 flex flex-col z-10 overflow-y-auto custom-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col h-full">
              {/* Top Section: Term Pill */}
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex-shrink-0">
                  <span
                    className="inline-flex items-center px-4 py-1 font-semibold text-sm tracking-wider text-editorial-cream opacity-80"
                    style={{ backgroundColor: color, height: '1.5rem' }}
                  >
                    {term.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content Wrapper */}
              <div className="flex-grow space-y-4 text-md">
                <div className="relative">
                  <p className="leading-relaxed text-editorial-charcoal font-light">
                    {definition}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Module1Page;

