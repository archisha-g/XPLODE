import { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import RealTimeClock from './RealTimeClock';

interface OnboardingScreenProps {
  onSignup: () => void;
}

const OnboardingScreen = ({ onSignup }: OnboardingScreenProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [whatsappOffers, setWhatsappOffers] = useState(false);

  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col relative overflow-hidden">
      {/* Status bar simulation */}
      <div className="flex justify-between items-center px-6 py-4 text-foreground text-sm font-medium">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>66</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-center py-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">WINZO</span>
          <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
            <Play className="w-3 h-3 text-game-purple fill-game-purple ml-0.5" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Reward showcase */}
        <div className="relative mb-8">
          {/* Pedestal */}
          <div className="w-48 h-32 bg-gradient-to-t from-warning via-gold-light to-gold rounded-3xl opacity-80 animate-glow"></div>
          
          {/* Floating game icons */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-24">
            <div className="absolute top-0 left-4 animate-float-slow">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg">
                <span className="text-sm">🎲</span>
              </div>
            </div>
            <div className="absolute top-2 right-6 animate-float-delayed">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                <span className="text-sm">♠️</span>
              </div>
            </div>
            <div className="absolute top-6 left-16 animate-bounce-slow">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-sm">🎯</span>
              </div>
            </div>
            <div className="absolute top-1 right-16 animate-float">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <span className="text-sm">🃏</span>
              </div>
            </div>
            <div className="absolute top-8 left-8 animate-float-delayed">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-sm">🎮</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reward text */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">UNLOCK REWARDS UPTO</h2>
          <div className="text-4xl font-bold text-gold">₹45</div>
        </div>

        {/* Signup button */}
        <Button 
          onClick={onSignup}
          disabled={!termsAccepted}
          className="w-full bg-success hover:bg-success/90 text-success-foreground font-bold py-4 rounded-xl text-lg mb-6"
        >
          SIGNUP TO UNLOCK
        </Button>

        {/* Checkboxes */}
        <div className="space-y-4 w-full">
          <div className="flex items-start space-x-3">
            <Checkbox 
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              className="mt-1 border-foreground data-[state=checked]:bg-success data-[state=checked]:border-success"
            />
            <div className="text-sm text-foreground leading-relaxed">
              I accept WinZO's{' '}
              <span className="text-gold underline">Terms & Conditions</span>
              {' '}and{' '}
              <span className="text-gold underline">Privacy Policy</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              checked={whatsappOffers}
              onCheckedChange={(checked) => setWhatsappOffers(checked === true)}
              className="mt-1 border-foreground data-[state=checked]:bg-success data-[state=checked]:border-success"
            />
            <div className="text-sm text-foreground leading-relaxed">
              WinZO may inform me about ongoing offers and promotions on WhatsApp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;