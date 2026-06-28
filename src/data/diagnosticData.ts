import { Question, PillarScore, Recommendation, UserAnswers, PillarId } from '../types';

export const DIAGNOSTIC_QUESTIONS: Question[] = [
  {
    id: 'q1_collab',
    pillar: 'collaboration',
    pillarLabel: 'Collaboration',
    title: 'Comment vos équipes collaborent-elles au quotidien ?',
    subtitle: 'Évaluation des flux de communication et du partage de l’information',
    options: [
      {
        id: 'c_0',
        points: 0,
        text: 'Échanges par emails isolés avec pièces jointes multiples',
        description: 'Perte de temps en recherche et risques d’erreurs de versionning'
      },
      {
        id: 'c_33',
        points: 33,
        text: 'Messagerie instantanée déployée mais canaux non structurés',
        description: 'Surcharge informationnelle et interruptions fréquentes'
      },
      {
        id: 'c_66',
        points: 66,
        text: 'Espaces partagés (Teams/Slack/Drive) structurés avec conventions',
        description: 'Bonne visibilité asynchrone sur les projets en cours'
      },
      {
        id: 'c_100',
        points: 100,
        text: 'Écosystème collaboratif unifié et parfaitement asynchrone',
        description: 'Réduction drastique des réunions internes et zéro email superflu'
      }
    ]
  },
  {
    id: 'q2_ai',
    pillar: 'ai',
    pillarLabel: 'Intelligence Artificielle',
    title: 'Quel est le niveau d’adoption de l’IA générative dans votre structure ?',
    subtitle: 'Mesure de l’intégration des assistants intelligents dans vos activités',
    options: [
      {
        id: 'ai_0',
        points: 0,
        text: 'Aucun usage officiel, scepticisme ou méconnaissance des outils',
        description: 'Tâches rédactionnelles et d’analyse entièrement manuelles'
      },
      {
        id: 'ai_33',
        points: 33,
        text: 'Usages individuels informels ("Shadow AI") sans cadre sécurisé',
        description: 'Initiatives disparates sans mutualisation des meilleurs prompts'
      },
      {
        id: 'ai_66',
        points: 66,
        text: 'Licences professionnelles déployées sur les cas d’usage prioritaires',
        description: 'Gains de temps réels en synthèse de réunions et rédaction'
      },
      {
        id: 'ai_100',
        points: 100,
        text: 'IA intégrée au cœur des processus métiers (assistants sur mesure)',
        description: 'Avantage concurrentiel décisif et montée en compétence continue'
      }
    ]
  },
  {
    id: 'q3_sec',
    pillar: 'security',
    pillarLabel: 'Sécurité & Gouvernance',
    title: 'Comment assurez-vous la protection de vos données sensibles ?',
    subtitle: 'Niveau de maîtrise des accès, des mots de passe et de la conformité',
    options: [
      {
        id: 's_0',
        points: 0,
        text: 'Mots de passe simples partagés, pas de double authentification',
        description: 'Vulnérabilité critique face au hameçonnage et pertes de données'
      },
      {
        id: 's_33',
        points: 33,
        text: 'Sauvegardes existantes mais gestion des droits d’accès hétérogène',
        description: 'Arrivées et départs de collaborateurs difficiles à auditer'
      },
      {
        id: 's_66',
        points: 66,
        text: 'Double authentification (2FA) systématisée et coffre-fort de mots de passe',
        description: 'Politique de sécurité claire et charte numérique active'
      },
      {
        id: 's_100',
        points: 100,
        text: 'Gouvernance Zero Trust, sauvegardes automatisées et conformité RGPD totale',
        description: 'Résilience maximale et confiance absolue clients/partenaires'
      }
    ]
  },
  {
    id: 'q4_auto',
    pillar: 'automation',
    pillarLabel: 'Automatisation',
    title: 'Comment exécutez-vous les tâches récurrentes (saisie, relances, synchronisation) ?',
    subtitle: 'Identification des goulots d’étranglement dans vos processus métiers',
    options: [
      {
        id: 'auto_0',
        points: 0,
        text: 'Exécution 100% manuelle avec doubles saisies entre logiciels',
        description: 'Faiblesse de productivité et frustration des collaborateurs'
      },
      {
        id: 'auto_33',
        points: 33,
        text: 'Utilisation ponctuelle d’exports CSV et de macros tableur',
        description: 'Manipulations chronophages sujettes aux erreurs humaines'
      },
      {
        id: 'auto_66',
        points: 66,
        text: 'Connecteurs actifs (Make / Zapier / API) sur les flux commerciaux',
        description: 'Automatisation des devis, factures et création de fiches clients'
      },
      {
        id: 'auto_100',
        points: 100,
        text: 'Workflows autonomes de bout en bout avec déclencheurs intelligents',
        description: 'Les outils dialoguent en temps réel sans intervention manuelle'
      }
    ]
  },
  {
    id: 'q5_doc',
    pillar: 'documentary',
    pillarLabel: 'Gestion Documentaire',
    title: 'À quelle vitesse vos collaborateurs accèdent-ils à l’information stratégique ?',
    subtitle: 'Organisation de la mémoire d’entreprise et des documents',
    options: [
      {
        id: 'd_0',
        points: 0,
        text: 'Documents dispersés sur des disques locaux ou dossiers désorganisés',
        description: 'Perte moyenne de 3 à 4 heures par semaine à chercher l’information'
      },
      {
        id: 'd_33',
        points: 33,
        text: 'Espace cloud partagé mais arborescence complexe et doublons',
        description: 'Hésitations fréquentes sur la version officielle d’un document'
      },
      {
        id: 'd_66',
        points: 66,
        text: 'Base de connaissances centralisée (Notion/Sharepoint) indexée',
        description: 'Onboarding des nouveaux arrivants rapide et fiches pratiques à jour'
      },
      {
        id: 'd_100',
        points: 100,
        text: 'Cerveau numérique d’entreprise avec moteur de recherche instantané',
        description: 'Toute l’expertise de l’entreprise accessible en moins de 5 secondes'
      }
    ]
  }
];

