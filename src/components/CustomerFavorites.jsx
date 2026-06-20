import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

// Images imports
import imgDaisyKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.41 PM.webp';
import imgSunflowerCharm from '../assets/WhatsApp Image 2026-06-19 at 6.22.42 PM (1).webp';
import imgHeartKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.43 PM (1).webp';
import imgStrawberryKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.43 PM.webp';
import imgBunnyKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.42 PM.webp';

const CustomerFavorites = ({ setSelectedProduct }) => {
  const favorites = [
    {
      id: 1,
      name: 'Daisy Keychain',
      category: '🌼 Floral Collection',
      image: imgDaisyKeychain,
      tag: 'Cheerful 🌼',
      description: 'A bright and cheerful crochet daisy keychain with a cute yellow center and a green leaf charm. The perfect addition to style your keys, bags, or backpacks.',
      options: ['Available in classic white & yellow or custom pastel yarn colors', 'Choice of silver key ring or gold lobster clasp', 'Optional initial letter charm tag'],
    },
    {
      id: 2,
      name: 'Sunflower Charm',
      category: '🌼 Floral Collection',
      image: imgSunflowerCharm,
      tag: 'Vibrant 🌻',
      description: 'Vibrant, double-sided sunflower hanging charm. Hand-stitched with love to bring sunshine, positive vibes, and a cozy accent wherever it goes.',
      options: ['Adjustable hanging cord length for cars or bags', 'Standard key ring attachment available', 'Include initial charm tag option'],
    },
    {
      id: 4,
      name: 'Strawberry Keychain',
      category: '❤️ Love Collection',
      image: imgStrawberryKeychain,
      tag: 'Sweet 🍓',
      description: 'Adorable red crochet strawberry keychain featuring hand-stitched seed details and a neat green crown. A perfect accessory for fruit charm lovers.',
      options: ['Red, pink, or yellow strawberry options', 'Available as a single charm or matching pair', 'Key ring or lobster clasp choice'],
    },
    {
      id: 3,
      name: 'Heart Keychain',
      category: '❤️ Love Collection',
      image: imgHeartKeychain,
      tag: 'With Love ❤️',
      description: 'A plush, hand-stitched crochet heart charm in a rich, warm red color. A sweet, soft, and thoughtful gift for someone special.',
      options: ['Available in Classic Red, Soft Pink, or Dusty Rose', 'Standard key ring or beaded wristlet strap', 'Add a miniature initial tag'],
    },
    {
      id: 5,
      name: 'Bunny Keychain',
      category: '🐰 Cute Collection',
      image: imgBunnyKeychain,
      tag: 'Adorable 🐰',
      description: 'An incredibly cute crochet white bunny charm with floppy ears and a soft plush feel. Perfect for backpacks, car mirrors, or nursery decor.',
      options: ['Available in classic white, soft beige, or grey yarn', 'Add a matching custom mini bow ribbon', 'Standard metal key ring or gold lobster clasp'],
    }
  ];

  const handleWhatsappInquiry = (productName) => {
    window.open(getWhatsAppLink(productName), '_blank');
  };

  return (
    <section id="favorites" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="h-3 w-3 fill-primary" />
            Most Loved Designs
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-dark mb-4"
          >
            Customer Favorites
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-sm text-text-dark/75 leading-relaxed"
          >
            Our best-selling handmade crochet accessories. Crafted stitch by stitch with meticulous attention to detail.
          </motion.p>
        </div>

        {/* Favorites Carousel/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {favorites.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.04, 
                y: -6, 
                rotate: index % 2 === 0 ? 1 : -1,
                boxShadow: '0 20px 30px rgba(75, 55, 47, 0.08)' 
              }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-white rounded-3xl p-3 pb-5 shadow-soft border border-primary/5 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Image & Tag */}
              <div className="relative overflow-hidden aspect-[4/4.5] rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 shadow-soft border border-primary/10 rounded-full px-2.5 py-0.5 font-body text-[9px] font-bold text-text-dark">
                  {product.tag}
                </div>
              </div>

              {/* Product Info & Badges */}
              <div className="pt-4 flex flex-col flex-grow">
                {/* Badges */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="px-2 py-0.5 rounded bg-secondary text-primary font-body text-[8px] font-bold uppercase tracking-wider">
                    ❤️ Handmade
                  </span>
                  <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-body text-[8px] font-bold uppercase tracking-wider">
                    ✨ Custom
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-text-dark tracking-wide group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </h3>
                
                <p className="font-body text-[9px] text-text-dark/45 uppercase tracking-wider mt-0.5">
                  {product.category.replace(/[^a-zA-Z0-9\s]/g, '').trim()}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsappInquiry(product.name);
                  }}
                  className="w-full py-2.5 bg-[#25D366] text-white font-body text-xs font-bold rounded-xl flex items-center justify-center gap-1 hover:opacity-90 transition-all duration-300 cursor-pointer shadow-soft"
                >
                  <MessageCircle className="h-3.5 w-3.5 fill-current" />
                  Enquire on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;
