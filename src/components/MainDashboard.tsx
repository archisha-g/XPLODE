import { useState, useEffect } from 'react';
import { Search, Bell, Menu, Gift, Trophy, Star, Wallet, Flame, Package, Home, RotateCcw, DollarSign, Zap, BookOpen, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CelebrationModal from './CelebrationModal';
import NotificationModal from './NotificationModal';
import SurpriseJackpotModal from './SurpriseJackpotModal';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

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
  const [showJackpot, setShowJackpot] = useState(false);
  const [jackpotGame, setJackpotGame] = useState('');
  const [jackpotMultiplier, setJackpotMultiplier] = useState(2);
  const [showFeaturesMenu, setShowFeaturesMenu] = useState(false);
  const { navigateTo } = useNavigation();

  const handleFeaturesMenuClick = () => {
    setShowFeaturesMenu(!showFeaturesMenu);
  };

  const handleFeatureSelect = (feature: string) => {
    setShowFeaturesMenu(false);
    switch (feature) {
      case 'jackpot':
        setJackpotGame('Poker');
        setJackpotMultiplier(3);
        setShowJackpot(true);
        break;
      case 'lessonStreak':
        navigateTo('lessonStreak');
        break;
      case 'lossback':
        navigateTo('lossbackCampaign');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Check if user just signed in from localStorage or context
    const userSignedIn = localStorage.getItem('userSignedIn');
    if (userSignedIn && !isSignedIn) {
      setIsSignedIn(true);
      setShowCelebration(true);
      // Clear the flag so celebration doesn't show again
      localStorage.removeItem('userSignedIn');
    }
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
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-foreground text-sm font-medium">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>65</span>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-game-purple-dark/30">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigateTo('profile')}
            className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center hover-lift hover-glow transition-all duration-300 animate-bounce-in"
          >
            <span className="text-game-purple font-bold">👤</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg px-2 py-1 border border-gold/30 hover-lift animate-slide-up">
            <Star className="w-3 h-3 text-gold animate-pulse" />
            <span className="text-foreground font-medium text-sm">12k</span>
          </div>

          <button
            onClick={() => navigateTo('addCash')}
            className="flex items-center space-x-1 bg-secondary/30 rounded-lg px-2 py-1 border border-warning hover-lift hover-glow transition-all duration-300 animate-slide-up"
            style={{animationDelay: '0.1s'}}
          >
            <Wallet className="w-3 h-3 text-warning" />
            <span className="text-foreground font-medium text-sm">₹20</span>
          </button>

          <button
            onClick={() => setShowNotifications(true)}
            className="relative hover-lift transition-all duration-300 p-1 animate-slide-up"
            style={{animationDelay: '0.2s'}}
          >
            <Bell className="w-5 h-5 text-foreground" />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-warning rounded-full flex items-center justify-center animate-pulse">
              <span className="text-game-purple text-xs font-bold">3</span>
            </div>
          </button>

          <div className="w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center hover-lift animate-slide-up" style={{animationDelay: '0.3s'}}>
            <span className="text-game-purple text-xs">🎯</span>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex px-6 py-2 space-x-4">
        {['WINZOMANIA', 'DIWALI OFFER', 'PRIVATE LOBBY'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              if (tab === 'PRIVATE LOBBY') {
                navigateTo('privateLobby');
              } else {
                setActiveTab(tab);
              }
            }}
            className={`text-xs font-bold py-2 px-1 border-b-2 transition-colors ${
              activeTab === tab
                ? 'text-warning border-warning'
                : 'text-foreground/70 border-transparent hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Quick actions */}
      <div className="flex items-center justify-between px-6 py-3 bg-secondary/20">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigateTo('quests')}
            className="flex items-center space-x-1 hover-lift transition-all duration-300 animate-slide-up"
          >
            <Gift className="w-4 h-4 text-warning animate-pulse" />
            <span className="text-foreground text-xs font-medium">QUESTS</span>
          </button>

          <button
            onClick={() => navigateTo('search')}
            className="flex items-center space-x-1 hover-lift transition-all duration-300 animate-slide-up"
            style={{animationDelay: '0.1s'}}
          >
            <Search className="w-4 h-4 text-foreground" />
            <span className="text-foreground text-xs font-medium">SEARCH</span>
          </button>

          <button
            onClick={() => navigateTo('leaderboard')}
            className="flex items-center space-x-1 hover-lift transition-all duration-300 animate-slide-up"
            style={{animationDelay: '0.2s'}}
          >
            <Trophy className="w-4 h-4 text-foreground" />
            <span className="text-foreground text-xs font-medium">LEADERS</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Menu className="w-5 h-5 text-foreground" />
          <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
            <span className="text-game-purple text-xs font-bold">i</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 pb-28">
        {activeTab === 'DIWALI OFFER' ? (
          <div className="relative min-h-64 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-2xl p-6 overflow-hidden">
            {/* Floating emojis in background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-8 text-2xl animate-float">🪔</div>
              <div className="absolute top-16 right-12 text-xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
              <div className="absolute bottom-16 left-12 text-2xl animate-pulse" style={{animationDelay: '1s'}}>🎆</div>
              <div className="absolute bottom-8 right-8 text-xl animate-float" style={{animationDelay: '1.5s'}}>🎯</div>
            </div>
            
            <div className="relative z-10 text-center py-8">
              <h2 className="text-white text-2xl font-bold mb-4">🪔 Diwali Special 🎆</h2>
              <p className="text-white/80 mb-6">Celebrate with amazing offers and rewards!</p>
              <Button 
                onClick={() => navigateTo('diwaliOffer')}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-2xl shadow-glow-gold text-lg animate-pulse-gold"
              >
                🪔 Explore Diwali Offers 🎆
              </Button>
            </div>
          </div>
        ) : (
          gameCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{category.icon}</span>
              <h3 className="text-foreground font-bold text-lg">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {category.games.map((game, gameIndex) => (
                <div
                  key={gameIndex}
                  className="aspect-square bg-gradient-card rounded-2xl overflow-hidden shadow-lg cursor-pointer hover-lift hover-glow relative animate-slide-up group"
                  style={{animationDelay: `${gameIndex * 0.1}s`}}
                >
                  <div className="absolute inset-0">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-1 left-1 right-1">
                    <div className="text-white text-xs font-bold text-center leading-tight bg-black/50 rounded px-1 py-0.5 group-hover:bg-purple-600/70 transition-colors duration-300">
                      {game.name}
                    </div>
                  </div>

                  {/* Play icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center animate-bounce-in">
                      <span className="text-purple-600 text-lg">▶️</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
        )}
      </div>

      {/* Promotional banner */}
      <div className="px-6 py-1">
        <div className="bg-gradient-to-r from-success to-success/80 rounded-lg p-2 flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-success-foreground/20 flex items-center justify-center">
            <span className="text-success-foreground text-xs">💰</span>
          </div>
          <div className="flex-1">
            <div className="text-success-foreground font-bold text-xs">100% Bonus offer</div>
            <div className="text-success-foreground/80 text-xs">Get 100% bonus upto ₹50</div>
          </div>
          <Button size="sm" variant="ghost" className="text-success-foreground hover:bg-success-foreground/20 p-0.5 text-xs">
            ✕
          </Button>
        </div>
      </div>

      {/* Bottom navigation - WinZO style - Fixed position */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[420px] flex items-center justify-between px-4 py-3 bg-gradient-to-r from-game-purple-dark via-game-purple to-game-purple-dark backdrop-blur-md border-t-2 border-gold/30 z-[100] shadow-lg">
        {[
          { name: 'Heat Streak', icon: 'Streak', action: () => navigateTo('heatStreak'), color: 'text-orange-400' },
          { name: 'Reward Chests', icon: 'Chests', action: () => navigateTo('rewardChests'), color: 'text-yellow-400' },
          { name: 'Home', icon: 'Home', isActive: true, color: 'text-white' },
          { name: 'Features', icon: 'Features', action: () => setShowFeaturesMenu(!showFeaturesMenu), color: 'text-purple-400' },
          { name: 'Add Cash', icon: 'Wallet', action: () => navigateTo('addCash'), color: 'text-green-400' }
        ].map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className={`flex flex-col items-center space-y-1 flex-1 py-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              item.isActive
                ? 'bg-gradient-to-r from-gold to-yellow-400 rounded-2xl mx-2 p-3 shadow-lg animate-bounce-in'
                : 'hover:bg-white/10 rounded-xl mx-1'
            }`}
          >
            <div className={`transition-all duration-300 ${
              item.isActive
                ? 'text-game-purple animate-pulse'
                : `${item.color} hover:scale-125`
            }`}>
              {item.icon === 'Streak' && <Flame className="w-5 h-5" />}
              {item.icon === 'Chests' && <Package className="w-5 h-5" />}
              {item.icon === 'Home' && <Home className="w-5 h-5" />}
              {item.icon === 'Features' && <Menu className="w-5 h-5" />}
              {item.icon === 'Wallet' && <DollarSign className="w-5 h-5" />}
            </div>
            <span className={`text-xs font-medium transition-all duration-300 ${
              item.isActive
                ? 'text-game-purple font-bold'
                : 'text-white/80 hover:text-white'
            }`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* Features Drop-up Menu */}
      {showFeaturesMenu && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[390px] bg-game-purple-dark/95 backdrop-blur-md rounded-2xl border-2 border-gold/30 z-[110] shadow-2xl animate-slide-up">
          <div className="p-4">
            <h3 className="text-white font-bold text-lg mb-4 text-center">🎯 Special Features</h3>
            <div className="space-y-3">

              {/* Surprise Jackpot */}
              <button
                onClick={() => handleFeatureSelect('jackpot')}
                className="w-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-400/30 hover:bg-yellow-500/30 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <div>
                    <div className="text-white font-bold">Surprise Jackpot</div>
                    <div className="text-white/70 text-sm">Random reward multipliers</div>
                  </div>
                </div>
              </button>

              {/* Lesson Streak */}
              <button
                onClick={() => handleFeatureSelect('lessonStreak')}
                className="w-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-white font-bold">Learn & Win</div>
                    <div className="text-white/70 text-sm">Daily strategy lessons</div>
                  </div>
                </div>
              </button>

              {/* Lossback Campaign */}
              <button
                onClick={() => handleFeatureSelect('lossback')}
                className="w-full bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-400/30 hover:bg-red-500/30 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="text-white font-bold">Lossback Campaign</div>
                    <div className="text-white/70 text-sm">Get rewards for losses</div>
                  </div>
                </div>
              </button>

              {/* Referral Chains */}
              <button
                onClick={() => setShowFeaturesMenu(false)}
                className="w-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-white font-bold">Referral Chains</div>
                    <div className="text-white/70 text-sm">Long-term friend rewards</div>
                  </div>
                </div>
              </button>

            </div>
          </div>
        </div>
      )}

      {/* Surprise Jackpot Modal */}
      <SurpriseJackpotModal
        isOpen={showJackpot}
        onClose={() => setShowJackpot(false)}
        gameType={jackpotGame}
        multiplier={jackpotMultiplier}
      />
    </div>
  );
};

export default MainDashboard;