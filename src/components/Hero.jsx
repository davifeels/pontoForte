import React, { useState } from 'react';
import { MessageCircle, Truck, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Hero({ onOpenBrandGuide }) {
  const [showOriginalComparison, setShowOriginalComparison] = useState(false);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0F17]">
      {/* Background Lighting & Grid Textures */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial Gold Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent blur-3xl opacity-80" />
        
        {/* Subtle geometric grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Diagonal architectural energy lines */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-800/40 via-transparent to-transparent opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-amber-500/5 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Distribuição Institucional &bull; Planaltina-DF</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-slate-300 font-normal">Nova Presença Digital</span>
          </div>

          {/* Logo Showcase with Interactive Comparison Switch */}
          <div className="w-full max-w-2xl my-4 sm:my-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0B0F17]/90 border border-slate-800/80 shadow-2xl shadow-black/80 backdrop-blur-xl relative group">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{showOriginalComparison ? 'Identidade Original de Referência' : 'Redesign da Marca (Proposta 2026)'}</span>
              </div>

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setShowOriginalComparison(!showOriginalComparison)}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5 border border-slate-700"
                title="Alternar entre a marca original e a proposta modernizada"
              >
                <span>{showOriginalComparison ? 'Ver Nova Marca' : 'Comparar com Original'}</span>
                <ArrowRight className="w-3 h-3 text-amber-400" />
              </button>
            </div>

            {/* Logo Display Box */}
            <div className="min-h-[140px] sm:min-h-[160px] flex items-center justify-center p-4 transition-all duration-300">
              {showOriginalComparison ? (
                <div className="text-center animate-in fade-in duration-300 flex flex-col items-center">
                  <img 
                    src="./original-logo.png" 
                    alt="Logo Original Distribuidora Ponto Forte" 
                    className="max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-md"
                  />
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">
                    Referência histórica: traços energéticos originais preservados no redesign.
                  </p>
                </div>
              ) : (
                <div className="text-center animate-in fade-in duration-300 flex flex-col items-center">
                  <img 
                    src="./brand/logo-principal.svg" 
                    alt="Logo Modernizada Distribuidora Ponto Forte" 
                    className="max-h-28 sm:max-h-36 w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(245,158,11,0.2)]"
                  />
                  <p className="text-[11px] text-amber-400/90 mt-2 font-medium">
                    Vetor modernizado: geometria equilibrada, contraste cirúrgico e precisão digital.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-center gap-4 text-xs text-slate-400">
              <button 
                onClick={onOpenBrandGuide}
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Explorar estudo completo de identidade visual &rarr;
              </button>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl leading-tight sm:leading-none mt-2">
            Força, Confiança e Agilidade na{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200 bg-clip-text text-transparent">
              Distribuição Comercial
            </span>
          </h1>

          {/* Subtitle / Authentic Institutional Pitch */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mt-5 leading-relaxed font-normal">
            Atendimento ágil e suporte dedicado para o comércio, eventos e parceiros em Planaltina-DF. 
            Transparência operacional, pontualidade e compromisso com o seu negócio.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full max-w-md justify-center">
            <a
              href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de falar com o atendimento da Distribuidora Ponto Forte.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 text-transparent" />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href="#entregas"
              className="w-full sm:w-auto px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-base rounded-xl border border-slate-700/80 flex items-center justify-center gap-2 transition-all hover:border-slate-600"
            >
              <Truck className="w-5 h-5 text-amber-400" />
              <span>Consultar Entregas</span>
            </a>
          </div>

          {/* Verified Quick Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-12 w-full max-w-4xl text-left">
            
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Atendimento Ágil</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Canal direto via WhatsApp com respostas rápidas e cotações sob demanda.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Base em Planaltina-DF</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Setor Residencial Leste, Buritis I, Q 5. Ponto estratégico para a região.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Entregas sob Consulta</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Confirmação de rota, horários e viabilidade operacional com a equipe.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
