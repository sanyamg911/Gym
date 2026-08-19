import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Dumbbell } from 'lucide-react';
import { ProgramItem } from '../types';

interface ProgramsProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

// Exactly the 8 requested services
export const TARGET_PROGRAMS: ProgramItem[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    category: 'strength',
    description: 'Build raw muscular power, bone density, and sculpted physique with progressive overload and free weights.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    intensity: 'High',
    focus: 'Hypertrophy & Strength',
  },
  {
    id: 'strength-conditioning',
    title: 'Strength & Conditioning',
    category: 'strength',
    description: 'Athletic performance conditioning combining barbell work, plyometrics, and stamina drills for explosive power.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    intensity: 'High Intensity',
    focus: 'Agility & Endurance',
  },
  {
    id: 'yoga',
    title: 'Yoga',
    category: 'mind_body',
    description: 'Traditional asanas designed for core stability, deep joint mobility, conscious breathwork, and post-workout recovery.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    intensity: 'All Levels',
    focus: 'Mobility & Peace',
  },
  {
    id: 'zumba',
    title: 'Zumba',
    category: 'cardio',
    description: 'High-energy Latin and global dance fitness routines that turn intense calorie burning into an exhilarating party.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    intensity: 'High Intensity',
    focus: 'Cardio & Rhythm',
  },
  {
    id: 'dance',
    title: 'Dance',
    category: 'cardio',
    description: 'Choreographed workout sessions blending upbeat contemporary beats to improve rhythm, coordination, and tone.',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1200&auto=format&fit=crop',
    intensity: 'Medium',
    focus: 'Coordination & Cardio',
  },
  {
    id: 'trx',
    title: 'TRX',
    category: 'specialized',
    description: 'Total Resistance Exercise suspension training using bodyweight against gravity to forge rock-solid core stability.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    intensity: 'High',
    focus: 'Core & Suspension',
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    category: 'specialized',
    description: 'Multi-planar movement patterns with kettlebells, battle ropes, and sleds to prepare your body for real-life agility.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    intensity: 'High Intensity',
    focus: 'Agility & Power',
  },
  {
    id: 'power-yoga',
    title: 'Power Yoga',
    category: 'mind_body',
    description: 'Dynamic, fast-paced vinyasa flow that burns calories, elevates heart rate, and builds profound mental focus.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    intensity: 'High',
    focus: 'Cardio Flow & Core',
  },
];

export const Programs: React.FC<ProgramsProps> = ({ onOpenTrialModal }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate approximate active card index for pagination dots
    const totalItems = TARGET_PROGRAMS.length;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const scrollRatio = scrollLeft / maxScroll;
      const index = Math.round(scrollRatio * (totalItems - 1));
      setActiveIndex(Math.min(Math.max(0, index), totalItems - 1));
    }
  }, []);

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
    // Calculate card width dynamically (desktop ~ 1/4 of container, mobile ~ 85% width)
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

  return (
    <section id="programs" className="py-20 bg-[#080808] relative border-t border-[#1C1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
              <Zap className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
                Our Services
              </span>
            </div>

            <h2
              id="programs-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight"
            >
              Fitness <span className="text-[#FFD21F]">Programs</span>
            </h2>
            <p className="text-[#A5A5A5] text-sm sm:text-base mt-2 max-w-xl">
              Choose from 8 specialized training programs crafted to build strength, mobility, and lifelong discipline.
            </p>
          </div>

          {/* Desktop & Tablet Navigation Arrows */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={() => handleScroll('prev')}
              id="programs-prev-btn"
              aria-label="Previous Programs"
              className="w-11 h-11 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] active:bg-[#FFD21F] text-white active:text-black border border-[#2A2A2A] hover:border-[#FFD21F]/50 flex items-center justify-center transition-all cursor-pointer shadow-lg group"
            >
              <ChevronLeft className="w-5 h-5 text-[#A5A5A5] group-hover:text-white group-active:text-black transition-colors" />
            </button>
            <button
              onClick={() => handleScroll('next')}
              id="programs-next-btn"
              aria-label="Next Programs"
              className="w-11 h-11 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] active:bg-[#FFD21F] text-white active:text-black border border-[#2A2A2A] hover:border-[#FFD21F]/50 flex items-center justify-center transition-all cursor-pointer shadow-lg group"
            >
              <ChevronRight className="w-5 h-5 text-[#A5A5A5] group-hover:text-white group-active:text-black transition-colors" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          id="programs-carousel-track"
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-1 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TARGET_PROGRAMS.map((program, index) => (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              className="flex-none w-[82%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-15px)] snap-start bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/70 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-black group"
            >
              {/* Card Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#181818]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 rounded bg-[#080808]/90 border border-[#2D2D2D] text-[#FFD21F] font-extrabold text-[9px] uppercase tracking-wider backdrop-blur-sm">
                    {program.focus}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#FFD21F] text-black font-extrabold text-[9px] uppercase tracking-wider">
                    {program.intensity}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFD21F] transition-colors mb-2 line-clamp-1">
                    {program.title}
                  </h3>

                  <p className="text-xs text-[#A5A5A5] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4">
                    {program.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-[#1F1F1F]">
                  <button
                    onClick={() => onOpenTrialModal(program.title)}
                    id={`book-trial-${program.id}-btn`}
                    className="w-full text-xs uppercase font-extrabold tracking-wider text-[#FFD21F] group-hover:text-white flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>Learn More / Book Trial</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
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
            aria-label="Previous card"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5" id="programs-carousel-indicators">
            {TARGET_PROGRAMS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to program ${i + 1}`}
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
            aria-label="Next card"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
