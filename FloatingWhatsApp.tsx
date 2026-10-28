import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content.ts';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a gentle greeting bubble after 3 seconds of browsing
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Gentle helper bubble */}
      {showTooltip && (
        <div className="bg-white text-neutral-800 text-xs px-3.5 py-2 rounded-xl shadow-lg border border-neutral-200/90 flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div>
            <span className="font-semibold block text-[#171717]">Precisa de orçamento?</span>
            <span className="text-neutral-500 text-[11px]">Fale com nosso técnico pelo WhatsApp!</span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-neutral-700 p-0.5 rounded"
            aria-label="Fechar balão"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl('Olá! Estou no site da Eneclim e gostaria de solicitar um orçamento de ar-condicionado.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20ba59] active:scale-95 transition-all group"
        aria-label="Abrir conversa no WhatsApp com a Eneclim Climatização"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline whitespace-nowrap">
          Solicitar Orçamento
        </span>
      </a>
    </div>
  );
}
