import React, { useState, useEffect } from 'react';
import { X, Calendar, Dumbbell, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialProgram = 'Weight Training',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState(initialProgram);
  const [timeSlot, setTimeSlot] = useState('Morning (6:00 AM - 10:00 AM)');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      setProgram(initialProgram);
    }
  }, [initialProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
      id="trial-booking-modal-backdrop"
    >
      <div
        className="relative w-full max-w-lg bg-[#121212] border border-[#2B2B2B] rounded-2xl p-6 sm:p-8 shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
        id="trial-booking-modal"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1C1C1C] hover:bg-[#2A2A2A] text-[#A5A5A5] hover:text-white transition-colors cursor-pointer"
          id="close-trial-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#FFD21F] text-black flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(255,210,31,0.4)]">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <h3 className="font-display text-3xl font-bold text-white uppercase mb-2">
              Pass Confirmed!
            </h3>

            <p className="text-sm text-[#A5A5A5] leading-relaxed mb-6">
              We have reserved a trial session for <span className="text-white font-bold">{program}</span>. Our Mumbai front desk will contact <span className="text-[#FFD21F] font-bold">{phone || 'you'}</span> with your session pass and entry instructions.
            </p>

            <div className="p-4 rounded-xl bg-[#181818] border border-[#2B2B2B] text-left text-xs text-[#A5A5A5] space-y-1.5 mb-6">
              <div><strong className="text-white">Name:</strong> {name}</div>
              <div><strong className="text-white">Preferred Slot:</strong> {timeSlot}</div>
              <div><strong className="text-white">Location:</strong> Fitness Art Gym (Mumbai Centre)</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919999999999?text=Hi%20Fitness%20Art%20Gym%20Mumbai%2C%20I%20just%20booked%20a%20trial%20for%20${encodeURIComponent(program)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-lg bg-[#1F1F1F] hover:bg-[#292929] border border-[#333333] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD21F]" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={handleClose}
                className="flex-1 py-3 rounded-lg bg-[#FFD21F] text-black text-xs font-extrabold uppercase tracking-wider cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FFD21F] text-black flex items-center justify-center font-bold">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FFD21F]">
                  Fitness Art Gym • Mumbai
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase">
                  Book A Free Trial
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#A5A5A5] mb-6">
              Experience the equipment, trainers, and high-energy atmosphere before committing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Full Name <span className="text-[#FFD21F]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Joshi"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-[#2B2B2B] focus:border-[#FFD21F] text-white text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Phone Number <span className="text-[#FFD21F]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-[#2B2B2B] focus:border-[#FFD21F] text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vikram@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-[#2B2B2B] focus:border-[#FFD21F] text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Interested Program
                </label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-[#2B2B2B] focus:border-[#FFD21F] text-white text-sm focus:outline-none cursor-pointer"
                >
                  <option value="General Free Trial Pass">General Gym Floor Pass</option>
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="Personal Training Assessment">Personal Training Assessment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#181818] border border-[#2B2B2B] focus:border-[#FFD21F] text-white text-sm focus:outline-none cursor-pointer"
                >
                  <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM - 10:00 AM)</option>
                  <option value="Afternoon (11:00 AM - 4:00 PM)">Afternoon (11:00 AM - 4:00 PM)</option>
                  <option value="Evening Peak (5:00 PM - 9:00 PM)">Evening Peak (5:00 PM - 9:00 PM)</option>
                  <option value="Night (9:00 PM - 10:30 PM)">Night (9:00 PM - 10:30 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#FFD21F] hover:bg-[#FFE047] active:bg-[#E6BA0A] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#FFD21F]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Free Trial Pass</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <p className="text-center text-[11px] text-[#666666]">
                Zero obligation. Complimentary pass for new Mumbai visitors.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
