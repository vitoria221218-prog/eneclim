/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { About } from './components/About.tsx';
import { Differentials } from './components/Differentials.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Process } from './components/Process.tsx';
import { CtaSection } from './components/CtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans selection:bg-[#F59E0B]/30 selection:text-[#171717]">
      {/* 6.1 Cabeçalho */}
      <Header />

      <main className="flex-1">
        {/* 6.2 Hero Section */}
        <Hero />

        {/* 6.3 Seção de Serviços */}
        <Services />

        {/* 6.4 Seção Institucional - Sobre a Eneclim */}
        <About />

        {/* 6.5 Seção de Diferenciais */}
        <Differentials />

        {/* 6.6 Seção de Galeria de Imagens */}
        <Gallery />

        {/* 6.7 Processo de Atendimento e Simulador de Orçamento */}
        <Process />

        {/* 6.8 Chamada Final para Conversão */}
        <CtaSection />
      </main>

      {/* 6.9 Rodapé */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Botão Flutuante de WhatsApp para Conversão Contínua */}
      <FloatingWhatsApp />

      {/* Modal de Privacidade e LGPD */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
