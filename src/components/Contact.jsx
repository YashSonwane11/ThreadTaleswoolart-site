import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, Copy, Check, Sparkles } from 'lucide-react';
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

const Contact = () => {
  const [copiedText, setCopiedText] = useState('');

  const rawPhone = '+919309456377';
  const displayPhone = '+91 93094 56377';
  const displayEmail = 'rrayshirodkar53@gmail.com';
  const displayInstagram = '_thread.taless_';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary p-8 sm:p-12 md:p-16 rounded-[40px] border border-primary/10 shadow-premium text-center"
        >
          {/* Header Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
            <Sparkles className="h-3 w-3 fill-primary" />
            Custom Orders
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-dark mb-4">
            Create Your Dream Crochet Gift
          </h2>
          
          <p className="font-body text-sm text-text-dark/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Want a personalized crochet creation? Let's bring your unique ideas to life. Customize your colors, patterns, and sizes. Let's make something beautiful together!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-body text-xs font-semibold rounded-full hover:opacity-90 shadow-soft hover:shadow-premium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              WHATSAPP ORDER
            </a>
            <a
              href={`tel:${rawPhone}`}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-body text-xs font-semibold rounded-full hover:bg-primary-hover shadow-soft hover:shadow-premium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              CALL DIRECTLY
            </a>
            <a
              href="https://www.instagram.com/_thread.taless_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-text-dark font-body text-xs font-semibold rounded-full border border-primary/20 hover:border-primary/50 shadow-soft hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <InstagramIcon className="h-4 w-4" />
              INSTAGRAM PAGE
            </a>
          </div>

          {/* Contact Details Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-primary/10">
            {/* Phone */}
            <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/50 group">
              <Phone className="h-5 w-5 text-primary mb-2.5" />
              <span className="font-heading text-xs font-bold text-text-dark uppercase tracking-wider mb-1">
                Call / WhatsApp
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <a
                  href={`tel:${rawPhone}`}
                  className="font-body text-xs font-semibold text-text-dark hover:text-primary transition-colors"
                >
                  {displayPhone}
                </a>
                <button
                  onClick={() => handleCopy(displayPhone, 'phone')}
                  className="p-1 hover:bg-secondary text-text-dark/45 hover:text-primary rounded transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedText === 'phone' ? <Check className="h-3 w-3 text-accent" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/50">
              <InstagramIcon className="h-5 w-5 text-primary mb-2.5" />
              <span className="font-heading text-xs font-bold text-text-dark uppercase tracking-wider mb-1">
                Instagram
              </span>
              <a
                href="https://www.instagram.com/_thread.taless_/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs font-semibold text-text-dark hover:text-primary transition-colors mt-1"
              >
                @{displayInstagram}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/50 group">
              <Mail className="h-5 w-5 text-primary mb-2.5" />
              <span className="font-heading text-xs font-bold text-text-dark uppercase tracking-wider mb-1">
                Email
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <a
                  href={`mailto:${displayEmail}`}
                  className="font-body text-xs font-semibold text-text-dark hover:text-primary transition-colors break-all"
                >
                  {displayEmail}
                </a>
                <button
                  onClick={() => handleCopy(displayEmail, 'email')}
                  className="p-1 hover:bg-secondary text-text-dark/45 hover:text-primary rounded transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedText === 'email' ? <Check className="h-3 w-3 text-accent" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copy Alert Toast */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-text-dark text-white px-5 py-2.5 rounded-xl text-xs font-body shadow-premium z-50 flex items-center gap-1.5 border border-primary/20"
          >
            <Check className="h-3.5 w-3.5 text-accent" />
            Copied {copiedText === 'phone' ? 'Phone Number' : 'Email Address'} to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
