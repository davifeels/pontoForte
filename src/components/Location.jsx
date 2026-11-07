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
    <section id="localizacao" className="py-20 sm:py-28 bg-[#0E131F] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient background light */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização &amp; Canais de Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Onde Estamos em Planaltina-DF
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Localização confirmada no Setor Residencial Leste, Buritis I. Fácil acesso para retiradas combinadas e centro de expedição regional.
          </p>
        </div>

        {/* 2-Column: Information Cards on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12 sm:mt-16">
          
          {/* Left Column: Direct Contact & Location Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                
                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
                  title="Copiar endereço completo"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Endereço Cadastral Conhecido
                </span>
                <h4 className="text-lg font-bold text-white mt-1 leading-snug">
                  {COMPANY_INFO.address.street}
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  Planaltina &bull; DF &bull; Brasil
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Telefone &amp; WhatsApp Unificado
              </span>
              <h4 className="text-2xl font-black font-mono text-white mt-1">
                {COMPANY_INFO.phoneDisplay}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Linha móvel direta para ligações de voz e mensagens instantâneas via WhatsApp.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Ligar Direto</span>
                </a>
              </div>
            </div>

            {/* Operational Transparency */}
            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Confirmação de Horários</span>
              </div>
              <p className="leading-relaxed">
                Por se tratar de uma estrutura comercial com rotas externas, recomendamos sempre o alinhamento prévio via WhatsApp antes de comparecer para retiradas presenciais no balcão.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View & Navigation Helper */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden">
              
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#0B0F17]/90">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <span className="text-xs font-bold text-slate-200">
                    Mapa de Localização — Buritis I, Planaltina-DF
                  </span>
                </div>

                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Ampliar Mapa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full h-[380px] sm:h-[420px] bg-slate-950">
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
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-3.5 rounded-2xl bg-[#0B0F17]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Setor Residencial Leste, Buritis I, Q 5</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Planaltina - DF &bull; Ponto Forte Distribuidora
                  </p>
                </div>
              </div>

              {/* Map Action Footer */}
              <div className="p-4 bg-[#0B0F17] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>Coordenadas de referência para GPS e entregadores</span>
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-medium flex items-center gap-1"
                >
                  Traçar rota no GPS &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
