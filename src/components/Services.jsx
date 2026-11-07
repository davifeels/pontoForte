import React, { useState } from 'react';
import { Headphones, MessageCircle, Phone, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Services() {
  const [selectedTopic, setSelectedTopic] = useState('Orçamento Comercial');
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState('');

  const topics = [
    { id: 'comercial', label: 'Orçamento Comercial', prompt: 'Gostaria de uma cotação para fornecimento comercial/evento.' },
    { id: 'entrega', label: 'Consulta de Entrega', prompt: 'Gostaria de consultar a disponibilidade de entrega para a minha região em Planaltina-DF.' },
    { id: 'horario', label: 'Horários & Funcionamento', prompt: 'Gostaria de confirmar os horários de atendimento e funcionamento do balcão hoje.' },
    { id: 'geral', label: 'Dúvidas Gerais', prompt: 'Gostaria de mais informações sobre o atendimento da Distribuidora Ponto Forte.' }
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
    <section id="atendimento" className="py-20 sm:py-28 bg-[#0E131F] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>Canais de Comunicação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Atendimento Rápido e Descomplicado
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Priorizamos a conversa direta e humanizada via WhatsApp e telefone. Escolha o assunto desejado e inicie seu contato em poucos segundos.
          </p>
        </div>

        {/* 2-Column Grid: Channels on Left, Interactive WhatsApp Message Builder on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12 sm:mt-16">
          
          {/* Left Column: Direct Channels & Operational Notes */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Channel: WhatsApp */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-emerald-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Canal Prioritário
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mt-4">WhatsApp Oficial</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Envie suas dúvidas, solicite viabilidade de rotas e receba retorno direto da nossa equipe comercial.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-base font-mono font-bold text-emerald-400">
                  {COMPANY_INFO.phoneDisplay}
                </span>
                <a
                  href={COMPANY_INFO.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Chamar Agora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone Call */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                  Ligação Telefônica
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mt-4">Linha Telefônica Direta</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Prefere ligar? Nosso número móvel recebe chamadas diretas para atendimento rápido em horário comercial.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-base font-mono font-bold text-white">
                  {COMPANY_INFO.phoneDisplay}
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors"
                >
                  Ligar Direto
                </a>
              </div>
            </div>

            {/* Operational Transparency Box */}
            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Horários de Atendimento &amp; Funcionamento</span>
              </div>
              <p className="leading-relaxed">
                Para assegurar a informação mais atualizada sobre feriados, finais de semana e escalas operacionais, <strong>consulte diretamente pelo WhatsApp</strong>. Respondemos prontamente com os horários do dia.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Message Builder */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0B0F17] border border-slate-800 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Facilitador de Contato
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Prepare sua Mensagem para o WhatsApp
                  </h3>
                </div>
                <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full font-mono">
                  1-Click Send
                </span>
              </div>

              {/* Topic Pills */}
              <div className="mt-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                  1. Selecione o motivo do seu contato:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.label)}
                      className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all border ${
                        selectedTopic === t.label
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    2. Seu nome ou da sua empresa (opcional):
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ex: Davi / Mercado Estrela / Espaço de Festas"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    3. Detalhes adicionais (opcional):
                  </label>
                  <input
                    type="text"
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Ex: Gostaria de saber entrega para o Buritis II com urgência."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message Live Preview Box */}
              <div className="mt-6 p-4 rounded-2xl bg-[#07090E] border border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-mono">
                  <span>PRÉ-VISUALIZAÇÃO DA MENSAGEM:</span>
                  <span>WhatsApp API</span>
                </div>
                <div className="text-xs sm:text-sm text-emerald-400 font-mono bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20 leading-relaxed whitespace-pre-wrap">
                  "{buildWhatsappMessage()}"
                </div>
              </div>

              {/* Send Button */}
              <div className="mt-6">
                <a
                  href={COMPANY_INFO.whatsappUrl(buildWhatsappMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-base rounded-xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-transparent" />
                  <span>Enviar Mensagem Formatada no WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2.5">
                  Ao clicar, você será direcionado para o número verificado <strong>(61) 99117-5823</strong> no aplicativo do WhatsApp.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
