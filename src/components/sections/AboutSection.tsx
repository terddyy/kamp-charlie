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
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-premium">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-base font-medium">
            About the Experience
          </Badge>
          <h2 className="font-display text-5xl md:text-7xl font-black mb-8 text-gradient leading-tight">
            Redefine Your
            <br />
            <span className="text-accent">Adventure</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Kamp Charlie-nae transcends traditional camping—it's a <span className="font-semibold text-primary">premium outdoor experience</span> where 
            luxury meets wilderness, community meets adventure, and memories are crafted to last a lifetime.
          </p>
        </div>

        {/* Enhanced Event Details */}
        <div className="mb-24">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
              Essential <span className="text-gradient-primary">Information</span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="card-premium">
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Mountain className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-primary">When & Where</h4>
                  </div>
                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Event Dates</span>
                      <span className="font-semibold">November 8-9, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-semibold">Kamp Charlie-nae</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Check-in</span>
                      <span className="font-semibold">Nov 8, 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">Check-out</span>
                      <span className="font-semibold">Nov 9, 12:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold text-accent">2 Days, 1 Night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-secondary">Premium Inclusions</h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Premium camping site allocation',
                      'All event activities & experiences',
                      'Exclusive welcome kit & merchandise',
                      'VIP raffle entry with premium prizes',
                      'Gourmet meal vouchers (selected)',
                      '24/7 safety & security coverage',
                      'Professional photography sessions',
                      'Luxury amenities access'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-tertiary rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Highlights Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
            Adventure <span className="text-gradient-accent">Highlights</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              const gradients = [
                'gradient-primary',
                'gradient-secondary', 
                'gradient-accent',
                'gradient-primary',
                'gradient-secondary',
                'gradient-accent'
              ];
              const textColors = [
                'text-primary',
                'text-secondary',
                'text-accent',
                'text-primary',
                'text-secondary', 
                'text-accent'
              ];
              
              return (
                <Card 
                  key={highlight.title} 
                  className="card-premium group animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`font-display text-xl font-bold mb-4 ${textColors[index]} group-hover:scale-105 transition-transform`}>
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;