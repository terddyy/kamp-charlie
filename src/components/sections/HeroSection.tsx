import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import heroImage from '@/assets/hero-kamp-charlie.jpg';

const HeroSection = () => {
  const scrollToTickets = () => {
    const element = document.querySelector('#tickets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kamp Charlie-nae scenic campground"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-tertiary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-premium text-center text-white">
        <Badge variant="secondary" className="mb-8 glass border-white/20 text-white/95 px-6 py-2 text-sm font-medium animate-fade-up hover:scale-105 transition-transform">
          🏕️ Premium Outdoor Adventure Experience
        </Badge>
        
        <h1 className="text-display text-6xl md:text-8xl lg:text-9xl font-black mb-8 animate-fade-up leading-none" style={{ animationDelay: '0.1s' }}>
          <span className="block text-gradient-primary">Kamp</span>
          <span className="block -mt-4">Charlie-nae</span>
        </h1>
        
        <p className="text-xl md:text-3xl lg:text-4xl mb-12 text-white/90 max-w-4xl mx-auto animate-fade-up font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Immerse yourself in an <span className="text-accent font-semibold">extraordinary outdoor adventure</span> where nature meets luxury, creating memories that transcend the ordinary
        </p>

        {/* Event Details */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 group">
            <Calendar className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-white/70 font-medium">Event Dates</div>
              <div className="text-lg font-bold">November 8-9, 2025</div>
            </div>
          </div>
          <div className="glass flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105 group">
            <MapPin className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-white/70 font-medium">Location</div>
              <div className="text-lg font-bold">Kamp Charlie-nae</div>
            </div>
          </div>
          <div className="glass flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/20 hover:border-tertiary/50 transition-all duration-300 hover:scale-105 group">
            <Users className="w-6 h-6 text-tertiary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-white/70 font-medium">Community</div>
              <div className="text-lg font-bold">247+ Adventurers</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToTickets}
            variant="premium"
            size="xl"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">Reserve Your Adventure</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            className="border-white/30 text-white hover:text-primary hover:bg-white/90"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover More
          </Button>
        </div>

        {/* Pricing Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="glass p-8 rounded-2xl border border-white/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 group">
            <div className="text-4xl font-display font-black text-accent mb-2 group-hover:scale-110 transition-transform">₱1,200</div>
            <div className="text-lg font-semibold text-white mb-1">Adults</div>
            <div className="text-sm text-white/70">Ages 13 & above</div>
          </div>
          <div className="glass p-8 rounded-2xl border border-white/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 group">
            <div className="text-4xl font-display font-black text-secondary mb-2 group-hover:scale-110 transition-transform">₱600</div>
            <div className="text-lg font-semibold text-white mb-1">Children</div>
            <div className="text-sm text-white/70">Ages 5-12</div>
          </div>
          <div className="glass p-8 rounded-2xl border border-white/20 hover:border-tertiary/40 transition-all duration-300 hover:scale-105 group">
            <div className="text-4xl font-display font-black text-tertiary mb-2 group-hover:scale-110 transition-transform">FREE</div>
            <div className="text-lg font-semibold text-white mb-1">Little Ones</div>
            <div className="text-sm text-white/70">Under 5 years</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" 
           onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="glass w-8 h-14 border-2 border-white/40 rounded-full flex justify-center group-hover:border-accent/60 transition-colors">
          <div className="w-1.5 h-4 bg-accent rounded-full mt-3 animate-pulse group-hover:bg-white transition-colors"></div>
        </div>
        <div className="text-white/60 text-xs mt-2 font-medium group-hover:text-white transition-colors">Scroll</div>
      </div>
    </section>
  );
};

export default HeroSection;