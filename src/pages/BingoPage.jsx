import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const rounds = [
  [
    {
      situation: 'Your friend posts a headline that matches your politics.',
      reaction: 'You repost it before opening the article.',
      system: 'System 1',
      concept: 'Confirmation bias',
      solution: 'Pause and check the source, date, and actual claim before sharing.'
    },
    {
      situation: 'A product has thousands of five-star reviews.',
      reaction: 'You compare the negative reviews and check whether the praise is specific.',
      system: 'System 2',
      concept: 'Social proof',
      solution: 'Good. You are using evidence instead of letting popularity do all the thinking.'
    },
    {
      situation: 'A video makes you instantly furious.',
      reaction: 'You comment before asking what happened before the clip started.',
      system: 'System 1',
      concept: 'Affect heuristic',
      solution: 'Strong emotion is a cue to slow down and look for missing context.'
    },
    {
      situation: 'Someone you dislike makes a decent point.',
      reaction: 'You separate the argument from the person and test the claim.',
      system: 'System 2',
      concept: 'Ad hominem',
      solution: 'Good. A claim can be evaluated even when the messenger is annoying.'
    },
    {
      situation: 'A news alert says a rare crime happened nearby.',
      reaction: 'You assume your whole neighborhood is suddenly unsafe.',
      system: 'System 1',
      concept: 'Availability bias',
      solution: 'Ask whether the event is common or just vivid and recent.'
    },
    {
      situation: 'Two influencers say a supplement changed their life.',
      reaction: 'You look for independent evidence and possible sponsorship.',
      system: 'System 2',
      concept: 'Appeal to authority',
      solution: 'Good. Expertise, incentives, and evidence should be checked separately.'
    },
    {
      situation: 'A comment has lots of likes.',
      reaction: 'You assume it must be the smartest take in the thread.',
      system: 'System 1',
      concept: 'Bandwagon effect',
      solution: 'Popularity can signal resonance, not truth. Look at the reasoning.'
    },
    {
      situation: 'You see a scary statistic in an infographic.',
      reaction: 'You look for the denominator and original dataset.',
      system: 'System 2',
      concept: 'Base-rate neglect',
      solution: 'Good. Numbers need context before they mean anything.'
    },
    {
      situation: 'Your first impression of a coworker is awkward.',
      reaction: 'You decide they are probably rude.',
      system: 'System 1',
      concept: 'Halo effect',
      solution: 'Treat first impressions as drafts, not verdicts.'
    },
    {
      situation: 'A politician frames a choice as freedom or control.',
      reaction: 'You ask what other options are being left out.',
      system: 'System 2',
      concept: 'False dichotomy',
      solution: 'Good. Forced either/or framing often hides alternatives.'
    },
    {
      situation: 'A brand raises its price.',
      reaction: 'You assume it must be higher quality.',
      system: 'System 1',
      concept: 'Price-quality heuristic',
      solution: 'Compare materials, reviews, warranty, and alternatives.'
    },
    {
      situation: 'A claim sounds too neat.',
      reaction: 'You ask what would prove it wrong.',
      system: 'System 2',
      concept: 'Falsifiability',
      solution: 'Good. Strong claims should survive attempts to disconfirm them.'
    },
    {
      situation: 'Your team loses after you wore a new shirt.',
      reaction: 'You decide the shirt is unlucky.',
      system: 'System 1',
      concept: 'Illusory correlation',
      solution: 'Random patterns can feel meaningful. Look for repeated evidence.'
    },
    {
      situation: 'A friend tells one dramatic story about a bad doctor.',
      reaction: 'You avoid generalizing from one anecdote.',
      system: 'System 2',
      concept: 'Hasty generalization',
      solution: 'Good. Anecdotes can be real and still not representative.'
    },
    {
      situation: 'You already spent money on a bad subscription.',
      reaction: 'You keep paying because quitting feels like admitting defeat.',
      system: 'System 1',
      concept: 'Sunk cost fallacy',
      solution: 'Ignore past cost. Ask whether you would buy it again today.'
    },
    {
      situation: 'A headline uses a shocking quote.',
      reaction: 'You read beyond the quote to see the full argument.',
      system: 'System 2',
      concept: 'Context collapse',
      solution: 'Good. Quotes can be technically accurate and still misleading.'
    }
  ],
  [
    {
      situation: 'A restaurant has a long line outside.',
      reaction: 'You assume it must be better than every empty place nearby.',
      system: 'System 1',
      concept: 'Social proof',
      solution: 'A crowd can mean quality, hype, location, or slow service. Check more signals.'
    },
    {
      situation: 'A post makes a bold claim about a study.',
      reaction: 'You look for the sample size and who funded it.',
      system: 'System 2',
      concept: 'Source evaluation',
      solution: 'Good. Research claims need method, context, and incentives.'
    },
    {
      situation: 'A stranger cuts you off in traffic.',
      reaction: 'You decide they are selfish and reckless.',
      system: 'System 1',
      concept: 'Fundamental attribution error',
      solution: 'Behavior has context. They may be careless, rushed, distracted, or in trouble.'
    },
    {
      situation: 'A creator you trust recommends an app.',
      reaction: 'You check whether the link is sponsored before deciding.',
      system: 'System 2',
      concept: 'Authority bias',
      solution: 'Good. Trust is useful, but incentives still matter.'
    },
    {
      situation: 'You remember three people who got sick after eating one food.',
      reaction: 'You decide that food is dangerous for everyone.',
      system: 'System 1',
      concept: 'Availability bias',
      solution: 'Memorable examples are not the same as reliable risk estimates.'
    },
    {
      situation: 'A debate clip shows one person stumbling.',
      reaction: 'You look for the full exchange before judging who had the stronger argument.',
      system: 'System 2',
      concept: 'Cherry picking',
      solution: 'Good. Clips are selections, not neutral summaries.'
    },
    {
      situation: 'You see "limited stock" on a checkout page.',
      reaction: 'You buy faster because losing it feels urgent.',
      system: 'System 1',
      concept: 'Scarcity bias',
      solution: 'Slow the purchase down. Urgency is often designed, not discovered.'
    },
    {
      situation: 'A claim feels obviously true.',
      reaction: 'You ask yourself what evidence would change your mind.',
      system: 'System 2',
      concept: 'Belief perseverance',
      solution: 'Good. Knowing your update conditions keeps beliefs flexible.'
    },
    {
      situation: 'A celebrity apologizes badly.',
      reaction: 'You assume everything they have ever said is worthless.',
      system: 'System 1',
      concept: 'Halo effect',
      solution: 'Separate the current behavior from unrelated claims.'
    },
    {
      situation: 'A chart starts its y-axis at a strange number.',
      reaction: 'You inspect the scale before reacting to the visual jump.',
      system: 'System 2',
      concept: 'Framing effect',
      solution: 'Good. Chart design can exaggerate or soften the same data.'
    },
    {
      situation: 'Your side wins an argument online.',
      reaction: 'You assume the other side has no good points at all.',
      system: 'System 1',
      concept: 'In-group bias',
      solution: 'Winning socially is not the same as reasoning well.'
    },
    {
      situation: 'A viral post names a villain.',
      reaction: 'You check whether the evidence actually supports blame.',
      system: 'System 2',
      concept: 'Scapegoating',
      solution: 'Good. Simple villains can make complex causes feel falsely tidy.'
    },
    {
      situation: 'You read a prediction after the result is known.',
      reaction: 'You feel like the outcome was obvious all along.',
      system: 'System 1',
      concept: 'Hindsight bias',
      solution: 'Ask what seemed likely before the outcome was available.'
    },
    {
      situation: 'Someone makes a claim with confident language.',
      reaction: 'You distinguish confidence from evidence.',
      system: 'System 2',
      concept: 'Confidence heuristic',
      solution: 'Good. Certainty can be style, not substance.'
    },
    {
      situation: 'A thread says "people are waking up."',
      reaction: 'You feel smarter just for agreeing with it.',
      system: 'System 1',
      concept: 'In-group flattery',
      solution: 'Notice when a message rewards identity more than understanding.'
    },
    {
      situation: 'A statistic sounds huge.',
      reaction: 'You convert it into plain counts or percentages before deciding.',
      system: 'System 2',
      concept: 'Numeracy check',
      solution: 'Good. Reframing numbers can reveal whether the claim is meaningful.'
    }
  ],
  [
    {
      situation: 'A podcast guest speaks calmly and fluently.',
      reaction: 'You assume they must be right.',
      system: 'System 1',
      concept: 'Fluency effect',
      solution: 'Smooth delivery makes claims easier to believe. Check the evidence.'
    },
    {
      situation: 'A friend shares a personal miracle cure story.',
      reaction: 'You feel empathy but avoid treating it as proof.',
      system: 'System 2',
      concept: 'Anecdotal evidence',
      solution: 'Good. Personal stories can matter without proving a general claim.'
    },
    {
      situation: 'A headline says one policy will destroy everything.',
      reaction: 'You accept the worst-case chain without asking how likely each step is.',
      system: 'System 1',
      concept: 'Slippery slope',
      solution: 'Break the chain into steps and ask for evidence at each link.'
    },
    {
      situation: 'A claim attacks your identity group.',
      reaction: 'You take a breath before deciding whether the claim is accurate.',
      system: 'System 2',
      concept: 'Identity-protective cognition',
      solution: 'Good. Defensiveness is human, but it can block useful evidence.'
    },
    {
      situation: 'You see the same claim three times in one day.',
      reaction: 'It starts to feel true because it feels familiar.',
      system: 'System 1',
      concept: 'Illusory truth effect',
      solution: 'Repeated exposure increases familiarity, not accuracy.'
    },
    {
      situation: 'A post compares two groups with different starting points.',
      reaction: 'You ask whether the comparison is fair.',
      system: 'System 2',
      concept: 'False equivalence',
      solution: 'Good. Comparisons need matching context and relevant differences.'
    },
    {
      situation: 'An expert changes their view after new evidence.',
      reaction: 'You call them unreliable for changing their mind.',
      system: 'System 1',
      concept: 'Consistency bias',
      solution: 'Updating can be a strength when the evidence changes.'
    },
    {
      situation: 'An article quotes a shocking percentage.',
      reaction: 'You check absolute numbers and baseline rates.',
      system: 'System 2',
      concept: 'Base-rate neglect',
      solution: 'Good. Percent changes can sound dramatic when baselines are small.'
    },
    {
      situation: 'You are tired and scrolling late.',
      reaction: 'You buy something because it feels like a small reward.',
      system: 'System 1',
      concept: 'Present bias',
      solution: 'Delay the decision. Fatigue makes immediate rewards more persuasive.'
    },
    {
      situation: 'A claim fits your worldview perfectly.',
      reaction: 'You search for the strongest counterargument.',
      system: 'System 2',
      concept: 'Confirmation bias',
      solution: 'Good. The claims we like most deserve extra scrutiny.'
    },
    {
      situation: 'A menu marks one option as "most popular."',
      reaction: 'You choose it without asking what you actually want.',
      system: 'System 1',
      concept: 'Default effect',
      solution: 'Defaults and labels reduce friction. Make the choice deliberately.'
    },
    {
      situation: 'Someone says "everyone knows this."',
      reaction: 'You ask what evidence would convince someone neutral.',
      system: 'System 2',
      concept: 'Appeal to common belief',
      solution: 'Good. Shared belief is not the same as shared proof.'
    },
    {
      situation: 'A person makes one typo in a serious argument.',
      reaction: 'You dismiss the whole argument as stupid.',
      system: 'System 1',
      concept: 'Genetic fallacy',
      solution: 'Presentation flaws can distract from whether the reasoning works.'
    },
    {
      situation: 'A viral image seems suspicious.',
      reaction: 'You reverse-search it before reacting.',
      system: 'System 2',
      concept: 'Source verification',
      solution: 'Good. Images travel without their original context.'
    },
    {
      situation: 'You lose a small bet.',
      reaction: 'You double down to win the money back.',
      system: 'System 1',
      concept: 'Loss aversion',
      solution: 'Losses pull us toward risk. Reset and evaluate the next choice alone.'
    },
    {
      situation: 'A source uses loaded wording.',
      reaction: 'You rewrite the claim neutrally before judging it.',
      system: 'System 2',
      concept: 'Loaded language',
      solution: 'Good. Neutral wording makes the actual argument easier to inspect.'
    }
  ]
];

