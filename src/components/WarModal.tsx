import { useState } from 'react';
import { War } from '../types';
import { X, Sword, Users, Trophy, Target, Clock, Calendar, MapPin, Flame, TrendingUp } from 'lucide-react';

interface WarModalProps {
  war: War;
  onClose: () => void;
}

export default function WarModal({ war, onClose }: WarModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'escalation' | 'battles' | 'stats'>('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'ended': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      case 'scheduled': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getPlayerStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'injured': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'eliminated': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Leader': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Commander': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'Soldier': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Support': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Em Andamento';
      case 'ended': return 'Finalizada';
      case 'scheduled': return 'Agendada';
      default: return status;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: Sword },
    { id: 'escalation', label: 'Provável Escalação', icon: Users },
    { id: 'battles', label: 'Batalhas', icon: Target },
    { id: 'stats', label: 'Estatísticas', icon: TrendingUp }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Sword className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{war.name}</h2>
                <div className="flex items-center space-x-3 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(war.status)}`}>
                    {getStatusLabel(war.status)}
                  </span>
                  {war.winner && (
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm">Vencedor: {war.winner}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Factions VS */}
          <div className="bg-gray-800/30 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={war.faction1.logo}
                  alt={war.faction1.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-purple-500"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{war.faction1.name}</h3>
                  <p className="text-gray-400">{war.faction1.tag}</p>
                  {war.status !== 'scheduled' && (
                    <div className="text-green-400 font-bold text-lg">{war.stats.faction1Kills} kills</div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3 text-red-400">
                <Flame className="w-8 h-8" />
                <span className="text-2xl font-bold">VS</span>
                <Flame className="w-8 h-8" />
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <h3 className="text-xl font-bold text-white">{war.faction2.name}</h3>
                  <p className="text-gray-400">{war.faction2.tag}</p>
                  {war.status !== 'scheduled' && (
                    <div className="text-green-400 font-bold text-lg">{war.stats.faction2Kills} kills</div>
                  )}
                </div>
                <img
                  src={war.faction2.logo}
                  alt={war.faction2.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-gray-800/50 rounded-xl p-2 mb-6">
            <div className="flex space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
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
            {activeTab === 'overview' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span className="text-red-300 font-medium">Território</span>
                    </div>
                    <p className="text-white text-lg">{war.territory}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-300 font-medium">Motivo</span>
                    </div>
                    <p className="text-white text-lg">{war.reason}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-300 font-medium">Início</span>
                    </div>
                    <p className="text-white text-lg">
                      {new Date(war.startDate).toLocaleDateString('pt-BR')} <span className="text-gray-400 text-sm mt-1">Hora: {war.timeDate}</span>
                    </p>
                    {/* <p className="text-gray-400 text-sm mt-1">Hora: {war.timeDate}</p> */}
                  </div>
                  

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-medium">Duração</span>
                    </div>
                    <p className="text-white text-lg">{war.stats.duration}</p>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Sobre a Guerra</h3>
                  <p className="text-gray-300 leading-relaxed">{war.description}</p>
                </div>
              </>
            )}

            {activeTab === 'escalation' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Faction 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <img src={war.faction1.logo} alt={war.faction1.name} className="w-6 h-6 rounded" />
                    <span>{war.faction1.name} {war.faction1.tag}</span>
                  </h3>
                  <div className="space-y-3">
                    {war.escalation.faction1Players.map((player) => (
                      <div key={player.playerId} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={player.avatar}
                            alt={player.playerName}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-white font-medium">{player.playerName}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(player.role)}`}>
                                {player.role}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPlayerStatusColor(player.status)}`}>
                                {player.status}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-green-400">K: {player.kills}</span>
                              <span className="text-red-400">D: {player.deaths}</span>
                              <span className="text-purple-400">K/D: {(player.kills / Math.max(player.deaths, 1)).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Faction 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <img src={war.faction2.logo} alt={war.faction2.name} className="w-6 h-6 rounded" />
                    <span>{war.faction2.name} {war.faction2.tag}</span>
                  </h3>
                  <div className="space-y-3">
                    {war.escalation.faction2Players.map((player) => (
                      <div key={player.playerId} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={player.avatar}
                            alt={player.playerName}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-white font-medium">{player.playerName}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(player.role)}`}>
                                {player.role}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPlayerStatusColor(player.status)}`}>
                                {player.status}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-green-400">K: {player.kills}</span>
                              <span className="text-red-400">D: {player.deaths}</span>
                              <span className="text-purple-400">K/D: {(player.kills / Math.max(player.deaths, 1)).toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

               {activeTab === 'battles' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Proximas Guerra</h3>
                {war.battles.length === 0 ? (
                  <div className="text-center py-8">
                    <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">
                      {war.status === 'scheduled' ? 'Guerra ainda não iniciada' : 'Nenhuma batalha registrada'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {war.battles.map((battle, index) => (
                      <div key={battle.id} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="text-white font-medium">Esperando o Resultado da Guerra</h4>
                              <p className="text-sm text-gray-400">{new Date(battle.date).toLocaleDateString('pt-BR')}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-300 font-medium">{battle.winner}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{battle.faction1Kills}</div>
                            <div className="text-xs text-gray-400">{war.faction1.tag}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-400">{battle.duration}</div>
                            <div className="text-xs text-gray-400">Duração</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{battle.faction2Kills}</div>
                            <div className="text-xs text-gray-400">{war.faction2.tag}</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-300">
                            <MapPin className="w-4 h-4 mr-2 text-red-400" />
                            <span>{battle.location}</span>
                          </div>
                          <p className="text-sm text-gray-300">{battle.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Estatísticas da Guerra</h3>
                
                {war.status !== 'scheduled' ? (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">{war.stats.faction1Kills}</div>
                        <div className="text-gray-400 text-sm">Kills {war.faction1.tag}</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">{war.stats.faction2Kills}</div>
                        <div className="text-gray-400 text-sm">Kills {war.faction2.tag}</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400">{war.stats.totalBattles}</div>
                        <div className="text-gray-400 text-sm">Total Batalhas</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400">{war.stats.faction1Kills + war.stats.faction2Kills}</div>
                        <div className="text-gray-400 text-sm">Total Kills</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-800/30 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-white mb-4">Performance por Facção</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">{war.faction1.name}:</span>
                            <span className="text-green-400 font-bold">{war.stats.faction1Kills} kills</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">{war.faction2.name}:</span>
                            <span className="text-green-400 font-bold">{war.stats.faction2Kills} kills</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Diferença:</span>
                            <span className="text-purple-400 font-bold">
                              {Math.abs(war.stats.faction1Kills - war.stats.faction2Kills)} kills
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/30 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-white mb-4">Informações Gerais</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Duração:</span>
                            <span className="text-cyan-400 font-bold">{war.stats.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Players Envolvidos:</span>
                            <span className="text-yellow-400 font-bold">
                              {war.escalation.faction1Players.length + war.escalation.faction2Players.length}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Kills por Batalha:</span>
                            <span className="text-orange-400 font-bold">
                              {war.stats.totalBattles > 0 ? Math.round((war.stats.faction1Kills + war.stats.faction2Kills) / war.stats.totalBattles) : 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Guerra agendada - estatísticas disponíveis após o início</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}