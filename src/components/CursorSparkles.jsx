import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorSparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    const colors = ['#D9A5A5', '#F7F1EC', '#A5B09B', '#4B372F'];

    const handleMouseMove = (e) => {
      const now = Date.now();
      // Throttle sparkle creation to every 60ms for optimal performance
      if (now - lastTime < 60) return;
      lastTime = now;

      const newSparkle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY + window.scrollY, // Adjust for scroll height
        size: Math.random() * 12 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.5 ? 'star' : 'circle',
        rotate: Math.random() * 360,
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]); // Keep max 15 active sparkles
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-[49] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sp) => (
          <motion.div
            key={sp.id}
            initial={{ opacity: 1, scale: 0, x: sp.x, y: sp.y, rotate: sp.rotate }}
            animate={{
              opacity: 0,
              scale: 1.5,
              y: sp.y - 45,
              x: sp.x + (Math.random() - 0.5) * 35,
              rotate: sp.rotate + 180,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute"
            style={{
              width: sp.size,
              height: sp.size,
              color: sp.color,
            }}
          >
            {sp.type === 'star' ? (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2l2.4 7.4 7.6.6-5.8 5.2 1.8 7.8-6-4.8-6 4.8 1.8-7.8-5.8-5.2 7.6-.6z" />
              </svg>
            ) : (
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: sp.color, filter: 'blur(1px)' }}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorSparkles;
