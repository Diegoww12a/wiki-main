// ===== src/components/Header.tsx (versão com dropdown) =====
import React, { useState } from 'react';
import {
  Search, User, Trophy, Menu, X, Home, Shield,
  Users, ShoppingCart, Archive, Swords, Play, Coins, MoreHorizontal
} from 'lucide-react';
import SaldoWidget from './SaldoWidget';

interface HeaderProps {
  onSearch: (query: string) => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
  moedas?: number;
}

export default function Header({
  onSearch,
  activeSection,
  onSectionChange,
  moedas = 0
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  // Itens principais (sempre visíveis)
  const mainNav = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'players', label: 'Players', icon: User },
    { id: 'times', label: 'Times', icon: Users },
    { id: 'loja', label: 'Loja', icon: ShoppingCart },
    { id: 'acervo', label: 'Acervo', icon: Archive },
    { id: 'desafios', label: 'Desafios', icon: Swords },
    { id: 'kick', label: 'Kick', icon: Play },
  ];

  // Itens secundários (no dropdown)
  const secondaryNav = [
    { id: 'rankings', label: 'Rankings', icon: Trophy },
    { id: 'ranking-times', label: 'Ranking Times', icon: Trophy },
    { id: 'admin', label: 'Admin', icon: Shield },
  ];

  // Todos para o mobile
  const allNav = [...mainNav, ...secondaryNav];

  return (
    <header className="bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50 shadow-[0_4px_30px_rgba(139,92,246,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onSectionChange('home')}>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/franca.png`}
                alt="França"
                className="w-10 h-10 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-300"
              />
              <div className="absolute -inset-1 rounded-xl bg-purple-500/20 blur-md -z-10 group-hover:blur-xl transition-all duration-300" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent tracking-tight">
                França
              </h1>
              <p className="text-[10px] font-medium text-gray-500 tracking-[0.2em] uppercase -mt-0.5">
                Players
              </p>
            </div>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`
                    relative px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                    flex items-center gap-1.5
                    ${isActive
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  )}
                </button>
              );
            })}

            {/* Dropdown "Mais" */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`
                  px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                  flex items-center gap-1.5
                  ${isDropdownOpen || secondaryNav.some(s => activeSection === s.id)
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Mais</span>
                {secondaryNav.some(s => activeSection === s.id) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#12121a] border border-white/10 rounded-xl shadow-xl backdrop-blur-md py-1 z-50">
                  {secondaryNav.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSectionChange(item.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`
                          w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                          ${isActive
                            ? 'text-purple-400 bg-purple-500/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }
                        `}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* DIREITA: SEARCH + SALDO */}
          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar player..."
                  className="w-48 lg:w-64 pl-9 pr-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300"
                />
              </div>
            </form>
            <SaldoWidget moedas={moedas} onClick={() => onSectionChange('transacoes')} />

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (todos os itens) */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 border-t border-white/5 space-y-1">
            {allNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                    ${isActive
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="pt-3 border-t border-white/5">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar player..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}