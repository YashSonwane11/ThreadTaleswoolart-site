import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Palette, Gift, Award, Sparkles, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const values = [
    {
      icon: <HeartHandshake className="h-6 w-6 text-primary" />,
      title: 'Handmade',
      description: 'Every item is carefully crafted by hand, ensuring meticulous detail and authentic craftsmanship.',
    },
    {
      icon: <Palette className="h-6 w-6 text-accent" />,
      title: 'Personalized',
      description: 'Choose your preferred colors, sizes, and patterns. We bring your exact imagination to life.',
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: 'Unique Gifts',
      description: 'Perfect for birthdays, anniversaries, and holidays. Give a meaningful gift that stands out.',
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: 'Quality',
      description: 'We use premium, ultra-soft yarns and durable hardware fittings for long-lasting, luxury finishes.',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: 'Cute & Trendy',
      description: 'Aesthetic designs inspired by Pinterest trends. Highly photogenic and loved by all age groups.',
    },
    {
      icon: <Heart className="h-6 w-6 text-accent fill-accent/15" />,
      title: 'Made With Love',
      description: 'Each stitch carries warmth, creativity, and care. Designed to bring happiness straight to your heart.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background ball */}
      <div className="absolute left-10 top-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-dark mb-4"
          >
            Why Customers Love Us
          </motion.h2>
          
          <p className="font-body text-sm text-text-dark/75 leading-relaxed">
            We pour our hearts into every single loop. Here is what makes ThreadTales a special destination for premium handcrafted crochet gifts.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-primary/5 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-xs text-text-dark/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
