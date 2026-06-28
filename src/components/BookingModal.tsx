import React, { useState } from 'react';
import { LeadData } from '../types';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles, Video, ArrowRight } from 'lucide-react';

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
  const [selectedDate, setSelectedDate] = useState('Mardi 8 Juillet');
  const [selectedTime, setSelectedTime] = useState('11:00');
  const [isBooked, setIsBooked] = useState(false);

  const availableDates = [
    'Lundi 7 Juillet',
    'Mardi 8 Juillet',
    'Jeudi 10 Juillet',
    'Vendredi 11 Juillet',
  ];

  const availableTimes = ['09:30', '11:00', '14:30', '16:00', '17:30'];

  const handleConfirmSlot = () => {
    setIsBooked(true);
    onSuccessBooking(selectedDate, selectedTime);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#132B63]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-[8px] border border-gray-200 shadow-2xl overflow-hidden flex flex-col my-8">
        
        {/* Modal Header */}
        <div className="bg-[#132B63] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-[8px] bg-[#7B3FF2] flex items-center justify-center text-white">
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
        {isBooked ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-[8px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#132B63]">
              Félicitations ! Votre accès est validé.
            </h3>
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              Une invitation Google Calendar pour le <span className="font-semibold text-[#132B63]">{selectedDate} à {selectedTime}</span> a été envoyée à <span className="font-semibold">{leadData?.email}</span>. Votre consultant Nouvance prépare actuellement votre dossier de diagnostic personnalisé.
            </p>
            <div className="bg-gray-50 p-4 rounded-[8px] border border-gray-200 text-xs text-gray-500 w-full max-w-md text-left flex items-start space-x-3 mt-4">
              <Video className="w-4 h-4 text-[#7B3FF2] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-700 block">Lien de visioconférence sécurisé</span>
                <span>Inclus dans l'invitation Calendar. L'entretien de 30 min permettra de valider votre éligibilité au financement de la formation.</span>
              </div>
            </div>
            <div className="pt-6 w-full max-w-md">
              <button
                onClick={onClose}
                className="w-full h-12 bg-[#132B63] text-white font-semibold rounded-[8px] hover:bg-[#1a3a82] transition-colors cursor-pointer"
              >
                Retour à mon tableau de bord
              </button>
            </div>
          </div>
        ) : (
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
                <span>Entretien de Cadrage (Offert)</span>
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
                <span>Accès Direct Formation V1</span>
              </button>
            </div>

            {selectedTab === 'meeting' ? (
              <>
                <p className="text-xs sm:text-sm text-gray-600 font-normal">
                  Choisissez votre créneau pour échanger avec un expert Nouvance IA et parcourir la mise en œuvre de votre plan d'économie de temps.
                </p>

                {/* Date Picker (Cal.com / Calendly simulation) */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-2">1. Choisissez une date</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-[8px] border text-xs font-medium transition-all cursor-pointer text-center ${
                          selectedDate === date
                            ? 'border-[#7B3FF2] bg-[#7B3FF2]/5 text-[#132B63] font-bold ring-1 ring-[#7B3FF2]'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Picker */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-2">2. Choisissez un créneau horaire (Heure de Paris)</label>
                  <div className="flex flex-wrap gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-4 rounded-[8px] border text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
                          selectedTime === time
                            ? 'border-[#132B63] bg-[#132B63] text-white font-bold'
                            : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Clock className="w-3 h-3 opacity-70" />
                        <span>{time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#7B3FF2]/5 p-4 rounded-[8px] border border-[#7B3FF2]/20 flex items-center justify-between">
                  <div className="text-xs text-gray-700">
                    <span className="font-semibold block text-[#132B63]">Récapitulatif sélectionné :</span>
                    <span>{selectedDate} à {selectedTime} (Durée : 30 minutes)</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-white px-2 py-1 rounded-[4px] border border-gray-200 text-[#059669]">
                    Créneau disponible
                  </span>
                </div>
              </>
            ) : (
              <div className="py-4 space-y-4 text-left">
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
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400 hidden sm:inline flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1" /> Données chiffrées & Sécurisées
              </span>
              <button
                type="button"
                onClick={handleConfirmSlot}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#132B63] text-white font-semibold rounded-[8px] hover:bg-[#1a3a82] active:scale-[0.98] transition-all cursor-pointer shadow-md flex items-center justify-center space-x-2 text-sm"
              >
                <span>{selectedTab === 'meeting' ? 'Confirmer la réservation' : 'Valider mon inscription'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
