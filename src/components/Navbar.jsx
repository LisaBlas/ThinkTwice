import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) {
        setIsOpen(false);
      }

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goHome = () => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const goToHomeSection = (sectionId) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav
      className={`bg-editorial-cream text-gray-900 font-mono p-4 flex justify-between items-center sticky top-0 z-50 shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <button
          onClick={goHome}
          className="text-xl font-bold font-playfair focus:outline-none"
        >
          ThinkTwice
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 font-mono text-editorial-charcoal">

        {/* Home */}
        <button
          onClick={goHome}
          className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
        >
          Home
        </button>

        {/* Articles */}
        <Link
          to="/articles"
          onClick={closeMenu}
          className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
        >
          Articles
        </Link>

        {/* Bingo */}
        <Link
          to="/bingo"
          onClick={closeMenu}
          className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
        >
          Bingo
        </Link>

        {/* Tools */}
        <Link
          to="/tools"
          onClick={closeMenu}
          className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
        >
          Tools
        </Link>

        {/* About */}
        <button
          onClick={() => goToHomeSection('about')}
          className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
        >
          About
        </button>

        {/* Learn */}
        <button
          onClick={() => goToHomeSection('course')}
          className="bg-editorial-orange hover:opacity-90 text-white py-2 px-4 transition-all font-normal hover:font-bold"
        >
          Learn
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-editorial-charcoal" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-editorial-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t-2 border-editorial-orange bg-editorial-cream flex flex-col items-center space-y-4 py-4 shadow-md">

          {/* Home */}
          <button
            onClick={goHome}
            className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
          >
            Home
          </button>

          {/* Articles */}
          <Link
            to="/articles"
            onClick={closeMenu}
            className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
          >
            Articles
          </Link>

          {/* Bingo */}
          <Link
            to="/bingo"
            onClick={closeMenu}
            className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
          >
            Bingo
          </Link>

          {/* Tools */}
          <Link
            to="/tools"
            onClick={closeMenu}
            className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
          >
            Tools
          </Link>

          {/* About */}
          <button
            onClick={() => goToHomeSection('about')}
            className="hover:text-editorial-orange transition-all font-normal hover:font-bold"
          >
            About
          </button>

          {/* Learn */}
          <button
            onClick={() => goToHomeSection('course')}
            className="bg-editorial-orange hover:opacity-90 text-white py-2 px-4 transition-all font-normal"
          >
            Learn
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
