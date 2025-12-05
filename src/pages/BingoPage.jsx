import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const BingoPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  const bingoCards = [
    {
      scenario: "You immediately trust a news headline that confirms what you already believe",
      response: "Pause and ask: What evidence supports this? What might contradict it?"
    },
    {
      scenario: "You judge someone's entire character based on one action",
      response: "Consider: What context am I missing? What else do I know about this person?"
    },
    {
      scenario: "You assume correlation means causation in a study you read",
      response: "Question: Could there be other factors? Is this just a coincidence?"
    },
    {
      scenario: "You dismiss an argument because you don't like the person making it",
      response: "Separate the message from the messenger. Is the argument itself valid?"
    },
    {
      scenario: "You share a shocking statistic without checking the source",
      response: "Verify: Where did this come from? Is the source credible and unbiased?"
    },
    {
      scenario: "You think an event is more likely because you can easily recall examples",
      response: "Ask: Is this actually common, or just memorable? What do the data say?"
    },
    {
      scenario: "You believe your first impression of someone must be accurate",
      response: "Recognize: First impressions are often wrong. What new information have I learned?"
    },
    {
      scenario: "You only seek out information that supports your existing view",
      response: "Challenge yourself: What would someone who disagrees say? Seek opposing views."
    },
    {
      scenario: "You assume that because everyone else believes it, it must be true",
      response: "Think independently: What's the actual evidence? Popularity doesn't equal truth."
    },
    {
      scenario: "You make a snap judgment about a complex political issue",
      response: "Slow down: What are the multiple perspectives? What am I oversimplifying?"
    },
    {
      scenario: "You trust your gut feeling over statistical evidence",
      response: "Balance intuition with data: What do the numbers actually show?"
    },
    {
      scenario: "You assume recent events are more important than they actually are",
      response: "Get perspective: How significant is this in the bigger picture and long-term?"
    },
    {
      scenario: "You think you're immune to advertising and manipulation",
      response: "Stay humble: Everyone is susceptible. How might I be influenced without realizing?"
    },
    {
      scenario: "You believe a pattern exists in random data",
      response: "Test it: Is this a real pattern or am I seeing what I want to see?"
    },
    {
      scenario: "You overestimate how much you knew after learning the outcome",
      response: "Be honest: Did I really predict this, or does it just seem obvious now?"
    },
    {
      scenario: "You assume expensive products are always better quality",
      response: "Evaluate objectively: What's the actual quality? Am I paying for branding?"
    }
  ];

  const toggleCard = (index) => {
    if (revealed) {
      // After reveal, toggle flip state
      if (flippedCards.includes(index)) {
        setFlippedCards(flippedCards.filter(i => i !== index));
      } else {
        setFlippedCards([...flippedCards, index]);
      }
    } else {
      // Before reveal, toggle selection
      if (selectedCards.includes(index)) {
        setSelectedCards(selectedCards.filter(i => i !== index));
      } else {
        setSelectedCards([...selectedCards, index]);
      }
    }
  };

  const handleReveal = () => {
    setRevealed(true);
    // Initially flip all selected cards to show responses
    setFlippedCards([...selectedCards]);
  };

  const handleReset = () => {
    setSelectedCards([]);
    setRevealed(false);
    setFlippedCards([]);
  };

  return (
    <>
      <div className="bg-beige-100 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <Link
              to="/module/1"
              className="absolute top-0 right-0 text-xs md:text-sm font-mono bg-editorial-orange text-editorial-cream border-2 border-editorial-orange hover:bg-editorial-charcoal hover:border-editorial-charcoal py-2 px-4 transition-all transform hover:scale-105"
            >
              Learn more in Module 1 →
            </Link>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-editorial-charcoal mb-4">
              System 1 Bingo
            </h1>
            <p className="text-lg text-editorial-charcoal/80 font-light mb-6">
              Select all you can relate to, then reveal to see System 2 responses
            </p>
            <div className="flex justify-center gap-4">
              {!revealed ? (
                <button
                  onClick={handleReveal}
                  disabled={selectedCards.length === 0}
                  className={`font-mono text-sm py-3 px-8 transition-all transform ${
                    selectedCards.length === 0
                      ? 'bg-editorial-charcoal/20 text-editorial-charcoal/40 cursor-not-allowed'
                      : 'bg-editorial-orange text-editorial-cream border-2 border-editorial-orange hover:bg-editorial-charcoal hover:border-editorial-charcoal hover:scale-105'
                  }`}
                >
                  Reveal System 2 Responses ({selectedCards.length} selected)
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="bg-editorial-charcoal text-editorial-cream border-2 border-editorial-charcoal font-mono hover:bg-editorial-orange hover:border-editorial-orange text-sm py-3 px-8 transition-all transform hover:scale-105"
                >
                  Reset & Try Again
                </button>
              )}
            </div>
          </div>

          {/* Bingo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {bingoCards.map((card, index) => (
              <BingoCard
                key={index}
                scenario={card.scenario}
                response={card.response}
                isSelected={selectedCards.includes(index)}
                isRevealed={revealed}
                isFlipped={flippedCards.includes(index)}
                onClick={() => toggleCard(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Bingo Card Component
const BingoCard = ({ scenario, response, isSelected, isRevealed, isFlipped, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-square cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          // Before reveal - Scenario (selection mode)
          <motion.div
            key="front"
            initial={{ rotateY: 0 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 p-4 shadow-lg flex flex-col items-center justify-center text-center transition-all ${
              isSelected
                ? 'bg-editorial-orange border-4 border-editorial-orange'
                : 'bg-editorial-cream border-4 border-editorial-cream hover:border-editorial-charcoal'
            }`}
          >
            <p className={`text-sm md:text-base font-light leading-snug ${
              isSelected ? 'text-editorial-cream' : 'text-editorial-charcoal'
            }`}>
              {scenario}
            </p>
            {isSelected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 w-6 h-6 bg-editorial-cream rounded-full flex items-center justify-center"
              >
                <span className="text-editorial-orange font-bold text-sm">✓</span>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // After reveal - Flippable cards
          <>
            {!isFlipped ? (
              // Showing scenario side
              <motion.div
                key="scenario"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 p-4 shadow-lg flex flex-col items-center justify-center text-center ${
                  isSelected
                    ? 'bg-editorial-orange border-4 border-editorial-orange'
                    : 'bg-editorial-cream/50 border-4 border-editorial-cream'
                }`}
              >
                <p className={`text-sm md:text-base font-light leading-snug ${
                  isSelected ? 'text-editorial-cream' : 'text-editorial-charcoal/60'
                }`}>
                  {scenario}
                </p>
              </motion.div>
            ) : (
              // Showing response side
              <motion.div
                key="response"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 p-4 shadow-lg flex flex-col items-center justify-center text-center ${
                  isSelected
                    ? 'bg-editorial-charcoal border-4 border-editorial-charcoal'
                    : 'bg-editorial-cream/50 border-4 border-editorial-cream'
                }`}
              >
                <p className={`text-sm md:text-base font-light leading-snug ${
                  isSelected ? 'text-editorial-cream' : 'text-editorial-charcoal/60'
                }`}>
                  {isSelected ? response : scenario}
                </p>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Hover effect overlay */}
      {isHovered && !isRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none border-4 border-editorial-orange"
        />
      )}
    </motion.div>
  );
};

export default BingoPage;

