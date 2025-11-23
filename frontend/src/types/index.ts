export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  cgpa?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

