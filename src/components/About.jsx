import React from 'react';
import { Building2, ShieldCheck, MapPin, Truck, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function About() {
  const pillars = [
    {
      icon: MapPin,
      title: "Presença Local em Planaltina-DF",
      description: "Instalada estrategicamente no Setor Residencial Leste, Buritis I, Quadra 5, facilitando a logística interna e o atendimento ao comércio e moradores da região."
    },
    {
      icon: Target,
      title: "Distribuição Comercial Estruturada",
      description: "Foco no fornecimento para estabelecimentos, conveniências, eventos e demandas pontuais, priorizando organização de pedidos e clareza no contato."
    },
    {
      icon: ShieldCheck,
      title: "Conformidade & Rigor Operacional",
      description: "Atuação em estrita conformidade com a legislação aplicável, transparência fiscal, respeito às normas sanitárias e total atenção ao cliente."
    },
    {
      icon: Truck,
      title: "Logística Sob Confirmação",
      description: "Processo de separação e entrega planejado, assegurando que cada rota seja confirmada previamente em termos de viabilidade, prazo e endereço."
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#0B0F17] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-800/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Apresentação Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Sobre a <span className="text-amber-400">Distribuidora Ponto Forte</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Uma estrutura comercial orientada à distribuição ágil e ao atendimento próximo em Planaltina-DF. 
            Conectamos demandas de conveniência, varejo e eventos a um modelo de atendimento prático e transparente.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12 sm:mt-16">
          
          {/* Left Column: Authentic Facts & Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Atuação Comercial Transparente e Responsável</span>
              </h3>
              
              <div className="text-slate-300 text-sm sm:text-base space-y-4 mt-4 leading-relaxed">
                <p>
                  A <strong>Distribuidora Ponto Forte</strong> atua com base no <strong>Setor Residencial Leste, Buritis I, Quadra 5, Planaltina - DF</strong>, oferecendo um canal direto e desburocratizado para fornecimento e atendimento ao cliente.
                </p>
                <p>
                  Em vez de processos engessados, o atendimento é conduzido via canais diretos e telefone, permitindo que cada orçamento, volume de compra ou solicitação de entrega receba atenção individualizada e validação imediata de disponibilidade.
                </p>
                <p className="text-xs text-slate-400 bg-[#0B0F17] p-3.5 rounded-xl border border-slate-800">
                  <strong className="text-amber-400">Nota de Integridade:</strong> Todas as informações desta apresentação institucional refletem os dados cadastrais conhecidos da empresa. Não são apresentadas alegações ou prazos não confirmados pela operação.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300 font-medium">Atendimento via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="text-slate-300 font-medium">Sede Buritis I — Planaltina</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300 font-medium">Logística com Rota Planejada</span>
                </div>
              </div>
            </div>

            {/* Quick Action Pill */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-200">
              <span className="font-semibold text-amber-300">
                Precisa de uma cotação para o seu comércio ou evento?
              </span>
              <a
                href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de consultar condições para pedido comercial com a Distribuidora Ponto Forte.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center gap-1 shrink-0 ml-2"
              >
                <span>Consultar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Logistics Ambiance & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Professional Commercial Logistics Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80" 
                alt="Ambiente de Armazenagem e Distribuição Comercial Organizada" 
                className="w-full h-64 object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/90 text-slate-950">
                  Infraestrutura &amp; Organização
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  Estoque Organizado &amp; Despacho Rápido
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Separação orientada para conferência rigorosa de itens e pontualidade na entrega.
                </p>
              </div>
            </div>

            {/* Commercial Dispatch Ambiance */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-800 text-amber-400 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Logística Regional Coordenada</h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Operações desenhadas para atender Planaltina e áreas limítrofes sob confirmação prévia de escala.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
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
