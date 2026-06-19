import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show desktop buttons after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Desktop View: Floating Actions (appear on scroll) */}
      <AnimatePresence>
        {isVisible && (
          <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3.5 items-end">
            
            {/* 1. Phone Call Floating Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href="tel:+919309456377"
              className="p-3.5 bg-primary text-white rounded-full shadow-premium flex items-center justify-center cursor-pointer relative group"
              style={{ boxShadow: '0 8px 25px rgba(217, 165, 165, 0.4)' }}
              aria-label="Call +91 93094 56377"
            >
              <span className="absolute inset-0 rounded-full bg-primary opacity-25 animate-ping -z-10" />
              <Phone className="h-5 w-5 fill-current" />
              
              <span className="absolute right-full mr-3 bg-white text-text-dark text-[10px] font-body font-bold py-1 px-2.5 rounded-lg border border-primary/10 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
                Call Us 📞
              </span>
            </motion.a>

            {/* 2. WhatsApp Floating Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#25D366] text-white rounded-full shadow-premium flex items-center justify-center cursor-pointer relative group"
              style={{ boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)' }}
              aria-label="Chat on WhatsApp"
            >
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping -z-10" />
              <MessageCircle className="h-5 w-5 fill-current" />
              
              <span className="absolute right-full mr-3 bg-white text-text-dark text-[10px] font-body font-bold py-1 px-2.5 rounded-lg border border-primary/10 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
                WhatsApp Order 💬
              </span>
            </motion.a>

          </div>
        )}
      </AnimatePresence>

      {/* Mobile View: Sticky Bottom Bar (Always visible while scrolling) */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFDFB]/90 backdrop-blur-md border-t border-primary/10 shadow-[0_-8px_30px_rgba(75,55,47,0.08)] flex items-center gap-3 p-3"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}
      >
        <a
          href="tel:+919309456377"
          className="flex-1 py-3 bg-white text-text-dark font-body text-xs font-bold rounded-xl border border-primary/20 flex items-center justify-center gap-2 active:bg-secondary transition-all shadow-soft"
        >
          <Phone className="h-4 w-4 text-primary fill-current" />
          <span>Call Now</span>
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.2] py-3 bg-[#25D366] text-white font-body text-xs font-bold rounded-xl flex items-center justify-center gap-2 active:opacity-90 transition-all shadow-soft relative overflow-hidden"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
          <span>WhatsApp Order</span>
        </a>
      </div>
    </>
  );
};

export default StickyActions;
