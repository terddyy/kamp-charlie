import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Users, Minus, Plus, CreditCard, Gift, Shield } from 'lucide-react';

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  ageRange: string;
}

const TicketSection = () => {
  const [tickets, setTickets] = useState<{[key: string]: number}>({
    adult: 0,
    child: 0,
    infant: 0
  });

  const ticketTypes: TicketType[] = [
    {
      id: 'adult',
      name: 'Adult',
      price: 1200,
      description: '13 years old and above',
      ageRange: '13+'
    },
    {
      id: 'child',
      name: 'Child',
      price: 600,
      description: '5-12 years old',
      ageRange: '5-12'
    },
    {
      id: 'infant',
      name: 'Infant',
      price: 0,
      description: 'Below 5 years old',
      ageRange: '0-4'
    }
  ];

  const updateTicketCount = (ticketId: string, delta: number) => {
    setTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + delta)
    }));
  };

  const totalTickets = Object.values(tickets).reduce((sum, count) => sum + count, 0);
  const totalPrice = Object.entries(tickets).reduce((sum, [ticketId, count]) => {
    const ticketType = ticketTypes.find(t => t.id === ticketId);
    return sum + (ticketType ? ticketType.price * count : 0);
  }, 0);

  return (
    <section id="tickets" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get Your Tickets</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Reserve Your Spot
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure your place at Kamp Charlie-nae today. Limited spots available for this 
            exclusive outdoor adventure experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Ticket Selection */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Select Your Tickets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {ticketTypes.map((ticketType) => (
                <div key={ticketType.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{ticketType.name}</h3>
                      <p className="text-sm text-muted-foreground">{ticketType.description}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        Age: {ticketType.ageRange}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {ticketType.price === 0 ? 'FREE' : `₱${ticketType.price.toLocaleString()}`}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Quantity:</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTicketCount(ticketType.id, -1)}
                        disabled={tickets[ticketType.id] === 0}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">
                        {tickets[ticketType.id] || 0}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateTicketCount(ticketType.id, 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Order Summary */}
              {totalTickets > 0 && (
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(tickets).map(([ticketId, count]) => {
                      if (count === 0) return null;
                      const ticketType = ticketTypes.find(t => t.id === ticketId);
                      if (!ticketType) return null;
                      
                      return (
                        <div key={ticketId} className="flex justify-between">
                          <span>{count}x {ticketType.name}</span>
                          <span className="font-medium">
                            ₱{(ticketType.price * count).toLocaleString()}
                          </span>
                        </div>
                      );
                    })}
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between font-semibold text-base">
                        <span>Total ({totalTickets} tickets)</span>
                        <span className="text-primary">₱{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Contact Number *</Label>
                <Input id="phone" placeholder="+63 9XX XXX XXXX" />
              </div>
              
              <div>
                <Label htmlFor="message">Special Message (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Any special requests or messages..."
                  className="resize-none"
                  rows={3}
                />
              </div>

              {/* Security & Perks Info */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Secure Payment</div>
                    <div className="text-muted-foreground text-xs">SSL encrypted checkout</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Gift className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Instant Perks</div>
                    <div className="text-muted-foreground text-xs">Merchandise included</div>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6 mt-6"
                disabled={totalTickets === 0}
              >
                {totalTickets === 0 
                  ? 'Select Tickets to Continue' 
                  : `Complete Registration - ₱${totalPrice.toLocaleString()}`
                }
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                By clicking "Complete Registration", you agree to our terms of service and 
                confirm that all information provided is accurate.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods & Guarantee */}
        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 text-primary">Payment & Guarantee</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium mb-1">Accepted Payment Methods</div>
                  <div className="text-muted-foreground">
                    GCash, PayMaya, Bank Transfer, Credit/Debit Cards
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1">Satisfaction Guarantee</div>
                  <div className="text-muted-foreground">
                    Full refund available up to 7 days before event
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;