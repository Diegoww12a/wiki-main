// ===== src/components/TimesPage.tsx (COM PORTAL E LAYOUT REFINADO) =====
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Team, Player } from '../types';
import {
  Plus,
  Trash2,
  Trophy,
  Users,
  X,
  Shield,
  Check,
  Image as ImageIcon,
  Edit,
  Settings,
  AlertCircle,
  UserPlus,
} from 'lucide-react';

interface TimesPageProps {
  teams: Team[];
  players: Player[];
  acervoIds: string[];
  onRefresh: () => void;
  onCriarTime: (nome: string, escudo: string, jogadores: string[]) => void;
  onEditarTime: (id: string, nome: string, escudo: string, jogadores: string[]) => void;
  onDeletarTime: (teamId: string) => void;
}

export default function TimesPage({
  teams,
  players,
  acervoIds,
  onRefresh,
  onCriarTime,
  onEditarTime,
  onDeletarTime,
}: TimesPageProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const hasTeam = teams.length >= 1;

  const openEditModal = (team: Team) => {
    setEditingTeam(team);
    setShowEditModal(true);
  };

  const closeModals = () => {
    setShowCreateModal(false);
    setShowEditModal(false);
    setEditingTeam(null);
  };

  const playersEmTimes = teams.flatMap((t) => t.jogadores);
  const acervoPlayers = players.filter((p) => acervoIds.includes(p.id));
  const acervoPlayersDisponiveis = acervoPlayers.filter(
    (p) => !playersEmTimes.includes(p.id)
  );

  const handleDeleteTeam = async (teamId: string) => {
    if (!confirm('Tem certeza que quer deletar este time?')) return;
    setIsLoading(true);
    try {
      onDeletarTime(teamId);
      onRefresh();
    } finally {
      setIsLoading(false);
    }
  };

  // ===== COMPONENTE DE FORMULÁRIO =====
  const TeamForm = ({
    mode,
    initialData,
    onClose,
    onSubmit,
  }: {
    mode: 'create' | 'edit';
    initialData?: { nome: string; escudo: string; jogadores: string[] };
    onClose: () => void;
    onSubmit: (nome: string, escudo: string, jogadores: string[]) => void;
  }) => {
    const [nome, setNome] = useState(initialData?.nome || '');
    const [escudo, setEscudo] = useState(initialData?.escudo || '');
    const [jogadores, setJogadores] = useState<string[]>(initialData?.jogadores || []);
    const [localLoading, setLocalLoading] = useState(false);

    const isEdit = mode === 'edit';
    const title = isEdit ? 'Editar Time' : 'Criar Novo Time';
    const subtitle = isEdit
      ? 'Altere as configurações do seu time'
      : 'Monte seu time dos sonhos com 5 jogadores';
    const buttonLabel = isEdit ? 'Salvar Alterações' : 'Criar Time';

    const jogadoresOcupados = teams
      .filter((t) => t.id !== editingTeam?.id)
      .flatMap((t) => t.jogadores);

    const jogadoresDisponiveis = acervoPlayers.filter(
      (p) => !jogadoresOcupados.includes(p.id) || (isEdit && initialData?.jogadores.includes(p.id))
    );

    const handleSubmit = async () => {
      if (!nome.trim() || jogadores.length !== 5) {
        alert('Preencha o nome e selecione exatamente 5 players.');
        return;
      }
      setLocalLoading(true);
      try {
        await onSubmit(nome.trim(), escudo || 'default-shield.png', jogadores);
        onClose();
      } catch (error) {
        alert('Erro ao salvar. Tente novamente.');
      } finally {
        setLocalLoading(false);
      }
    };

    return (
      <div className="bg-[#12121a] border border-white/10 rounded-2xl max-w-xl w-full p-5 shadow-2xl shadow-purple-900/20 my-auto">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
              {isEdit ? <Settings className="w-4 h-4 text-purple-400" /> : <Shield className="w-4 h-4 text-purple-400" />}
            </div>
            <div>
              <h3 className="text-base font-black text-white">{title}</h3>
              <p className="text-[10px] text-gray-500">{subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">
              Nome do Time
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Users className="w-3.5 h-3.5" />
              </div>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Os Imbatíveis"
                className="w-full pl-8 pr-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Escudo */}
          <div>
            <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">
              URL do Escudo (opcional)
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
              <input
                value={escudo}
                onChange={(e) => setEscudo(e.target.value)}
                placeholder="https://exemplo.com/escudo.png"
                className="w-full pl-8 pr-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Seleção de jogadores */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Selecione 5 jogadores
              </label>
              <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                {jogadores.length} / 5
              </span>
            </div>

            {acervoPlayers.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-center bg-white/5 rounded-xl border border-white/5">
                <UserPlus className="w-8 h-8 text-gray-600 mb-2" />
                <p className="text-sm text-gray-400 font-medium">Seu acervo está vazio</p>
                <p className="text-xs text-gray-600 mt-0.5">Compre players na Loja para montar seu time</p>
              </div>
            ) : jogadoresDisponiveis.length === 0 && jogadores.length === 0 ? (
              <div className="flex items-center gap-2 text-yellow-400 text-xs bg-yellow-500/10 px-3 py-2 rounded-lg border border-yellow-500/20">
                <AlertCircle className="w-4 h-4" />
                <span>Todos os seus jogadores já estão em times. Libere alguns para montar este.</span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 max-h-48 overflow-y-auto p-1 custom-scroll">
                  {jogadoresDisponiveis.map((p) => {
                    const isSelected = jogadores.includes(p.id);
                    return (
                      <div
                        key={p.id}
                        onClick={() => {
                          if (isSelected) {
                            setJogadores(jogadores.filter((id) => id !== p.id));
                          } else if (jogadores.length < 5) {
                            setJogadores([...jogadores, p.id]);
                          }
                        }}
                        className={`
                          relative group cursor-pointer rounded-lg transition-all duration-200
                          ${
                            isSelected
                              ? 'bg-purple-500/20 border-2 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                              : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30'
                          }
                          ${jogadores.length >= 5 && !isSelected ? 'opacity-40 cursor-not-allowed' : ''}
                        `}
                      >
                        <img
                          src={p.avatar}
                          alt={p.name}
                          className="w-full aspect-square rounded-t-lg object-cover"
                        />
                        <div className="p-1 text-center">
                          <p className="text-white text-[9px] font-medium truncate">{p.name}</p>
                        </div>
                        {isSelected && (
                          <div className="absolute top-0.5 right-0.5 bg-purple-600 rounded-full p-0.5">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {jogadoresDisponiveis.length < 5 && jogadores.length < 5 && (
                  <div className="flex items-center gap-2 text-yellow-400 text-[10px] mt-1.5 bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/20">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Faltam {5 - jogadoresDisponiveis.length} jogador(es) disponíveis no acervo.</span>
                  </div>
                )}
              </>
            )}

            <p className="text-[10px] text-gray-500 mt-1.5 text-center">
              {jogadores.length === 5
                ? '✅ Time completo!'
                : `Faltam ${5 - jogadores.length} jogador(es)`}
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-3 mt-5 pt-4 border-t border-white/5">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition text-sm font-medium disabled:opacity-50"
            disabled={localLoading}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!nome.trim() || jogadores.length !== 5 || localLoading}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg text-white font-medium shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none text-sm"
          >
            {localLoading ? 'Salvando...' : buttonLabel}
          </button>
        </div>
      </div>
    );
  };

  // ===== RENDERIZAÇÃO COM PORTAL =====
  const renderModal = (content: React.ReactNode) => {
    return createPortal(
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 p-4 overflow-y-auto">
        <div className="min-h-full w-full flex items-center justify-center">
          {content}
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Users className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="text-xl font-black text-white">Meu Time</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
          disabled={hasTeam || isLoading}
        >
          <Plus className="w-4 h-4" /> Criar Time
        </button>
      </div>

      {/* Lista de times */}
      {teams.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-gray-600" />
          </div>
          <p className="text-gray-400 text-sm font-medium">Você ainda não tem um time.</p>
          <p className="text-gray-600 text-xs mt-1">Crie o seu agora! (apenas 1 time por usuário)</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          {teams.map((team) => (
            <div
              key={team.id}
              className="group bg-gradient-to-br from-[#0d0d12] to-[#111116] border border-white/5 rounded-2xl p-5 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                  <img
                    src={team.escudo}
                    alt={team.nome}
                    className="w-16 h-16 rounded-full border-2 border-purple-500/20 group-hover:border-purple-500/50 transition-all"
                  />
                  <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-md -z-10 group-hover:blur-xl transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                    {team.nome}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-yellow-400" /> ELO: {team.elo}
                    </span>
                    <span>
                      {team.vitorias}V / {team.derrotas}D
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => openEditModal(team)}
                    className="p-2 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 text-blue-400 transition"
                    title="Editar time"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteTeam(team.id)}
                    className="p-2 bg-red-500/10 rounded-lg hover:bg-red-500/20 text-red-400 transition"
                    disabled={isLoading}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {team.jogadores.map((playerId) => {
                  const p = players.find((p) => p.id === playerId);
                  return p ? (
                    <div key={p.id} className="relative group/player">
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="w-full aspect-square rounded-lg object-cover border border-white/10 group-hover/player:border-purple-500/50 transition-all"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/player:opacity-100 transition-opacity rounded-lg flex items-end justify-center pb-1">
                        <span className="text-[9px] text-white font-medium truncate px-1">
                          {p.name}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={playerId}
                      className="w-full aspect-square rounded-lg bg-gray-800 border border-white/5 flex items-center justify-center text-gray-600 text-xs"
                    >
                      ?
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL DE CRIAÇÃO (com Portal) */}
      {showCreateModal &&
        renderModal(
          <TeamForm
            mode="create"
            onClose={closeModals}
            onSubmit={(nome, escudo, jogadores) => {
              onCriarTime(nome, escudo, jogadores);
              closeModals();
            }}
          />
        )}

      {/* MODAL DE EDIÇÃO (com Portal) */}
      {showEditModal &&
        editingTeam &&
        renderModal(
          <TeamForm
            mode="edit"
            initialData={{
              nome: editingTeam.nome,
              escudo: editingTeam.escudo,
              jogadores: editingTeam.jogadores,
            }}
            onClose={closeModals}
            onSubmit={(nome, escudo, jogadores) => {
              onEditarTime(editingTeam.id, nome, escudo, jogadores);
              closeModals();
            }}
          />
        )}
    </div>
  );
}