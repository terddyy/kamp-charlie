import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';

const ScheduleSection = () => {
  const scheduleDay1 = [
    {
      time: '2:00 PM',
      title: 'Event Check-in & Registration',
      location: 'Main Entrance',
      description: 'Collect your welcome kit and get your camping site assignment'
    },
    {
      time: '3:30 PM',
      title: 'Welcome Ceremony',
      location: 'Central Stage',
      description: 'Official event opening and community introduction'
    },
    {
      time: '4:00 PM',
      title: 'Set-up Time',
      location: 'Camping Areas',
      description: 'Set up your tents and get familiar with the surroundings'
    },
    {
      time: '6:00 PM',
      title: 'Group Dinner',
      location: 'Dining Hall',
      description: 'Shared meal and networking with fellow campers'
    },
    {
      time: '7:30 PM',
      title: 'Campfire Stories & Music',
      location: 'Fire Pit Area',
      description: 'Share stories, sing songs, and enjoy the campfire atmosphere'
    },
    {
      time: '9:00 PM',
      title: 'Night Activities',
      location: 'Various Areas',
      description: 'Stargazing, night games, and optional group activities'
    },
    {
      time: '11:00 PM',
      title: 'Lights Out',
      location: 'All Areas',
      description: 'Quiet time begins - rest and prepare for tomorrow'
    }
  ];

  const scheduleDay2 = [
    {
      time: '6:30 AM',
      title: 'Morning Call',
      location: 'Campgrounds',
      description: 'Wake-up call and morning stretches'
    },
    {
      time: '7:00 AM',
      title: 'Sunrise Activity',
      location: 'Viewpoint Trail',
      description: 'Optional sunrise hiking and photography session'
    },
    {
      time: '8:30 AM',
      title: 'Breakfast',
      location: 'Dining Hall',
      description: 'Hearty breakfast to fuel the day'
    },
    {
      time: '10:00 AM',
      title: 'Nature Activities',
      location: 'Trail Network',
      description: 'Hiking, nature walks, and outdoor exploration'
    },
    {
      time: '12:00 PM',
      title: 'Lunch & Rest',
      location: 'Dining Hall',
      description: 'Lunch break and relaxation time'
    },
    {
      time: '2:00 PM',
      title: 'Group Activities & Games',
      location: 'Activity Field',
      description: 'Team games, competitions, and group challenges'
    },
    {
      time: '4:00 PM',
      title: 'Raffle Draw & Prizes',
      location: 'Central Stage',
      description: 'Exciting raffle draw with amazing prizes'
    },
    {
      time: '5:00 PM',
      title: 'Closing Ceremony',
      location: 'Central Stage',
      description: 'Event wrap-up, group photo, and farewell'
    },
    {
      time: '6:00 PM',
      title: 'Check-out & Departure',
      location: 'Main Entrance',
      description: 'Pack up, check-out, and safe travels home'
    }
  ];

  const ScheduleCard = ({ day, schedule, bgClass }: { day: string; schedule: any[]; bgClass: string }) => (
    <Card className={`shadow-card hover-lift ${bgClass}`}>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">{day}</Badge>
          <h3 className="text-2xl font-bold">
            {day === 'Day 1' ? 'November 8, 2025' : 'November 9, 2025'}
          </h3>
        </div>
        
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-4 bg-card/50 rounded-lg border border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sm text-primary">{item.time}</h4>
                    <h5 className="font-medium">{item.title}</h5>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Event Schedule</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Two Days of Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From arrival to departure, every moment is planned to maximize your outdoor experience. 
            Here's what awaits you during your stay at Kamp Charlie-nae.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <ScheduleCard 
            day="Day 1" 
            schedule={scheduleDay1} 
            bgClass="gradient-card"
          />
          <ScheduleCard 
            day="Day 2" 
            schedule={scheduleDay2} 
            bgClass="gradient-card"
          />
        </div>

        {/* Additional Notes */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold mb-2">Important Notes</h4>
              <p className="text-sm text-muted-foreground">
                Schedule may be subject to change due to weather conditions or other circumstances. 
                All participants will be notified of any changes via email or on-site announcements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;