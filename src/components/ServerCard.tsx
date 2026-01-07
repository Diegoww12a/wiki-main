import React from 'react';
import { Server } from '../types';
import { Server as  Users, Star, Shield, Sword } from 'lucide-react';

interface ServerCardProps {
  server: Server;
  rank: number;
}

export default function ServerCard({ server, rank }: ServerCardProps) {
  const getTypeIcon = (type: string) => {
    return type === 'RP' ? Shield : Sword;
  };

  const getTypeColor = (type: string) => {
    return type === 'RP' ? 'text-blue-400 bg-blue-400/10' : 'text-red-400 bg-red-400/10';
  };

  const getPlayersFillPercentage = () => {
    return (server.players / server.maxPlayers) * 100;
  };

  const TypeIcon = getTypeIcon(server.type);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            #{rank}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{server.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getTypeColor(server.type)}`}>
                <TypeIcon className="w-3 h-3" />
                <span>{server.type}</span>
              </span>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{server.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">{server.description}</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>Players Online</span>
          </div>
          <span className="text-white font-medium">
            {server.players}/{server.maxPlayers}
          </span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getPlayersFillPercentage()}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          <span>{getPlayersFillPercentage().toFixed(0)}% cheio</span>
          <span className={getPlayersFillPercentage() > 90 ? 'text-red-400' : getPlayersFillPercentage() > 70 ? 'text-yellow-400' : 'text-green-400'}>
            {getPlayersFillPercentage() > 90 ? 'Quase cheio' : getPlayersFillPercentage() > 70 ? 'Populoso' : 'Disponível'}
          </span>
        </div>
      </div>
    </div>
  );
}