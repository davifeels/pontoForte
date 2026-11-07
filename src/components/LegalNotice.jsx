import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section className="py-14 bg-[#040609] border-t border-b border-white/5">
      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0F141F] via-[#0A0D15] to-[#06080C] border border-amber-500/25 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                <ShieldAlert className="w-7 h-7" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Aviso Legal &amp; Responsabilidade Social (18+)
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Lei Federal nº 8.069/1990 &bull; Lei nº 13.106/2015
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Caráter Exclusivamente Institucional e Rigorosa Conformidade Legal
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-5xl leading-relaxed">
                  A <strong>Distribuidora Ponto Forte</strong> comercializa bebidas em geral. Em estrito cumprimento ao Estatuto da Criança e do Adolescente e à legislação nacional, <strong>é terminantemente proibida a venda, oferta, fornecimento ou entrega de bebidas alcoólicas a menores de 18 anos</strong>. Este canal tem caráter exclusivamente informativo e institucional, não realizando promoções apelativas de bebidas alcoólicas ou incentivo ao consumo abusivo.
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[140px]">
                <span className="text-base font-black text-amber-400 font-mono block">+18 ANOS</span>
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Venda Restrita</span>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[140px]">
                <span className="text-xs font-bold text-slate-200 block">Se Beber, Não Dirija</span>
                <span className="text-[10px] text-slate-400 block font-mono">Aprecie com Moderação</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
