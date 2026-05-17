import { Player } from '../types';
import { Shield, Target, Award, Users } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  onClick: (player: Player) => void;
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

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  const xp = getXPFromKills(player.stats.kills);
  const level = getLevelFromXP(xp);
  const progress = getProgressPercent(xp);
  const kd = player.stats.kills / Math.max(player.stats.deaths, 1);
  const isBanido = player.tags?.includes('banido');

  return (
    <div
      onClick={() => onClick(player)}
      className={`relative rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden group
        ${isBanido
          ? 'bg-red-950/20 border-red-900/30 hover:border-red-500/40'
          : 'bg-gradient-to-br from-[#111116] to-[#0d0d12] border-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/20'
        }`}
    >

      {/* GLOW HOVER */}
      {!isBanido && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.06),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      <div className="p-5">

        {/* HEADER */}
        <div className="flex items-start gap-3 mb-4">

          {/* AVATAR */}
          <div className="relative shrink-0">
            <img
              src={player.avatar}
              alt={player.name}
              className={`w-14 h-14 rounded-xl object-cover border-2 transition-all duration-300 ${
                isBanido
                  ? 'border-red-500/30 grayscale'
                  : 'border-white/10 group-hover:border-purple-500/50'
              }`}
            />
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0d0d12] ${
              player.status === 'online' ? 'bg-green-500' : 'bg-gray-600'
            }`} />
          </div>

          {/* NOME + BADGES */}
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-base truncate transition-colors ${
              isBanido
                ? 'text-gray-500 line-through'
                : 'text-white group-hover:text-purple-300'
            }`}>
              {player.name}
            </h3>

            <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                player.role === 'PVP'
                  ? 'text-red-400 bg-red-400/10'
                  : 'text-blue-400 bg-blue-400/10'
              }`}>
                {player.role}
              </span>

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                player.status === 'online'
                  ? 'text-green-400 bg-green-400/10'
                  : 'text-gray-500 bg-gray-400/10'
              }`}>
                {player.status}
              </span>

              {isBanido && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-red-400 bg-red-400/10">
                  🚫 banido
                </span>
              )}
            </div>
          </div>

        </div>

        {/* FACTION + SERVER */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="text-purple-300 truncate">{player.faction || '—'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-gray-400 truncate">{player.server || '—'}</span>
          </div>
        </div>

        {/* LEVEL + XP BAR */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-gray-300 text-xs">
                Lv. {level}
                {level >= MAX_LEVEL && (
                  <span className="ml-1.5 text-green-400 font-bold">MAX</span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-red-400" />
              <span className="text-gray-400 text-xs">K/D {kd.toFixed(1)}</span>
            </div>
          </div>

          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-1.5 rounded-full bg-gradient-to-r ${getLevelColor(level)} transition-all duration-700`}
              style={{ width: `${level >= MAX_LEVEL ? 100 : progress}%` }}
            />
          </div>
        </div>

        {/* FOOTER STATS */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="text-center">
            <p className="text-green-400 font-bold text-sm">{player.stats.kills.toLocaleString()}</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-wider">Kills</p>
          </div>
          <div className="text-center">
            <p className="text-red-400 font-bold text-sm">{player.stats.deaths.toLocaleString()}</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-wider">Deaths</p>
          </div>
          <div className="text-center">
            <p className="text-cyan-400 font-bold text-sm">{player.stats.missions.toLocaleString()}</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-wider">Ações</p>
          </div>
        </div>

      </div>
    </div>
  );
}