export function calculateDiagnosticResults(answers: UserAnswers) {
  const questionIds = Object.keys(answers);
  if (questionIds.length === 0) {
    return {
      globalScore: 0,
      statusLabel: 'Prioritaire' as const,
      statusColor: 'rouge',
      hoursSavedPerMonth: 18,
      radarData: [],
      recommendations: []
    };
  }

  let totalPoints = 0;
  const pillarPointsMap: Record<PillarId, number> = {
    collaboration: 0,
    ai: 0,
    security: 0,
    automation: 0,
    documentary: 0
  };

  DIAGNOSTIC_QUESTIONS.forEach((q) => {
    const ans = answers[q.id];
    const pts = ans ? ans.points : 0;
    totalPoints += pts;
    pillarPointsMap[q.pillar] = pts;
  });

  const globalScore = Math.round(totalPoints / DIAGNOSTIC_QUESTIONS.length);

  // Status logic from PRD 5.1
  let statusLabel: 'Prioritaire' | 'En transition' | 'Optimisé' = 'Prioritaire';
  let statusColor: 'rouge' | 'orange' | 'vert' = 'rouge';

  if (globalScore > 75) {
    statusLabel = 'Optimisé';
    statusColor = 'vert';
  } else if (globalScore >= 40) {
    statusLabel = 'En transition';
    statusColor = 'orange';
  } else {
    statusLabel = 'Prioritaire';
    statusColor = 'rouge';
  }

  // Hours saved calculation (Dynamic estimate based on gaps, defaulting to ~18h as requested in PRD)
  // If score is 82, they still have ~12h to gain. If score is 45, they can gain 22h.
  const baseHours = 32;
  const calculatedHours = Math.max(8, Math.round(baseHours - (globalScore * 0.22)));
  // We ensure it clearly aligns with the "+18 h / mois" benchmark mentioned in PRD section 3 & 4
  const hoursSavedPerMonth = globalScore >= 78 ? 12 : (globalScore >= 50 ? 18 : 26);

  // Radar chart data mapping
  const radarData: PillarScore[] = DIAGNOSTIC_QUESTIONS.map((q) => ({
    pillar: q.pillar,
    subject: q.pillarLabel,
    A: pillarPointsMap[q.pillar] || 0,
    fullMark: 100
  }));

  // Recommendations Generation
  const recommendations: Recommendation[] = [];

  const allPillarsInfo: { pillar: PillarId; label: string; actionLow: string; actionMid: string; gain: string; icon: string }[] = [
    {
      pillar: 'collaboration',
      label: 'Collaboration',
      actionLow: 'Instaurer des règles de communication asynchrone et centraliser les projets sur un espace unique.',
      actionMid: 'Optimiser vos canaux d’équipe pour diviser par deux le volume d’emails internes et réunions d’avancement.',
      gain: '+4h / sem / pers.',
      icon: 'Users'
    },
    {
      pillar: 'ai',
      label: 'Intelligence Artificielle',
      actionLow: 'Déployer un cadre sécurisé d’IA générative et former les managers aux prompts de productivité.',
      actionMid: 'Intégrer des assistants IA spécialisés sur la rédaction commerciale et l’analyse de données.',
      gain: '+6h / sem / pers.',
      icon: 'Cpu'
    },
    {
      pillar: 'security',
      label: 'Sécurité & Gouvernance',
      actionLow: 'Activer immédiatement la double authentification (2FA) sur 100% de vos outils critiques.',
      actionMid: 'Mettre en place un gestionnaire de mots de passe d’entreprise et simplifier la procédure d’onboarding.',
      gain: 'Sérénité & Conformité',
      icon: 'ShieldCheck'
    },
    {
      pillar: 'automation',
      label: 'Automatisation',
      actionLow: 'Connecter votre CRM à votre facturation pour éliminer les doubles saisies quotidiennes.',
      actionMid: 'Créer des alertes intelligentes automatiques de relance client et de suivi de trésorerie.',
      gain: '+5h / sem / pers.',
      icon: 'Zap'
    },
    {
      pillar: 'documentary',
      label: 'Gestion Documentaire',
      actionLow: 'Créer une base de connaissances indexée pour mettre fin à la dispersion des fichiers.',
      actionMid: 'Structurer votre taxonomie documentaire cloud avec moteur de recherche d’entreprise.',
      gain: '+3h / sem / pers.',
      icon: 'FolderTree'
    }
  ];

  allPillarsInfo.forEach((info) => {
    const pts = pillarPointsMap[info.pillar];
    let stat: 'Prioritaire' | 'En transition' | 'Optimisé' = 'Prioritaire';
    let act = info.actionLow;

    if (pts >= 80) {
      stat = 'Optimisé';
      act = `Poursuivre la veille technologique sur le pilier ${info.label} pour maintenir votre avance de productivité.`;
    } else if (pts >= 50) {
      stat = 'En transition';
      act = info.actionMid;
    } else {
      stat = 'Prioritaire';
      act = info.actionLow;
    }

    recommendations.push({
      id: `rec_${info.pillar}`,
      pillar: info.pillar,
      pillarLabel: info.label,
      title: `Levier : ${info.label}`,
      action: act,
      impactGain: info.gain,
      status: stat,
      iconName: info.icon
    });
  });

  // Sort recommendations: Prioritaire first, then En transition, then Optimisé
  const statusOrder = { 'Prioritaire': 0, 'En transition': 1, 'Optimisé': 2 };
  recommendations.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  return {
    globalScore,
    statusLabel,
    statusColor,
    hoursSavedPerMonth,
    radarData,
    recommendations
  };
}
