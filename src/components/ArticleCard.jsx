// Editorial Style ArticleCard Component
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, LinkIcon } from '@heroicons/react/24/solid';
import fallacyDefinitions from '../../data/fallacy-definitions.json';

const cardVariants = {
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
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const revealedContentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } }
};

const classificationGroupColors = {
  Framing: '#2e5266',
  'Cognitive Bias': '#567568',
  'Logical Fallacy': '#6F1D1B',
};

const getClassificationColor = (group) => {
  return classificationGroupColors[group] || '#888888';
};

const ArticleCard = ({ article, index, darkMode = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [fallacyDefinition, setFallacyDefinition] = useState('');
  const [fallacyColor, setFallacyColor] = useState('#888888'); // Default gray for the pill
  const cardRef = useRef(null);

  const currentArticle = article || {
    title: 'Article Not Available',
    source: 'Unknown Source',
    image: '',
    content: 'No content to display.',
    url: '#',
    sourceUrl: null,
    publishedAt: null,
    fallacy: 'N/A',
    classificationGroup: null,
    explanation: 'No analysis available.',
    originalPrimaryClassification: null,
    secondaryClassification: null,
    additionalBiases: []
  };

  const handleReveal = (e) => {
    e.stopPropagation();
    setIsRevealed(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsRevealed(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      e.preventDefault();
      setIsRevealed(!isRevealed);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && isRevealed) {
        setIsRevealed(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    if (currentArticle.fallacy) {
      const definitionKey = Object.keys(fallacyDefinitions).find(
        (key) => key.toLowerCase() === currentArticle.fallacy.toLowerCase()
      );
      if (definitionKey && fallacyDefinitions[definitionKey]) {
        const fallacyData = fallacyDefinitions[definitionKey];
        setFallacyDefinition(fallacyData.definition);
        setFallacyColor(fallacyData.color || '#888888');
      } else {
        setFallacyDefinition('');
        setFallacyColor(getClassificationColor(currentArticle.classificationGroup));
      }
    } else {
      setFallacyDefinition('');
      setFallacyColor(getClassificationColor(currentArticle.classificationGroup));
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isRevealed, currentArticle.fallacy, currentArticle.classificationGroup]);

  const formatDate = (dateString) => {
    if (currentArticle.dateLabel) return currentArticle.dateLabel.toUpperCase();
    if (!dateString) return 'Date N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).toUpperCase();
  };

  const sourceLink = currentArticle.url || currentArticle.sourceUrl;

  return (
    <motion.div
      className="relative w-full h-90 overflow-hidden shadow-lg" style={{ borderColor: fallacyColor }}
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={!isRevealed ? 'hover' : ''}
      custom={index}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Editorial Front Face */}
      <div 
        className={`w-full h-full card-background-pattern bg-editorial-cream ${darkMode ? 'bg-slate-800 border-slate-600 text-slate-100' : 'bg-editorial-cream border-editorial-charcoal text-editorial-charcoal'} p-4 flex flex-col justify-between cursor-pointer`}
        onClick={handleReveal}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Read more about ${currentArticle.title}`}
      >
        <div>
          <div className="mb-1">
            <span 
              className="inline-block px-4 py-1 text-xs tracking-extrawide text-editorial-cream opacity-80"
              style={{ backgroundColor: fallacyColor }}
            >
              {currentArticle.fallacy || 'FALLACY'}
            </span>
            
          <div className="mt-6 ml-1 space-y-2">
            <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal'} opacity-60 font-mono`}>
              <p>{currentArticle.source} // {formatDate(currentArticle.publishedAt)}</p>
            </div>
          </div>

          </div>
          
            
          <h3 className={`font-work-sans font-bold text-2xl text-editorial-charcoal leading-tight mb-6 mt-1 ${darkMode ? 'text-slate-100' : 'text-editorial-charcoal'}`}>
            "{currentArticle.title}"
          </h3>
        </div>
        <div className="flex items-center self-end opacity-80">
          <p
            className="text-xs font-mono mr-2 leading-extratight"
            style={{ color: fallacyColor }}
          >
            Click to reveal
          </p>
          <motion.div 
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <EyeIcon
              className="w-5 h-5"
              style={{ color: fallacyColor, opacity: darkMode ? 0.8 : 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Back face */}

      {/* Revealed Content Overlay */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            onClick={handleClose}
            className={`absolute inset-0 cursor-pointer bg-editorial-cream ${darkMode ? 'bg-slate-700 text-slate-100' : 'bg-editorial-cream text-editorial-charcoal'} p-4 flex flex-col z-10 overflow-y-auto custom-scrollbar`}
            variants={revealedContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col h-full">
              <button 
                onClick={handleClose}
                className={`absolute top-3 right-3 ${darkMode ? 'text-slate-300 hover:text-orange-400' : 'text-editorial-cream hover:text-editorial-orange'}`}
                aria-label="Close details"
              >
              </button>
              
              {/* Top Section: Fallacy Pill and Definition */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-shrink-0">
                  <span 
                    className="inline-flex items-center px-4 py-1 font-semibold text-sm tracking-wider text-editorial-cream opacity-80"
                    style={{ backgroundColor: fallacyColor, height: '1.5rem' }}
                  >
                    {currentArticle.fallacy || 'FALLACY'}
                  </span>
                </div>
                {fallacyDefinition && (
                  <div className="relative flex items-start md:items-center h-auto md:h-7 w-full md:w-auto">
                    <div 
                      className="absolute left-0 h-full w-0.5 md:h-6" 
                      style={{ backgroundColor: fallacyColor }}
                    />
                    <p 
                      className="leading-relaxed text-sm ml-3 italic font-semibold"
                      style={{ color: fallacyColor, opacity: darkMode ? 0.9 : 1 }}
                    >
                      {fallacyDefinition}
                    </p>
                  </div>
                )}
              </div>

              {/* Content Wrapper */}
              <div className="flex-grow space-y-4 text-md">

                {/* Analysis Section */}
                <div className="relative">
                  <p className="leading-medium mb-2 text-editorial-charcoal font-light">
                    {currentArticle.explanation}
                    {sourceLink && (
                      <a href={sourceLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center ml-2 text-editorial-orange underline hover:text-editorial-charcoal transition-colors hover:font-semibold duration-200">
                        <span className="mr-1">Visit original source</span>
                        <LinkIcon className="w-4 h-4" />
                      </a>
                    )}
                  </p>
                  {(currentArticle.classificationGroup || currentArticle.secondaryClassification) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 font-mono text-xs">
                      {currentArticle.classificationGroup && (
                        <div className="border border-editorial-charcoal/20 p-3">
                          <p className="uppercase text-editorial-charcoal/60 mb-1">Filter group</p>
                          <p className="font-semibold text-editorial-charcoal">{currentArticle.classificationGroup}</p>
                        </div>
                      )}
                      {currentArticle.secondaryClassification && (
                        <div className="border border-editorial-charcoal/20 p-3">
                          <p className="uppercase text-editorial-charcoal/60 mb-1">Secondary pattern</p>
                          <p className="font-semibold text-editorial-charcoal">{currentArticle.secondaryClassification}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Footer Link 
              <div className="mt-auto pt-4">
                <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`block w-full text-center ${darkMode ? 'bg-orange-500 text-white hover:bg-orange-400' : 'border-2 border-editorial-orange text-editorial-orange hover:bg-editorial-orange hover:text-editorial-cream'} transition-colors duration-200 py-2 font-mono text-xs font-bold`}>
                  Learn more in our course
                </a>
              </div>*/}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ArticleCard;
