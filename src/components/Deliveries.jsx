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
      desc: "Você entra em contato via WhatsApp detalhando os volumes desejados, necessidades e endereço exato."
    },
    {
      step: "02",
      title: "Validação de Rota & Estoque",
      desc: "Nossa equipe confere a disponibilidade imediata de estoque e o encaixe na escala logística do dia."
    },
    {
      step: "03",
      title: "Confirmação & Acordo",
      desc: "Prazos, taxas de entrega (quando aplicáveis) e formas de pagamento são confirmados antes de qualquer saída."
    },
    {
      step: "04",
      title: "Expedição & Entrega Segura",
      desc: "Os volumes são separados, conferidos item a item e transportados até o endereço combinado em Planaltina-DF."
    }
  ];

  return (
    <section id="entregas" className="py-24 sm:py-32 bg-[#080B10] relative overflow-hidden border-t border-white/5">
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827] border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Política de Logística &amp; Despacho</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight">
            Logística Planejada, Entregas sob Confirmação
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-4 leading-relaxed font-normal">
            Priorizamos a segurança da carga e a pontualidade do seu negócio. Por isso, toda rota é previamente validada quanto à cobertura, volume e janela de expedição.
          </p>
        </div>

        {/* 2-Column Panoramic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start mt-14 sm:mt-20">
          
          {/* Left Column: Process Steps (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-amber-400" />
              <span>Fluxo Operacional de Separação &amp; Despacho:</span>
            </h3>

            <div className="space-y-4">
              {deliverySteps.map((item) => (
                <div 
                  key={item.step}
                  className="p-6 rounded-2xl bg-gradient-to-r from-[#0F141F] to-[#0A0D15] border border-white/10 hover:border-amber-500/30 transition-all flex items-start gap-5 shadow-lg"
                >
                  <div className="text-sm font-mono font-black text-amber-400 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Institutional Disclaimer Box */}
            <div className="p-6 rounded-2xl bg-[#0E131F] border border-amber-500/25 text-xs sm:text-sm text-slate-300 flex items-start gap-4 mt-8">
              <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-amber-400">Compromisso de Transparência Operacional:</strong> Não prometemos prazos milagrosos ou cobertura sem validação prévia. A confirmação direta pelo WhatsApp garante que você tenha a previsão real e precisa para a sua localização e volume.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Region Consultation Simulator (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-amber-500/30 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Consulta Prévia de Viabilidade
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Simulador de Rota em Planaltina-DF
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
                Selecione ou informe seu bairro/quadra em Planaltina-DF para consultar a viabilidade da rota com a equipe de despacho.
              </p>

              {/* Form */}
              <form onSubmit={handleCheck} className="mt-8 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Bairro ou Região de Referência:
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => {
                      setSelectedRegion(e.target.value);
                      setHasQueried(true);
                    }}
                    className="w-full px-5 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                  >
                    {COMPANY_INFO.regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-slate-900 text-white">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Quadra ou Ponto de Referência específico (opcional):
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customAddress}
                      onChange={(e) => setCustomAddress(e.target.value)}
                      placeholder="Ex: Quadra 5, próximo à praça / comércio"
                      className="w-full pl-5 pr-12 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <Search className="w-5 h-5 text-slate-500 absolute right-4 top-3.5" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-bold text-sm rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Verificar Informações para {selectedRegion.split(' ')[0]}</span>
                </button>
              </form>

              {/* Result Feedback Card */}
              {hasQueried && (
                <div className="mt-8 p-6 rounded-2xl bg-[#040609] border border-amber-500/40 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Região Selecionada: {selectedRegion}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    A área de <strong>{selectedRegion}</strong> faz parte do mapa operacional de Planaltina-DF. 
                    {customAddress && ` Referência informada: "${customAddress}".`}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>Status: <strong className="text-amber-400">Sob Confirmação de Rota</strong></span>
                    <span>Prazo: <strong className="text-white">Alinhado no WhatsApp</strong></span>
                  </div>

                  <a
                    href={COMPANY_INFO.whatsappUrl(`Olá! Gostaria de consultar a disponibilidade e taxa de entrega para a região: ${selectedRegion} ${customAddress ? `(Referência: ${customAddress})` : ''} em Planaltina-DF.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Confirmar Rota no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
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
