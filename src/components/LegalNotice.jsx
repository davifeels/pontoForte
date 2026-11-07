import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section className="py-12 bg-[#080B10] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldAlert className="w-6 h-6" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Aviso Legal &amp; Responsabilidade Social (18+)
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Lei Federal nº 8.069/1990 &bull; Lei nº 13.106/2015
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  Caráter Exclusivamente Institucional e Conformidade Legal
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-4xl leading-relaxed">
                  A <strong>Distribuidora Ponto Forte</strong> comercializa bebidas em geral. Em conformidade com o Estatuto da Criança e do Adolescente e a legislação brasileira vigente, <strong>é terminantemente proibida a venda, oferta, fornecimento ou entrega de bebidas alcoólicas a menores de 18 anos</strong>. Este portal possui caráter estritamente institucional, não realizando venda direta, catálogo promocional ou estímulo ao consumo abusivo de álcool.
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-row md:flex-col gap-2 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-center">
                <span className="text-sm font-black text-amber-400 block">+18</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Venda Restrita</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-center">
                <span className="text-xs font-bold text-slate-200 block">Se Beber, Não Dirija</span>
                <span className="text-[10px] text-slate-400 block">Aprecie com Moderação</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
