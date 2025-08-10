import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="mobile-frame min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center py-12 px-4 relative overflow-auto">
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>

      {/* Phone frame with realistic design - floating effect */}
      <div className="relative transform hover:scale-[1.02] transition-transform duration-500 ease-out">
        {/* Enhanced phone shadow for floating effect */}
        <div className="absolute inset-0 bg-black/60 rounded-[3rem] blur-3xl transform translate-y-12 scale-110"></div>
        <div className="absolute inset-0 bg-purple-900/20 rounded-[3rem] blur-xl transform translate-y-6 scale-105"></div>

        {/* Phone body with enhanced realism */}
        <div className="mobile-screen w-[420px] h-[900px] bg-gradient-purple overflow-hidden relative rounded-[2.5rem] border-[3px] border-gray-700 shadow-2xl flex flex-col">
          {/* Screen bezel with subtle glow */}
          <div className="absolute inset-[2px] rounded-[2.3rem] border border-gray-600/30 shadow-inner"></div>

          {/* Notch with realistic depth */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-10 border-x border-b border-gray-600/50 shadow-lg"></div>

          {/* Speaker grille */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-700 rounded-full z-20 shadow-inner"></div>

          {/* Front camera */}
          <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 translate-x-8 w-2 h-2 bg-gray-800 rounded-full z-20 border border-gray-600 shadow-inner"></div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-white/30 rounded-full z-10"></div>

          {/* Content area with proper constraints */}
          <div className="relative z-0 flex-1 w-full overflow-hidden">
            {children}
          </div>
        </div>

        {/* Side buttons with realistic details */}
        <div className="absolute left-[-4px] top-20 w-1 h-8 bg-gray-700 rounded-r shadow-md"></div>
        <div className="absolute left-[-4px] top-32 w-1 h-12 bg-gray-700 rounded-r shadow-md"></div>
        <div className="absolute left-[-4px] top-48 w-1 h-12 bg-gray-700 rounded-r shadow-md"></div>
        <div className="absolute right-[-4px] top-28 w-1 h-16 bg-gray-700 rounded-l shadow-md"></div>
      </div>
    </div>
  );
};

export default MobileFrame;