import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, WrenchScrewdriverIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon, EyeIcon, SpeakerWaveIcon, ChatBubbleLeftIcon, CogIcon } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';
import CourseWelcomeModal from '../components/CourseWelcomeModal';

const Module1Page = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('intro');
  const [modulesExpanded, setModulesExpanded] = useState(false);
  const [quickNavExpanded, setQuickNavExpanded] = useState(true);

  // Progressive unlock state
  const [unlockedSections, setUnlockedSections] = useState(['intro']);
  const [videoWatched, setVideoWatched] = useState(false);
  const [audioListened, setAudioListened] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show modal if navigating from home page
  useEffect(() => {
    if (location.state?.fromHome) {
      setShowModal(true);
    }
  }, [location]);

  // Unlock next section
  const unlockNextSection = (currentSection) => {
    const sectionOrder = ['intro', 'video', 'podcast', 'keyterms', 'practice', 'resources'];
    const currentIndex = sectionOrder.indexOf(currentSection);
    if (currentIndex < sectionOrder.length - 1) {
      const nextSection = sectionOrder[currentIndex + 1];
      if (!unlockedSections.includes(nextSection)) {
        setUnlockedSections([...unlockedSections, nextSection]);
      }
      // Scroll to next section
      setTimeout(() => {
        const element = document.getElementById(nextSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

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
    <>
      <CourseWelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />

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
                        onClick={() => scrollToSection('podcast')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'podcast' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Listen
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
                        onClick={() => scrollToSection('practice')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'practice' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Practice
                      </button>
                      <button
                        onClick={() => scrollToSection('resources')}
                        className={`block w-full text-left text-sm font-mono hover:text-editorial-orange transition-colors ${
                          activeSection === 'resources' ? 'text-editorial-orange font-bold' : 'text-editorial-charcoal'
                        }`}
                      >
                        Explore
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
                <span className="text-sm font-mono text-editorial-orange">Module 1: Core Concepts</span>
                <span className="h-px flex-1 bg-editorial-charcoal/20"></span>
              </div>
              <h1 className="font-playfair font-bold text-4xl md:text-6xl text-editorial-charcoal mb-6">
                The "Thinking" in Critical Thinking
              </h1>
            </div>

            {/* Introduction Section */}
            <section id="intro" className="mb-24 scroll-mt-24">
              <div className="bg-editorial-charcoal shadow-lg p-8">
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-cream mb-6">
                  Your brain is amazing, but flawed.
                </h2>
                <div className="space-y-4 text-editorial-cream font-light leading-relaxed text-lg">
                  <p>
                    In order to be in the right mindset to think critically (and learn something new) you should understand how your brain operates. Thousand of years of evolution have shaped our thought processes in a certain way, so it's no surprise that behaving against this requires effort and regular training. We're here to help you get started on that journey!
                  </p>
                  <div className="bg-editorial-cream/20 border-l-4 border-editorial-cream p-4 mt-6">
                    <p className="font-normal text-sm text-editorial-cream">
                      <strong>Learning Objectives:</strong> Understand how your brain thinks and learns • Appreciate the importance of critical thinking • Acknowledge the training it requires
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => unlockNextSection('intro')}
                    className="bg-editorial-cream text-editorial-orange border-2 border-editorial-cream font-mono hover:bg-editorial-charcoal hover:text-editorial-cream hover:border-editorial-charcoal text-sm py-3 px-8 transition-all transform hover:scale-105"
                  >
                    Next: Watch Video →
                  </button>
                </div>
              </div>
            </section>

            {/* Video Section */}
            {unlockedSections.includes('video') ? (
              <section id="video" className="mb-24 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <EyeIcon className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                    Watch: Systems 1 and 2 Thinking explained
                  </h2>
                </div>
                <div className="shadow-lg overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/UBVV8pch1dM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      onLoad={() => setVideoWatched(true)}
                    ></iframe>
                  </div>
                  <div className="p-6 bg-editorial-charcoal">
                    <h3 className="font-playfair font-bold text-xl text-editorial-cream mb-3">
                      The Science of Thinking
                    </h3>
                    <p className="text-editorial-cream/60 font-light leading-relaxed mb-4">
                      Here Veritasium nicely explains the "two personalities" (or thinking systems) in our brains. As you watch you might consider recent situations where you switched (or should have switched) between the two modes. And as someone who's here to learn, maybe you'll better appreciate the effort learning requires and think about it the next time you fall into old habits or get frustrated.
                    </p>
                    {videoWatched && (
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => unlockNextSection('video')}
                          className="bg-editorial-cream text-editorial-charcoal border-2 border-editorial-cream font-mono hover:bg-editorial-orange hover:text-editorial-cream hover:border-editorial-orange text-sm py-3 px-8 transition-all transform hover:scale-105"
                        >
                          Next: Listen to Audio →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ) : (
              <section id="video" className="mb-24 scroll-mt-24">
                <div className="bg-editorial-charcoal/10 shadow-lg p-8 text-center">
                  <div className="opacity-40">
                    <EyeIcon className="h-12 w-12 text-editorial-charcoal mx-auto mb-4" />
                    <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-2">
                      Watch: Systems 1 and 2 Thinking explained
                    </h3>
                    <p className="text-editorial-charcoal/60 font-mono text-sm">
                      Complete the previous section to unlock
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Podcast Section */}
            {unlockedSections.includes('podcast') ? (
              <section id="podcast" className="mb-24 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <SpeakerWaveIcon className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                    Listen: What is Critical Thinking?
                  </h2>
                </div>
                <div className="shadow-lg overflow-hidden bg-editorial-charcoal">
                  <div className="relative bg-editorial-charcoal p-8 flex items-center justify-center" style={{ minHeight: '120px' }}>
                    <div className="w-full max-w-3xl">
                      <audio
                        controls
                        className="w-full"
                        onPlay={() => setAudioListened(true)}
                      >
                        <source src="/critical-thinking.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                  <div className="p-6 bg-editorial-charcoal border-t border-editorial-cream/20">
                    <h3 className="font-playfair font-bold text-xl text-editorial-cream mb-3">
                      An Expert Psychologist Explains Critical Thinking
                    </h3>
                    <p className="text-editorial-cream/60 font-light leading-relaxed mb-4">
                      Psychologist Diane Halpern on what critical thinking is, how this skill should be taught and why it is key to thriving in a fast-changing world. We'll dive deeper into the elements of critical thinking in the next modules.
                    </p>
                    {audioListened && (
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => unlockNextSection('podcast')}
                          className="bg-editorial-cream text-editorial-charcoal border-2 border-editorial-cream font-mono hover:bg-editorial-orange hover:text-editorial-cream hover:border-editorial-orange text-sm py-3 px-8 transition-all transform hover:scale-105"
                        >
                          Next: Key Terms →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ) : (
              <section id="podcast" className="mb-24 scroll-mt-24">
                <div className="bg-editorial-charcoal/10 shadow-lg p-8 text-center">
                  <div className="opacity-40">
                    <SpeakerWaveIcon className="h-12 w-12 text-editorial-charcoal mx-auto mb-4" />
                    <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-2">
                      Listen: What is Critical Thinking?
                    </h3>
                    <p className="text-editorial-charcoal/60 font-mono text-sm">
                      Complete the previous section to unlock
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Key Terms Section */}
            {unlockedSections.includes('keyterms') ? (
              <section id="keyterms" className="mb-24 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <ChatBubbleLeftIcon className="h-5 w-5 text-editorial-charcoal flex-shrink-0" />
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
                    Three Key Terms to Know
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <DefinitionCard
                    term="Critical Thinking"
                    definition="The disciplined process of actively analyzing, synthesizing, and evaluating information to reach well-reasoned conclusions. It involves questioning assumptions, identifying biases, and considering alternative perspectives."
                    color="#d4a574"
                  />
                  <DefinitionCard
                    term="Systems 1 and 2 Thinking"
                    definition="Two modes of thought identified by Daniel Kahneman: System 1 is fast, automatic, and intuitive; System 2 is slow, deliberate, and analytical. Understanding both helps us recognize when we need to engage deeper critical thinking."
                    color="#4a5859"
                  />
                  <DefinitionCard
                    term="Rational"
                    definition="Based on reason, facts, and logical thinking rather than emotions or opinions. A rational approach involves evaluating evidence objectively and drawing conclusions that follow logically from available information."
                    color="#2e5266"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => unlockNextSection('keyterms')}
                    className="bg-editorial-charcoal text-editorial-cream border-2 border-editorial-charcoal font-mono hover:bg-editorial-orange hover:text-editorial-cream hover:border-editorial-orange text-sm py-3 px-8 transition-all transform hover:scale-105"
                  >
                    Next: Practice & Explore →
                  </button>
                </div>
              </section>
            ) : (
              <section id="keyterms" className="mb-24 scroll-mt-24">
                <div className="bg-editorial-charcoal/10 shadow-lg p-8 text-center">
                  <div className="opacity-40">
                    <ChatBubbleLeftIcon className="h-12 w-12 text-editorial-charcoal mx-auto mb-4" />
                    <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-2">
                      Three Key Terms to Know
                    </h3>
                    <p className="text-editorial-charcoal/60 font-mono text-sm">
                      Complete the previous section to unlock
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Practice Tool Section & Resources Section - Unlocked Together */}
            {unlockedSections.includes('practice') ? (
              <>
                <section id="practice" className="mb-24 scroll-mt-24">
                  <div className="bg-editorial-orange shadow-lg p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <CogIcon className="h-8 w-8 text-editorial-cream flex-shrink-0" />
                      <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-cream">
                        Time to practice!
                      </h2>
                    </div>
                    <p className="text-editorial-cream font-light leading-relaxed mb-6">
                      Put your knowledge into practice! Test your understanding of System 1 and System 2 thinking
                      with our interactive Bingo game, or use our Fallacy Detector to analyze real news headlines
                      and identify logical fallacies.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/bingo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-editorial-cream text-editorial-orange border-2 border-editorial-cream font-mono hover:bg-editorial-charcoal hover:text-editorial-cream hover:border-editorial-charcoal text-sm py-3 px-8 transition-all transform hover:scale-105"
                      >
                        Play System 1 Bingo →
                      </a>
                    </div>
                  </div>
                </section>

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
              </>
            ) : (
              <>
                <section id="practice" className="mb-24 scroll-mt-24">
                  <div className="bg-editorial-charcoal/10 shadow-lg p-8 text-center">
                    <div className="opacity-40">
                      <CogIcon className="h-12 w-12 text-editorial-charcoal mx-auto mb-4" />
                      <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-2">
                        Time to practice!
                      </h3>
                      <p className="text-editorial-charcoal/60 font-mono text-sm">
                        Complete the previous sections to unlock
                      </p>
                    </div>
                  </div>
                </section>

                <section id="resources" className="mb-24 scroll-mt-24">
                  <div className="bg-editorial-charcoal/10 shadow-lg p-8 text-center">
                    <div className="opacity-40">
                      <BookOpenIcon className="h-12 w-12 text-editorial-charcoal mx-auto mb-4" />
                      <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-2">
                        Want more?
                      </h3>
                      <p className="text-editorial-charcoal/60 font-mono text-sm">
                        Complete the previous sections to unlock
                      </p>
                    </div>
                  </div>
                </section>
              </>
            )}

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
    </>
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

