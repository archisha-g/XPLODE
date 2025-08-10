import MobileFrame from '@/components/MobileFrame';
import SplashScreen from '@/components/SplashScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import SignupScreen from '@/components/SignupScreen';
import MainDashboard from '@/components/MainDashboard';
import ProfileModal from '@/components/ProfileModal';
import AddCashScreen from '@/components/AddCashScreen';
import QuestsScreen from '@/components/QuestsScreen';
import LeaderboardScreen from '@/components/LeaderboardScreen';
import SearchScreen from '@/components/SearchScreen';
import TierDetailsScreen from '@/components/TierDetailsScreen';
import DiwaliOfferScreen from '@/components/DiwaliOfferScreen';
import HeatStreakScreen from '@/components/HeatStreakScreen';
import RewardChestsScreen from '@/components/RewardChestsScreen';
import { NavigationProvider, useNavigation } from '@/components/NavigationProvider';

const AppContent = () => {
  const { currentScreen, navigateTo, navigateBack } = useNavigation();

  const handleSplashComplete = () => {
    navigateTo('onboarding');
  };

  const handleSignupNavigation = () => {
    navigateTo('signup');
  };

  const handleBackToOnboarding = () => {
    navigateBack();
  };

  const handleSignupComplete = () => {
    navigateTo('dashboard');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'onboarding':
        return <OnboardingScreen onSignup={handleSignupNavigation} />;
      case 'signup':
        return <SignupScreen onBack={handleBackToOnboarding} onContinue={handleSignupComplete} />;
      case 'dashboard':
        return <MainDashboard />;
      case 'profile':
        return <ProfileModal isOpen={true} onClose={navigateBack} />;
      case 'addCash':
        return <AddCashScreen onBack={navigateBack} />;
      case 'quests':
        return <QuestsScreen />;
      case 'leaderboard':
        return <LeaderboardScreen />;
      case 'search':
        return <SearchScreen />;
      case 'tierDetails':
        return <TierDetailsScreen />;
      case 'diwaliOffer':
        return <DiwaliOfferScreen />;
      case 'heatStreak':
        return <HeatStreakScreen />;
      case 'rewardChests':
        return <RewardChestsScreen />;
      default:
        return <SplashScreen onComplete={handleSplashComplete} />;
    }
  };

  return renderScreen();
};

const Index = () => {
  return (
    <NavigationProvider>
      <MobileFrame>
        <AppContent />
      </MobileFrame>
    </NavigationProvider>
  );
};

export default Index;
