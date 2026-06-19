import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageCircle, Heart, HeartHandshake } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

// Real product images imports
import imgButterfly from '../assets/Bagkeycahin_Butterfly.webp';
import imgLuffy from '../assets/Bagkeycahin_Luffy.webp';
import imgSunflowerCharm from '../assets/sunflower_charm.webp';
import imgKeycahin from '../assets/Keycahin.webp';
import imgBagk from '../assets/bagk.webp';
import imgPouch from '../assets/pouch.webp';
import imgEarbuds from '../assets/earbuds_holder.webp';
import imgEarpode from '../assets/earpode case.webp';
import imgLipstick from '../assets/lipistikcase.webp';
import imgHair from '../assets/hair_accessory.webp';
import imgHeartclip from '../assets/Hearclip.webp';
import imgSunflower from '../assets/Sunflower.webp';
import imgFlowersBouquet from '../assets/Flowors_Bouquet.webp';
import imgChafaBlooms from '../assets/Handcrafted Chafa blooms.webp';
import imgRose from '../assets/Rose.webp';

const FeaturedCreations = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Keychains', 'Cases & Pouches', 'Accessories', 'Bouquets'];

  const products = [
    // Keychains
    {
      id: 1,
      name: 'Butterfly Bag Charm',
      category: 'Keychains',
      image: imgButterfly,
      tag: 'Aesthetic 🦋',
      description: 'Stunning double-layered crochet butterfly charm. A charming accessory designed to bring elegance to your bags or backpacks.',
      options: ['Select butterfly yarn color combination', 'Available with gold clasp or silver key ring', 'Add beaded details'],
      whatsappMsg: "Hi ThreadTales! I'd love to order the customized Butterfly Bag Charm. Can we discuss color options?"
    },
    {
      id: 2,
      name: 'Luffy Straw Hat Charm',
      category: 'Keychains',
      image: imgLuffy,
      tag: 'Cute Anime 👒',
      description: 'Charming crochet Luffy straw hat keychain, hand-stitched with precision. The ultimate cute gift for anime lovers and collectors.',
      options: ['Classic yellow & red design', 'Lobster clasp or standard key ring', 'Add custom anime initial charm'],
      whatsappMsg: "Hi ThreadTales! I'm interested in the Luffy Straw Hat Charm. Is it available for ordering?"
    },
    {
      id: 3,
      name: 'Sunflower Charm Keychain',
      category: 'Keychains',
      image: imgSunflowerCharm,
      tag: 'Joyful 🌻',
      description: 'Vibrant, double-sided sunflower hanging charm. Hand-stitched petals surrounding a cute face to bring sunshine wherever it goes.',
      options: ['Custom strap length', 'Standard keychain ring option', 'Include initial charm tag'],
      whatsappMsg: "Hi ThreadTales! I'd like to order the Sunflower Charm Keychain. Can you share the details?"
    },
    {
      id: 4,
      name: 'Strawberry Charm',
      category: 'Keychains',
      image: imgKeycahin,
      tag: 'Sweet 🍓',
      description: 'Adorable red crochet strawberry keychain with tiny white seed stitches and green leafy cap. A cute addition to keys or bags.',
      options: ['Red, pink, or yellow strawberry', 'Standard key ring or cord', 'Available in sets of 2'],
      whatsappMsg: "Hi ThreadTales! I'd like to order the Strawberry Charm keychain. Can I get a matching pair?"
    },
    {
      id: 5,
      name: 'Tulip Bag Charm',
      category: 'Keychains',
      image: imgBagk,
      tag: 'Floral 🌷',
      description: 'Soft crochet tulip keychain in a warm pastel tone with a sage green leaf accent. Classy and minimalist design.',
      options: ['Pink, yellow, or lavender tulip', 'Sage green hanging cord', 'Available as single or dual stems'],
      whatsappMsg: "Hi ThreadTales! I'm interested in the Tulip Bag Charm. What color options do you offer?"
    },
    
    // Cases & Pouches
    {
      id: 6,
      name: 'Textured Mini Pouch',
      category: 'Cases & Pouches',
      image: imgPouch,
      tag: 'Snug 🧶',
      description: 'A cozy handcrafted crochet pouch with an organic wooden button closure. Designed to protect cosmetics, cards, or key items.',
      options: ['Custom dimensions available', 'Choose solid or dual-tone yarn colors', 'Assorted wooden button styles'],
      whatsappMsg: "Hi ThreadTales! I want to order the Textured Mini Pouch. Can I specify custom dimensions?"
    },
    {
      id: 7,
      name: 'Bunny Earbuds Holder',
      category: 'Cases & Pouches',
      image: imgEarbuds,
      tag: 'Cute Case 🐰',
      description: 'A super adorable crochet bunny case designed to keep your wireless earbuds safe, snug, and protected from scratches.',
      options: ['Available in beige, white, or pink bunny', 'Standard charging port cutout included', 'Key ring attachment loop'],
      whatsappMsg: "Hi ThreadTales! I'd love to order the Bunny Earbuds Holder. Is it compatible with AirPods?"
    },
    {
      id: 8,
      name: 'Earpod Case Sleeve',
      category: 'Cases & Pouches',
      image: imgEarpode,
      tag: 'Playful 🎧',
      description: 'Cute, custom crochet sleeve for your earpods. Combines thick protective yarn with playful, aesthetic designs.',
      options: ['Choose animal or floral motifs', 'Custom sizes for Airpods/Galaxy Buds', 'Soft fleece inner lining option'],
      whatsappMsg: "Hi ThreadTales! I'd like to customize an Earpod Case Sleeve. What designs do you recommend?"
    },
    {
      id: 9,
      name: 'Lipstick Case Pocket',
      category: 'Cases & Pouches',
      image: imgLipstick,
      tag: 'Chic 💄',
      description: 'A cozy, cute crochet lipstick holder sleeve with a hanging strap. Keeps your lip balm or lipstick handy on the go.',
      options: ['Pick single or dual-tone colors', 'Lobster clip to attach to bags', 'Standard or long neck-strap length'],
      whatsappMsg: "Hi ThreadTales! I want to order the Lipstick Case Pocket. Can I get it in Sage Green?"
    },

    // Accessories
    {
      id: 10,
      name: 'Mini Floral Hairpins',
      category: 'Accessories',
      image: imgHair,
      tag: 'Elegant 🌸',
      description: 'Aesthetic crochet flower hair clips on soft backing. Perfect for styling cute hairstyles with an organic touch.',
      options: ['Set of 2 or 4 clips', 'Alligator clip or snap clip backing', 'Select custom flower colors'],
      whatsappMsg: "Hi ThreadTales! I'd like to order a set of Mini Floral Hairpins. What color sets do you have?"
    },
    {
      id: 11,
      name: 'Cherry Hairclips',
      category: 'Accessories',
      image: imgHeartclip,
      tag: 'Cute 🍒',
      description: 'Delicate crochet cherry clips featuring hanging red cherries and green leaves, attached to premium metal hair clips.',
      options: ['Standard size or mini size', 'Clips backing choice', 'Matching headband option'],
      whatsappMsg: "Hi ThreadTales! I'd love to get the Cherry Hairclips. Are they sold in pairs?"
    },
    {
      id: 12,
      name: 'Sunflower Headband Clip',
      category: 'Accessories',
      image: imgSunflower,
      tag: 'Sunny 🌻',
      description: 'Handcrafted crochet sunflower clip/accessory. Adds a cozy, rustic, and positive accent to hair styles.',
      options: ['Select clip type or soft headband base', 'Bright yellow or pastel yellow petals', 'Add green leaf detail'],
      whatsappMsg: "Hi ThreadTales! I'm interested in the Sunflower Headband Clip. Can you share options?"
    },

    // Bouquets
    {
      id: 13,
      name: 'Sunny Crochet Bouquet',
      category: 'Bouquets',
      image: imgFlowersBouquet,
      tag: 'Everlasting 💐',
      description: 'A beautiful handcrafted bouquet containing crochet roses, sunflowers, and lavender stems, wrapped elegantly in premium paper.',
      options: ['Custom flower selection', 'Dusty Rose, Soft Beige, or Cream wrapping', 'Available in Small, Medium, or Large sizes'],
      whatsappMsg: "Hi ThreadTales! I want to gift a Sunny Crochet Bouquet. What custom wrapper colors can I choose?"
    },
    {
      id: 14,
      name: 'Chafa Bloom Stems',
      category: 'Bouquets',
      image: imgChafaBlooms,
      tag: 'Unique 🌼',
      description: 'Exquisite handcrafted crochet Plumeria (Chafa) blossoms with detailed green stems. The ultimate modern centerpiece.',
      options: ['Choose single stem or multi-stem bunch', 'Choose flower color grade (White-Yellow gradient)', 'Includes rustic vase wrap option'],
      whatsappMsg: "Hi ThreadTales! I'd love to order the Chafa Bloom Stems. Can I customize the stem count?"
    },
    {
      id: 15,
      name: 'Rose Blossom Stem',
      category: 'Bouquets',
      image: imgRose,
      tag: 'Romantic 🌹',
      description: 'An elegant handcrafted crochet red rose stem. A timeless, beautiful bloom that never fades, perfect as a single gift or part of a customized bouquet.',
      options: ['Available in Classic Red, Soft Pink, or White', 'Select stem length', 'Add custom message tag'],
      whatsappMsg: "Hi ThreadTales! I'd love to order the Rose Blossom Stem. Can we discuss yarn colors and options?"
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
            Featured Creations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-sm text-text-dark/75 leading-relaxed"
          >
            Explore our real creations handcrafted with premium quality yarn. Click on any product to customize colors, clasp styles, and custom tags directly with us.
          </motion.p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-body text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-soft cursor-pointer ${
                activeTab === cat
                  ? 'bg-primary text-white scale-105'
                  : 'bg-white text-text-dark/80 hover:text-primary hover:bg-secondary border border-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry/Flex Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer bg-white rounded-2xl p-2.5 pb-6 shadow-soft hover:shadow-premium border border-primary/5 transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Visual overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-text-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-5 py-2.5 bg-white/95 text-text-dark font-body text-xs font-semibold tracking-wider uppercase rounded-full shadow-soft flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <HeartHandshake className="h-3.5 w-3.5 text-primary" />
                      Personalize
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 shadow-soft border border-primary/10 rounded-full px-3 py-1 font-body text-[10px] font-bold text-text-dark tracking-wider">
                    {product.tag}
                  </div>
                </div>

                {/* Product Info */}
                <div className="pt-4 px-1 flex justify-between items-center bg-white">
                  <div>
                    <h3 className="font-heading text-base font-bold text-text-dark tracking-wide">
                      {product.name}
                    </h3>
                    <p className="font-body text-[9px] text-primary font-bold uppercase tracking-wider mt-0.5">
                      {product.category}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Heart className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>

                {/* Creative Handwriting Polaroid Tagline */}
                <div className="text-center font-heading text-[10px] font-bold italic text-text-dark/45 mt-3 pt-2 border-t border-dashed border-secondary">
                  personalize me 🌼
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Customizer Modal */}
      <AnimatePresence>
        {selectedProduct && (
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
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-primary/15 text-text-dark hover:text-primary transition-colors duration-300 z-10 cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Left: Image */}
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 shadow-soft border border-primary/10 rounded-full px-3 py-1 font-body text-[10px] font-bold text-text-dark">
                    {selectedProduct.tag}
                  </div>
                </div>

                {/* Modal Right: Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-body text-primary font-bold uppercase tracking-wider mb-1 block">
                      ✨ Custom Order Details
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-text-dark mb-4">
                      {selectedProduct.name}
                    </h3>
                    
                    <p className="font-body text-xs text-text-dark/75 leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* Personalization Options */}
                    <div className="mb-8">
                      <h4 className="font-heading text-sm font-bold text-text-dark mb-3">
                        How you can personalize it:
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.options.map((opt, i) => (
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
                        handleWhatsappInquiry(selectedProduct.name);
                        setSelectedProduct(null);
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
