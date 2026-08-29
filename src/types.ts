export type ProfileMode = 'hybrid' | 'architect' | 'operations';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  category: 'enterprise' | 'analytics' | 'ai' | 'workflow' | 'devops';
  cardColor: string; // e.g. '#1e3a8a' | '#dc2626' | '#4338ca' | '#0f766e' | '#b45309' | '#0284c7'
  bgGradient: string;
  accentHex: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  timeline: string;
  linkText?: string;
  architecturePoints?: string[];
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'experience' | 'education' | 'certification';
  category: 'architect' | 'operations' | 'academic' | 'credential';
  description: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Production-Grade', 'Expert'
    highlight?: boolean;
    yearsOrScope?: string;
  }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
  year?: string;
  verified?: boolean;
  credentialUrl?: string;
}

export interface MessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
