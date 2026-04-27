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