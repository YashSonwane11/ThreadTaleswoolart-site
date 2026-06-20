import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

// New product WebP images imports
import imgDaisyKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.41 PM.webp';
import imgSunflowerCharm from '../assets/WhatsApp Image 2026-06-19 at 6.22.42 PM (1).webp';
import imgHeartKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.43 PM (1).webp';
import imgStrawberryKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.43 PM.webp';
import imgBunnyKeychain from '../assets/WhatsApp Image 2026-06-19 at 6.22.42 PM.webp';
import imgBlueTulip from '../assets/WhatsApp Image 2026-06-19 at 6.22.42 PM (2).webp';
import imgFloralAccessories from '../assets/hair_accessory.webp';

// Selected original product WebP images imports
import imgTulipBagCharm from '../assets/bagk.webp';
import imgButterflyCharm from '../assets/Bagkeycahin_Butterfly.webp';
import imgLuffyCharm from '../assets/Bagkeycahin_Luffy.webp';
import imgEarpodeSleeve from '../assets/earpode case.webp';
import imgSunnyBouquet from '../assets/Flowors_Bouquet.webp';
import imgChafaBlooms from '../assets/Handcrafted Chafa blooms.webp';
import imgCherryHairclips from '../assets/Hearclip.webp';
import imgRoseStem from '../assets/Rose.webp';

