import React, { useState } from 'react';
import { Sparkles, Copy, Check, Download, Layers, Palette, Type, Shield, Eye, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function BrandGuide({ isModal = false, onClose }) {
  const [activeTab, setActiveTab] = useState('versions');
  const [copiedHex, setCopiedHex] = useState(null);

  const base = import.meta.env.BASE_URL;

  const handleCopyColor = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2200);
  };

  const logoVersions = [
    {
      id: 'principal',
      name: 'Logo Principal',
      role: 'Versão primária para fachadas, cabeçalhos executivos, apresentações e materiais nobres.',
      file: `${base}brand/logo-principal.svg`,
      bgType: 'dark',
      aspect: 'wide'
    },
    {
      id: 'horizontal',
      name: 'Versão Horizontal',
      role: 'Otimizada para barras de navegação (navbar), fita lateral de veículos de entrega e documentos.',
      file: `${base}brand/logo-horizontal.svg`,
      bgType: 'dark',
      aspect: 'compact-wide'
    },
    {
      id: 'compact',
      name: 'Versão Compacta / Badge',
      role: 'Emblema em escudo industrial para uniformes, crachás, avatares sociais e carimbos.',
      file: `${base}brand/logo-compact.svg`,
      bgType: 'dark',
      aspect: 'badge'
    },
    {
      id: 'mono-dark',
      name: 'Monocromática Negativa',
      role: 'Versão 100% branca para superfícies escuras, serigrafia e fardamento executivo escuro.',
      file: `${base}brand/logo-monochrome-dark.svg`,
      bgType: 'dark',
      aspect: 'wide'
    },
    {
      id: 'mono-light',
      name: 'Monocromática Positiva',
      role: 'Versão em grafite puro para notas fiscais, pedidos em papel, carimbos e impressão a laser.',
      file: `${base}brand/logo-monochrome-light.svg`,
      bgType: 'light',
      aspect: 'wide'
    },
    {
      id: 'favicon',
      name: 'Ícone Favicon & App Icon',
      role: 'Símbolo "P-Bolt" estilizado em proporção 1:1 para abas de navegador e telas de smartphones.',
      file: `${base}brand/favicon.svg`,
      bgType: 'dark',
      aspect: 'square'
    }
  ];

  const typographySpecs = [
    {
      category: 'Tipografia de Display (Logomarca & Chamadas Monumentais)',
      family: 'Industrial Sans Condensed Slanted',
      weights: 'Black 900 / Extra Bold 800 (Slant -11°)',
      usage: 'Logomarca PONTO FORTE, títulos nobres e numeração de destaque.',
      sample: 'PONTO FORTE DISTRIBUIDORA 2026',
      sampleClass: 'font-black italic tracking-wide text-2xl sm:text-4xl text-amber-400'
    },
    {
      category: 'Tipografia Institucional (Sobretítulos & Navegação)',
      family: 'Geometric Grotesque',
      weights: 'Bold 700 / Semi-Bold 600 (Tracking +0.25em)',
      usage: 'Sobretítulos (Eyebrows), menus, categorias e microcopy operacional.',
      sample: 'LOGÍSTICA & DISTRIBUIÇÃO COMERCIAL DE ALTO PADRÃO',
      sampleClass: 'font-bold uppercase tracking-[0.25em] text-xs sm:text-sm text-slate-200'
    },
    {
      category: 'Tipografia de Leitura (Corpo & Textos Institucionais)',
      family: 'Modern Sans-Serif Humanist',
      weights: 'Regular 400 / Medium 500 (Linha 160%)',
      usage: 'Descrições institucionais, esclarecimentos operacionais e avisos legais.',
      sample: 'Atendimento e distribuição com pontualidade, transparência e rigor operacional em Planaltina-DF.',
      sampleClass: 'font-normal text-sm sm:text-base text-slate-300 leading-relaxed'
    }
  ];

  return (
    <div className={`w-full ${isModal ? 'p-6 sm:p-10' : 'py-24 sm:py-32'}`}>
      {/* 90% Screen Width Container */}
      <div className={`${isModal ? 'w-full' : 'w-[92%] max-w-[1780px] mx-auto'}`}>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827] border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Manual de Identidade Visual 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Redesign Institucional — <span className="text-amber-400">Distribuidora Ponto Forte</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-4xl leading-relaxed">
              Evolução contemporânea da marca: preservação do reconhecimento histórico (letra "P", raio de energia e velocidade), combinada a rigor geométrico vetorial e estética comercial de prestígio.
            </p>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-3 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors self-start md:self-auto cursor-pointer"
              aria-label="Fechar guia de marca"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto py-8 no-scrollbar border-b border-white/10">
          <button
            onClick={() => setActiveTab('versions')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
              activeTab === 'versions'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Versões da Logo (6 SVGs)</span>
          </button>

          <button
            onClick={() => setActiveTab('concept')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
              activeTab === 'concept'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Conceito &amp; Comparativo Antes/Depois</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
              activeTab === 'palette'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Paleta Cromática Corporativa</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
              activeTab === 'typography'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Tipografia Institucional</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer ${
              activeTab === 'rules'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Diretrizes de Aplicação</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          
          {/* TAB 1: LOGO VERSIONS (6 SVGS) */}
          {activeTab === 'versions' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-300">
                  Arquivos em vetor puro (SVG escalável a qualquer dimensão sem pixelização).
                </p>
                <div className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30 self-start sm:self-auto">
                  Prontos para Aplicação Digital &amp; Física
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {logoVersions.map((item) => (
                  <div 
                    key={item.id}
                    className="p-7 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#0A0D15] border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 shadow-2xl group"
                  >
                    <div>
                      {/* Preview Box */}
                      <div className={`w-full rounded-2xl p-8 flex items-center justify-center min-h-[190px] transition-colors relative overflow-hidden ${
                        item.bgType === 'light' 
                          ? 'bg-slate-100 border border-slate-300' 
                          : 'bg-[#06080C] border border-white/10'
                      }`}>
                        <img 
                          src={item.file} 
                          alt={item.name} 
                          className={`w-auto max-h-28 object-contain filter group-hover:scale-105 transition-transform duration-300 ${
                            item.aspect === 'square' ? 'max-h-24' : ''
                          }`}
                        />
                      </div>

                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/10 text-slate-300">
                            SVG Vector
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-500">
                        {item.file}
                      </span>
                      <a
                        href={item.file}
                        download
                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-slate-950 text-slate-200 text-xs font-bold flex items-center gap-2 transition-all border border-white/10"
                        title="Baixar arquivo SVG"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar SVG</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CONCEPT & COMPARATIVE */}
          {activeTab === 'concept' && (
            <div className="space-y-10">
              
              {/* Comparative Hero Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-white/10 shadow-2xl">
                
                {/* Original Legacy */}
                <div className="p-8 rounded-2xl bg-[#06080C] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                        Identidade Visual Oficial
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                        Logomarca em Uso
                      </span>
                    </div>

                    <div className="min-h-[190px] flex items-center justify-center p-6">
                      <img 
                        src={`${base}ponto-forte-logo.png`} 
                        alt="Logomarca Oficial Distribuidora Ponto Forte" 
                        className="max-h-32 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
                      />
                    </div>

                    <h4 className="text-base font-bold text-white mt-4">Análise da Identidade Oficial:</h4>
                    <ul className="text-xs sm:text-sm text-slate-400 mt-3 space-y-2 list-disc list-inside leading-relaxed">
                      <li>Símbolo expressivo (combinação da letra "P" com o raio).</li>
                      <li>Baixo contraste da tipografia branca vazada sobre fundos claros.</li>
                      <li>Degradês rasters com estilo volumétrico 3D que perdem nitidez em reduções.</li>
                      <li>Inviabilidade para carimbos, bordados finos e impressões a laser.</li>
                    </ul>
                  </div>
                </div>

                {/* Modernized 2026 */}
                <div className="p-8 rounded-2xl bg-gradient-to-b from-[#111827] to-[#06080C] border border-amber-500/40 flex flex-col justify-between relative shadow-2xl shadow-amber-500/10">
                  <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                    Proposta 2026
                  </div>

                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                        Redesign Institucional Modernizado
                      </span>
                    </div>

                    <div className="min-h-[190px] flex items-center justify-center p-6">
                      <img 
                        src={`${base}brand/logo-principal.svg`} 
                        alt="Nova Logo 2026" 
                        className="max-h-32 w-auto object-contain filter drop-shadow-[0_6px_25px_rgba(245,158,11,0.25)]"
                      />
                    </div>

                    <h4 className="text-base font-bold text-white mt-4">Evoluções &amp; Melhorias Implementadas:</h4>
                    <ul className="text-xs sm:text-sm text-slate-300 mt-3 space-y-2 list-disc list-inside leading-relaxed">
                      <li><strong>Engenharia Vetorial:</strong> curvas matematicamente alinhadas e proporção harmônica.</li>
                      <li><strong>Alto Contraste:</strong> legibilidade cirúrgica tanto em superfícies escuras quanto claras.</li>
                      <li><strong>DNA Histórico Respeitado:</strong> o "P" dinâmico com raio e estrias de velocidade foi aperfeiçoado.</li>
                      <li><strong>Versatilidade Total:</strong> do favicon de 16px ao caminhão de entrega em alta definição.</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Rationale Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-[#0A0E17] border border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-black mb-4">
                    01
                  </div>
                  <h4 className="text-lg font-bold text-white">Energia &amp; Agilidade</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    A fusão do raio com a letra "P" simboliza prontidão operacional, velocidade no atendimento e rapidez no despacho de mercadorias.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-[#0A0E17] border border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-black mb-4">
                    02
                  </div>
                  <h4 className="text-lg font-bold text-white">Força &amp; Solidez</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    A tipografia industrial inclinada (-11°) confere peso institucional, estabilidade de parceria comercial e presença de mercado.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-[#0A0E17] border border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-black mb-4">
                    03
                  </div>
                  <h4 className="text-lg font-bold text-white">Precisão Digital</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    Desenvolvida com alinhamento pixel-perfect, proporcionando leitura impecável no WhatsApp, telas Retina, frotas e impressos corporativos.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: COLOR PALETTE */}
          {activeTab === 'palette' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">
                  Clique em qualquer tom para copiar o código hexadecimal para a área de transferência.
                </p>
                {copiedHex && (
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2 animate-in fade-in duration-200">
                    <Check className="w-4 h-4" />
                    Copiado {copiedHex}!
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {COMPANY_INFO.brandColors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="p-5 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-white/10 hover:border-amber-500/40 transition-all text-left flex flex-col justify-between group cursor-pointer hover:shadow-2xl"
                  >
                    <div>
                      {/* Color Preview Block */}
                      <div 
                        className="w-full h-28 rounded-2xl shadow-inner border border-white/10 flex items-end p-3 justify-between transition-transform group-hover:scale-102"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg shadow ${
                          color.textDark ? 'bg-slate-900/90 text-white' : 'bg-white/95 text-slate-900'
                        }`}>
                          {color.hex}
                        </span>

                        <span className={`p-2 rounded-xl ${
                          color.textDark ? 'bg-slate-900/90 text-white' : 'bg-white/95 text-slate-900'
                        } opacity-0 group-hover:opacity-100 transition-opacity`}>
                          <Copy className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {color.name}
                        </h4>
                        <p className="text-xs text-amber-400/90 font-medium mt-1">
                          {color.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 text-xs font-mono text-slate-400 space-y-1">
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
            <div className="space-y-8">
              <p className="text-sm text-slate-300">
                Hierarquia tipográfica construída em fontes geométricas de alto contraste, garantindo leitura instantânea e autoridade comercial.
              </p>

              <div className="space-y-6">
                {typographySpecs.map((spec, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                          {spec.category}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-1">
                          {spec.family}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                        {spec.weights}
                      </span>
                    </div>

                    <div className="my-8 p-6 rounded-2xl bg-[#040609] border border-white/10 overflow-x-auto">
                      <div className={spec.sampleClass}>
                        {spec.sample}
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
                      <span className="font-semibold text-slate-200">Aplicação recomendada:</span>
                      <span>{spec.usage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: APPLICATION RULES */}
          {activeTab === 'rules' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-white/10">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base mb-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span>Boas Práticas de Aplicação (Recomendado)</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Área de Respiro Mínima:</strong> Manter distância equivalente a 50% da altura do símbolo ao redor de toda a logo.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Fundo Nobre Escuro:</strong> Aplicar preferencialmente sobre grafite profundo (#06080C ou #0F141F) para máximo brilho das tonalidades douradas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Impressão Monocromática:</strong> Em faturas, notas de separação e caixas de papelão, utilizar a versão monocromática positiva.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span><strong>Reduções Extremas:</strong> Para dimensões inferiores a 32px (como favicons e avatares), utilizar exclusivamente o ícone compacto "P-Bolt".</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F141F] to-[#06080C] border border-white/10">
                <div className="flex items-center gap-2.5 text-rose-400 font-bold text-base mb-6">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <span>Usos Inadequados (Proibido)</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não distorcer proporções horizontais/verticais ou alterar o ângulo ótico de -11°.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não substituir o gradiente solar por cores genéricas não especificadas no manual.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">&times;</span>
                    <span>Não aplicar contornos concorrentes (strokes) que prejudiquem o corte do raio.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
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
