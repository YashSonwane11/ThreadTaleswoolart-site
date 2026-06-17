import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const BubbleBackground = ({
  interactive = true,
  colors,
  className = '',
}) => {
  const containerRef = useRef(null);

  // Motion values for tracking pointer coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs physics
  const springConfig = { stiffness: 60, damping: 25 };
  const curX = useSpring(mouseX, springConfig);
  const curY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Update mouse position relative to container
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  const defaultColors = {
    first: '217,165,165',
    second: '247,241,236',
    third: '165,176,155',
    fourth: '190,120,120',
    fifth: '255,253,251',
    sixth: '120,86,70',
  };

  const finalColors = { ...defaultColors, ...colors };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden w-full h-full bg-[#FFFDFB] ${className}`}
    >
      {/* Blurred container to generate gradient circles */}
      <div className="absolute inset-0 filter blur-[100px] md:blur-[140px] opacity-80 w-full h-full">
        {/* Bubble 1: first color */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[500px] h-[500px] rounded-full top-[-10%] left-[-10%] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(${finalColors.first}, 0.85) 0, rgba(${finalColors.first}, 0) 50%)`,
          }}
        />

        {/* Bubble 2: second color */}
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[600px] h-[600px] rounded-full top-[10%] right-[-10%] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(${finalColors.second}, 0.85) 0, rgba(${finalColors.second}, 0) 50%)`,
          }}
        />

        {/* Bubble 3: third color */}
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[450px] h-[450px] rounded-full bottom-[-10%] left-[15%] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(${finalColors.third}, 0.85) 0, rgba(${finalColors.third}, 0) 50%)`,
          }}
        />

        {/* Bubble 4: fourth color */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[500px] h-[500px] rounded-full bottom-[10%] right-[10%] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(${finalColors.fourth}, 0.85) 0, rgba(${finalColors.fourth}, 0) 50%)`,
          }}
        />

        {/* Bubble 5: fifth color */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -60, 80, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[550px] h-[550px] rounded-full top-[20%] left-[20%] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(${finalColors.fifth}, 0.75) 0, rgba(${finalColors.fifth}, 0) 50%)`,
          }}
        />

        {/* Interactive pointer-following bubble: sixth color */}
        {interactive && (
          <motion.div
            style={{
              x: curX,
              y: curY,
              translateX: '-50%',
              translateY: '-50%',
              backgroundImage: `radial-gradient(circle at center, rgba(${finalColors.sixth}, 0.8) 0, rgba(${finalColors.sixth}, 0) 50%)`,
            }}
            className="absolute w-[400px] h-[400px] rounded-full mix-blend-multiply pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};
