# 🌼 ThreadTales — From Yarn To Your Heart

ThreadTales is a premium, handcrafted crochet and craft boutique brand. This website serves as a digital scrapbook and interactive showcase designed to wow visitors with warmth, creativity, and visual charm.

Visit Instagram: [@_thread.taless_](https://www.instagram.com/_thread.taless_/)

---

## 🎨 Creative & Premium Features

### 1. Interactive Design Lab (Visual Customizer)
A central feature of the website where users can customize their own crochet charm:
- **Base Products**: Choose from *Sunny Sunflower*, *Minimalist Tulip*, *Sweet Strawberry*, and *Bunny Earbuds Holder*.
- **Yarn Color Customization**: Live update base and accent yarn colors using a curated, cozy brand palette (Rose, Gold, Mint, Lavender, Ivory, Red).
- **Clasp Attachments**: Switch between a Silver Keyring, Gold Lobster Clasp, or Sage Hanging Cord.
- **Handwritten Gift Tag**: Add custom tag text that renders instantly in a realistic cursive handwriting tag (`Caveat` font).
- **Direct Order CTA**: A formatted WhatsApp link compiles their unique choices and opens a direct chat to place the commission.

### 2. Scrapbook Sticker Decorator Mode
A whimsical, craft-focused interaction that turns the website into a personal scrapbook:
- Toggle **Scrapbook Mode** from the floating panel.
- Select a craft sticker stamp (Daisy 🌼, Heart 💖, Star ⭐, Yarn Ball 🧶, Clover 🍀).
- Click anywhere on the screen background to stick it down!
- Stamps render with spring-physics scale-ins, random rotations, and drop shadows, remaining fixed on the background as you scroll.
- Tracker counts placed stickers and offers a single-click "Sweep Clean" trash option.

### 3. Overlapping Polaroid Collages
- Custom-angled Polaroid photo frames with realistic drop-shadows and handwriting script captions.
- Cards feature spring-animated tilt wobbles on hover, mimicking physical papers.
- Uses **100% real product images** showing authentic crochet keychains, pouches, holders, and flower bouquets.

### 4. Ambient Animations & Effects
- **Interactive Bubble Background**: A floating bubble animation trailing behind a glassmorphism content overlay, tinted with HSL brand colors.
- **Cursor Sparkle Trails**: Trailing stardust and flower particles follow the user's cursor for a magical feel.
- **Craft Loader**: A spinning yarn ball loader screen on initial load.

---

## 🛠️ Technology Stack

- **Core**: React 18, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (PostCSS)
- **Animations**: Framer Motion (spring-physics transitions, SVG fill/rotation state mapping, and page transitions)
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Cormorant Garamond*, *Poppins*, and *Caveat* for handwriting)

---

## 📂 Project Structure

```
Mini Wood_art site/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Real product photos, brand logo, icons
│   ├── components/         # Reusable react components
│   │   ├── animate-ui/     # Advanced animation assets (BubbleBackground)
│   │   ├── About.jsx       # Story and collage showcase
│   │   ├── Contact.jsx     # Inquiry details, copyable contact, direct call CTAs
│   │   ├── CursorSparkles.jsx # Trailing mouse cursor particle effect
│   │   ├── FeaturedCreations.jsx # 14-item grid with category filters & quick details
│   │   ├── Footer.jsx      # Luxury footer block with insta feed hooks
│   │   ├── Hero.jsx        # Landing collage of top products
│   │   ├── Navbar.jsx      # Glass navigation with brand logo badge
│   │   ├── ScrapbookDecorator.jsx # Toolbar for placing stickers
│   │   ├── StickyActions.jsx # Floating call & whatsapp dock
│   │   ├── VisualCustomizer.jsx # Custom color/SVG order engine
│   │   └── WhyChooseUs.jsx # Brand values details
│   ├── App.jsx             # Main layout, load screens, sticker click handler
│   ├── index.css           # Global theme colors and scrollbar overrides
│   └── main.jsx            # React mounting hook
├── index.html              # Custom fonts and SEO metadata headers
├── vite.config.js          # Path alias mappings
└── package.json            # Dependencies configuration
```

---

## 🚀 Local Setup & Development

### 1. Install Dependencies
Run this command in the project root:
```bash
npm install
```

### 2. Start Local Development Server
Launch the local Hot Module Replacement (HMR) server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
Bundle and optimize the project for deployment:
```bash
npm run build
```
Output files will be generated in the `dist/` directory, ready to be uploaded to any cPanel web root or static host.
