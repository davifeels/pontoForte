import React, { useState } from 'react';
import { Truck, MapPin, CheckCircle, AlertCircle, ArrowRight, Clock, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Deliveries() {
  const [selectedRegion, setSelectedRegion] = useState(COMPANY_INFO.regions[0]);
  const [customAddress, setCustomAddress] = useState('');
  const [hasQueried, setHasQueried] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    setHasQueried(true);
  };

  const deliverySteps = [
    {
      step: "01",
      title: "Solicitação Institucional",
      desc: "Você entra em contato via WhatsApp informando os itens desejados, quantidade e o endereço exato."
    },
    {
      step: "02",
      title: "Análise de Viabilidade",
      desc: "Nossa equipe confere a disponibilidade imediata de estoque e a compatibilidade da rota no momento."
    },
    {
      step: "03",
      title: "Confirmação & Acordo",
      desc: "Prazos, taxas de entrega (se aplicáveis) e formas de pagamento são confirmados antes de qualquer despacho."
    },
    {
      step: "04",
      title: "Expedição & Entrega",
      desc: "Os volumes são separados, conferidos e transportados com cuidado até o endereço combinado em Planaltina."
    }
  ];

  return (
    <section id="entregas" className="py-20 sm:py-28 bg-[#0B0F17] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Truck className="w-3.5 h-3.5" />
            <span>Política de Entregas &amp; Logística</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Logística Planejada, Entregas sob Confirmação
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Priorizamos a segurança e a pontualidade. Por isso, toda entrega é previamente validada quanto à cobertura de rota, volume e agenda da equipe de expedição.
          </p>
        </div>

        {/* 2-Column: Step-by-step Process on Left, Consultation Simulator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12 sm:mt-16">
          
          {/* Left Column: How it Works */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Como funciona nosso fluxo de atendimento &amp; entrega:</span>
            </h3>

            <div className="space-y-4">
              {deliverySteps.map((item) => (
                <div 
                  key={item.step}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors"
                >
                  <div className="text-sm font-black font-mono text-amber-400 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Institutional Disclaimer Box */}
            <div className="p-5 rounded-2xl bg-[#0E131F] border border-amber-500/20 text-xs text-slate-300 flex items-start gap-3 mt-6">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-amber-400">Compromisso de Transparência:</strong> Não prometemos prazos milagrosos ou cobertura irrestrita sem confirmação prévia. A confirmação pelo WhatsApp garante que você tenha a previsão real e precisa para a sua localização.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Region Consultation Simulator */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Consulta Prévia de Região
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Simulador de Viabilidade de Entrega
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Selecione ou digite o seu bairro / quadra em Planaltina-DF para consultar as condições de atendimento com a expedição.
              </p>

              {/* Form */}
              <form onSubmit={handleCheck} className="mt-6 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Bairro ou Região de Referência:
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => {
                      setSelectedRegion(e.target.value);
                      setHasQueried(true);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {COMPANY_INFO.regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-slate-900 text-white">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Quadra / Ponto de Referência específico (opcional):
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customAddress}
                      onChange={(e) => setCustomAddress(e.target.value)}
                      placeholder="Ex: Quadra 5, próximo à praça / comércio"
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-3" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <span>Verificar Informações para {selectedRegion.split(' ')[0]}</span>
                </button>
              </form>

              {/* Result Feedback Card */}
              {hasQueried && (
                <div className="mt-6 p-5 rounded-2xl bg-[#0B0F17] border border-amber-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Região Selecionada: {selectedRegion}</span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    A área de <strong>{selectedRegion}</strong> faz parte do mapa operacional de Planaltina-DF. 
                    {customAddress && ` Referência informada: "${customAddress}".`}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Status: <strong>Sob Confirmação de Rota</strong></span>
                    <span>Prazo: <strong>Confirmado no WhatsApp</strong></span>
                  </div>

                  <a
                    href={COMPANY_INFO.whatsappUrl(`Olá! Gostaria de consultar a disponibilidade e taxa de entrega para a região: ${selectedRegion} ${customAddress ? `(Referência: ${customAddress})` : ''} em Planaltina-DF.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Consultar Viabilidade no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
