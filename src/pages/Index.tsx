import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import PerksSection from '@/components/sections/PerksSection';
import TicketSection from '@/components/sections/TicketSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <PerksSection />
        <TicketSection />
        <SponsorsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        <div className="relative section-padding">
          <div className="container-premium text-center text-white">
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-accent">
              Kamp Charlie-nae 2025
            </h3>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Where extraordinary adventures begin and unforgettable memories are forged
            </p>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-base">
              <div className="text-white/80">© 2024 Kamp Charlie-nae. All rights reserved.</div>
              <div className="flex flex-wrap justify-center gap-6 text-white/70">
                <button className="hover:text-accent transition-colors duration-300">Privacy Policy</button>
                <span className="text-white/40">•</span>
                <button className="hover:text-secondary transition-colors duration-300">Terms of Service</button>
                <span className="text-white/40">•</span>
                <button className="hover:text-tertiary transition-colors duration-300">Contact Us</button>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20 text-sm text-white/60">
              <p>November 8-9, 2025 • An experience beyond the ordinary</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;