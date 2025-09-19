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
      <div className="container mx-auto px-4">
        <div className="mt-3 mb-3 rounded-xl border border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm">
          <div className="flex items-center justify-between h-14 px-3">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            aria-label="Go to hero section"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-sm">
              <Calendar className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-base md:text-lg tracking-tight text-foreground">Kamp Charlie-nae</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium hover:underline underline-offset-4 decoration-primary/50"
              >
                {item.label}
              </button>
            ))}
            <Button variant="outline" className="border-border/60 bg-card/40 hover:bg-card/70" asChild>
              <Link to="/admin">Admin</Link>
            </Button>
            <Button onClick={() => scrollToSection('#tickets')} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              Get Tickets
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 -mt-2">
            <div className="rounded-xl border border-border bg-card/95 backdrop-blur shadow-lg p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="outline" className="w-full border-border/60 bg-card/40" asChild>
                <Link to="/admin">Admin</Link>
              </Button>
              <Button onClick={() => scrollToSection('#tickets')} className="w-full bg-primary text-primary-foreground">
                Get Tickets
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;