import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { SCHEDULE_CLASSES } from '../data/gymData';

interface ScheduleProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onOpenTrialModal }) => {
  const days = [
    { key: 'mon', label: 'Monday' },
    { key: 'tue', label: 'Tuesday' },
    { key: 'wed', label: 'Wednesday' },
    { key: 'thu', label: 'Thursday' },
    { key: 'fri', label: 'Friday' },
    { key: 'sat', label: 'Saturday' },
    { key: 'sun', label: 'Sunday' },
  ];

  const [activeDay, setActiveDay] = useState('mon');

  return (
    <section id="schedule" className="py-24 bg-[#0D0D0D] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              Weekly Batches & Classes
            </span>
          </div>

          <h2
            id="schedule-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Class <span className="text-[#FFD21F]">Schedule</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Stay organized with our comprehensive daily group workouts, strength sessions, and mindful wellness batches.
          </p>
        </div>

        {/* Days Tab Selector */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none" id="schedule-days-bar">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(day.key)}
              id={`schedule-day-${day.key}`}
              className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeDay === day.key
                  ? 'bg-[#FFD21F] text-black shadow-md shadow-[#FFD21F]/20'
                  : 'bg-[#141414] text-[#A5A5A5] hover:text-white border border-[#242424]'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SCHEDULE_CLASSES.map((cls) => (
            <div
              key={cls.id}
              id={`schedule-card-${cls.id}`}
              className="bg-[#121212] border border-[#222222] hover:border-[#FFD21F]/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD21F] px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#2E2E2E]">
                    {cls.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#A5A5A5]">
                    <MapPin className="w-3 h-3 text-[#FFD21F]" />
                    {cls.room}
                  </span>
                </div>

                {/* Class Title */}
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFD21F] transition-colors mb-2">
                  {cls.name}
                </h3>

                {/* Trainer Placeholder */}
                <p className="text-xs text-[#8E8E8E] mb-4">
                  Led by: <span className="text-white font-medium">{cls.instructorPlaceholder}</span>
                </p>
              </div>

              {/* Time Note Block (Mandatory) */}
              <div className="pt-4 border-t border-[#1E1E1E]">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#181818] border border-[#282828] mb-3">
                  <Clock className="w-4 h-4 text-[#FFD21F] shrink-0" />
                  <span className="text-xs font-black tracking-wider uppercase text-[#FFD21F]">
                    {cls.timingNote}
                  </span>
                </div>

                <button
                  onClick={() => onOpenTrialModal(`Inquire Batch for ${cls.name}`)}
                  className="w-full py-2 rounded-lg bg-[#181818] hover:bg-[#FFD21F] text-[#A5A5A5] hover:text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Class Timing</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Helper Footer */}
        <div className="mt-12 text-center p-4 rounded-lg bg-[#141414] border border-[#242424] max-w-2xl mx-auto">
          <p className="text-xs text-[#A5A5A5]">
            Batch timings and slots are updated on the gym notice board and WhatsApp community group.
          </p>
        </div>

      </div>
    </section>
  );
};
