import { Faction } from '../types';
import { Shield, Users, Trophy, Target, Crown } from 'lucide-react';

interface FactionCardProps {
  faction: Faction;
  onClick: (faction: Faction) => void;
}

export default function FactionCard({ faction, onClick }: FactionCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Gang': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'Police': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Mafia': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'Military': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Biker': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'war': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'inactive': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '🟢';
      case 'war': return '⚔️';
      case 'inactive': return '⚫';
      default: return '⚫';
    }
  };

  const getMembersFillPercentage = () => {
    return (faction.memberCount / faction.maxMembers) * 100;
  };

  return (
    <div
      onClick={() => onClick(faction)}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={faction.logo}
            alt={faction.name}
            className="w-16 h-16 rounded-lg object-cover border-2 border-gray-600 group-hover:border-purple-500 transition-colors"
          />
          <div className="absolute -top-1 -right-1 text-lg">
            {getStatusIcon(faction.status)}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                {faction.name}
              </h3>
              <p className="text-sm text-gray-400">{faction.tag}</p>
            </div>
            <div className="flex space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(faction.type)}`}>
                {faction.type}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(faction.status)}`}>
                {faction.status}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-300">
              <Shield className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-300">{faction.territory}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-300">
              <Crown className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Líder: {faction.leader}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{faction.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-gray-400">Level</span>
          </div>
          <div className="text-lg font-bold text-white">{faction.level}</div>
        </div>
        
        <div className="bg-gray-700/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Target className="w-4 h-4 text-red-400" />
            <span className="text-xs text-gray-400">K/D</span>
          </div>
          <div className="text-lg font-bold text-white">
            {(faction.stats.totalKills / Math.max(faction.stats.totalDeaths, 1)).toFixed(1)}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>Membros</span>
          </div>
          <span className="text-white font-medium">
            {faction.memberCount}/{faction.maxMembers}
          </span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getMembersFillPercentage()}%` }}
          />
        </div>

        <div className="flex justify-between text-xs">
          <span className="text-purple-400 font-medium">
            Rep: {faction.reputation.toLocaleString()}
          </span>
          <span className="text-cyan-400 font-medium">
            Territórios: {faction.stats.territoriesControlled}
          </span>
        </div>
      </div>

      {faction.achievements.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-gray-400">Última conquista:</span>
          </div>
          <p className="text-sm text-yellow-300 mt-1">
            {faction.achievements[0].icon} {faction.achievements[0].title}
          </p>
        </div>
      )}
    </div>
  );
}