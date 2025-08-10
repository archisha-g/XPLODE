import { useState } from 'react';
import { ArrowLeft, BookOpen, Trophy, Star, Crown, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from './NavigationProvider';
import RealTimeClock from './RealTimeClock';

const LessonStreakScreen = () => {
  const { navigateBack } = useNavigation();
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState([0, 1, 2]);
  
  const currentLessonStreak = 5;
  const lessonXP = 1250;
  const isPlatinum = true;
  const nextBadgeAt = 7;
  const progressToNextBadge = (currentLessonStreak / nextBadgeAt) * 100;

  const lessons = [
    {
      id: 0,
      title: "Poker Basics: Hand Rankings",
      description: "Learn the fundamental hand rankings in poker",
      difficulty: "Beginner",
      xp: 50,
      completed: true,
      game: "Poker"
    },
    {
      id: 1,
      title: "Rummy: Pure Sequence Strategy",
      description: "Master the art of forming pure sequences",
      difficulty: "Beginner",
      xp: 50,
      completed: true,
      game: "Rummy"
    },
    {
      id: 2,
      title: "Ludo: Opening Moves",
      description: "Optimal strategies for game opening",
      difficulty: "Beginner",
      xp: 50,
      completed: true,
      game: "Ludo"
    },
    {
      id: 3,
      title: "Poker: Bluffing Techniques",
      description: "When and how to bluff effectively",
      difficulty: "Intermediate",
      xp: 75,
      completed: false,
      game: "Poker",
      locked: false
    },
    {
      id: 4,
      title: "Rummy: Advanced Melding",
      description: "Complex melding strategies for higher scores",
      difficulty: "Intermediate",
      xp: 75,
      completed: false,
      game: "Rummy",
      locked: false
    },
    {
      id: 5,
      title: "Callbreak: Trump Management",
      description: "Master trump card usage and timing",
      difficulty: "Advanced",
      xp: 100,
      completed: false,
      game: "Callbreak",
      locked: !isPlatinum // Platinum early access
    }
  ];

  const skillBadges = [
    { name: "Scholar", requirement: "3 lessons", earned: true, icon: "📚" },
    { name: "Strategist", requirement: "7 lessons", earned: false, icon: "🧠" },
    { name: "Master", requirement: "15 lessons", earned: false, icon: "👑" },
    { name: "Grandmaster", requirement: "30 lessons", earned: false, icon: "🏆" }
  ];

  const handleStartLesson = (lessonId: number) => {
    setSelectedLesson(lessonId);
    // Simulate lesson completion
    setTimeout(() => {
      setCompletedLessons([...completedLessons, lessonId]);
      setSelectedLesson(null);
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex flex-col overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 text-6xl opacity-10 animate-float">📚</div>
        <div className="absolute bottom-32 right-12 text-4xl opacity-15 animate-pulse">🧠</div>
        <div className="absolute top-24 right-16 text-3xl opacity-10 animate-bounce" style={{animationDelay: '0.5s'}}>⭐</div>
        <div className="absolute bottom-48 left-12 text-4xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}>🏆</div>
      </div>

      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-white text-sm font-medium relative z-10">
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
      <div className="flex items-center px-6 py-3 relative z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={navigateBack}
          className="text-white hover:bg-white/20 mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-300" />
            Learn & Win
          </h1>
          <p className="text-white/80 text-sm">Master strategies, earn rewards!</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-2 relative z-10">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-white font-bold text-xl">{currentLessonStreak}</div>
              <div className="text-white/70 text-xs">Lesson Streak</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">{lessonXP}</div>
              <div className="text-white/70 text-xs">Lesson XP</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">{completedLessons.length}</div>
              <div className="text-white/70 text-xs">Completed</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-white text-sm">
              <span>Next Badge Progress</span>
              <span>{currentLessonStreak}/{nextBadgeAt}</span>
            </div>
            <Progress value={progressToNextBadge} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 pb-24 relative z-10">
        
        {/* Available Lessons */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">📖 Available Lessons</h3>
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id}
                className={`rounded-xl p-4 border transition-all duration-300 ${
                  lesson.completed 
                    ? 'bg-green-500/20 border-green-400/30' 
                    : lesson.locked 
                      ? 'bg-gray-500/20 border-gray-400/30 opacity-50'
                      : 'bg-blue-500/20 border-blue-400/30 hover:bg-blue-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-white font-bold">{lesson.title}</h4>
                      {lesson.completed && <CheckCircle className="w-4 h-4 text-green-400" />}
                      {lesson.locked && <Crown className="w-4 h-4 text-yellow-400" />}
                    </div>
                    <p className="text-white/70 text-sm mb-2">{lesson.description}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-blue-300">{lesson.game}</span>
                      <span className="text-yellow-300">{lesson.difficulty}</span>
                      <span className="text-green-300">+{lesson.xp} XP</span>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    {lesson.completed ? (
                      <div className="text-green-400 text-2xl">✅</div>
                    ) : lesson.locked ? (
                      <div className="text-gray-400 text-2xl">🔒</div>
                    ) : (
                      <Button
                        onClick={() => handleStartLesson(lesson.id)}
                        disabled={selectedLesson === lesson.id}
                        className="bg-blue-500 hover:bg-blue-400 text-white"
                      >
                        {selectedLesson === lesson.id ? (
                          <div className="flex items-center space-x-1">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Learning...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <Play className="w-4 h-4" />
                            <span>Start</span>
                          </div>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Badges */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">🏆 Skill Badges</h3>
          <div className="grid grid-cols-2 gap-3">
            {skillBadges.map((badge, index) => (
              <div 
                key={index}
                className={`rounded-xl p-4 text-center border ${
                  badge.earned 
                    ? 'bg-yellow-500/20 border-yellow-400/30' 
                    : 'bg-gray-500/20 border-gray-400/30'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-white font-bold text-sm">{badge.name}</div>
                <div className="text-white/70 text-xs">{badge.requirement}</div>
                {badge.earned && <div className="text-yellow-400 text-xs mt-1">✨ Earned</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonStreakScreen;
