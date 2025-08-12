import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

// Import tier images
import wolfImg from '../assets/wolf.png';
import sharkImg from '../assets/shark.png';
import lionImg from '../assets/lion.png';
import phoenixImg from '../assets/phoenix.png';
import unicornImg from '../assets/unicorn.png';
import dragonImg from '../assets/dragon.png';

const TierDetailsScreen = () => {
  const { navigateBack } = useNavigation();
  const [showComparison, setShowComparison] = useState(false);

  const vipLevels = [
    {
      name: 'WOLF',
      level: 1,
      emoji: '🐺',
      image: wolfImg,
      color: 'from-orange-600 to-yellow-600',
      // Habit Building Features
      freezeTokens: '1 Freeze Token (/month)',
      // Loss Relief
      lossBack: '-',
      // Prestige Play
      exclusiveTournament: '-',
      // Tier Boost
      winzoneWindow: '1 hour (/month)',
      // Activity Reward
      depositCodes: '1 code (/3 months)',
      // Lifestyle Perks
      offlineDelights: '1-month SonyLIV subscription OR ₹100 gift card'
    },
    {
      name: 'SHARK',
      level: 2,
      emoji: '🦈',
      image: sharkImg,
      color: 'from-blue-600 to-cyan-600',
      // Habit Building Features
      freezeTokens: '1 Freeze Tokens (/month)',
      // Loss Relief
      lossBack: '-',
      // Prestige Play
      exclusiveTournament: '-',
      // Tier Boost
      winzoneWindow: '2 hours (/month)',
      // Activity Reward
      depositCodes: '1 code (/2 months)',
      // Lifestyle Perks
      offlineDelights: '1-month Disney+ Hotstar + ₹100 gift card'
    },
    {
      name: 'LION',
      level: 3,
      emoji: '🦁',
      image: lionImg,
      color: 'from-yellow-600 to-orange-600',
      current: true,
      // Habit Building Features
      freezeTokens: '2 Freeze Tokens (/week)',
      // Loss Relief
      lossBack: '2% LB (₹200 cap)',
      // Prestige Play
      exclusiveTournament: '-',
      // Tier Boost
      winzoneWindow: '4 hours (/month)',
      // Activity Reward
      depositCodes: '1 code (/month)',
      // Lifestyle Perks
      offlineDelights: '1-month ZEE5 + ₹150 gift card'
    },
    {
      name: 'PHOENIX',
      level: 4,
      emoji: '🔥',
      image: phoenixImg,
      color: 'from-red-600 to-pink-600',
      // Habit Building Features
      freezeTokens: '1 Freeze Token (/week)',
      // Loss Relief
      lossBack: '4% LB (₹400 cap) + 2 premium tickets/month',
      // Prestige Play
      exclusiveTournament: 'Get a chance to play with Sunny Raina',
      // Tier Boost
      winzoneWindow: '6 hours (/month)',
      // Activity Reward
      depositCodes: '2 codes (/month)',
      // Lifestyle Perks
      offlineDelights: '2-month SonyLIV or Hotstar + ₹200 gift card'
    },
    {
      name: 'UNICORN',
      level: 5,
      emoji: '🦄',
      image: unicornImg,
      color: 'from-purple-600 to-pink-600',
      // Habit Building Features
      freezeTokens: '2 Freeze Tokens (/week)',
      // Loss Relief
      lossBack: '2% LB (₹600 cap) + 3 premium tickets/month',
      // Prestige Play
      exclusiveTournament: 'Get a chance to play with Dhoni',
      // Tier Boost
      winzoneWindow: '8 hours (/month)',
      // Activity Reward
      depositCodes: '3 codes (/month)',
      // Lifestyle Perks
      offlineDelights: '3-month Disney+ Hotstar + SonyLIV + ₹300 gift card'
    },
    {
      name: 'DRAGON',
      level: 6,
      emoji: '🐉',
      image: dragonImg,
      color: 'from-green-600 to-emerald-600',
      inviteOnly: true,
      // Habit Building Features
      freezeTokens: '3 Freeze Tokens (/week)',
      // Loss Relief
      lossBack: '2% LB (₹800 cap) + 5 premium tickets/month',
      // Prestige Play
      exclusiveTournament: 'Get a chance to play with Dhoni',
      // Tier Boost
      winzoneWindow: '12 hours (/month)',
      // Activity Reward
      depositCodes: 'Weekly codes',
      // Lifestyle Perks
      offlineDelights: 'Annual Disney+ Hotstar, SonyLIV, ZEE5 + ₹500 gift card + gym voucher'
    }
  ];

  if (showComparison) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex flex-col overflow-hidden">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-4 text-white text-sm font-medium">
          <RealTimeClock />
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-white rounded"></div>
              <div className="w-1 h-3 bg-white rounded"></div>
              <div className="w-1 h-3 bg-white/50 rounded"></div>
            </div>
            <span className="ml-2">📶</span>
            <span>25</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center px-6 py-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowComparison(false)}
            className="text-white hover:bg-white/20 mr-4 bg-black/20 backdrop-blur-sm rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold text-white">MONTHLY LOYALTY BENEFITS</h1>
          </div>
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">⚡</span>
          </div>
        </div>

        {/* VIP Levels Header */}
        <div className="px-6 mb-4">
          <div className="text-white font-bold text-lg mb-2">VIP LEVELS</div>
        </div>

        {/* Scrollable Comparison Table */}
        <div className="flex-1 overflow-x-auto px-6">
          <div className="flex space-x-4 pb-6" style={{ minWidth: '800px' }}>
            {vipLevels.map((tier) => (
              <div
                key={tier.name}
                className={`flex-shrink-0 w-48 bg-gradient-to-b ${tier.color} rounded-2xl p-4 relative ${
                  tier.current ? 'ring-2 ring-white' : ''
                }`}
              >
                {tier.inviteOnly && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    INVITE ONLY
                  </div>
                )}
                
                {tier.current && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    CURRENT LEVEL
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6 mt-2">
                  <div className="w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                    {tier.image ? (
                      <img
                        src={tier.image}
                        alt={tier.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="text-6xl">${tier.emoji}</div>`;
                        }}
                      />
                    ) : (
                      <div className="text-6xl">{tier.emoji}</div>
                    )}
                  </div>
                  <div className="text-white font-bold text-lg">{tier.name}</div>
                  <div className="text-white/80 text-sm">Level {tier.level}</div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {/* Freeze Tokens */}
                  <div className="bg-black/20 rounded-lg p-2 text-center">
                    <div className="text-white/80 text-xs mb-1">Freeze Tokens</div>
                    <div className="text-white font-bold text-sm">{tier.freezeTokens}</div>
                  </div>

                  {/* Loss Relief */}
                  <div className="bg-black/20 rounded-lg p-2 text-center">
                    <div className="text-white/80 text-xs mb-1">Loss Relief</div>
                    <div className="text-white font-bold text-sm">{tier.lossBack}</div>
                  </div>

                  {/* Exclusive Tournament */}
                  <div className="bg-black/20 rounded-lg p-2 text-center">
                    <div className="text-white/80 text-xs mb-1">Prestige Play</div>
                    <div className="text-white font-bold text-sm">{tier.exclusiveTournament}</div>
                  </div>

                  {/* WinZone Window */}
                  <div className="bg-black/20 rounded-lg p-2 text-center">
                    <div className="text-white/80 text-xs mb-1">WinZone Window</div>
                    <div className="text-white font-bold text-sm">{tier.winzoneWindow}</div>
                  </div>

                  {/* Deposit Codes */}
                  <div className="bg-black/20 rounded-lg p-2 text-center">
                    <div className="text-white/80 text-xs mb-1">Deposit Codes</div>
                    <div className="text-white font-bold text-sm">{tier.depositCodes}</div>
                  </div>

                  {/* Offline Delights */}
                  <div className="bg-black/20 rounded-lg p-2 text-center">
                    <div className="text-white/80 text-xs mb-1">Lifestyle Perks</div>
                    <div className="text-white font-bold text-xs leading-tight">{tier.offlineDelights}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex flex-col overflow-hidden">
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-white text-sm font-medium">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white/50 rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>25</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center px-6 py-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={navigateBack}
          className="text-white hover:bg-white/20 mr-4 bg-black/20 backdrop-blur-sm rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-white">VIP Levels</h1>
          <p className="text-white/80 text-sm">Unlock exclusive benefits as you level up</p>
        </div>
      </div>

      {/* Current Level Display */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 text-center">
          <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center">
            <img
              src={lionImg}
              alt="Lion"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="text-6xl">🦁</div>';
              }}
            />
          </div>
          <div className="text-white font-bold text-2xl mb-2">LION - Level 3</div>
          <div className="text-white/90 text-sm mb-4">Your Current VIP Level</div>

          <Button
            onClick={() => setShowComparison(true)}
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Compare All Levels
          </Button>
        </div>
      </div>

      {/* Level Benefits */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <h3 className="text-white font-bold text-xl mb-4">Your Current Benefits</h3>
        
        <div className="space-y-4">
          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold">🧊 Freeze Tokens</div>
                <div className="text-white/70 text-sm">Maintain streaks when you can't play</div>
              </div>
              <div className="text-white font-bold text-xl">2/week</div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold">💸 Loss Relief Campaign</div>
                <div className="text-white/70 text-sm">Get cashback on consecutive losses</div>
              </div>
              <div className="text-white font-bold text-xl">2% LB</div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold">⚡ WinZone Window</div>
                <div className="text-white/70 text-sm">Double VIP points boost duration</div>
              </div>
              <div className="text-white font-bold text-xl">4 hrs</div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold">🎁 Deposit Codes</div>
                <div className="text-white/70 text-sm">Multi-spin bonus codes</div>
              </div>
              <div className="text-white font-bold text-xl">Monthly</div>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold">🎬 Lifestyle Perks</div>
                <div className="text-white/70 text-sm">Entertainment subscriptions & gift cards</div>
              </div>
              <div className="text-white font-bold text-sm">ZEE5 + ₹150</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierDetailsScreen;
