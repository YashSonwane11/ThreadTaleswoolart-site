import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logoImg from '../assets/LOGO.jpg';

const InstagramIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Creations', href: '#creations' },
    { name: 'Design Lab 🎨', href: '#customizer' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass shadow-soft'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <img
              src={logoImg}
              alt="ThreadTales Logo"
              className="h-9 w-9 rounded-full object-cover border border-primary/20 shadow-soft group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-heading text-2xl font-bold tracking-wide text-text-dark">
              ThreadTales
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-text-dark hover:text-primary transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/_thread.taless_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-dark hover:text-primary hover:bg-secondary rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/9309456377?text=Hi%20ThreadTales!%20I'd%20like%20to%20place%20a%20custom%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold tracking-wider hover:bg-primary-hover shadow-soft transition-all duration-300 flex items-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4" />
              ORDER NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass shadow-premium transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3 bg-[#FFFDFB]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md font-body text-base font-medium text-text-dark hover:text-primary hover:bg-secondary transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-secondary px-3">
              <a
                href="https://www.instagram.com/_thread.taless_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-dark hover:text-primary"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="text-sm font-body">Instagram</span>
              </a>
              <a
                href="https://wa.me/9309456377?text=Hi%20ThreadTales!%20I'd%20like%20to%20place%20a%20custom%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded-full text-xs font-semibold hover:bg-primary-hover shadow-soft flex items-center gap-1.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
