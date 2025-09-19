import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'Bluetti',
      category: 'Power Solutions Partner',
      description: 'Providing reliable portable power stations for all your camping needs',
      tier: 'platinum'
    },
    {
      name: 'Mountain Gear Co.',
      category: 'Equipment Sponsor',
      description: 'Premium outdoor equipment and camping gear for adventurers',
      tier: 'gold'
    },
    {
      name: 'NatureFresh Foods',
      category: 'Food & Beverage',
      description: 'Supplying organic and healthy meal options for the event',
      tier: 'silver'
    },
    {
      name: 'AdventureWear',
      category: 'Apparel Partner',
      description: 'Quality outdoor clothing and accessories',
      tier: 'silver'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
      case 'gold':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 'silver':
        return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Partners</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Event Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with these amazing brands who share our passion for 
            outdoor adventures and quality experiences.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={sponsor.name} 
              className="hover-lift shadow-soft animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Sponsor Logo Placeholder */}
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-shadow">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                
                {/* Tier Badge */}
                <Badge className={`mb-4 ${getTierColor(sponsor.tier)}`}>
                  {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsor
                </Badge>
                
                <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                <h4 className="text-primary font-medium mb-3">{sponsor.category}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {sponsor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for Sponsors */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-muted-foreground mb-6">
                Join our community of partners and showcase your brand to outdoor enthusiasts. 
                Multiple sponsorship packages available to fit your needs.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-primary">Brand Exposure</div>
                  <div className="text-muted-foreground">Logo on materials</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">Product Showcase</div>
                  <div className="text-muted-foreground">Booth space available</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">Community Access</div>
                  <div className="text-muted-foreground">Connect with attendees</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;