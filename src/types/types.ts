// Interface to define request schema to the API
export interface PostData {
    username: string;
    password: string;
}

export type PasswordStrengthLabel = 'Too Short' | 'Weak' | 'Medium' | 'Strong' | 'Very Strong';

export interface PasswordStrength {
    score: number;
    label?: PasswordStrengthLabel | null;
    color?: string | '';
}

// Cyber Threats Interface and Enums
export enum CyberThreatType {
  MALWARE = "Malware",
  PHISHING = "Phishing",
  SOCIAL_ENGINEERING = "Social Engineering",
  PASSWORD_ATTACK = "Password Attack",
  NETWORK_ATTACK = "Network Attack",
  WEB_ATTACK = "Web Attack",
  INSIDER_THREAT = "Insider Threat",
  ADVANCED_PERSISTENT_THREAT = "Advanced Persistent Threat",
}

export interface CyberThreats {
    id: number | undefined,
    name: string | null,
    description: string | null
    type: CyberThreatType | null,
}