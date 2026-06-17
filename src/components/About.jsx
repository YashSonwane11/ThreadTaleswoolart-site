import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Sparkles, Layers, Award } from 'lucide-react';
import aboutCollage from '../assets/about_collage.png';

const About = () => {
  const features = [
    { icon: <Heart className="h-5 w-5 text-primary fill-primary" />, text: '100% Handmade' },
    { icon: <Layers className="h-5 w-5 text-accent" />, text: 'Premium Quality Yarn' },
    { icon: <Gift className="h-5 w-5 text-primary" />, text: 'Perfect For Gifting' },
    { icon: <Sparkles className="h-5 w-5 text-accent fill-accent" />, text: 'Custom Designs Available' },
    { icon: <Award className="h-5 w-5 text-primary" />, text: 'Crafted With Love' },
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Collage (Left/Right side swap: left side is image collage for balance, right side is text) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Polaroid Scrapbook Layout */}
              <div className="relative rounded-2xl shadow-premium bg-white p-3 pb-8 border border-primary/10 rotate-[-1deg]">
                
                {/* Custom Jagged Washi Tape Overlay */}
                <div
                  className="absolute -top-3.5 left-[30%] w-28 h-6 bg-accent/40 backdrop-blur-[0.5px] border-y border-dashed border-accent/60 shadow-sm z-30 select-none pointer-events-none rotate-[-4deg]"
                  style={{
                    clipPath: 'polygon(5% 0%, 95% 5%, 100% 90%, 92% 100%, 8% 95%, 0% 80%)'
                  }}
                />

                <img
                  src={aboutCollage}
                  alt="Crafting premium crochet at ThreadTales"
                  className="w-full h-auto object-cover rounded-xl border border-secondary"
                  loading="lazy"
                />
              </div>

              {/* Decorative badges */}
              <div className="absolute -top-6 -right-6 bg-[#FFFDFB] shadow-soft border border-primary/10 rounded-2xl p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="h-5 w-5 fill-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-text-dark">With Love</h4>
                  <p className="font-body text-[10px] text-text-dark/65">Made stitch by stitch</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* About Content (Right Side) */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-dark mb-6 leading-tight">
                Crafted with Passion, <br className="hidden sm:inline" />
                Woven with Love
              </h2>
              
              <p className="text-base sm:text-lg font-body text-text-dark/80 leading-relaxed mb-8">
                At ThreadTales, every creation begins with a single thread and a lot of love. Each piece is carefully handcrafted, making every product unique and meaningful. We believe in crafting products that do not just serve as accessories, but carry emotions and bring beautiful smiles to you and your loved ones.
              </p>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-white border border-primary/5 shadow-soft hover:shadow-premium transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="font-body text-xs font-semibold text-text-dark/90">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
