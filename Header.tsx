import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/content.ts';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-2.5'
          : 'bg-white border-b border-neutral-100 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          
          {/* Zone 1: Official Eneclim Logo (Seamlessly integrated on light header) */}
          <a
            href="#inicio"
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] group py-1"
            aria-label="Eneclim Climatização - Página Inicial"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#171717] transition-colors relative py-1 text-[14px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F59E0B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 transition-colors"
              title="Ligar para a Eneclim"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl(COMPANY_INFO.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-xs whitespace-nowrap shrink-0 group border border-neutral-800 hover:border-[#F59E0B]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl(COMPANY_INFO.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold text-white bg-[#171717] whitespace-nowrap border border-neutral-800"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Orçamento</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#171717]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-[#171717] hover:pl-1 transition-all py-1.5 border-b border-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl(COMPANY_INFO.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 transition-colors text-center shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
