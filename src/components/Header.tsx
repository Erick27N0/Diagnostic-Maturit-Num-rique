import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { AppStep } from '../types';

interface HeaderProps {
  currentStep: AppStep;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentStep, onReset }) => {
  return (
    <div className="sticky top-0 z-40 w-full bg-white shadow-2xs">
      {/* Top Progress Bar (Brand Blue) */}
      <div className="w-full h-1.5 bg-[#E5E7EB]">
        <div className="bg-[#132B63] h-full w-full shadow-sm shadow-[#132B63]/20"></div>
      </div>

      <header className="flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6 border-b border-gray-100 bg-white max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onReset}>
          <div className="w-8 h-8 bg-[#132B63] rounded-lg flex items-center justify-center shrink-0">
            <div className="w-3 h-3 bg-white rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight uppercase text-[#132B63] leading-none">
              Nouvance <span className="text-[#7B3FF2]">IA</span>
            </span>
            <span className="text-[11px] text-gray-400 font-medium hidden sm:inline-block mt-1">
              Diagnostic de Maturité Numérique
            </span>
          </div>
        </div>

        {/* Right action / badge */}
        <div className="flex items-center gap-4 sm:gap-6">
          {currentStep !== 'welcome' && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#132B63] px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
              title="Recommencer le diagnostic"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Réinitialiser</span>
            </button>
          )}
          <span className="text-xs sm:text-sm text-gray-400 font-medium hidden md:inline">
            DIAGNOSTIC ID: #NV-9241
          </span>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Audit Agile</span>
          </div>
        </div>
      </header>
    </div>
  );
};
