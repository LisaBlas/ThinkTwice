import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const CourseWelcomeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-editorial-charcoal/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="bg-editorial-cream shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-editorial-orange p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-editorial-cream hover:text-editorial-charcoal transition-colors"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-editorial-cream mb-3">
                  Welcome to the Course!
                </h2>
                <p className="text-editorial-cream/80 font-light text-lg">
                  A new approach to learning critical thinking
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-playfair font-bold text-xl text-editorial-charcoal mb-3">
                    Our Approach
                  </h3>
                  <p className="text-editorial-charcoal font-light leading-relaxed">
                    This course is designed to help you develop critical thinking skills through an interactive, 
                    progressive learning experience. Each module builds on the previous one, combining theory 
                    with practical exercises.
                  </p>
                </div>

                <div className="bg-editorial-orange/10 border-l-4 border-editorial-orange p-4">
                  <h4 className="font-playfair font-bold text-lg text-editorial-charcoal mb-2">
                    How It Works
                  </h4>
                  <ul className="space-y-2 text-editorial-charcoal font-light">
                    <li className="flex items-start">
                      <span className="text-editorial-orange mr-2">•</span>
                      <span><strong>Progressive Unlock:</strong> Complete each section to unlock the next</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-editorial-orange mr-2">•</span>
                      <span><strong>Multi-Format Learning:</strong> Watch videos, listen to audio, and read key concepts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-editorial-orange mr-2">•</span>
                      <span><strong>Practice & Apply:</strong> Use interactive tools to reinforce your learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-editorial-orange mr-2">•</span>
                      <span><strong>Explore Further:</strong> Access curated resources to deepen your understanding</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-editorial-charcoal/60 font-light text-sm italic">
                    Take your time with each section. Critical thinking is a skill that develops with practice 
                    and reflection. There's no rush—focus on understanding rather than completion.
                  </p>
                </div>

                {/* Close Button */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={onClose}
                    className="bg-editorial-orange text-editorial-cream border-2 border-editorial-orange font-mono hover:bg-editorial-charcoal hover:border-editorial-charcoal text-sm py-3 px-8 transition-all transform hover:scale-105"
                  >
                    Let's Get Started →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CourseWelcomeModal;

