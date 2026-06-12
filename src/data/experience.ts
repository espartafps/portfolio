export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  area?: string;
  highlights: string[];
  current: boolean;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  current: boolean;
}

export const experiences: Experience[] = [
  {
    period: 'nov 2021 / presente',
    role: 'Capital Markets Analyst',
    company: 'Itaú Unibanco',
    location: 'São Paulo · Híbrido',
    area: 'Capital Markets / Wealth Management: Custódia de Fundos e Processamento de Carteiras',
    highlights: [
      'Liberação e avaliação de cotas de fundos (Asset, FoF e fundos de terceiros)',
      'Conciliação física e financeira de carteiras',
      'Análise de dados e desenvolvimento de KPIs e dashboards de performance',
      'Investigação de problemas operacionais e análise de causa raiz',
      'Melhoria contínua e automação de processos manuais',
    ],
    current: true,
  },
  {
    period: 'abr 2021 / nov 2021',
    role: 'Estagiário: Fund Processing (555 Funds)',
    company: 'Itaú Unibanco',
    location: 'Remoto',
    highlights: [
      'Análise de dados e indicadores de performance',
      'Investigação de causa raiz e otimização de processos',
    ],
    current: false,
  },
];

export const education: Education[] = [
  {
    period: 'jul 2023 / 2026',
    degree: 'Bacharelado em Engenharia Elétrica',
    institution: 'UNISAL',
    current: false,
  },
  {
    period: '2018 / 2023',
    degree: 'Bacharelado em Engenharia Elétrica',
    institution: 'UNESP',
    current: false,
  },
];
