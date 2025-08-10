import { useState } from 'react';
import { ArrowLeft, Flame, Snowflake, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const HeatStreakScreen = () => {
  const { navigateBack } = useNavigation();
  const [freezeTokens, setFreezeTokens] = useState(2);
  const [showFreezeModal, setShowFreezeModal] = useState(false);

  const currentStreak = 7;
  const isPlatinum = true; // User's VIP status
  const nextMilestone = 15;
  const progressToNext = (currentStreak / nextMilestone) * 100;

  // Platinum players get rewards faster
  const streakMilestones = isPlatinum ? [
    { days: 2, reward: '100 XP + 1 Gacha Token', claimed: true, platinumBonus: true },
    { days: 5, reward: '300 XP + Flame Trail', claimed: true, platinumBonus: true },
    { days: 12, reward: '500 XP + Rare Cosmetic', claimed: false, platinumBonus: true },
    { days: 25, reward: '1000 XP + Legendary Badge', claimed: false, platinumBonus: true }
  ] : [
    { days: 3, reward: '100 XP + 1 Gacha Token', claimed: true },
    { days: 7, reward: '300 XP + Flame Trail', claimed: true },
    { days: 15, reward: '500 XP + Rare Cosmetic', claimed: false },
    { days: 30, reward: '1000 XP + Legendary Badge', claimed: false }
  ];

  const recentActivity = [
    { day: 'Today', xp: 150, status: 'completed' },
    { day: 'Yesterday', xp: 200, status: 'completed' },
    { day: '2 days ago', xp: 100, status: 'completed' },
    { day: '3 days ago', xp: 180, status: 'completed' },
    { day: '4 days ago', xp: 0, status: 'frozen' },
    { day: '5 days ago', xp: 120, status: 'completed' },
    { day: '6 days ago', xp: 90, status: 'completed' }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 flex flex-col overflow-hidden relative">
      {/* Flame effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl animate-pulse">🔥</div>
        <div className="absolute top-32 right-16 text-2xl animate-bounce">✨</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-pulse" style={{ animationDelay: '0.5s' }}>🔥</div>
      </div>

      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-white text-sm font-medium">
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
      <div className="flex items-center px-6 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={navigateBack}
          className="text-white hover:bg-white/20 mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Flame className="w-6 h-6 mr-2 text-orange-300" />
            Heat Streak
          </h1>
          <p className="text-white/80 text-sm">Keep the fire burning!</p>
        </div>
      </div>

      {/* Current Streak */}
      <div className="px-6 py-4">
        <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm text-center">
          <div className="text-6xl font-bold text-white mb-2">{currentStreak}</div>
          <div className="text-white/80 text-lg mb-3">Day Streak 🔥</div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span className="text-white text-sm">{freezeTokens} Freeze Tokens Available</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-white text-sm">
              <span>Progress to {nextMilestone} days</span>
              <span>{currentStreak}/{nextMilestone}</span>
            </div>
            <Progress value={progressToNext} className="h-2" />
          </div>
        </div>
      </div>

      {/* Streak Milestones */}
      <div className="px-6 py-2">
        <h3 className="text-white font-bold text-lg mb-3">🏆 Streak Rewards</h3>
        <div className="space-y-3">
          {streakMilestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-xl ${
                milestone.claimed 
                  ? 'bg-green-600/30 border border-green-400/50' 
                  : currentStreak >= milestone.days
                  ? 'bg-yellow-600/30 border border-yellow-400/50'
                  : 'bg-black/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.claimed ? 'bg-green-500' : currentStreak >= milestone.days ? 'bg-yellow-500' : 'bg-gray-600'
                }`}>
                  {milestone.claimed ? '✓' : milestone.days}
                </div>
                <div>
                  <div className="text-white font-medium">{milestone.days} Days</div>
                  <div className="text-white/70 text-sm">{milestone.reward}</div>
                </div>
              </div>
              {milestone.claimed ? (
                <span className="text-green-400 text-sm font-bold">Claimed</span>
              ) : currentStreak >= milestone.days ? (
                <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400">
                  Claim
                </Button>
              ) : (
                <span className="text-white/50 text-sm">Locked</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <h3 className="text-white font-bold text-lg mb-3">📅 Recent Activity</h3>
        <div className="space-y-2">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-black/20 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-500' : 'bg-cyan-500'
                }`}></div>
                <span className="text-white">{activity.day}</span>
              </div>
              <div className="flex items-center space-x-2">
                {activity.status === 'frozen' && (
                  <Snowflake className="w-4 h-4 text-cyan-300" />
                )}
                <span className="text-white font-bold">
                  {activity.xp > 0 ? `+${activity.xp} XP` : 'Streak Frozen'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatStreakScreen;