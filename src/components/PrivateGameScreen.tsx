import { useState, useEffect } from 'react';
import { ArrowLeft, Users, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';

const PrivateGameScreen = () => {
  const { navigateBack } = useNavigation();
  const [joinCode] = useState('IG34D6');
  const [gameData, setGameData] = useState<any>(null);

  useEffect(() => {
    // Get the selected game data from localStorage
    const storedData = localStorage.getItem('privateGameData');
    if (storedData) {
      setGameData(JSON.parse(storedData));
    } else {
      // Default to poker if no data
      setGameData({
        game: 'poker',
        stake: 'Rs 0.05/0.1',
        gameDetails: { name: 'Poker', id: 'poker' }
      });
    }
  }, []);

  const copyJoinCode = () => {
    navigator.clipboard.writeText(joinCode);
  };

  const renderGameBoard = () => {
    if (!gameData) return null;

    switch (gameData.game) {
      case 'poker':
        return (
          <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-3xl h-full shadow-2xl overflow-hidden">
            {/* Poker table */}
            <div className="absolute inset-4 border-4 border-yellow-600 rounded-full bg-green-700">
              <div className="relative w-full h-full">
                {/* Player seat - Me */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 rounded-lg p-2 text-white text-center min-w-[80px]">
                    <div className="text-xs font-bold">Me</div>
                    <div className="text-xs">₹100</div>
                  </div>
                </div>
                {/* Empty seats */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-16 h-12 bg-gray-600 rounded-lg border-2 border-gray-500 flex items-center justify-center text-gray-400 text-xs ${
                      i === 0 ? 'top-4 left-1/2 transform -translate-x-1/2' :
                      i === 1 ? 'top-1/4 right-4' :
                      i === 2 ? 'bottom-1/4 right-4' :
                      i === 3 ? 'bottom-1/4 left-4' :
                      'top-1/4 left-4'
                    }`}
                  >
                    Empty
                  </div>
                ))}
                {/* Center pot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold">
                  Pot<br/>₹0
                </div>
              </div>
            </div>
          </div>
        );

      case 'rummy':
        return (
          <div className="relative bg-gradient-to-br from-red-800 to-red-900 rounded-3xl h-full shadow-2xl overflow-hidden">
            {/* Rummy table */}
            <div className="absolute inset-4 bg-red-700 rounded-2xl border-4 border-yellow-600">
              <div className="relative w-full h-full p-4">
                {/* Player area - Me */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 rounded-lg p-2 text-white text-center">
                    <div className="text-xs font-bold">Me</div>
                    <div className="text-xs">13 Cards</div>
                  </div>
                </div>
                {/* Opponent seats */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-600 rounded-lg p-2 text-gray-400 text-center text-xs">
                  Empty
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 rounded-lg p-2 text-gray-400 text-center text-xs">
                  Empty
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 rounded-lg p-2 text-gray-400 text-center text-xs">
                  Empty
                </div>
                {/* Center deck */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
                  <div className="bg-blue-900 rounded-lg w-12 h-16 flex items-center justify-center text-white text-xs">
                    Deck
                  </div>
                  <div className="bg-gray-600 rounded-lg w-12 h-16 flex items-center justify-center text-white text-xs">
                    Discard
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ludo':
        return (
          <div className="relative bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-3xl h-full shadow-2xl overflow-hidden">
            {/* Ludo board */}
            <div className="absolute inset-4 bg-white rounded-2xl border-4 border-yellow-800">
              <div className="relative w-full h-full">
                {/* Ludo board grid simulation */}
                <div className="absolute inset-2 grid grid-cols-15 grid-rows-15 gap-0">
                  {/* Simplified ludo board representation */}
                  <div className="col-span-6 row-span-6 bg-red-400 rounded-tl-lg flex items-center justify-center">
                    <div className="bg-blue-600 rounded-lg p-1 text-white text-xs">Me</div>
                  </div>
                  <div className="col-span-3 row-span-6 bg-gray-200"></div>
                  <div className="col-span-6 row-span-6 bg-green-400 rounded-tr-lg flex items-center justify-center text-gray-500 text-xs">
                    Empty
                  </div>
                  <div className="col-span-6 row-span-3 bg-gray-200"></div>
                  <div className="col-span-3 row-span-3 bg-yellow-400 flex items-center justify-center text-black font-bold text-xs">
                    HOME
                  </div>
                  <div className="col-span-6 row-span-3 bg-gray-200"></div>
                  <div className="col-span-6 row-span-6 bg-yellow-400 rounded-bl-lg flex items-center justify-center text-gray-500 text-xs">
                    Empty
                  </div>
                  <div className="col-span-3 row-span-6 bg-gray-200"></div>
                  <div className="col-span-6 row-span-6 bg-blue-400 rounded-br-lg flex items-center justify-center text-gray-500 text-xs">
                    Empty
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'callbreak':
        return (
          <div className="relative bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl h-full shadow-2xl overflow-hidden">
            {/* Callbreak table */}
            <div className="absolute inset-4 bg-purple-700 rounded-2xl border-4 border-yellow-600">
              <div className="relative w-full h-full">
                {/* Player positions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 rounded-lg p-2 text-white text-center">
                    <div className="text-xs font-bold">Me</div>
                    <div className="text-xs">13 Cards</div>
                  </div>
                </div>
                {/* Other players */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-600 rounded-lg p-2 text-gray-400 text-center text-xs">
                  Empty
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 rounded-lg p-2 text-gray-400 text-center text-xs">
                  Empty
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 rounded-lg p-2 text-gray-400 text-center text-xs">
                  Empty
                </div>
                {/* Center trick area */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg w-24 h-24 flex items-center justify-center text-white text-xs">
                  Trick<br/>Area
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-3xl h-full shadow-2xl overflow-hidden">
            <div className="absolute inset-4 border-4 border-yellow-600 rounded-2xl bg-green-700 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xl font-bold mb-2">Game Board</div>
                <div className="text-sm">Waiting for players...</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-game-purple-dark/30">
        <button onClick={navigateBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-foreground font-bold text-lg">Private Game Room</h1>
        <div className="w-10"></div>
      </div>

      {/* Game Info */}
      <div className="px-6 py-4 bg-secondary/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground font-bold text-xl">
              {gameData?.gameDetails?.name || 'Game'}
            </h2>
            <p className="text-foreground/70">Stakes: {gameData?.stake || 'Rs 0.05/0.1'}</p>
          </div>
          <div className="flex items-center space-x-2 bg-card/50 rounded-lg px-3 py-2">
            <span className="text-foreground/70">Join Code:</span>
            <span className="text-gold font-bold">{joinCode}</span>
            <Button
              onClick={copyJoinCode}
              variant="ghost"
              size="sm"
              className="p-1 h-auto"
            >
              <Copy className="w-4 h-4 text-foreground/70" />
            </Button>
          </div>
        </div>
      </div>

      {/* Game Table */}
      <div className="flex-1 px-6 py-8 relative">
        {renderGameBoard()}

        {/* Join Code Overlay */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-gold/30">
          <div className="text-center">
            <div className="text-white/70 text-xs mb-1">Join Code</div>
            <div className="text-gold font-bold text-lg">{joinCode}</div>
          </div>
        </div>

        {/* Game Status Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
          <div className="text-white text-sm font-medium text-center">
            Waiting for players to join...
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 py-4 space-y-3">
        <div className="flex space-x-3">
          <Button 
            className="flex-1 bg-gradient-gold hover:opacity-90 text-game-purple font-bold"
            onClick={copyJoinCode}
          >
            Share Join Code
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-border hover:bg-secondary/50"
          >
            Start Game
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-foreground/70 text-sm">
            Share the join code with friends to invite them to your private game!
          </p>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default PrivateGameScreen;