const FeaturedCreations = ({ selectedProduct, setSelectedProduct }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [localSelectedProduct, setLocalSelectedProduct] = useState(null);

  // Allow controlled or uncontrolled state for selected product
  const activeProduct = selectedProduct !== undefined ? selectedProduct : localSelectedProduct;
  const setActiveProduct = setSelectedProduct !== undefined ? setSelectedProduct : setLocalSelectedProduct;

  const categories = [
    'All', 
    '🌼 Floral Collection', 
    '❤️ Love Collection', 
    '🐰 Cute Collection', 
    '🌷 Aesthetic Collection',
    '💐 Bouquet Collection'
  ];

  const products = [
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
      id: 8,
      name: 'Tulip Bag Charm',
      category: '🌼 Floral Collection',
      image: imgTulipBagCharm,
      tag: 'Minimalist 🌷',
      description: 'A minimalist crochet tulip charm in a warm pastel tone with a sage green leaf accent. Adds a touch of soft nature and elegant style to your key ring or bag.',
      options: ['Available in pink, yellow, or lavender', 'Standard hanging cord or silver key ring base', 'Single or double tulip option'],
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
      id: 4,
      name: 'Strawberry Keychain',
      category: '❤️ Love Collection',
      image: imgStrawberryKeychain,
      tag: 'Sweet 🍓',
      description: 'Adorable red crochet strawberry keychain featuring hand-stitched seed details and a neat green crown. A perfect accessory for fruit charm lovers.',
      options: ['Red, pink, or yellow strawberry options', 'Available as a single charm or matching pair', 'Key ring or lobster clasp choice'],
    },
    {
      id: 5,
      name: 'Bunny Keychain',
      category: '🐰 Cute Collection',
      image: imgBunnyKeychain,
      tag: 'Adorable 🐰',
      description: 'An incredibly cute crochet white bunny charm with floppy ears and a soft plush feel. Perfect for backpacks, car mirrors, or nursery decor.',
      options: ['Available in classic white, soft beige, or grey yarn', 'Add a matching custom mini bow ribbon', 'Standard metal key ring or gold lobster clasp'],
    },
    {
      id: 10,
      name: 'Luffy Straw Hat Charm',
      category: '🐰 Cute Collection',
      image: imgLuffyCharm,
      tag: 'Anime 👒',
      description: 'Charming crochet Luffy straw hat keychain, hand-stitched with precision. The ultimate cute gift for anime lovers and One Piece fans.',
      options: ['Classic yellow & red design', 'Gold lobster clasp or standard key ring', 'Optional custom initial letter tag'],
    },
    {
      id: 11,
      name: 'Earpod Case Sleeve',
      category: '🐰 Cute Collection',
      image: imgEarpodeSleeve,
      tag: 'Playful 🎧',
      description: 'Cute, custom crochet sleeve for your earpods. Combines thick protective yarn with playful, aesthetic animal designs like this cozy bear case.',
      options: ['Available in teddy bear, bunny, or floral motifs', 'Custom sizes for AirPods or Galaxy Buds', 'Include key ring attachment loop'],
    },
    {
      id: 6,
      name: 'Blue Tulip Hair Accessory',
      category: '🌷 Aesthetic Collection',
      image: imgBlueTulip,
      tag: 'Cozy Tulip 🌷',
      description: 'Beautiful handcrafted blue tulip hair accessory on a sturdy metal clip backing. Adds an elegant, floral, and aesthetic touch to any hairstyle.',
      options: ['Available in pairs or single clips', 'Metal alligator clip or snap clip backing option', 'Choose custom tulip color combinations'],
    },
    {
      id: 7,
      name: 'Crochet Floral Accessories',
      category: '🌷 Aesthetic Collection',
      image: imgFloralAccessories,
      tag: 'Chic 🌸',
      description: 'Aesthetic crochet flowers and hairpins crafted with premium yarn. Delicate, cute, and perfect for adding a touch of natural charm to your styling.',
      options: ['Set of 2, 3, or 4 assorted floral clips', 'Choose alligator clip backing or hair tie base', 'Customize colors to match outfits'],
    },
    {
      id: 9,
      name: 'Butterfly Bag Charm',
      category: '🌷 Aesthetic Collection',
      image: imgButterflyCharm,
      tag: 'Aesthetic 🦋',
      description: 'Stunning double-layered crochet butterfly charm. An elegant, delicate accessory designed to bring charm to your bags, purse, or keys.',
      options: ['Select custom butterfly yarn color combination', 'Available with gold clasp or silver key ring', 'Add delicate beaded details'],
    },
    {
      id: 14,
      name: 'Cherry Hairclips',
      category: '🌷 Aesthetic Collection',
      image: imgCherryHairclips,
      tag: 'Cute 🍒',
      description: 'Delicate crochet cherry clips featuring hanging red cherries and green leaves, attached to premium metal hair clips.',
      options: ['Standard or mini cherry sizes', 'Choice of snap clip or alligator backing', 'Available in matching pairs'],
    },
    {
      id: 12,
      name: 'Sunny Crochet Bouquet',
      category: '💐 Bouquet Collection',
      image: imgSunnyBouquet,
      tag: 'Everlasting 💐',
      description: 'A beautiful handcrafted bouquet containing crochet roses, sunflowers, and lavender stems, wrapped elegantly in premium paper. The perfect everlasting gift.',
      options: ['Custom flower selection and wrapper colors', 'Available in Small, Medium, or Large sizes', 'Add personalized gift message tag'],
    },
    {
      id: 13,
      name: 'Chafa Bloom Stems',
      category: '💐 Bouquet Collection',
      image: imgChafaBlooms,
      tag: 'Unique 🌼',
      description: 'Exquisite handcrafted crochet Plumeria (Chafa) blossoms with detailed green stems. The ultimate modern centerpiece that never fades.',
      options: ['Choose single stem or multi-stem bunch', 'Gradient flower colors (white-yellow)', 'Includes optional rustic wrap packaging'],
    },
    {
      id: 15,
      name: 'Rose Blossom Stem',
      category: '💐 Bouquet Collection',
      image: imgRoseStem,
      tag: 'Romantic 🌹',
      description: 'An elegant handcrafted crochet red rose stem. A timeless, beautiful bloom that never fades, perfect as a single gift or part of a custom bouquet.',
      options: ['Available in Classic Red, Pink, or Cream White', 'Select stem length', 'Add custom message tag'],
    }
  ];

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  const handleWhatsappInquiry = (productName) => {
    window.open(getWhatsAppLink(productName), '_blank');
  };

  return (
    <section id="creations" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="h-3 w-3 fill-primary" />
            Our Handcrafted Catalog
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-dark mb-4"
          >
            Explore Creations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-sm text-text-dark/75 leading-relaxed"
          >
            Browse our catalog of real crochet items. Click on any product to customize colors, clasps, or packaging. Direct inquiry-based ordering for premium craftsmanship.
          </motion.p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full font-body text-xs font-semibold tracking-wider transition-all duration-300 shadow-soft cursor-pointer ${
                activeTab === cat
                  ? 'bg-primary text-white scale-105'
                  : 'bg-white text-text-dark/80 hover:text-primary hover:bg-secondary border border-primary/10'
              }`}
            >
              {cat === 'All' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -1 : 1 }}
                animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1 : 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setActiveProduct(product)}
                className="group cursor-pointer bg-white rounded-2xl p-3 pb-5 shadow-soft hover:shadow-premium border border-primary/5 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 shadow-soft border border-primary/10 rounded-full px-2.5 py-0.5 font-body text-[9px] font-bold text-text-dark tracking-wider">
                    {product.tag}
                  </div>
                </div>

                {/* Badges and Info */}
                <div className="pt-4 flex flex-col flex-grow">
                  {/* Handmade & Customizable Badges */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="px-2 py-0.5 rounded bg-secondary text-primary font-body text-[9px] font-bold tracking-wider uppercase flex items-center gap-0.5">
                      ❤️ Handmade
                    </span>
                    <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-body text-[9px] font-bold tracking-wider uppercase flex items-center gap-0.5">
                      ✨ Custom
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-text-dark tracking-wide group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <p className="font-body text-[10px] text-text-dark/45 uppercase tracking-wider mt-0.5">
                    {product.category.replace(/[^a-zA-Z0-9\s]/g, '').trim()}
                  </p>
                </div>

                {/* Action CTA Button */}
                <div className="mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsappInquiry(product.name);
                    }}
                    className="w-full py-3 bg-[#25D366] text-white font-body text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:opacity-90 transition-all duration-300 cursor-pointer shadow-soft hover:shadow-premium"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    Enquire on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Customizer Modal */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text-dark/45 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-2xl w-full rounded-3xl shadow-premium overflow-hidden border border-primary/10 relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-primary/15 text-text-dark hover:text-primary transition-colors duration-300 z-10 cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Left: Image */}
                <div className="relative h-64 md:h-full min-h-[320px]">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 shadow-soft border border-primary/10 rounded-full px-3 py-1 font-body text-[10px] font-bold text-text-dark">
                    {activeProduct.tag}
                  </div>
                </div>

                {/* Modal Right: Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="px-2 py-0.5 rounded bg-secondary text-primary font-body text-[9px] font-bold uppercase">
                        ❤️ 100% Handmade
                      </span>
                      <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-body text-[9px] font-bold uppercase">
                        ✨ Customizable
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold text-text-dark mb-4">
                      {activeProduct.name}
                    </h3>
                    
                    <p className="font-body text-xs text-text-dark/75 leading-relaxed mb-6">
                      {activeProduct.description}
                    </p>

                    {/* Personalization Options */}
                    <div className="mb-8">
                      <h4 className="font-heading text-sm font-bold text-text-dark mb-3">
                        How you can personalize it:
                      </h4>
                      <ul className="space-y-2">
                        {activeProduct.options.map((opt, i) => (
                          <li key={i} className="flex items-start text-xs font-body text-text-dark/80">
                            <span className="text-primary mr-2">🌼</span>
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* WhatsApp Commission CTA */}
                  <div>
                    <button
                      onClick={() => {
                        handleWhatsappInquiry(activeProduct.name);
                        setActiveProduct(null);
                      }}
                      className="w-full py-3.5 bg-[#25D366] text-white font-body text-xs font-semibold rounded-xl hover:opacity-90 shadow-soft flex items-center justify-center gap-2 hover:shadow-premium transition-all duration-300 cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 fill-current" />
                      ORDER NOW VIA WHATSAPP
                    </button>
                    <p className="text-[10px] font-body text-text-dark/45 text-center mt-2.5">
                      No upfront payment! We will discuss customization and pricing on chat.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCreations;
