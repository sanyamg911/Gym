import React from 'react';
import { Check, Flame, ArrowRight, ShieldCheck, HelpCircle, PhoneCall } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface MembershipProps {
  onOpenTrialModal: (planName?: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="membership" className="py-24 bg-[#080808] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD21F]" />
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
              Flexible Memberships
            </span>
          </div>

          <h2
            id="membership-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Invest In <span className="text-[#FFD21F]">Yourself</span>
          </h2>

          <p className="text-[#A5A5A5] text-base sm:text-lg leading-relaxed">
            Transparent options designed for your fitness goals. Choose the plan that best fits your training rhythm.
          </p>

          {/* Mandatory notice */}
          <div className="mt-4 p-3 rounded-lg bg-[#141414] border border-[#2A2A2A] inline-block text-xs sm:text-sm text-[#FFD21F] font-semibold">
            Contact Fitness Art for current membership plans and pricing.
          </div>
        </div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              id={`membership-card-${plan.id}`}
              className={`rounded-2xl relative flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#1C1C1C] via-[#141414] to-[#121212] border-2 border-[#FFD21F] shadow-[0_0_40px_rgba(255,210,31,0.2)] md:-translate-y-3'
                  : 'bg-[#121212] border border-[#262626] hover:border-[#3A3A3A] shadow-xl'
              } p-8`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD21F] text-black font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="border-b border-[#242424] pb-6 mb-6">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#A5A5A5] block mb-1">
                    Membership Tier
                  </span>
                  <h3 className="font-display text-3xl font-black text-white uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#8E8E8E] leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-[#A5A5A5]">
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <div className="text-xs uppercase font-bold tracking-wider text-[#A5A5A5] mb-2">
                    What's Included:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1F1F1F] border border-[#333333] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#FFD21F] stroke-[3]" />
                      </div>
                      <span className="text-sm text-[#CCCCCC] leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenTrialModal(`${plan.name} Membership Plan`)}
                  id={`membership-btn-${plan.id}`}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#FFD21F] hover:bg-[#FFE047] active:bg-[#E6BA0A] text-black shadow-lg shadow-[#FFD21F]/20'
                      : 'bg-[#1C1C1C] hover:bg-[#282828] text-white border border-[#333333] hover:border-[#FFD21F]/50'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <p className="text-center text-[11px] text-[#777777] mt-3">
                  Terms & registration guidance available at reception.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate / Personal Training FAQ Strip */}
        <div className="mt-16 p-6 rounded-xl bg-[#121212] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1F1F1F] text-[#FFD21F] border border-[#333333] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                Need Corporate or Annual Custom Plans?
              </h4>
              <p className="text-xs sm:text-sm text-[#A5A5A5]">
                Contact our Mumbai front desk team for student discounts, group packages, and personalized training addons.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333333] text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Inquire at Front Desk
          </a>
        </div>

      </div>
    </section>
  );
};
