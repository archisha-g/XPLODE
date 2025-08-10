import { createContext, useContext, useState, ReactNode } from 'react';

type Screen = 'splash' | 'onboarding' | 'signup' | 'dashboard' | 'profile' | 'addCash' | 'quests' | 'leaderboard' | 'search' | 'tierDetails' | 'diwaliOffer' | 'heatStreak' | 'rewardChests' | 'privateLobby' | 'privateGame';

interface NavigationContextType {
  currentScreen: Screen;
  navigateTo: (screen: Screen) => void;
  navigateBack: () => void;
  screenHistory: Screen[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['splash']);

  const navigateTo = (screen: Screen) => {
    setScreenHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const navigateBack = () => {
    setScreenHistory(prev => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, -1);
        setCurrentScreen(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      return prev;
    });
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, navigateTo, navigateBack, screenHistory }}>
      {children}
    </NavigationContext.Provider>
  );
};