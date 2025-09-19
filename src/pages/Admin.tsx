import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  Search, 
  Filter, 
  Mail, 
  QrCode,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const stats = {
    totalAttendees: 247,
    totalRevenue: 284800,
    checkedIn: 0,
    pendingPayment: 23
  };

  const mockAttendees = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      email: 'juan@email.com',
      phone: '+63 917 123 4567',
      ticketType: 'Adult',
      quantity: 2,
      amount: 2400,
      status: 'paid',
      checkedIn: false,
      registrationDate: '2024-10-15'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '+63 926 987 6543',
      ticketType: 'Family Pack',
      quantity: 4,
      amount: 3600,
      status: 'pending',
      checkedIn: false,
      registrationDate: '2024-10-16'
    },
    // Add more mock data as needed
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-orange-600 border-orange-300">Pending</Badge>;
      case 'refunded':
        return <Badge variant="destructive">Refunded</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Kamp Charlie-nae Admin</h1>
              <p className="text-muted-foreground mt-2">Manage event registrations and attendees</p>
            </div>
            <Button variant="outline" asChild>
              <a href="/#hero">Go to Home</a>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Attendees</p>
                  <p className="text-3xl font-bold text-primary">{stats.totalAttendees}</p>
                </div>
                <Users className="w-8 h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-3xl font-bold text-primary">₱{stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Checked In</p>
                  <p className="text-3xl font-bold text-green-600">{stats.checkedIn}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Payment</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.pendingPayment}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="attendees" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="attendees">Attendees</TabsTrigger>
            <TabsTrigger value="checkin">Check-in</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="attendees">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-2xl">Attendee Management</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Export CSV
                    </Button>
                    <Button size="sm" className="bg-primary">
                      Add Attendee
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search attendees..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Contact</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Tickets</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAttendees.map((attendee) => (
                        <tr key={attendee.id} className="border-b border-border hover:bg-muted/30">
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{attendee.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Reg: {attendee.registrationDate}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <div>{attendee.email}</div>
                              <div className="text-muted-foreground">{attendee.phone}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <div>{attendee.quantity}x {attendee.ticketType}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium">₱{attendee.amount.toLocaleString()}</div>
                          </td>
                          <td className="p-4">
                            {getStatusBadge(attendee.status)}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Mail className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <QrCode className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checkin">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Event Check-in</CardTitle>
                <p className="text-muted-foreground">Scan QR codes or search attendees for check-in</p>
              </CardHeader>
              <CardContent className="text-center py-12">
                <QrCode className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-4">QR Code Scanner</h3>
                <p className="text-muted-foreground mb-6">
                  Position the attendee's QR code in front of the camera to check them in
                </p>
                <div className="space-y-4 max-w-md mx-auto">
                  <Button className="w-full bg-primary">
                    Start QR Scanner
                  </Button>
                  <div className="text-sm text-muted-foreground">or</div>
                  <Input placeholder="Enter ticket ID manually..." />
                  <Button variant="outline" className="w-full">
                    Manual Check-in
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Event Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Public Attendee Count</label>
                    <div className="flex items-center gap-4 mt-2">
                      <Input type="number" defaultValue={247} className="w-32" />
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Override the displayed attendee count on the public page
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Show Attendee Count</div>
                      <div className="text-xs text-muted-foreground">Display count on landing page</div>
                    </div>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Event Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-4">Revenue Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Adult Tickets (198x)</span>
                        <span>₱237,600</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Child Tickets (49x)</span>
                        <span>₱29,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Infant Tickets (18x)</span>
                        <span>₱0</span>
                      </div>
                      <div className="border-t pt-2 font-medium">
                        <div className="flex justify-between">
                          <span>Total Revenue</span>
                          <span>₱267,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Registration Timeline</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>Most registrations occur 2-3 weeks before event</div>
                      <div>Peak registration day: Fridays</div>
                      <div>Average registration time: 3.2 minutes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;