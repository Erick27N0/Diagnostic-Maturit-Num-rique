export type PillarId = 'collaboration' | 'ai' | 'security' | 'automation' | 'documentary';

export interface QuestionOption {
  id: string;
  text: string;
  points: number; // 0, 33, 66, 100
  description?: string;
}

export interface Question {
  id: string;
  pillar: PillarId;
  pillarLabel: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

export interface UserAnswers {
  [questionId: string]: {
    optionId: string;
    points: number;
  };
}

export interface LeadData {
  firstName: string;
  email: string;
  phone: string;
  company?: string;
}

export interface PillarScore {
  pillar: PillarId;
  subject: string;
  A: number; // user score
  fullMark: number; // 100
}

export interface Recommendation {
  id: string;
  pillar: PillarId;
  pillarLabel: string;
  title: string;
  action: string;
  impactGain: string;
  status: 'Prioritaire' | 'En transition' | 'Optimisé';
  iconName: string;
}

export type AppStep = 'welcome' | 'diagnostic' | 'calculating' | 'capture' | 'dashboard';
