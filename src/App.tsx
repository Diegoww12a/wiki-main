// ===== src/App.tsx =====

import { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
import RankingsPage from './components/RankingsPage';
import AdminPanel from './components/AdminPanel';
import PlayerModal from './components/PlayerModal';
import EditPlayerModal from './components/EditPlayerModal';
import TimesPage from './components/TimesPage';
import LojaPage from './components/LojaPage';
import AcervoPage from './components/AcervoPage';
import DesafiosPage from './components/DesafiosPage';
import RankingTimesPage from './components/RankingTimesPage';
import KickPage from './components/KickPage';

import { Player, Team, Challenge } from './types';
// 🔥 REMOVA A IMPORT DO MOCK
// import { mockPlayers } from './data/mockData';
import { useToast } from './components/Toast';

// =====================================================
// BACKGROUND CANVAS
// =====================================================

function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COLS = 12;
    const ROWS = 10;

    function project(x: number, y: number, z: number) {
      const fov = 400;
      const scale = fov / (fov + z);
      return {
        x: canvas.width / 2 + x * scale,
        y: canvas.height / 2 + y * scale,
        scale,
      };
    }

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacingX = 120;
      const spacingZ = 120;
      const offsetX = (COLS * spacingX) / 2;
      const offsetZ = (ROWS * spacingZ) / 2;
      const baseY = 180;
      const waveAmp = 18;

      // Linhas horizontais
      for (let row = 0; row <= ROWS; row++) {
        ctx.beginPath();
        for (let col = 0; col <= COLS; col++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + ((t * 40) % spacingZ);
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.35, 0.35 - wz / (offsetZ * 3)));
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          if (col === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Linhas verticais
      for (let col = 0; col <= COLS; col++) {
        ctx.beginPath();
        for (let row = 0; row <= ROWS; row++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + ((t * 40) % spacingZ);
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.2, 0.2 - wz / (offsetZ * 3)));
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          if (row === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Pontos
      for (let col = 0; col <= COLS; col++) {
        for (let row = 0; row <= ROWS; row++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + ((t * 40) % spacingZ);
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.5, 0.5 - wz / (offsetZ * 3)));
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0, 1.2 * p.scale), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }
    }

    function loop() {
      t += 0.003;
      drawGrid();
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.3 }}
    />
  );
}

