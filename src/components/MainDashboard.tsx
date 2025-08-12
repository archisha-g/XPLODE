import { useState, useEffect } from 'react';
import { Search, Bell, Gift, Trophy, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CelebrationModal from './CelebrationModal';
import NotificationModal from './NotificationModal';
import RealTimeClock from './RealTimeClock';

import { useNavigation } from './NavigationProvider';


// Import game images
import callbreakImg from '@/assets/callbreak.jpg';
import rummyImg from '@/assets/rummy.jpg';
import solitaireImg from '@/assets/solitaire.jpg';
import snakesLaddersImg from '@/assets/snakes-ladders.jpg';
import worldWarImg from '@/assets/world-war.jpg';
import liquidWarsImg from '@/assets/liquid-wars.jpg';
import pokerImg from '@/assets/poker.jpg';
import ludoImg from '@/assets/ludo.jpg';
import carromImg from '@/assets/carrom.jpg';

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('WINZOMANIA');
  const [showCelebration, setShowCelebration] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);


  const { navigateTo } = useNavigation();





  useEffect(() => {
    // Remove sign-in popup functionality
  }, [isSignedIn]);

  const gameCategories = [
    {
      title: 'TRENDING',
      icon: '🔥',
      games: [
        { name: 'CALLBREAK', image: callbreakImg },
        { name: 'RUMMY', image: rummyImg },
        { name: 'SOLITAIRE', image: solitaireImg }
      ]
    },
    {
      title: 'FOR YOU',
      icon: '⭐',
      games: [
        { name: 'SNAKES & LADDERS', image: snakesLaddersImg },
        { name: 'WORLD WAR', image: worldWarImg },
        { name: 'LIQUID WARS', image: liquidWarsImg }
      ]
    },
    {
      title: 'POPULAR ON WINZO',
      icon: '⭐',
      games: [
        { name: 'POKER', image: pokerImg },
        { name: 'LUDO', image: ludoImg },
        { name: 'MINI SNAKES & LADDERS', image: snakesLaddersImg },
        { name: 'CARROM', image: carromImg }
      ]
    }
  ];


  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col overflow-hidden relative min-h-screen">
      {/* Modals */}
      <CelebrationModal 
        isOpen={showCelebration} 
        onClose={() => setShowCelebration(false)} 
      />
      <NotificationModal 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
      {/* Status bar - WinZO Style with Real Time */}
      <div className="flex items-center justify-between px-4 py-2 text-white text-sm">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white/50 rounded"></div>
          </div>
          <span className="ml-1">📶</span>
          <div className="bg-green-500 px-1 rounded text-xs font-bold">51</div>
        </div>
      </div>

      {/* Header with Profile and Balance - Professional Aligned Style */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          {/* Profile Button */}
          <button
            onClick={() => navigateTo('profile')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">👤</span>
            </div>
          </button>

          {/* Diamonds */}
          <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg px-2 py-1 shadow-md border border-blue-400/30 h-10">
            <span className="text-white text-lg">💎</span>
            <span className="text-white font-bold text-sm">0</span>
          </div>

          {/* Heat Streak Button */}
          <button
            onClick={() => navigateTo('heatStreak')}
            className="flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg px-2 py-1 shadow-md border border-orange-400/30 hover:shadow-orange-400/50 transition-all duration-300 hover:scale-105 h-10"
          >
            <Flame className="w-3 h-3 text-white" />
            <span className="text-white font-bold text-xs">STREAK</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {/* Cash Balance */}
          <button
            onClick={() => navigateTo('addCash')}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg px-3 py-2 border-2 border-yellow-500 shadow-md hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 h-10"
          >
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 text-sm font-bold">₹</span>
              <span className="text-white font-bold text-sm">20</span>
            </div>
          </button>

          {/* Notifications */}
          <button
            onClick={() => setShowNotifications(true)}
            className="text-white p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 w-10 h-10 flex items-center justify-center"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* Target/Achievement */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center shadow-md hover:shadow-red-400/50 transition-all duration-300 hover:scale-105">
            <span className="text-white text-sm">🎯</span>
          </div>
        </div>
      </div>

      {/* Navigation tabs - WinZO Style */}
      <div className="flex px-4 py-3 space-x-2">
        {['WINZOMANIA', 'WORLD WAR', 'TOURNAMENT'].map((tab, index) => (
          <button
            key={tab}
            onClick={() => {
              if (tab === 'TOURNAMENT') {
                navigateTo('tournament');
              } else {
                setActiveTab(tab);
              }
            }}
            className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-lg ${
              (index === 0 && activeTab === 'WINZOMANIA') || tab === 'TOURNAMENT'
                ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Action Bar - Professional Proportionate Style */}
      <div className="flex items-center justify-center px-3 py-3 bg-gradient-to-r from-black/30 to-gray-900/30 backdrop-blur-sm">
        <div className="flex items-center justify-between w-full max-w-sm bg-gray-800/80 rounded-xl p-2 shadow-xl border border-gray-600/50">
          <button
            onClick={() => navigateTo('quests')}
            className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg py-2 px-2 border border-yellow-500/30 hover:bg-yellow-500/30 transition-all duration-300 hover:scale-105"
          >
            <Gift className="w-4 h-4 text-yellow-400 mb-1" />
            <span className="text-white text-xs font-bold">BENEFITS</span>
          </button>

          <button
            onClick={() => navigateTo('search')}
            className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg py-2 px-2 mx-1 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <Search className="w-4 h-4 text-blue-400 mb-1" />
            <span className="text-white text-xs font-bold">SEARCH</span>
          </button>

          <button
            onClick={() => navigateTo('leaderboard')}
            className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg py-2 px-2 border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 hover:scale-105"
          >
            <Trophy className="w-4 h-4 text-green-400 mb-1" />
            <span className="text-white text-xs font-bold">LEADERBOARD</span>
          </button>
        </div>
      </div>

      {/* Main content - WinZO Style */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 pb-28">
        {/* TRENDING Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-bold text-xl tracking-wide">TRENDING</h3>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[
              { name: 'CALLBREAK', color: 'border-green-400', bg: 'from-green-600 to-green-800', image: callbreakImg },
              { name: 'RUMMY', color: 'border-yellow-400', bg: 'from-yellow-600 to-orange-600', image: rummyImg },
              { name: 'SOLITAIRE', color: 'border-purple-400', bg: 'from-purple-600 to-pink-600', image: solitaireImg }
            ].map((game, index) => (
              <div
                key={index}
                className={`min-w-[140px] aspect-[4/3] bg-gradient-to-br ${game.bg} rounded-3xl border-3 ${game.color} overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-${game.color.split('-')[1]}-400/50 relative group`}
              >
                <div className="absolute inset-0">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-4">
                  <div className="text-white font-bold text-sm drop-shadow-lg">{game.name}</div>
                  <div className="text-white/90 text-xs bg-black/30 rounded-full px-3 py-1 backdrop-blur-sm">Play Now</div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* FOR YOU Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">⭐</span>
            </div>
            <h3 className="text-white font-bold text-xl tracking-wide">FOR YOU</h3>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[
              { name: 'SNAKES & LADDERS', color: 'border-blue-400', bg: 'from-blue-600 to-cyan-600', image: snakesLaddersImg },
              { name: 'WORLD WAR', color: 'border-red-400', bg: 'from-red-600 to-orange-600', image: worldWarImg },
              { name: 'LIQO', color: 'border-indigo-400', bg: 'from-indigo-600 to-purple-600', image: liquidWarsImg }
            ].map((game, index) => (
              <div
                key={index}
                className={`min-w-[140px] aspect-[4/3] bg-gradient-to-br ${game.bg} rounded-3xl border-3 ${game.color} overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-${game.color.split('-')[1]}-400/50 relative group`}
              >
                <div className="absolute inset-0">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                <div className="relative h-full flex flex-col justify-between p-4">
                  <div className="text-white font-bold text-sm drop-shadow-lg">{game.name}</div>
                  <div className="text-white/90 text-xs bg-black/30 rounded-full px-3 py-1 backdrop-blur-sm">Play Now</div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* POPULAR ON WINZO Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">⭐</span>
            </div>
            <h3 className="text-white font-bold text-xl tracking-wide">POPULAR ON WINZO</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'POKER', color: 'border-red-400', bg: 'from-red-600 to-pink-600', number: '1', image: pokerImg },
              { name: 'LUDO', color: 'border-pink-400', bg: 'from-pink-600 to-purple-600', number: '2', image: ludoImg },
              { name: 'SNAKES & LADDERS', color: 'border-cyan-400', bg: 'from-cyan-600 to-blue-600', number: '3', image: snakesLaddersImg },
              { name: 'CARROM', color: 'border-yellow-400', bg: 'from-yellow-600 to-orange-600', number: '4', image: carromImg }
            ].map((game, index) => (
              <div
                key={index}
                className={`aspect-[4/3] bg-gradient-to-br ${game.bg} rounded-3xl border-3 ${game.color} overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-${game.color.split('-')[1]}-400/50 relative group`}
              >
                <div className="absolute inset-0">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-400">
                  <span className="text-black font-bold text-sm">{game.number}</span>
                </div>

                <div className="relative h-full flex flex-col justify-end p-4">
                  <div className="text-white font-bold text-sm drop-shadow-lg">{game.name}</div>
                  <div className="text-white/90 text-xs bg-black/30 rounded-full px-3 py-1 backdrop-blur-sm">Play Now</div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional banner - WinZO Callbreak Style */}
      <div className="px-4 py-2">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-3 flex items-center space-x-3 border border-yellow-400">
          <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center">
            <span className="text-white text-lg">🃏</span>
          </div>
          <div className="flex-1">
            <div className="text-white font-bold text-sm">₹2 Free Ticket of Callbreak</div>
            <div className="text-white/90 text-xs">You can play ₹2 callbreak game for Free. Play Now</div>
          </div>
          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-1 text-lg">
            ✕
          </Button>
        </div>
      </div>

      {/* WinZo Bounceback Button - Heart Only */}
      <div className="fixed bottom-20 right-4 z-50">
        <button
          onClick={() => navigateTo('lossbackCampaign')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-12 h-12 shadow-lg hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105 border border-purple-400/50 flex items-center justify-center"
        >
          <span className="text-white text-lg">💜</span>
        </button>
      </div>

      {/* Bottom navigation - Professional equal-sized buttons */}
      <div className="bottom-nav-fixed flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl border-t border-gray-700/50 shadow-2xl">
        {[
          { name: 'Sladder', icon: '📊', action: () => navigateTo('leaderboard') },
          { name: 'World War', icon: '⚔️', action: () => navigateTo('heatStreak') },
          { name: 'Home', icon: '🏠', isCenter: true, action: () => {} },
          { name: 'Refer', icon: '👥', action: () => navigateTo('profile') },
          { name: 'Wallet', icon: '💰', action: () => navigateTo('addCash') }
        ].map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className={`flex flex-col items-center justify-center w-16 h-16 transition-all duration-300 ${
              item.isCenter
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl border-2 border-yellow-300 hover:shadow-yellow-400/50 hover:scale-105'
                : 'hover:scale-105 hover:bg-gray-800/50 rounded-xl'
            }`}
          >
            <div className={`text-xl transition-all duration-300 ${item.isCenter ? 'text-white' : 'text-white/90 hover:text-white'}`}>
              {item.icon}
            </div>
            <span className={`text-xs font-medium mt-1 ${item.isCenter ? 'text-white' : 'text-white/70'}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>




    </div>
  );
};

export default MainDashboard;