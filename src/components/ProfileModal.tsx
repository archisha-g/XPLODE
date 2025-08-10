import { useState } from 'react';
import { ArrowLeft, Settings, Edit, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';
import winnerAvatar from '@/assets/winner-avatar.jpg';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const { navigateTo } = useNavigation();

  if (!isOpen) return null;

  const currentVIPLevel = 'Dragon (VIP 6)';
  const currentXP = 12000;
  const nextLevelXP = 20000;
  const progressPercentage = (currentXP / nextLevelXP) * 100;

  const tierBenefits = {
    Gold: [
      {
        title: 'Seasonal Prestige Cosmetics',
        description: 'Unlock exclusive avatars, borders, and animations that refresh every season and are only available for a limited time.'
      },
      {
        title: 'Heat Streak Flame Trail',
        description: 'Show off your streaks with a fiery cosmetic trail available only for Gold tier and above.'
      },
      {
        title: 'Token Gacha Boxes',
        description: 'Open mystery boxes with rewards like XP boosts, power-ups, cosmetics, and tournament tickets.'
      },
      {
        title: 'Private Games & Lobbies',
        description: 'Host and invite friends to play private matches in supported games like Carrom and Ludo with XP-enabled modes.'
      },
      {
        title: 'Enhanced Daily & Weekly Quests',
        description: 'Get access to up to 3 daily and 2 weekly quests for faster XP, gacha tokens, and unlockable rewards.'
      }
    ]
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-gold-light via-warning to-gold flex flex-col overflow-hidden relative">
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-game-purple text-sm font-medium">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-game-purple rounded"></div>
            <div className="w-1 h-3 bg-game-purple rounded"></div>
            <div className="w-1 h-3 bg-game-purple/50 rounded"></div>
            <div className="w-1 h-3 bg-game-purple/50 rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>65</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-game-purple hover:bg-game-purple/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-game-purple">My profile</h2>
        </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-game-purple hover:bg-game-purple/20">
              <Edit className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-game-purple hover:bg-game-purple/20">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-4">
          <div className="bg-gradient-to-r from-game-purple to-game-purple-dark rounded-2xl p-4 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gold">
                <img src={winnerAvatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-foreground font-bold text-lg mb-1">Joined: 08.08.25</div>
            <div className="text-foreground/80 text-sm">789****180</div>
          </div>
        </div>

        {/* VIP Level Section */}
        <div className="px-6 pb-4">
          <div className="bg-secondary/30 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-game-purple font-bold">VIP Progress</span>
              <span className="text-game-purple text-sm">Earn 8K XP to unlock next level</span>
            </div>
            
            {/* Current VIP Level */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl p-3 mb-4">
              <div className="text-center">
                <div className="text-white font-bold text-lg">{currentVIPLevel}</div>
                <div className="text-white/80 text-sm">Current Level</div>
              </div>
            </div>

            {/* XP Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-game-purple font-bold">{currentXP.toLocaleString()} XP</span>
                <span className="text-game-purple text-sm">
                  {(nextLevelXP - currentXP).toLocaleString()} XP to next level
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Details Button */}
            <Button
              variant="secondary"
              onClick={() => navigateTo('tierDetails')}
              className="w-full mt-4 bg-secondary/50 text-game-purple hover:bg-secondary/70"
            >
              View All VIP Benefits
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>


        {/* Referrals Section */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-game-purple font-bold text-lg">Referrals</h3>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-success to-success/80 text-success-foreground hover:scale-105 transition-transform shadow-glow-success"
            >
              <span className="mr-2">🎁</span>
              Refer Friend
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Referred', value: '3', icon: '👥' },
              { label: 'Earned', value: '₹150', icon: '💰' },
              { label: 'Bonus XP', value: '500', icon: '⭐' }
            ].map((item) => (
              <div key={item.label} className="bg-game-purple/80 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-foreground font-bold text-lg">{item.value}</div>
                <div className="text-foreground/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
  );
};

export default ProfileModal;