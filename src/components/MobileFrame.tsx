import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="mobile-frame min-h-screen bg-black flex items-center justify-center p-8">
      <div className="mobile-screen w-[375px] h-[812px] bg-gradient-purple overflow-hidden relative rounded-[2.5rem] border-8 border-gray-800 shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;