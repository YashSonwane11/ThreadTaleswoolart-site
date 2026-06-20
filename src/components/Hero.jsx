import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

// Real product images imports
import imgHeroGallery from '../assets/hero_gallery.webp';
import imgCustomGift from '../assets/custom_gift.webp';
import imgFlowerBouquet from '../assets/flower_bouquet.webp';
import imgBowKeychain from '../assets/bow_keychain.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Hero Content (Left Side) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Handmade Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary border border-primary/20 shadow-soft text-primary font-body text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary fill-primary" />
              Handmade With Love
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-heading text-text-dark mb-6"
            >
              Every Stitch <br className="hidden sm:inline" />
              Tells A Story
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg font-body text-text-dark/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Handcrafted Crochet Creations Made With Love. From adorable keychains to customized gifts, every piece is designed to bring warmth to your heart. 🌼
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#creations"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-body text-sm font-semibold rounded-full hover:bg-primary-hover shadow-soft hover:shadow-premium transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-text-dark font-body text-sm font-semibold rounded-full border border-primary/20 hover:border-primary/50 shadow-soft hover:bg-secondary transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Custom Order
              </a>
            </motion.div>
          </div>

          {/* Overlapping Visual Collage (Right Side) */}
          <div className="lg:col-span-7 flex justify-center items-center mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3] flex items-center justify-center"
            >
              {/* 1. Large Main Card (hero_gallery) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[58%] aspect-[4/5.2] rounded-2xl overflow-hidden shadow-premium bg-white p-2.5 pb-8 rotate-[-2deg] z-20 border border-primary/10 relative flex flex-col justify-between"
              >
                <div className="w-full aspect-[4/4.2] overflow-hidden rounded-xl">
                  <img
                    src={imgHeroGallery}
                    alt="ThreadTales Main Collection"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="text-center font-heading text-xs sm:text-sm font-bold italic text-text-dark/80 mt-2 tracking-wider">
                  Our Handcrafts 🌼
                </div>
              </motion.div>

              {/* 2. Top Right Card (flower_bouquet) */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [4, 6, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute w-[38%] aspect-[4/4.8] rounded-xl overflow-hidden shadow-soft bg-white p-2 pb-6 right-[2%] top-[5%] z-30 border border-primary/10 flex flex-col justify-between"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    src={imgFlowerBouquet}
                    alt="Crochet Flower Bouquet"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="text-center font-heading text-[10px] sm:text-xs font-bold italic text-text-dark/85 mt-1">
                  Chafa Bouquet 💐
                </div>
              </motion.div>

              {/* 3. Bottom Left Card (custom_gift) */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-8, -6, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute w-[42%] aspect-[4/3.8] rounded-xl overflow-hidden shadow-soft bg-white p-2 pb-6 left-[2%] bottom-[8%] z-30 border border-primary/10 flex flex-col justify-between"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={imgCustomGift}
                    alt="Custom Crochet Gift Set"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="text-center font-heading text-[10px] sm:text-xs font-bold italic text-text-dark/85 mt-1">
                  With Love Gift 🎁
                </div>
              </motion.div>

              {/* 4. Bottom Right Card (bow_keychain) */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [8, 6, 8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute w-[36%] aspect-[4/5] rounded-xl overflow-hidden shadow-soft bg-white p-2 pb-6 right-[6%] bottom-[2%] z-10 border border-primary/10 flex flex-col justify-between"
              >
                <div className="w-full aspect-[4/4.2] overflow-hidden rounded-lg">
                  <img
                    src={imgBowKeychain}
                    alt="Aesthetic Bow Keychain"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="text-center font-heading text-[10px] sm:text-xs font-bold italic text-text-dark/85 mt-1">
                  Cozy Bow 🎀
                </div>
              </motion.div>

              {/* Decorative backgrounds to add depth */}
              <div className="absolute top-[10%] left-[15%] w-16 h-16 rounded-full bg-accent/10 blur-xl -z-10" />
              <div className="absolute bottom-[10%] right-[10%] w-28 h-28 rounded-full bg-primary/10 blur-2xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
