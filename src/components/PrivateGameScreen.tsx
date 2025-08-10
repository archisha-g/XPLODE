import { useState } from 'react';
import { ArrowLeft, Users, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';

const PrivateGameScreen = () => {
  const { navigateBack } = useNavigation();
  const [joinCode] = useState('IG34D6');

  const copyJoinCode = () => {
    navigator.clipboard.writeText(joinCode);
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
            <h2 className="text-foreground font-bold text-xl">Poker</h2>
            <p className="text-foreground/70">Stakes: Rs 0.05/0.1</p>
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
      <div className="flex-1 px-6 py-8">
        <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-3xl h-full shadow-2xl overflow-hidden">
          {/* Table felt effect */}
          <div className="absolute inset-0 bg-gradient-radial from-green-700/50 to-transparent"></div>
          
          {/* Center pot area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-card/20 rounded-full border-2 border-gold/30 flex items-center justify-center">
              <span className="text-gold font-bold">POT</span>
            </div>
          </div>

          {/* Player positions - 8 seats around the table */}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 360) / 8;
            const radius = 140;
            const x = 50 + (radius * Math.cos((angle * Math.PI) / 180)) / 3;
            const y = 50 + (radius * Math.sin((angle * Math.PI) / 180)) / 3;
            
            const isUser = i === 0; // User sits at position 0
            
            return (
              <div
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {isUser ? (
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center border-2 border-warning animate-pulse-gold">
                      <span className="text-game-purple font-bold text-sm">YOU</span>
                    </div>
                    <div className="bg-card/70 px-2 py-1 rounded text-foreground text-xs font-medium">
                      Player 1
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-muted/30 border-2 border-muted flex items-center justify-center">
                      <Users className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="bg-muted/20 px-2 py-1 rounded text-muted-foreground text-xs">
                      Waiting...
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Game status */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-card/80 px-4 py-2 rounded-xl">
              <p className="text-foreground text-sm font-medium">Waiting for players to join...</p>
            </div>
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