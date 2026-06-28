import React from 'react';
import { PillarScore, Recommendation, LeadData } from '../types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import {
  Clock,
  Sparkles,
  ArrowRight,
  Download,
  CheckCircle2,
  AlertTriangle,
  Users,
  Cpu,
  ShieldCheck,
  Zap,
  FolderTree,
  CalendarCheck,
  FileText,
  TrendingUp,
} from 'lucide-react';

interface DashboardViewProps {
  globalScore: number;
  statusLabel: 'Prioritaire' | 'En transition' | 'Optimisé';
  statusColor: 'rouge' | 'orange' | 'vert';
  hoursSavedPerMonth: number;
  radarData: PillarScore[];
  recommendations: Recommendation[];
  leadData: LeadData | null;
  onOpenBooking: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  globalScore,
  statusLabel,
  statusColor,
  hoursSavedPerMonth,
  radarData,
  recommendations,
  leadData,
  onOpenBooking,
}) => {
  // Sémantique des couleurs (PRD 3.1)
  const getStatusBadgeStyles = () => {
    switch (statusColor) {
      case 'vert':
        return {
          bg: 'bg-[#10B981]/10',
          text: 'text-[#059669]',
          border: 'border-[#10B981]/30',
          ring: '#10B981',
          icon: <CheckCircle2 className="w-5 h-5 text-[#10B981]" />,
        };
      case 'orange':
        return {
          bg: 'bg-[#F59E0B]/10',
          text: 'text-[#D97706]',
          border: 'border-[#F59E0B]/30',
          ring: '#F59E0B',
          icon: <TrendingUp className="w-5 h-5 text-[#F59E0B]" />,
        };
      case 'rouge':
      default:
        return {
          bg: 'bg-[#EF4444]/10',
          text: 'text-[#DC2626]',
          border: 'border-[#EF4444]/30',
          ring: '#EF4444',
          icon: <AlertTriangle className="w-5 h-5 text-[#EF4444]" />,
        };
    }
  };

  const statusStyles = getStatusBadgeStyles();

  // Helper d'icônes dynamiques pour les recommandations
  const renderRecIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'FolderTree':
      default:
        return <FolderTree className="w-5 h-5" />;
    }
  };

  const handleSimulatePDFDownload = () => {
    // Elegant simulated PDF download action
    alert(`Rapport_Maturite_${leadData?.firstName || 'Dirigeant'}_NouvanceIA.pdf a été envoyé par email et est prêt en téléchargement.`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col space-y-10">
      
      {/* Banner réassurance email envoyé */}
      {leadData && (
        <div className="bg-[#132B63] text-white p-4 rounded-[8px] flex items-center justify-between shadow-xs text-xs sm:text-sm">
          <div className="flex items-center space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#A96DFF] shrink-0" />
            <span>
              Rapport complet généré pour <span className="font-semibold">{leadData.firstName}</span> ({leadData.email}). Un exemplaire PDF vient de vous être expédié.
            </span>
          </div>
          <button
            onClick={handleSimulatePDFDownload}
            className="hidden md:inline-flex items-center space-x-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-[8px] transition-colors text-xs font-medium cursor-pointer shrink-0 ml-4"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
        </div>
      )}

      {/* =========================================================================
          BLOC SUPÉRIEUR (Niveau 1) : LE SCORE GLOBAL (PRD 3.1)
          ========================================================================= */}
      <div className="bg-white rounded-[8px] border border-gray-200 p-8 sm:p-12 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
        
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Votre Score Global de Maturité Numérique
        </span>

        {/* Jauge centrale / Anneau de score minimaliste */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border-8 border-gray-100 flex items-center justify-center shadow-inner relative">
            <div
              className="absolute inset-0 rounded-full border-8 transition-all duration-1000"
              style={{
                borderColor: statusStyles.ring,
                clipPath: `polygon(0 0, 100% 0, 100% ${globalScore}%, 0 ${globalScore}%)`,
              }}
            />
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold tracking-tight text-[#132B63]" style={{ fontFamily: 'Inter' }}>
                {globalScore}
              </span>
              <span className="text-xs font-medium text-gray-400 mt-1">/ 100</span>
            </div>
          </div>
        </div>

        {/* Statut label */}
        <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-[8px] border font-semibold text-sm ${statusStyles.bg} ${statusStyles.text} ${statusStyles.border}`}>
          {statusStyles.icon}
          <span>Statut : {statusLabel}</span>
        </div>

        <p className="text-sm text-gray-500 max-w-xl mt-6 font-normal leading-relaxed">
          {globalScore > 75
            ? 'Félicitations, vous disposez d’une excellente base. Vos priorités sont d’automatiser les derniers goulots et de consolider vos processus IA.'
            : globalScore >= 40
            ? 'Votre organisation est en cours de structuration numérique. Des gains rapides de plusieurs heures par semaine sont immédiatement activables.'
            : 'Des actions prioritaires sont requises sur vos outils collaboratifs et la sécurisation des données pour débloquer votre productivité.'}
        </p>
      </div>


      {/* =========================================================================
          BLOC CENTRAL (Niveau 2) : LES INDICATEURS & DONNÉES (PRD 3.2 & 5.3)
          Contrainte Responsive : Grille à 2 colonnes desktop, 1 colonne mobile
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* À Gauche — Carte KPI (Temps Économisé) */}
        <div className="bg-white rounded-[8px] border border-gray-200 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-gray-500 mb-6">
              <Clock className="w-5 h-5 text-[#7B3FF2]" />
              <span className="text-xs font-semibold uppercase tracking-wider">Potentiel de productivité</span>
            </div>

            <h3 className="text-lg text-gray-700 font-medium mb-2">Gain estimé pour vos équipes :</h3>
            
            {/* KPI Temps en grand (Inter Medium 22px+, Violet Nouvance #7B3FF2 - PRD 3.2) */}
            <div className="text-4xl sm:text-5xl font-semibold text-[#7B3FF2] tracking-tight my-4">
              +{hoursSavedPerMonth} h / mois
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              soit près de <span className="font-semibold text-[#132B63]">{Math.round(hoursSavedPerMonth * 12)} heures libérées par an</span> pour chaque manager, pouvant être réinjectées dans l'exécution stratégique plutôt que la saisie manuelle.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Référentiel : PME & ETI européennes</span>
            <span className="text-[#7B3FF2] font-semibold flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Fiabilité diagnostique haute
            </span>
          </div>
        </div>


        {/* À Droite — Graphique Radar de Maturité (PRD 3.2) */}
        <div className="bg-white rounded-[8px] border border-gray-200 p-6 sm:p-8 shadow-sm flex flex-col">
          <div className="flex items-center space-x-2 text-gray-500 mb-4">
            <TrendingUp className="w-5 h-5 text-[#132B63]" />
            <span className="text-xs font-semibold uppercase tracking-wider">Graphique Radar des 5 Piliers</span>
          </div>

          <div className="w-full h-[280px] sm:h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#475569', fontSize: 11, fontWeight: 500 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CBD5E1" />
                <Radar
                  name="Maturité"
                  dataKey="A"
                  stroke="#7B3FF2"
                  fill="#7B3FF2"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-center text-xs text-gray-400 mt-2">
            Comparaison visuelle sur 100 points • Ligne fluide Violet Nouvance (#7B3FF2)
          </div>
        </div>
      </div>


      {/* =========================================================================
          SECTION 4 : LE LEAD MAGNET & CAPTURE FLOW (PRD 4.1 & 4.2)
          La Carte Recommandation "Premium" (Le Hook)
          ========================================================================= */}
      <div className="bg-[#F8F9FB] rounded-[8px] border-2 border-[#A96DFF] p-8 sm:p-10 shadow-sm relative overflow-hidden my-4">
        <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#A96DFF]/10 rounded-full pointer-events-none blur-xl"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#7B3FF2] text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>LEAD MAGNET NOUVANCE IA</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#132B63] tracking-tight">
              Votre feuille de route pour libérer {hoursSavedPerMonth}h par mois
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-2xl">
              L'analyse montre que la gestion de vos outils collaboratifs et l'intégration de l'IA sont vos plus grands leviers de progression. Vos équipes peuvent économiser plusieurs heures chaque semaine grâce à une méthode adaptée.
            </p>
          </div>

          {/* L'Appel à l'Action Principal (Le CTA Unique - PRD 4.2) */}
          <div className="w-full md:w-auto shrink-0 self-stretch md:self-center flex flex-col">
            <button
              onClick={onOpenBooking}
              className="w-full md:w-auto px-8 py-4 h-14 bg-[#132B63] text-white font-semibold rounded-[8px] shadow-md hover:bg-[#1a3a82] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-3 text-sm sm:text-base"
            >
              <CalendarCheck className="w-5 h-5 text-[#A96DFF]" />
              <span>Réserver mon plan d'action & Valider mon accès</span>
            </button>
            <span className="text-[11px] text-gray-500 text-center mt-2 font-medium">
              Entretien de cadrage offert (30 min) • Places de formation limitées
            </span>
          </div>
        </div>
      </div>


      {/* =========================================================================
          BLOC INFÉRIEUR (Niveau 3) : LES RECOMMANDATIONS PRIORISÉES (PRD 3.3)
          Règle du Brand Book : Du général au particulier
          ========================================================================= */}
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-[#132B63] tracking-tight">
            Plan d'action priorisé par pilier
          </h3>
          <p className="text-sm text-gray-500 font-normal">
            Chaque carte met en avant une action corrective immédiate pour vos managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => {
            const isPrio = rec.status === 'Prioritaire';

            return (
              <div
                key={rec.id}
                className={`bg-white rounded-[8px] p-6 border flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow ${
                  isPrio ? 'border-[#EF4444]/40 bg-[#EF4444]/2' : 'border-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-[#132B63]/10 text-[#132B63] flex items-center justify-center">
                      {renderRecIcon(rec.iconName)}
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-[6px] border ${
                        rec.status === 'Prioritaire'
                          ? 'bg-[#EF4444]/10 text-[#DC2626] border-[#EF4444]/30'
                          : rec.status === 'En transition'
                          ? 'bg-[#F59E0B]/10 text-[#D97706] border-[#F59E0B]/30'
                          : 'bg-[#10B981]/10 text-[#059669] border-[#10B981]/30'
                      }`}
                    >
                      {rec.status}
                    </span>
                  </div>

                  <h4 className="font-semibold text-[#132B63] text-base mb-2">{rec.title}</h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                    {rec.action}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">Gain estimé</span>
                  <span className="font-semibold text-[#7B3FF2]">{rec.impactGain}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer minimaliste de réassurance */}
      <footer className="pt-10 pb-6 border-t border-gray-200 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-[4px] bg-[#132B63] text-white flex items-center justify-center font-bold text-[10px]">
            N
          </div>
          <span className="font-semibold text-gray-600">Nouvance IA</span>
          <span>• © {new Date().getFullYear()} Tous droits réservés</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#confidentialite" onClick={(e) => e.preventDefault()} className="hover:text-gray-600">Confidentialité</a>
          <a href="#conditions" onClick={(e) => e.preventDefault()} className="hover:text-gray-600">Mentions légales</a>
          <a href="#support" onClick={(e) => e.preventDefault()} className="hover:text-gray-600">Support Dirigeants</a>
        </div>
      </footer>

    </div>
  );
};
