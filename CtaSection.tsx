import { MessageCircle, Phone, Mail, Instagram, Zap } from 'lucide-react';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/content.ts';

export function CtaSection() {
  return (
    <section id="contato" className="py-20 bg-[#171717] text-white relative overflow-hidden">
      {/* Subtle background ambient golden glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Unboxed kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#F59E0B] mb-4">
          <Zap className="w-3.5 h-3.5 fill-[#F59E0B]" />
          <span>Atendimento Imediato</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Sem Espera</span>
        </div>

        {/* PRD Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-balance">
          Precisa de uma solução em climatização?
        </h2>

        {/* PRD Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Fale com a Eneclim e solicite um orçamento para seu equipamento ou ambiente.
        </p>

        {/* Main WhatsApp CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(COMPANY_INFO.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#171717] bg-[#F59E0B] hover:bg-[#e08e06] active:scale-[0.98] transition-all shadow-lg group"
          >
            <MessageCircle className="w-5 h-5 text-[#171717] group-hover:scale-110 transition-transform" />
            <span>Conversar com um especialista</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 active:scale-[0.98] transition-all hover:border-[#F59E0B]"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Ligar: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Direct contact chips */}
        <div className="mt-12 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          
          <a
            href={getWhatsAppUrl(COMPANY_INFO.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#F59E0B] transition-colors flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">WhatsApp Oficial</p>
              <p className="text-sm font-semibold text-white">{COMPANY_INFO.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#F59E0B] transition-colors flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">E-mail Comercial</p>
              <p className="text-sm font-semibold text-white truncate max-w-[200px]">{COMPANY_INFO.email}</p>
            </div>
          </a>

          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#F59E0B] transition-colors flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5 text-[#E1306C]" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Instagram</p>
              <p className="text-sm font-semibold text-white">{COMPANY_INFO.instagram}</p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
