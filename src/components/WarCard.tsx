import React from 'react';
import { War } from '../types';
import { Sword, Users, Trophy, Clock, MapPin, Flame, Calendar, Target } from 'lucide-react';

interface WarCardProps {
  war: War;
  onClick: (war: War) => void;
}

export default function WarCard({ war, onClick }: WarCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'ended': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      case 'scheduled': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '🔥';
      case 'ended': return '✅';
      case 'scheduled': return '⏰';
      default: return '⚫';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Em Andamento';
      case 'ended': return 'Finalizada';
      case 'scheduled': return 'Agendada';
      default: return status;
    }
  };

  return (
    <div
      onClick={() => onClick(war)}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
          {war.name}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(war.status)}`}>
          {getStatusIcon(war.status)} {getStatusLabel(war.status)}
        </span>
      </div>

      {/* Factions VS */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img
            src={war.faction1.logo}
            alt={war.faction1.name}
            className="w-12 h-12 rounded-lg object-cover border-2 border-gray-600"
          />
          <div>
            <h4 className="text-white font-medium">{war.faction1.name}</h4>
            <p className="text-sm text-gray-400">{war.faction1.tag}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-red-400">
          <Sword className="w-6 h-6" />
          <span className="text-lg font-bold">VS</span>
          <Sword className="w-6 h-6 scale-x-[-1]" />
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <h4 className="text-white font-medium">{war.faction2.name}</h4>
            <p className="text-sm text-gray-400">{war.faction2.tag}</p>
          </div>
          <img
            src={war.faction2.logo}
            alt={war.faction2.name}
            className="w-12 h-12 rounded-lg object-cover border-2 border-gray-600"
          />
        </div>
      </div>

      {/* Stats */}
      {war.status !== 'scheduled' && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-400">{war.stats.faction1Kills}</div>
            <div className="text-xs text-gray-400">Kills {war.faction1.tag}</div>
          </div>
          
          <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-purple-400">{war.stats.totalBattles}</div>
            <div className="text-xs text-gray-400">Batalhas</div>
          </div>
          
          <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-400">{war.stats.faction2Kills}</div>
            <div className="text-xs text-gray-400">Kills {war.faction2.tag}</div>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-300">
          <MapPin className="w-4 h-4 mr-2 text-red-400" />
          <span>{war.territory}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-300">
          <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
          <span>Iniciada: {new Date(war.startDate).toLocaleDateString('pt-BR')}</span>
        </div>

        {war.status !== 'scheduled' && (
          <div className="flex items-center text-sm text-gray-300">
            <Clock className="w-4 h-4 mr-2 text-yellow-400" />
            <span>Duração: {war.stats.duration}</span>
          </div>
        )}
      </div>

      <p className="text-gray-300 text-sm line-clamp-2">{war.description}</p>

      {/* Winner */}
      {war.winner && (
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-400">Vencedor:</span>
            <span className="text-yellow-300 font-medium">{war.winner}</span>
          </div>
        </div>
      )}

      {/* Escalation Preview */}
      <div className="mt-4 pt-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>Provável Escalação:</span>
          </div>
          <span className="text-purple-400 font-medium">
            {war.escalation.faction1Players.length + war.escalation.faction2Players.length} players
          </span>
        </div>
      </div>
    </div>
  );
}