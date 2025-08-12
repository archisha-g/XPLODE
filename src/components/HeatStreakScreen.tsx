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
  const [isFrozen, setIsFrozen] = useState(false);

  const currentStreak = 7;
  const currentTier = 'LION'; // User's VIP status
  const nextMilestone = 15;
  const daysToNext = nextMilestone - currentStreak;
  const progressToNext = (currentStreak / nextMilestone) * 100;

  const streakMilestones = [
    { days: 5, reward: '1 VIP point', claimed: true },
    { days: 15, reward: '3 VIP points + Tournament Ticket', claimed: false },
    { days: 30, reward: '5 VIP points + Tournament Ticket + Occasional Treat', claimed: false }
  ];

  const handleFreeze = () => {
    if (freezeTokens > 0) {
      setIsFrozen(true);
      setFreezeTokens(prev => prev - 1);
      setShowFreezeModal(false);
    }
  };

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
    <div className="h-full w-full bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex flex-col overflow-hidden relative">


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
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={navigateBack}
            className="text-white hover:bg-white/20 mr-4 bg-black/20 backdrop-blur-sm rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">
              Heat Streak
            </h1>
            <p className="text-white/80 text-sm">Play daily, keep the streak alive, and multiply your points & rewards.</p>
          </div>
        </div>
        <div className="text-right ml-4">
          <div className="text-white/60 text-xs">Current Tier</div>
          <div className="text-white font-bold text-lg">{currentTier}</div>
        </div>
      </div>

      {/* Current Streak */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-black/40 to-gray-900/40 rounded-3xl p-8 backdrop-blur-lg border border-white/10 shadow-2xl">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <span className="text-6xl mr-3">{isFrozen ? '❄️' : '🔥'}</span>
              <div className="text-7xl font-bold text-white drop-shadow-2xl">{currentStreak}</div>
            </div>
            <div className="text-white/90 text-xl font-semibold mb-4">Day Streak</div>

            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className={`flex items-center space-x-1 rounded-full px-3 py-1 border text-sm ${
                isFrozen
                  ? 'bg-blue-500/20 border-blue-400/30'
                  : 'bg-cyan-500/20 border-cyan-400/30'
              }`}>
                {isFrozen ? <Snowflake className="w-4 h-4 text-blue-300" /> : <Snowflake className="w-4 h-4 text-cyan-300" />}
                <span className="text-white font-medium">{freezeTokens} Freeze Tokens Available</span>
              </div>
              <Button
                onClick={handleFreeze}
                className={`font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${
                  isFrozen
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white hover:shadow-blue-400/50'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white hover:shadow-cyan-400/50'
                }`}
              >
                Freeze
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-white text-sm">
              <span className="font-medium">Next Reward in {daysToNext} days</span>
              <span className="font-bold">{currentStreak}/{nextMilestone}</span>
            </div>
            <Progress value={progressToNext} className="h-3 bg-gray-700/50" />
          </div>
        </div>
      </div>

      {/* Streak Stats */}
      <div className="px-6 py-4">
        <h3 className="text-white font-bold text-xl mb-4 text-center">Streak Stats</h3>
        <div className="space-y-4">
          {streakMilestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-2xl backdrop-blur-lg border shadow-xl ${
                milestone.claimed
                  ? 'bg-gradient-to-r from-red-500/30 to-red-600/30 border-red-400/50 shadow-red-400/20'
                  : currentStreak >= milestone.days
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/50 shadow-yellow-400/20'
                  : 'bg-gradient-to-r from-black/40 to-gray-900/40 border-gray-600/30'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                  milestone.claimed ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                  currentStreak >= milestone.days ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                  'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300'
                }`}>
                  {milestone.claimed ? '✓' : milestone.days}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{milestone.days} Days</div>
                  <div className="text-white/80 text-sm">{milestone.reward}</div>
                </div>
              </div>
              {milestone.claimed ? (
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold text-sm border border-green-400/30">
                  Claimed
                </div>
              ) : currentStreak >= milestone.days ? (
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all duration-300">
                  Claim
                </Button>
              ) : (
                <div className="text-white/50 text-sm font-medium bg-gray-600/20 px-4 py-2 rounded-full border border-gray-600/30">
                  Locked
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default HeatStreakScreen;