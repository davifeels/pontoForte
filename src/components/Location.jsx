import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Copy, Check, Navigation, ExternalLink, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-[#06080C] relative overflow-hidden border-t border-white/5">
      
      {/* Ambient background light */}
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827] border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Localização &amp; Acesso Logístico</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight">
            Base Operacional em Planaltina-DF
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-4 leading-relaxed font-normal">
            Endereço cadastral confirmado no Setor Residencial Leste, Buritis I. Ponto estratégico para retiradas comerciais alinhadas e despacho regional.
          </p>
        </div>

        {/* 2-Column Panoramic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start mt-14 sm:mt-20">
          
          {/* Left Column: Direct Contact & Location Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 shadow-2xl relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                
                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold font-mono flex items-center gap-2 transition-all border border-white/10 cursor-pointer"
                  title="Copiar endereço completo"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Endereço Cadastral Confirmado
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1.5 leading-snug">
                  {COMPANY_INFO.address.street}
                </h4>
                <p className="text-sm text-slate-300 mt-1 font-mono">
                  Planaltina &bull; DF &bull; Brasil
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2.5 transition-all border border-white/10"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Telefone &amp; WhatsApp Unificado
              </span>
              <h4 className="text-3xl font-black font-mono text-white mt-1.5">
                {COMPANY_INFO.phoneDisplay}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Linha móvel direta para chamadas de voz e mensagens instantâneas via WhatsApp.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <a
                  href={COMPANY_INFO.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar Direto</span>
                </a>
              </div>
            </div>

            {/* Operational Transparency Note */}
            <div className="p-6 rounded-2xl bg-[#090D14] border border-white/5 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-slate-200 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Alinhamento de Retirada Presencial</span>
              </div>
              <p className="leading-relaxed">
                Por se tratar de uma estrutura comercial com rotas e equipes externas, recomendamos sempre o contato prévio via WhatsApp antes de comparecer para retiradas presenciais no balcão.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Panoramic Interactive Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0A0E17] border border-white/10 shadow-2xl overflow-hidden">
              
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#040609]">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-200">
                    Radar Geográfico &bull; Buritis I, Planaltina-DF
                  </span>
                </div>

                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full h-[450px] sm:h-[520px] bg-slate-950">
                <iframe
                  title="Mapa Distribuidora Ponto Forte - Planaltina DF"
                  src="https://maps.google.com/maps?q=Setor+Residencial+Leste+Buritis+I+Quadra+5+Planaltina+DF&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.95)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlay Pin Indicator */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md p-5 rounded-2xl bg-[#06080C]/95 border border-white/10 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Setor Residencial Leste, Buritis I, Q 5</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5 font-mono">
                    Planaltina - DF &bull; Distribuidora Ponto Forte
                  </p>
                </div>
              </div>

              {/* Map Action Footer */}
              <div className="p-5 bg-[#040609] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span>Coordenadas de referência para GPS e logística comercial</span>
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-bold flex items-center gap-1"
                >
                  Navegar com GPS &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
