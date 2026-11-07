import React, { useState } from 'react';
import { MessageCircle, Truck, MapPin, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Hero({ onOpenBrandGuide }) {
  const [showOriginalComparison, setShowOriginalComparison] = useState(false);

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#06080C]">
      
      {/* Cinematic Background Lighting & Architectural Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Massive Ambient Gold Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] sm:w-[1300px] h-[550px] bg-gradient-to-b from-amber-500/12 via-amber-600/5 to-transparent blur-[140px] opacity-90" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-500/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-slate-800/25 blur-[160px] rounded-full" />

        {/* Precision Fine Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #94A3B8 1px, transparent 1px), linear-gradient(to bottom, #94A3B8 1px, transparent 1px)`,
            backgroundSize: '54px 54px'
          }}
        />

        {/* Diagonal Ray Accent */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent transform -skew-x-12" />
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent transform -skew-x-12" />
      </div>

      {/* 90% Screen Width Container */}
      <div className="relative z-10 w-[92%] max-w-[1780px] mx-auto">
        
        {/* Main 2-Column Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column (Content & Authority) - 7 cols */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Telemetry Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#111827] to-[#0A0E17] border border-amber-500/30 shadow-lg shadow-amber-500/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-amber-300 uppercase">
                Hub Logístico Comercial &bull; Planaltina-DF
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="hidden sm:inline text-xs text-slate-300 font-medium">
                Padrão Executivo de Fornecimento
              </span>
            </div>

            {/* Monumental Title */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Força, Precisão e{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Agilidade Operacional
              </span>{' '}
              na Distribuição Comercial.
            </h1>

            {/* Executive Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
              Um modelo de distribuição moderno, seguro e transparente em Planaltina-DF. 
              Conectamos demandas de conveniência, varejo e eventos a um suporte comercial direto, com separação criteriosa e agendamento planejado de rotas.
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-2xl">
              <a
                href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de falar com o atendimento executivo da Distribuidora Ponto Forte.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base tracking-wide rounded-2xl shadow-2xl shadow-amber-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-400 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-transparent transition-transform group-hover:scale-110" />
                <span>Atendimento Direto WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#entregas"
                className="px-7 py-4 bg-[#101622]/90 hover:bg-[#161F30] text-slate-200 hover:text-white font-bold text-base rounded-2xl border border-white/10 hover:border-amber-500/40 flex items-center justify-center gap-2.5 transition-all shadow-lg backdrop-blur-md"
              >
                <Truck className="w-5 h-5 text-amber-400" />
                <span>Consultar Regiões de Entrega</span>
              </a>
            </div>

            {/* Operational Micro-Stats */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Conformidade Legal &amp; Fiscal</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">Despacho sob Confirmação</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">Setor Residencial Leste, Buritis I, Q 5</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Brand Monument Card - 5 cols */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl p-6 sm:p-9 bg-gradient-to-b from-[#111827]/95 via-[#0B0F17]/95 to-[#06080C]/98 border border-amber-500/30 shadow-2xl shadow-black/90 backdrop-blur-2xl group">
              
              {/* Corner Decorative Aura */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-bl-[100px] pointer-events-none transition-all duration-500 group-hover:scale-110" />

              {/* Card Header & Switch */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    {showOriginalComparison ? 'Estudo Vetorial Redesign' : 'Logomarca Oficial da Distribuidora'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowOriginalComparison(!showOriginalComparison)}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold text-amber-300 border border-amber-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Alternar entre a marca oficial e o estudo vetorial"
                >
                  <span>{showOriginalComparison ? 'Ver Logo Oficial' : 'Ver Estudo Vetorial'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

              {/* Display Box */}
              <div className="min-h-[220px] sm:min-h-[260px] flex items-center justify-center p-6 sm:p-8 my-4 relative">
                {showOriginalComparison ? (
                  <div className="text-center animate-in fade-in duration-300 flex flex-col items-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}brand/logo-principal.svg`} 
                      alt="Estudo de Redesign Vetorial Distribuidora Ponto Forte" 
                      className="max-h-32 sm:max-h-44 w-auto object-contain filter drop-shadow-[0_12px_35px_rgba(245,158,11,0.3)] transition-transform duration-300 group-hover:scale-102"
                    />
                    <p className="text-xs text-amber-300/90 mt-4 font-mono font-medium">
                      Estudo vetorial complementar: geometria com linhas finas e contraste contemporâneo.
                    </p>
                  </div>
                ) : (
                  <div className="text-center animate-in fade-in duration-300 flex flex-col items-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}ponto-forte-logo.png`} 
                      alt="Logomarca Oficial Distribuidora Ponto Forte" 
                      className="max-h-36 sm:max-h-48 w-auto object-contain filter drop-shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-103"
                    />
                    <p className="text-xs text-slate-300 mt-4 font-mono font-semibold">
                      Identidade Oficial: <span className="text-amber-400">Distribuidora Ponto Forte &bull; Bebidas em Geral</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Interactive Telemetry Bar Inside Card */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center relative z-10">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Formato</span>
                  <span className="text-xs font-bold text-amber-400 mt-0.5 block">Vetor SVG</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Versões</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">6 Aplicações</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Manual</span>
                  <button 
                    onClick={onOpenBrandGuide}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 mt-0.5 block mx-auto cursor-pointer"
                  >
                    Abrir Guia
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Panoramic 4-Cards Executive Telemetry Strip (Spanning Full 90% Width) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Sede Própria</span>
            </div>
            <h4 className="text-base font-bold text-white">Base em Planaltina-DF</h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Instalação no Setor Residencial Leste, Buritis I, Quadra 5. Ponto estratégico para a circulação local.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Logística</span>
            </div>
            <h4 className="text-base font-bold text-white">Entregas sob Agendamento</h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Cada entrega tem rota e viabilidade validadas previamente pela equipe de expedição via WhatsApp.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Fornecimento</span>
            </div>
            <h4 className="text-base font-bold text-white">Suporte ao Comércio &amp; Eventos</h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Atendimento estruturado para estabelecimentos, conveniências e demandas comerciais programadas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase">Canal Direto</span>
            </div>
            <h4 className="text-base font-bold text-white">WhatsApp (61) 99117-5823</h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Comunicação direta e sem intermediários com o setor de atendimento e cotações.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
