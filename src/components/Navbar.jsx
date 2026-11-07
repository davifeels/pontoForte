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
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Entregas', href: '#entregas' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-black/40 py-3' 
        : 'bg-[#0B0F17]/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo brand */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1">
            <img 
              src="./brand/logo-horizontal.svg" 
              alt="Distribuidora Ponto Forte - Logo Modernizada" 
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Special Brand Guide Button */}
            <button
              onClick={onOpenBrandGuide}
              className="ml-1 px-3.5 py-2 text-sm font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all flex items-center gap-1.5 shadow-sm shadow-amber-500/10"
              title="Explorar o Guia de Identidade Visual e Redesign da Marca"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Guia de Marca</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Redesign
              </span>
            </button>
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-400">Planaltina-DF</span>
            </div>

            <a
              href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de falar com o atendimento da Distribuidora Ponto Forte.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-lg shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-amber-500 text-slate-950 rounded-lg font-semibold text-xs flex items-center gap-1 shadow-md"
              aria-label="WhatsApp Direto"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              Atendimento Comercial Planaltina-DF
            </span>
            <span className="text-xs text-amber-400 font-mono font-medium">{COMPANY_INFO.phoneDisplay}</span>
          </div>

          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
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
              className="flex items-center justify-between px-3 py-2.5 text-base font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors mt-1"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Guia de Marca &amp; Redesign
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                Ver Proposta
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-center rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp (61) 99117-5823</span>
            </a>

            <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Buritis I, Quadra 5 — Planaltina-DF</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
