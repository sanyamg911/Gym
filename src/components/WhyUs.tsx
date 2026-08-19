import React from 'react';
import {
  Award,
  Dumbbell,
  Layers,
  Target,
  Users,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { WHY_US_BENEFITS } from '../data/gymData';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#FFD21F]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#FFD21F]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FFD21F]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#FFD21F]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#FFD21F]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FFD21F]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#FFD21F]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0D0D0D] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              The Fitness Art Difference
            </span>
          </div>

          <h2
            id="why-us-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Why <span className="text-[#FFD21F]">Fitness Art</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Built for athletes, beginners, and everyday individuals striving to make healthy living their enduring way of life.
          </p>
        </div>

        {/* Six Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              id={`why-us-card-${benefit.id}`}
              className="bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/50 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFD21F]/10 to-transparent pointer-events-none" />

              <div>
                {/* Minimal yellow icon container */}
                <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#2B2B2B] flex items-center justify-center mb-6 group-hover:border-[#FFD21F] group-hover:bg-[#1E1E1E] transition-colors">
                  {getIcon(benefit.iconName)}
                </div>

                {/* Index tag */}
                <div className="text-[11px] font-bold tracking-widest text-[#FFD21F] uppercase mb-2">
                  Benefit 0{index + 1}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#FFD21F] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A5A5A5] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom line indicator */}
              <div className="w-8 h-0.5 bg-[#2B2B2B] group-hover:bg-[#FFD21F] group-hover:w-16 transition-all duration-300 mt-6" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
