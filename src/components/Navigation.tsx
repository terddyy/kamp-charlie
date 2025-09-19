import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Perks', href: '#perks' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container-premium">
        <div className="mt-6 mb-6 glass-strong rounded-2xl border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between h-16 px-6">
          {/* Enhanced Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group"
            aria-label="Go to hero section"
          >
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
              <Calendar className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Kamp Charlie-nae
            </span>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 text-base font-medium group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300 rounded-full"></div>
              </button>
            ))}
            <Button variant="glass" className="border-border/40 hover:border-primary/40" asChild>
              <Link to="/admin">Admin Portal</Link>
            </Button>
            <Button 
              onClick={() => scrollToSection('#tickets')} 
              variant="premium"
              size="lg"
              className="shadow-glow hover:shadow-glow-accent"
            >
              Reserve Now
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-surface/50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" /> : 
              <Menu className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            }
          </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 -mt-2 animate-fade-up">
            <div className="glass-strong rounded-2xl border border-border/30 shadow-2xl p-6 space-y-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium py-2 hover:pl-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="space-y-3 pt-4 border-t border-border/30">
                <Button variant="glass" className="w-full border-border/40" asChild>
                  <Link to="/admin">Admin Portal</Link>
                </Button>
                <Button 
                  onClick={() => scrollToSection('#tickets')} 
                  variant="premium"
                  size="lg"
                  className="w-full"
                >
                  Reserve Your Spot
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;