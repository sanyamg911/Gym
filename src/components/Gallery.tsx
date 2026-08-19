import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'strength' | 'cardio' | 'group' | 'yoga_dance' | 'interiors'>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'strength', label: 'Strength & Free Weights' },
    { id: 'cardio', label: 'Cardio Deck' },
    { id: 'group', label: 'Group & Coaching' },
    { id: 'yoga_dance', label: 'Yoga & Studios' },
    { id: 'interiors', label: 'Gym Facility' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => {
        if (selectedCategory === 'strength') return item.category === 'strength';
        if (selectedCategory === 'cardio') return item.category === 'cardio';
        if (selectedCategory === 'group') return item.category === 'group';
        if (selectedCategory === 'yoga_dance') return item.category === 'yoga_dance';
        if (selectedCategory === 'interiors') return item.category === 'interiors';
        return true;
      });

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0D] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              Visual Showcase
            </span>
          </div>

          <h2
            id="gallery-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            The Fitness Art <span className="text-[#FFD21F]">Space</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Take a look inside our dynamic training zones, equipment floors, dedicated group studios, and recovery spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#FFD21F] text-black shadow-md'
                  : 'bg-[#141414] text-[#A5A5A5] hover:text-white border border-[#262626]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-xl overflow-hidden bg-[#161616] border border-[#222222] hover:border-[#FFD21F]/70 transition-all duration-300 cursor-pointer shadow-lg ${
                index === 0 || index === 4 ? 'sm:col-span-2 sm:row-span-1' : ''
              }`}
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-115"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#FFD21F]" />
              </div>

              {/* Text info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD21F] block mb-1">
                  Fitness Art Mumbai
                </span>
                <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-[#FFD21F] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A5A5A5] line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-[#333333] transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1A1A1A]/80 hover:bg-[#2A2A2A] text-white border border-[#333333] transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1A1A1A]/80 hover:bg-[#2A2A2A] text-white border border-[#333333] transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-[#121212] border border-[#2B2B2B] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={filteredItems[activeImageIndex].image}
                alt={filteredItems[activeImageIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-[#121212] border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFD21F]">
                  Fitness Art Facility Showcase ({activeImageIndex + 1} / {filteredItems.length})
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                  {filteredItems[activeImageIndex].title}
                </h3>
                <p className="text-sm text-[#A5A5A5] mt-1">
                  {filteredItems[activeImageIndex].caption}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevImage}
                  className="sm:hidden px-4 py-2 rounded bg-[#202020] text-white text-xs font-bold"
                >
                  Prev
                </button>
                <button
                  onClick={nextImage}
                  className="sm:hidden px-4 py-2 rounded bg-[#202020] text-white text-xs font-bold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
