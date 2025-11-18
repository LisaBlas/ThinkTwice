import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Close mobile menu when scrolling
      if (isOpen) {
        setIsOpen(false);
      }
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar, { passive: true });
    };
  }, [lastScrollY, isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    setIsOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/#about');
    } else {
      scrollToSection('about');
    }
  };

  return (
    <nav className={`bg-editorial-cream text-gray-900 font-mono p-4 flex justify-between items-center sticky top-0 z-50 shadow-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center">
        <Link to="/" onClick={handleHomeClick} className="text-xl font-bold font-playfair focus:outline-none">
          Doublethink
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 font-mono text-editorial-charcoal">
        <button onClick={handleHomeClick} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Home</button>
        <Link to="/tools" className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Tools</Link>
        <Link to="/#about" onClick={() => setIsOpen(false)} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">About</Link>
        <Link to="/#course" className="bg-editorial-orange hover:opacity-90 text-white py-2 px-4 transition-all font-normal hover:font-bold">
          Learn
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XMarkIcon className="w-6 h-6 text-editorial-charcoal" /> : <Bars3Icon className="w-6 h-6 text-editorial-charcoal" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t-2 border-editorial-orange bg-editorial-cream flex flex-col items-center space-y-4 py-4 shadow-md">
          <button onClick={handleHomeClick} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Home</button>
          <Link to="/tools" onClick={() => setIsOpen(false)} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Tools</Link>
          <Link to="/#about" onClick={() => setIsOpen(false)} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">About</Link>
          <Link to="/#course" onClick={() => setIsOpen(false)} className="bg-editorial-orange hover:opacity-90 text-white py-2 px-4 transition-all font-normal">
            Learn
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;