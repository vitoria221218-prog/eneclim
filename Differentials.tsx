import { UserCheck, Sliders, Wrench, ShieldCheck, Building2, Zap } from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data/content.ts';

export function Differentials() {
  const icons = [UserCheck, Sliders, Wrench, ShieldCheck, Building2, Zap];

  return (
    <section id="diferenciais" className="py-20 bg-[#F8F8F6] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Por que escolher a Eneclim</span>
            <span aria-hidden="true">·</span>
            <span>Pilares de Confiança</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] font-display tracking-tight text-balance">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Trabalhamos com seriedade técnica para entregar conforto térmico com segurança, durabilidade e o melhor custo-benefício.
          </p>
        </div>

        {/* 6 Objective visual blocks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS_DATA.map((diff, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={diff.title}
                className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-2xs hover:shadow-xs hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F8F8F6] border border-neutral-200 flex items-center justify-center text-[#171717] mb-4">
                    <Icon className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <h3 className="text-base font-bold text-[#171717] font-display">
                    {diff.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  <span>Padrão Eneclim</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
