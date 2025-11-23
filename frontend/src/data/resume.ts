import type { WorkExperience, Skill, Achievement, Education, SocialLink } from '../types';

export const personalInfo = {
  name: 'Abhishek Arora',
  email: 'abhi5453abhi@gmail.com',
  phone: '9779683156',
  location: 'Sangrur, Punjab',
  intro: "I'm a Senior Software Engineer with expertise in building scalable microservices and full-stack applications. Passionate about solving complex problems and delivering high-quality software solutions.",
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abhishekarora5453',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Abhi5453Abhi',
    icon: 'github',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/abhi_5453',
    icon: 'codechef',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Abhishek54',
    icon: 'codeforces',
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: 'ACV Auctions',
    role: 'Senior Software Engineer',
    period: 'Apr 2025 - Present',
    location: 'Chennai, IN',
    achievements: [
      'Owned MERN-based microservices for vehicle intake (VIN decode, disclosures, appraisals, finance); designed REST endpoints and MongoDB data models with compound indexes and cursor-based pagination to handle 10,000+ daily requests at low latency.',
      'Wrote comprehensive unit/integration tests (Jest, Supertest) and contract tests; introduced Swagger/OpenAPI for consumer alignment, reducing production defects by 30%.',
      'Built internal React dashboards (React Router, Hooks) consuming JWT-protected APIs for operations and reporting.',
    ],
  },
  {
    company: 'LeadSquared',
    role: 'Senior Software Engineer',
    period: 'Apr 2024 - Dec 2024',
    location: 'Bangalore, IN',
    achievements: [
      'Developed backend services in Golang (Fiber) with MongoDB/MySQL; implemented concurrent background jobs, queues, and Prometheus metrics for latency and error budgets.',
      'Built scalable Node.js/Express APIs and React-based internal tools; added authentication (JWT), validation (Zod), and versioned documentation with Swagger/OpenAPI.',
    ],
  },
  {
    company: 'Biofourmis',
    role: 'Software Engineer',
    period: 'Jan 2022 - Apr 2024',
    location: 'Bangalore, IN',
    achievements: [
      'Delivered microservices for digital therapeutics using Golang (Fiber, gRPC); integrated PostgreSQL, MongoDB, Redis, maintained 6+ services with CI/CD.',
      'Built Kafka-based ingestion pipelines for health data (10,000 msgs/sec) and exposed REST/gRPC APIs consumed by React dashboards.',
      'Implemented secure payment workflows with idempotency keys and webhook validation; documented endpoints with Swagger.',
    ],
  },
  {
    company: 'Alyve Health',
    role: 'SDE - Backend',
    period: 'Jan 2021 - Jan 2022',
    location: 'Mumbai, IN',
    achievements: [
      'Designed and shipped slot-booking APIs using Node.js/Go (Fiber) and PostgreSQL; average 500 rps with connection pooling and prepared statements.',
      'Integrated Firebase for reminders/notifications delivering 100,000+ notifications daily; added retries and monitoring.',
      'Introduced Postman collections & Newman tests for CI; standardized API error contracts and versioning.',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Golang', 'C++', 'Java', 'OOP', 'Concurrency'],
  },
  {
    category: 'Web',
    items: [
      'MERN (MongoDB, Express.js, React, Node.js)',
      'Go Fiber/Echo',
      'REST APIs',
      'JWT/OAuth2',
      'WebSockets',
      'HTML5',
      'CSS3',
      'Bootstrap/Tailwind',
      'React Router',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB & Mongoose', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Jira', 'Confluence', 'Swagger/OpenAPI', 'Docker', 'PowerBI'],
  },
];

export const achievements: Achievement[] = [
  {
    year: '2020',
    title: 'Google Hashcode 2020',
    description: 'Top 131/3100+ Teams',
  },
  {
    year: '2020',
    title: 'Codetantra (University)',
    description: 'Top 3/1000+',
  },
  {
    year: '2019',
    title: 'ACM ICPC Asia Kharagpur',
    description: 'Top 70/100+ Teams',
  },
  {
    year: '2019',
    title: 'Engineering Day Hackathon',
    description: 'Top 1/100+ Teams',
  },
  {
    year: '2019',
    title: 'CodeChef',
    description: '2154 Rating (4 Star)',
  },
  {
    year: '2019',
    title: 'Code Chronicles (University)',
    description: 'Top 3/300+',
  },
  {
    year: '2019',
    title: 'AlgoManiac (University)',
    description: 'Top 2/150+ Teams',
  },
  {
    year: '2019',
    title: 'Blind Coding (University)',
    description: 'Top 1/500+',
  },
];

export const education: Education = {
  institution: 'Chandigarh University',
  degree: 'B.E. Computer Science',
  period: '2017 - 2021',
  location: 'Mohali, Punjab',
  cgpa: '7.7 / 10',
};

export const companies = [
  { name: 'ACV Auctions', logo: '/logos/acv-auctions.png' },
  { name: 'LeadSquared', logo: '/logos/leadsquared.png' },
  { name: 'Biofourmis', logo: '/logos/biofourmis.png' },
  { name: 'Alyve Health', logo: '/logos/alyve-health.png' },
];
