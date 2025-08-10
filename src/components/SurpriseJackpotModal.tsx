import { useState, useEffect } from 'react';
import { X, Zap, Gift, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SurpriseJackpotModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameType: string;
  multiplier: number;
}

const SurpriseJackpotModal = ({ isOpen, onClose, gameType, multiplier }: SurpriseJackpotModalProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      {/* Celebration particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-2xl animate-bounce ${
              ['🎉', '✨', '💎', '⚡', '🎊'][Math.floor(Math.random() * 5)]
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          >
            {['🎉', '✨', '💎', '⚡', '🎊'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className={`bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 text-center max-w-sm mx-4 border-4 border-white/30 relative overflow-hidden ${showAnimation ? 'animate-scale-in' : ''}`}>
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:bg-white/20"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
        
        <div className="relative z-10">
          {/* Jackpot announcement */}
          <div className="text-6xl mb-4 animate-bounce">🎰</div>
          <div className="text-white font-bold text-3xl mb-2 drop-shadow-lg">SURPRISE JACKPOT!</div>
          <div className="text-white/90 text-lg mb-6 font-medium">Your next {gameType} game is a</div>
          
          {/* Multiplier display */}
          <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-2xl p-6 mb-6 border-2 border-white/30">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-8 h-8 text-yellow-200 animate-pulse" />
              <span className="text-white font-bold text-4xl">{multiplier}X</span>
              <Zap className="w-8 h-8 text-yellow-200 animate-pulse" />
            </div>
            <div className="text-white/80 text-sm">REWARD MULTIPLIER</div>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Gift className="w-5 h-5 text-yellow-200" />
              <span className="text-sm font-medium">XP Rewards Multiplied</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Star className="w-5 h-5 text-yellow-200" />
              <span className="text-sm font-medium">Cashback Boosted</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Crown className="w-5 h-5 text-yellow-200" />
              <span className="text-sm font-medium">Bonus Gacha Tokens</span>
            </div>
          </div>

          {/* Action button */}
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Let's Play & Win Big!
          </Button>

          <div className="text-white/70 text-xs mt-4">
            This jackpot round is active for your next game only!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurpriseJackpotModal;
