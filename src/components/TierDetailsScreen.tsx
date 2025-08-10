import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const TierDetailsScreen = () => {
  const { navigateBack } = useNavigation();

  const vipLevels = [
    { name: 'Wolf', level: 'VIP 1', xp: '0-2,000 XP', color: 'from-gray-600 to-gray-800' },
    { name: 'Tiger', level: 'VIP 2', xp: '2,001-5,000 XP', color: 'from-orange-600 to-orange-800' },
    { name: 'Lion', level: 'VIP 3', xp: '5,001-10,000 XP', color: 'from-amber-600 to-amber-800' },
    { name: 'Phoenix', level: 'VIP 4', xp: '10,001-18,000 XP', color: 'from-red-600 to-red-800' },
    { name: 'Unicorn', level: 'VIP 5', xp: '18,001-30,000 XP', color: 'from-purple-600 to-purple-800' },
    { name: 'Dragon', level: 'VIP 6', xp: '30,001+ XP', color: 'from-cyan-600 to-cyan-800', current: true }
  ];

  const vipBenefits = {
    Bronze: [
      {
        title: 'Basic Daily Quests',
        description: 'Access to 1 daily quest for earning XP and basic rewards.'
      },
      {
        title: 'Community Access',
        description: 'Join the WinZO community and chat with other players.'
      },
      {
        title: 'Basic Support',
        description: 'Email support with response within 48 hours.'
      }
    ],
    Silver: [
      {
        title: 'Enhanced Daily Quests',
        description: 'Access to 2 daily quests with better rewards and XP multipliers.'
      },
      {
        title: 'Weekly Challenges',
        description: 'Participate in weekly challenges for bonus rewards.'
      },
      {
        title: 'Priority Support',
        description: 'Enhanced customer support with 24-hour response time.'
      },
      {
        title: 'Exclusive Tournaments',
        description: 'Access to Silver-tier exclusive tournaments and events.'
      }
    ],
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
    ],
    Platinum: [
      {
        title: 'VIP Customer Support',
        description: 'Dedicated VIP support team with instant response and priority handling.'
      },
      {
        title: 'Exclusive VIP Tournaments',
        description: 'Access to high-stakes VIP tournaments with massive prize pools.'
      },
      {
        title: 'Premium Cosmetics Collection',
        description: 'Unlock the most exclusive cosmetics, including animated avatars and legendary borders.'
      },
      {
        title: 'Double XP Weekends',
        description: 'Earn double XP during special weekend events exclusively for Platinum members.'
      },
      {
        title: 'VIP Lounge Access',
        description: 'Access to exclusive VIP game rooms and special events with other Platinum players.'
      },
      {
        title: 'Personal Gaming Advisor',
        description: 'Get personalized gaming tips and strategies from our expert team.'
      }
    ]
  };

  const currentLevel = vipLevels.find(level => level.current) || vipLevels[5];

  const currentXP = 12000;
  const nextTierXP = 20000;
  const progressPercentage = (currentXP / nextTierXP) * 100;

  return (
    <div className={`h-full w-full bg-gradient-to-br ${currentLevel.color} flex flex-col overflow-hidden relative`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-8 text-8xl transform rotate-12">👑</div>
        <div className="absolute bottom-32 right-12 text-6xl transform -rotate-12">🐉</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">🔥</div>
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
        <h1 className="text-xl font-bold text-white">VIP Level Benefits</h1>
      </div>

      {/* Current Progress */}
      <div className="px-6 py-2">
        <div className="bg-black/20 rounded-2xl p-4">
          <div className="text-white font-bold mb-2">Your Current Level</div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-bold">{currentXP.toLocaleString()} XP</span>
            <span className="text-white text-sm">
              {(nextTierXP - currentXP).toLocaleString()} XP to next level
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-white/20" />
        </div>
      </div>

      {/* All VIP Levels Overview */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="bg-black/20 rounded-2xl p-4">
          <h3 className="text-white font-bold text-lg mb-4">All VIP Level Benefits</h3>
          <div className="space-y-4">
            {vipLevels.map((level, index) => (
              <div key={index} className={`rounded-xl p-4 ${level.current ? 'bg-white/20 border-2 border-white/40' : 'bg-white/10'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold text-lg">{level.name}</h4>
                    <p className="text-white/80 text-sm">{level.level} • {level.xp}</p>
                  </div>
                  {level.current && (
                    <span className="bg-white text-game-purple px-3 py-1 rounded-full text-xs font-bold">CURRENT</span>
                  )}
                </div>
                
                {/* Sample benefits for each level */}
                <div className="space-y-2">
                  {index === 0 && (
                    <>
                      <p className="text-white/80 text-sm">• Basic Daily Quests (1 per day)</p>
                      <p className="text-white/80 text-sm">• Community Access</p>
                      <p className="text-white/80 text-sm">• Email Support (48h response)</p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p className="text-white/80 text-sm">• Enhanced Daily Quests (2 per day)</p>
                      <p className="text-white/80 text-sm">• Weekly Challenges</p>
                      <p className="text-white/80 text-sm">• Priority Support (24h response)</p>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p className="text-white/80 text-sm">• Premium Daily Quests (3 per day)</p>
                      <p className="text-white/80 text-sm">• Heat Streak Rewards</p>
                      <p className="text-white/80 text-sm">• Exclusive Tournaments</p>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <p className="text-white/80 text-sm">• Seasonal Prestige Cosmetics</p>
                      <p className="text-white/80 text-sm">• Token Gacha Boxes</p>
                      <p className="text-white/80 text-sm">• Private Games & Lobbies</p>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <p className="text-white/80 text-sm">• Surprise Jackpot Multipliers</p>
                      <p className="text-white/80 text-sm">• Referral Chain Bonuses</p>
                      <p className="text-white/80 text-sm">• Lesson Streak System</p>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <p className="text-white/80 text-sm">• VIP Customer Support (Instant)</p>
                      <p className="text-white/80 text-sm">• Exclusive VIP Tournaments</p>
                      <p className="text-white/80 text-sm">• Premium Cosmetics Collection</p>
                      <p className="text-white/80 text-sm">• Double XP Weekends</p>
                      <p className="text-white/80 text-sm">• Personal Gaming Advisor</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierDetailsScreen;