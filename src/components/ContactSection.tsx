import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Flame,
  Dumbbell,
} from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

interface ContactSectionProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenTrialModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fitnessGoal: 'Muscle Building & Strength',
    preferredProgram: 'Weight Training',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fitnessGoals = [
    'Muscle Building & Strength',
    'Fat Loss & Conditioning',
    'Flexibility & Core Mobility',
    'General Fitness & Endurance',
    'Stress Relief & Wellness',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift client-side lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      fitnessGoal: 'Muscle Building & Strength',
      preferredProgram: 'Weight Training',
      message: '',
    });
  };

  return (
    <div id="contact" className="relative bg-[#080808] border-t border-[#1C1C1C]">
      
      {/* 1. Large CTA Banner Section Required by Prompt */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0D0D0D] border-b border-[#222222] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD21F_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#333333] text-xs uppercase font-extrabold tracking-widest text-[#FFD21F] mb-6">
            <Flame className="w-4 h-4 fill-[#FFD21F]" />
            <span>Join Mumbai's Energetic Fitness Family</span>
          </div>

          <h2
            id="cta-ready-heading"
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
          >
            Ready To Make Fitness <br />
            <span className="text-[#FFD21F]">A Way Of Life?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#A5A5A5] max-w-2xl mx-auto mb-10 leading-relaxed">
            Step onto the floor, connect with expert coaches, and start sculpting your strongest, healthiest physique today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrialModal()}
              id="cta-join-now-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#FFD21F] hover:bg-[#FFE047] active:bg-[#E6BA0A] text-black font-extrabold text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FFD21F]/20 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>

            <button
              onClick={() => onOpenTrialModal('Free Trial Pass')}
              id="cta-book-trial-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#181818] hover:bg-[#222222] text-white border-2 border-[#333333] hover:border-[#FFD21F] font-bold text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#FFD21F]" />
              <span>Book A Free Trial</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Contact / Lead Generation Form Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information & WhatsApp Action */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161616] border border-[#282828] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FFD21F]" />
                <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
                  Reach Out To Us
                </span>
              </div>

              <h2
                id="contact-heading"
                className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
              >
                Let's Get You <br />
                <span className="text-[#FFD21F]">Started</span>
              </h2>

              <p className="text-[#A5A5A5] text-base leading-relaxed mb-8">
                Have questions regarding membership plans, class schedules, or personal training? Reach out and our team will get back to you promptly.
              </p>

              {/* Contact Information Cards (Placeholders) */}
              <div className="space-y-4 mb-8">
                {/* Location */}
                <div className="p-4 rounded-xl bg-[#121212] border border-[#242424] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2F2F2F] text-[#FFD21F] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#A5A5A5] mb-0.5">
                      Gym Location
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      [Fitness Art Gym Address Placeholder], Mumbai, Maharashtra
                    </p>
                    <p className="text-xs text-[#707070]">
                      Prime fitness hub in Mumbai
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-[#121212] border border-[#242424] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2F2F2F] text-[#FFD21F] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#A5A5A5] mb-0.5">
                      Phone / Helpline
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      +91 [Phone Number Placeholder]
                    </p>
                    <p className="text-xs text-[#707070]">
                      Available Mon–Sat: 6:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-[#121212] border border-[#242424] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2F2F2F] text-[#FFD21F] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#A5A5A5] mb-0.5">
                      Email Address
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      info@[fitnessartgym-placeholder].com
                    </p>
                    <p className="text-xs text-[#707070]">
                      Direct membership & corporate inquiries
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-4 rounded-xl bg-[#121212] border border-[#242424] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2F2F2F] text-[#FFD21F] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#A5A5A5] mb-0.5">
                      Operating Hours
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      Monday – Saturday: 6:00 AM – 10:30 PM
                    </p>
                    <p className="text-xs text-white/80">
                      Sunday: 7:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button (Mandatory) */}
            <div className="pt-2">
              <a
                href="https://wa.me/919999999999?text=Hello%20Fitness%20Art%20Gym%20Mumbai%2C%20I%20would%20like%20to%20know%20more%20about%20plans%20and%20trials."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-chat-btn"
                className="w-full py-4 rounded-xl bg-[#161616] hover:bg-[#1E1E1E] border-2 border-[#2F2F2F] hover:border-[#FFD21F] text-white hover:text-[#FFD21F] font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-lg group"
              >
                <MessageSquare className="w-5 h-5 text-[#FFD21F] group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-[#262626] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 px-4" id="form-success-state">
                  <div className="w-16 h-16 rounded-full bg-[#FFD21F] text-black flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,210,31,0.4)]">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>

                  <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wide mb-3">
                    Enquiry Received!
                  </h3>

                  <p className="text-[#A5A5A5] text-base max-w-md mx-auto mb-8">
                    Thank you for reaching out to Fitness Art Gym. Our front desk coach will contact you on <span className="text-white font-bold">{formData.phone || 'your phone'}</span> shortly with plan details.
                  </p>

                  <div className="p-4 rounded-xl bg-[#181818] border border-[#2E2E2E] max-w-md mx-auto text-left mb-8 text-xs text-[#A5A5A5] space-y-1.5">
                    <div><strong className="text-white">Program of Interest:</strong> {formData.preferredProgram}</div>
                    <div><strong className="text-white">Goal:</strong> {formData.fitnessGoal}</div>
                    {formData.message && <div><strong className="text-white">Note:</strong> {formData.message}</div>}
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-lg bg-[#FFD21F] text-black font-extrabold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-lead-form">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#222222]">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                        Send An Enquiry
                      </h3>
                      <p className="text-xs text-[#A5A5A5]">
                        Fill out the form below to receive membership details or a trial pass.
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFD21F] px-2 py-1 bg-[#1A1A1A] rounded border border-[#333333]">
                      Fast Response
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                        Your Name <span className="text-[#FFD21F]">*</span>
                      </label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-[#2A2A2A] focus:border-[#FFD21F] focus:outline-none text-white text-sm placeholder-[#555555] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone-input" className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                        Phone Number <span className="text-[#FFD21F]">*</span>
                      </label>
                      <input
                        id="phone-input"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-[#2A2A2A] focus:border-[#FFD21F] focus:outline-none text-white text-sm placeholder-[#555555] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                        Email Address <span className="text-[#FFD21F]">*</span>
                      </label>
                      <input
                        id="email-input"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-[#2A2A2A] focus:border-[#FFD21F] focus:outline-none text-white text-sm placeholder-[#555555] transition-colors"
                      />
                    </div>

                    {/* Fitness Goal */}
                    <div>
                      <label htmlFor="goal-select" className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                        Fitness Goal
                      </label>
                      <select
                        id="goal-select"
                        name="fitnessGoal"
                        value={formData.fitnessGoal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-[#2A2A2A] focus:border-[#FFD21F] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                      >
                        {fitnessGoals.map((g) => (
                          <option key={g} value={g} className="bg-[#181818] text-white">
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Program */}
                  <div className="mb-5">
                    <label htmlFor="program-select" className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                      Preferred Program
                    </label>
                    <select
                      id="program-select"
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-[#2A2A2A] focus:border-[#FFD21F] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p.id} value={p.title} className="bg-[#181818] text-white">
                          {p.title} ({p.focus})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                      Message / Specific Inquiries
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current fitness level, timings preference, or trial dates..."
                      className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-[#2A2A2A] focus:border-[#FFD21F] focus:outline-none text-white text-sm placeholder-[#555555] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full py-4 rounded-xl bg-[#FFD21F] hover:bg-[#FFE047] active:bg-[#E6BA0A] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FFD21F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#666666] mt-3">
                    We respect your privacy. No spam. A certified coach will reach out.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
