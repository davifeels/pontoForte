import React from 'react';
import { Building2, ShieldCheck, MapPin, Truck, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function About() {
  const pillars = [
    {
      icon: MapPin,
      number: "01",
      title: "Base Própria em Planaltina-DF",
      description: "Operando a partir do Setor Residencial Leste, Buritis I, Quadra 5, garantindo ponto estratégico para a logística de abastecimento local e regional."
    },
    {
      icon: Target,
      number: "02",
      title: "Distribuição Comercial Organizada",
      description: "Atendimento estruturado para estabelecimentos, comércio varejista, conveniências e eventos, com foco em pedidos programados e conferência rigorosa."
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Rigor & Conformidade Institucional",
      description: "Atuação transparente, estrito cumprimento das legislações vigentes, respeito aos parceiros comerciais e integridade em todas as etapas operacionais."
    },
    {
      icon: Truck,
      number: "04",
      title: "Logística Coordenada sob Demanda",
      description: "Nenhuma rota é despachada sem alinhamento prévio. Cada cliente recebe retorno claro sobre disponibilidade, janela de entrega e viabilidade."
    }
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#080B10] relative overflow-hidden border-t border-white/5">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[140px] pointer-events-none" />

      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827] border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-5">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Infraestrutura &amp; Apresentação Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight">
            Excelência Operacional e Presença Sólida na{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Distribuição do DF
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-5 leading-relaxed font-normal max-w-4xl">
            A <strong>Distribuidora Ponto Forte</strong> combina localização estratégica em Planaltina-DF a um processo de atendimento ágil, proporcionando segurança e previsibilidade a comerciantes e clientes.
          </p>
        </div>

        {/* 2-Column Panoramic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center mt-14 sm:mt-20">
          
          {/* Left Column: Institutional Narrative & Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#0A0D15] border border-white/10 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
                <span>Modelo de Atendimento Direto e Humanizado</span>
              </h3>
              
              <div className="text-slate-300 text-sm sm:text-base space-y-4 mt-5 leading-relaxed">
                <p>
                  Sediada no <strong>Setor Residencial Leste, Buritis I, Quadra 5, Planaltina - DF</strong>, a Distribuidora Ponto Forte se diferencia por eliminar intermediários desnecessários e burocracias, conectando você diretamente à equipe responsável pelo estoque e pela separação.
                </p>
                <p>
                  Cada demanda — seja o fornecimento regular para comércios locais ou atendimento a eventos sob encomenda — passa por uma conferência minuciosa de itens antes de qualquer saída de entrega ou liberação no balcão de atendimento.
                </p>
                <div className="p-4 rounded-2xl bg-[#06080C] border border-amber-500/20 text-xs text-slate-300 space-y-1">
                  <div className="font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Princípio de Integridade Cadastral</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed pt-1">
                    Esta apresentação institucional reflete os dados reais e confirmados da empresa. Não são apresentadas alegações não confirmadas pela operação.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  <span>WhatsApp Unificado</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                  <span>Base Buritis I, Q 5</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0"></span>
                  <span>Rotas Coordenadas</span>
                </div>
              </div>
            </div>

            {/* Quick Action Pill */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-200 gap-4">
              <span className="font-bold text-amber-300 text-center sm:text-left">
                Deseja uma cotação para o seu comércio ou evento em Planaltina?
              </span>
              <a
                href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de consultar condições para pedido comercial com a Distribuidora Ponto Forte.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Falar com Atendimento</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visuals of Premium Logistics Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Logistics Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
                alt="Ambiente de Armazenagem e Distribuição Comercial Organizada" 
                className="w-full h-80 sm:h-96 object-cover filter brightness-[0.85] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500 text-slate-950">
                  Infraestrutura de Distribuição
                </span>
                <h4 className="text-xl font-bold text-white mt-2">
                  Estoque Organizado &amp; Despacho Preciso
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Controle contínuo de volumes para garantir conferência rigorosa na saída e entrega pontual aos parceiros.
                </p>
              </div>
            </div>

            {/* Second Logistics Bay Ambiance */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0F141F] to-[#0A0D15] border border-white/10 flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Truck className="w-7 h-7" />
              </div>
              <div>
                <h5 className="text-base font-bold text-white">Logística de Despacho Regional</h5>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Operações desenhadas para atender Planaltina e proximidades com validação prévia de rota pela equipe.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid (Spanning Full 90% Width) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16 sm:mt-24">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.number}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-white/10 hover:border-amber-500/30 hover:bg-[#111827] transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-mono font-bold text-amber-500/60">
                    {item.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
