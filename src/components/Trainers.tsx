import React from 'react';
import { UserCheck, Award, Dumbbell, ShieldAlert, ArrowRight } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

interface TrainersProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="trainers" className="py-24 bg-[#080808] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              Coaching Staff
            </span>
          </div>

          <h2
            id="trainers-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Expert <span className="text-[#FFD21F]">Guidance</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Our experienced fitness professionals ensure proper form, progressive overload, and constant motivation throughout your journey.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-[#181818]">
                <img
                  src={trainer.image}
                  alt={trainer.role}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-[#080808]/90 text-[#FFD21F] border border-[#333333] text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                    [Placeholder]
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFD21F] transition-colors mb-1">
                    {trainer.role}
                  </h3>

                  <p className="text-xs font-semibold text-[#FFD21F] uppercase tracking-wider mb-2">
                    {trainer.specialization}
                  </p>

                  <p className="text-xs text-[#888888] mb-4">
                    {trainer.experience}
                  </p>

                  <div className="p-2.5 rounded bg-[#181818] border border-[#242424] text-[11px] text-[#A5A5A5] italic">
                    "{trainer.quote}"
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-5 pt-3 border-t border-[#1F1F1F]">
                  <button
                    onClick={() => onOpenTrialModal(`Training Session with ${trainer.role}`)}
                    className="w-full py-2 rounded bg-[#181818] hover:bg-[#FFD21F] text-[#A5A5A5] hover:text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request 1-on-1 Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
