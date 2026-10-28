import { MessageCircle, Mail, Instagram, MapPin, Zap } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { COMPANY_INFO, getWhatsAppUrl, SERVICES_DATA } from '../data/content.ts';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export function Footer({ onOpenPrivacy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Official Brand Logo & Bio */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Official logo emblem */}
              <div className="flex items-center gap-3">
                <Logo variant="light" size="md" />
              </div>

              <p className="mt-4 text-xs text-neutral-400 leading-relaxed max-w-sm">
                Empresa especializada em instalação, manutenção preventiva, corretiva e higienização de ar-condicionado. Atendimento qualificado para residências, comércios e empresas.
              </p>

              <div className="mt-5 flex items-center gap-2 text-neutral-400 text-xs">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Atendimento em São Paulo e Região Metropolitana</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                aria-label="Instagram da Eneclim"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#25D366] hover:border-neutral-700 transition-colors"
                aria-label="WhatsApp da Eneclim"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F59E0B] hover:border-neutral-700 transition-colors"
                aria-label="E-mail da Eneclim"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links with Direct WhatsApp */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a
                    href={getWhatsAppUrl(s.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <Zap className="w-3 h-3 text-[#F59E0B] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact Data */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Canais Oficiais
            </h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase">WhatsApp</span>
                  <span className="text-neutral-200 font-medium">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase">E-mail</span>
                  <span className="text-neutral-200 font-medium break-all">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase">Instagram</span>
                  <span className="text-neutral-200 font-medium">{COMPANY_INFO.instagram}</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & LGPD */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-neutral-300 transition-colors underline cursor-pointer"
            >
              Política de Privacidade (LGPD)
            </button>
            <span aria-hidden="true">·</span>
            <span>Segurança & Confiabilidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
