import { Player } from '../types';

import {
  X,
  Shield,
  Users,
  Award,
  Calendar,
  Zap,
  Pencil
} from 'lucide-react';


 
interface PlayerModalProps {
  player: Player;
  onClose: () => void;
  onEdit?: (player: Player) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}


const MAX_LEVEL = 20;
const XP_PER_KILL = 0.5;

// XP
const getXPFromKills = (kills: number) => kills * XP_PER_KILL;

// Level
const getLevelFromXP = (xp: number) =>
  Math.min(Math.floor(xp) + 1, MAX_LEVEL);

// Barra
const getProgressPercent = (xp: number) => {
  const maxXP = MAX_LEVEL - 1;

  return Math.min((xp / maxXP) * 100, 100);
};

// Cor do level
const getLevelColor = (level: number) => {
  if (level <= 10) return 'bg-yellow-400';

  if (level <= 15) return 'bg-green-500';

  return 'bg-green-400';
};

export default function PlayerModal({
  player,
  onClose,
  onEdit,
  onDelete,
  isAdmin
}: PlayerModalProps)  {

  const xp = getXPFromKills(player.stats.kills);

  const level = getLevelFromXP(xp);

  const progress = getProgressPercent(xp);

  const kd =
    player.stats.kills /
    Math.max(player.stats.deaths, 1);

  const getRoleColor = (role: string) =>
    role === 'PVP'
      ? 'text-red-400 bg-red-400/10 border-red-400/30'
      : 'text-blue-400 bg-blue-400/10 border-blue-400/30';

  const getStatusColor = (status: string) =>
    status === 'online'
      ? 'text-green-400 bg-green-400/10 border-green-400/30'
      : 'text-gray-400 bg-gray-400/10 border-gray-400/30';

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">

      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        <div className="p-6">

          {/* HEADER */}
          <div className="flex justify-between items-start mb-6">

  <div className="flex items-center space-x-4">

    <div className="relative">

      <img
        src={player.avatar}
        alt={player.name}
        className="w-20 h-20 rounded-xl object-cover border-2 border-purple-500"
      />

      <div
        className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${
          player.status === 'online'
            ? 'bg-green-500'
            : 'bg-gray-500'
        } border-2 border-gray-900 flex items-center justify-center`}
      >

        <div
          className={`w-3 h-3 rounded-full ${
            player.status === 'online'
              ? 'bg-green-300'
              : 'bg-gray-300'
          }`}
        />

      </div>

    </div>

    <div>

      <h2 className="text-2xl font-bold text-white">
        {player.name}
      </h2>

      <div className="flex items-center space-x-3 mt-2">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium border ${
            player.role === 'PVP'
              ? 'text-red-400 bg-red-400/10 border-red-400/30'
              : 'text-blue-400 bg-blue-400/10 border-blue-400/30'
          }`}
        >
          {player.role}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium border ${
            player.status === 'online'
              ? 'text-green-400 bg-green-400/10 border-green-400/30'
              : 'text-gray-400 bg-gray-400/10 border-gray-400/30'
          }`}
        >
          {player.status}
        </span>

      </div>

    </div>

  </div>

  <div className="flex items-center gap-2">


    <button
      onClick={onClose}
      className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
    >
      <X className="w-6 h-6" />
    </button>

  </div>

</div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

            <div className="bg-gray-800/50 rounded-xl p-4">

              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">
                  Facção
                </span>
              </div>

              <p className="text-white text-lg">
                {player.faction}
              </p>

            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">

              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">
                  Servidor
                </span>
              </div>

              <p className="text-white text-lg">
                {player.server}
              </p>

            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">

              <div className="flex items-center space-x-2 mb-2">

                <Award className="w-5 h-5 text-yellow-400" />

                <span className="text-yellow-300 font-medium">

                  Level

                  {level >= MAX_LEVEL && (
                    <span className="ml-2 text-xs text-green-400 font-bold">
                      MAX
                    </span>
                  )}

                </span>

              </div>

              <p className="text-white text-lg">
                Lv. {level}
              </p>

              {/* BARRA */}
              <div className="w-full bg-gray-700 h-3 rounded-full mt-2">

                <div
                  className={`h-3 rounded-full transition-all ${getLevelColor(level)}`}
                  style={{
                    width: `${level >= MAX_LEVEL ? 100 : progress}%`
                  }}
                />

              </div>

              <p className="text-gray-300 text-sm mt-1">
                Lv. {level} / {MAX_LEVEL}
              </p>

            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">

              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-medium">
                  Kills
                </span>
              </div>
              <p className="text-white text-lg">
                {player.stats.kills.toLocaleString()}
              </p>
            </div>

          </div>

          {/* STATS */}
          <div className="bg-gray-800/30 rounded-xl p-6">

            <h3 className="text-xl font-bold text-white mb-4">
              Estatísticas
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

              <div>
                <div className="text-2xl font-bold text-green-400">
                  {player.stats.kills}
                </div>

                <div className="text-gray-400 text-sm">
                  Kills
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-red-400">
                  {player.stats.deaths}
                </div>

                <div className="text-gray-400 text-sm">
                  Deaths
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-purple-400">
                  {kd.toFixed(2)}
                </div>

                <div className="text-gray-400 text-sm">
                  K/D
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-cyan-400">
                  {player.stats.missions}
                </div>

                <div className="text-gray-400 text-sm">
                  Ações
                </div>
              </div>

            </div>

          </div>

          {/* ADMIN BUTTONS */}
{onEdit && onDelete && (

  <div className="flex gap-3 mt-6">

    <button
      onClick={() => onEdit(player)}
      className="flex-1 bg-yellow-600 hover:bg-yellow-700 py-3 rounded-lg text-white font-bold"
    >
      Editar
    </button>

    <button
      onClick={() => onDelete(player.id)}
      className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-bold"
    >
      Excluir
    </button>

  </div>

)}

          {/* DATA */}
          <div className="mt-6 pt-6 border-t border-gray-700">

            <div className="flex items-center text-sm text-gray-400">

              <Calendar className="w-4 h-4 mr-2" />

              Entrou em:

              <span className="text-white ml-1">
                {new Date(player.joinDate).toLocaleDateString('pt-BR')}
              </span>

            </div>

          </div>

          {/* BOTÕES */}
          

        </div>

      </div>

    </div>
  );
}