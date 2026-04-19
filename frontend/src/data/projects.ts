export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: 'Project_Alpha: Anuvadak',
    description: 'A multi-language translation and localization tool developed during his early career, enabling seamless cross-platform communication.',
    tags: ['Full-Stack', 'Node.js', 'React', 'Localization'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=2000',
    link: '#',
    github: '#',
  },
  {
    title: 'Project_Beta: AppSec_Audit',
    description: 'Comprehensive vulnerability assessment and penetration testing for high-value enterprise applications.',
    tags: ['VAPT', 'Web_Security', 'Mobile_Sec', 'App_Assurance'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2000',
    link: '#',
    github: '#',
  },
  {
    title: 'Project_Gamma: Sentinel_Research',
    description: 'Offensive security research focused on zero-day vulnerability identification and mitigation in diverse digital landscapes.',
    tags: ['Offensive_Sec', 'Vulnerability_Research', 'Mitigation'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2000',
    link: '#',
    github: '#',
  },
  {
    title: 'Project_Delta: Cyber_Intelligence',
    description: 'OSINT platform for tracking threat actor movements and dark web data leakage points.',
    tags: ['OSINT', 'Python', 'Intelligence', 'Monitoring'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000',
    link: '#',
    github: '#',
  },
  {
    title: 'Project_Epsilon: Cloud_Guardian',
    description: 'Automated AWS security auditing tool for identifying IAM misconfigurations and leaky S3 buckets.',
    tags: ['Cloud_Sec', 'AWS', 'Automation', 'Audit'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
    link: '#',
    github: '#',
  },
];
