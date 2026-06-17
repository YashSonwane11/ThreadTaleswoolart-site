import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, HelpCircle, Info } from 'lucide-react';

const VisualCustomizer = () => {
  // Products available for customization
  const customItems = [
    {
      id: 'sunflower',
      name: 'Sunny Sunflower Charm',
      price: '₹149',
      defaultBase: '#EAC15B', // Yellow
      defaultAccent: '#A5B09B', // Mint Sage
      description: 'A cheerful double-sided crochet sunflower. Bring sunshine to your bags with personalized petals and leaves!'
    },
    {
      id: 'tulip',
      name: 'Minimalist Tulip Charm',
      price: '₹129',
      defaultBase: '#D9A5A5', // Rose
      defaultAccent: '#A5B09B', // Mint Sage
      description: 'An elegant pastel crochet tulip stem. Perfect as a minimalist bookmark or stylish backpack hanging accessory.'
    },
    {
      id: 'strawberry',
      name: 'Sweet Strawberry Charm',
      price: '₹119',
      defaultBase: '#C85C5C', // Cherry Red
      defaultAccent: '#FFF9F2', // Ivory Lace (seeds/top)
      description: 'An adorable strawberry hanging accessory with detailed seed stitches. Cute, soft, and sweet!'
    },
    {
      id: 'bunny',
      name: 'Bunny Earbuds Holder',
      price: '₹199',
      defaultBase: '#FFF9F2', // Ivory Lace
      defaultAccent: '#D9A5A5', // Cozy Rose (inner ears)
      description: 'A cozy bunny sleeve for your wireless earbuds. Snug fit with cute stitch details and button eyes.'
    }
  ];

  // Brand-curated color palette
  const yarnColors = [
    { name: 'Cozy Rose', hex: '#D9A5A5' },
    { name: 'Sunshine Gold', hex: '#EAC15B' },
    { name: 'Mint Sage', hex: '#A5B09B' },
    { name: 'Lavender Mist', hex: '#C3B1E1' },
    { name: 'Ivory Lace', hex: '#FFF9F2' },
    { name: 'Cherry Red', hex: '#C85C5C' }
  ];

  // Clasps & Attachments
  const claspTypes = [
    { id: 'keyring', name: 'Silver Keyring', icon: '⛓️' },
    { id: 'clasp', name: 'Gold Lobster Clasp', icon: '🔑' },
    { id: 'cord', name: 'Sage Hanging Cord', icon: '🧶' }
  ];

  // State Management
  const [selectedItem, setSelectedItem] = useState(customItems[0]);
  const [baseColor, setBaseColor] = useState(customItems[0].defaultBase);
  const [accentColor, setAccentColor] = useState(customItems[0].defaultAccent);
  const [selectedClasp, setSelectedClasp] = useState(claspTypes[0]);
  const [tagText, setTagText] = useState('');

  // Handle switching product base
  const handleItemChange = (item) => {
    setSelectedItem(item);
    setBaseColor(item.defaultBase);
    setAccentColor(item.defaultAccent);
  };

  const getBaseColorName = () => yarnColors.find(c => c.hex === baseColor)?.name || 'Custom Color';
  const getAccentColorName = () => yarnColors.find(c => c.hex === accentColor)?.name || 'Custom Color';

  // Format WhatsApp message
  const handleOrderSubmit = () => {
    const message = `Hi ThreadTales! 🌼 I just customized a design in your Creative Studio!

🎨 Custom Order Details:
🌸 Product: ${selectedItem.name}
🧶 Base Color: ${getBaseColorName()} (${baseColor})
🎀 Accent Color: ${getAccentColorName()} (${accentColor})
🔑 Attachment: ${selectedClasp.name}
🏷️ Gift Tag Text: ${tagText ? `"${tagText}"` : "None"}

Is it possible to craft this for me? Can we discuss pricing and delivery?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9309456377?text=${encoded}`, '_blank');
  };

  return (
    <section id="customizer" className="py-24 bg-transparent relative w-full">
      {/* Visual Stitch Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-1 flex justify-center overflow-hidden opacity-30 select-none">
        <div className="w-full border-t-2 border-dashed border-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 fill-primary" />
            Interactive Studio
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-dark mb-4">
            Visual Craft Customizer
          </h2>
          
          <p className="font-body text-sm text-text-dark/75 leading-relaxed">
            Unleash your creativity! Mix and match colors, pick your clasp, and add a personalized paper tag. Watch your custom crochet item update in real-time inside our polaroid mockup.
          </p>
        </div>

        {/* Customizer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Polaroid Live Preview (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              layout
              initial={{ rotate: -1.5, scale: 0.98 }}
              animate={{ rotate: 1.5, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-full max-w-sm bg-white p-4 pb-12 rounded-2xl shadow-premium border border-primary/10 relative z-10 flex flex-col"
            >
              {/* Main Preview Container */}
              <div className="w-full aspect-square rounded-xl bg-secondary relative overflow-hidden flex items-center justify-center border border-primary/5 p-4 select-none">
                
                {/* SVG Renderings */}
                <AnimatePresence mode="wait">
                  {selectedItem.id === 'sunflower' && (
                    <motion.svg
                      key="sunflower-svg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      viewBox="0 0 200 200"
                      className="w-48 h-48 drop-shadow-md"
                    >
                      {/* Clasp Attachment */}
                      {selectedClasp.id === 'keyring' && (
                        <g stroke="#94A3B8" strokeWidth="6" fill="none" transform="translate(100, 20)">
                          <circle cx="0" cy="0" r="12" />
                          <line x1="0" y1="12" x2="0" y2="30" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'clasp' && (
                        <g stroke="#D4AF37" strokeWidth="5" fill="none" transform="translate(100, 20)">
                          <path d="M-8,0 C-8,-12 8,-12 8,0 L6,15 L-6,15 Z" />
                          <circle cx="0" cy="-2" r="3" fill="#D4AF37" />
                          <line x1="0" y1="15" x2="0" y2="30" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'cord' && (
                        <path d="M100,20 C85,35 85,50 100,60" stroke="#A5B09B" strokeWidth="4" fill="none" strokeDasharray="3,3" />
                      )}

                      {/* Stem/Hanger Leaf */}
                      <motion.path
                        d="M100,50 L100,140 M100,110 Q70,95 80,85 Q95,85 100,105"
                        stroke="#A5B09B"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                        animate={{ stroke: accentColor }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Sunflower Petals (Rotating Group) */}
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                        transform="translate(100, 100)"
                      >
                        {[...Array(12)].map((_, i) => (
                          <motion.path
                            key={i}
                            d="M0,0 C-15,-20 -15,-45 0,-55 C15,-45 15,-20 0,0"
                            animate={{ fill: baseColor }}
                            transition={{ duration: 0.3 }}
                            transform={`rotate(${i * 30})`}
                            stroke="#4B372F"
                            strokeWidth="1.5"
                          />
                        ))}
                        {/* Seed Center disk */}
                        <circle cx="0" cy="0" r="28" fill="#785646" stroke="#4B372F" strokeWidth="2" />
                        {/* Cute Face details */}
                        <circle cx="-10" cy="-4" r="3" fill="#FFFDFB" />
                        <circle cx="10" cy="-4" r="3" fill="#FFFDFB" />
                        <path d="M-6,8 Q0,15 6,8" stroke="#FFFDFB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <circle cx="-14" cy="2" r="3" fill="#EAC15B" opacity="0.6" />
                        <circle cx="14" cy="2" r="3" fill="#EAC15B" opacity="0.6" />
                      </motion.g>
                    </motion.svg>
                  )}

                  {selectedItem.id === 'tulip' && (
                    <motion.svg
                      key="tulip-svg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      viewBox="0 0 200 200"
                      className="w-48 h-48 drop-shadow-md"
                    >
                      {/* Clasp Attachment */}
                      {selectedClasp.id === 'keyring' && (
                        <g stroke="#94A3B8" strokeWidth="6" fill="none" transform="translate(100, 20)">
                          <circle cx="0" cy="0" r="12" />
                          <line x1="0" y1="12" x2="0" y2="35" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'clasp' && (
                        <g stroke="#D4AF37" strokeWidth="5" fill="none" transform="translate(100, 20)">
                          <path d="M-8,0 C-8,-12 8,-12 8,0 L6,15 L-6,15 Z" />
                          <circle cx="0" cy="-2" r="3" fill="#D4AF37" />
                          <line x1="0" y1="15" x2="0" y2="35" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'cord' && (
                        <path d="M100,20 C85,38 85,55 100,65" stroke="#A5B09B" strokeWidth="4" fill="none" strokeDasharray="3,3" />
                      )}

                      {/* Tulip Stem and Leaf */}
                      <motion.path
                        d="M100,75 L100,165"
                        stroke={accentColor}
                        strokeWidth="8"
                        strokeLinecap="round"
                        animate={{ stroke: accentColor }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.path
                        d="M100,140 Q65,120 75,100 Q85,105 100,125"
                        fill={accentColor}
                        animate={{ fill: accentColor }}
                        transition={{ duration: 0.3 }}
                        stroke="#4B372F"
                        strokeWidth="1.5"
                      />

                      {/* Tulip Blossom */}
                      <g transform="translate(100, 75)">
                        {/* Back Petals */}
                        <motion.path
                          d="M-22,0 C-32,-35 -10,-55 0,-60 C10,-55 32,-35 22,0 Z"
                          fill={baseColor}
                          animate={{ fill: baseColor }}
                          transition={{ duration: 0.3 }}
                          stroke="#4B372F"
                          strokeWidth="2"
                        />
                        {/* Left overlay petal */}
                        <motion.path
                          d="M-22,0 C-28,-35 -2,-50 -6,-58 C-12,-40 -12,-15 -22,0 Z"
                          fill={baseColor}
                          filter="brightness(0.92)"
                          animate={{ fill: baseColor }}
                          transition={{ duration: 0.3 }}
                          stroke="#4B372F"
                          strokeWidth="1.5"
                        />
                        {/* Right overlay petal */}
                        <motion.path
                          d="M22,0 C28,-35 2,-50 6,-58 C12,-40 12,-15 22,0 Z"
                          fill={baseColor}
                          filter="brightness(0.92)"
                          animate={{ fill: baseColor }}
                          transition={{ duration: 0.3 }}
                          stroke="#4B372F"
                          strokeWidth="1.5"
                        />
                        {/* Center overlay petal */}
                        <motion.path
                          d="M-15,0 C-18,-45 18,-45 15,0 Z"
                          fill={baseColor}
                          filter="brightness(0.96)"
                          animate={{ fill: baseColor }}
                          transition={{ duration: 0.3 }}
                          stroke="#4B372F"
                          strokeWidth="1.8"
                        />
                      </g>
                    </motion.svg>
                  )}

                  {selectedItem.id === 'strawberry' && (
                    <motion.svg
                      key="strawberry-svg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      viewBox="0 0 200 200"
                      className="w-48 h-48 drop-shadow-md"
                    >
                      {/* Clasp Attachment */}
                      {selectedClasp.id === 'keyring' && (
                        <g stroke="#94A3B8" strokeWidth="6" fill="none" transform="translate(100, 20)">
                          <circle cx="0" cy="0" r="12" />
                          <line x1="0" y1="12" x2="0" y2="40" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'clasp' && (
                        <g stroke="#D4AF37" strokeWidth="5" fill="none" transform="translate(100, 20)">
                          <path d="M-8,0 C-8,-12 8,-12 8,0 L6,15 L-6,15 Z" />
                          <circle cx="0" cy="-2" r="3" fill="#D4AF37" />
                          <line x1="0" y1="15" x2="0" y2="40" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'cord' && (
                        <path d="M100,20 C85,38 85,55 100,70" stroke="#A5B09B" strokeWidth="4" fill="none" strokeDasharray="3,3" />
                      )}

                      {/* Strawberry Body */}
                      <motion.path
                        d="M100,65 C145,65 155,110 125,145 C115,160 105,170 100,172 C95,170 85,160 75,145 C45,110 55,65 100,65 Z"
                        fill={baseColor}
                        animate={{ fill: baseColor }}
                        transition={{ duration: 0.3 }}
                        stroke="#4B372F"
                        strokeWidth="2.5"
                      />

                      {/* Seed Details (white stitch details) */}
                      <g fill="#FFFDFB" opacity="0.9">
                        <path d="M85,90 L87,93 L83,93 Z" />
                        <path d="M115,90 L117,93 L113,93 Z" />
                        <path d="M100,105 L102,108 L98,108 Z" />
                        <path d="M80,120 L82,123 L78,123 Z" />
                        <path d="M120,120 L122,123 L118,123 Z" />
                        <path d="M100,135 L102,138 L98,138 Z" />
                        <path d="M90,150 L92,153 L88,153 Z" />
                        <path d="M110,150 L112,153 L108,153 Z" />
                      </g>

                      {/* Leaf Cap (Green Cap) */}
                      <motion.path
                        d="M100,60 C90,60 75,50 65,70 C80,72 90,65 100,72 C110,65 120,72 135,70 C125,50 110,60 100,60 Z"
                        fill={accentColor}
                        animate={{ fill: accentColor }}
                        transition={{ duration: 0.3 }}
                        stroke="#4B372F"
                        strokeWidth="1.8"
                      />
                      <motion.path
                        d="M100,60 Q105,48 100,42 Q95,48 100,60"
                        fill={accentColor}
                        animate={{ fill: accentColor }}
                        transition={{ duration: 0.3 }}
                        stroke="#4B372F"
                        strokeWidth="1.5"
                      />
                    </motion.svg>
                  )}

                  {selectedItem.id === 'bunny' && (
                    <motion.svg
                      key="bunny-svg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      viewBox="0 0 200 200"
                      className="w-48 h-48 drop-shadow-md"
                    >
                      {/* Clasp Attachment */}
                      {selectedClasp.id === 'keyring' && (
                        <g stroke="#94A3B8" strokeWidth="6" fill="none" transform="translate(100, 20)">
                          <circle cx="0" cy="0" r="12" />
                          <line x1="0" y1="12" x2="0" y2="40" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'clasp' && (
                        <g stroke="#D4AF37" strokeWidth="5" fill="none" transform="translate(100, 20)">
                          <path d="M-8,0 C-8,-12 8,-12 8,0 L6,15 L-6,15 Z" />
                          <circle cx="0" cy="-2" r="3" fill="#D4AF37" />
                          <line x1="0" y1="15" x2="0" y2="40" strokeWidth="4" />
                        </g>
                      )}
                      {selectedClasp.id === 'cord' && (
                        <path d="M100,20 C85,38 85,55 100,70" stroke="#A5B09B" strokeWidth="4" fill="none" strokeDasharray="3,3" />
                      )}

                      {/* Bunny Ears (Back) */}
                      <g transform="translate(100, 75)">
                        {/* Left Ear */}
                        <motion.path
                          d="M-25,-5 C-35,-45 -25,-60 -15,-60 C-5,-60 -10,-35 -15,-5 Z"
                          fill={baseColor}
                          animate={{ fill: baseColor }}
                          transition={{ duration: 0.3 }}
                          stroke="#4B372F"
                          strokeWidth="2"
                        />
                        <motion.path
                          d="M-22,-10 C-28,-38 -22,-52 -16,-52 C-10,-52 -13,-32 -16,-10 Z"
                          fill={accentColor}
                          animate={{ fill: accentColor }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Right Ear */}
                        <motion.path
                          d="M25,-5 C35,-45 25,-60 15,-60 C5,-60 10,-35 15,-5 Z"
                          fill={baseColor}
                          animate={{ fill: baseColor }}
                          transition={{ duration: 0.3 }}
                          stroke="#4B372F"
                          strokeWidth="2"
                        />
                        <motion.path
                          d="M22,-10 C28,-38 22,-52 16,-52 C10,-52 13,-32 16,-10 Z"
                          fill={accentColor}
                          animate={{ fill: accentColor }}
                          transition={{ duration: 0.3 }}
                        />
                      </g>

                      {/* Bunny Rounded Sleeve Body */}
                      <motion.rect
                        x="65"
                        y="70"
                        width="70"
                        height="80"
                        rx="25"
                        fill={baseColor}
                        animate={{ fill: baseColor }}
                        transition={{ duration: 0.3 }}
                        stroke="#4B372F"
                        strokeWidth="2.5"
                      />

                      {/* Button Clasp for holder */}
                      <circle cx="100" cy="125" r="8" fill="#785646" stroke="#4B372F" strokeWidth="1.5" />
                      <line x1="97" y1="122" x2="103" y2="128" stroke="#FFF" strokeWidth="1" />
                      <line x1="103" y1="122" x2="97" y2="128" stroke="#FFF" strokeWidth="1" />

                      {/* Face elements */}
                      {/* Eyes */}
                      <circle cx="88" cy="98" r="4" fill="#4B372F" />
                      <circle cx="112" cy="98" r="4" fill="#4B372F" />
                      {/* Blush cheeks */}
                      <circle cx="80" cy="106" r="5" fill="#D9A5A5" opacity="0.6" />
                      <circle cx="120" cy="106" r="5" fill="#D9A5A5" opacity="0.6" />
                      {/* Nose */}
                      <polygon points="100,102 96,98 104,98" fill="#D9A5A5" stroke="#4B372F" strokeWidth="1" />
                    </motion.svg>
                  )}
                </AnimatePresence>

                {/* Customizable Cursive Tag Overlay */}
                <AnimatePresence>
                  {tagText && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -25, x: 20 }}
                      animate={{ opacity: 1, scale: 1, rotate: -15, x: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: -25 }}
                      className="absolute bottom-4 right-4 bg-[#FFF9F2] px-3.5 py-1.5 rounded shadow-soft border border-primary/20 rotate-[-15deg] max-w-[120px] select-none"
                    >
                      {/* Dotted stitch border around tag */}
                      <div className="absolute inset-0.5 border border-dashed border-primary/30 pointer-events-none rounded" />
                      {/* Tag Hole */}
                      <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary border border-primary/25" />
                      
                      <p className="font-handwriting text-[13px] font-bold text-text-dark tracking-wide truncate text-center pl-1 leading-tight">
                        {tagText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Title tag on Polaroid margin */}
              <div className="mt-4 text-center">
                <span className="font-heading text-sm font-bold text-text-dark tracking-wide block">
                  {selectedItem.name}
                </span>
                <span className="font-handwriting text-base font-bold text-primary italic leading-none block mt-1 select-none">
                  crafted for you 🌼
                </span>
              </div>
            </motion.div>

            {/* Price Tag Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-3 -right-3 bg-primary text-white font-body text-xs font-bold px-4 py-2 rounded-full shadow-soft rotate-12 border-2 border-white z-20"
            >
              Customizable: {selectedItem.price}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Selection & Customization Controls (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-soft">
            
            {/* Step 1: Base Product */}
            <div className="mb-8">
              <label className="font-heading text-xs font-bold uppercase tracking-wider text-text-dark/60 block mb-3">
                1. Choose Base Item
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {customItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemChange(item)}
                    className={`p-3 rounded-xl border font-body text-xs font-medium transition-all cursor-pointer ${
                      selectedItem.id === item.id
                        ? 'bg-secondary border-primary text-primary font-bold shadow-soft scale-102'
                        : 'bg-white border-primary/10 hover:border-primary/30 text-text-dark/80'
                    }`}
                  >
                    {item.id === 'sunflower' && '🌻 '}
                    {item.id === 'tulip' && '🌷 '}
                    {item.id === 'strawberry' && '🍓 '}
                    {item.id === 'bunny' && '🐰 '}
                    {item.name.replace(' Charm', '').replace(' Holder', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Base Color Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-text-dark/60">
                  2. Choose Base Yarn Color
                </label>
                <span className="font-body text-[10px] bg-secondary px-2 py-0.5 rounded text-primary font-bold">
                  {getBaseColorName()}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {yarnColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setBaseColor(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer relative shadow-soft ${
                      baseColor === color.hex
                        ? 'border-primary scale-110 ring-2 ring-primary/20'
                        : 'border-white hover:scale-105'
                    }`}
                    title={color.name}
                  >
                    {baseColor === color.hex && (
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white drop-shadow">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Accent Color Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="font-heading text-xs font-bold uppercase tracking-wider text-text-dark/60">
                  3. Choose Accent Color (Leaf/Details)
                </label>
                <span className="font-body text-[10px] bg-secondary px-2 py-0.5 rounded text-primary font-bold">
                  {getAccentColorName()}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {yarnColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setAccentColor(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer relative shadow-soft ${
                      accentColor === color.hex
                        ? 'border-primary scale-110 ring-2 ring-primary/20'
                        : 'border-white hover:scale-105'
                    }`}
                    title={color.name}
                  >
                    {accentColor === color.hex && (
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white drop-shadow">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Clasp Type Selection */}
            <div className="mb-8">
              <label className="font-heading text-xs font-bold uppercase tracking-wider text-text-dark/60 block mb-3">
                4. Select Clasp Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {claspTypes.map((clasp) => (
                  <button
                    key={clasp.id}
                    onClick={() => setSelectedClasp(clasp)}
                    className={`p-3 rounded-xl border font-body text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      selectedClasp.id === clasp.id
                        ? 'bg-secondary border-primary text-primary font-bold shadow-soft scale-102'
                        : 'bg-white border-primary/10 hover:border-primary/30 text-text-dark/80'
                    }`}
                  >
                    <span>{clasp.icon}</span>
                    <span>{clasp.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Custom Tag Input */}
            <div className="mb-8">
              <label className="font-heading text-xs font-bold uppercase tracking-wider text-text-dark/60 block mb-2">
                5. Add Gift Tag Message (Optional)
              </label>
              <input
                type="text"
                maxLength={15}
                value={tagText}
                onChange={(e) => setTagText(e.target.value)}
                placeholder="e.g. For Mom 💖"
                className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary/50 focus:outline-none bg-white text-text-dark font-body text-xs tracking-wider transition-colors"
              />
              <span className="text-[10px] font-body text-text-dark/40 mt-1.5 block pl-1">
                Max 15 characters. Displays in beautiful cursive handwriting on the tag!
              </span>
            </div>

            {/* WhatsApp CTA Action */}
            <button
              onClick={handleOrderSubmit}
              className="w-full py-4 bg-primary text-white font-body text-xs font-semibold rounded-2xl hover:bg-primary-hover shadow-soft hover:shadow-premium flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              SEND DESIGN & ORDER ON WHATSAPP
            </button>
            
            <div className="flex items-center gap-1.5 justify-center mt-3 text-[10px] font-body text-text-dark/50">
              <Info className="h-3 w-3" />
              <span>We discuss custom pricing (approx {selectedItem.price}) and variations directly on WhatsApp chat.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VisualCustomizer;