const shuffleCards = (cards) =>
  cards
    .map((card) => ({ card, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ card }) => card);

const BingoPage = () => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [shuffleKey, setShuffleKey] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  const cards = useMemo(
    () => shuffleCards(rounds[roundIndex]).map((card, index) => ({ ...card, id: `${roundIndex}-${index}-${card.situation}` })),
    [roundIndex, shuffleKey]
  );

  const systemOneIds = cards.filter((card) => card.system === 'System 1').map((card) => card.id);
  const correctSelections = selectedCards.filter((id) => systemOneIds.includes(id)).length;
  const falseSelections = selectedCards.length - correctSelections;
  const missedSelections = systemOneIds.length - correctSelections;

  const toggleCard = (id) => {
    if (revealed) {
      setFlippedCards((current) =>
        current.includes(id) ? current.filter((cardId) => cardId !== id) : [...current, id]
      );
      return;
    }

    setSelectedCards((current) =>
      current.includes(id) ? current.filter((cardId) => cardId !== id) : [...current, id]
    );
  };

  const handleReveal = () => {
    setRevealed(true);
    setFlippedCards([...selectedCards]);
  };

  const handleReset = () => {
    setSelectedCards([]);
    setRevealed(false);
    setFlippedCards([]);
  };

  const handleShuffle = () => {
    const nextRoundIndex = (roundIndex + 1) % rounds.length;
    setRoundIndex(nextRoundIndex);
    setShuffleKey((current) => current + 1);
    setSelectedCards([]);
    setRevealed(false);
    setFlippedCards([]);
  };

  return (
    <>
      <div className="bg-beige-100 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10 relative">
            <Link
              to="/module/1"
              className="block md:absolute md:top-0 md:right-0 mb-8 md:mb-0 text-xs md:text-sm font-mono bg-editorial-orange text-editorial-cream border-2 border-editorial-orange hover:bg-editorial-charcoal hover:border-editorial-charcoal py-2 px-4 transition-all transform hover:scale-105"
            >
              Learn more in Module 1 -&gt;
            </Link>
            <p className="font-mono text-xs uppercase tracking-widest text-editorial-orange mb-3">
              Round {roundIndex + 1} of {rounds.length}
            </p>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-editorial-charcoal mb-4">
              System 1 or System 2?
            </h1>
            <p className="text-lg text-editorial-charcoal/80 font-light max-w-3xl mx-auto mb-6">
              Read each everyday situation and reaction. Select every card that shows fast, automatic System 1 thinking, then reveal the answers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                  Show Results ({selectedCards.length} selected)
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="bg-editorial-charcoal text-editorial-cream border-2 border-editorial-charcoal font-mono hover:bg-editorial-orange hover:border-editorial-orange text-sm py-3 px-8 transition-all transform hover:scale-105"
                >
                  Reset Same 16
                </button>
              )}
              <button
                onClick={handleShuffle}
                className="bg-editorial-cream text-editorial-charcoal border-2 border-editorial-charcoal font-mono hover:bg-editorial-charcoal hover:text-editorial-cream text-sm py-3 px-8 transition-all transform hover:scale-105"
              >
                Shuffle New 16
              </button>
            </div>
          </div>

          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto mb-8 bg-editorial-cream border-4 border-editorial-charcoal p-5 text-editorial-charcoal"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <ResultStat label="Correct System 1" value={`${correctSelections}/${systemOneIds.length}`} />
                <ResultStat label="System 2 Picked" value={falseSelections} />
                <ResultStat label="Missed System 1" value={missedSelections} />
                <ResultStat label="Score" value={`${Math.round((correctSelections / systemOneIds.length) * 100)}%`} />
              </div>
              <p className="font-mono text-xs text-editorial-charcoal/70 text-center mt-4">
                Selected cards are flipped. Click any card after revealing to inspect its answer.
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {cards.map((card) => (
              <BingoCard
                key={card.id}
                card={card}
                isSelected={selectedCards.includes(card.id)}
                isMissed={revealed && card.system === 'System 1' && !selectedCards.includes(card.id)}
                isRevealed={revealed}
                isFlipped={flippedCards.includes(card.id)}
                onClick={() => toggleCard(card.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const ResultStat = ({ label, value }) => (
  <div>
    <p className="font-playfair text-3xl font-bold">{value}</p>
    <p className="font-mono text-xs uppercase text-editorial-charcoal/70">{label}</p>
  </div>
);

const BingoCard = ({ card, isSelected, isMissed, isRevealed, isFlipped, onClick }) => {
  const frontTone = isSelected
    ? 'bg-editorial-orange border-editorial-orange text-editorial-cream'
    : isMissed
      ? 'bg-editorial-cream border-editorial-orange text-editorial-charcoal'
      : 'bg-editorial-cream border-editorial-cream text-editorial-charcoal hover:border-editorial-charcoal';

  const backTone = card.system === 'System 1'
    ? 'bg-editorial-charcoal border-editorial-charcoal text-editorial-cream'
    : 'bg-editorial-cream border-editorial-charcoal text-editorial-charcoal';

  return (
    <motion.button
      type="button"
      className="relative min-h-[17rem] cursor-pointer text-left"
      onClick={onClick}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isSelected}
    >
      <AnimatePresence mode="wait">
        {!isRevealed || !isFlipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: isRevealed ? -90 : 0, opacity: isRevealed ? 0 : 1 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`absolute inset-0 border-4 shadow-lg p-4 flex flex-col justify-between transition-colors ${frontTone}`}
          >
            <div>
              <p className="font-mono text-[0.68rem] uppercase opacity-70 mb-3">Situation</p>
              <p className="text-base font-semibold leading-snug">{card.situation}</p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase opacity-70 mb-2">Reaction</p>
              <p className="text-sm leading-snug">{card.reaction}</p>
            </div>
            {isSelected && (
              <span className="absolute top-3 right-3 w-7 h-7 bg-editorial-cream text-editorial-orange rounded-full flex items-center justify-center font-bold text-sm">
                OK
              </span>
            )}
            {isMissed && (
              <span className="absolute top-3 right-3 bg-editorial-orange text-editorial-cream font-mono text-[0.65rem] px-2 py-1">
                Missed
              </span>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`absolute inset-0 border-4 shadow-lg p-4 flex flex-col justify-between ${backTone}`}
          >
            <div>
              <p className="font-mono text-[0.68rem] uppercase opacity-70 mb-3">Answer</p>
              <p className="font-playfair font-bold text-3xl leading-none mb-4">{card.system}</p>
              <p className="text-sm leading-snug">{card.solution}</p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase opacity-70 mb-2">Key bias or fallacy</p>
              <p className="font-mono text-xs font-semibold">{card.concept}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default BingoPage;
