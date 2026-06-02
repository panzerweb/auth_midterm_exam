import type { CyberThreats } from "@/types/types";
import { CyberThreatType } from "@/types/types";

// List of Cyber Threats

export const cyberThreats: CyberThreats[] = [
  {
    id: 1,
    name: "Virus",
    description:
      "A malicious program that attaches itself to legitimate software and spreads when the infected application is executed.",
    type: CyberThreatType.MALWARE,
  },
  {
    id: 2,
    name: "Worm",
    description:
      "A self-replicating malware that spreads across networks without requiring user interaction.",
    type: CyberThreatType.MALWARE,
  },
  {
    id: 3,
    name: "Trojan Horse",
    description:
      "Malware disguised as legitimate software that tricks users into installing it.",
    type: CyberThreatType.MALWARE,
  },
  {
    id: 4,
    name: "Ransomware",
    description:
      "Malware that encrypts files or systems and demands payment to restore access.",
    type: CyberThreatType.MALWARE,
  },
  {
    id: 5,
    name: "Spyware",
    description:
      "Software that secretly monitors user activity and collects sensitive information.",
    type: CyberThreatType.MALWARE,
  },
  {
    id: 6,
    name: "Phishing",
    description:
      "A fraudulent attempt to obtain sensitive information through deceptive emails, messages, or websites.",
    type: CyberThreatType.PHISHING,
  },
  {
    id: 7,
    name: "Spear Phishing",
    description:
      "A targeted phishing attack aimed at a specific individual or organization.",
    type: CyberThreatType.PHISHING,
  },
  {
    id: 8,
    name: "Whaling",
    description:
      "A phishing attack specifically targeting executives and high-profile individuals.",
    type: CyberThreatType.PHISHING,
  },
  {
    id: 9,
    name: "Pretexting",
    description:
      "An attacker creates a fabricated scenario to trick victims into revealing information.",
    type: CyberThreatType.SOCIAL_ENGINEERING,
  },
  {
    id: 10,
    name: "Baiting",
    description:
      "Attackers lure victims with enticing offers or infected devices to gain access to systems.",
    type: CyberThreatType.SOCIAL_ENGINEERING,
  },
  {
    id: 11,
    name: "Brute Force Attack",
    description:
      "An attempt to gain access by systematically guessing passwords or encryption keys.",
    type: CyberThreatType.PASSWORD_ATTACK,
  },
  {
    id: 12,
    name: "Credential Stuffing",
    description:
      "Attackers use stolen username-password combinations to access multiple accounts.",
    type: CyberThreatType.PASSWORD_ATTACK,
  },
  {
    id: 13,
    name: "DDoS Attack",
    description:
      "Distributed Denial-of-Service attacks overwhelm systems with traffic, making services unavailable.",
    type: CyberThreatType.NETWORK_ATTACK,
  },
  {
    id: 14,
    name: "Man-in-the-Middle (MITM)",
    description:
      "An attacker intercepts communication between two parties to steal or alter data.",
    type: CyberThreatType.NETWORK_ATTACK,
  },
  {
    id: 15,
    name: "SQL Injection",
    description:
      "Attackers inject malicious SQL code into database queries to access or manipulate data.",
    type: CyberThreatType.WEB_ATTACK,
  },
  {
    id: 16,
    name: "Cross-Site Scripting (XSS)",
    description:
      "Attackers inject malicious scripts into web pages viewed by other users.",
    type: CyberThreatType.WEB_ATTACK,
  },
  {
    id: 17,
    name: "Insider Threat",
    description:
      "A security risk originating from employees, contractors, or trusted individuals within an organization.",
    type: CyberThreatType.INSIDER_THREAT,
  },
  {
    id: 18,
    name: "Advanced Persistent Threat (APT)",
    description:
      "A long-term, highly sophisticated cyberattack where attackers remain undetected while stealing information.",
    type: CyberThreatType.ADVANCED_PERSISTENT_THREAT,
  },
];