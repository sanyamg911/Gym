import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, ArrowUp, Heart, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#050505] border-t border-[#1C1C1C] text-[#A5A5A5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A1A1A]">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFD21F] flex items-center justify-center text-black font-black">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-wider text-white">
                  FITNESS <span className="text-[#FFD21F]">ART</span> GYM
                </span>
                <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#FFD21F]">
                  "IT'S A WAY OF LIFE"
                </span>
              </div>
            </div>

            <p className="text-sm text-[#888888] leading-relaxed max-w-sm">
              Mumbai's destination for transformative strength training, high-energy group fitness, mindful yoga, and functional movement conditioning.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-3">
                Connect With Our Community
              </span>
              <div className="flex items-center gap-3" id="footer-social-links">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg bg-[#141414] hover:bg-[#FFD21F] text-[#A5A5A5] hover:text-black border border-[#262626] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-[#141414] hover:bg-[#FFD21F] text-[#A5A5A5] hover:text-black border border-[#262626] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-lg bg-[#141414] hover:bg-[#FFD21F] text-[#A5A5A5] hover:text-black border border-[#262626] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FFD21F] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold tracking-wide">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  About Fitness Art
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleNavClick(e, '#programs')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Programs & Workouts
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Gym Gallery
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  onClick={(e) => handleNavClick(e, '#trainers')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Trainers & Coaches
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  onClick={(e) => handleNavClick(e, '#membership')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Membership Plans
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, '#testimonials')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Member Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-[#FFD21F] transition-colors"
                >
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FFD21F] pl-2.5">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-[#8E8E8E]">
              <li>Weight Training</li>
              <li>Strength & Conditioning</li>
              <li>Yoga & Power Yoga</li>
              <li>Zumba & Dance Fitness</li>
              <li>TRX Suspension</li>
              <li>Functional Movement</li>
              <li>Guided Meditation</li>
              <li>Kids Fitness Activities</li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FFD21F] pl-2.5">
              Mumbai Gym Centre
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                <span>[Fitness Art Gym Address Placeholder], Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>+91 [Phone Placeholder]</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>info@[fitnessart-placeholder].com</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#1C1C1C]">
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 rounded bg-[#141414] hover:bg-[#1E1E1E] text-xs font-bold text-[#A5A5A5] hover:text-[#FFD21F] border border-[#2B2B2B] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                id="footer-back-to-top-btn"
              >
                <span>Back To Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p id="footer-copyright">
            © 2026 Fitness Art Gym. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-center sm:text-right">
            <span className="text-[#888888]">
              Website Redesign Pitch Concept Demo • Mumbai
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
