import { useState } from 'react';
import { MessageCircle, Check, ArrowRight, Wrench, Shield, Sparkles, FileText, Settings2 } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppUrl, ServiceItem } from '../data/content.ts';

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'instalacao':
        return Wrench;
      case 'manutencao-preventiva':
        return Shield;
      case 'manutencao-corretiva':
        return Settings2;
      case 'higienizacao':
        return Sparkles;
      case 'pmoc':
        return FileText;
      default:
        return Wrench;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#F8F8F6] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Especialidades Técnicas</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] font-display tracking-tight text-balance">
            Serviços Especializados em Climatização
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Soluções completas com suporte técnico qualificado para manter a temperatura ideal, o ar puro e o menor consumo de energia no seu imóvel.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = getServiceIcon(service.id);
            const isMarquee = idx === 0 || idx === 4;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
                  isMarquee && idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Header / Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Category unboxed tag */}
                  <div className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-neutral-700/50">
                    {service.category === 'comercial' ? 'Comercial & Corporativo' : 'Residencial & Comercial'}
                  </div>

                  {/* Service Title on image overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B] text-[#171717] flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-4 h-4 text-[#171717]" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-display leading-tight truncate">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Check items */}
                    <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Row */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-neutral-600 hover:text-[#171717] inline-flex items-center gap-1 transition-colors py-1 cursor-pointer"
                    >
                      <span>Detalhes técnicos</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </button>

                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#171717] hover:bg-neutral-800 transition-colors shrink-0 shadow-2xs group/btn border border-neutral-800 hover:border-[#F59E0B]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Orçamento</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global callout banner within services section */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-lg font-bold text-[#171717] font-display">
              Precisa de uma avaliação para um caso específico?
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Nossa equipe orienta você na escolha do equipamento ideal, verificação da rede elétrica e dimensionamento correto de BTUs.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Olá! Preciso de uma orientação técnica para o meu espaço.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#171717] bg-[#F59E0B] hover:bg-[#e08e06] active:scale-[0.98] transition-all shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#171717]" />
            <span>Falar com especialista</span>
          </a>
        </div>

      </div>

      {/* Technical Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-4">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F59E0B]">
                  Detalhamento do Serviço
                </span>
                <h3 className="text-xl font-bold text-[#171717] font-display mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-neutral-400 hover:text-neutral-800 p-1 rounded-md"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm text-neutral-700 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  O que está incluso:
                </h4>
                <ul className="space-y-2">
                  {selectedService.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-xs text-neutral-800">
                      <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F8F8F6] p-4 rounded-xl text-xs text-neutral-600 border border-neutral-200/70">
                Atendimento pontual com técnicos identificados e respeito às normas vigentes de climatização e refrigeração.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
              >
                Fechar
              </button>
              <a
                href={getWhatsAppUrl(selectedService.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
