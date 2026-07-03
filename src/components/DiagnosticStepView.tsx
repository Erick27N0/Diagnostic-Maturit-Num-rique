import React from 'react';
import { Question, UserAnswers } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DiagnosticStepViewProps {
  questions: Question[];
  currentIndex: number; // Represents the current page index (0 to 6)
  answers: UserAnswers;
  onSelectOption: (questionId: string, optionId: string, points: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const DiagnosticStepView: React.FC<DiagnosticStepViewProps> = ({
  questions,
  currentIndex, // 0 to 6 for the 7 pages
  answers,
  onSelectOption,
  onNext,
  onPrevious,
}) => {
  const totalPages = 7;
  const progressPercent = Math.round(((currentIndex + 1) / totalPages) * 100);

  // Retrieve the two questions for the current page
  const question1 = questions[currentIndex * 2];
  const question2 = questions[currentIndex * 2 + 1];

  const answer1 = question1 ? answers[question1.id] : null;
  const answer2 = question2 ? answers[question2.id] : null;

  // Next page is allowed only if both questions on this page have been answered
  const isPageComplete = !!answer1 && !!answer2;

  return (
    <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-12 flex flex-col">
      {/* Barre de progression fluide (Couleur Bleu Nuit #132B63) */}
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-8 sm:mb-10 shadow-2xs">
        <div
          className="bg-[#132B63] h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* En-tête de page globale */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-5">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#7B3FF2]/10 text-[#7B3FF2] border border-[#7B3FF2]/15">
            Étape {currentIndex + 1} / {totalPages}
          </span>
          <span className="text-xs text-gray-400 font-semibold tracking-wide">
            Diagnostic de Maturité Digitale
          </span>
        </div>
        <span className="text-sm font-bold text-[#132B63]">
          Page {currentIndex + 1} sur {totalPages}
        </span>
      </div>

      {/* Two Questions layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10">
        
        {/* Question 1 Card */}
        {question1 && (
          <div className="bg-white border border-gray-150 rounded-[8px] p-6 sm:p-8 lg:p-9 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Question Header & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
                  {question1.pillarLabel}
                </span>
                {answer1 ? (
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded border border-green-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Complété
                  </span>
                ) : (
                  <span className="text-xs font-bold text-[#7B3FF2] bg-[#7B3FF2]/5 px-2.5 py-1 rounded border border-[#7B3FF2]/10">
                    À remplir
                  </span>
                )}
              </div>

              {/* Smaller Font Title & Subtitle */}
              <h3 className="text-base sm:text-lg font-bold text-[#132B63] leading-snug mb-2">
                {question1.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 font-normal leading-relaxed">
                {question1.subtitle}
              </p>

              {/* Options */}
              <div className="space-y-3.5">
                {question1.options.map((option) => {
                  const isSelected = answer1?.optionId === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => onSelectOption(question1.id, option.id, option.points)}
                      className={`group relative p-4 sm:p-5 rounded-[8px] border transition-all duration-150 cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'border-[#7B3FF2] bg-[#7B3FF2]/5 ring-1 ring-[#7B3FF2]'
                          : 'border-gray-150 bg-white hover:border-[#132B63]/35 hover:bg-gray-50/50'
                      }`}
                    >
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'border-[#7B3FF2] bg-[#7B3FF2] text-white'
                            : 'border-gray-300 group-hover:border-[#132B63]'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3 h-3 text-white stroke-[3]" />}
                      </div>
                      <div className="flex flex-col flex-1 leading-snug">
                        <span className={`text-sm font-semibold transition-colors ${isSelected ? 'text-[#132B63]' : 'text-gray-700'}`}>
                          {option.text}
                        </span>
                        {option.description && (
                          <span className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">
                            {option.description}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Question 2 Card */}
        {question2 && (
          <div className="bg-white border border-gray-150 rounded-[8px] p-6 sm:p-8 lg:p-9 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Question Header & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
                  {question2.pillarLabel}
                </span>
                {answer2 ? (
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded border border-green-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Complété
                  </span>
                ) : (
                  <span className="text-xs font-bold text-[#7B3FF2] bg-[#7B3FF2]/5 px-2.5 py-1 rounded border border-[#7B3FF2]/10">
                    À remplir
                  </span>
                )}
              </div>

              {/* Smaller Font Title & Subtitle */}
              <h3 className="text-base sm:text-lg font-bold text-[#132B63] leading-snug mb-2">
                {question2.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 font-normal leading-relaxed">
                {question2.subtitle}
              </p>

              {/* Options */}
              <div className="space-y-3.5">
                {question2.options.map((option) => {
                  const isSelected = answer2?.optionId === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => onSelectOption(question2.id, option.id, option.points)}
                      className={`group relative p-4 sm:p-5 rounded-[8px] border transition-all duration-150 cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'border-[#7B3FF2] bg-[#7B3FF2]/5 ring-1 ring-[#7B3FF2]'
                          : 'border-gray-150 bg-white hover:border-[#132B63]/35 hover:bg-gray-50/50'
                      }`}
                    >
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'border-[#7B3FF2] bg-[#7B3FF2] text-white'
                            : 'border-gray-300 group-hover:border-[#132B63]'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3 h-3 text-white stroke-[3]" />}
                      </div>
                      <div className="flex flex-col flex-1 leading-snug">
                        <span className={`text-sm font-semibold transition-colors ${isSelected ? 'text-[#132B63]' : 'text-gray-700'}`}>
                          {option.text}
                        </span>
                        {option.description && (
                          <span className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">
                            {option.description}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Pied de page navigation */}
      <div className="flex items-center justify-between pt-5 border-t border-gray-150">
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
            currentIndex === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-500 hover:text-[#132B63] hover:bg-gray-100 cursor-pointer border border-gray-100'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Page Précédente</span>
        </button>

        <button
          onClick={onNext}
          disabled={!isPageComplete}
          className={`inline-flex items-center gap-2 px-5 py-2.5 h-10 text-xs sm:text-sm font-bold rounded-lg transition-all ${
            !isPageComplete
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-[#132B63] text-white hover:bg-[#132B63]/90 active:scale-[0.98] cursor-pointer shadow-sm shadow-[#132B63]/10'
          }`}
        >
          <span>{currentIndex === totalPages - 1 ? 'Terminer & Analyser' : 'Page Suivante'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
