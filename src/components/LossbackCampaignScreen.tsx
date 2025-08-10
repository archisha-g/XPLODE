import { useState } from 'react';
import { ArrowLeft, RotateCcw, TrendingDown, Gift, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const LossbackCampaignScreen = () => {
  const { navigateBack } = useNavigation();
  const [showReward, setShowReward] = useState(false);

  // Simulated user data
  const consecutiveLosses = 7;
  const totalLossAmount = 250;
  const lossbackPercentage = 15; // 15% for regular users, 25% for Platinum
  const isPlatinum = true;
  const platinumBonus = isPlatinum ? 10 : 0;
  const finalPercentage = lossbackPercentage + platinumBonus;
  const rewardAmount = Math.floor((totalLossAmount * finalPercentage) / 100);

  const handleClaimReward = () => {
    setShowReward(true);
    setTimeout(() => setShowReward(false), 3000);
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-red-600 via-orange-500 to-red-700 flex flex-col overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 text-6xl opacity-10 animate-pulse">💔</div>
        <div className="absolute bottom-32 right-12 text-4xl opacity-15 animate-bounce">🔄</div>
        <div className="absolute top-24 right-16 text-3xl opacity-10 animate-float" style={{animationDelay: '0.5s'}}>💰</div>
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
      <div className="flex items-center px-6 py-3 relative z-10">
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
            <RotateCcw className="w-6 h-6 mr-2 text-orange-300" />
            Lossback Campaign
          </h1>
          <p className="text-white/80 text-sm">Get rewards for your losses!</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 pb-24 relative z-10">
        
        {/* Campaign Info */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-white font-bold text-xl mb-2">We Feel Your Pain!</h2>
            <p className="text-white/80 text-sm">Consecutive losses can be frustrating. Here's something to cheer you up!</p>
          </div>

          {/* Loss Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-500/20 rounded-xl p-4 text-center border border-red-400/30">
              <TrendingDown className="w-8 h-8 text-red-300 mx-auto mb-2" />
              <div className="text-white font-bold text-lg">{consecutiveLosses}</div>
              <div className="text-white/70 text-xs">Consecutive Losses</div>
            </div>
            <div className="bg-orange-500/20 rounded-xl p-4 text-center border border-orange-400/30">
              <div className="text-2xl mb-2">💸</div>
              <div className="text-white font-bold text-lg">₹{totalLossAmount}</div>
              <div className="text-white/70 text-xs">Total Loss Amount</div>
            </div>
          </div>

          {/* Lossback Calculation */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium">Base Lossback</span>
              <span className="text-green-300 font-bold">{lossbackPercentage}%</span>
            </div>
            
            {isPlatinum && (
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium flex items-center">
                  <Crown className="w-4 h-4 mr-1 text-yellow-400" />
                  Platinum Bonus
                </span>
                <span className="text-yellow-300 font-bold">+{platinumBonus}%</span>
              </div>
            )}
            
            <div className="border-t border-white/20 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">Total Lossback</span>
                <span className="text-green-300 font-bold text-lg">{finalPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Reward Amount */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 text-center border border-yellow-400/30 mb-6">
            <Gift className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
            <div className="text-white font-bold text-2xl mb-2">₹{rewardAmount} XP</div>
            <div className="text-white/80 text-sm">Your Lossback Reward</div>
          </div>

          {/* Claim Button */}
          <Button
            onClick={handleClaimReward}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Gift className="w-5 h-5 mr-2" />
            Claim Your Lossback Reward
          </Button>
        </div>

        {/* How it Works */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
          <h3 className="text-white font-bold text-lg mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            How Lossback Campaign Works
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <div className="text-white font-medium">Trigger Condition</div>
                <div className="text-white/70 text-sm">5+ consecutive losses in a day or session</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <div className="text-white font-medium">Reward Calculation</div>
                <div className="text-white/70 text-sm">Get back a percentage of your entry fees as XP or tokens</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <div>
                <div className="text-white font-medium">Platinum Advantage</div>
                <div className="text-white/70 text-sm">Platinum players get higher cashback percentages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reward Claim Animation */}
      {showReward && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-8 text-center animate-scale-in shadow-2xl max-w-sm mx-4">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <div className="text-white font-bold text-2xl mb-2">Reward Claimed!</div>
            <div className="text-white/90 text-lg mb-4">₹{rewardAmount} XP added to your account</div>
            <div className="text-white/80 text-sm">Keep playing and good luck! 🍀</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LossbackCampaignScreen;
