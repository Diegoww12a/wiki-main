import { useState } from 'react';
import { mockPlayers } from '../data/mockData';
import { Player } from '../types';
import PlayerCard from './PlayerCard';
// import ServerCard from './ServerCard';
import { Trophy, Medal, Crown } from 'lucide-react';

interface RankingsPageProps {
  onPlayerClick: (player: Player) => void;
}

export default function RankingsPage({ onPlayerClick }: RankingsPageProps) {
  const [activeTab, setActiveTab] = useState<'players' | 'rp-servers' | 'pvp-servers'>('players');

  const topPlayers = mockPlayers.sort((a, b) => b.stats.kills - a.stats.kills);
  
  const tabs = [
    { id: 'players', label: 'Top Players', icon: Crown },
    // { id: 'rp-servers', label: 'Servidores RP', icon: Medal },
    // { id: 'pvp-servers', label: 'Servidores PVP', icon: Trophy }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />;
      case 3:
        return <Trophy className="w-5 h-5 text-orange-400" />;
      default:
        return <span className="text-gray-400 font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Rankings</h1>
        <p className="text-gray-400">Os melhores players da França</p>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'players' && (
          <>
            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {topPlayers.slice(0, 3).map((player, index) => (
                <div
                  key={player.id}
                  className={`relative ${
                    index === 0 ? 'md:order-2 md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'
                  }`}
                >
                  <div className={`bg-gradient-to-b ${
                    index === 0 
                      ? 'from-yellow-500/55 to-yellow-900/20 border-yellow-500/50' 
                      : index === 1 
                        ? 'from-gray-500/20 to-gray-900/20 border-gray-500/30'
                        : 'from-orange-500/20 to-orange-900/20 border-orange-500/30'
                  } border rounded-xl p-6 text-center`}>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === 0 
                          ? 'bg-yellow-500' 
                          : index === 1 
                            ? 'bg-gray-400'
                            : 'bg-orange-500'
                      }`}>
                        {getRankIcon(index + 1)}
                      </div>
                    </div>
                    
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 mt-4 border-4 border-current"
                    />
                    
                    <h3 className="text-xl font-bold text-white mb-2">{player.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{player.faction}</p>
                    <div className="text-2xl font-bold text-purple-700">
                      {player.stats.kills.toLocaleString()}
                    </div>
                    <p className="text-xs text-purple-900">TOP KILL</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining Players */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Ranking Completo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topPlayers.slice(3).map((player) => (
                  <PlayerCard key={player.id} player={player} onClick={onPlayerClick} />
                ))}
              </div>
            </div>
          </>
        )}

        
        

       
      </div>
    </div>
  );
}