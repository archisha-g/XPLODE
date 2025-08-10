import { useState } from 'react';
import { ArrowLeft, Gift, Star, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const RewardChestsScreen = () => {
  const { navigateBack } = useNavigation();
  const [selectedChest, setSelectedChest] = useState<string | null>(null);
  const [openingChest, setOpeningChest] = useState(false);
  const [showRewards, setShowRewards] = useState(false);
  const [earnedRewards, setEarnedRewards] = useState<string[]>([]);
  
  const availableChests = [
    {
      id: '1',
      type: 'Bronze Chest',
      progress: 100,
      maxProgress: 100,
      rewards: ['50 XP', 'Streak Freeze Token', 'Basic Cosmetic'],
      rarity: 'common',
      icon: '📦',
      color: 'from-amber-600 to-amber-800'
    },
    {
      id: '2',
      type: 'Silver Chest',
      progress: 75,
      maxProgress: 100,
      rewards: ['150 XP', 'Tournament Ticket', 'Rare Cosmetic'],
      rarity: 'uncommon',
      icon: '🎁',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: '3',
      type: 'Gold Chest',
      progress: 40,
      maxProgress: 100,
      rewards: ['300 XP', 'Cashback Card', 'Epic Cosmetic'],
      rarity: 'rare',
      icon: '💎',
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  const platinumChests = [
    {
      id: 'p1',
      type: 'Platinum Exclusive',
      progress: 100,
      maxProgress: 100,
      rewards: ['500 XP', 'Prestige Badge', 'Legendary Skin'],
      rarity: 'legendary',
      icon: '👑',
      color: 'from-purple-600 to-purple-800'
    }
  ];

  const chestHistory = [
    { type: 'Bronze Chest', reward: '50 XP + Basic Avatar', time: '2 hours ago' },
    { type: 'Silver Chest', reward: 'Tournament Ticket', time: '1 day ago' },
    { type: 'Gold Chest', reward: '200 XP + Rare Border', time: '3 days ago' }
  ];

  const handleOpenChest = (chestId: string) => {
    const chest = [...availableChests, ...platinumChests].find(c => c.id === chestId);
    if (!chest) return;
    
    setSelectedChest(chestId);
    setOpeningChest(true);
    
    // Simulate chest opening animation
    setTimeout(() => {
      setOpeningChest(false);
      setEarnedRewards(chest.rewards);
      setShowRewards(true);
      
      // Close rewards after 4 seconds
      setTimeout(() => {
        setShowRewards(false);
        setSelectedChest(null);
        setEarnedRewards([]);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex flex-col overflow-hidden relative">
      {/* Magical effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 text-2xl animate-pulse">✨</div>
        <div className="absolute top-28 right-12 text-3xl animate-bounce">💎</div>
        <div className="absolute bottom-32 left-16 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-48 right-8 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
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
            <Gift className="w-6 h-6 mr-2 text-yellow-300" />
            Reward Chests
          </h1>
          <p className="text-white/80 text-sm">Earn chests through quests and milestones!</p>
        </div>
      </div>

      {/* Available Chests */}
      <div className="px-6 py-4">
        <h3 className="text-white font-bold text-lg mb-3">📦 Available Chests</h3>
        <div className="space-y-3">
          {availableChests.map((chest) => (
            <div 
              key={chest.id}
              className={`bg-gradient-to-r ${chest.color} rounded-2xl p-4 shadow-glow-premium hover:scale-105 transition-all duration-300 animate-shimmer relative overflow-hidden`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{chest.icon}</div>
                  <div>
                    <h4 className="text-white font-bold">{chest.type}</h4>
                    <p className="text-white/80 text-sm capitalize">{chest.rarity} Rarity</p>
                  </div>
                </div>
                {chest.progress >= chest.maxProgress ? (
                  <Button 
                    onClick={() => handleOpenChest(chest.id)}
                    className="bg-white text-game-purple hover:bg-white/90 font-bold animate-pulse-gold"
                    disabled={openingChest}
                  >
                    {openingChest && selectedChest === chest.id ? (
                      <span className="flex items-center space-x-1">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Opening...</span>
                      </span>
                    ) : (
                      'Open'
                    )}
                  </Button>
                ) : (
                  <span className="text-white/70 text-sm">Locked</span>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-white text-sm">
                  <span>Progress</span>
                  <span>{chest.progress}/{chest.maxProgress}</span>
                </div>
                <Progress value={(chest.progress / chest.maxProgress) * 100} className="h-2" />
              </div>
              
              <div className="mt-3">
                <p className="text-white/90 text-sm font-medium mb-1">Possible Rewards:</p>
                <div className="flex flex-wrap gap-1">
                  {chest.rewards.map((reward, idx) => (
                    <span 
                      key={idx}
                      className="bg-black/30 text-white px-2 py-1 rounded text-xs"
                    >
                      {reward}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platinum Exclusive */}
      <div className="px-6 py-2">
        <h3 className="text-white font-bold text-lg mb-3">👑 Platinum Exclusive</h3>
        <div className="space-y-3">
          {platinumChests.map((chest) => (
            <div 
              key={chest.id}
              className={`bg-gradient-to-r ${chest.color} rounded-2xl p-4 shadow-glow-premium border-2 border-yellow-400/50`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{chest.icon}</div>
                  <div>
                    <h4 className="text-white font-bold">{chest.type}</h4>
                    <p className="text-yellow-300 text-sm font-medium">VIP Level 6+ Only</p>
                  </div>
                </div>
                <Button 
                  onClick={() => handleOpenChest(chest.id)}
                  className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold"
                >
                  Open
                </Button>
              </div>
              
              <div className="mt-3">
                <p className="text-white/90 text-sm font-medium mb-1">Exclusive Rewards:</p>
                <div className="flex flex-wrap gap-1">
                  {chest.rewards.map((reward, idx) => (
                    <span 
                      key={idx}
                      className="bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded text-xs border border-yellow-400/30"
                    >
                      {reward}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Openings */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <h3 className="text-white font-bold text-lg mb-3">📜 Recent Openings</h3>
        <div className="space-y-2">
          {chestHistory.map((entry, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-black/20 rounded-xl"
            >
              <div>
                <div className="text-white font-medium">{entry.type}</div>
                <div className="text-white/70 text-sm">{entry.reward}</div>
              </div>
              <span className="text-white/60 text-xs">{entry.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Opening Animation Overlay */}
      {openingChest && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center animate-scale-in shadow-2xl">
            <div className="text-6xl mb-4 animate-bounce">📦</div>
            <div className="text-game-purple font-bold text-xl">Opening Chest...</div>
            <div className="text-game-purple/70 text-sm">Revealing your rewards!</div>
            <div className="flex justify-center mt-4 space-x-1">
              <div className="w-2 h-2 bg-game-purple rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-game-purple rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-game-purple rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      )}

      {/* Rewards Display Overlay */}
      {showRewards && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-center animate-scale-in shadow-2xl max-w-sm mx-4">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <div className="text-white font-bold text-2xl mb-2">Congratulations!</div>
            <div className="text-white/90 text-sm mb-4">You earned these rewards:</div>
            <div className="space-y-2">
              {earnedRewards.map((reward, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/20 text-white px-3 py-2 rounded-lg font-medium animate-fade-in"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  ✨ {reward}
                </div>
              ))}
            </div>
            <div className="text-white/80 text-xs mt-4">
              Rewards added to your account!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardChestsScreen;