import { MessageCircle, ArrowDown, ShieldCheck, CheckCircle2, Award, Building2, Zap, Wrench, Sparkles, FileText } from 'lucide-react';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/content.ts';

export function Hero() {
  const trustPoints = [
    {
      icon: Building2,
      label: 'Residencial & Corporativo',
      desc: 'Soluções sob medida para casas, apartamentos, empresas e condomínios'
    },
    {
      icon: Award,
      label: 'Qualidade Técnica Padronizada',
      desc: 'Instalação com flangeamento preciso, teste de estanqueidade e vácuo'
    },
    {
      icon: ShieldCheck,
      label: 'Conformidade & Segurança',
      desc: 'Normas técnicas vigentes dos fabricantes e planos de PMOC'
    },
    {
      icon: CheckCircle2,
      label: 'Orçamento Rápido e Sem Custo',
      desc: 'Atendimento direto com técnico via WhatsApp em São Paulo e região'
    }
  ];

  const quickServices = [
    {
      title: 'Instalação',
      subtitle: 'Split, Inverter e Multi-Split',
      icon: Wrench,
      msg: 'Olá! Gostaria de solicitar um orçamento para instalação de ar-condicionado.'
    },
    {
      title: 'Higienização',
      subtitle: 'Limpeza profunda e bactericida',
      icon: Sparkles,
      msg: 'Olá! Gostaria de solicitar um orçamento para higienização de ar-condicionado.'
    },
    {
      title: 'Manutenção',
      subtitle: 'Preventiva e Corretiva',
      icon: Zap,
      msg: 'Olá! Preciso de um orçamento para manutenção de ar-condicionado.'
    },
    {
      title: 'PMOC Corporativo',
      subtitle: 'Conformidade com a Lei 13.589',
      icon: FileText,
      msg: 'Olá! Gostaria de obter informações sobre os serviços de PMOC.'
    }
  ];

  return (
    <section id="inicio" className="relative pt-24 sm:pt-32 pb-16 lg:pb-20 overflow-hidden bg-white">
      {/* Background soft ambient radial gradient with golden warm glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8F8F6]/80 -z-10 rounded-bl-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split: Content on Left, Multiple AC Units Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and WhatsApp Conversion Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Regional Identification Tag */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-600 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[#F59E0B]">
                <Zap className="w-3.5 h-3.5 fill-[#F59E0B]" />
                Eneclim Climatização
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>São Paulo & Região Metropolitana</span>
            </div>

            {/* Main PRD Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#171717] leading-[1.14] tracking-tight font-display text-balance">
              Climatização eficiente para o seu conforto e o seu negócio.
            </h1>

            {/* PRD Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl text-balance">
              Instalação, manutenção preventiva e corretiva de ar-condicionado com atendimento profissional para residências e empresas.
            </p>

            {/* Direct Conversion Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl(COMPANY_INFO.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-md group border border-neutral-900 hover:border-[#F59E0B]"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold text-[#171717] bg-[#F8F8F6] hover:bg-neutral-200 active:scale-[0.98] transition-all border border-neutral-300"
              >
                <span>Conhecer nossos serviços</span>
                <ArrowDown className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* WhatsApp availability badge */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Atendimento ativo no WhatsApp: (11) 97115-1641
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Orçamento rápido e sem compromisso</span>
            </div>
          </div>

          {/* Right Column: High-Impact Photo of Multiple AC Units Installed */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200/90 aspect-[4/3] lg:aspect-[5/4] bg-neutral-100 group">
              <img
                src="/src/assets/images/multiple_ac_units_installed_1793205861303.jpg"
                alt="Vários aparelhos e condensadoras de ar-condicionado instalados com tubulações alinhadas e padrão técnico da Eneclim Climatização"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

              {/* Technical badge on photo */}
              <div className="absolute top-4 left-4 bg-[#171717]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Instalações Padronizadas
                </span>
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-[#F59E0B]">
                  <Zap className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  <span>Capacidade Técnica Eneclim</span>
                </div>
                <p className="text-sm font-semibold leading-snug mt-0.5">
                  Alinhamento preciso de condensadoras, tubulações isoladas e máxima eficiência operacional
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Direct Service Selectors */}
        <div className="mt-14 w-full">
          <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
            Atendimento imediato por especialidade:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quickServices.map((qs) => {
              const Icon = qs.icon;
              return (
                <a
                  key={qs.title}
                  href={getWhatsAppUrl(qs.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-[#F8F8F6] border border-neutral-200/90 hover:border-[#F59E0B] hover:bg-white hover:shadow-xs transition-all text-left flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 group-hover:border-[#F59E0B]/50 group-hover:bg-[#FEF3C7]/40 flex items-center justify-center text-[#171717] shrink-0 transition-colors">
                    <Icon className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#171717] group-hover:text-[#F59E0B] transition-colors">
                      {qs.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      {qs.subtitle}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 4-Column Credibility strip below hero */}
        <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#F8F8F6] border border-neutral-200/70 flex items-center justify-center shrink-0 text-[#171717]">
                <point.icon className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#171717]">{point.label}</h3>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
