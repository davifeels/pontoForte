import React, { useState } from 'react';
import { Sparkles, Copy, Check, Download, Layers, Palette, Type, Shield, Eye, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function BrandGuide({ isModal = false, onClose }) {
  const [activeTab, setActiveTab] = useState('versions');
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2200);
  };

  const logoVersions = [
    {
      id: 'principal',
      name: 'Logo Principal',
      role: 'Versão primária para cabeçalhos nobres, apresentações, fachadas e materiais corporativos.',
      file: './brand/logo-principal.svg',
      bgType: 'dark',
      aspect: 'wide'
    },
    {
      id: 'horizontal',
      name: 'Versão Horizontal',
      role: 'Otimizada para barras de navegação (navbar), fitas laterais de veículos e faturas.',
      file: './brand/logo-horizontal.svg',
      bgType: 'dark',
      aspect: 'compact-wide'
    },
    {
      id: 'compact',
      name: 'Versão Compacta / Badge',
      role: 'Emblema em escudo industrial para uniformes, crachás, avatares sociais e carimbos.',
      file: './brand/logo-compact.svg',
      bgType: 'dark',
      aspect: 'badge'
    },
    {
      id: 'mono-dark',
      name: 'Monocromática Negativa',
      role: 'Versão 100% branca para superfícies escuras, bordados escuros e serigrafia de uma cor.',
      file: './brand/logo-monochrome-dark.svg',
      bgType: 'dark',
      aspect: 'wide'
    },
    {
      id: 'mono-light',
      name: 'Monocromática Positiva',
      role: 'Versão em grafite puro para notas fiscais, papel timbrado, carimbos e impressão a laser.',
      file: './brand/logo-monochrome-light.svg',
      bgType: 'light',
      aspect: 'wide'
    },
    {
      id: 'favicon',
      name: 'Ícone Favicon & App Icon',
      role: 'Símbolo "P-Bolt" estilizado em proporção 1:1 para abas de navegador e telas de celular.',
      file: './brand/favicon.svg',
      bgType: 'dark',
      aspect: 'square'
    }
  ];

  const typographySpecs = [
    {
      category: 'Tipografia de Display (Logomarca & Destaques)',
      family: 'System UI / Sans Industrial Condensed Slanted',
      weights: 'Black 900 / Extra Bold 800 (Slant -11°)',
      usage: 'Logomarca PONTO FORTE, títulos heróicos e manchetes comerciais.',
      sample: 'PONTO FORTE DISTRIBUIDORA 2026',
      sampleClass: 'font-black italic tracking-wide text-2xl sm:text-3xl text-amber-400'
    },
    {
      category: 'Tipografia Institucional (Navegação & Subtítulos)',
      family: 'Inter / Roboto / System Grotesque',
      weights: 'Bold 700 / Semi-Bold 600 (Tracking +0.25em)',
      usage: 'Sobretítulos (Eyebrows), menus, categorias e microcopy de status.',
      sample: 'LOGÍSTICA & DISTRIBUIÇÃO COMERCIAL',
      sampleClass: 'font-bold uppercase tracking-[0.25em] text-sm text-slate-200'
    },
    {
      category: 'Tipografia de Leitura (Corpo & Informações)',
      family: 'Modern Sans-Serif Humanist',
      weights: 'Regular 400 / Medium 500 (Linha 160%)',
      usage: 'Descrições institucionais, esclarecimentos operacionais e avisos legais.',
      sample: 'Atendimento e distribuição com pontualidade, transparência e rigor operacional em Planaltina-DF.',
      sampleClass: 'font-normal text-base text-slate-300 leading-relaxed'
    }
  ];

  return (
    <div className={`w-full ${isModal ? 'p-4 sm:p-6' : 'py-16 sm:py-24'}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Manual de Identidade Visual 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Redesign de Marca — <span className="text-amber-400">Distribuidora Ponto Forte</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Evolução contemporânea da marca: preservação dos elementos essenciais de reconhecimento (letra "P", raio de energia, velocidade e força), com engenharia geométrica vetorial e acabamento premium.
            </p>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors self-start md:self-auto"
              aria-label="Fechar guia de marca"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar border-b border-slate-800/80">
          <button
            onClick={() => setActiveTab('versions')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'versions'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Versões da Logo (6)</span>
          </button>

          <button
            onClick={() => setActiveTab('concept')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'concept'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Conceito &amp; Comparativo</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'palette'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Paleta de Cores</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'typography'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Tipografia Institucional</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'rules'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Diretrizes de Aplicação</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          
          {/* TAB 1: LOGO VERSIONS */}
          {activeTab === 'versions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  Sistema de aplicações completo em vetor puro (SVG escalável a qualquer tamanho sem perda de nitidez).
                </p>
                <div className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Arquivos SVG Prontos para Produção
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {logoVersions.map((item) => (
                  <div 
                    key={item.id}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
                  >
                    <div>
                      {/* Preview Box */}
                      <div className={`w-full rounded-xl p-6 flex items-center justify-center min-h-[170px] transition-colors relative overflow-hidden ${
                        item.bgType === 'light' 
                          ? 'bg-slate-100 border border-slate-300' 
                          : 'bg-[#0B0F17] border border-slate-800/80'
                      }`}>
                        <img 
                          src={item.file} 
                          alt={item.name} 
                          className={`w-auto max-h-24 object-contain filter group-hover:scale-105 transition-transform duration-300 ${
                            item.aspect === 'square' ? 'max-h-20' : ''
                          }`}
                        />
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            SVG Vector
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-500">
                        {item.file}
                      </span>
                      <a
                        href={item.file}
                        download
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        title="Baixar arquivo SVG"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CONCEPT & BEFORE/AFTER */}
          {activeTab === 'concept' && (
            <div className="space-y-8">
              
              {/* Comparative Hero Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl">
                
                {/* Original Legacy */}
                <div className="p-6 rounded-2xl bg-[#0B0F17] border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Identidade Original de Referência
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-semibold">
                        Versão Histórica
                      </span>
                    </div>

                    <div className="min-h-[170px] flex items-center justify-center p-4">
                      <img 
                        src="./original-logo.png" 
                        alt="Logo Original" 
                        className="max-h-24 w-auto object-contain opacity-90"
                      />
                    </div>

                    <h4 className="text-sm font-bold text-white mt-2">Diagnóstico da Marca Original:</h4>
                    <ul className="text-xs text-slate-400 mt-2 space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>Força expressiva no símbolo (fusão do "P" com o raio).</li>
                      <li>Baixo contraste da tipografia branca vazada em telas claras.</li>
                      <li>Degradês rasters com estilo 3D anos 2000 que perdem nitidez em reduções.</li>
                      <li>Dificuldade de aplicação em bordados, carimbos e notas fiscais.</li>
                    </ul>
                  </div>
                </div>

                {/* Modernized 2026 */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0B0F17] border border-amber-500/40 flex flex-col justify-between relative shadow-xl shadow-amber-500/5">
                  <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500 text-slate-950">
                    Proposta 2026
                  </div>

                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Redesign Institucional Modernizado
                      </span>
                    </div>

                    <div className="min-h-[170px] flex items-center justify-center p-4">
                      <img 
                        src="./brand/logo-principal.svg" 
                        alt="Nova Logo 2026" 
                        className="max-h-28 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
                      />
                    </div>

                    <h4 className="text-sm font-bold text-white mt-2">Avanços &amp; Melhorias Implementadas:</h4>
                    <ul className="text-xs text-slate-300 mt-2 space-y-1.5 list-disc list-inside leading-relaxed">
                      <li><strong>Vetorização Matemática:</strong> curvas equilibradas e proporção áurea.</li>
                      <li><strong>Alto Contraste:</strong> legibilidade instantânea em fundos claros e escuros.</li>
                      <li><strong>DNA Preservado:</strong> o "P" dinâmico com raio e estrias de velocidade foi refinado.</li>
                      <li><strong>Versatilidade 360°:</strong> funciona do favicon de 16px ao caminhão de entrega.</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Rationale Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black mb-3">
                    01
                  </div>
                  <h4 className="text-base font-bold text-white">Energia &amp; Agilidade</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    A fusão do raio com a letra "P" simboliza prontidão, rapidez na separação de pedidos e dinamismo na entrega comercial.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black mb-3">
                    02
                  </div>
                  <h4 className="text-base font-bold text-white">Força &amp; Solidez</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    A tipografia industrial inclinada (-11°) confere peso institucional, estabilidade de parceria comercial e presença de mercado.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black mb-3">
                    03
                  </div>
                  <h4 className="text-base font-bold text-white">Precisão Digital</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Desenvolvida com alinhamento pixel-perfect, permitindo transições fluidas no WhatsApp, mídias sociais, frotas e materiais gráficos.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: COLOR PALETTE */}
          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  Clique em qualquer tom para copiar o código hexadecimal para a área de transferência.
                </p>
                {copiedHex && (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 animate-in fade-in duration-200">
                    <Check className="w-4 h-4" />
                    Copiado {copiedHex}!
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {COMPANY_INFO.brandColors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all text-left flex flex-col justify-between group cursor-pointer hover:shadow-xl"
                  >
                    <div>
                      {/* Color Preview Block */}
                      <div 
                        className="w-full h-24 rounded-xl shadow-inner border border-white/10 flex items-end p-2.5 justify-between transition-transform group-hover:scale-102"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded shadow ${
                          color.textDark ? 'bg-slate-900/80 text-white' : 'bg-white/90 text-slate-900'
                        }`}>
                          {color.hex}
                        </span>

                        <span className={`p-1.5 rounded-full ${
                          color.textDark ? 'bg-slate-900/80 text-white' : 'bg-white/90 text-slate-900'
                        } opacity-0 group-hover:opacity-100 transition-opacity`}>
                          <Copy className="w-3 h-3" />
                        </span>
                      </div>

                      <div className="mt-3">
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                          {color.name}
                        </h4>
                        <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                          {color.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
                      <div>RGB: {color.rgb}</div>
                      <div>CMYK: {color.cmyk}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-400">
                Hierarquia tipográfica baseada em fontes geométricas de alto contraste, garantindo leitura instantânea e autoridade visual.
              </p>

              <div className="space-y-4">
                {typographySpecs.map((spec, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          {spec.category}
                        </span>
                        <h4 className="text-lg font-bold text-white mt-0.5">
                          {spec.family}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full self-start sm:self-auto">
                        {spec.weights}
                      </span>
                    </div>

                    <div className="my-6 p-4 rounded-xl bg-[#0B0F17] border border-slate-800/80 overflow-x-auto">
                      <div className={spec.sampleClass}>
                        {spec.sample}
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="font-semibold text-slate-300">Aplicação recomendada:</span>
                      <span>{spec.usage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: APPLICATION RULES */}
          {activeTab === 'rules' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span>Boas Práticas de Aplicação (Recomendado)</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Área de Respiro:</strong> Manter distância mínima equivalente à metade da altura do símbolo "P" ao redor de toda a logomarca.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Fundo Nobre:</strong> Aplicar preferencialmente sobre grafite profundo (#0B0F17 ou #111827) para máximo impacto das tonalidades douradas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Impressão Monocromática:</strong> Em faturas, notas de separação e caixas de papelão, utilizar a versão monocromática positiva.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Reduções Extremas:</strong> Para dimensões inferiores a 32px (como favicons e avatares), utilizar exclusivamente o ícone compacto "P-Bolt".</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <span>Usos Inadequados (Evitar)</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-3 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não distorcer as proporções ou inclinar além dos -11° definidos no manual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não alterar as cores primárias do raio ou substituir o gradiente solar por cores genéricas (como azul ou vermelho).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não aplicar sombras projetadas difusas desreguladas ou traçados (stroke) concorrentes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não associar a marca a campanhas apelativas ou desrespeitosas com a legislação de bebidas (Lei 8.069/1990).</span>
                  </li>
                </ul>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
