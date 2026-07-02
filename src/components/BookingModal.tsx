import React, { useState } from 'react';
import { LeadData } from '../types';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles, Video, ArrowRight, ExternalLink } from 'lucide-react';

interface BookingModalProps {
  leadData: LeadData | null;
  onClose: () => void;
  onSuccessBooking: (dateSlot: string, timeSlot: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  leadData,
  onClose,
  onSuccessBooking,
}) => {
  const [selectedTab, setSelectedTab] = useState<'meeting' | 'training'>('meeting');

  // Load appointment booking URL from env, or fallback to a standard clean booking placeholder link
  const googleCalendarBookingUrl = (import.meta as any).env.VITE_GOOGLE_CALENDAR_BOOKING_URL || 'https://calendar.google.com/calendar/appointments/schedules/';

  return (
    <div className="fixed inset-0 z-50 bg-[#132B63]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-xl rounded-[8px] border border-gray-200 shadow-2xl overflow-hidden flex flex-col my-8">
        
        {/* Modal Header */}
        <div className="bg-[#132B63] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-[8px] bg-[#7B3FF2] flex items-center justify-center text-white shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Accès & Réservation Nouvance IA</h3>
              <p className="text-xs text-blue-200">Session privée réservée pour {leadData?.firstName || 'votre organisation'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-[8px] hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col space-y-6">
          
          {/* Type Toggle */}
          <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-[8px] gap-1">
            <button
              type="button"
              onClick={() => setSelectedTab('meeting')}
              className={`py-2.5 px-4 rounded-[6px] text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                selectedTab === 'meeting'
                  ? 'bg-white text-[#132B63] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#7B3FF2]" />
              <span>Entretien de Cadrage</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('training')}
              className={`py-2.5 px-4 rounded-[6px] text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                selectedTab === 'training'
                  ? 'bg-white text-[#132B63] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Accès Direct Formation</span>
            </button>
          </div>

          {selectedTab === 'meeting' ? (
            <div className="space-y-5">
              <p className="text-sm text-gray-600 font-normal leading-relaxed">
                Bonjour <span className="font-semibold text-[#132B63]">{leadData?.firstName || 'Dirigeant'}</span>, réservez votre entretien individuel de diagnostic de 30 minutes avec un expert Nouvance IA.
              </p>

              {/* Session Benefits list */}
              <div className="bg-gray-50/80 p-4 rounded-[8px] border border-gray-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Objectifs de la session de cadrage :</span>
                <ul className="text-xs text-gray-700 space-y-2.5">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7B3FF2] shrink-0 mt-0.5" />
                    <span>Analyse fine et personnalisée de vos scores sur les 5 piliers de maturité.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7B3FF2] shrink-0 mt-0.5" />
                    <span>Identification de vos solutions d'automatisation et de vos cas d'usage IA prioritaires.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7B3FF2] shrink-0 mt-0.5" />
                    <span>Validation de l'éligibilité de votre entreprise aux financements de formation.</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action: Clean button opening external link in new tab (Design System Nouvance compliant) */}
              <div className="pt-2">
                <a
                  href={googleCalendarBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSuccessBooking('Google Calendar Link', 'Clicked')}
                  className="w-full h-14 bg-[#132B63] text-white font-semibold rounded-[8px] shadow-md hover:bg-[#132B63]/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-3 text-sm sm:text-base cursor-pointer border border-transparent"
                >
                  <Calendar className="w-5 h-5 text-[#A96DFF]" />
                  <span>Choisir mon créneau sur Google Calendar</span>
                  <ExternalLink className="w-4 h-4 text-white/70" />
                </a>
                <span className="text-[11px] text-gray-400 text-center block mt-2.5 leading-normal">
                  Le planning s'ouvrira en toute sécurité dans un nouvel onglet Google Calendar.
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-left">
              <div className="border border-gray-200 p-5 rounded-[8px] bg-gray-50/50 space-y-3">
                <h4 className="font-bold text-[#132B63] text-base">Programme de Formation : Dirigeants & IA V1</h4>
                <p className="text-xs text-gray-600 leading-normal">
                  Formation actionnable de 12 heures découpées en 4 modules asynchrones + 2 coachings live pour automatiser vos processus et déployer des assistants IA souverains.
                </p>
                <ul className="text-xs text-gray-700 space-y-1.5 pt-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7B3FF2]" />
                    <span>Accès illimité à la bibliothèque de prompts de direction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7B3FF2]" />
                    <span>Paramétrage de vos automatisations CRM avec un expert</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7B3FF2]" />
                    <span>Éligible aux dispositifs de financement professionnels</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={googleCalendarBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSuccessBooking('Google Calendar Link', 'Clicked')}
                  className="w-full h-14 bg-[#7B3FF2] text-white font-semibold rounded-[8px] shadow-md hover:bg-[#7B3FF2]/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-3 text-sm sm:text-base cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#A96DFF]" />
                  <span>S'inscrire via Google Calendar</span>
                  <ExternalLink className="w-4 h-4 text-white/70" />
                </a>
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1 text-[#10B981]" /> Données 100% sécurisées
            </span>
            <button
              onClick={onClose}
              className="font-medium text-gray-500 hover:text-[#132B63] transition-colors py-1 px-2.5 rounded hover:bg-gray-100 cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
