export interface ServiceItem {
  id: string;
  title: string;
  category: 'residencial' | 'comercial' | 'ambos';
  shortDesc: string;
  fullDesc: string;
  items: string[];
  image: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const COMPANY_INFO = {
  name: 'Eneclim Climatização',
  tagline: 'Climatização eficiente para o seu conforto e o seu negócio',
  phone: '(11) 97115-1641',
  phoneRaw: '5511971151641',
  email: 'eneclimclimatiza@gmail.com',
  instagram: '@eneclimclimatiza',
  instagramUrl: 'https://www.instagram.com/eneclimclimatiza/',
  defaultMessage: 'Olá! Gostaria de solicitar um orçamento com a Eneclim Climatização.',
  operatingRegion: 'São Paulo e Região Metropolitana',
};

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || COMPANY_INFO.defaultMessage);
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'instalacao',
    title: 'Instalação de Ar-Condicionado',
    category: 'ambos',
    shortDesc: 'Instalação técnica e padronizada de equipamentos novos, modelos split e inverter com cálculo de capacidade adequado.',
    fullDesc: 'Executamos a instalação completa com ferramentas de ponta, isolamento térmico de qualidade, tubulação em cobre conforme normas do fabricante e vácuo no sistema para máxima durabilidade do compressor.',
    items: [
      'Instalação de equipamentos novos e substituição',
      'Sistemas Split Hi-Wall, Cassete, Piso Teto e Inverter',
      'Avaliação estrutural e pontos elétricos/drenagem',
      'Orientação técnica para correto dimensionamento de BTUs'
    ],
    image: '/src/assets/images/service_installation_technician_1793204132324.jpg',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para instalação de ar-condicionado.'
  },
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção Preventiva',
    category: 'ambos',
    shortDesc: 'Inspeções programadas para garantir eficiência energética, prolongar a vida útil e evitar panes inesperadas em dias críticos.',
    fullDesc: 'Revisão detalhada de pressões de gás refrigerante, corrente elétrica, limpeza de filtros, desobstrução de drenos e conferência de componentes para evitar aumento na conta de luz e quebras repentinas.',
    items: [
      'Inspeções periódicas e verificação operacional',
      'Medição de pressão e parâmetros de refrigeração',
      'Higienização preventiva de filtros e componentes',
      'Planejamento de rotinas para redução de custos com energia'
    ],
    image: '/src/assets/images/service_maintenance_check_1793204132642.jpg',
    whatsappMessage: 'Olá! Preciso de um orçamento para manutenção preventiva de ar-condicionado.'
  },
  {
    id: 'manutencao-corretiva',
    title: 'Manutenção Corretiva',
    category: 'ambos',
    shortDesc: 'Diagnóstico rápido e reparos pontuais em equipamentos que pararam de refrigerar, vazam água ou apresentam códigos de erro.',
    fullDesc: 'Atendimento técnico ágil com instrumental calibrado para localizar vazamentos, falhas eletrônicas na placa, problemas em capacitores, motores ventiladores ou compressores, restaurando a refrigeração.',
    items: [
      'Diagnóstico preciso de falhas mecânicas e elétricas',
      'Reparo de vazamentos e carga de gás refrigerante',
      'Solução para vazamento de água e ruídos anormais',
      'Recuperação do rendimento térmico do equipamento'
    ],
    image: '/src/assets/images/service_maintenance_check_1793204132642.jpg',
    whatsappMessage: 'Olá! Preciso de um orçamento para manutenção corretiva de ar-condicionado.'
  },
  {
    id: 'higienizacao',
    title: 'Higienização de Ar-Condicionado',
    category: 'ambos',
    shortDesc: 'Limpeza química bactericida profunda que elimina fungos, ácaros, poeira e odores desagradáveis, protegendo sua saúde respiratória.',
    fullDesc: 'Procedimento técnico realizado no próprio local utilizando capa coletora e lavadora de alta pressão com produto biodegradável antialérgico, deixando o ar puro e sem sujeira no ambiente.',
    items: [
      'Higienização técnica da serpentina evaporadora e turbina',
      'Aplicação de bactericida e fungicida homologados',
      'Desinfecção de bandejas e desobstrução de drenos',
      'Melhora imediata da qualidade do ar e eficiência do fluxo'
    ],
    image: '/src/assets/images/service_hygiene_cleaning_1793204133674.jpg',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para higienização de ar-condicionado.'
  },
  {
    id: 'pmoc',
    title: 'PMOC — Plano de Manutenção, Operação e Controle',
    category: 'comercial',
    shortDesc: 'Elaboração e execução de planos de manutenção exigidos pela Lei Federal nº 13.589/2018 para empresas, clínicas e condomínios.',
    fullDesc: 'Atendimento especializado para ambientes corporativos com emissão de relatórios periódicos, histórico de intervenções, controle de trocas de filtros e conformidade com as diretrizes da Anvisa.',
    items: [
      'Elaboração e acompanhamento conforme escopo contratado',
      'Organização e guarda dos registros e laudos de manutenção',
      'Rotinas preventivas para garantir a salubridade do ar',
      'Atendimento às exigências legais e normas técnicas aplicáveis'
    ],
    image: '/src/assets/images/commercial_corporate_pmoc_1793204133522.jpg',
    whatsappMessage: 'Olá! Gostaria de obter informações sobre os serviços de PMOC.'
  }
];

export const DIFFERENTIALS_DATA = [
  {
    title: 'Atendimento Personalizado',
    desc: 'Escuta atenta para compreender a real necessidade de cada cliente, indicando exatamente o serviço necessário sem cobranças desnecessárias.'
  },
  {
    title: 'Soluções Adequadas a Cada Ambiente',
    desc: 'Cálculo térmico e estudo do espaço para recomendar a capacidade e o posicionamento ideal dos aparelhos residenciais e comerciais.'
  },
  {
    title: 'Manutenção Preventiva e Corretiva',
    desc: 'Atuação completa: do plano preventivo que evita paradas bruscas ao reparo urgente com diagnóstico técnico detalhado.'
  },
  {
    title: 'Compromisso com a Qualidade',
    desc: 'Utilização de ferramentas de padrão técnico, materiais certificados e cuidado rigoroso com a limpeza do imóvel durante a execução.'
  },
  {
    title: 'Atendimento Residencial e Empresarial',
    desc: 'Flexibilidade e estrutura para atender casas, apartamentos, lojas, escritórios, consultórios e condomínios comerciais.'
  },
  {
    title: 'Foco em Eficiência e Custo-Benefício',
    desc: 'Equipamentos bem instalados e limpos consomem menos energia elétrica e duram mais anos, gerando economia real para você.'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Entre em contato',
    desc: 'Envie uma mensagem pelo WhatsApp informando o tipo de serviço que você precisa ou o sintoma do seu ar-condicionado.'
  },
  {
    number: '02',
    title: 'Avaliação técnica',
    desc: 'Coletamos os detalhes necessários, como capacidade, marca do aparelho e características do ambiente para orientar o atendimento.'
  },
  {
    number: '03',
    title: 'Apresentação do orçamento',
    desc: 'Enviamos uma proposta clara e transparente, especificando os serviços, condições de pagamento e previsão de realização.'
  },
  {
    number: '04',
    title: 'Execução profissional',
    desc: 'O serviço é agendado e realizado com pontualidade, isolamento do local de trabalho e testes práticos de funcionamento.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-multi',
    title: 'Instalação Múltipla de Condensadoras',
    category: 'Instalação',
    image: '/src/assets/images/multiple_ac_units_installed_1793205861303.jpg',
    caption: 'Bateria de condensadoras externas alinhadas em cobertura técnica com calhas e isolamento térmico padronizado.'
  },
  {
    id: 'gal-2',
    title: 'Montagem e Nivelamento Técnico',
    category: 'Instalação',
    image: '/src/assets/images/service_installation_technician_1793204132324.jpg',
    caption: 'Técnico capacitado executando fixação em alvenaria e conexão de linha frigorígena com flangeamento preciso.'
  },
  {
    id: 'gal-3',
    title: 'Inspeção e Manutenção de Condensadora',
    category: 'Manutenção',
    image: '/src/assets/images/service_maintenance_check_1793204132642.jpg',
    caption: 'Aferição de pressões com manifold digital e teste de estanqueidade em unidade condensadora externa.'
  },
  {
    id: 'gal-4',
    title: 'Higienização Profunda com Capa Coletora',
    category: 'Higienização',
    image: '/src/assets/images/service_hygiene_cleaning_1793204133674.jpg',
    caption: 'Lavagem técnica da serpentina evaporadora sem respingos ou sujeira nas paredes e mobílias do cliente.'
  },
  {
    id: 'gal-5',
    title: 'Climatização Corporativa e PMOC',
    category: 'Comercial',
    image: '/src/assets/images/commercial_corporate_pmoc_1793204133522.jpg',
    caption: 'Ambiente empresarial com unidades embutidas no forro, proporcionando distribuição homogênea e silêncio.'
  }
];
