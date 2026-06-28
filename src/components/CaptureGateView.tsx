import React, { useState, useEffect } from 'react';
import { LeadData } from '../types';
import { ShieldCheck, Mail, User, Phone, Building, ArrowRight, Loader2, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

interface CaptureGateViewProps {
  step: 'calculating' | 'capture';
  onCompleteCalculation: () => void;
  onSubmitLead: (lead: LeadData) => void;
}

export const CaptureGateView: React.FC<CaptureGateViewProps> = ({
  step,
  onCompleteCalculation,
  onSubmitLead,
}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [calcProgress, setCalcProgress] = useState(15);

  // 2.5s fixed transition for 'calculating' step
  useEffect(() => {
    if (step === 'calculating') {
      const interval = setInterval(() => {
        setCalcProgress((prev) => (prev >= 95 ? 95 : prev + 25));
      }, 500);

      const timer = setTimeout(() => {
        clearInterval(interval);
        onCompleteCalculation();
      }, 2500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [step, onCompleteCalculation]);

  const isValid =
    firstName.trim().length >= 2 &&
    email.trim().includes('@') &&
    email.trim().includes('.') &&
    phone.trim().length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);
    // Simulate background email trigger & PDF generation
    setTimeout(() => {
      setIsLoading(false);
      onSubmitLead({
        firstName: firstName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim() || undefined,
      });
    }, 800);
  };

  if (step === 'calculating') {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-[8px] bg-[#132B63]/10 flex items-center justify-center text-[#132B63] mb-6 animate-pulse">
          <Sparkles className="w-8 h-8 text-[#7B3FF2]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#132B63] mb-3">
          Calcul des leviers de performance en cours...
        </h2>
        <p className="text-sm text-gray-500 max-w-md mb-8">
          Synthèse des réponses aux 5 piliers et comparaison avec notre référentiel sectoriel dirigeants.
        </p>

        {/* Barre de progression animée */}
        <div className="w-full max-w-md bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner p-0.5">
          <div
            className="bg-gradient-to-r from-[#132B63] via-[#7B3FF2] to-[#A96DFF] h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${calcProgress}%` }}
          ></div>
        </div>
        <span className="text-xs font-mono text-gray-400 mt-3">{calcProgress}% complété</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10 sm:py-16 flex flex-col items-center">
      <div className="bg-white w-full rounded-[8px] border border-gray-200 shadow-md p-6 sm:p-10 flex flex-col">
        {/* Badge Gate */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-[8px] bg-[#7B3FF2]/10 text-[#7B3FF2] text-xs font-semibold self-start mb-6 border border-[#7B3FF2]/20">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Diagnostic 100% complété</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#132B63] mb-2 leading-snug">
          Où devons-nous vous envoyer votre rapport de maturité complet ?
        </h2>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          Accédez immédiatement à votre score global, au graphique radar d'analyse et à votre feuille de route pour économiser des heures chaque semaine. Un exemplaire PDF vous sera envoyé simultanément par email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Prénom */}
            <div className="flex flex-col space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-700 flex items-center">
                <span>Prénom</span>
                <span className="text-[#7B3FF2] ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="ex: Jean"
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-[8px] text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#7B3FF2] focus:border-transparent transition-all outline-hidden"
                />
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex flex-col space-y-1.5 text-left">
              <label className="text-xs font-semibold text-gray-700 flex items-center">
                <span>Téléphone mobile</span>
                <span className="text-[#7B3FF2] ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="ex: 06 12 34 56 78"
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-[8px] text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#7B3FF2] focus:border-transparent transition-all outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Email pro */}
          <div className="flex flex-col space-y-1.5 text-left">
            <label className="text-xs font-semibold text-gray-700 flex items-center">
              <span>Email professionnel</span>
              <span className="text-[#7B3FF2] ml-1">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex: j.dupont@entreprise.com"
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-[8px] text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#7B3FF2] focus:border-transparent transition-all outline-hidden"
              />
            </div>
          </div>

          {/* Entreprise (optionnel) */}
          <div className="flex flex-col space-y-1.5 text-left pt-1">
            <label className="text-xs font-medium text-gray-500">
              Entreprise (Optionnel)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Building className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="ex: Groupe Nouvance"
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-[8px] text-sm text-gray-900 focus:bg-white focus:ring-2 focus:ring-[#7B3FF2] focus:border-transparent transition-all outline-hidden"
              />
            </div>
          </div>

          <div className="pt-6">
            {/* 5 états UI du CTA respectés (PRD 5.2) */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={`w-full h-12 rounded-[8px] font-semibold text-base transition-all duration-200 flex items-center justify-center space-x-2 ${
                !isValid
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' // Disabled state
                  : isLoading
                  ? 'bg-[#132B63]/80 text-white cursor-wait' // Loading state
                  : 'bg-[#132B63] text-white hover:bg-[#132B63]/90 active:scale-[0.98] cursor-pointer shadow-sm hover:shadow' // Normal, Hover, Active
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-[#A96DFF]" />
                  <span>Génération du rapport...</span>
                </>
              ) : (
                <>
                  <span>Découvrir mes résultats et mon plan d'action</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-gray-100 text-xs text-gray-400">
          <span className="flex items-center space-x-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Zéro spam garanti</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Conformité RGPD stricte</span>
          </span>
        </div>
      </div>
    </div>
  );
};
