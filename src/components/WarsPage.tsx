import React, { useState } from 'react';
import { mockWars } from '../data/mockData';
import { War } from '../types';
import WarCard from './WarCard';
import { Sword, Filter, SortAsc, SortDesc, Flame, Clock, Trophy, Target } from 'lucide-react';

interface WarsPageProps {
  onWarClick: (war: War) => void;
  searchQuery?: string;
}

export default function WarsPage({ onWarClick, searchQuery }: WarsPageProps) {
  const [sortBy, setSortBy] = useState<'name' | 'startDate' | 'kills' | 'battles'>('startDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'ended' | 'scheduled'>('all');

  let filteredWars = mockWars;

  // Apply search filter
  if (searchQuery && searchQuery.trim()) {
    filteredWars = filteredWars.filter(war =>
      war.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      war.faction1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      war.faction2.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      war.territory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      war.reason.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply status filter
  if (filterStatus !== 'all') {
    filteredWars = filteredWars.filter(war => war.status === filterStatus);
  }

  // Apply sorting
  filteredWars.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'startDate':
        aValue = new Date(a.startDate).getTime();
        bValue = new Date(b.startDate).getTime();
        break;
      case 'kills':
        aValue = a.stats.faction1Kills + a.stats.faction2Kills;
        bValue = b.stats.faction1Kills + b.stats.faction2Kills;
        break;
      case 'battles':
        aValue = a.stats.totalBattles;
        bValue = b.stats.totalBattles;
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
      label: 'Guerras Ativas', 
      value: mockWars.filter(w => w.status === 'active').length.toString(), 
      icon: Flame, 
      color: 'text-red-400' 
    },
    { 
      label: 'Guerras Finalizadas', 
      value: mockWars.filter(w => w.status === 'ended').length.toString(), 
      icon: Trophy, 
      color: 'text-green-400' 
    },
    { 
      label: 'Guerras Agendadas', 
      value: mockWars.filter(w => w.status === 'scheduled').length.toString(), 
      icon: Clock, 
      color: 'text-yellow-400' 
    },
    { 
      label: 'Total de Kills', 
      value: mockWars.reduce((acc, w) => acc + w.stats.faction1Kills + w.stats.faction2Kills, 0).toString(), 
      icon: Target, 
      color: 'text-purple-400' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Sword className="w-8 h-8 text-red-400" />
          <h1 className="text-3xl font-bold text-white">
            Guerras {searchQuery && `- "${searchQuery}"`}
          </h1>
        </div>
        <p className="text-gray-400">Acompanhe todas as guerras entre facções do FiveM</p>
        <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm mt-2 inline-block">
          {filteredWars.length} guerras encontradas
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Ordenar por
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
            >
              <option value="startDate">Data de Início</option>
              <option value="timeDate">Hora de Início</option>
              <option value="name">Nome</option>
              <option value="kills">Total de Kills</option>
              <option value="battles">Número de Batalhas</option>
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

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
            >
              <option value="all">Todas</option>
              <option value="active">Em Andamento</option>
              <option value="ended">Finalizadas</option>
              <option value="scheduled">Agendadas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredWars.length === 0 ? (
        <div className="text-center py-12">
          <Sword className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-400 mb-2">Nenhuma guerra encontrada</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou termo de busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWars.map((war) => (
            <WarCard key={war.id} war={war} onClick={onWarClick} />
          ))}
        </div>
      )}
    </div>
  );
}