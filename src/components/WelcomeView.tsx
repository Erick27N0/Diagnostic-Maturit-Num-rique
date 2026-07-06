import React from 'react';
import { ArrowRight, ShieldCheck, Clock, BarChart3, CheckCircle2 } from 'lucide-react';

interface WelcomeViewProps {
  onStart: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center text-center">
      {/* Badge promesse */}
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[8px] bg-[#7B3FF2]/10 border border-[#7B3FF2]/20 text-[#7B3FF2] text-xs font-semibold mb-8">
        <span className="w-2 h-2 rounded-full bg-[#7B3FF2] animate-pulse"></span>
        <span>Diagnostic Agile Dirigeants & Managers • Version 1.0</span>
      </div>

      {/* Titre & Sous-titre */}
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#132B63] max-w-3xl leading-tight mb-6">
        Évaluez la maturité numérique et IA de votre entreprise en 3 minutes
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed mb-10">
        La complexité est derrière vous. Obtenez une clarté immédiate sur vos leviers de performance, vos priorités d'action et le temps concret que vos équipes peuvent économiser.
      </p>

      {/* CTA principal */}
      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 h-14 text-base font-semibold text-white bg-[#132B63] rounded-[8px] shadow-sm hover:bg-[#1a3a82] active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        <span>Démarrer mon diagnostic agile </span>
        <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-xs text-gray-400 mt-3 flex items-center space-x-1.5">
        <ShieldCheck className="w-4 h-4 text-gray-400" />
        <span>Aucune inscription préalable requise • Réponses à choix multiples uniquement</span>
      </p>

      {/* 3 piliers de réassurance (Clarté immédiate) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 text-left">
        <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-2xs flex flex-col">
          <div className="w-10 h-10 rounded-[8px] bg-[#132B63]/10 flex items-center justify-center text-[#132B63] mb-4">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-[#132B63] text-base mb-1.5">Où en suis-je ?</h3>
          <p className="text-sm text-gray-600 leading-normal">
            Un score global sur 100 et un radar comparatif sur vos 5 piliers stratégiques (IA, Sécurité, Workflows...).
          </p>
        </div>

        <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-2xs flex flex-col">
          <div className="w-10 h-10 rounded-[8px] bg-[#7B3FF2]/10 flex items-center justify-center text-[#7B3FF2] mb-4">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-[#132B63] text-base mb-1.5">Que dois-je améliorer ?</h3>
          <p className="text-sm text-gray-600 leading-normal">
            Une hiérarchisation claire de vos actions prioritaires pour éliminer les goulots d'étranglement quotidiens.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-2xs flex flex-col">
          <div className="w-10 h-10 rounded-[8px] bg-[#A96DFF]/10 flex items-center justify-center text-[#A96DFF] mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-[#132B63] text-base mb-1.5">Quel bénéfice concret ?</h3>
          <p className="text-sm text-gray-600 leading-normal">
            L'estimation précise des heures gagnées chaque mois et votre feuille de route opérationnelle vers la formation.
          </p>
        </div>
      </div>
    </div>
  );
};
