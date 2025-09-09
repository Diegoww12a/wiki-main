import React, { useState } from 'react';
import { Faction } from '../types';
import { X, Shield, Users, Trophy, Target, DollarSign, Crown, Calendar, Award, Sword, TrendingUp } from 'lucide-react';

interface FactionModalProps {
  faction: Faction;
  onClose: () => void;
}

export default function FactionModal({ faction, onClose }: FactionModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'achievements' | 'stats'>('overview');

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Gang': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'Police': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Mafia': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'Military': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Biker': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'war': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'inactive': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      case 'rare': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'epic': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'legendary': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: Shield },
    { id: 'members', label: 'Membros', icon: Users },
    { id: 'achievements', label: 'Conquistas', icon: Trophy },
    { id: 'stats', label: 'Estatísticas', icon: TrendingUp }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={faction.logo}
                  alt={faction.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-purple-500"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">{faction.name}</h2>
                  <span className="text-lg text-gray-400">{faction.tag}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(faction.type)}`}>
                    {faction.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(faction.status)}`}>
                    {faction.status}
                  </span>
                  <span className="text-yellow-400 font-medium">Lv. {faction.level}</span>
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
            {activeTab === 'overview' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300 font-medium">Território</span>
                    </div>
                    <p className="text-white text-lg">{faction.territory}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-medium">Líder</span>
                    </div>
                    <p className="text-white text-lg">{faction.leader}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-300 font-medium">Membros</span>
                    </div>
                    <p className="text-white text-lg">{faction.memberCount}/{faction.maxMembers}</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-300 font-medium">Reputação</span>
                    </div>
                    <p className="text-white text-lg">{faction.reputation.toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Sobre a Facção</h3>
                  <p className="text-gray-300 leading-relaxed">{faction.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    Fundada em: <span className="text-white ml-1">{new Date(faction.foundedDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'members' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Membros da Facção</h3>
                {faction.members.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Lista de membros não disponível</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faction.members.map((member) => (
                      <div key={member.playerId} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={member.avatar}
                            alt={member.playerName}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{member.playerName}</h4>
                            <p className="text-sm text-purple-400">{member.rank}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                              <span>Kills: {member.contributions.kills}</span>
                              <span>Missões: {member.contributions.missions}</span>
                            </div>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${
                            member.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Conquistas da Facção</h3>
                {faction.achievements.length === 0 ? (
                  <div className="text-center py-8">
                    <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Nenhuma conquista desbloqueada ainda</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faction.achievements.map((achievement) => (
                      <div key={achievement.id} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex items-start space-x-3">
                          <div className="text-3xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-white font-medium">{achievement.title}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRarityColor(achievement.rarity)}`}>
                                {achievement.rarity}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">{achievement.description}</p>
                            <p className="text-xs text-gray-400">
                              Desbloqueada em: {new Date(achievement.unlockedDate).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Estatísticas Detalhadas</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{faction.stats.totalKills.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Kills</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-400">{faction.stats.totalDeaths.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Total Deaths</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {(faction.stats.totalKills / Math.max(faction.stats.totalDeaths, 1)).toFixed(2)}
                    </div>
                    <div className="text-gray-400 text-sm">K/D Ratio</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400">{faction.stats.territoriesControlled}</div>
                    <div className="text-gray-400 text-sm">Territórios</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Histórico de Guerras</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Guerras Vencidas:</span>
                        <span className="text-green-400 font-bold">{faction.stats.warsWon}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Guerras Perdidas:</span>
                        <span className="text-red-400 font-bold">{faction.stats.warsLost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taxa de Vitória:</span>
                        <span className="text-purple-400 font-bold">
                          {((faction.stats.warsWon / Math.max(faction.stats.warsWon + faction.stats.warsLost, 1)) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Recursos</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dinheiro Total:</span>
                        <span className="text-yellow-400 font-bold">
                          ${faction.stats.totalMoney.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dinheiro por Membro:</span>
                        <span className="text-cyan-400 font-bold">
                          ${Math.floor(faction.stats.totalMoney / Math.max(faction.memberCount, 1)).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}