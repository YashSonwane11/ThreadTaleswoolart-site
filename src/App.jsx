import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCreations from './components/FeaturedCreations';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import CursorSparkles from './components/CursorSparkles';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading for smoother animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Craft Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#FFFDFB] z-[9999] flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Spinning Yarn Ball / Flower Loader Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="text-primary mb-4"
            >
              <svg className="w-16 h-16 fill-current" viewBox="0 0 100 100">
                <path d="M50 15A35 35 0 0 0 15 50A35 35 0 0 0 50 85A35 35 0 0 0 85 50A35 35 0 0 0 50 15 M50 22a28 28 0 0 1 28 28 28 28 0 0 1-28 28 28 28 0 0 1-28-28 28 28 0 0 1 28-28M42 35a5 5 0 1 0 10 0 5 5 0 1 0-10 0M58 45a5 5 0 1 0 10 0 5 5 0 1 0-10 0M34 55a5 5 0 1 0 10 0 5 5 0 1 0-10 0" />
              </svg>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-2xl font-bold tracking-widest text-text-dark"
            >
              ThreadTales
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-body text-[10px] text-text-dark/50 tracking-widest uppercase mt-2"
            >
              From Yarn To Your Heart 🌼
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen bg-[#FFFDFB] text-[#4B372F]"
        >
          {/* 1. BubbleBackground covering the entire website */}
          <BubbleBackground
            interactive={true}
            colors={{
              first: "217,165,165",
              second: "247,241,236",
              third: "165,176,155",
              fourth: "190,120,120",
              fifth: "255,253,251",
              sixth: "120,86,70"
            }}
            className="fixed inset-0 z-0 opacity-80"
          />

          {/* 2. Soft blur overlay above background */}
          <div className="fixed inset-0 z-[1] bg-[#FFFDFB]/60 backdrop-blur-[1px] pointer-events-none" />

          {/* Interactive cursor sparkles trail */}
          <CursorSparkles />

          {/* 3. Main content at z-10 */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Glass Navbar */}
            <Navbar />

            {/* Sections */}
            <main className="flex-grow">
              <Hero />
              <About />
              <FeaturedCreations />
              <WhyChooseUs />
              <Contact />
            </main>

            {/* Luxury Footer */}
            <Footer />
          </div>

          {/* Sticky Actions Widget (WhatsApp & Call) */}
          <StickyActions />
        </motion.div>
      )}
    </>
  );
}

export default App;
