import React from 'react';
import ModuleLayout from '../components/ModuleLayout';
import { EyeIcon, SpeakerWaveIcon, ChatBubbleLeftIcon, BookOpenIcon, CogIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Module5Page = () => {
  return (
    <ModuleLayout moduleId={5} moduleTitle="Spotlight on Consumption: Your daily Cognitive Biases">
      {/* Introduction Section */}
      <section id="intro" className="mb-24 scroll-mt-24">
        <div className="bg-editorial-orange shadow-lg p-8">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-cream mb-6">
            Coming Soon
          </h2>
          <div className="space-y-4 text-editorial-cream font-light leading-relaxed text-lg">
            <p>
              This module will explore the cognitive biases that affect how we consume and process information daily.
              Learn to recognize your own mental shortcuts and blind spots.
            </p>
            <div className="bg-editorial-cream/20 border-l-4 border-editorial-cream p-4 mt-6">
              <p className="font-normal text-sm text-editorial-cream">
                <strong>Coming Soon:</strong> This module is currently under development. Check back soon for updates!
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
            Watch: Coming Soon
          </h2>
        </div>
        <div className="shadow-lg overflow-hidden">
          <div className="aspect-video bg-editorial-charcoal/10 flex items-center justify-center">
            <p className="text-editorial-charcoal/60 font-mono text-sm">Video content coming soon</p>
          </div>
          <div className="p-6 bg-editorial-charcoal">
            <h3 className="font-playfair font-bold text-xl text-editorial-cream mb-3">
              Module Content In Development
            </h3>
            <p className="text-editorial-cream/60 font-light leading-relaxed">
              We're working hard to bring you high-quality video content for this module.
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
        <div className="bg-editorial-cream shadow-lg p-8">
          <p className="text-editorial-charcoal/60 font-light leading-relaxed text-center">
            Key terms and definitions will be available when this module launches.
          </p>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="mb-24 scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <SpeakerWaveIcon className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
            Listen: Coming Soon
          </h2>
        </div>
        <div className="shadow-lg overflow-hidden">
          <div className="bg-editorial-charcoal/10 h-[352px] flex items-center justify-center">
            <p className="text-editorial-charcoal/60 font-mono text-sm">Podcast content coming soon</p>
          </div>
          <div className="bg-editorial-cream p-6">
            <p className="text-editorial-charcoal/60 font-light text-sm">
              Audio content and alternative listening platforms will be available soon.
            </p>
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
        <div className="bg-editorial-cream shadow-lg p-8">
          <p className="text-editorial-charcoal/60 font-light leading-relaxed">
            Additional resources and reading materials will be provided when this module is complete.
          </p>
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
            Interactive practice tools will be available when this module launches. In the meantime, 
            check out our other tools to start building your critical thinking skills.
          </p>
          <Link
            to="/tools"
            className="inline-block bg-editorial-cream text-editorial-orange border-2 border-editorial-cream font-mono hover:bg-editorial-charcoal hover:text-editorial-cream hover:border-editorial-charcoal text-sm py-3 px-8 transition-all transform hover:scale-105"
          >
            Explore All Tools →
          </Link>
        </div>
      </section>
    </ModuleLayout>
  );
};

export default Module5Page;

