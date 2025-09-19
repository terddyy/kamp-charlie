import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Shirt, Coffee, Crown, Sticker, Zap } from 'lucide-react';

const PerksSection = () => {
  const perks = [
    {
      icon: Gift,
      title: 'Raffle Entry',
      description: 'Every ticket includes automatic entry into our exciting raffle draw',
      highlight: 'Included with all tickets'
    },
    {
      icon: Shirt,
      title: 'Event T-Shirt',
      description: 'Exclusive Kamp Charlie-nae branded t-shirt per registration group',
      highlight: 'Per rig'
    },
    {
      icon: Coffee,
      title: 'Event Mug',
      description: 'High-quality camping mug perfect for your outdoor adventures',
      highlight: 'Per rig'
    },
    {
      icon: Crown,
      title: 'Event Cap',
      description: 'Stylish cap to protect you from sun and commemorate the event',
      highlight: 'Per rig'
    },
    {
      icon: Sticker,
      title: 'Event Sticker',
      description: 'Cool Kamp Charlie-nae sticker for your gear or laptop',
      highlight: 'Each ticket'
    },
    {
      icon: Zap,
      title: 'Bluetti Sticker',
      description: 'Special sponsor sticker from our power solutions partner',
      highlight: 'Each ticket'
    }
  ];

  return (
    <section id="perks" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Ticket Perks</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Amazing Perks Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your ticket isn't just entry to the event—it's a complete experience package. 
            Here's everything you get when you join us at Kamp Charlie-nae.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {perks.map((perk, index) => {
            const IconComponent = perk.icon;
            return (
              <Card 
                key={perk.title} 
                className="hover-lift shadow-soft animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {perk.highlight}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-3">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-accent border-accent/20 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-foreground">
                Total Value: Over ₱800 in Merchandise!
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                When you purchase your ticket, you're not just getting access to an amazing event—
                you're getting a complete package of high-quality merchandise and experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-accent-foreground">Quality Materials</div>
                  <div className="text-accent-foreground/70">Premium branded merchandise</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-accent-foreground">Exclusive Designs</div>
                  <div className="text-accent-foreground/70">Limited event collections</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold text-accent-foreground">Lasting Memories</div>
                  <div className="text-accent-foreground/70">Keepsakes for years to come</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Perk Distribution Note */}
        <div className="mt-8 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2 text-primary">How Perks Work</h4>
              <p className="text-sm text-muted-foreground">
                <strong>"Per rig"</strong> items (t-shirt, mug, cap) are given once per registration group, 
                while <strong>"each ticket"</strong> items (stickers, raffle entry) are provided for every individual ticket purchased.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerksSection;