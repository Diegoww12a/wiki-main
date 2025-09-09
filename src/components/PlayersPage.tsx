import React, { useState } from 'react';
import { mockPlayers } from '../data/mockData';
import { Player } from '../types';
import PlayerCard from './PlayerCard';
import { Users, Filter, SortAsc, SortDesc } from 'lucide-react';

interface PlayersPageProps {
  onPlayerClick: (player: Player) => void;
  searchQuery?: string;
}

export default function PlayersPage({ onPlayerClick, searchQuery }: PlayersPageProps) {
  const [sortBy, setSortBy] = useState<'name' | 'level' | 'reputation' | 'kd'>('reputation');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterRole, setFilterRole] = useState<'all' | 'PVP' | 'P1'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'online' | 'offline'>('all');

  let filteredPlayers = mockPlayers;

  // Apply search filter
  if (searchQuery && searchQuery.trim()) {
    filteredPlayers = filteredPlayers.filter(player =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.faction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.server.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply role filter
  if (filterRole !== 'all') {
    filteredPlayers = filteredPlayers.filter(player => player.role === filterRole);
  }

  // Apply status filter
  if (filterStatus !== 'all') {
    filteredPlayers = filteredPlayers.filter(player => player.status === filterStatus);
  }

  // Apply sorting
  filteredPlayers.sort((a, b) => {
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
        aValue = a.stats.kills;
        bValue = b.stats.kills;
        break;
      case 'kd':
        aValue = a.stats.kills / Math.max(a.stats.deaths, 1);
        bValue = b.stats.kills / Math.max(b.stats.deaths, 1);
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <Users className="w-6 h-6 text-purple-400" />
        <h1 className="text-3xl font-bold text-white">
          Players {searchQuery && `- "${searchQuery}"`}
        </h1>
        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          {filteredPlayers.length} encontrados
        </span>
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
              <option value="reputation">Kill</option>
              <option value="level">Level</option>
              <option value="name">Nome</option>
              <option value="kd">K/D Ratio</option>
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

          {/* Role Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Função
            </label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value as typeof filterRole)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              <option value="all">Todas</option>
              <option value="PVP">PVP</option>
              <option value="P1">P1</option>
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
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredPlayers.length === 0 ? (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-400 mb-2">Nenhum player encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou termo de busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} onClick={onPlayerClick} />
          ))}
        </div>
      )}
    </div>
  );
}