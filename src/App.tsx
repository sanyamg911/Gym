import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Gallery } from './components/Gallery';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedProgramForTrial, setSelectedProgramForTrial] = useState<string | undefined>(undefined);

  const handleOpenTrialModal = (programTitle?: string) => {
    setSelectedProgramForTrial(programTitle || 'Weight Training');
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#FFD21F] selection:text-black">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Page Sections: Hero -> About -> Programs -> Gallery -> Trainers -> Membership -> Reviews -> Contact -> Footer */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenTrialModal={handleOpenTrialModal} />

        {/* About Section */}
        <About onOpenTrialModal={handleOpenTrialModal} />

        {/* Programs Carousel */}
        <Programs onOpenTrialModal={handleOpenTrialModal} />

        {/* Gallery Carousel */}
        <Gallery />

        {/* Trainers Section */}
        <Trainers onOpenTrialModal={handleOpenTrialModal} />

        {/* Membership Plans */}
        <Membership onOpenTrialModal={handleOpenTrialModal} />

        {/* Reviews / Testimonials */}
        <Testimonials />

        {/* Contact & Lead Generation */}
        <ContactSection onOpenTrialModal={handleOpenTrialModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Action Bar */}
      <FloatingActions onOpenTrialModal={() => handleOpenTrialModal('Free Trial Pass')} />

      {/* Interactive Free Trial / Join Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        initialProgram={selectedProgramForTrial}
      />
    </div>
  );
}
