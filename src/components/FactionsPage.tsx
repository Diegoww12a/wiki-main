
import { useState } from 'react';
import { mockFactions } from '../data/mockData';
import { Faction } from '../types';
import FactionCard from './FactionCard';
import { Shield, SortAsc, SortDesc, Users, Trophy, Target } from 'lucide-react';


interface FactionsPageProps {
  onFactionClick: (faction: Faction) => void;
  searchQuery?: string;
}

export default function FactionsPage({ onFactionClick, searchQuery }: FactionsPageProps) {
  const [sortBy, setSortBy] = useState<'name' | 'level' | 'reputation' | 'members'>('reputation');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterType, setFilterType] = useState<'all' | 'Gang' | 'Police' | 'Mafia' | 'Military' | 'Biker'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'war' | 'inactive'>('all');

  let filteredFactions = mockFactions;

  // Apply search filter
  if (searchQuery && searchQuery.trim()) {
    filteredFactions = filteredFactions.filter(faction =>
      faction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faction.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faction.territory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faction.leader.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply type filter
  if (filterType !== 'all') {
    filteredFactions = filteredFactions.filter(faction => faction.type === filterType);
  }

  // Apply status filter
  if (filterStatus !== 'all') {
    filteredFactions = filteredFactions.filter(faction => faction.status === filterStatus);
  }

  // Apply sorting
  filteredFactions.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'level':
        aValue = a.level;
        bValue = b.level;
        break;
      case 'reputation':
        aValue = a.reputation;
        bValue = b.reputation;
        break;
      case 'members':
        aValue = a.memberCount;
        bValue = b.memberCount;
        break;
      default:
        return 0;
    }

    if (typeof aValue === 'string') {
      return sortOrder === 'asc' ? aValue.localeCompare(bValue as string) : (bValue as string).localeCompare(aValue);
    } else {
      return sortOrder === 'asc' ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number);
    }
  });

  const stats = [
    { 
      label: 'Total de Facções', 
      value: mockFactions.length.toString(), 
      icon: Shield, 
      color: 'text-purple-400' 
    },
    { 
      label: 'Facções Ativas', 
      value: mockFactions.filter(f => f.status === 'active').length.toString(), 
      icon: Target, 
      color: 'text-green-400' 
    },
    { 
      label: 'Em Guerra', 
      value: mockFactions.filter(f => f.status === 'war').length.toString(), 
      icon: Trophy, 
      color: 'text-red-400' 
    },
    { 
      label: 'Total Membros', 
      value: mockFactions.reduce((acc, f) => acc + f.memberCount, 0).toString(), 
      icon: Users, 
      color: 'text-cyan-400' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Shield className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-white">
            Facções {searchQuery && `- "${searchQuery}"`}
          </h1>
        </div>
        <p className="text-gray-400">Explore todas as facções, clãs e organizações do FiveM</p>

        <p className="text-gray-400">Explore todas as facções, e organizações do FiveM</p>

        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mt-2 inline-block">
          {filteredFactions.length} facções encontradas
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Sorting */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Ordenar por
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              <option value="reputation">Reputação</option>
              <option value="level">Level</option>
              <option value="name">Nome</option>
              <option value="members">Membros</option>
            </select>
          </div>

          {/* Sort Order */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Ordem
            </label>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              <span>{sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}</span>
            </button>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as typeof filterType)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              <option value="all">Todos</option>
              <option value="Gang">Gang</option>
              <option value="Mafia">Máfia</option>
              <option value="Military">Militar</option>
              <option value="Biker">Motoclube</option>
              <option value="Police">Polícia</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              <option value="all">Todos</option>
              <option value="active">Ativa</option>
              <option value="war">Em Guerra</option>
              <option value="inactive">Inativa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredFactions.length === 0 ? (
        <div className="text-center py-12">
          <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-400 mb-2">Nenhuma facção encontrada</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou termo de busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFactions.map((faction) => (
            <FactionCard key={faction.id} faction={faction} onClick={onFactionClick} />
          ))}
        </div>
      )}
    </div>
  );
}