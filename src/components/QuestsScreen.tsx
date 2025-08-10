import { ArrowLeft, CheckCircle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const QuestsScreen = () => {
  const { navigateBack } = useNavigation();

  const dailyQuests = [
    { id: 1, title: 'Play 3 games', reward: '50 XP', completed: true, progress: '3/3' },
    { id: 2, title: 'Win a Rummy match', reward: '100 XP', completed: true, progress: '1/1' },
    { id: 3, title: 'Earn ₹10 in winnings', reward: '75 XP', completed: false, progress: '₹2/₹10' },
    { id: 4, title: 'Login 7 days in a row', reward: '200 XP', completed: false, progress: '3/7' }
  ];

  const weeklyQuests = [
    { id: 5, title: 'Win 15 games this week', reward: '500 XP', completed: false, progress: '8/15' },
    { id: 6, title: 'Refer 2 friends', reward: '300 XP', completed: false, progress: '0/2' },
    { id: 7, title: 'Reach Gold tier', reward: '1000 XP', completed: true, progress: 'Complete' },
    { id: 8, title: 'Play 5 different games', reward: '250 XP', completed: false, progress: '3/5' }
  ];

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
        <h1 className="text-xl font-bold text-foreground">Quests</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Daily Quests */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-warning mb-4">Daily Quests</h2>
          <div className="space-y-3">
            {dailyQuests.map((quest) => (
              <div key={quest.id} className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {quest.completed ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted" />
                    )}
                    <div>
                      <div className={`font-semibold ${quest.completed ? 'text-success' : 'text-foreground'}`}>
                        {quest.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Progress: {quest.progress}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-warning font-bold">{quest.reward}</div>
                    {quest.completed && (
                      <div className="text-xs text-success">Completed</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Quests */}
        <div>
          <h2 className="text-lg font-bold text-warning mb-4">Weekly Quests</h2>
          <div className="space-y-3">
            {weeklyQuests.map((quest) => (
              <div key={quest.id} className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {quest.completed ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted" />
                    )}
                    <div>
                      <div className={`font-semibold ${quest.completed ? 'text-success' : 'text-foreground'}`}>
                        {quest.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Progress: {quest.progress}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-warning font-bold">{quest.reward}</div>
                    {quest.completed && (
                      <div className="text-xs text-success">Completed</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestsScreen;