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
  <div className="text-center relative pb-7">
    <h1 className="text-3xl font-bold text-white mb-2">Rankings</h1>
    <p className="text-gray-400">Os melhores players da França</p>
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0  w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-white" />
  </div>

  {/* Tabs */}
  <div className="bg-gray-800/60 w-[24rem]   mx-auto backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-2">
    <div className="flex space-x-2 ">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-2xl font-semibold text-sm transition-all duration-200 flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/50 shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            <Icon className="w-5 h-5" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 mb-8">
          {topPlayers.slice(0, 3).map((player, index) => (
            <div
              key={player.id}
              className={`relative ${
                index === 0
                  ? 'md:order-2 md:scale-110'
                  : index === 1
                  ? 'md:order-1'
                  : 'md:order-3'
              }`}
            >
              <div
                className={`bg-gradient-to-b ${
                  index === 0
                    ? 'from-yellow-500/70 to-yellow-900/30 border-4 border-yellow-400 shadow-lg shadow-yellow-500/30'
                    : index === 1
                    ? 'from-gray-500/40 to-gray-900/30 border-4 border-gray-400 shadow-md shadow-gray-500/30'
                    : 'from-orange-500/40 to-orange-900/30 border-4 border-orange-400 shadow-md shadow-orange-500/30'
                } rounded-2xl p-6 text-center relative`}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0
                        ? 'bg-yellow-500'
                        : index === 1
                        ? 'bg-gray-400'
                        : 'bg-orange-500'
                    }`}
                  >
                    {getRankIcon(index + 1)}
                  </div>
                </div>

                <img
                  src={`${import.meta.env.BASE_URL}${player.avatar}`}
                  alt={player.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 mt-4 border-4 border-yellow-400 shadow-lg"
                />

                <h3 className="text-xl font-bold text-white mb-2">{player.name}</h3>
                {/* <p className="text-sm text-gray-300 mb-2">{player.faction}</p> */}
                <div className="text-2xl font-bold text-yellow-400">
  {player.stats.kills.toLocaleString()}
</div>
<p className="text-xs text-white">TOP KILL</p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Players */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Ranking Completo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPlayers.slice(3).map((player) => (
              <div
                key={player.id}
                className=" hover:shadow-lg  transition-all duration-300"
              >
                <PlayerCard player={player} onClick={onPlayerClick} />
              </div>
            ))}
          </div>
        </div>
      </>
    )}
  </div>
</div>
        

        
        

       
     
  );
}