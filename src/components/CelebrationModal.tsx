import { useState } from 'react';
import { X, Trophy, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import winnerAvatar from '@/assets/winner-avatar.jpg';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CelebrationModal = ({ isOpen, onClose }: CelebrationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-game-purple to-game-purple-dark rounded-3xl p-6 max-w-sm w-full mx-4 relative shadow-glow-gold animate-scale-in">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Confetti background effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${
                i % 3 === 0 ? 'bg-warning' : i % 3 === 1 ? 'bg-gold' : 'bg-success'
              } rounded animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-4">
          {/* Trophy icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow-gold animate-pulse-gold">
              <Trophy className="w-8 h-8 text-game-purple" />
            </div>
          </div>

          {/* Winner avatar */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gold shadow-lg">
              <img 
                src={winnerAvatar} 
                alt="Winner Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main announcement */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-warning">
              🎉 Welcome to WinZO! 🎉
            </h2>
            <p className="text-lg font-bold text-foreground">
              You've successfully joined the gaming community!
            </p>
          </div>

          {/* Reward details */}
          <div className="bg-secondary/30 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-5 h-5 text-warning" />
              <span className="text-warning font-bold">Reward:</span>
            </div>
            <div className="text-foreground font-bold text-lg">
              ₹1,000 & Gold VIP Pass
            </div>
          </div>

          {/* Congratulatory message */}
          <div className="flex items-center justify-center space-x-2 text-foreground/80">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-sm">Congratulations from the WinZO team!</span>
            <Star className="w-4 h-4 text-gold" />
          </div>

          {/* Close button */}
          <Button
            onClick={onClose}
            className="w-full bg-gradient-gold text-game-purple font-bold hover:opacity-90 mt-6"
          >
            Awesome!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CelebrationModal;