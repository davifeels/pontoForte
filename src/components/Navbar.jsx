import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Navbar({ onOpenBrandGuide }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre a Distribuidora', href: '#sobre' },
    { label: 'Atendimento Executivo', href: '#atendimento' },
    { label: 'Logística & Entregas', href: '#entregas' },
    { label: 'Localização & GPS', href: '#localizacao' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#06080C]/90 backdrop-blur-xl border-b border-amber-500/15 shadow-2xl shadow-black/80 py-3.5' 
        : 'bg-[#06080C]/60 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
    }`}>
      {/* 90% Screen Width Container */}
      <div className="w-[92%] max-w-[1780px] mx-auto">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo brand & Executive tag */}
          <div className="flex items-center gap-5">
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl p-1">
              <img 
                src={`${import.meta.env.BASE_URL}brand/logo-horizontal.svg`} 
                alt="Distribuidora Ponto Forte - Logo Modernizada" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102 filter drop-shadow-[0_2px_12px_rgba(245,158,11,0.2)]"
              />
            </a>

            <div className="hidden xl:flex items-center gap-2.5 pl-5 border-l border-white/10 text-[11px] uppercase tracking-[0.2em] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Hub Logístico Comercial &bull; Planaltina-DF</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs xl:text-sm font-semibold tracking-wide text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10"
              >
                {link.label}
              </a>
            ))}

            {/* Special Brand Guide Button */}
            <button
              onClick={onOpenBrandGuide}
              className="ml-2 px-4 py-2 text-xs xl:text-sm font-bold text-amber-300 hover:text-white bg-gradient-to-r from-amber-500/15 to-amber-600/10 hover:from-amber-500/25 hover:to-amber-600/20 border border-amber-500/30 hover:border-amber-400/50 rounded-xl transition-all flex items-center gap-2 shadow-sm shadow-amber-500/10"
              title="Manual de Identidade Visual e Redesign da Marca"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Guia de Marca</span>
              <span className="text-[10px] uppercase font-mono font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                PRO 2026
              </span>
            </button>
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E131C] border border-white/10 text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-emerald-400">Atendimento Ativo</span>
              <span className="text-slate-500 font-sans">&bull;</span>
              <span className="text-slate-400 font-sans">Buritis I</span>
            </div>

            <a
              href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de falar com o atendimento comercial de alto padrão da Distribuidora Ponto Forte.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs xl:text-sm tracking-wide rounded-xl shadow-xl shadow-amber-500/25 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
              <span>WhatsApp Direto</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              aria-label="WhatsApp Direto"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06080C]/98 border-b border-amber-500/20 backdrop-blur-2xl px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              Atendimento Comercial &bull; Planaltina-DF
            </span>
            <span className="text-xs text-amber-400 font-mono font-bold">{COMPANY_INFO.phoneDisplay}</span>
          </div>

          <div className="grid gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/10"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandGuide();
              }}
              className="flex items-center justify-between px-4 py-3 text-sm font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-colors mt-1"
            >
              <span className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Guia de Marca &amp; Redesign 2026
              </span>
              <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                Ver Proposta
              </span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm text-center rounded-xl shadow-xl flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 text-transparent" />
              <span>Chamar no WhatsApp (61) 99117-5823</span>
            </a>

            <div className="text-xs text-center text-slate-400 flex items-center justify-center gap-2 pt-1 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Buritis I, Quadra 5 &bull; Planaltina-DF</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
