import React, { useState, useEffect } from 'react';
import { Sparkles, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusStep, setStatusStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 180);
          return 100;
        }
        const step = Math.min(prev + Math.floor(Math.random() * 25) + 18, 100);
        if (step > 30 && statusStep < 1) setStatusStep(1);
        if (step > 65 && statusStep < 2) setStatusStep(2);
        if (step > 90 && statusStep < 3) setStatusStep(3);
        return step;
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete, statusStep]);

  const bootLogs = [
    'Initializing Spring Boot, Java & React architecture...',
    'Loading editorial typography & styling foundation...',
    'Parsing verified candidate resume (SKCT • 8.36 CGPA)...',
    'System ready. Launching portfolio experience...'
  ];

  return (
    <div
      id="system-boot-screen"
      className="fixed inset-0 z-50 bg-[#faf8f5] flex flex-col items-center justify-center p-6 text-[#1c1917] transition-opacity duration-500 font-sans select-none"
    >
      <div className="w-full max-w-md space-y-6 relative z-10">
        {/* Identifier */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs text-[#4a1521] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
            <span>Developer Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#1c1917] tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xs text-[#78716c]">
            B.Tech Information Technology • {personalInfo.college}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono text-[#78716c]">
            <span>LOADING ASSETS</span>
            <span className="font-bold text-[#4a1521]">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#ede4db] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#b8686c] to-[#4a1521] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Diagnostic Logs */}
        <div className="bg-[#ffffff] border border-[#ede4db] rounded-2xl p-4 space-y-1.5 text-xs text-[#57534e] h-24 overflow-hidden font-mono shadow-xs">
          {bootLogs.slice(0, statusStep + 1).map((log, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[#4a1521] font-bold">✓</span>
              <span className={index === statusStep ? 'text-[#1c1917] font-semibold' : 'text-[#78716c]'}>
                {log}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Skip Option */}
        <div className="text-center pt-2">
          <button
            onClick={onComplete}
            className="text-xs text-[#78716c] hover:text-[#4a1521] transition-colors cursor-pointer"
          >
            Click to enter directly →
          </button>
        </div>
      </div>
    </div>
  );
};
