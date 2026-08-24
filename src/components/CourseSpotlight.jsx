import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CourseSpotlight = () => {
  const navigate = useNavigate();
  const modules = [
    { title: 'Introduction to Core Concepts - Fallacies and Biases', description: 'Understand the basics and why they matter. Learn about the behaviour and habits of your brain that influence how you process information. Preview this module.', comingSoon: false, link: '/module/1' },
    { title: 'Spotlight on mainstream News and Reporting', description: 'See how events become headlines and learn to read between the lines. Sharpen your eye for bias, logical flaws and manipulation techniques. Try our first interactive tool.', comingSoon: true, link: null },
    { title: 'Spotlight on Social Media and AI', description: 'Dive into how short-form formats, algorithms and AI infuence our perception of truth. Gain confidence to spot fake and misinformed content.', comingSoon: true, link: null },
    { title: 'Spotlight on Science and Academia', description: 'Navigate scientific studies, research papers and academic discourse with confidence. Learn to evaluate methodology, understand statistical claims and distinguish credible research from pseudoscience.', comingSoon: true, link: null },
    { title: 'Spotlight on Consumption - your daily Biases', description: 'Explore the blind spots in your own mind that change how you see the world. Learn how to spot and counteract biases that may cloud your judgement and decisions.', comingSoon: true, link: null },
    { title: 'Heated Argument or constructive Debate?', description: 'Discover tweaks that can shift and improve conversations with friends and family. Respond to faulty arguments and errors in reasoning with confidence and poise.', comingSoon: true, link: null },
  ];
  const [active, setActive] = useState(0);

  const handleModuleClick = (idx, module) => {
    setActive(idx);
    if (module.link) {
      // Small delay to show the selection before navigating
      setTimeout(() => {
        navigate(module.link, { state: { fromHome: true } });
      }, 300);
    }
  };

  return (
    <section id="course" className="flex items-center bg-editorial-orange overflow-hidden py-24 md:py-32 lg:py-52">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Left side: Text content */}
          <div className="md:w-5/12 text-center md:text-left text-editorial-cream">
            <h2 className="font-playfair text-4xl font-bold md:text-4xl mb-4 opacity-40">
              Full Course coming soon:
            </h2>
            <h2 className="font-playfair text-6xl font-bold md:text-6xl mb-8">
              Critical Thinking in Everyday Life
            </h2>
            <p className="text-lg mb-10 font-light">
              Learn to navigate fallacies, biases and contentious topics with easy explanations based on real world examples. Become more aware and confident by practising with our interactive, AI supported tools and downloadable content. Explore the modules in any order and at your own pace.
            </p>
            <p className="text-lg mb-10 font-light">
              We're still hard at work perfecting the course - join the waitlist to be notified when it's ready. The first 20 curious minds will receive a discount code!
            </p>
            <div className="flex items-left justify-left max-w-xl">
              <a href="mailto:bleepbloopproducts@gmail.com?subject=Critical%20Thinking%20course%20interest" className="w-60 text-center text-editorial-orange border-editorial-orange bg-editorial-cream border-2 font-mono hover:bg-editorial-charcoal hover:border-editorial-charcoal hover:text-editorial-cream text-xs sm:text-sm py-2 px-4 transition-colors duration-100 transform hover:scale-105 shrink-0">
                Express your interest and inspire us to keep going!
              </a>
            </div>
          </div>

          {/* Right side: Modules Tabs */}
          <div className="md:w-6/12 mt-12 md:mt-0">
            <div className="flex flex-col space-y-3 w-full">
              {modules.map((module, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleModuleClick(idx, module)}
                  className={`w-full relative flex flex-col text-left pl-6 pr-4 py-4 overflow-hidden transition-all duration-300 ${
                    active === idx
                      ? 'text-editorial-charcoal'
                      : 'text-editorial-cream hover:opacity-80'
                  } ${module.link ? 'cursor-pointer' : 'cursor-default'}`}
                  initial={false}
                  whileHover={{ scale: active === idx ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background rectangle */}
                  <motion.div
                    initial={false}
                    animate={{
                      width: active === idx ? '100%' : '4px',
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className={`absolute left-0 top-0 h-full ${
                      module.comingSoon
                        ? 'bg-editorial-cream/30'
                        : 'bg-editorial-cream'
                    }`}
                  />

                  {/* Module title */}
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative z-10 flex items-center gap-2 text-sm md:text-base ${
                      active === idx ? 'font-bold' : 'font-normal'
                    }`}
                  >
                    {module.title}
                    {module.comingSoon ? (
                      <span className={`text-xs px-2 py-0.5 font-mono font-semibold ${
                        active === idx
                          ? 'bg-editorial-charcoal text-editorial-cream'
                          : 'bg-editorial-cream/20 text-editorial-cream'
                      }`}>
                        Coming Soon
                      </span>
                    ) : (
                      <span className={`text-xs px-2 py-0.5 font-mono font-semibold ${
                        active === idx
                          ? 'bg-editorial-cream text-editorial-orange'
                          : 'bg-editorial-cream/20 text-editorial-cream'
                      }`}>
                        Try Now
                      </span>
                    )}
                  </motion.span>

                  {/* Animated description - revealed when active */}
                  <AnimatePresence mode="wait">
                    {active === idx && (
                      <motion.span
                        initial={{
                          opacity: 0,
                          height: 0,
                          marginTop: 0
                        }}
                        animate={{
                          opacity: 1,
                          height: 'auto',
                          marginTop: 8
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          marginTop: 0
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="relative z-10 block text-sm font-light leading-relaxed overflow-hidden"
                      >
                        {module.description}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSpotlight;
