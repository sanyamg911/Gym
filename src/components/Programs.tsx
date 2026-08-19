import React, { useState } from 'react';
import { ArrowRight, Flame, Sparkles, Dumbbell, Zap, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { ProgramItem } from '../types';

interface ProgramsProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenTrialModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'strength' | 'cardio' | 'mind_body' | 'specialized'>('all');

  const categories = [
    { id: 'all', label: 'All 10 Programs' },
    { id: 'strength', label: 'Strength & Power' },
    { id: 'cardio', label: 'Cardio & Dance' },
    { id: 'mind_body', label: 'Mind & Body' },
    { id: 'specialized', label: 'Specialized Training' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => {
        if (selectedCategory === 'cardio') return p.category === 'cardio';
        if (selectedCategory === 'strength') return p.category === 'strength';
        if (selectedCategory === 'mind_body') return p.category === 'mind_body';
        if (selectedCategory === 'specialized') return p.category === 'specialized';
        return true;
      });

  return (
    <section id="programs" className="py-24 bg-[#080808] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              Dynamic Training Options
            </span>
          </div>

          <h2
            id="programs-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Find Your <span className="text-[#FFD21F]">Fit</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Whether your goal is lifting heavier, developing explosive endurance, or finding peace and flexibility, Fitness Art has a program tailored for you.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="programs-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              id={`filter-tab-${cat.id}`}
              className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#FFD21F] text-black shadow-lg shadow-[#FFD21F]/20'
                  : 'bg-[#141414] text-[#A5A5A5] hover:text-white hover:bg-[#1C1C1C] border border-[#242424]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((program: ProgramItem) => (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              className="bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-black group"
            >
              {/* Card Image with Intensity Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded bg-[#080808]/90 border border-[#2D2D2D] text-[#FFD21F] font-extrabold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                    {program.focus}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#FFD21F] text-black font-extrabold text-[10px] uppercase tracking-wider">
                    {program.intensity}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFD21F] transition-colors mb-3 flex items-center justify-between">
                    <span>{program.title}</span>
                    <span className="w-2 h-2 rounded-full bg-[#FFD21F] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-sm text-[#A5A5A5] leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                  <button
                    onClick={() => onOpenTrialModal(program.title)}
                    className="text-xs uppercase font-extrabold tracking-wider text-[#FFD21F] group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Book Trial for {program.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] uppercase tracking-widest text-[#666666]">
                    Fitness Art
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Programs */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#141414] via-[#181818] to-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FFD21F] text-black flex items-center justify-center font-bold shrink-0">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white uppercase">
                Not sure which program suits your body?
              </h4>
              <p className="text-sm text-[#A5A5A5]">
                Consult our trainers for a customized training schedule.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenTrialModal('General Fitness Assessment')}
            className="px-6 py-3 rounded-lg bg-[#FFD21F] hover:bg-[#FFE047] text-black font-extrabold text-xs uppercase tracking-wider whitespace-nowrap transition-all shadow-md cursor-pointer"
          >
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
