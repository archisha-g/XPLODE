import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const SearchScreen = () => {
  const { navigateBack } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const allGames = [
    { name: 'CALLBREAK', image: callbreakImg, category: 'Card' },
    { name: 'RUMMY', image: rummyImg, category: 'Card' },
    { name: 'SOLITAIRE', image: solitaireImg, category: 'Card' },
    { name: 'POKER', image: pokerImg, category: 'Card' },
    { name: 'SNAKES & LADDERS', image: snakesLaddersImg, category: 'Board' },
    { name: 'LUDO', image: ludoImg, category: 'Board' },
    { name: 'CARROM', image: carromImg, category: 'Board' },
    { name: 'WORLD WAR', image: worldWarImg, category: 'Strategy' },
    { name: 'LIQUID WARS', image: liquidWarsImg, category: 'Action' },
  ];

  const filteredGames = allGames.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col overflow-hidden relative">
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

      {/* Header */}
      <div className="flex items-center px-6 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={navigateBack}
          className="text-foreground hover:bg-foreground/20 mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-bold text-foreground">Search Games</h1>
      </div>

      {/* Search Input */}
      <div className="px-6 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search for games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary/30 border-secondary text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {searchQuery === '' ? (
          <div className="text-center text-muted-foreground mt-8">
            Start typing to search for games...
          </div>
        ) : filteredGames.length === 0 ? (
          <div className="text-center text-muted-foreground mt-8">
            No games found for "{searchQuery}"
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredGames.map((game, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 relative h-32"
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
                  <div className="text-white/70 text-xs text-center">
                    {game.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;