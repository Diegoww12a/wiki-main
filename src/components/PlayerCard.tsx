import { Player } from '../types';
import { Shield, Target, Award, Users } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  onClick: (player: Player) => void;
}

const MAX_LEVEL = 20;
const XP_PER_KILL = 0.5;

// Calcula XP do jogador
const getXPFromKills = (kills: number) => kills * XP_PER_KILL;

// Calcula level a partir do XP
const getLevelFromXP = (xp: number) => Math.min(Math.floor(xp) + 1, MAX_LEVEL);

// Calcula porcentagem da barra
const getProgressPercent = (xp: number) => {
  const maxXP = MAX_LEVEL - 1; // LV20 = XP total 19
  return Math.min((xp / maxXP) * 100, 100);
};

const getLevelColor = (level: number, maxLevel: number) => {
  if (level <= 10) return 'bg-yellow-400';
  if (level <= 15) return 'bg-green-500';
  return 'bg-green-400'; // 16 até MAX (20)
};

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  const xp = getXPFromKills(player.stats.kills);
  const level = getLevelFromXP(xp);
  const progress = getProgressPercent(xp);

  const kd = player.stats.kills / Math.max(player.stats.deaths, 1);

  const getRoleColor = (role: string) =>
    role === 'PVP'
      ? 'text-red-400 bg-red-400/10'
      : 'text-blue-400 bg-blue-400/10';

  const getStatusColor = (status: string) =>
    status === 'online'
      ? 'text-green-400 bg-green-400/10'
      : 'text-gray-400 bg-gray-400/10';

  return (
    <div
      onClick={() => onClick(player)}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
      rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg
      hover:shadow-purple-500/10 transition-all duration-300
      cursor-pointer group "
      
      
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={`${import.meta.env.BASE_URL}${player.avatar}`}
            alt={player.name}
            className="w-16 h-16 rounded-lg object-cover
            border-2 border-gray-600 group-hover:border-purple-500
            transition-colors"
          />

          <div
            className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
              player.status === 'online'
                ? 'bg-green-500'
                : 'bg-gray-500'
            } border-2 border-gray-800`}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
              {player.name}
            </h3>

            <div className="flex space-x-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(
                  player.role
                )}`}
              >
                {player.role}
              </span>

              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  player.status
                )}`}
              >
                {player.status}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-300">
              <Shield className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-300">{player.faction}</span>
            </div>

            <div className="flex items-center text-sm text-gray-300">
              <Users className="w-4 h-4 mr-2 text-cyan-400" />
              <span>{player.server}</span>
            </div>

            {/* LEVEL + KD + Barra de progresso */}
            <div className="mt-3 flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <Award className="w-4 h-4 text-yellow-400" />
    <span className="text-gray-300">
      Lv. {level}
      {level >= MAX_LEVEL && (
        <span className="ml-2 text-xs text-green-400 font-bold">MAX</span>
      )}
    </span>
  </div>

  <div className="flex items-center space-x-2">
    <Target className="w-4 h-4 text-red-400" />
    <span className="text-gray-300">K/D: {kd.toFixed(1)}</span>
  </div>
</div>

{/* Barra de XP */}
<div className="w-full bg-gray-700 h-2 rounded-full mt-1">
  <div
    className={`h-2 rounded-full transition-all ${getLevelColor(level, MAX_LEVEL)}`}
    style={{ width: `${level >= MAX_LEVEL ? 100 : progress}%` }}
  />
</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50">
        <div className="flex justify-between text-sm text-gray-400">
          <span>
            KILL:{' '}
            <span className="text-purple-400 font-medium">
              {player.stats.kills.toLocaleString()}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
