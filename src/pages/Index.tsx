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
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Kamp Charlie-nae 2025</h3>
          <p className="text-primary-foreground/80 mb-6">
            An unforgettable outdoor adventure awaits • November 8-9, 2025
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
            <div>© 2024 Kamp Charlie-nae. All rights reserved.</div>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;