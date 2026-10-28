import { X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content.ts';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-4">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F59E0B]">
              Transparência & LGPD
            </span>
            <h3 className="text-xl font-bold text-[#171717] font-display mt-0.5">
              Política de Privacidade — Eneclim Climatização
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-800 p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="overflow-y-auto mt-4 pr-1 space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          <p>
            A <strong>{COMPANY_INFO.name}</strong> valoriza a sua privacidade e está comprometida com a proteção dos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>

          <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider pt-2">
            1. Coleta e Finalidade de Dados
          </h4>
          <p>
            Nosso website institucional tem como objetivo apresentar nossos serviços e possibilitar o contato direto para orçamentos. Não realizamos coleta abusiva ou invisível de dados. As informações fornecidas voluntariamente ao entrar em contato por WhatsApp ou e-mail (como nome, telefone, endereço de atendimento e características do equipamento) são utilizadas exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Elaboração e envio de orçamentos técnicos de climatização;</li>
            <li>Agendamento e execução de serviços de instalação, manutenção ou higienização;</li>
            <li>Esclarecimento de dúvidas técnicas e operacionais.</li>
          </ul>

          <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider pt-2">
            2. Compartilhamento e Armazenamento
          </h4>
          <p>
            A Eneclim não comercializa nem compartilha dados de clientes com terceiros para fins publicitários. Os dados permanecem restritos aos técnicos e equipe administrativa responsáveis pelo atendimento do seu serviço.
          </p>

          <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider pt-2">
            3. Direitos do Titular (LGPD)
          </h4>
          <p>
            Você tem o direito de solicitar a confirmação da existência de tratamento, correção de dados incompletos ou eliminação de seus dados de nossa base de contatos a qualquer momento através do e-mail <strong>{COMPANY_INFO.email}</strong>.
          </p>

          <h4 className="font-bold text-[#171717] text-sm uppercase tracking-wider pt-2">
            4. Canais de Contato
          </h4>
          <p>
            Para qualquer esclarecimento sobre a presente política ou sobre seus dados cadastrais:
          </p>
          <p className="bg-[#F8F8F6] p-3 rounded-lg text-xs font-medium text-neutral-700 border border-neutral-200">
            E-mail: {COMPANY_INFO.email} • WhatsApp: {COMPANY_INFO.phone}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 transition-colors"
          >
            Entendi e concordo
          </button>
        </div>
      </div>
    </div>
  );
}
