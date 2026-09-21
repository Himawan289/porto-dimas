export type ProjectCategory = 'all' | 'college' | 'capstone' | 'internship' | 'personal';

export interface Project {
  id: string;
  title: string;
  category: 'college' | 'capstone' | 'internship' | 'personal';
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  period: string;
  role: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  challenges: string;
  solution: string;
  githubUrl?: string;
  liveUrl?: string;
  courseName?: string; // e.g., "Tugas Akhir / Skripsi 2024" or "Rekayasa Perangkat Lunak"
  featured?: boolean;
}

export interface Internship {
  id: string;
  company: string;
  companyLogo?: string;
  role: string;
  type: string; // e.g. "Full-Time Internship" | "MSIB Kampus Merdeka"
  location: string;
  period: string;
  description: string;
  keyAchievements: string[];
  techStack: string[];
  mentorName?: string;
  certificateRefId?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  levelPercentage: number;
  years: string;
  iconName?: string;
  isKeySkill?: boolean;
  relatedCertId?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
  category: 'cloud' | 'web' | 'ai' | 'competition';
  categoryLabel: string;
  description: string;
  previewImage: string;
  scoreOrHonor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  relationship: 'Dosen Pembimbing' | 'Mentor Magang' | 'Tech Lead' | 'Rekan Proyek';
  content: string;
  date: string;
  verified: boolean;
  linkedInUrl?: string;
  rating: number;
}

export interface ProfileInfo {
  name: string;
  nickname: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  gpa: string;
  university: string;
  major: string;
  graduationYear: string;
  status: string; // e.g. "Siap Bekerja / Open to Work"
  avatarUrl: string;
  aboutStory: {
    title: string;
    paragraphs: string[];
  };
  principles: {
    title: string;
    description: string;
    icon: string;
  }[];
  educationMilestones: {
    year: string;
    degree: string;
    institution: string;
    highlights: string[];
  }[];
}
