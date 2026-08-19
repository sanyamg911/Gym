import React from 'react';
import { Target, Users, Dumbbell, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface AboutProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-t border-[#1C1C1C]">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD21F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered athletic frame */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#242424] shadow-2xl group-hover:border-[#FFD21F]/50 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop"
                alt="Fitness Art Gym Community & Facility"
                className="w-full h-[460px] object-cover object-center filter contrast-115 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

              {/* Floating Badge in Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#121212]/95 border border-[#2B2B2B] p-4 rounded-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#FFD21F] flex items-center justify-center text-black font-black shrink-0">
                    <Users className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                      A Way Of Life Community
                    </h4>
                    <p className="text-[#A5A5A5] text-xs">
                      Dedicated training culture in the heart of Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#FFD21F] pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subheading */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#FFD21F]" />
              <span id="about-subheading" className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
                Stronger Every Day
              </span>
            </div>

            {/* Main Heading */}
            <h2
              id="about-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
            >
              More Than Just <br className="hidden sm:inline" />
              <span className="text-[#FFD21F]">A Gym</span>
            </h2>

            {/* Required Copy */}
            <div className="border-l-2 border-[#FFD21F] pl-5 mb-8">
              <p
                id="about-copy-text"
                className="text-lg sm:text-xl text-white font-medium leading-relaxed"
              >
                "Fitness Art is more than just a place to work out. It's a community of people working towards becoming healthier, stronger and better versions of themselves."
              </p>
            </div>

            {/* Three Core Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#141414] border border-[#222222] p-4 rounded-lg">
                <div className="w-8 h-8 rounded bg-[#1F1F1F] text-[#FFD21F] flex items-center justify-center mb-3">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                  Purposeful Training
                </h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Focus on correct technique, progressive development, and injury prevention.
                </p>
              </div>

              <div className="bg-[#141414] border border-[#222222] p-4 rounded-lg">
                <div className="w-8 h-8 rounded bg-[#1F1F1F] text-[#FFD21F] flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                  Supportive Culture
                </h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  An inclusive space where beginners and seasoned athletes lift each other up.
                </p>
              </div>

              <div className="bg-[#141414] border border-[#222222] p-4 rounded-lg">
                <div className="w-8 h-8 rounded bg-[#1F1F1F] text-[#FFD21F] flex items-center justify-center mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                  Holistic Wellness
                </h3>
                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  Balancing high-power muscle work with mind-body restoration and vitality.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenTrialModal()}
                id="about-cta-btn"
                className="px-6 py-3.5 rounded-lg bg-[#FFD21F] hover:bg-[#FFE047] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Experience Fitness Art</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href="#programs"
                className="px-6 py-3.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] text-white border border-[#292929] hover:border-[#FFD21F]/40 font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>View Programs</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
