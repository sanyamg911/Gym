import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyUs } from './components/WhyUs';
import { Trainers } from './components/Trainers';
import { Gallery } from './components/Gallery';
import { Membership } from './components/Membership';
import { Schedule } from './components/Schedule';
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

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenTrialModal={handleOpenTrialModal} />

        {/* About Section */}
        <About onOpenTrialModal={handleOpenTrialModal} />

        {/* Programs Section */}
        <Programs onOpenTrialModal={handleOpenTrialModal} />

        {/* Why Fitness Art Section */}
        <WhyUs />

        {/* Trainers Section */}
        <Trainers onOpenTrialModal={handleOpenTrialModal} />

        {/* Gallery Showcase */}
        <Gallery />

        {/* Membership Plans */}
        <Membership onOpenTrialModal={handleOpenTrialModal} />

        {/* Schedule */}
        <Schedule onOpenTrialModal={handleOpenTrialModal} />

        {/* Testimonials */}
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
