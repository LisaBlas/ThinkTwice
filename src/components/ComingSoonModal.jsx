import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur - no click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-editorial-charcoal/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-editorial-cream shadow-2xl max-w-lg w-full">
              {/* Header */}
              <div className="bg-editorial-charcoal p-8">
                <h2 className="font-playfair font-bold text-3xl text-editorial-cream">
                  Coming Soon!
                </h2>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-editorial-charcoal text-lg mb-6 leading-relaxed">
                  We're still hard at work perfecting this module. Express your interest to motivate us to finish it faster!
                </p>

                {/* Mailto Button */}
                <div className="flex justify-center mb-6">
                  <a href="mailto:bleepbloopproducts@gmail.com?subject=Critical%20Thinking%20course%20interest" className="w-60 text-center text-editorial-orange border-editorial-orange bg-editorial-cream border-2 font-mono hover:bg-editorial-charcoal hover:border-editorial-charcoal hover:text-editorial-cream text-xs sm:text-sm py-2 px-4 transition-colors duration-100 transform hover:scale-105 shrink-0">
                    Express your interest and inspire us to keep going!
                  </a>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-editorial-charcoal/20"></div>
                  <span className="text-editorial-charcoal/60 font-mono text-xs">OR</span>
                  <div className="flex-1 h-px bg-editorial-charcoal/20"></div>
                </div>

                {/* Link to Module 1 */}
                <div className="text-center">
                  <p className="text-editorial-charcoal/80 text-lg mb-4 font-light">
                    Check out Module 1 while you wait:
                  </p>
                  <Link
                    to="/module/1"
                    className="inline-block bg-editorial-cream text-editorial-orange border-2 border-editorial-orange font-mono hover:bg-editorial-orange hover:text-editorial-cream text-sm py-3 px-8 transition-all transform hover:scale-105"
                  >
                    Go to Module 1 →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;

