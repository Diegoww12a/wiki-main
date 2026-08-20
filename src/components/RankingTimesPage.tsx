// ===== src/components/RankingTimesPage.tsx =====
import React from 'react';
import { Team } from '../types';
import { Trophy, Medal, Crown, Users } from 'lucide-react';

interface RankingTimesPageProps {
  teams: Team[];
}

export default function RankingTimesPage({ teams }: RankingTimesPageProps) {
  const sorted = [...teams].sort((a, b) => b.elo - a.elo);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Trophy className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-2xl font-black text-white">Ranking de Times (ELO)</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
      </div>

      <div className="bg-[#0d0d12] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#111116] border-b border-white/5">
            <tr>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Dono</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ELO</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">V/D</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((team, idx) => (
              <tr key={team.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 text-white">
                  {idx === 0 && <Crown className="w-5 h-5 text-yellow-400" />}
                  {idx === 1 && <Medal className="w-5 h-5 text-gray-400" />}
                  {idx === 2 && <Trophy className="w-5 h-5 text-orange-400" />}
                  {idx > 2 && <span className="text-gray-500 font-mono">#{idx+1}</span>}
                </td>
                <td className="px-4 py-3 text-white font-medium">{team.nome}</td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{team.dono_id}</td>
                <td className="px-4 py-3 text-yellow-400 font-bold">{team.elo}</td>
                <td className="px-4 py-3 text-gray-400">{team.vitorias}V / {team.derrotas}D</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}