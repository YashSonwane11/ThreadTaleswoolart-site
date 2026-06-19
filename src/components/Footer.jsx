import React from 'react';
import { Heart, MessageCircle, Mail } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

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

const Footer = () => {
  return (
    <footer className="bg-secondary/40 pt-12 pb-24 md:py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="font-heading text-2xl font-bold tracking-wide text-text-dark">
              ThreadTales
            </span>
          </div>

          {/* Tagline */}
          <p className="font-body text-xs italic text-text-dark/70">
            From Yarn To Your Heart 🌼
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/_thread.taless_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-primary/10 hover:border-primary text-text-dark hover:text-primary shadow-soft transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-primary/10 hover:border-primary text-text-dark hover:text-primary shadow-soft transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:rrayshirodkar53@gmail.com"
              className="p-2.5 rounded-full bg-white border border-primary/10 hover:border-primary text-text-dark hover:text-primary shadow-soft transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-primary/20" />

          {/* Copyright */}
          <p className="font-body text-[10px] text-text-dark/50">
            &copy; 2026 ThreadTales. Handmade with Love. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
