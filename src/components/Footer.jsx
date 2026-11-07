import React from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenBrandGuide }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090E] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <img 
              src="./brand/logo-horizontal.svg" 
              alt="Distribuidora Ponto Forte" 
              className="h-10 w-auto object-contain"
            />
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              Estrutura de distribuição comercial em Planaltina-DF. Agilidade no atendimento, rotas organizadas e foco na satisfação dos clientes e parceiros locais.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBrandGuide}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Manual de Redesign da Marca</span>
              </button>
            </div>
          </div>

          {/* Institutional Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-amber-400 transition-colors">Canais de Atendimento</a>
              </li>
              <li>
                <a href="#entregas" className="hover:text-amber-400 transition-colors">Política de Entregas</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização &amp; GPS</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contato &amp; Expedição
            </h4>
            
            <div className="space-y-2 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telefone: <strong>{COMPANY_INFO.phoneDisplay}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: <strong>{COMPANY_INFO.phoneDisplay}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency Box */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-slate-300">Nota de Transparência &amp; Demonstração:</strong>{' '}
            {COMPANY_INFO.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {CURRENT_YEAR} Distribuidora Ponto Forte. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Agente de IA: <strong className="text-slate-400">Antigravity</strong>
            </span>
            <span className="text-slate-700">&bull;</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
