import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/solid';

const getYear = (headline) => headline.dateLabel?.slice(0, 4) || headline.publishedAt?.slice(0, 4);

const FilterSection = ({
  headlines,
  setFilteredHeadlines,
  activeFilters,
  setActiveFilters
}) => {
  const [openCategories, setOpenCategories] = useState({
    year: true,
    source: false,
    topic: false,
    classification: false,
  });

  const allYears = [...new Set(headlines.map(getYear).filter(Boolean))].sort((a, b) => b.localeCompare(a));
  const allSources = [...new Set(headlines.map((headline) => headline.source).filter(Boolean))].sort();
  const allTopics = [...new Set(headlines.map((headline) => headline.topic).filter(Boolean))].sort();
  const allClassifications = ['Framing', 'Cognitive Bias', 'Logical Fallacy'].filter((classification) =>
    headlines.some((headline) => headline.classificationGroup === classification)
  );
  const filters = {
    year: {
      label: 'Year',
      options: allYears,
    },
    source: {
      label: 'Outlet',
      options: allSources,
    },
    topic: {
      label: 'Topic',
      options: allTopics,
    },
    classification: {
      label: 'Classification',
      options: allClassifications,
    },
  };

  useEffect(() => {
    let filtered = [...headlines];

    if (activeFilters.year) {
      filtered = filtered.filter((headline) => getYear(headline) === activeFilters.year);
    }

    if (activeFilters.source) {
      filtered = filtered.filter((headline) => headline.source === activeFilters.source);
    }

    if (activeFilters.topic) {
      filtered = filtered.filter((headline) => headline.topic === activeFilters.topic);
    }

    if (activeFilters.classification) {
      filtered = filtered.filter((headline) =>
        headline.classificationGroup === activeFilters.classification
      );
    }

    setFilteredHeadlines(filtered);
  }, [activeFilters, headlines, setFilteredHeadlines]);

  const handleFilterSelect = (filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value,
    }));
  };

  const clearFilter = (filterType, event) => {
    event.stopPropagation();
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: null,
    }));
  };

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const hasActiveFilters = Object.values(activeFilters).some(Boolean);

  const clearAllFilters = () => {
    setActiveFilters({ year: null, source: null, topic: null, classification: null });
  };

  return (
    <div className="text-editorial-charcoal">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FunnelIcon className="hidden md:block h-5 w-5 text-editorial-charcoal mr-2" aria-hidden="true" />
          <h2 className="text-2xl font-bold font-playfair text-editorial-charcoal">Filter by:</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm font-sans text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Clear all filters"
          >
            Clear All
          </button>
        )}
      </div>
      {Object.entries(filters).map(([key, { label, options, formatOption }]) => (
        <div key={key} className="mb-4 pb-4 border-b border-gray-300 last:border-b-0">
          <div className="flex justify-between items-center cursor-pointer font-sans" onClick={() => toggleCategory(key)}>
            <h3 className="text-md font-semibold tracking-wider font-sans mb-2 text-editorial-charcoal">{label}</h3>
            <div className="flex items-center">
              {activeFilters[key] && (
                <button
                  onClick={(event) => clearFilter(key, event)}
                  className="text-xs text-gray-500 hover:text-editorial-charcoal mr-2 font-sans"
                >
                  Clear
                </button>
              )}
              <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${openCategories[key] ? 'rotate-180' : ''}`} />
            </div>
          </div>
          {openCategories[key] && (
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleFilterSelect(key, option)}
                  className={`inline-block border px-3 py-1 text-xs transition-colors duration-200 ${
                    activeFilters[key] === option
                      ? 'bg-editorial-orange border-editorial-orange font-mono text-editorial-cream'
                      : 'bg-transparent text-editorial-charcoal border-editorial-charcoal hover:bg-editorial-orange hover:border-editorial-orange hover:text-editorial-cream font-mono'
                  }`}
                >
                  {formatOption ? formatOption(option) : option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
