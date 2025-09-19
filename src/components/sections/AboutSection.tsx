import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tent, TreePine, Mountain, Users, Camera, Music } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Tent,
      title: 'Camping Experience',
      description: 'Set up your tent and enjoy the authentic camping experience under the stars'
    },
    {
      icon: TreePine,
      title: 'Nature Activities',
      description: 'Hiking trails, nature walks, and outdoor exploration adventures'
    },
    {
      icon: Mountain,
      title: 'Scenic Location',
      description: 'Beautiful mountain views and pristine natural surroundings'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Meet fellow outdoor enthusiasts and make lasting friendships'
    },
    {
      icon: Camera,
      title: 'Photo Opportunities',
      description: 'Capture stunning memories with breathtaking backdrops'
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Live music, activities, and evening campfire sessions'
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About the Event</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience the Great Outdoors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kamp Charlie-nae is more than just a camping event—it's a celebration of nature, 
            community, and adventure. Join us for two days of unforgettable experiences in 
            one of the most beautiful outdoor locations.
          </p>
        </div>

        {/* Event Details */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto shadow-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Event Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-primary">When & Where</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Date:</strong> November 8-9, 2025</li>
                    <li><strong>Location:</strong> Kamp Charlie-nae</li>
                    <li><strong>Check-in:</strong> November 8, 2:00 PM</li>
                    <li><strong>Check-out:</strong> November 9, 12:00 PM</li>
                    <li><strong>Duration:</strong> 2 Days, 1 Night</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-primary">What's Included</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Camping site allocation</li>
                    <li>✓ Event activities access</li>
                    <li>✓ Welcome kit with merchandise</li>
                    <li>✓ Raffle entry</li>
                    <li>✓ Meal vouchers (selected meals)</li>
                    <li>✓ Safety and security coverage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={highlight.title} 
                className="hover-lift shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;