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
    <div className="h-full w-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 flex flex-col overflow-hidden relative">


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
      <div className="flex items-center px-6 py-4 relative z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={navigateBack}
          className="text-white hover:bg-white/20 mr-4 bg-black/20 backdrop-blur-sm rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white flex items-center">
            💜 Winzone Bounceback
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 pb-24 relative z-10">

        {/* Professional Info */}
        <div className="bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-white font-bold text-xl mb-3">Having a Bad Streak?</h2>
          </div>

          {/* Reward Cards */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {/* Tournament Ticket */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 text-center border border-blue-400/30 shadow-lg">
              <div className="text-3xl mb-3">🎫</div>
              <div className="text-white font-bold text-lg mb-2">Free Tournament Ticket</div>
              <div className="text-white/80 text-sm mb-1">Ludo Tournament</div>
              <div className="text-white/80 text-sm">Prize Pool: Rs 400</div>
            </div>

            {/* Bonus Deposit Code */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 text-center border border-green-400/30 shadow-lg">
              <div className="text-3xl mb-3">💰</div>
              <div className="text-white font-bold text-lg mb-2">Deposit Code: BONUS20</div>
              <div className="text-white/80 text-sm">Get 20% extra on your next deposit</div>
            </div>

            {/* Cashback */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 text-center border border-purple-400/30 shadow-lg">
              <div className="text-3xl mb-3">💜</div>
              <div className="text-white font-bold text-lg mb-2">Rs 50 Cashback</div>
              <div className="text-white/80 text-sm">Direct cashback to your wallet</div>
            </div>
          </div>

          {/* Claim Button */}
          <Button
            onClick={handleClaimReward}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            <span className="text-2xl mr-3">🚀</span>
            Unlock Your Rewards
          </Button>
        </div>


      </div>

      {/* Reward Claim Animation */}
      {showReward && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-10 text-center animate-scale-in shadow-2xl max-w-sm mx-4 border-2 border-white/20">
            <div className="text-7xl mb-6 animate-bounce">🚀</div>
            <div className="text-white font-bold text-3xl mb-4">Rewards Unlocked!</div>
            <div className="text-white/90 text-lg mb-6">Your comeback journey starts now!</div>
            <div className="text-white/80 text-sm">Time to turn things around! 💜</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LossbackCampaignScreen;
