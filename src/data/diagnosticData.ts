import { Question, PillarScore, Recommendation, UserAnswers, PillarId } from '../types';

export const DIAGNOSTIC_QUESTIONS: Question[] = [
  // Page 1 : Collaboration Q1 & Q2
  {
    id: 'q1_collab',
    pillar: 'collaboration',
    pillarLabel: 'Collaboration',
    title: 'Quel est votre canal de communication principal en interne ?',
    subtitle: 'Évaluation des flux de communication et de la réactivité',
    options: [
      {
        id: 'col_1_0',
        points: 0,
        text: 'Emails individuels ou appels téléphoniques improvisés',
        description: 'Recherche d\'information complexe et pertes de temps quotidiennes'
      },
      {
        id: 'col_1_50',
        points: 50,
        text: 'Messagerie d\'équipe (Teams/Slack) active mais sans structure de canaux',
        description: 'Surcharge cognitive, interruptions incessantes et sentiment d\'urgence'
      },
      {
        id: 'col_1_100',
        points: 100,
        text: 'Messagerie structurée avec des règles de communication asynchrone',
        description: 'Zéro email interne superflu et des réunions limitées au strict nécessaire'
      }
    ]
  },
  {
    id: 'q2_collab',
    pillar: 'collaboration',
    pillarLabel: 'Collaboration',
    title: 'Comment organisez-vous le suivi de vos projets d\'équipe ?',
    subtitle: 'Mesure de la transparence et de la synchronisation',
    options: [
      {
        id: 'col_2_0',
        points: 0,
        text: 'Pas d\'outil dédié, suivi verbal ou notes personnelles',
        description: 'Manque de visibilité globale et difficultés de coordination'
      },
      {
        id: 'col_2_50',
        points: 50,
        text: 'Fichiers Excel/Word partagés ou tableur mis à jour périodiquement',
        description: 'Processus lourd à maintenir et risques d\'erreurs de versions'
      },
      {
        id: 'col_2_100',
        points: 100,
        text: 'Gestionnaire de tâches collaboratif (Trello, Monday, Notion) en temps réel',
        description: 'Responsabilités claires, avancement visuel et fluidité optimale'
      }
    ]
  },

  // Page 2 : Collaboration Q3 & Intelligence Artificielle Q4
  {
    id: 'q3_collab',
    pillar: 'collaboration',
    pillarLabel: 'Collaboration',
    title: 'Comment sont gérées et documentées vos réunions d\'équipe ?',
    subtitle: 'Optimisation du temps de réunion et de la capitalisation d\'idées',
    options: [
      {
        id: 'col_3_0',
        points: 0,
        text: 'Réunions systématiques, longues et sans ordre du jour prédéfini',
        description: 'Réunions chronophages avec faible niveau d\'engagement'
      },
      {
        id: 'col_3_50',
        points: 50,
        text: 'Réunions régulières avec compte-rendu rédigé manuellement',
        description: 'Rédaction fastidieuse et délais dans la diffusion des décisions'
      },
      {
        id: 'col_3_100',
        points: 100,
        text: 'Réunions limitées à l\'essentiel avec synthèses assistées par IA',
        description: 'Partage d\'informations instantané et focus sur la valeur ajoutée'
      }
    ]
  },
  {
    id: 'q4_ai',
    pillar: 'ai',
    pillarLabel: 'Intelligence Artificielle',
    title: 'Quel est le niveau d\'adoption de l\'IA générative chez vos collaborateurs ?',
    subtitle: 'Évaluation de la maturité des usages d\'outils comme ChatGPT',
    options: [
      {
        id: 'ai_1_0',
        points: 0,
        text: 'Aucun usage officiel, scepticisme ou méconnaissance',
        description: 'Vos tâches de rédaction et d\'analyse restent 100% manuelles'
      },
      {
        id: 'ai_1_50',
        points: 50,
        text: 'Utilisation individuelle informelle sans cadre ni partage de prompts',
        description: 'Risques de sécurité (fuites de données) et inefficacité globale'
      },
      {
        id: 'ai_1_100',
        points: 100,
        text: 'Licences professionnelles sécurisées et partages de bonnes pratiques',
        description: 'Gains de temps massifs, cas d\'usage validés et culture de l\'IA'
      }
    ]
  },

  // Page 3 : Intelligence Artificielle Q5 & Q6
  {
    id: 'q5_ai',
    pillar: 'ai',
    pillarLabel: 'Intelligence Artificielle',
    title: 'Comment créez-vous vos contenus professionnels récurrents ?',
    subtitle: 'Rédaction commerciale, courriels de prospection, rapports',
    options: [
      {
        id: 'ai_2_0',
        points: 0,
        text: 'Création manuelle récurrente à partir d\'une page blanche',
        description: 'Processus lent demandant un investissement en temps important'
      },
      {
        id: 'ai_2_50',
        points: 50,
        text: 'Modèles de documents fixes à personnaliser manuellement',
        description: 'Manque d\'originalité et de personnalisation approfondie'
      },
      {
        id: 'ai_2_100',
        points: 100,
        text: 'Génération assistée par des invites (prompts) d\'IA structurées',
        description: 'Rédaction ultra-rapide, personnalisée et hautement qualitative'
      }
    ]
  },
  {
    id: 'q6_ai',
    pillar: 'ai',
    pillarLabel: 'Intelligence Artificielle',
    title: 'Comment utilisez-vous la donnée pour guider vos choix stratégiques ?',
    subtitle: 'Exploitation des données d\'entreprise pour la prise de décision',
    options: [
      {
        id: 'ai_3_0',
        points: 0,
        text: 'Décisions basées sur l\'intuition sans données consolidées',
        description: 'Risques d\'angles morts stratégiques et d\'erreurs de ciblage'
      },
      {
        id: 'ai_3_50',
        points: 50,
        text: 'Rapports statiques créés périodiquement sur des tableurs',
        description: 'Analyse lente, chronophage et tournée vers le passé'
      },
      {
        id: 'ai_3_100',
        points: 100,
        text: 'Tableaux de bord dynamiques et analyses prédictives IA actives',
        description: 'Vision claire du futur et décisions éclairées en quelques secondes'
      }
    ]
  },

  // Page 4 : Automatisation Q7 & Q8
  {
    id: 'q7_auto',
    pillar: 'automation',
    pillarLabel: 'Automatisation',
    title: 'Comment gérez-vous la saisie d\'informations entre vos différents logiciels ?',
    subtitle: 'Évaluation des doubles saisies et de l\'intégration logicielle',
    options: [
      {
        id: 'aut_1_0',
        points: 0,
        text: 'Recopie manuelle et systématique d\'une plateforme à une autre',
        description: 'Tâches ultra-répétitives à faible valeur ajoutée et source d\'erreurs'
      },
      {
        id: 'aut_1_50',
        points: 50,
        text: 'Exports et imports manuels de fichiers Excel/CSV de façon régulière',
        description: 'Manipulations chronophages et décalage temporel dans les données'
      },
      {
        id: 'aut_1_100',
        points: 100,
        text: 'Flux automatisés en temps réel via des API ou connecteurs (Make/Zapier)',
        description: 'Les outils dialoguent seuls sans aucune intervention humaine'
      }
    ]
  },
  {
    id: 'q8_auto',
    pillar: 'automation',
    pillarLabel: 'Automatisation',
    title: 'Quelle est la maturité de votre processus de facturation et relance ?',
    subtitle: 'Fluidité de la chaîne commerciale et encaissement',
    options: [
      {
        id: 'aut_2_0',
        points: 0,
        text: 'Édition manuelle des factures et suivi informel',
        description: 'Risques d\'oublis, délais de paiement rallongés et perte de trésorerie'
      },
      {
        id: 'aut_2_50',
        points: 50,
        text: 'Logiciel de facturation dédié mais relances manuelles au cas par cas',
        description: 'Processus lourd demandant un suivi rigide de vos équipes'
      },
      {
        id: 'aut_2_100',
        points: 100,
        text: 'Facturation intégrée au CRM avec relances automatiques programmées',
        description: 'Trésorerie optimisée et relances courtoises automatiques'
      }
    ]
  },

  // Page 5 : Automatisation Q9 & Sécurité & Gouvernance Q10
  {
    id: 'q9_auto',
    pillar: 'automation',
    pillarLabel: 'Automatisation',
    title: 'Comment gérez-vous l\'intégration (onboarding) de vos nouveaux clients ?',
    subtitle: 'Mise en œuvre des services et expérience de démarrage',
    options: [
      {
        id: 'aut_3_0',
        points: 0,
        text: 'Processus informel et entièrement manuel au coup par coup',
        description: 'Manque de professionnalisme perçu et oublis de documents clés'
      },
      {
        id: 'aut_3_50',
        points: 50,
        text: 'Liste de contrôle (checklist) suivie manuellement par vos équipes',
        description: 'Charge mentale élevée pour l\'équipe et lenteur de démarrage'
      },
      {
        id: 'aut_3_100',
        points: 100,
        text: 'Espace client, mails et outils configurés via des workflows automatiques',
        description: 'Expérience d\'onboarding remarquable et immédiate sans effort'
      }
    ]
  },
  {
    id: 'q10_sec',
    pillar: 'security',
    pillarLabel: 'Sécurité & Gouvernance',
    title: 'Comment gérez-vous l\'accès aux mots de passe de vos outils ?',
    subtitle: 'Niveau de protection des identifiants sensibles de l\'entreprise',
    options: [
      {
        id: 'sec_1_0',
        points: 0,
        text: 'Mots de passe simples, identiques ou partagés sans sécurité',
        description: 'Vulnérabilité critique aux cyberattaques et risques de vol'
      },
      {
        id: 'sec_1_50',
        points: 50,
        text: 'Mots de passe enregistrés individuellement sur les navigateurs web',
        description: 'Aucune centralisation ni contrôle lors du départ d\'un collaborateur'
      },
      {
        id: 'sec_1_100',
        points: 100,
        text: 'Coffre-fort d\'entreprise partagé (1Password/Bitwarden) avec 2FA',
        description: 'Sécurité totale, droits révocables en 1 clic et confort d\'accès'
      }
    ]
  },

  // Page 6 : Sécurité & Gouvernance Q11 & Q12
  {
    id: 'q11_sec',
    pillar: 'security',
    pillarLabel: 'Sécurité & Gouvernance',
    title: 'Quelle est la sensibilisation de vos équipes face au piratage ?',
    subtitle: 'Évaluation de la résilience humaine face au phishing et ingénierie sociale',
    options: [
      {
        id: 'sec_2_0',
        points: 0,
        text: 'Aucune sensibilisation, nous réagissons si un problème survient',
        description: 'Risque majeur d\'usurpation d\'identité ou d\'arnaque au président'
      },
      {
        id: 'sec_2_50',
        points: 50,
        text: 'Charte informatique signée ou brief ponctuel à l\'onboarding',
        description: 'Vigilance moyenne qui diminue rapidement au fil du temps'
      },
      {
        id: 'sec_2_100',
        points: 100,
        text: 'Formations continues, tests d\'intrusion réguliers et alertes actives',
        description: 'Une culture de sécurité forte qui protège activement l\'entreprise'
      }
    ]
  },
  {
    id: 'q12_sec',
    pillar: 'security',
    pillarLabel: 'Sécurité & Gouvernance',
    title: 'Comment gérez-vous les sauvegardes de vos données et fichiers critiques ?',
    subtitle: 'Plan de reprise d\'activité et intégrité des données',
    options: [
      {
        id: 'sec_3_0',
        points: 0,
        text: 'Sauvegardes manuelles et irrégulières sur supports physiques',
        description: 'Risque élevé de pertes définitives de dossiers clients ou financiers'
      },
      {
        id: 'sec_3_50',
        points: 50,
        text: 'Synchronisation automatique sur le cloud par défaut (OneDrive/Drive)',
        description: 'Protection basique mais vulnérable en cas de ransomware actif'
      },
      {
        id: 'sec_3_100',
        points: 100,
        text: 'Sauvegardes chiffrées quotidiennes, externalisées et testées régulièrement',
        description: 'Reprise d\'activité en moins d\'une heure sans aucune perte de donnée'
      }
    ]
  },

  // Page 7 : Gestion Documentaire Q13 & Q14
  {
    id: 'q13_doc',
    pillar: 'documentary',
    pillarLabel: 'Gestion Documentaire',
    title: 'Comment organisez-vous le stockage et le partage de vos documents d\'entreprise ?',
    subtitle: 'Gestion du savoir et structuration de la mémoire de l\'entreprise',
    options: [
      {
        id: 'doc_1_0',
        points: 0,
        text: 'Fichiers éparpillés sur les PC locaux, clés USB ou pièces jointes',
        description: 'Temps considérable perdu à rechercher la dernière version'
      },
      {
        id: 'doc_1_50',
        points: 50,
        text: 'Dossier Cloud partagé mais arborescence complexe ou mal rangée',
        description: 'Création de doublons fréquents et doutes sur le document officiel'
      },
      {
        id: 'doc_1_100',
        points: 100,
        text: 'Base de connaissances centralisée et indexée avec une taxonomie claire',
        description: 'Mémoire interne structurée, accès en moins de 10 secondes'
      }
    ]
  },
  {
    id: 'q14_doc',
    pillar: 'documentary',
    pillarLabel: 'Gestion Documentaire',
    title: 'Comment un collaborateur accède-t-il à une procédure ou savoir d\'entreprise ?',
    subtitle: 'Facilité d\'autonomie des équipes face à l\'information technique',
    options: [
      {
        id: 'doc_2_0',
        points: 0,
        text: 'Obligation de demander à un collègue ou recherche prolongée vaine',
        description: 'Perte de temps en chaîne et frein sur l\'onboarding de collaborateurs'
      },
      {
        id: 'doc_2_50',
        points: 50,
        text: 'Recherche fastidieuse au sein de nombreux fichiers Word/PDF du serveur',
        description: 'Information difficile d\'accès et souvent obsolète'
      },
      {
        id: 'doc_2_100',
        points: 100,
        text: 'Moteur de recherche interne ou assistant IA branché sur vos documents',
        description: 'Onboarding éclair et réponse exacte fournie instantanément'
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

  // Calculate points accumulated per pillar, tracking how many questions exist for each
  const pillarPointsMap: Record<PillarId, number> = {
    collaboration: 0,
    ai: 0,
    security: 0,
    automation: 0,
    documentary: 0
  };

  const pillarCountsMap: Record<PillarId, number> = {
    collaboration: 0,
    ai: 0,
    security: 0,
    automation: 0,
    documentary: 0
  };

  DIAGNOSTIC_QUESTIONS.forEach((q) => {
    const ans = answers[q.id];
    const pts = ans ? ans.points : 0;
    pillarPointsMap[q.pillar] += pts;
    pillarCountsMap[q.pillar] += 1;
  });

  // Calculate final score per pillar as the average of the points obtained (ensuring it stays on 100)
  const pillarAverages: Record<PillarId, number> = {
    collaboration: 0,
    ai: 0,
    security: 0,
    automation: 0,
    documentary: 0
  };

  let totalScoreSum = 0;
  const pillars: PillarId[] = ['collaboration', 'ai', 'security', 'automation', 'documentary'];
  
  pillars.forEach((p) => {
    const count = pillarCountsMap[p] || 1;
    pillarAverages[p] = Math.round(pillarPointsMap[p] / count);
    totalScoreSum += pillarAverages[p];
  });

  const globalScore = Math.round(totalScoreSum / pillars.length);

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
  const hoursSavedPerMonth = globalScore >= 78 ? 12 : (globalScore >= 50 ? 18 : 26);

  // Radar chart data mapping
  const radarData: PillarScore[] = [
    { pillar: 'collaboration', subject: 'Collaboration', A: pillarAverages.collaboration, fullMark: 100 },
    { pillar: 'ai', subject: 'IA Générative', A: pillarAverages.ai, fullMark: 100 },
    { pillar: 'security', subject: 'Sécurité & RGPD', A: pillarAverages.security, fullMark: 100 },
    { pillar: 'automation', subject: 'Automatisation', A: pillarAverages.automation, fullMark: 100 },
    { pillar: 'documentary', subject: 'Gestion Doc.', A: pillarAverages.documentary, fullMark: 100 }
  ];

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
    const pts = pillarAverages[info.pillar];
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
