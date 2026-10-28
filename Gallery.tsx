import { useState } from 'react';
import { Maximize2, MessageCircle, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppUrl } from '../data/content.ts';

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todas');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filters = ['Todas', 'Instalação', 'Manutenção', 'Higienização', 'Comercial'];

  const filteredItems = selectedFilter === 'Todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Portfólio & Execução</span>
            <span aria-hidden="true">·</span>
            <span>Trabalhos Realizados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] font-display tracking-tight text-balance">
            Galeria de Instalações e Serviços
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Veja detalhes da precisão técnica em instalações residenciais e comerciais, manutenção de condensadoras e higienização especializada.
          </p>
        </div>

        {/* Filter controls (Buttons allowed for functional interactive controls per frontend-design skill) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === f
                  ? 'bg-[#171717] text-white shadow-xs'
                  : 'bg-[#F4F4F2] text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 cursor-pointer aspect-[4/3] shadow-2xs hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md border border-white/20">
                {item.category}
              </div>

              {/* Zoom icon hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption and title */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold font-display leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[16/10] bg-neutral-900 relative">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#F59E0B]">
                  {activePhoto.category}
                </span>
                <h3 className="text-lg font-bold text-[#171717] font-display">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 max-w-xl">
                  {activePhoto.caption}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(`Olá! Vi o trabalho "${activePhoto.title}" no site e gostaria de solicitar um orçamento similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 transition-colors shrink-0 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