// =====================================================
// APP
// =====================================================

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  // Dados do usuário
  const [moedas, setMoedas] = useState(0);
  const [moedasDiaKick, setMoedasDiaKick] = useState(0);
  const [acervoIds, setAcervoIds] = useState<string[]>([]);
  const [times, setTimes] = useState<Team[]>([]);
  const [desafios, setDesafios] = useState<Challenge[]>([]);

  // Status da Kick
  const [liveStatus, setLiveStatus] = useState<Record<string, boolean>>({});

  const USUARIO_ID = 'user-fixo';
  const { showToast, ToastContainer } = useToast();

  // ADMIN_TOKEN (use o mesmo do .env)
  const ADMIN_TOKEN = 'meu_token_admin_secreto';

  // ===================================================
  // VERIFICAR STATUS DA KICK
  // ===================================================

  const checkKickLives = async (playersList: Player[]) => {
    const playersWithChannel = playersList.filter((player) => player.kickChannel?.trim());
    if (playersWithChannel.length === 0) {
      setLiveStatus({});
      return;
    }

    const statusMap: Record<string, boolean> = {};
    await Promise.all(
      playersWithChannel.map(async (player) => {
        try {
          const channel = player.kickChannel!.trim();
          const response = await fetch(`/.netlify/functions/getKickStatus?channel=${encodeURIComponent(channel)}`);
          if (!response.ok) {
            statusMap[player.id] = false;
            return;
          }
          const data = await response.json();
          statusMap[player.id] = Boolean(data?.isLive);
        } catch (error) {
          console.error(`Erro ao verificar Kick de ${player.name}:`, error);
          statusMap[player.id] = false;
        }
      })
    );
    setLiveStatus((prev) => ({ ...prev, ...statusMap }));
  };

  // ===================================================
  // CARREGAR PLAYERS (do banco Neon, via API)
  // ===================================================

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const response = await fetch('/.netlify/functions/getPlayers');
        if (!response.ok) throw new Error('Erro ao carregar players');
        const data = await response.json();
        if (Array.isArray(data)) {
          setPlayers(data);
          await checkKickLives(data);
        } else {
          setPlayers([]);
        }
      } catch (error) {
        console.error('Erro ao carregar players:', error);
        setPlayers([]);
        showToast('Erro ao carregar jogadores', 'error');
      } finally {
        setLoading(false);
      }
    };
    loadPlayers();
  }, []);

  // Atualizar status da Kick a cada 2 minutos
  useEffect(() => {
    if (players.length === 0) return;
    const interval = setInterval(() => {
      checkKickLives(players);
    }, 120000);
    return () => clearInterval(interval);
  }, [players]);

  // ===================================================
  // CARREGAR DADOS DO USUÁRIO
  // ===================================================

  const loadUserData = async () => {
    try {
      const response = await fetch(`/.netlify/functions/getUser?usuario_id=${USUARIO_ID}`);
      if (response.ok) {
        const user = await response.json();
        setMoedas(user.moedas || 0);
        setMoedasDiaKick(user.moedas_dia_kick || 0);
      }
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
    }

    try {
      const response = await fetch(`/.netlify/functions/getAcervo?usuario_id=${USUARIO_ID}`);
      if (response.ok) {
        const acervo = await response.json();
        setAcervoIds(acervo.map((item: any) => item.player_id));
      }
    } catch (error) {
      console.error('Erro ao carregar acervo:', error);
    }

    try {
      const response = await fetch(`/.netlify/functions/getMeusTimes?usuario_id=${USUARIO_ID}`);
      if (response.ok) {
        const timesData = await response.json();
        setTimes(timesData);
      }
    } catch (error) {
      console.error('Erro ao carregar times:', error);
    }

    try {
      const response = await fetch(`/.netlify/functions/getDesafios?usuario_id=${USUARIO_ID}`);
      if (response.ok) {
        const desafiosData = await response.json();
        setDesafios(desafiosData);
      }
    } catch (error) {
      console.error('Erro ao carregar desafios:', error);
    }
  };

  useEffect(() => {
    if (!loading) loadUserData();
  }, [loading]);

  const refreshUserData = () => loadUserData();

  // ===================================================
  // FUNÇÕES DE CRUD USANDO /adminPlayers
  // ===================================================

  // ADICIONAR (POST)
  const handleAddPlayer = async (player: Player) => {
    try {
      const response = await fetch('/.netlify/functions/adminPlayers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify(player),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao adicionar player');
      }
      const data = await response.json();
      // Recarregar a lista de players para pegar o novo
      const updatedResponse = await fetch('/.netlify/functions/getPlayers');
      if (updatedResponse.ok) {
        const updatedPlayers = await updatedResponse.json();
        setPlayers(updatedPlayers);
        await checkKickLives(updatedPlayers);
      }
      showToast('✅ Player adicionado!', 'success');
    } catch (error) {
      console.error('Erro ao adicionar player:', error);
      showToast(`❌ ${(error as Error).message}`, 'error');
    }
  };

  // EDITAR (PUT)
  const handleSavePlayer = async (updated: Player) => {
    try {
      const response = await fetch('/.netlify/functions/adminPlayers', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify(updated),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao salvar player');
      }
      // Atualiza localmente
      setPlayers((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      setEditingPlayer(null);
      setSelectedPlayer(updated);
      // Verifica Kick
      if (updated.kickChannel?.trim()) {
        await checkKickLives([updated]);
      } else {
        setLiveStatus((prev) => ({ ...prev, [updated.id]: false }));
      }
      showToast('✅ Player atualizado!', 'success');
    } catch (error) {
      console.error('Erro ao salvar player:', error);
      showToast(`❌ ${(error as Error).message}`, 'error');
    }
  };

  // DELETAR (DELETE)
  const handleDeletePlayer = async (id: string) => {
    if (!confirm('Excluir player?')) return;
    try {
      const response = await fetch('/.netlify/functions/adminPlayers', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao excluir player');
      }
      setPlayers((prev) => prev.filter((p) => p.id !== id));
      setLiveStatus((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
      setSelectedPlayer(null);
      showToast('🗑️ Player excluído!', 'success');
    } catch (error) {
      console.error('Erro ao excluir player:', error);
      showToast(`❌ ${(error as Error).message}`, 'error');
    }
  };

  // ===================================================
  // COMPRAR PLAYER
  // ===================================================

  const handleCompra = async (preco: number, playerId: string) => {
    if (moedas < preco) {
      showToast('Saldo insuficiente!', 'error');
      return;
    }
    if (acervoIds.includes(playerId)) {
      showToast('Você já possui este player.', 'info');
      return;
    }
    try {
      const response = await fetch('/.netlify/functions/comprarPlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_id: playerId }),
      });
      const data = await response.json();
      if (response.ok) {
        setMoedas((prev) => prev - preco);
        setAcervoIds((prev) => [...prev, playerId]);
        showToast(`✅ Compra realizada! -${preco} 🪙`, 'success');
      } else {
        showToast(`❌ ${data.error || 'Erro na compra'}`, 'error');
      }
    } catch (error) {
      showToast('❌ Erro de rede. Tente novamente.', 'error');
    }
  };

  // VENDER PLAYER
  const handleVenda = async (playerId: string, valorRecebido: number) => {
    try {
      const response = await fetch('/.netlify/functions/venderPlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_id: playerId }),
      });
      const data = await response.json();
      if (response.ok) {
        setAcervoIds((prev) => prev.filter((id) => id !== playerId));
        setMoedas((prev) => prev + valorRecebido);
        showToast(`✅ Venda realizada! +${valorRecebido} 🪙`, 'success');
      } else {
        if (data.error?.includes('remova-o antes de vender')) {
          showToast('❌ Este player está em um time. Remova-o antes de vender.', 'error');
        } else {
          showToast(`❌ ${data.error || 'Erro na venda'}`, 'error');
        }
      }
    } catch (error) {
      showToast('❌ Erro de rede. Tente novamente.', 'error');
    }
  };

  // ===================================================
  // FUNÇÕES DE TIMES
  // ===================================================

  const handleCriarTime = async (nome: string, escudo: string, jogadores: string[]) => {
    if (times.length >= 1) {
      showToast('Você já tem um time. Apenas 1 time por usuário.', 'error');
      return;
    }
    try {
      const response = await fetch('/.netlify/functions/criarTime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, escudo, jogadores }),
      });
      const data = await response.json();
      if (response.ok) {
        const novoTime: Team = {
          id: Date.now().toString(),
          nome,
          escudo: escudo || 'default-shield.png',
          dono_id: USUARIO_ID,
          jogadores,
          elo: 1200,
          vitorias: 0,
          derrotas: 0,
          data_criacao: new Date().toISOString(),
        };
        setTimes((prev) => [...prev, novoTime]);
        showToast(`✅ Time "${nome}" criado com sucesso!`, 'success');
      } else {
        showToast(`❌ ${data.error || 'Erro ao criar time'}`, 'error');
      }
    } catch (error) {
      showToast('❌ Erro de rede. Tente novamente.', 'error');
    }
  };

  const handleEditarTime = async (id: string, nome: string, escudo: string, jogadores: string[]) => {
    try {
      const response = await fetch('/.netlify/functions/editarTime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, escudo, jogadores }),
      });
      const data = await response.json();
      if (response.ok) {
        setTimes((prev) => prev.map((team) => (team.id === id ? { ...team, nome, escudo, jogadores } : team)));
        showToast(`✅ Time "${nome}" atualizado!`, 'success');
      } else {
        showToast(`❌ ${data.error || 'Erro ao editar time'}`, 'error');
      }
    } catch (error) {
      showToast('❌ Erro de rede. Tente novamente.', 'error');
    }
  };

  const handleDeletarTime = async (teamId: string) => {
    try {
      const response = await fetch('/.netlify/functions/editarTime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: teamId, delete: true }),
      });
      const data = await response.json();
      if (response.ok) {
        setTimes((prev) => prev.filter((team) => team.id !== teamId));
        showToast('🗑️ Time deletado com sucesso!', 'success');
      } else {
        showToast(`❌ ${data.error || 'Erro ao deletar time'}`, 'error');
      }
    } catch (error) {
      showToast('❌ Erro de rede. Tente novamente.', 'error');
    }
  };

  // ===================================================
  // PESQUISA
  // ===================================================

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) setActiveSection('players');
  };

  // ===================================================
  // PLAYER CLICK
  // ===================================================

  const handlePlayerClick = (player: Player) => setSelectedPlayer(player);
  const handleCloseModal = () => setSelectedPlayer(null);

  // ===================================================
  // LOGIN ADMIN
  // ===================================================

  const handleAdminLogin = () => {
    const password = prompt('Senha admin');
    if (password === 'franca1234') {
      setIsAdmin(true);
      showToast('🔓 Modo admin ativado', 'success');
    } else {
      setIsAdmin(false);
      showToast('❌ Senha errada', 'error');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setEditingPlayer(null);
    showToast('🔒 Modo admin desativado', 'info');
  };

  // ===================================================
  // RENDER CONTENT
  // ===================================================

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center mt-40">
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-6 border border-white/20 border-t-white/80 rounded-full animate-spin" />
            <span className="text-white/30 text-xs tracking-widest uppercase">Carregando</span>
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'players':
        return <PlayersPage players={players} onPlayerClick={handlePlayerClick} searchQuery={searchQuery} liveStatus={liveStatus} />;
      case 'home':
        return <HomePage players={players} onPlayerClick={handlePlayerClick} liveStatus={liveStatus} />;
      case 'rankings':
        return <RankingsPage players={players} onPlayerClick={handlePlayerClick} />;
      case 'admin':
        return isAdmin ? <AdminPanel onAddPlayer={handleAddPlayer} /> : <div className="text-center text-white/20 mt-20">Acesso negado</div>;
      case 'times':
        return (
          <TimesPage
            teams={times}
            players={players}
            acervoIds={acervoIds}
            onRefresh={refreshUserData}
            onCriarTime={handleCriarTime}
            onEditarTime={handleEditarTime}
            onDeletarTime={handleDeletarTime}
          />
        );
      case 'loja':
        return <LojaPage players={players} acervoIds={acervoIds} moedas={moedas} onCompra={handleCompra} />;
      case 'acervo':
        return <AcervoPage players={players} acervoIds={acervoIds} onVender={handleVenda} />;
      case 'desafios':
        return <DesafiosPage challenges={desafios} teams={times} players={players} onRefresh={refreshUserData} />;
      case 'ranking-times':
        return <RankingTimesPage teams={times} />;
      case 'kick':
        return <KickPage moedasDiaKick={moedasDiaKick} onPing={() => setMoedasDiaKick((prev) => Math.min(prev + 10, 500))} />;
      default:
        return <HomePage players={players} onPlayerClick={handlePlayerClick} liveStatus={liveStatus} />;
    }
  };

  // ===================================================
  // JSX
  // ===================================================

  return (
    <div className="min-h-screen select-none relative" style={{ background: '#080808' }}>
      <BackgroundCanvas />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)', zIndex: 1 }} />

      <div className="relative" style={{ zIndex: 2 }}>
        <Header
          onSearch={handleSearch}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          moedas={moedas}
        />

        <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-up">
          {renderContent()}
        </main>

        <div className="fixed bottom-6 right-6 z-50">
          {!isAdmin ? (
            <button
              onClick={handleAdminLogin}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Admin
            </button>
          ) : (
            <button
              onClick={handleAdminLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-200"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.6)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Sair
            </button>
          )}
        </div>
      </div>

      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={handleCloseModal}
          onEdit={setEditingPlayer}
          onDelete={handleDeletePlayer}
          isAdmin={isAdmin}
          isLive={liveStatus[selectedPlayer.id] || false}
        />
      )}

      {editingPlayer && (
        <EditPlayerModal
          player={editingPlayer}
          onClose={() => setEditingPlayer(null)}
          onSave={handleSavePlayer}
        />
      )}

      <ToastContainer />
    </div>
  );
}