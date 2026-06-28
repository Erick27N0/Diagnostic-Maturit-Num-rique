import React from 'react';
import { Question, UserAnswers } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DiagnosticStepViewProps {
  questions: Question[];
  currentIndex: number;
  answers: UserAnswers;
  onSelectOption: (questionId: string, optionId: string, points: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const DiagnosticStepView: React.FC<DiagnosticStepViewProps> = ({
  questions,
  currentIndex,
  answers,
  onSelectOption,
  onNext,
  onPrevious,
}) => {
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const selectedAnswer = answers[currentQuestion.id];

  const handleOptionClick = (optionId: string, points: number) => {
    onSelectOption(currentQuestion.id, optionId, points);
    // Auto-advance after 350ms for smooth frictionless UX
    setTimeout(() => {
      onNext();
    }, 350);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 flex flex-col">
      {/* Barre de progression fluide (Couleur Bleu Nuit #132B63 - PRD Étape A) */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-8 shadow-2xs">
        <div
          className="bg-[#132B63] h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* En-tête de question */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold px-3 py-1 rounded-[8px] bg-[#132B63]/10 text-[#132B63] border border-[#132B63]/20 uppercase tracking-wider">
          Pilier {currentIndex + 1} / {totalQuestions} : {currentQuestion.pillarLabel}
        </span>
        <span className="text-xs font-medium text-gray-400">
          Question {currentIndex + 1} sur {totalQuestions}
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#132B63] leading-snug mb-2">
        {currentQuestion.title}
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-8 font-normal">
        {currentQuestion.subtitle}
      </p>

      {/* Options de réponse (Choix simples - Coins arrondis 8px) */}
      <div className="space-y-3.5 mb-10">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer?.optionId === option.id;

          return (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id, option.points)}
              className={`group relative p-5 rounded-[8px] border transition-all duration-150 cursor-pointer flex items-start space-x-4 ${
                isSelected
                  ? 'border-[#7B3FF2] bg-[#7B3FF2]/5 shadow-xs ring-1 ring-[#7B3FF2]'
                  : 'border-gray-200 bg-white hover:border-[#132B63]/40 hover:bg-gray-50/80 shadow-2xs'
              }`}
            >
              {/* Radio Circle */}
              <div
                className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? 'border-[#7B3FF2] bg-[#7B3FF2] text-white'
                    : 'border-gray-300 group-hover:border-[#132B63]'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white stroke-[3]" />}
              </div>

              {/* Texte */}
              <div className="flex flex-col flex-1">
                <span className={`text-base font-medium transition-colors ${isSelected ? 'text-[#132B63] font-semibold' : 'text-gray-800'}`}>
                  {option.text}
                </span>
                {option.description && (
                  <span className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {option.description}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pied de page navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={`inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-[8px] transition-colors ${
            currentIndex === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:text-[#132B63] hover:bg-gray-100 cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Précédent</span>
        </button>

        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className={`inline-flex items-center space-x-2 px-6 py-2.5 h-10 text-sm font-semibold rounded-[8px] transition-all ${
            !selectedAnswer
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#132B63] text-white hover:bg-[#1a3a82] active:scale-[0.98] cursor-pointer shadow-xs'
          }`}
        >
          <span>{currentIndex === totalQuestions - 1 ? 'Terminer & Analyser' : 'Suivant'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
