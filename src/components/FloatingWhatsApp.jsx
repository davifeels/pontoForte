import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="mb-2.5 p-3 rounded-2xl bg-[#0B0F17]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative text-left">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5 rounded"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Atendimento Direto</span>
          </div>
          <p className="text-xs text-slate-300 pr-4">
            Dúvidas ou cotações? Converse conosco pelo WhatsApp oficial!
          </p>
        </div>
      )}

      {/* Main Trigger Button */}
      <a
        href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de falar com o atendimento da Distribuidora Ponto Forte.")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="Iniciar conversa no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#0B0F17] animate-pulse"></span>
        <MessageCircle className="w-7 h-7 fill-slate-950 text-transparent" />
      </a>

    </div>
  );
}
