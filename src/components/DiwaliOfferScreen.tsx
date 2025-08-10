import { useState } from 'react';
import { ArrowLeft, Star, Gift, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const DiwaliOfferScreen = () => {
  const { navigateBack } = useNavigation();
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const diwaliOffers = [
    {
      id: '1',
      title: 'Diwali Jackpot Bonanza',
      description: 'Win up to ₹1,00,000 in our special Diwali tournaments',
      discount: '500% Bonus',
      originalPrice: '₹100',
      offerPrice: '₹20',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: '2',
      title: 'Lakshmi\'s Fortune Wheel',
      description: 'Spin daily for guaranteed rewards during Diwali week',
      discount: 'Free Spins',
      originalPrice: '₹50',
      offerPrice: 'FREE',
      icon: '🎡',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: '3',
      title: 'Firecracker Cash Rush',
      description: 'Every game you play multiplies your winnings by 2x',
      discount: '2x Multiplier',
      originalPrice: '₹200',
      offerPrice: '₹99',
      icon: '🎆',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const festiveBonuses = [
    { title: 'Diwali Login Bonus', xp: 1000, days: 7, current: 3 },
    { title: 'Rangoli Challenge', xp: 2500, completed: true },
    { title: 'Diya Collection', xp: 500, progress: 75 }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 flex flex-col overflow-hidden relative">
      {/* Festive decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🪔</div>
        <div className="absolute top-20 right-16 text-3xl animate-pulse">✨</div>
        <div className="absolute top-32 left-20 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎆</div>
        <div className="absolute bottom-40 right-10 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>🪔</div>
        <div className="absolute bottom-60 left-12 text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>✨</div>
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
          <h1 className="text-2xl font-bold text-white">🪔 Diwali Special Offers</h1>
          <p className="text-white/80 text-sm">Festival of lights, festival of wins!</p>
        </div>
      </div>

      {/* Festival Progress */}
      <div className="px-6 py-4">
        <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold">🎊 Festival Progress</h3>
            <span className="text-white/80 text-sm">5 days left</span>
          </div>
          
          <div className="space-y-3">
            {festiveBonuses.map((bonus, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{bonus.title}</div>
                  <div className="text-white/70 text-xs">+{bonus.xp} XP</div>
                </div>
                <div className="flex items-center space-x-2">
                  {bonus.completed ? (
                    <span className="text-green-400 text-sm">✓ Complete</span>
                  ) : bonus.progress ? (
                    <div className="w-16">
                      <Progress value={bonus.progress} className="h-1" />
                    </div>
                  ) : (
                    <span className="text-white/60 text-xs">{bonus.current || 0}/{bonus.days}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <h3 className="text-white font-bold text-lg mb-4">🎁 Limited Time Offers</h3>
        
        <div className="space-y-4">
          {diwaliOffers.map((offer) => (
            <div
              key={offer.id}
              className={`bg-gradient-to-r ${offer.color} rounded-2xl p-4 shadow-glow-gold cursor-pointer transition-all hover:scale-105`}
              onClick={() => setSelectedOffer(offer.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="text-4xl">{offer.icon}</div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg">{offer.title}</h4>
                  <p className="text-white/90 text-sm mb-3">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="bg-white/20 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        {offer.discount}
                      </span>
                      <div>
                        <span className="text-white/60 line-through text-sm">{offer.originalPrice}</span>
                        <span className="text-white font-bold text-lg ml-2">{offer.offerPrice}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-white text-game-purple hover:bg-white/90 font-bold"
                    >
                      Claim Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Festival Games */}
        <div className="mt-6">
          <h3 className="text-white font-bold text-lg mb-4">🎮 Festival Special Games</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Diwali Poker', multiplier: '3x XP', icon: '🃏' },
              { name: 'Rangoli Rummy', multiplier: '2x Cash', icon: '🎨' },
              { name: 'Firecracker Ludo', multiplier: '5x Bonus', icon: '🎯' },
              { name: 'Lakshmi Luck', multiplier: 'Mega Wins', icon: '🪙' }
            ].map((game, index) => (
              <div
                key={index}
                className="bg-black/30 rounded-xl p-3 text-center backdrop-blur-sm hover:bg-black/40 transition-colors"
              >
                <div className="text-2xl mb-2">{game.icon}</div>
                <div className="text-white font-bold text-sm">{game.name}</div>
                <div className="text-yellow-300 text-xs font-medium">{game.multiplier}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiwaliOfferScreen;