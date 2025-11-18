import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkIcon from '../../Images/check.svg';
import ArticleCard from './ArticleCard';
import axios from 'axios';

const FallacyDetector = () => {
  const navigate = useNavigate();
  const [sampleArticle, setSampleArticle] = useState(null);

  useEffect(() => {
    const fetchSample = async () => {
      try {
        const response = await axios.get('/data/headlines.json');
        const articles = response.data.headlines || [];
        if (articles.length) {
          setSampleArticle(articles[0]); // choose first article as sample
        }
      } catch (err) {
        console.error('Failed to fetch sample article', err);
      }
    };

    fetchSample();
  }, []);
  
  // A sample article to display in the ArticleCard
  const dummyArticle = {
    title: "Global Coffee Shortage Looms, Experts Warn of Price Surge",
    source: "The Daily Grind",
    image: "/images/article-placeholder.jpg", // A placeholder image path
    fallacy: "Appeal to Fear",
    explanation: "This headline uses fear-mongering to create a sense of urgency and anxiety, potentially exaggerating the situation to grab attention.",
    publishedAt: new Date().toISOString(),
    url: '#',
    additionalBiases: [],
  };

  const benefits = [
    "Learn to spot common fallacies and biases with real life examples",
    "Sharpen your senses for manipulation and influencing techniques",
    "Practice having more rational and constructive conversations",
    ,
  ];

  return (
    <section id="tool" className="bg-beige-100 py-24 md:py-32 lg:py-52 shadow-md">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: Title and Description */}
        <div className="mx-auto text-center max-w-8xl mb-8">
          <h1 className="font-playfair font-bold text-8xl md:text-8xl sm:text-4xl text-editorial-charcoal mb-6">
            Practice makes perfect.<span className="font-normal text-editorial-charcoal opacity-80"></span>
          </h1>
        </div>

        {/* Bottom Section: Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Headline Instruction spanning both columns */}
          <div className="lg:col-span-2">
            <h1 className="font-light text-md md:text-xl lg:text-2xl text-editorial-charcoal mb-6 text-center">
              Discover our interactive tools to train your critical eye and rational brain.
            </h1>
          </div>
          
          {/* Left Column: ArticleCard Example */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg"><ArticleCard article={sampleArticle || dummyArticle} index={0} /></div>
          </div>

          {/* Right Column: Benefits and How It Works */}
          <div className="flex flex-col justify-center">
            
            {/* Benefits List */}
            <div className="mb-10">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <img src={checkIcon} alt="" className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="text-lg font-light text-editorial-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fallacy Tool Button */}
            <div>
              <button
                onClick={() => navigate('/tools')}
                className="w-36 text-center text-editorial-orange border-editorial-orange border-2 font-mono hover:bg-editorial-orange hover:text-editorial-cream font-mono text-xs sm:text-sm py-3 px-6 transition-colors duration-100 transform hover:scale-105"
              >
                All Tools
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FallacyDetector;
