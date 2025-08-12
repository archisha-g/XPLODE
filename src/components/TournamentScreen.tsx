import { useState, useEffect } from 'react';
import { ArrowLeft, HelpCircle, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const TournamentScreen = () => {
  const { navigateBack } = useNavigation();
  const [timeLeft, setTimeLeft] = useState({ hours: 9, minutes: 4, seconds: 10 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

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
          <span>23</span>
        </div>
      </div>

      {/* Header with Profile and Balance */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-2">
          {/* Profile Button */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">👤</span>
            </div>
          </div>

          {/* Diamonds */}
          <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg px-2 py-1 shadow-md border border-blue-400/30 h-10">
            <span className="text-white text-lg">💎</span>
            <span className="text-white font-bold text-sm">0</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Cash Balance */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg px-3 py-2 border-2 border-yellow-500 shadow-md h-10">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 text-sm font-bold">₹</span>
              <span className="text-white font-bold text-sm">20</span>
            </div>
          </div>

          {/* Notifications */}
          <button className="text-white p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 w-10 h-10 flex items-center justify-center">
            <span className="text-white text-sm">🔔</span>
          </button>

          {/* Target/Achievement */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center shadow-md">
            <span className="text-white text-sm">🎯</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center px-6 py-3">
        <div className="flex bg-black/30 rounded-xl p-1">
          <button className="px-6 py-2 text-white/60 text-sm font-medium rounded-lg">WORLD WAR</button>
          <button className="px-6 py-2 bg-yellow-500 text-black text-sm font-bold rounded-lg">TOURNAMENT</button>
          <button className="px-6 py-2 text-white/60 text-sm font-medium rounded-lg">FANTASY LEAGUE</button>
        </div>
      </div>

      {/* Action Buttons - Equal Sizes */}
      <div className="flex items-center justify-between px-6 py-3">
        <button
          onClick={navigateBack}
          className="flex items-center justify-center space-x-1 bg-black/30 rounded-xl px-3 py-2 hover:bg-black/40 transition-colors w-[80px] h-[36px]"
        >
          <ArrowLeft className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-medium">BACK</span>
        </button>

        <div className="flex items-center space-x-2">
          <button className="flex items-center justify-center space-x-1 bg-black/30 rounded-xl px-3 py-2 hover:bg-black/40 transition-colors w-[80px] h-[36px]">
            <HelpCircle className="w-3 h-3 text-white" />
            <span className="text-white text-xs font-medium">HOW TO</span>
          </button>

          <button className="flex items-center justify-center space-x-1 bg-black/30 rounded-xl px-3 py-2 hover:bg-black/40 transition-colors w-[80px] h-[36px]">
            <Clock className="w-3 h-3 text-white" />
            <span className="text-white text-xs font-medium">MY TOURS</span>
          </button>

          <button className="flex items-center justify-center space-x-1 bg-black/30 rounded-xl px-3 py-2 hover:bg-black/40 transition-colors w-[80px] h-[36px]">
            <Filter className="w-3 h-3 text-white" />
            <span className="text-white text-xs font-medium">FILTERS</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* EXCLUSIVE TOURNAMENTS Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-blue-400 text-lg">🔥</span>
            <h2 className="text-white font-bold text-lg">EXCLUSIVE TOURNAMENTS</h2>
          </div>

          {/* Ludo Championship Tournament */}
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 rounded-2xl p-4 border border-purple-400/30 shadow-2xl relative overflow-hidden">
            {/* TOP SCORE Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-2 py-1">
              <span className="text-black font-bold text-xs">🏆 TOP SCORE</span>
            </div>

            {/* Ludo Icon and MS Dhoni - Top Right */}
            <div className="absolute top-3 right-3 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-yellow-400/50">
                <div className="w-full h-full bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎲</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-yellow-400/50">
                <img
                  src="https://i.pinimg.com/originals/d4/f2/fb/d4f2fbac936cfdc1e311e2fa1cd71732.jpg"
                  alt="MS Dhoni"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center"><span class="text-white font-bold text-xs">MSD</span></div>';
                  }}
                />
              </div>
            </div>

            {/* Main Content - Left Side */}
            <div className="mt-12 mb-4 flex">
              <div className="flex-1">
                <div className="text-white font-bold text-lg mb-1">Ludo Championship</div>
                <div className="text-yellow-400 font-bold text-sm mb-1">PRIZE POOL</div>
                <div className="text-yellow-400 font-bold text-2xl mb-2">₹50L</div>
                <div className="text-white/90 text-xs mb-1">1st Prize</div>
                <div className="text-white font-bold text-base mb-2">₹40000</div>
                <div className="text-white/70 text-xs">Exclusively for Dragon level</div>
                <div className="text-white/70 text-xs">
                  Get a chance to play with{' '}
                  <span className="text-yellow-400 font-bold bg-yellow-400/20 px-1 rounded">MS Dhoni</span>
                </div>
              </div>

              {/* Right Side - Timer and Locked Button */}
              <div className="flex flex-col justify-between items-end ml-4">
                {/* Timer */}
                <div className="bg-black/40 rounded-lg px-3 py-1 backdrop-blur-sm mb-4">
                  <div className="text-white text-xs text-center">Ends in</div>
                  <div className="text-yellow-400 font-bold text-sm text-center">
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </div>
                </div>

                {/* Locked Button */}
                <div className="flex flex-col items-center">
                  <button className="bg-gray-600 text-gray-300 px-3 py-2 rounded-lg font-bold text-xs cursor-not-allowed mb-1">
                    LOCKED
                  </button>
                  <div className="text-white/50 text-xs text-center">Dragon Level Required</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UPCOMING TOURNAMENTS Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-green-400 text-lg">⭐</span>
            <h2 className="text-white font-bold text-lg">UPCOMING TOURNAMENTS</h2>
          </div>

          {/* Sample Upcoming Tournament 1 */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-600/30 shadow-xl mb-3 relative">
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-2 py-1">
              <span className="text-black font-bold text-xs">🏆 TOP SCORE</span>
            </div>

            <div className="absolute top-3 right-3 bg-red-600 rounded-full px-2 py-1">
              <span className="text-white font-bold text-xs">ENDED</span>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-500 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🎮</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-base mb-1">LUDO</div>
                  <div className="text-white/70 text-xs mb-1">Prize Pool</div>
                  <div className="text-white font-bold text-lg mb-1">₹12.5</div>
                  <div className="text-white/50 text-xs">7 of 8 Spots Left</div>
                  <div className="text-white/50 text-xs">1st Prize ₹7 • 1 ROUND • Multi Entry</div>
                </div>
              </div>

              <button className="bg-gray-600 text-gray-300 px-3 py-2 rounded-lg font-bold text-xs cursor-not-allowed ml-3">
                CLOSED
              </button>
            </div>
          </div>

          {/* Sample Upcoming Tournament 2 */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-600/30 shadow-xl relative">
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-2 py-1">
              <span className="text-black font-bold text-xs">🏆 TOP SCORE</span>
            </div>

            <div className="absolute top-3 right-3 bg-red-600 rounded-full px-2 py-1">
              <span className="text-white font-bold text-xs">ENDED</span>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-500 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🐍</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-base mb-1">SNAKES & LADDERS</div>
                  <div className="text-white/70 text-xs mb-1">Prize Pool</div>
                  <div className="text-white font-bold text-lg mb-1">₹12.5</div>
                  <div className="text-white/50 text-xs">7 of 8 Spots Left</div>
                  <div className="text-white/50 text-xs">1st Prize ₹7 • 1 ROUND • Multi Entry</div>
                </div>
              </div>

              <button className="bg-gray-600 text-gray-300 px-3 py-2 rounded-lg font-bold text-xs cursor-not-allowed ml-3">
                CLOSED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentScreen;
