import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  QrCode, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  User, 
  Calendar,
  Ticket
} from 'lucide-react';

const CheckIn = () => {
  const [scanResult, setScanResult] = useState<any>(null);
  const [ticketId, setTicketId] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  // Mock attendee data for demonstration
  const mockAttendee = {
    id: 'KCN-2025-001',
    name: 'Juan Dela Cruz',
    email: 'juan@email.com',
    ticketType: 'Adult',
    quantity: 2,
    status: 'paid',
    checkedIn: false,
    checkInTime: null
  };

  const handleManualCheckIn = () => {
    if (ticketId.trim()) {
      // Simulate checking in
      setScanResult({
        ...mockAttendee,
        id: ticketId,
        checkedIn: true,
        checkInTime: new Date().toLocaleString()
      });
      setTicketId('');
    }
  };

  const handleQRScan = () => {
    setIsScanning(true);
    // Simulate QR scan after 2 seconds
    setTimeout(() => {
      setScanResult({
        ...mockAttendee,
        checkedIn: true,
        checkInTime: new Date().toLocaleString()
      });
      setIsScanning(false);
    }, 2000);
  };

  const resetScan = () => {
    setScanResult(null);
    setTicketId('');
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Event Check-In</h1>
          <p className="text-muted-foreground">Kamp Charlie-nae • November 8-9, 2025</p>
        </div>

        {!scanResult ? (
          /* Check-In Interface */
          <div className="grid md:grid-cols-2 gap-8">
            {/* QR Scanner */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-primary" />
                  QR Code Scanner
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {!isScanning ? (
                  <div className="py-12">
                    <div className="w-32 h-32 border-4 border-dashed border-primary/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <QrCode className="w-16 h-16 text-primary/50" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Scan Ticket QR Code</h3>
                    <p className="text-muted-foreground mb-6">
                      Position the attendee's ticket QR code in front of the camera
                    </p>
                    <Button 
                      onClick={handleQRScan}
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      Start QR Scanner
                    </Button>
                  </div>
                ) : (
                  <div className="py-12">
                    <div className="w-32 h-32 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <QrCode className="w-16 h-16 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Scanning...</h3>
                    <p className="text-muted-foreground mb-6">
                      Please hold the QR code steady in view
                    </p>
                    <Button 
                      onClick={() => setIsScanning(false)}
                      variant="outline"
                    >
                      Cancel Scan
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Manual Check-In */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Search className="w-6 h-6 text-primary" />
                  Manual Check-In
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ticket ID or Name
                  </label>
                  <Input
                    placeholder="Enter ticket ID (e.g., KCN-2025-001)"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    className="mb-4"
                  />
                  <Button 
                    onClick={handleManualCheckIn}
                    disabled={!ticketId.trim()}
                    className="w-full"
                    variant="outline"
                  >
                    Search & Check In
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Today's Stats</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">156</div>
                      <div className="text-muted-foreground">Checked In</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-muted-foreground">91</div>
                      <div className="text-muted-foreground">Remaining</div>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Quick Tips</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• QR scan is faster for most check-ins</li>
                    <li>• Use manual search for damaged codes</li>
                    <li>• Check attendee ID if verification needed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Check-In Result */
          <Card className="shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl font-bold mb-2 text-green-600">Check-In Successful!</h2>
              <p className="text-muted-foreground mb-8">
                Attendee has been successfully checked in to the event
              </p>

              {/* Attendee Details */}
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <div className="grid gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <span className="text-xl font-semibold">{scanResult.name}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Ticket className="w-4 h-4 text-muted-foreground" />
                      <span>ID: {scanResult.id}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Check-in: {scanResult.checkInTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Badge className="bg-green-100 text-green-800">
                      {scanResult.quantity}x {scanResult.ticketType}
                    </Badge>
                    <Badge variant="outline" className="border-green-300 text-green-600">
                      Status: Checked In
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 justify-center">
                <Button onClick={resetScan} className="bg-primary">
                  Check In Another Attendee
                </Button>
                <Button variant="outline">
                  Print Receipt
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            For technical support during check-in, contact: +63 917 SUPPORT
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;