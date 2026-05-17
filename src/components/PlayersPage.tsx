import React, { useState } from 'react';
import { Player } from '../types';
import PlayerCard from './PlayerCard';
import { Users, SortAsc, SortDesc } from 'lucide-react';

interface PlayersPageProps {
  players: Player[];
  onPlayerClick: (player: Player) => void;
  searchQuery?: string;
}

export default function PlayersPage({
  players,
  onPlayerClick,
  searchQuery
}: PlayersPageProps) {

  const [sortBy, setSortBy] = useState<'name' | 'level' | 'reputation' | 'kd'>('reputation');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterRole, setFilterRole] = useState<'all' | 'PVP' | 'P1'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'online' | 'offline'>('all');
  const [filterTag, setFilterTag] = useState<'all' | 'banido'>('all');

  let filteredPlayers = [...players];

  const normalize = (text: string) =>
    text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/(.)\1+/g, '$1');

  if (searchQuery && searchQuery.trim()) {
    const query = normalize(searchQuery);
    filteredPlayers = filteredPlayers.filter(player =>
      normalize(player.name).includes(query) ||
      normalize(player.faction).includes(query) ||
      normalize(player.server).includes(query)
    );
  }

  if (filterRole !== 'all') filteredPlayers = filteredPlayers.filter(p => p.role === filterRole);
  if (filterStatus !== 'all') filteredPlayers = filteredPlayers.filter(p => p.status === filterStatus);
  if (filterTag === 'banido') filteredPlayers = filteredPlayers.filter(p => p.tags?.includes('banido'));

  filteredPlayers.sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

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
    }

    return sortOrder === 'asc' ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number);
  });

  const selectClass = "w-full [&>option]:bg-[#111116] bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:border-purple-500/50 outline-none transition-all appearance-none cursor-pointer";
  const labelClass = "block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2";

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-white">
            Players {searchQuery && <span className="text-purple-400">"{searchQuery}"</span>}
          </h1>
          <p className="text-gray-500 text-xs">{filteredPlayers.length} encontrados</p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="bg-gradient-to-br from-[#111116] to-[#0d0d12] border  border-white/5 rounded-2xl p-5">
        <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">Filtros</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

          <div>
            <label className={labelClass}>Ordenar</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className={selectClass}>
              <option value="reputation">Kills</option>
              <option value="level">Level</option>
              <option value="name">Nome</option>
              <option value="kd">K/D</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Ordem</label>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm hover:border-purple-500/30 transition-all flex items-center justify-center gap-2"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-4 h-4 text-purple-400" /> : <SortDesc className="w-4 h-4 text-purple-400" />}
              <span className="text-gray-300">{sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}</span>
            </button>
          </div>

          <div>
            <label className={labelClass}>Função</label>
            <select value={filterRole} onChange={(e) => setFilterRole(e.target.value as typeof filterRole)} className={selectClass}>
              <option value="all">Todas</option>
              <option value="PVP">PVP</option>
              <option value="P1">P1</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Status</label>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)} className={selectClass}>
              <option value="all">Todos</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Tag</label>
            <select value={filterTag} onChange={(e) => setFilterTag(e.target.value as typeof filterTag)} className={selectClass}>
              <option value="all">Todas</option>
              <option value="banido">🚫 Banidos</option>
            </select>
          </div>

        </div>
      </div>

      {/* PLAYERS */}
      {filteredPlayers.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-gray-700" />
          </div>
          <h3 className="text-gray-400 font-semibold mb-1">Nenhum player encontrado</h3>
          <p className="text-gray-600 text-sm">Tente ajustar os filtros ou termo de busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onClick={onPlayerClick}
            />
          ))}
        </div>
      )}

    </div>
  );
}