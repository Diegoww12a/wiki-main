import React, { useState } from 'react';
import { Search, User, Trophy, Server, Menu, X, } from 'lucide-react';
import { Home } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({ onSearch, activeSection, onSectionChange }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'players', label: 'Players', icon: User },
    // { id: 'factions', label: 'Facções', icon: Shield },
    // { id: 'wars', label: 'Guerras', icon: Sword },
    { id: 'rankings', label: 'Rankings', icon: Trophy }
  ];

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/images/franca.png" alt="Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold text-white">França</h1>
              <p className="text-xs text-gray-400">Players</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
  {navItems.map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.id}
        onClick={() => onSectionChange(item.id)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          activeSection === item.id
            ? 'bg-purple-500/20 text-purple-400'
            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        }`}
      >
        <Icon className="w-4 h-4" />
        <span>{item.label}</span>
      </button>
    );
  })}
</nav>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar player..."
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-64"
              />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 w-full text-left ${
                      activeSection === item.id
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar player..."
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors w-full"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}