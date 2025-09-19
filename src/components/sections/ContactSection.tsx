import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@kampcharlie-nae.com',
      description: 'General inquiries and support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+63 917 123 4567',
      description: 'Customer service hotline'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Kamp Charlie-nae',
      description: 'Event venue address'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'Typical response timeframe'
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: 'General Inquiry',
      description: 'Questions about the event or registration process'
    },
    {
      icon: Users,
      title: 'Group Booking',
      description: 'Special rates for groups of 10 or more'
    },
    {
      icon: MapPin,
      title: 'Directions Help',
      description: 'Need help getting to the venue?'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? We're here to help make your 
            Kamp Charlie-nae experience unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactFirstName">First Name *</Label>
                  <Input id="contactFirstName" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="contactLastName">Last Name *</Label>
                  <Input id="contactLastName" placeholder="Enter last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="contactEmail">Email Address *</Label>
                <Input id="contactEmail" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <Label htmlFor="contactSubject">Subject *</Label>
                <Input id="contactSubject" placeholder="What's this about?" />
              </div>
              
              <div>
                <Label htmlFor="contactMessage">Message *</Label>
                <Textarea 
                  id="contactMessage" 
                  placeholder="Tell us how we can help..."
                  className="resize-none min-h-[120px]"
                  rows={5}
                />
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Quick Actions:</Label>
                <div className="grid gap-2">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <button
                        key={action.title}
                        className="flex items-center gap-3 p-3 text-left bg-muted/50 hover:bg-muted rounded-lg transition-colors text-sm"
                      >
                        <IconComponent className="w-4 h-4 text-primary" />
                        <div>
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs text-muted-foreground">{action.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 mt-6">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={info.title} 
                      className="flex items-start gap-4 animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-primary font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  During events, our team is available 24/7 for urgent matters.
                </p>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-accent-foreground">Emergency Contact</h4>
                <p className="text-accent-foreground/80 text-sm mb-3">
                  During the event (Nov 8-9, 2025)
                </p>
                <div className="text-lg font-bold text-accent-foreground">
                  +63 917 EMERGENCY
                </div>
                <p className="text-xs text-accent-foreground/70 mt-2">
                  Available 24/7 during event dates only
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;