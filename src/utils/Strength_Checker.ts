import type { PasswordStrength, PasswordStrengthLabel } from "@/types/types";

const STRENGTH_COLORS = {
    tooShort: 'text-red-800',
    weakPass: 'text-amber-800',
    mediumPass: 'text-yellow-800',
    strongPass: 'text-teal-800',
    veryStrongPass: 'text-green-800',
}

export function checkStrength(password: string): PasswordStrength {
    if (!password) {
        return {
            score: 0,
            label: 'Too Short',
            color: STRENGTH_COLORS.tooShort,
        };
    }

    let score = 0;

    // Length scoring
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Complexity scoring
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const results: Record<number, { label: PasswordStrengthLabel; color: string }> = {
        0: { label: 'Too Short', color: STRENGTH_COLORS.tooShort },
        1: { label: 'Too Short', color: STRENGTH_COLORS.tooShort },
        2: { label: 'Weak', color: STRENGTH_COLORS.weakPass },
        3: { label: 'Weak', color: STRENGTH_COLORS.weakPass },
        4: { label: 'Medium', color: STRENGTH_COLORS.mediumPass },
        5: { label: 'Strong', color: STRENGTH_COLORS.strongPass },
        6: { label: 'Very Strong', color: STRENGTH_COLORS.veryStrongPass },
    };


    return {
        score,
        ...results[score],
    };
}