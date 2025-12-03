import React from 'react';
import { SparklesIcon, NewspaperIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// Inline X (formerly Twitter) logo icon
const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M2 3h5.64l4.58 6.23L17.96 3H22l-7.33 9.55L22 21h-5.64l-4.86-6.6L6.04 21H2l7.62-9.92L2 3z" />
  </svg>
);

const pillars = [
  {
    title: 'We design for learning',
    description: 'Making theory practical, approachable and engaging with thoughtful design.',
    icon: AcademicCapIcon,
  },
  {
    title: 'We innovate with AI tools',
    description: 'Creating custom models and using new AI applications to create content and methods.',
    icon: SparklesIcon,
  },
  {
    title: 'We strive for constructive discourse',
    description: 'Helping people to digest and interpret information with logic and confidence.',
    icon: NewspaperIcon,
  },
];

const ResourcesCommunity = () => {
  return (
    <section id="about" className="flex items-center bg-editorial-cream py-24 md:py-32 lg:py-52">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
        {/* Left Column */}
        <div>
          <h2 className="font-playfair font-bold text-editorial-orange opacity-40 text-2xl md:text-3xl lg:text-3xl mb-4">
            About us
          </h2>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-editorial-charcoal mb-4">
            BleepBloop Studio
          </h2>
          <h3 className="text-xl md:text-2xl text-editorial-orange font-light mb-2">
            Using great Design and AI Tools for Good
          </h3>
          {/* External Links */}
          <div className="flex items-center space-x-4 mb-6 lg:mb-4">
            <a
              href="https://x.com/BerliozGordon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:text-editorial-charcoal transition-colors"
              aria-label="X profile"
            >
              <XIcon className="h-6 w-6" />
            </a>
            <a
              href="https://lisablas.github.io/BleepBloop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:text-editorial-charcoal transition-colors"
              aria-label="Portfolio website"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-editorial-charcoal font-light leading-relaxed mb-4 text-lg">
          We're a design and development duo creating digital experiences and services. As we're not academics on the topic, we're guided by our own experiences, frustrations and mistakes when it comes to media literacy and critical thinking. Just like you, we're also constantly learning and improving.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 lg:space-y-6">
          {pillars.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start space-x-4 mb-8 lg:mb-1 lg:mt-20">
              <Icon className="h-10 w-10 text-burgundy flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-playfair text-2xl text-editorial-charcoal mb-1">{title}</h4>
                <p className="text-editorial-charcoal font-light text-md">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;
