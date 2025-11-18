import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-editorial-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand and Copyright */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-4xl font-semibold text-editorial-cream">Doublethink</h3>
            <p className="font-light text-editorial-cream mt-4">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-playfair font-semibold tracking-wider text-editorial-cream mb-4 text-xl">Navigate</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="font-mono text-editorial-cream hover:font-bold">Home</Link></li>
              <li><Link to="/tools" className="font-mono text-editorial-cream hover:font-bold">Tools</Link></li>
              <li><Link to="/#about" className="font-mono text-editorial-cream hover:font-bold">About</Link></li>
              <li><Link to="/#course" className="font-mono text-editorial-cream hover:font-bold">Learn</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-playfair font-semibold tracking-wider text-editorial-cream mb-4 text-xl">Follow us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://x.com/BerliozGordon" target="_blank" rel="noopener noreferrer" className="font-mono text-editorial-cream hover:font-bold">X</a>
              <a href="https://lisablas.github.io/BleepBloop/" target="_blank" rel="noopener noreferrer" className="font-mono text-editorial-cream hover:font-bold">Website</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
