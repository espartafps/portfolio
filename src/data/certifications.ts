export interface Certification {
  title: string;
  issuer: string;
  year: string;
  highlight?: boolean;
}

export const certifications: Certification[] = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    year: '2026',
    highlight: true,
  },
  {
    title: 'Gestão de Projetos — Trained',
    issuer: 'Itaú Unibanco',
    year: '2026',
  },
  {
    title: 'M365 Copilot Expert',
    issuer: 'Itaú Unibanco',
    year: '2025',
  },
  {
    title: 'Associate — Analytics Engineering',
    issuer: 'Itaú Unibanco',
    year: '2025',
  },
  {
    title: 'Associate — Generative AI',
    issuer: 'Itaú Unibanco',
    year: '2025',
  },
  {
    title: 'Joining Data in SQL · Intermediate SQL · Intermediate Python',
    issuer: 'DataCamp',
    year: '2025',
  },
  {
    title: 'Certificado Data Beginner',
    issuer: 'XP Educação',
    year: '2025',
  },
];
