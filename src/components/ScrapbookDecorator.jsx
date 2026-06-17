import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trash2, HelpCircle, ToggleLeft, ToggleRight } from 'lucide-react';

const ScrapbookDecorator = ({
  scrapbookEnabled,
  setScrapbookEnabled,
  selectedSticker,
  setSelectedSticker,
  stampsCount,
  onClearStamps
}) => {
  const stickerTypes = [
    { id: 'daisy', emoji: '🌼', label: 'Daisy' },
    { id: 'heart', emoji: '💖', label: 'Heart' },
    { id: 'star', emoji: '⭐', label: 'Star' },
    { id: 'yarn', emoji: '🧶', label: 'Yarn' },
    { id: 'clover', emoji: '🍀', label: 'Clover' }
  ];

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-[45] max-w-[280px] sm:max-w-xs w-full">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="glass p-4 rounded-3xl shadow-premium border border-primary/20 text-[#4B372F]"
      >
        {/* Title Block */}
        <div className="flex items-center justify-between mb-3 border-b border-primary/10 pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-lg">🎨</span>
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider leading-none">
                Scrapbook Studio
              </h4>
              <span className="font-body text-[9px] text-text-dark/60">
                Decorate the page!
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setScrapbookEnabled(!scrapbookEnabled)}
            className="focus:outline-none cursor-pointer text-primary hover:text-primary-hover transition-colors"
            title={scrapbookEnabled ? "Disable Scrapbook Mode" : "Enable Scrapbook Mode"}
          >
            {scrapbookEnabled ? (
              <ToggleRight className="h-9 w-9" />
            ) : (
              <ToggleLeft className="h-9 w-9 text-text-dark/40" />
            )}
          </button>
        </div>

        {/* Info Text */}
        <p className="font-body text-[10px] text-text-dark/75 leading-relaxed mb-3">
          {scrapbookEnabled ? (
            <span className="text-accent font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3 animate-pulse" />
              Mode Active! Click anywhere to place.
            </span>
          ) : (
            "Turn on to place stickers on the page background."
          )}
        </p>

        {/* Sticker Selector */}
        {scrapbookEnabled && (
          <div className="mb-3">
            <label className="font-heading text-[10px] font-bold uppercase tracking-wider block mb-1.5 text-text-dark/70">
              Select Sticker Stamp:
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {stickerTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedSticker(type)}
                  className={`aspect-square text-lg rounded-xl flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                    selectedSticker.id === type.id
                      ? 'bg-primary border-primary scale-110 shadow-soft'
                      : 'bg-white/50 border-primary/10 hover:bg-secondary'
                  }`}
                  title={type.label}
                >
                  {type.emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Status / Actions */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-primary/10 text-[9px] font-body text-[#4B372F]/70">
          <div>
            Stickers Placed: <span className="font-bold text-primary text-xs ml-0.5">{stampsCount}</span>
          </div>
          
          {stampsCount > 0 && (
            <button
              onClick={onClearStamps}
              className="flex items-center gap-1 text-primary hover:text-primary-hover font-semibold transition-colors cursor-pointer"
            >
              <Trash2 className="h-3 w-3" />
              Clear All
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrapbookDecorator;
