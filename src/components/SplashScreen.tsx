import { useEffect } from 'react';
import { Play } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-gradient-purple flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold animate-pulse-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gold-light animate-pulse-gold delay-1000"></div>
      </div>
      
      {/* Main logo */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-gold animate-glow flex items-center justify-center shadow-glow-gold">
          <div className="w-24 h-24 rounded-full bg-game-purple flex items-center justify-center">
            <Play className="w-10 h-10 text-gold fill-gold ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;