import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal }) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2 p-2 bg-[#121212]/95 border border-[#2D2D2D] rounded-2xl shadow-2xl backdrop-blur-lg"
    >
      <a
        href="https://wa.me/919999999999?text=Hi%20Fitness%20Art%20Gym%20Mumbai%2C%20I%20would%20like%20to%20inquire%20about%20membership."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-xl bg-[#1C1C1C] text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-[#333333] active:bg-[#252525]"
      >
        <MessageSquare className="w-4 h-4 text-[#FFD21F]" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenTrialModal}
        className="flex-1 py-2.5 rounded-xl bg-[#FFD21F] text-black text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:bg-[#FFE047]"
      >
        <Calendar className="w-4 h-4" />
        <span>Free Trial</span>
      </button>
    </aside>
  );
};
