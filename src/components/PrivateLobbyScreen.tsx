import { useState } from 'react';
import { ArrowLeft, Copy, Users, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Import game images
import callbreakImg from '@/assets/callbreak.jpg';
import rummyImg from '@/assets/rummy.jpg';
import pokerImg from '@/assets/poker.jpg';
import ludoImg from '@/assets/ludo.jpg';

const PrivateLobbyScreen = () => {
  const { navigateBack, navigateTo } = useNavigation();
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedStake, setSelectedStake] = useState('');
  const [shareCode] = useState('IG34D6');

  const games = [
    { name: 'Poker', image: pokerImg, id: 'poker' },
    { name: 'Rummy', image: rummyImg, id: 'rummy' },
    { name: 'Callbreak', image: callbreakImg, id: 'callbreak' },
    { name: 'Ludo', image: ludoImg, id: 'ludo' }
  ];

  const stakes = [
    'Rs 0.05/0.1',
    'Rs 0.1/0.2',
    'Rs 0.5/1',
    'Rs 1/2',
    'Rs 5/10'
  ];

  const copyShareCode = () => {
    navigator.clipboard.writeText(shareCode);
  };

  const handleCreateGame = () => {
    if (selectedGame && selectedStake) {
      // Store the selected game and stake in localStorage for the private game screen
      localStorage.setItem('privateGameData', JSON.stringify({
        game: selectedGame,
        stake: selectedStake,
        gameDetails: games.find(g => g.id === selectedGame)
      }));
      navigateTo('privateGame');
    }
  };

  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-game-purple-dark/80 backdrop-blur-sm border-b border-border">
        <button onClick={navigateBack} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-foreground font-bold text-lg">WinZO Private Games</h1>
        <div className="w-10"></div>
      </div>

      {/* Status indicators */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 bg-secondary/30 rounded-lg px-3 py-1">
            <span className="text-gold text-lg">💰</span>
            <span className="text-foreground font-bold">Gold</span>
          </div>
          <div className="flex items-center space-x-1 bg-secondary/30 rounded-lg px-3 py-1">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-foreground font-bold">12000 XP</span>
          </div>
          <div className="flex items-center space-x-1 bg-secondary/30 rounded-lg px-3 py-1">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-foreground font-bold">12 Vouchers</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
          <span className="text-game-purple text-xs">🔔</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 py-4 space-y-6 overflow-y-auto pb-24">
        <div className="bg-game-purple-dark/60 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-lg">
          <h2 className="text-gold font-bold text-xl mb-6">Create Private Game</h2>
          
          {/* Game Type Selection */}
          <div className="space-y-4">
            <div>
              <label className="text-foreground font-medium mb-2 block">Game Type</label>
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger className="w-full bg-input border-border text-foreground">
                  <SelectValue placeholder="Select a game" />
                </SelectTrigger>
                <SelectContent className="bg-game-purple-dark/95 backdrop-blur-md border-border">
                  {games.map((game) => (
                    <SelectItem key={game.id} value={game.id} className="text-foreground hover:bg-white/10">
                      {game.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Stake Selection */}
            <div>
              <label className="text-foreground font-medium mb-2 block">Select Stake</label>
              <Select value={selectedStake} onValueChange={setSelectedStake}>
                <SelectTrigger className="w-full bg-input border-border text-foreground">
                  <SelectValue placeholder="Choose stake amount" />
                </SelectTrigger>
                <SelectContent className="bg-game-purple-dark/95 backdrop-blur-md border-border">
                  {stakes.map((stake) => (
                    <SelectItem key={stake} value={stake} className="text-foreground hover:bg-white/10">
                      {stake}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Share Code */}
            <div>
              <label className="text-foreground font-medium mb-2 block">Share Code</label>
              <div className="flex space-x-2">
                <Input 
                  value={shareCode} 
                  readOnly 
                  className="flex-1 bg-input border-border text-foreground"
                />
                <Button
                  onClick={copyShareCode}
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-secondary/50"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Create Button */}
            <Button 
              onClick={handleCreateGame}
              disabled={!selectedGame || !selectedStake}
              className="w-full bg-gradient-gold hover:opacity-90 text-game-purple font-bold py-3 rounded-xl transition-all"
            >
              Create Game
            </Button>
          </div>
        </div>

        {/* Game Features */}
        <div className="space-y-4">
          <h3 className="text-foreground font-bold">Private Game Benefits</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/20 rounded-xl p-3 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-foreground text-sm font-medium">XP Rewards</div>
            </div>
            <div className="bg-secondary/20 rounded-xl p-3 text-center">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-foreground text-sm font-medium">Streak Boost</div>
            </div>
            <div className="bg-secondary/20 rounded-xl p-3 text-center">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-foreground text-sm font-medium">Social XP</div>
            </div>
            <div className="bg-secondary/20 rounded-xl p-3 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-foreground text-sm font-medium">Squad Challenges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
};

export default PrivateLobbyScreen;