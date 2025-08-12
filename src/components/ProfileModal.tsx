import { useState, useEffect } from 'react';
import { ArrowLeft, Settings, Edit, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';
import winnerAvatar from '@/assets/winner-avatar.jpg';
// Import all tier images
import wolfImg from '../assets/wolf.png';
import sharkImg from '../assets/shark.png';
import lionImg from '../assets/lion.png';
import phoenixImg from '../assets/phoenix.png';
import unicornImg from '../assets/unicorn.png';
import dragonImg from '../assets/dragon.png';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const { navigateTo } = useNavigation();
  const [winzoneLeft, setWinzoneLeft] = useState(2);
  const [isActivated, setIsActivated] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0); // in seconds
  const [timerActive, setTimerActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            setIsActivated(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  // Format time remaining
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  const currentVIPLevel = 3;
  const currentVIPPoints = 5000;
  const nextLevelVIPPoints = 8000;
  const progressPercentage = (currentVIPPoints / nextLevelVIPPoints) * 100;

  const handleWinzoneActivation = () => {
    if (winzoneLeft > 0) {
      setWinzoneLeft(prev => prev - 1);
      setIsActivated(true);
      setTimeRemaining(6 * 60 * 60); // 6 hours in seconds
      setTimerActive(true);

      // Add golden shine effect
      const button = document.querySelector('.winzone-button');
      button?.classList.add('animate-pulse-gold');
      setTimeout(() => {
        button?.classList.remove('animate-pulse-gold');
      }, 2000);
    }
  };

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
    <div className="h-full w-full bg-gradient-to-br from-emerald-600 via-cyan-500 to-teal-700 flex flex-col overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-20 h-20 opacity-10 animate-float">
          <img
            src={dragonImg}
            alt="Dragon"
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to emoji if image fails to load
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = '<div class="text-6xl">🐉</div>';
            }}
          />
        </div>
        <div className="absolute bottom-32 right-12 text-4xl opacity-15 animate-pulse">⚡</div>
        <div className="absolute top-24 right-16 text-3xl opacity-10 animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
        <div className="absolute bottom-48 left-12 text-4xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}>⭐</div>
      </div>

      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-white text-sm font-medium relative z-10">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white/50 rounded"></div>
            <div className="w-1 h-3 bg-white/50 rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>65</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4 relative z-10">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-white">My Profile</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 backdrop-blur-sm">
            <Edit className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 backdrop-blur-sm">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

        {/* Winzone Activation Banner - Professional Layout */}
        <div className="px-6 pb-4">
          <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 rounded-2xl p-4 border-2 border-purple-400/50 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-white font-bold text-lg">Winzone Boost</h3>
                </div>
                <p className="text-white/90 text-sm mb-1 leading-relaxed">
                  Earn double VIP points for 6 hours during the boost window.
                </p>
                <div className="text-white/80 text-xs">
                  {timerActive ? (
                    <div className="flex items-center space-x-2">
                      <span className="animate-pulse">🔥</span>
                      <span>Active: {formatTime(timeRemaining)} remaining</span>
                    </div>
                  ) : (
                    winzoneLeft > 0 ? `${winzoneLeft}/3 activations left` : 'No activations left'
                  )}
                </div>
              </div>

              <div className="ml-4">
                <button
                  onClick={handleWinzoneActivation}
                  disabled={winzoneLeft === 0 || timerActive}
                  className={`winzone-button font-bold py-3 px-6 rounded-xl transition-all duration-300 transform ${
                    winzoneLeft > 0 && !timerActive
                      ? 'bg-white/20 hover:bg-white/30 text-white shadow-lg hover:shadow-white/50 hover:scale-110 active:scale-95 border border-white/30'
                      : 'bg-gray-600/50 text-gray-300 cursor-not-allowed border border-gray-500/30'
                  } ${isActivated && !timerActive ? 'animate-pulse bg-green-500/30 border-green-400' : ''}`}
                >
                  {timerActive ? 'Active' : isActivated ? '✓ Activated!' : winzoneLeft > 0 ? 'Activate' : 'Locked'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-4">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl p-4 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-orange-600/30 to-yellow-600/30"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-500 relative">
                  <img src={winnerAvatar} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-black font-bold text-lg mb-1">Joined: 08.08.25</div>
              <div className="text-black/80 text-sm mb-4">789****180</div>

              {/* VIP Tier Banner - Professional */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-4 border-2 border-amber-400">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={lionImg}
                        alt="Lion"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="text-4xl">🦁</div>';
                        }}
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-lg">LION</div>
                      <div className="text-white/90 text-sm">Current Level</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={phoenixImg}
                        alt="Phoenix"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="text-4xl">🔥</div>';
                        }}
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-sm">PHOENIX</div>
                      <div className="text-white/90 text-xs">Next Level</div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-white text-sm mb-1">
                    <span>Progress in August</span>
                    <span>25 VIP Points to unlock</span>
                  </div>
                  <div className="w-full h-2 bg-black/30 rounded-full">
                    <div className="w-1/3 h-full bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Benefits Preview */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-black/20 rounded-lg p-2">
                    <div className="text-white text-xs">Bonus Per 100 VIP</div>
                    <div className="text-white font-bold">₹6</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-2">
                    <div className="text-white text-xs">Customer Support</div>
                    <div className="text-green-400 text-lg">✓</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-2">
                    <div className="text-white text-xs">Bonus Usage</div>
                    <div className="text-white font-bold">3X</div>
                  </div>
                </div>

                {/* More Details Button */}
                <Button
                  onClick={() => navigateTo('tierDetails')}
                  className="w-full mt-3 bg-white/20 hover:bg-white/30 text-white font-bold py-2 rounded-lg transition-all duration-300"
                >
                  More Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Rewards */}
        <div className="px-6 pb-4">
          <h3 className="text-white font-bold text-xl mb-4">Available Rewards</h3>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📘</span>
                </div>
                <div>
                  <div className="text-white font-bold">Link social profile</div>
                  <div className="text-white/80 text-sm">Link your social profile and get flat ₹2 reward</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-lg">₹2</div>
                <Button className="bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-1 rounded-full text-sm mt-1">
                  CLAIM
                </Button>
              </div>
            </div>
          </div>
        </div>


        {/* Overall Summary */}
        <div className="px-6 pb-6">
          <h3 className="text-white font-bold text-xl mb-4">Overall summary</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Games', value: '0', icon: '🎮' },
              { label: 'Winnings', value: '₹0', icon: '🏆' },
              { label: 'Rewards', value: '₹20', icon: '🎁' }
            ].map((item) => (
              <div key={item.label} className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-white font-bold text-2xl">{item.value}</div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
  );
};

export default ProfileModal;