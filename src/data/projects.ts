export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  github: string;
  demo?: string;
  status: 'active' | 'wip';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'anomaly-detector',
    title: 'Anomaly Detection & Market Correlation',
    tagline:
      'Como eventos geopolíticos globais impactam +25.000 fundos de investimento brasileiros — detectado via Z-score, Random Forest e IA generativa.',
    problem:
      'Monitorar o universo completo de fundos da CVM manualmente é inviável. Além disso, quando anomalias aparecem, falta contexto para entender o que as causou — o fundo mudou, ou foi o mercado?',
    approach:
      'Pipeline em Python que coleta dados diários de +25.000 fundos da CVM e cruza com Ibovespa, dólar, VIX e juros americanos. Detecção de anomalias via Z-score em janelas de 63 dias. Modelo Random Forest treinado com 953 mil observações e 166 features. LLM via API (DeepSeek) para geração de relatórios de insights a menos de US$ 0,01/consulta.',
    result:
      'O dia mais anômalo identificado foi o do cessar-fogo (3.015 fundos afetados — 12,1% do universo), não o do conflito. O rebalanceamento de hedges gerou mais disrupção que o evento militar em si — um achado que só os dados revelaram.',
    stack: [
      'Python',
      'Random Forest',
      'Scikit-learn',
      'Pandas',
      'Plotly',
      'DeepSeek API',
      'CVM API',
      'Yahoo Finance',
    ],
    github: 'https://github.com/espartafps/brazilian-funds-anomaly-detector',
    status: 'wip',
    featured: true,
  },
  {
    id: 'asset-resilience',
    title: 'Asset Resilience BR',
    tagline:
      'Análise quantitativa de como as principais classes de ativos brasileiros se comportaram nas crises de 2020–2023.',
    problem:
      'Durante crises (COVID-19, invasão da Ucrânia, escândalo Americanas), gestores precisam saber quais ativos se recuperam mais rápido — mas análises comparativas rigorosas são raras e muitas vezes anedóticas.',
    approach:
      'Analisou quatro classes de ativos (Ibovespa, IFMM, IMA-B 5, CDI) nos três eventos, calculando drawdown máximo, tempo de recuperação, volatilidade e drawdown normalizado em janelas de 90 e 180 dias.',
    result:
      'Comparativo data-driven de resiliência por classe de ativo em cada crise — com visualizações, testes unitários e Jupyter notebook documentado. Insights sobre correlação entre eventos e movimentos de preço sem afirmações causais.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'Dados CVM', 'Yahoo Finance'],
    github: 'https://github.com/espartafps/Asset-resilience-br',
    status: 'wip',
  },
  {
    id: 'fund-screener',
    title: 'Fund Screener',
    tagline:
      'Plataforma de seleção comportamental de fundos CVM com clustering HDBSCAN, FastAPI e Streamlit.',
    problem:
      'As classificações ANBIMA agrupam fundos pelo rótulo declarado, não pelo comportamento real. Dois fundos com a mesma etiqueta podem ter perfis de risco completamente distintos — e isso passa despercebido nas análises convencionais.',
    approach:
      'Pipeline em cinco etapas: coleta de dados CVM → cálculo de 20+ métricas comportamentais (Sharpe, Sortino, Calmar, VaR, drawdown, alpha, beta) → clustering HDBSCAN para agrupar por comportamento observado → ranking → exposição via FastAPI e Streamlit. Containerizado com Docker.',
    result:
      'Plataforma que substitui classificações genéricas por agrupamentos baseados em evidência. Analistas filtram fundos por comportamento real, comparam por benchmark e exportam análises sem depender de dados da gestora.',
    stack: ['Python', 'HDBSCAN', 'FastAPI', 'Streamlit', 'Pandas', 'Docker', 'Parquet', 'CVM API'],
    github: 'https://github.com/espartafps/fund-screener',
    status: 'wip',
  },
];
