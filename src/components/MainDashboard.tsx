import { useState, useEffect } from 'react';
import { Search, Bell, Menu, Gift, Users, Trophy, Star, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CelebrationModal from './CelebrationModal';
import NotificationModal from './NotificationModal';
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
  const { navigateTo } = useNavigation();

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
    <div className="h-full w-full bg-gradient-purple flex flex-col overflow-hidden relative">
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
            className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-game-purple font-bold">👤</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg px-3 py-1 border-2 border-gold/50 shadow-glow-gold">
            <Star className="w-4 h-4 text-gold animate-pulse-gold" />
            <span className="text-foreground font-bold">VIP 6</span>
            <div className="w-4 h-4 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-game-purple text-xs">👑</span>
            </div>
          </div>
          
          <button 
            onClick={() => navigateTo('addCash')}
            className="flex items-center space-x-1 bg-secondary/30 rounded-lg px-3 py-1 border border-warning hover:scale-105 transition-transform"
          >
            <Wallet className="w-4 h-4 text-warning" />
            <span className="text-foreground font-bold">₹20</span>
          </button>
          
          <button 
            onClick={() => setShowNotifications(true)}
            className="relative hover:scale-105 transition-transform"
          >
            <Bell className="w-6 h-6 text-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-warning rounded-full flex items-center justify-center">
              <span className="text-game-purple text-xs font-bold">3</span>
            </div>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse-gold">
            <span className="text-game-purple text-xs">🎯</span>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex px-6 py-2 space-x-6">
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
            className={`text-sm font-bold py-2 px-1 border-b-2 transition-colors ${
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
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => navigateTo('quests')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <Gift className="w-5 h-5 text-warning" />
            <span className="text-foreground text-sm font-medium">QUESTS</span>
          </button>
          
          <button 
            onClick={() => navigateTo('heatStreak')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <span className="w-5 h-5 text-orange-500">🔥</span>
            <span className="text-foreground text-sm font-medium">STREAK</span>
          </button>
          
          <button 
            onClick={() => navigateTo('rewardChests')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <span className="w-5 h-5 text-purple-500">📦</span>
            <span className="text-foreground text-sm font-medium">CHESTS</span>
          </button>
          
          <button 
            onClick={() => navigateTo('search')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <Search className="w-5 h-5 text-foreground" />
            <span className="text-foreground text-sm font-medium">SEARCH</span>
          </button>
          
          <button 
            onClick={() => navigateTo('leaderboard')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <Trophy className="w-5 h-5 text-foreground" />
            <span className="text-foreground text-sm font-medium">LEADERBOARD</span>
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
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 pb-24">
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
            
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {category.games.map((game, gameIndex) => (
                <div
                  key={gameIndex}
                  className="min-w-[120px] h-32 bg-gradient-card rounded-2xl overflow-hidden shadow-premium cursor-pointer transition-all hover:scale-105 hover:shadow-glow-gold relative animate-shine"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white text-xs font-bold text-center leading-tight">
                      {game.name}
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
      <div className="px-6 py-3">
        <div className="bg-gradient-to-r from-success to-success/80 rounded-2xl p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-success-foreground/20 flex items-center justify-center">
            <span className="text-success-foreground text-lg">💰</span>
          </div>
          <div className="flex-1">
            <div className="text-success-foreground font-bold">100% Bonus offer</div>
            <div className="text-success-foreground/80 text-sm">Get 100% bonus upto ₹50 on deposit.</div>
          </div>
          <Button size="sm" variant="ghost" className="text-success-foreground hover:bg-success-foreground/20">
            ✕
          </Button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-4 bg-game-purple-dark/80 border-t border-border z-50">
        {[
          { name: 'Streak', icon: '🔥', action: () => navigateTo('heatStreak') },
          { name: 'Chests', icon: '📦', action: () => navigateTo('rewardChests') },
          { name: '', icon: '🎯', isActive: true },
          { name: 'Refer', icon: '👥' },
          { name: 'Wallet', icon: '💳', action: () => navigateTo('addCash') }
        ].map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className={`flex flex-col items-center space-y-1 px-3 py-2 transition-transform hover:scale-105 ${
              item.isActive 
                ? 'bg-gradient-gold rounded-full p-3' 
                : ''
            }`}
          >
            <span className={`text-lg ${item.isActive ? 'text-game-purple' : 'text-foreground/70'}`}>
              {item.icon}
            </span>
            {item.name && (
              <span className={`text-xs ${item.isActive ? 'text-game-purple' : 'text-foreground/70'}`}>
                {item.name}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainDashboard;