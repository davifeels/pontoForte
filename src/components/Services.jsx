import React, { useState } from 'react';
import { Headphones, MessageCircle, Phone, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Services() {
  const [selectedTopic, setSelectedTopic] = useState('Orçamento Comercial');
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState('');

  const topics = [
    { id: 'comercial', label: 'Orçamento Comercial', prompt: 'Gostaria de uma cotação para fornecimento comercial / eventos.' },
    { id: 'entrega', label: 'Consulta de Entrega', prompt: 'Gostaria de consultar a disponibilidade de rota e entrega para o meu endereço em Planaltina-DF.' },
    { id: 'horario', label: 'Horários & Balcão', prompt: 'Gostaria de confirmar a escala de funcionamento e atendimento presencial hoje.' },
    { id: 'geral', label: 'Dúvidas Gerais', prompt: 'Gostaria de mais informações sobre os produtos e condições da Distribuidora Ponto Forte.' }
  ];

  const currentTopic = topics.find(t => t.label === selectedTopic) || topics[0];

  const buildWhatsappMessage = () => {
    let text = `Olá, Distribuidora Ponto Forte!`;
    if (userName.trim()) {
      text += ` Me chamo ${userName.trim()}.`;
    }
    text += ` [${selectedTopic}] ${currentTopic.prompt}`;
    if (userNote.trim()) {
      text += ` Observação: ${userNote.trim()}`;
    }
    return text;
  };

  return (
    <section id="atendimento" className="py-24 sm:py-32 bg-[#06080C] relative overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-amber-500/5 blur-[160px] pointer-events-none" />

      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827] border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Headphones className="w-4 h-4 text-amber-400" />
            <span>Atendimento Concierge &bull; Canal Direto</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight">
            Comunicação Ágil, Direta e Sem Intermediários
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-4 leading-relaxed font-normal">
            Priorizamos a resposta humana e veloz. Escolha o assunto desejado e receba retorno direto da nossa equipe comercial via WhatsApp ou chamada de voz.
          </p>
        </div>

        {/* 2-Column Panoramic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start mt-14 sm:mt-20">
          
          {/* Left Column: Direct Channels & Operational Notes (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Channel: WhatsApp Pro */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0F1622] to-[#0A0E17] border border-emerald-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-bl-[100px] pointer-events-none transition-transform group-hover:scale-110" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Canal Prioritário
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mt-6">WhatsApp Comercial</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Envie suas dúvidas, cotações para estabelecimentos ou consulte viabilidade de rota diretamente com quem separa os pedidos.
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-emerald-400">
                  {COMPANY_INFO.phoneDisplay}
                </span>
                <a
                  href={COMPANY_INFO.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Chamar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Direct Phone Call */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0F141F] to-[#0A0D15] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Ligação Telefônica
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mt-6">Linha Telefônica Direta</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Linha móvel direta para ligações de voz e atendimento ágil no mesmo número cadastral.
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-white">
                  {COMPANY_INFO.phoneDisplay}
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-xs rounded-xl border border-white/10 transition-colors"
                >
                  Ligar Direto
                </a>
              </div>
            </div>

            {/* Operational Transparency Box */}
            <div className="p-6 rounded-2xl bg-[#090D14] border border-white/5 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-slate-200 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Horários de Atendimento &amp; Funcionamento</span>
              </div>
              <p className="leading-relaxed">
                Para assegurar a informação mais atualizada sobre feriados, finais de semana e escalas de expedição, <strong>consulte diretamente via WhatsApp</strong>. Respondemos prontamente com os horários vigentes do dia.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Message Builder (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-amber-500/30 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Facilitador de Contato Corporativo
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Prepare sua Mensagem para o WhatsApp
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  1-Click Direct
                </span>
              </div>

              {/* Topic Pills */}
              <div className="mt-8">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  1. Selecione o motivo do seu contato:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.label)}
                      className={`p-3.5 rounded-xl text-xs font-bold text-center transition-all border cursor-pointer ${
                        selectedTopic === t.label
                          ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    2. Seu nome ou da sua empresa (opcional):
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ex: Carlos / Mercado Central / Espaço de Eventos"
                    className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    3. Detalhes adicionais da solicitação (opcional):
                  </label>
                  <input
                    type="text"
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Ex: Gostaria de consultar volume e rota para o Buritis II."
                    className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message Live Preview Box */}
              <div className="mt-7 p-5 rounded-2xl bg-[#040609] border border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2.5">
                  <span>PRÉ-VISUALIZAÇÃO DA MENSAGEM:</span>
                  <span className="text-emerald-400">WhatsApp Direct API</span>
                </div>
                <div className="text-xs sm:text-sm text-emerald-300 font-mono bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/20 leading-relaxed whitespace-pre-wrap">
                  "{buildWhatsappMessage()}"
                </div>
              </div>

              {/* Send Button */}
              <div className="mt-7">
                <a
                  href={COMPANY_INFO.whatsappUrl(buildWhatsappMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-slate-950 font-black text-base rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-transparent" />
                  <span>Enviar Mensagem Formatada no WhatsApp</span>
                </a>
                <p className="text-xs text-center text-slate-500 mt-3 font-mono">
                  Destino direto para o número verificado <strong>(61) 99117-5823</strong>.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
