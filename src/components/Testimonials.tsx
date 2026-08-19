import React from 'react';
import { Star, MessageSquareQuote, ShieldAlert, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              Member Experiences
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Community <span className="text-[#FFD21F]">Stories</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Real commitment creates real changes. See what members say about making Fitness Art their way of life.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/40 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg relative group"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-[#242424] group-hover:text-[#FFD21F]/20 transition-colors">
                <Quote className="w-10 h-10 stroke-1" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD21F] text-[#FFD21F]" />
                  ))}
                </div>

                {/* Testimonial Quote Text (Prompt requirement) */}
                <p className="text-white text-base leading-relaxed mb-6 font-medium italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#1F1F1F] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1C1C1C] border border-[#333333] flex items-center justify-center font-bold text-[#FFD21F] text-sm">
                  MA
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                    {item.authorPlaceholder}
                  </h4>
                  <div className="text-xs text-[#FFD21F]">
                    {item.programPlaceholder}
                  </div>
                  <div className="text-[11px] text-[#777777]">
                    {item.durationPlaceholder}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
