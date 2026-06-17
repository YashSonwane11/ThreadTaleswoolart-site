import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show buttons after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi ThreadTales! 🌼 I'd like to ask about a custom crochet creation.");
    window.open(`https://wa.me/919309456377?text=${text}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919309456377';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
          
          {/* 1. Phone Call Floating Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleCallClick}
            className="p-3.5 bg-primary text-white rounded-full shadow-premium flex items-center justify-center cursor-pointer relative group"
            style={{ boxShadow: '0 8px 25px rgba(217, 165, 165, 0.4)' }}
            aria-label="Call +91 93094 56377"
          >
            {/* Pulsing ring for call button */}
            <span className="absolute inset-0 rounded-full bg-primary opacity-25 animate-ping -z-10" />
            <Phone className="h-5 w-5 fill-current" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-white text-text-dark text-[10px] font-body font-bold py-1 px-2.5 rounded-lg border border-primary/10 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
              Call Us 📞
            </span>
          </motion.button>

          {/* 2. WhatsApp Floating Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleWhatsAppClick}
            className="p-3.5 bg-[#25D366] text-white rounded-full shadow-premium flex items-center justify-center cursor-pointer relative group"
            style={{ boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)' }}
            aria-label="Chat on WhatsApp"
          >
            {/* Pulsing ring for WhatsApp button */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping -z-10" />
            <MessageCircle className="h-5 w-5 fill-current" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-white text-text-dark text-[10px] font-body font-bold py-1 px-2.5 rounded-lg border border-primary/10 shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
              WhatsApp 💬
            </span>
          </motion.button>

        </div>
      )}
    </AnimatePresence>
  );
};

export default StickyActions;
