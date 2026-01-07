import { mockPlayers } from '../data/mockData';
import { Player } from '../types';
import PlayerCard from './PlayerCard';
// import ServerCard from './ServerCard';
import { Trophy, Users,  TrendingUp,  } from 'lucide-react';

interface HomePageProps {
  onPlayerClick: (player: Player) => void;
}

export default function HomePage({ onPlayerClick }: HomePageProps) {
  const topPlayers = mockPlayers
    .sort((a, b) => b.reputation - a.reputation)
    .slice(0, 3);

 
  const stats = [
    { label: 'Players Registrados', value: '100', icon: Users, color: 'text-purple-400' },
    // { label: 'Facções Ativas', value: '12', icon: Shield, color: 'text-red-400' },
    // { label: 'Servidores Ativos', value: '247', icon: Server, color: 'text-cyan-400' },
    { label: 'Players Online', value: '100', icon: TrendingUp, color: 'text-green-400' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          França <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Rp</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          A França é a maior facção registrada.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-purple-500/20 px-6 py-3 rounded-full text-purple-300 border border-purple-500/30">
            🔥 Mais de 100 players cadastrados
          </div>
          <div className="bg-cyan-500/20 px-6 py-3 rounded-full text-cyan-300 border border-cyan-500/30">
            ⚡ Atualizado diariamente
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Icon className={`w-6 h-6 ${stat.color}`} />
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Players */}
      <section>
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">Top Players</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} onClick={onPlayerClick} />
          ))}
        </div>
      </section>

      {/* Top RP Servers */}
     

      {/* Top PVP Servers */}
    
    </div>
  );
}