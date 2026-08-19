import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal: (programTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'programs',
        'why-us',
        'trainers',
        'gallery',
        'membership',
        'schedule',
        'testimonials',
        'contact',
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Membership', href: '#membership' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222222] py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FFD21F] flex items-center justify-center text-black font-black font-display text-xl transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(255,210,31,0.3)]">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center leading-none">
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  FITNESS <span className="text-[#FFD21F]">ART</span>
                </span>
              </div>
            </div>
          </a>

          {/* Desktop & Tablet Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3" id="desktop-nav">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${linkId}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 lg:px-3 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold tracking-wide transition-colors relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#FFD21F]'
                      : 'text-[#A5A5A5] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 lg:left-3 right-2 lg:right-3 h-0.5 bg-[#FFD21F] rounded-full shadow-[0_0_8px_#FFD21F]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <a
              href="https://wa.me/919999999999?text=Hi%20Fitness%20Art%20Gym%20Mumbai%2C%20I%20would%20like%20to%20inquire%20about%20membership%20and%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 lg:p-2.5 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] text-[#A5A5A5] hover:text-[#FFD21F] border border-[#262626] transition-colors"
              title="Chat on WhatsApp"
              id="header-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenTrialModal()}
              id="header-join-now-btn"
              className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg bg-[#FFD21F] hover:bg-[#FFE047] active:bg-[#E6BA0A] text-black font-bold text-xs lg:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(255,210,31,0.25)] hover:shadow-[0_0_25px_rgba(255,210,31,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 lg:gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Join Now</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenTrialModal()}
              className="px-3.5 py-1.5 rounded-md bg-[#FFD21F] text-black font-bold text-xs uppercase tracking-wider"
              id="mobile-header-join-btn"
            >
              Join
            </button>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#141414] text-white border border-[#262626] hover:text-[#FFD21F] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-18 right-0 bottom-0 w-4/5 max-w-sm bg-[#121212] border-l border-[#262626] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            id="mobile-nav-drawer"
          >
            <div>
              <div className="pb-4 mb-4 border-b border-[#222222] flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-[#A5A5A5]">
                  Navigation Menu
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-[#1F1F1F] text-[#FFD21F] rounded border border-[#333333]">
                  MUMBAI
                </span>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const linkId = link.href.replace('#', '');
                  const isActive = activeSection === linkId;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      id={`mobile-nav-${linkId}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#1C1C1C] text-[#FFD21F] border-l-4 border-[#FFD21F]'
                          : 'text-[#A5A5A5] hover:bg-[#181818] hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-60" />
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#222222] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                id="mobile-drawer-join-btn"
                className="w-full py-3.5 rounded-lg bg-[#FFD21F] text-black font-bold text-sm uppercase tracking-wider text-center shadow-lg shadow-[#FFD21F]/20 flex items-center justify-center gap-2"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href="https://wa.me/919999999999?text=Hi%20Fitness%20Art%20Gym%20Mumbai%2C%20I%20would%20like%20to%20inquire%20about%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#181818] hover:bg-[#202020] text-white border border-[#2E2E2E] font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                id="mobile-drawer-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD21F]" />
                <span>Chat on WhatsApp</span>
              </a>

              <p className="text-center text-[11px] text-[#707070] pt-2">
                "IT'S A WAY OF LIFE" • Redesign Pitch Demo
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
