import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon, ExclamationTriangleIcon, LightBulbIcon, NewspaperIcon, AcademicCapIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Footer from '../components/Footer';

const ToolsPage = () => {
  const navigate = useNavigate();
  const [selectedTool, setSelectedTool] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      id: 1,
      title: 'System 1 Bingo',
      icon: SparklesIcon,
      color: '#41292c',
      shortDescription: 'Sort everyday reactions into System 1 and System 2 thinking.',
      fullDescription: 'System 1 Bingo is an interactive sorting game that trains you to spot fast, automatic thinking in everyday situations. Select the System 1 cards, reveal the answers, and inspect the bias or fallacy behind each reaction.',
      features: [
        'Three rounds of 16 relatable situations',
        'System 1 and System 2 reaction sorting',
        'Results with missed and false selections',
        'Flip cards to reveal bias and fallacy notes'
      ],
      status: 'Available',
      link: '/bingo'
    },
    {
      id: 2,
      title: 'Headline Bias Detector',
      icon: ExclamationTriangleIcon,
      color: '#2e5266',
      shortDescription: 'Explore bias and framing in international news headlines.',
      fullDescription: 'Our Headline Bias Detector helps you recognize common framing patterns, rhetorical devices, and fallacy-adjacent techniques in international English-language news headlines.',
      features: [
        'Curated international headline dataset',
        'Three simple classification labels',
        'Interactive learning experience',
        'Filter by outlet, topic and classification'
      ],
      status: 'Available',
      link: '/articles'
    },
    {
      id: 3,
      title: 'Bias Analyzer',
      icon: MagnifyingGlassIcon,
      color: '#41292c',
      shortDescription: 'Detect bias and framing in media content',
      fullDescription: 'The Bias Analyzer examines news articles for political, cultural, and ideological biases. Understand how framing and word choice influence perception and learn to read between the lines.',
      features: [
        'Multi-dimensional bias detection',
        'Source credibility assessment',
        'Comparative analysis tools',
        'Historical bias tracking'
      ],
      status: 'Coming Soon',
      link: null
    },
    {
      id: 4,
      title: 'Fact Checker',
      icon: NewspaperIcon,
      color: '#402039',
      shortDescription: 'Verify claims with credible sources',
      fullDescription: 'Cross-reference claims with verified databases and credible sources. Learn the fundamentals of fact-checking and develop skills to verify information independently.',
      features: [
        'Automated claim extraction',
        'Source verification',
        'Evidence-based ratings',
        'Citation tracking'
      ],
      status: 'Coming Soon',
      link: null
    },
    {
      id: 5,
      title: 'Argument Mapper',
      icon: ChartBarIcon,
      color: '#6F1D1B',
      shortDescription: 'Visualize logical argument structures',
      fullDescription: 'Break down complex arguments into visual diagrams. Identify premises, conclusions, and logical connections to better understand and evaluate reasoning.',
      features: [
        'Interactive argument diagrams',
        'Premise-conclusion mapping',
        'Logical validity checker',
        'Export and share maps'
      ],
      status: 'Coming Soon',
      link: null
    },
    {
      id: 6,
      title: 'Critical Reading Guide',
      icon: AcademicCapIcon,
      color: '#2e5266',
      shortDescription: 'Step-by-step media literacy framework',
      fullDescription: 'A comprehensive guide to critical reading and media analysis. Follow structured frameworks to evaluate sources, identify techniques, and form well-reasoned conclusions.',
      features: [
        'Guided reading frameworks',
        'Question prompts',
        'Evaluation checklists',
        'Practice exercises'
      ],
      status: 'Coming Soon',
      link: null
    },
  ];

  const handleTileClick = (tool) => {
    if (tool.link) {
      navigate(tool.link);
    } else {
      setSelectedTool(tool);
    }
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  const tileVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="bg-beige-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 shadow-md">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="font-playfair font-bold text-6xl md:text-8xl text-editorial-charcoal mb-6">
            Train your Brain
          </h1>
          <p className="font-light text-lg md:text-2xl text-editorial-charcoal max-w-3xl mx-auto">
            Explore tools designed to develop your critical thinking habits and sharpen your radar for manipulation from various sources (including your own brain!)
          </p>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  className="relative bg-editorial-cream shadow-lg cursor-pointer overflow-hidden group"
                  variants={tileVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                  onClick={() => handleTileClick(tool)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleTileClick(tool);
                    }
                  }}
                  aria-label={`Open ${tool.title}`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 text-xs font-mono font-semibold ${
                        tool.status === 'Available'
                          ? 'bg-editorial-orange text-editorial-cream'
                          : 'bg-editorial-charcoal text-editorial-cream'
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Blurred Content Wrapper */}
                  <div className={index > 1 ? 'blur-sm opacity-60' : ''}>
                    {/* Icon Section */}
                    <div
                      className="p-8 flex items-center justify-center"
                      style={{ backgroundColor: tool.color }}
                    >
                      <IconComponent className="h-20 w-20 text-editorial-cream" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="font-playfair font-bold text-2xl text-editorial-charcoal mb-3">
                        {tool.title}
                      </h3>
                      <p className="font-light text-editorial-charcoal text-base md:text-lg mb-4">
                        {tool.shortDescription}
                      </p>
                      <div className="flex items-center text-editorial-orange font-mono text-sm font-semibold transition-all">
                        {tool.link ? 'Try Now' : 'Learn More'}
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">-&gt;</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for Tool Details */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-editorial-cream max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-editorial-charcoal relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 hover:bg-editorial-charcoal/10 transition-colors"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6 text-editorial-charcoal" />
              </button>

              {/* Modal Header */}
              <div
                className="p-8 flex items-center justify-center"
                style={{ backgroundColor: selectedTool.color }}
              >
                {React.createElement(selectedTool.icon, {
                  className: 'h-24 w-24 text-editorial-cream',
                })}
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-mono font-semibold ${
                      selectedTool.status === 'Available'
                        ? 'bg-editorial-orange text-editorial-cream'
                        : 'bg-editorial-charcoal text-editorial-cream'
                    }`}
                  >
                    {selectedTool.status}
                  </span>
                </div>

                <h2 className="font-playfair font-bold text-4xl text-editorial-charcoal mb-4">
                  {selectedTool.title}
                </h2>

                <p className="text-editorial-charcoal text-lg mb-6 leading-relaxed">
                  {selectedTool.fullDescription}
                </p>

                <h3 className="font-playfair font-bold text-2xl text-editorial-charcoal mb-4">
                  Features
                </h3>

                <ul className="space-y-3 mb-8">
                  {selectedTool.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-editorial-orange mr-3 mt-1">OK</span>
                      <span className="text-editorial-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>

                {selectedTool.status === 'Coming Soon' && (
                  <div className="bg-editorial-orange/10 border-l-4 border-editorial-orange p-4">
                    <p className="text-editorial-charcoal font-mono text-sm">
                      This tool is currently under development. Stay tuned for updates!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ToolsPage;

