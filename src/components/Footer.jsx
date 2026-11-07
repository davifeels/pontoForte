import React from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenBrandGuide }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030407] text-slate-400 text-xs border-t border-white/5 pt-20 pb-14 relative">
      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14 pb-14 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <img 
              src={`${import.meta.env.BASE_URL}brand/logo-horizontal.svg`} 
              alt="Distribuidora Ponto Forte" 
              className="h-11 sm:h-12 w-auto object-contain"
            />
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mt-3">
              Estrutura de distribuição e fornecimento comercial em Planaltina-DF. Agilidade no atendimento, rotas organizadas e foco contínuo na satisfação de parceiros e clientes locais.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBrandGuide}
                className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Manual de Redesign da Marca (2026)</span>
              </button>
            </div>
          </div>

          {/* Institutional Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navegação Institucional
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-amber-400 transition-colors">Atendimento Executivo</a>
              </li>
              <li>
                <a href="#entregas" className="hover:text-amber-400 transition-colors">Política de Entregas</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização &amp; GPS</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Contato &amp; Expedição
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telefone: <strong className="font-mono text-white">{COMPANY_INFO.phoneDisplay}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: <strong className="font-mono text-emerald-400">{COMPANY_INFO.phoneDisplay}</strong></span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={COMPANY_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency Box */}
        <div className="my-10 p-6 rounded-2xl bg-[#080B10] border border-white/5 text-center">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-5xl mx-auto">
            <strong className="text-slate-200">Nota de Transparência &amp; Demonstração:</strong>{' '}
            {COMPANY_INFO.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {CURRENT_YEAR} Distribuidora Ponto Forte. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Agente de IA: <strong className="text-slate-300">Antigravity</strong>
            </span>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer border border-white/5"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
