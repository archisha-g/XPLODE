import { useState } from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SignupScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

const SignupScreen = ({ onBack, onContinue }: SignupScreenProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (phoneNumber.length >= 10) {
      // Set flag for celebration modal to show
      localStorage.setItem('userSignedIn', 'true');
      onContinue();
    }
  };

  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col relative overflow-hidden">
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-foreground text-sm font-medium">
        <span>5:30</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>65</span>
        </div>
      </div>

      {/* Header with back button */}
      <div className="flex items-center px-6 py-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="text-foreground hover:bg-secondary/20 p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <span className="ml-4 text-lg font-semibold text-foreground">Signup</span>
      </div>

      {/* Reward text at top */}
      <div className="text-center px-6 py-4">
        <div className="bg-game-purple-dark/50 rounded-2xl px-6 py-3 border border-gold/30">
          <h2 className="text-lg font-bold text-foreground mb-1">UNLOCK REWARDS UPTO</h2>
          <div className="text-3xl font-bold text-gold">₹45</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col px-8">
        {/* Reward showcase (smaller version) */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-36 h-24 bg-gradient-to-t from-warning via-gold-light to-gold rounded-2xl opacity-80"></div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-12 h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                <span className="text-xs">💵</span>
              </div>
              <div className="w-12 h-16 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg z-10">
                <span className="text-xs">👛</span>
              </div>
              <div className="w-12 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                <span className="text-xs">🎫</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form section */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Verify your mobile number and get <span className="text-warning">₹45</span>
            </h3>
          </div>

          {/* Phone input */}
          <div className="space-y-4">
            <div className="flex space-x-3">
              <div className="flex items-center bg-input rounded-lg px-3 py-3 border border-border">
                <span className="mr-2">🇮🇳</span>
                <span className="text-foreground font-medium">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground py-3 text-lg"
              />
            </div>

            <Button 
              onClick={handleContinue}
              disabled={phoneNumber.length < 10}
              className="w-full bg-success hover:bg-success/90 text-success-foreground font-bold py-4 rounded-lg text-lg"
            >
              CONTINUE
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center py-4">
            <div className="flex-1 h-px bg-border"></div>
            <span className="px-4 text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Alternative login */}
          <div className="space-y-4">
            <div className="text-foreground font-medium">
              Login using other modes
            </div>
            
            <Button 
              variant="outline"
              className="w-full bg-secondary/20 border-border text-foreground hover:bg-secondary/30 py-4 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="font-semibold">CONTINUE WITH TRUECALLER</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;