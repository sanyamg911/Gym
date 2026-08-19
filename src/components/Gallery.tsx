import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Keep 8 photos
  const galleryItems = GALLERY_ITEMS.slice(0, 8);

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const totalItems = galleryItems.length;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const scrollRatio = scrollLeft / maxScroll;
      const index = Math.round(scrollRatio * (totalItems - 1));
      setActiveIndex(Math.min(Math.max(0, index), totalItems - 1));
    }
  }, [galleryItems.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardEl = container.firstElementChild as HTMLElement | null;
    const scrollAmount = cardEl ? cardEl.offsetWidth + 20 : container.clientWidth * 0.8;

    if (direction === 'prev') {
      if (container.scrollLeft <= 15) {
        // Loop to end
        container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 15) {
        // Loop to start
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#0D0D0D] relative border-t border-[#1C1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
              <Camera className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
                Visual Showcase
              </span>
            </div>

            <h2
              id="gallery-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight"
            >
              Gym <span className="text-[#FFD21F]">Gallery</span>
            </h2>

            <p className="text-[#A5A5A5] text-sm sm:text-base mt-2 max-w-xl">
              Explore our training floor, heavy lifting zones, high-energy dance studios, and wellness spaces.
            </p>
          </div>

          {/* Desktop & Tablet Navigation Arrows */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={() => handleScroll('prev')}
              id="gallery-prev-btn"
              aria-label="Previous Gallery Images"
              className="w-11 h-11 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] active:bg-[#FFD21F] text-white active:text-black border border-[#2A2A2A] hover:border-[#FFD21F]/50 flex items-center justify-center transition-all cursor-pointer shadow-lg group"
            >
              <ChevronLeft className="w-5 h-5 text-[#A5A5A5] group-hover:text-white group-active:text-black transition-colors" />
            </button>
            <button
              onClick={() => handleScroll('next')}
              id="gallery-next-btn"
              aria-label="Next Gallery Images"
              className="w-11 h-11 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] active:bg-[#FFD21F] text-white active:text-black border border-[#2A2A2A] hover:border-[#FFD21F]/50 flex items-center justify-center transition-all cursor-pointer shadow-lg group"
            >
              <ChevronRight className="w-5 h-5 text-[#A5A5A5] group-hover:text-white group-active:text-black transition-colors" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          id="gallery-carousel-track"
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              id={`gallery-item-${item.id}`}
              className="flex-none w-[82%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-15px)] snap-start bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/70 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-black group flex flex-col"
            >
              {/* Image with uniform aspect ratio */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#181818]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-10 h-10 rounded-full bg-[#FFD21F] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Caption details below image */}
              <div className="p-3.5 sm:p-4 bg-[#121212] border-t border-[#1C1C1C] flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#FFD21F] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888888] line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Footer with Mobile Arrows & Pagination Dots */}
        <div className="mt-6 flex items-center justify-between sm:justify-center gap-4">
          {/* Mobile Prev Button */}
          <button
            onClick={() => handleScroll('prev')}
            className="sm:hidden p-2 rounded-lg bg-[#141414] border border-[#2A2A2A] text-white flex items-center justify-center active:bg-[#FFD21F] active:text-black"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5" id="gallery-carousel-indicators">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to gallery image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-6 bg-[#FFD21F]'
                    : 'w-1.5 bg-[#2A2A2A] hover:bg-[#555555]'
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={() => handleScroll('next')}
            className="sm:hidden p-2 rounded-lg bg-[#141414] border border-[#2A2A2A] text-white flex items-center justify-center active:bg-[#FFD21F] active:text-black"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
          id="gallery-lightbox-modal"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#181818] text-white hover:bg-[#FFD21F] hover:text-black transition-colors cursor-pointer"
            id="close-lightbox-btn"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181818]/90 text-white hover:bg-[#FFD21F] hover:text-black transition-colors cursor-pointer z-50 hidden sm:flex items-center justify-center"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeImageIndex].image}
              alt={galleryItems[activeImageIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-[#2B2B2B] shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-white uppercase font-display tracking-wide">
                {galleryItems[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5A5] mt-1">
                {galleryItems[activeImageIndex].caption}
              </p>
              <span className="inline-block text-[11px] text-[#FFD21F] mt-1 font-semibold">
                Photo {activeImageIndex + 1} of {galleryItems.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181818]/90 text-white hover:bg-[#FFD21F] hover:text-black transition-colors cursor-pointer z-50 hidden sm:flex items-center justify-center"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
