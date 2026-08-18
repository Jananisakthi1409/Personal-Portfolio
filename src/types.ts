export interface SocialLinks {
  github: string;
  githubUser: string;
  linkedin: string;
  linkedinUser: string;
  email: string;
  phone: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  aboutBio: string[];
  college: string;
  degree: string;
  batch: string;
  cgpa: string;
  socials: SocialLinks;
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  focus: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'IoT + AI' | 'Web Development';
  techStack: string[];
  description: string;
  problemSolved: string;
  features: string[];
  outcomes?: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
  usedInProjects?: string[];
  category: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  location: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  domain: string;
  description: string;
  badgeColor: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  tags: string[];
}
