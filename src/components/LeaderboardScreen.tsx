import { ArrowLeft, Trophy, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const LeaderboardScreen = () => {
  const { navigateBack } = useNavigation();

  const leaderboardData = [
    { rank: 1, name: 'Arjun Patel', tier: 'VIP 5', xp: 25000, avatar: '👑' },
    { rank: 2, name: 'Priya Singh', tier: 'VIP 4', xp: 24500, avatar: '🏆' },
    { rank: 3, name: 'Rahul Kumar', tier: 'VIP 4', xp: 22000, avatar: '🥉' },
    { rank: 4, name: 'Anjali Gupta', tier: 'VIP 3', xp: 20500, avatar: '⭐' },
    { rank: 5, name: 'Vikash Yadav', tier: 'VIP 3', xp: 19000, avatar: '🎯' },
    { rank: 6, name: 'You', tier: 'VIP 3', xp: 12000, avatar: '👤', isCurrentUser: true },
    { rank: 7, name: 'Mohit Jain', tier: 'VIP 2', xp: 11500, avatar: '🎮' },
    { rank: 8, name: 'Sneha Patel', tier: 'VIP 2', xp: 10000, avatar: '💎' },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'text-cyan-400';
      case 'Gold': return 'text-warning';
      case 'Silver': return 'text-gray-400';
      case 'Bronze': return 'text-amber-600';
      default: return 'text-foreground';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-warning" />;
      case 2: return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3: return <Star className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

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
        <h1 className="text-xl font-bold text-foreground">Leaderboard</h1>
      </div>

      {/* Tier Filter */}
      <div className="px-6 py-2">
        <div className="flex space-x-2 overflow-x-auto">
          {['All', 'Platinum', 'Gold', 'Silver', 'Bronze'].map((tier) => (
            <Button
              key={tier}
              variant={tier === 'Gold' ? 'default' : 'outline'}
              size="sm"
              className={`min-w-fit ${tier === 'Gold' ? 'bg-warning text-game-purple' : 'border-warning text-warning'}`}
            >
              {tier}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="space-y-3">
          {leaderboardData.map((player) => (
            <div 
              key={player.rank} 
              className={`rounded-xl p-4 ${
                player.isCurrentUser 
                  ? 'bg-warning/20 border-2 border-warning' 
                  : 'bg-secondary/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {getRankIcon(player.rank)}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                      <span className="text-lg">{player.avatar}</span>
                    </div>
                    <div>
                      <div className={`font-bold ${player.isCurrentUser ? 'text-warning' : 'text-foreground'}`}>
                        {player.name}
                      </div>
                      <div className={`text-sm ${getTierColor(player.tier)}`}>
                        {player.tier} Tier
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-warning font-bold">
                    {player.xp.toLocaleString()} XP
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Rank #{player.rank}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;