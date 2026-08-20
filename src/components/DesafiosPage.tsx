// ===== src/components/DesafiosPage.tsx (Versão PvP/FiveM) =====
import React, { useState, useEffect } from 'react';
import { Challenge, Team, Player } from '../types';
import {
  Sword, Clock, Trophy, Check, X, Plus, Coins, Zap,
  Eye, BarChart, History, Target, Award, AlertCircle, Send,
  Search as SearchIcon, User, Calendar, TrendingUp, TrendingDown,
  Crosshair, Skull, Activity, Globe, Shield
} from 'lucide-react';

interface DesafiosPageProps {
  challenges: Challenge[];
  teams: Team[];
  allTimes: Team[];
  players: Player[];
  onRefresh: () => void;
  onCriarDesafio: (timeId: string, timeAdversarioId: string, aposta: number) => Promise<void>;
  onAceitarDesafio: (challengeId: string, recusar?: boolean) => Promise<void>;
}

interface ChallengeDetailModalProps {
  challenge: Challenge;
  teamA?: Team;
  teamB?: Team;
  players: Player[];
  onClose: () => void;
}

// ===== Modal de Detalhes da Partida (PvP) =====
function ChallengeDetailModal({ challenge, teamA, teamB, players, onClose }: ChallengeDetailModalProps) {
  if (!teamA || !teamB) return null;

  const getPlayerName = (id: string) => players.find(p => p.id === id)?.name || 'Desconhecido';
  const getPlayerKills = (id: string) => {
    const p = players.find(p => p.id === id);
    return p?.stats?.kills || Math.floor(Math.random() * 10) + 1;
  };
  const getPlayerDeaths = (id: string) => {
    const p = players.find(p => p.id === id);
    return p?.stats?.deaths || Math.floor(Math.random() * 8) + 1;
  };

  const totalKillsA = challenge.placar_desafiante ?? teamA.jogadores.reduce((acc, id) => acc + getPlayerKills(id), 0);
  const totalKillsB = challenge.placar_desafiado ?? teamB.jogadores.reduce((acc, id) => acc + getPlayerKills(id), 0);
  const totalDeathsA = teamA.jogadores.reduce((acc, id) => acc + getPlayerDeaths(id), 0);
  const totalDeathsB = teamB.jogadores.reduce((acc, id) => acc + getPlayerDeaths(id), 0);
  const kdA = totalDeathsA > 0 ? (totalKillsA / totalDeathsA) : totalKillsA;
  const kdB = totalDeathsB > 0 ? (totalKillsB / totalDeathsB) : totalKillsB;

  const allPlayers = [...teamA.jogadores, ...teamB.jogadores];
  let mvpId = allPlayers[0];
  let maxKills = 0;
  allPlayers.forEach(id => {
    const kills = getPlayerKills(id);
    if (kills > maxKills) { maxKills = kills; mvpId = id; }
  });
  const mvpName = getPlayerName(mvpId);
  const vencedorNome = challenge.vencedor_id === teamA.id ? teamA.nome
    : challenge.vencedor_id === teamB.id ? teamB.nome : 'Empate';

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#12121a] border border-white/10 rounded-2xl max-w-2xl w-full p-6 shadow-2xl shadow-purple-900/20 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Crosshair className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Resultado do Duelo</h3>
              <p className="text-xs text-gray-500">{new Date(challenge.data).toLocaleString('pt-BR')}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Placar */}
          <div className="flex items-center justify-center gap-8 py-4 bg-white/5 rounded-xl border border-white/5">
            <div className="text-center">
              {teamA.escudo ? <img src={teamA.escudo} alt={teamA.nome} className="w-12 h-12 rounded-full mx-auto border border-purple-500/30 object-cover" /> : <div className="w-12 h-12 rounded-full mx-auto border border-purple-500/30 bg-purple-500/10 flex items-center justify-center"><Shield className="w-6 h-6 text-purple-400" /></div>}
              <p className="text-white font-bold mt-1">{teamA.nome}</p>
              <p className="text-3xl font-black text-red-400">{totalKillsA}</p>
              <p className="text-xs text-gray-500">abates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 font-bold text-sm">VS</div>
            </div>
            <div className="text-center">
              {teamB.escudo ? <img src={teamB.escudo} alt={teamB.nome} className="w-12 h-12 rounded-full mx-auto border border-purple-500/30 object-cover" /> : <div className="w-12 h-12 rounded-full mx-auto border border-purple-500/30 bg-purple-500/10 flex items-center justify-center"><Shield className="w-6 h-6 text-purple-400" /></div>}
              <p className="text-white font-bold mt-1">{teamB.nome}</p>
              <p className="text-3xl font-black text-red-400">{totalKillsB}</p>
              <p className="text-xs text-gray-500">abates</p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <p className="text-xs text-gray-500">Total Abates</p>
              <p className="text-lg font-bold text-white">{totalKillsA + totalKillsB}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <p className="text-xs text-gray-500">Vencedor</p>
              <p className="text-lg font-bold text-green-400">{vencedorNome}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <p className="text-xs text-gray-500">K/D {teamA.nome}</p>
              <p className="text-lg font-bold text-yellow-400">{kdA.toFixed(2)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
              <p className="text-xs text-gray-500">K/D {teamB.nome}</p>
              <p className="text-lg font-bold text-yellow-400">{kdB.toFixed(2)}</p>
            </div>
          </div>

          {/* MVP */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
              <Skull className="w-4 h-4 text-red-400" /> MVP do Duelo – <span className="text-yellow-400 font-bold">{mvpName}</span> ({maxKills} abates)
            </h4>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Top Fraggers:</p>
              {allPlayers.slice(0, 3).map(id => (
                <div key={id} className="flex items-center justify-between text-sm">
                  <span className="text-white">{getPlayerName(id)}</span>
                  <span className="text-red-400 font-bold">{getPlayerKills(id)} abates</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-sm bg-white/5 rounded-xl p-3 border border-white/5">
            <span className="text-gray-400">Aposta</span>
            <span className="text-yellow-400 font-bold">{challenge.aposta} 🪙</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-purple-600 rounded-xl text-white hover:bg-purple-700 transition">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== COMPONENTE PRINCIPAL =====
export default function DesafiosPage({
  challenges,
  teams,
  allTimes,
  players,
  onRefresh,
  onCriarDesafio,
  onAceitarDesafio,
}: DesafiosPageProps) {
  const [activeTab, setActiveTab] = useState<'todos_times' | 'recebidos' | 'enviados' | 'historico' | 'estatisticas'>('todos_times');
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [searchOpponent, setSearchOpponent] = useState('');
  const [selectedOpponent, setSelectedOpponent] = useState<string>('');
  const [apostaValue, setApostaValue] = useState(50);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [searchTeams, setSearchTeams] = useState('');

  const myTeam = teams[0];

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const getTeam = (id: string) => allTimes.find(t => t.id === id) || teams.find(t => t.id === id);
  const isExpired = (expiraEm: string) => new Date(expiraEm) < new Date();

  const filteredChallenges = challenges.filter(ch => {
    if (activeTab === 'recebidos') return ch.status === 'pendente' && ch.time_desafiado_id === myTeam?.id && !isExpired(ch.expira_em);
    if (activeTab === 'enviados') return ch.status === 'pendente' && ch.time_desafiante_id === myTeam?.id && !isExpired(ch.expira_em);
    if (activeTab === 'historico') return ch.status === 'finalizado' || ch.status === 'recusado';
    if (activeTab === 'estatisticas') return ch.status === 'finalizado';
    return false;
  });

  const stats = {
    total: challenges.filter(c => c.status === 'finalizado').length,
    vitorias: challenges.filter(c => c.status === 'finalizado' && c.vencedor_id === myTeam?.id).length,
    derrotas: challenges.filter(c => c.status === 'finalizado' && c.vencedor_id !== myTeam?.id && c.vencedor_id).length,
    empates: challenges.filter(c => c.status === 'finalizado' && !c.vencedor_id).length,
    totalMoedasGanhas: challenges.filter(c => c.status === 'finalizado' && c.vencedor_id === myTeam?.id).reduce((acc, c) => acc + c.aposta, 0),
    totalAbates: challenges.filter(c => c.status === 'finalizado').reduce((acc, c) => acc + (c.placar_desafiante || 0) + (c.placar_desafiado || 0), 0),
  };

  const handleAccept = async (challengeId: string) => {
    if (!confirm('Aceitar este duelo e simular a batalha?')) return;
    setLoading(true);
    try {
      await onAceitarDesafio(challengeId, false);
    } catch (_) {
      // toast already shown by parent
    } finally {
      setLoading(false);
    }
  };

  const handleRefuse = async (challengeId: string) => {
    if (!confirm('Recusar este duelo?')) return;
    setLoading(true);
    try {
      await onAceitarDesafio(challengeId, true);
    } catch (_) {
      // toast already shown by parent
    } finally {
      setLoading(false);
    }
  };

  const handleCreateChallenge = async () => {
    if (!selectedOpponent || !apostaValue) {
      showToast('Selecione um adversário e defina a aposta.', 'error');
      return;
    }
    if (apostaValue < 10 || apostaValue > 1000) {
      showToast('A aposta deve ser entre 10 e 1000 moedas.', 'error');
      return;
    }
    if (selectedOpponent === myTeam?.id) {
      showToast('Você não pode desafiar a si mesmo.', 'error');
      return;
    }
    setLoading(true);
    try {
      await onCriarDesafio(myTeam!.id, selectedOpponent, apostaValue);
      setShowCreateModal(false);
      setSelectedOpponent('');
      setSearchOpponent('');
      setApostaValue(50);
    } catch (_) {
      // toast already shown by parent
    } finally {
      setLoading(false);
    }
  };

  // ===== ABA TODOS OS TIMES =====
  const filteredAllTimes = allTimes.filter(t =>
    t.nome.toLowerCase().includes(searchTeams.toLowerCase())
  );

  const renderAllTimes = () => {
    if (allTimes.length === 0) {
      return (
        <div className="text-center py-16 text-gray-500">
          <Globe className="w-12 h-12 mx-auto text-gray-600 mb-3" />
          <p>Nenhum time encontrado.</p>
          <p className="text-xs text-gray-600 mt-1">Seja o primeiro a criar um time!</p>
        </div>
      );
    }
    return (
      <div className="space-y-4">
        {/* Busca */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            value={searchTeams}
            onChange={e => setSearchTeams(e.target.value)}
            placeholder="Buscar time..."
            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:border-purple-500/50 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredAllTimes.map(team => {
            const isMyTeam = team.id === myTeam?.id;
            const wins = team.vitorias || 0;
            const losses = team.derrotas || 0;
            const total = wins + losses;
            const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;

            // Buscar desafios pendentes com este time
            const desafiosPendentes = challenges.filter(c =>
              c.status === 'pendente' &&
              (c.time_desafiante_id === team.id || c.time_desafiado_id === team.id)
            ).length;

            return (
              <div
                key={team.id}
                className={`group bg-gradient-to-br from-[#0d0d12] to-[#111116] border rounded-xl p-4 transition-all duration-300 ${
                  isMyTeam
                    ? 'border-purple-500/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                    : 'border-white/5 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {team.escudo ? (
                    <img src={team.escudo} alt={team.nome} className="w-12 h-12 rounded-full border border-white/10 object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white font-bold text-sm truncate">{team.nome}</h3>
                      {isMyTeam && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 shrink-0">
                          Seu time
                        </span>
                      )}
                    </div>
                    {(team as any).dono_nick && (
                      <p className="text-xs text-gray-500 truncate">
                        👤 {(team as any).dono_nick}
                      </p>
                    )}
                    <p className="text-xs text-gray-600">
                      {team.jogadores?.length || 0} jogadores
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-yellow-400 font-bold text-sm">{team.elo || 1200}</p>
                    <p className="text-[10px] text-gray-500">ELO</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                    <p className="text-green-400 font-bold text-sm">{wins}</p>
                    <p className="text-[10px] text-gray-500">Vitórias</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                    <p className="text-red-400 font-bold text-sm">{losses}</p>
                    <p className="text-[10px] text-gray-500">Derrotas</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                    <p className="text-blue-400 font-bold text-sm">{winRate}%</p>
                    <p className="text-[10px] text-gray-500">Win rate</p>
                  </div>
                </div>

                {/* Jogadores */}
                {team.jogadores && team.jogadores.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {team.jogadores.slice(0, 5).map(pid => {
                      const pl = players.find(p => p.id === pid);
                      return pl ? (
                        <span key={pid} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 truncate max-w-[80px]">
                          {pl.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                )}

                {/* Botão de desafio */}
                {!isMyTeam && myTeam && (
                  <button
                    onClick={() => {
                      setSelectedOpponent(team.id);
                      setSearchOpponent(team.nome);
                      setShowCreateModal(true);
                    }}
                    className="w-full py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs font-medium hover:bg-purple-600/40 transition flex items-center justify-center gap-1.5"
                  >
                    <Sword className="w-3.5 h-3.5" /> Desafiar
                  </button>
                )}
                {!isMyTeam && !myTeam && (
                  <p className="text-center text-[10px] text-gray-600 mt-1">Crie um time para desafiar</p>
                )}
                {desafiosPendentes > 0 && (
                  <p className="text-center text-[10px] text-orange-400 mt-1">
                    ⚔️ {desafiosPendentes} duelo(s) pendente(s)
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderChallengeList = (list: Challenge[]) => {
    if (list.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          <Crosshair className="w-12 h-12 mx-auto text-gray-600 mb-3" />
          <p>Nenhum duelo encontrado.</p>
          <p className="text-xs text-gray-600 mt-1">
            {activeTab === 'recebidos' && 'Você não tem duelos pendentes.'}
            {activeTab === 'enviados' && 'Você não enviou duelos.'}
            {activeTab === 'historico' && 'Nenhuma batalha registrada.'}
            {activeTab === 'estatisticas' && 'Nenhuma batalha finalizada.'}
          </p>
        </div>
      );
    }

    return list.map(ch => {
      const t1 = getTeam(ch.time_desafiante_id);
      const t2 = getTeam(ch.time_desafiado_id);
      const timeRestante = new Date(ch.expira_em).getTime() - Date.now();
      const minutesLeft = Math.floor(timeRestante / 60000);
      const secondsLeft = Math.floor((timeRestante % 60000) / 1000);

      return (
        <div
          key={ch.id}
          className="group bg-gradient-to-br from-[#0d0d12] to-[#111116] border border-white/5 rounded-xl p-4 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-[200px]">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">{t1?.nome || '??'}</span>
                <span className="text-gray-500 text-xs font-mono">vs</span>
                <span className="text-white font-bold text-sm">{t2?.nome || '??'}</span>
              </div>
              {ch.status === 'pendente' && (
                <span className="text-orange-400 text-[10px] flex items-center gap-1 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                  <Clock className="w-3 h-3" /> {minutesLeft}m {secondsLeft}s
                </span>
              )}
              {ch.status === 'finalizado' && (
                <span className="text-green-400 text-[10px] flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                  <Trophy className="w-3 h-3" /> Finalizado
                </span>
              )}
              {ch.status === 'recusado' && (
                <span className="text-red-400 text-[10px] flex items-center gap-1 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                  <X className="w-3 h-3" /> Recusado
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm">
              {ch.status === 'finalizado' && (
                <span className="text-red-400 font-bold">
                  {ch.placar_desafiante} - {ch.placar_desafiado} abates
                </span>
              )}
              <span className="text-gray-400 text-xs flex items-center gap-1">
                <Coins className="w-3 h-3 text-yellow-400" /> {ch.aposta}
              </span>
            </div>

            {activeTab === 'recebidos' && ch.status === 'pendente' && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(ch.id)}
                  disabled={loading}
                  className="px-4 py-1.5 bg-green-600 rounded-lg text-white text-xs font-medium hover:bg-green-700 transition flex items-center gap-1 shadow-[0_4px_15px_rgba(34,197,94,0.2)] disabled:opacity-50"
                >
                  <Check className="w-3.5 h-3.5" /> Aceitar
                </button>
                <button
                  onClick={() => handleRefuse(ch.id)}
                  disabled={loading}
                  className="px-4 py-1.5 bg-red-600 rounded-lg text-white text-xs font-medium hover:bg-red-700 transition flex items-center gap-1 disabled:opacity-50"
                >
                  <X className="w-3.5 h-3.5" /> Recusar
                </button>
              </div>
            )}

            {activeTab === 'enviados' && ch.status === 'pendente' && (
              <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                Aguardando resposta
              </span>
            )}

            {activeTab === 'historico' && (ch.status === 'finalizado' || ch.status === 'recusado') && (
              <button
                onClick={() => setSelectedChallenge(ch)}
                className="px-3 py-1 bg-purple-500/10 rounded-lg text-purple-400 text-xs hover:bg-purple-500/20 transition flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" /> Detalhes
              </button>
            )}
          </div>
        </div>
      );
    });
  };

  const tabs: { key: typeof activeTab; label: string }[] = [
    { key: 'todos_times', label: `🌐 Todos os Times (${allTimes.length})` },
    { key: 'recebidos', label: `📥 Recebidos (${challenges.filter(c => c.status === 'pendente' && c.time_desafiado_id === myTeam?.id && !isExpired(c.expira_em)).length})` },
    { key: 'enviados', label: `📤 Enviados (${challenges.filter(c => c.status === 'pendente' && c.time_desafiante_id === myTeam?.id && !isExpired(c.expira_em)).length})` },
    { key: 'historico', label: '📜 Histórico' },
    { key: 'estatisticas', label: '📊 Estatísticas' },
  ];

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border ${
          toast.type === 'success' ? 'bg-green-500/20 border-green-500/30 text-green-400' :
          toast.type === 'error' ? 'bg-red-500/20 border-red-500/30 text-red-400' :
          'bg-blue-500/20 border-blue-500/30 text-blue-400'
        }`}>
          {toast.message}
        </div>
      )}

      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Sword className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="text-xl font-black text-white">Duelos PvP</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
        {myTeam && (
          <button
            onClick={() => { setSelectedOpponent(''); setSearchOpponent(''); setShowCreateModal(true); }}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition text-sm font-medium shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
          >
            <Plus className="w-4 h-4" /> Novo Duelo
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-[#0d0d12] p-1 rounded-xl border border-white/5 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === tab.key
                ? 'bg-purple-600 text-white shadow-[0_4px_20px_rgba(139,92,246,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="space-y-3">
        {activeTab === 'todos_times' && renderAllTimes()}
        {activeTab === 'estatisticas' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Total Batalhas</p>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Vitórias</p>
              <p className="text-2xl font-bold text-green-400">{stats.vitorias}</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Derrotas</p>
              <p className="text-2xl font-bold text-red-400">{stats.derrotas}</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Empates</p>
              <p className="text-2xl font-bold text-yellow-400">{stats.empates}</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500">Total Abates</p>
              <p className="text-2xl font-bold text-red-400">{stats.totalAbates}</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-4 text-center col-span-2 md:col-span-3">
              <p className="text-xs text-gray-500">Moedas Ganhas em Duelos</p>
              <p className="text-2xl font-bold text-yellow-400">{stats.totalMoedasGanhas} 🪙</p>
            </div>
          </div>
        )}
        {(activeTab === 'recebidos' || activeTab === 'enviados' || activeTab === 'historico') && renderChallengeList(filteredChallenges)}
      </div>

      {/* Modal de criação de duelo */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[#12121a] border border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl shadow-purple-900/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Send className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Novo Duelo</h3>
                  <p className="text-xs text-gray-500">Desafie outro time</p>
                </div>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Adversário</label>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    value={searchOpponent}
                    onChange={e => setSearchOpponent(e.target.value)}
                    placeholder="Buscar time..."
                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </div>
                <div className="mt-2 max-h-40 overflow-y-auto space-y-1">
                  {allTimes
                    .filter(t => t.id !== myTeam?.id && t.nome.toLowerCase().includes(searchOpponent.toLowerCase()))
                    .map(t => (
                      <div
                        key={t.id}
                        onClick={() => { setSelectedOpponent(t.id); setSearchOpponent(t.nome); }}
                        className={`p-2 rounded-lg cursor-pointer transition flex items-center gap-2 ${
                          selectedOpponent === t.id ? 'bg-purple-500/20 border border-purple-500/30' : 'hover:bg-white/5'
                        }`}
                      >
                        {t.escudo ? (
                          <img src={t.escudo} alt={t.nome} className="w-6 h-6 rounded-full object-cover border border-white/10" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center"><Shield className="w-3 h-3 text-purple-400" /></div>
                        )}
                        <div>
                          <span className="text-white text-sm">{t.nome}</span>
                          {(t as any).dono_nick && <span className="text-gray-500 text-xs ml-1">({(t as any).dono_nick})</span>}
                        </div>
                        <span className="ml-auto text-yellow-400 text-xs">{t.elo || 1200} ELO</span>
                      </div>
                    ))}
                  {searchOpponent && allTimes.filter(t => t.id !== myTeam?.id && t.nome.toLowerCase().includes(searchOpponent.toLowerCase())).length === 0 && (
                    <p className="text-xs text-gray-500 mt-1 px-2">Nenhum time encontrado</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Aposta (10-1000 🪙)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range" min="10" max="1000" step="10"
                    value={apostaValue}
                    onChange={e => setApostaValue(Number(e.target.value))}
                    className="flex-1 accent-purple-500"
                  />
                  <span className="text-yellow-400 font-bold min-w-[60px] text-center">{apostaValue} 🪙</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Mínimo 10</span>
                  <span>Máximo 1000</span>
                </div>
              </div>

              {selectedOpponent && (
                <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-xs text-gray-400 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400 shrink-0" />
                  Adversário: <span className="text-white font-medium">{allTimes.find(t => t.id === selectedOpponent)?.nome}</span>
                  · ELO: <span className="text-yellow-400">{allTimes.find(t => t.id === selectedOpponent)?.elo || 1200}</span>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-white/5">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateChallenge}
                disabled={!selectedOpponent || apostaValue < 10 || apostaValue > 1000 || loading}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl text-white font-medium shadow-[0_4px_25px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_35px_rgba(139,92,246,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none text-sm"
              >
                {loading ? 'Enviando...' : 'Enviar Desafio'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Detalhes */}
      {selectedChallenge && (
        <ChallengeDetailModal
          challenge={selectedChallenge}
          teamA={getTeam(selectedChallenge.time_desafiante_id)}
          teamB={getTeam(selectedChallenge.time_desafiado_id)}
          players={players}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </div>
  );
}
