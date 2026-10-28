import { ShieldCheck, HeartHandshake, Sparkles, Building, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content.ts';

export function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Responsabilidade Técnica',
      desc: 'Execução de serviços com ferramental adequado, testes de vácuo, isolamento de linhas e respeito às normas de fábrica.'
    },
    {
      icon: Sparkles,
      title: 'Limpeza e Organização',
      desc: 'Cuidado total com o espaço do cliente. Proteção de paredes e pisos, trabalho limpo e descarte correto de resíduos.'
    },
    {
      icon: HeartHandshake,
      title: 'Transparência Total',
      desc: 'Orçamentos claros com diagnóstico sincero. Sem trocas de peças desnecessárias e com explicação didática do problema.'
    },
    {
      icon: Building,
      title: 'Versatilidade de Atendimento',
      desc: 'Capacidade técnica comprovada tanto para residências e apartamentos quanto para empresas, escritórios e condomínios.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual storytelling showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Photo */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-[4/3] bg-neutral-100">
                <img
                  src="/src/assets/images/service_installation_technician_1793204132324.jpg"
                  alt="Técnico da Eneclim Climatização trabalhando com precisão e ferramentas adequadas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quiet commitment stamp card */}
              <div className="mt-4 p-5 rounded-xl bg-[#F8F8F6] border border-neutral-200">
                <p className="text-xs uppercase tracking-wider font-bold text-[#F59E0B]">Compromisso Eneclim</p>
                <p className="text-sm font-semibold text-[#171717] mt-1">
                  Atendimento ágil, pontualidade no agendamento e garantia de funcionamento perfeito.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              <span>Sobre a Eneclim</span>
              <span aria-hidden="true">·</span>
              <span>Nossa Trajetória</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] font-display tracking-tight leading-tight text-balance">
              Soluções em climatização com qualidade e responsabilidade.
            </h2>

            <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                A <strong className="text-[#171717] font-semibold">Eneclim Climatização</strong> atua na instalação, manutenção e higienização de sistemas de ar-condicionado, oferecendo soluções para clientes residenciais e comerciais.
              </p>
              <p>
                Nosso compromisso é proporcionar atendimento profissional, qualidade nos serviços e soluções adequadas às necessidades de cada ambiente, buscando sempre o melhor custo-benefício para nossos clientes.
              </p>
            </div>

            {/* Core Values grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="p-4 rounded-xl bg-[#F8F8F6] border border-neutral-200/60 hover:bg-neutral-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                      <v.icon className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#171717]">{v.title}</h3>
                  </div>
                  <p className="text-xs text-neutral-600 mt-2 leading-normal">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={getWhatsAppUrl('Olá! Conheci a Eneclim pelo site e gostaria de saber mais sobre o atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 transition-colors shadow-xs border border-neutral-800 hover:border-[#F59E0B]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Falar com nossa equipe</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
