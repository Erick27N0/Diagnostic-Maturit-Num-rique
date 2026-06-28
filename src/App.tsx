import React, { useState } from 'react';
import { AppStep, UserAnswers, LeadData } from './types';
import { DIAGNOSTIC_QUESTIONS, calculateDiagnosticResults } from './data/diagnosticData';
import { Header } from './components/Header';
import { WelcomeView } from './components/WelcomeView';
import { DiagnosticStepView } from './components/DiagnosticStepView';
import { CaptureGateView } from './components/CaptureGateView';
import { DashboardView } from './components/DashboardView';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [step, setStep] = useState<AppStep>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleStart = () => {
    setStep('diagnostic');
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setStep('welcome');
    setCurrentIndex(0);
    setAnswers({});
    setLeadData(null);
    setIsBookingOpen(false);
  };

  const handleSelectOption = (questionId: string, optionId: string, points: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { optionId, points },
    }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Last question completed -> trigger Section 2 Gate flow
      setStep('calculating');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleCompleteCalculation = () => {
    setStep('capture');
  };

  const handleSubmitLead = (submittedLead: LeadData) => {
    setLeadData(submittedLead);
    setStep('dashboard');
  };

  const results = calculateDiagnosticResults(answers);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#132B63] font-sans flex flex-col selection:bg-[#7B3FF2]/20 selection:text-[#132B63]">
      
      {/* Header persistant */}
      <Header currentStep={step} onReset={handleReset} />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {step === 'welcome' && <WelcomeView onStart={handleStart} />}

        {step === 'diagnostic' && (
          <DiagnosticStepView
            questions={DIAGNOSTIC_QUESTIONS}
            currentIndex={currentIndex}
            answers={answers}
            onSelectOption={handleSelectOption}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
          />
        )}

        {(step === 'calculating' || step === 'capture') && (
          <CaptureGateView
            step={step}
            onCompleteCalculation={handleCompleteCalculation}
            onSubmitLead={handleSubmitLead}
          />
        )}

        {step === 'dashboard' && (
          <DashboardView
            globalScore={results.globalScore}
            statusLabel={results.statusLabel}
            statusColor={results.statusColor}
            hoursSavedPerMonth={results.hoursSavedPerMonth}
            radarData={results.radarData}
            recommendations={results.recommendations}
            leadData={leadData}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Modal de réservation / inscription CTA (PRD Section 4) */}
      {isBookingOpen && (
        <BookingModal
          leadData={leadData}
          onClose={() => setIsBookingOpen(false)}
          onSuccessBooking={(date, time) => {
            console.log(`Booking confirmed for ${date} at ${time}`);
          }}
        />
      )}

    </div>
  );
}
