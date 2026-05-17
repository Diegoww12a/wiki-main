import { Player } from '../types';
import { X, Shield, Users, Award, Calendar, Zap } from 'lucide-react';

interface PlayerModalProps {
  player: Player;
  onClose: () => void;
  onEdit?: (player: Player) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const MAX_LEVEL = 20;
const XP_PER_KILL = 0.5;

const getXPFromKills = (kills: number) => kills * XP_PER_KILL;
const getLevelFromXP = (xp: number) => Math.min(Math.floor(xp) + 1, MAX_LEVEL);
const getProgressPercent = (xp: number) => Math.min((xp / (MAX_LEVEL - 1)) * 100, 100);
const getLevelColor = (level: number) => {
  if (level <= 10) return 'from-yellow-500 to-yellow-400';
  if (level <= 15) return 'from-green-500 to-emerald-400';
  return 'from-purple-500 to-violet-400';
};

export default function PlayerModal({ player, onClose, onEdit, onDelete, isAdmin }: PlayerModalProps) {
  const xp = getXPFromKills(player.stats.kills);
  const level = getLevelFromXP(xp);
  const progress = getProgressPercent(xp);
  const kd = player.stats.kills / Math.max(player.stats.deaths, 1);
  const isBanido = player.tags?.includes('banido');

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative bg-gradient-to-br from-[#0f0f13] via-[#13131a] to-[#0b0b10] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-900/20">

        {/* BANNER */}
        <div className="relative h-28 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-transparent rounded-t-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.3),_transparent_60%)]" />
          {isBanido && (
            <div className="absolute inset-0 bg-red-900/20" />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-6">

          {/* AVATAR + NOME */}
          <div className="flex items-end gap-4 -mt-12 mb-5">
            <div className="relative">
              <img
                src={player.avatar}
                alt={player.name}
                className={`w-24 h-24 rounded-2xl object-cover border-4 shadow-xl ${
                  isBanido ? 'border-red-500/50 grayscale' : 'border-purple-500/60'
                }`}
              />
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-[#0f0f13] ${
                player.status === 'online' ? 'bg-green-500' : 'bg-gray-600'
              }`} />
            </div>

            <div className="mb-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className={`text-2xl font-black text-white ${isBanido ? 'line-through opacity-50' : ''}`}>
                  {player.name}
                </h2>
                {isBanido && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold border text-red-400 bg-red-500/10 border-red-500/30">
                    🚫 Banido
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  player.role === 'PVP'
                    ? 'text-red-400 bg-red-400/10 border-red-400/20'
                    : 'text-blue-400 bg-blue-400/10 border-blue-400/20'
                }`}>
                  {player.role}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  player.status === 'online'
                    ? 'text-green-400 bg-green-400/10 border-green-400/20'
                    : 'text-gray-400 bg-gray-400/10 border-gray-400/20'
                }`}>
                  {player.status}
                </span>
              </div>
            </div>
          </div>

          {/* INFOS */}
          <div className="grid grid-cols-2 gap-3 mb-4">

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-xs font-medium uppercase tracking-wider">Facção</span>
              </div>
              <p className="text-white font-semibold">{player.faction || '—'}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-xs font-medium uppercase tracking-wider">Servidor</span>
              </div>
              <p className="text-white font-semibold">{player.server || '—'}</p>
            </div>

          </div>

          {/* LEVEL */}
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-300 text-xs font-medium uppercase tracking-wider">Level</span>
              </div>
              <span className="text-white font-bold text-sm">
                {level >= MAX_LEVEL ? (
                  <span className="text-green-400">MAX</span>
                ) : (
                  `Lv. ${level} / ${MAX_LEVEL}`
                )}
              </span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(level)} transition-all duration-700`}
                style={{ width: `${level >= MAX_LEVEL ? 100 : progress}%` }}
              />
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Kills', value: player.stats.kills, color: 'text-green-400' },
              { label: 'Deaths', value: player.stats.deaths, color: 'text-red-400' },
              { label: 'K/D', value: kd.toFixed(2), color: 'text-purple-400' },
              { label: 'Ações', value: player.stats.missions, color: 'text-cyan-400' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
                <p className={`text-xl font-black ${color}`}>{value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* ADMIN BUTTONS */}
          {onEdit && onDelete && (
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => onEdit(player)}
                className="flex-1 py-2.5 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold hover:bg-yellow-500/20 transition-all"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(player.id)}
                className="flex-1 py-2.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-all"
              >
                Excluir
              </button>
            </div>
          )}

          {/* DATA */}
          <div className="flex items-center text-xs text-gray-600 pt-4 border-t border-white/5">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            Entrou em
            <span className="text-gray-400 ml-1">
              {new Date(player.joinDate).toLocaleDateString('pt-BR')}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}