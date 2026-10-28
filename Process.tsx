import { useState } from 'react';
import { MessageSquare, ClipboardCheck, Calculator, Wrench, Send, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../data/content.ts';

export function Process() {
  const [serviceType, setServiceType] = useState('Instalação de ar-condicionado');
  const [propertyType, setPropertyType] = useState('Residencial (Casa / Apartamento)');
  const [quantity, setQuantity] = useState('1 aparelho');
  const [notes, setNotes] = useState('');

  const stepIcons = [MessageSquare, ClipboardCheck, Calculator, Wrench];

  const handleSimulateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de um orçamento com a Eneclim Climatização:
• Serviço: ${serviceType}
• Imóvel: ${propertyType}
• Quantidade: ${quantity}${notes ? `\n• Detalhes adicionais: ${notes}` : ''}`;
    
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-[#F8F8F6] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Passo a Passo</span>
            <span aria-hidden="true">·</span>
            <span>Sem Burocracia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] font-display tracking-tight text-balance">
            Como Funciona Nosso Atendimento
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Do primeiro contato à finalização do serviço, priorizamos clareza, pontualidade e tranquilidade para você.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-2xs relative flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-[#F59E0B]">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] flex items-center justify-center text-neutral-700">
                      <Icon className="w-4 h-4 text-[#171717]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#171717] font-display">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400 uppercase">
                  <span>Etapa {step.number}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Fast Quote Simulator */}
        <div className="mt-16 bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#F59E0B]">
                Simulador Rápido de Atendimento
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] font-display mt-1">
                Monte sua solicitação e envie direto pelo WhatsApp
              </h3>
              <p className="text-sm text-neutral-600 mt-2">
                Selecione as opções abaixo para adiantar seu atendimento. Nossa equipe receberá a mensagem formatada para responder com agilidade.
              </p>
            </div>

            <form onSubmit={handleSimulateQuote} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Service Select */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Serviço Solicitado
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option value="Instalação de ar-condicionado">Instalação de ar-condicionado</option>
                    <option value="Manutenção preventiva">Manutenção preventiva</option>
                    <option value="Manutenção corretiva">Manutenção corretiva (conserto / reparo)</option>
                    <option value="Higienização profunda">Higienização e sanitização</option>
                    <option value="PMOC para empresas">PMOC (Empresas / Condomínios)</option>
                    <option value="Outro serviço / Orientação técnica">Outro serviço / Avaliação geral</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Tipo de Ambiente
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option value="Residencial (Casa / Apartamento)">Residencial (Casa / Apartamento)</option>
                    <option value="Comercial (Escritório / Loja / Clínica)">Comercial (Escritório / Loja / Clínica)</option>
                    <option value="Condomínio Predial ou Corporativo">Condomínio Predial / Corporativo</option>
                    <option value="Restaurante / Espaço Gastronômico">Restaurante / Alimentação</option>
                  </select>
                </div>

                {/* Quantity of Units */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Quantidade de Aparelhos
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option value="1 aparelho">1 aparelho</option>
                    <option value="2 a 3 aparelhos">2 a 3 aparelhos</option>
                    <option value="4 a 6 aparelhos">4 a 6 aparelhos</option>
                    <option value="Mais de 6 aparelhos (Grande Porte / PMOC)">Mais de 6 aparelhos (Grande Porte)</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Observações ou Bairro (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Zona Sul SP, aparelho não gela..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>Sem compromisso. Atendimento rápido e seguro.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-xs cursor-pointer border border-neutral-800 hover:border-[#F59E0B]"
                >
                  <Send className="w-4 h-4 text-[#25D366]" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
