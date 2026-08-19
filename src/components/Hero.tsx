import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Flame, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Fitness Art Gym Training Floor"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125 transition-transform duration-1000"
          loading="eager"
        />
        {/* Layered High-Contrast Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />
        {/* Subtle dynamic grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Small Top Eyebrow / Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#161616]/90 border border-[#2D2D2D] backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#FFD21F] animate-pulse" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]" id="hero-small-text">
              FITNESS ART GYM
            </span>
            <span className="text-[#555555]">•</span>
            <span className="text-[11px] text-[#A5A5A5] font-semibold tracking-wider uppercase">
              MUMBAI
            </span>
          </div>

          {/* Main Brand Tagline Heading */}
          <h1
            id="hero-main-heading"
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.95] mb-4 text-shadow-xl"
          >
            IT'S A WAY <br />
            <span className="text-[#FFD21F]">
              OF LIFE
            </span>
          </h1>

          {/* Supporting Heading */}
          <h2
            id="hero-supporting-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/95 uppercase tracking-wide mt-6 mb-4 flex items-center gap-2"
          >
            <Flame className="w-6 h-6 text-[#FFD21F] shrink-0" />
            <span>Train Harder. Move Better. Become Stronger.</span>
          </h2>

          {/* Supporting Text */}
          <p
            id="hero-supporting-text"
            className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed max-w-2xl mb-8 font-normal"
          >
            A complete fitness experience designed to help you build strength, improve your fitness and become the best version of yourself.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenTrialModal()}
              id="hero-join-now-btn"
              className="px-8 py-4 rounded-lg bg-[#FFD21F] hover:bg-[#FFE047] active:bg-[#E6BA0A] text-black font-extrabold text-base uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(255,210,31,0.35)] hover:shadow-[0_0_40px_rgba(255,210,31,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>

            <button
              onClick={() => onOpenTrialModal('Free Trial Pass')}
              id="hero-book-trial-btn"
              className="px-8 py-4 rounded-lg bg-[#141414]/90 hover:bg-[#1E1E1E] active:bg-[#101010] text-white hover:text-[#FFD21F] border-2 border-[#2F2F2F] hover:border-[#FFD21F]/60 font-bold text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5 text-[#FFD21F]" />
              <span>Book a Free Trial</span>
            </button>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#666666] hover:text-[#FFD21F] transition-colors flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#FFD21F]" />
      </button>
    </section>
  );
};
