import { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
import RankingsPage from './components/RankingsPage';
import AdminPanel from './components/AdminPanel';
import PlayerModal from './components/PlayerModal';
import EditPlayerModal from './components/EditPlayerModal';

import { Player } from './types';
import { mockPlayers } from './data/mockData';

function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
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

      for (let row = 0; row <= ROWS; row++) {
        ctx.beginPath();
        for (let col = 0; col <= COLS; col++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + (t * 40) % spacingZ;
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp
                           + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.35, 0.35 - wz / (offsetZ * 3)));
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          if (col === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      for (let col = 0; col <= COLS; col++) {
        ctx.beginPath();
        for (let row = 0; row <= ROWS; row++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + (t * 40) % spacingZ;
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp
                           + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.2, 0.2 - wz / (offsetZ * 3)));
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          if (row === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      for (let col = 0; col <= COLS; col++) {
        for (let row = 0; row <= ROWS; row++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + (t * 40) % spacingZ;
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp
                           + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
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
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/.netlify/functions/getPlayers')
      .then(r => r.json())
      .then(async (data) => {
        if (data.length > 0) {
          setPlayers(data);
        } else {
          setPlayers(mockPlayers);
          await Promise.all(
            mockPlayers.map(player =>
              fetch('/.netlify/functions/savePlayer', {
                method: 'POST',
                body: JSON.stringify(player),
              })
            )
          );
        }
      })
      .catch(() => setPlayers(mockPlayers))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) setActiveSection('players');
  };

  const handlePlayerClick = (player: Player) => setSelectedPlayer(player);
  const handleCloseModal = () => setSelectedPlayer(null);

  const handleSavePlayer = async (updated: Player) => {
    await fetch('/.netlify/functions/savePlayer', {
      method: 'POST',
      body: JSON.stringify(updated),
    });
    setPlayers(prev => prev.map(p => p.id === updated.id ? updated : p));
    setEditingPlayer(null);
    setSelectedPlayer(updated);
  };

  const handleDeletePlayer = async (id: string) => {
    const ok = confirm('Excluir player?');
    if (!ok) return;
    await fetch('/.netlify/functions/deletePlayer', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });
    setPlayers(prev => prev.filter(p => p.id !== id));
    setSelectedPlayer(null);
  };

  const handleAddPlayer = async (player: Player) => {
    await fetch('/.netlify/functions/savePlayer', {
      method: 'POST',
      body: JSON.stringify(player),
    });
    setPlayers(prev => [...prev, player]);
  };

  const handleAdminLogin = () => {
    const password = prompt('Senha admin');
    if (!password) return;
    if (password === 'franca1234') {
      setIsAdmin(true);
      alert('Modo admin ativado');
    } else {
      setIsAdmin(false);
      alert('Senha errada');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setEditingPlayer(null);
  };

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
        return (
          <PlayersPage
            players={players}
            onPlayerClick={handlePlayerClick}
            searchQuery={searchQuery}
          />
        );
      case 'rankings':
        return (
          <RankingsPage
            players={players}
            onPlayerClick={handlePlayerClick}
          />
        );
      case 'admin':
        return isAdmin ? (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <AdminPanel onAddPlayer={handleAddPlayer} />
          </div>
        ) : (
          <div className="text-center text-white/20 mt-20 text-sm tracking-widest uppercase">
            Acesso negado
          </div>
        );
      default:
        return (
          <HomePage
            players={players}
            onPlayerClick={handlePlayerClick}
          />
        );
    }
  };

  return (
    <div
      className="min-h-screen select-none relative"
      style={{ background: '#080808' }}
    >
      <BackgroundCanvas />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      <div className="relative" style={{ zIndex: 2 }}>
        <Header
          onSearch={handleSearch}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main className="max-w-7xl mx-auto px-4 py-8">
          {renderContent()}
        </main>

        <div className="fixed bottom-6 right-6 z-50">
          {!isAdmin ? (
            <button
              onClick={handleAdminLogin}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.3)';
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Admin
            </button>
          ) : (
            <button
              onClick={handleAdminLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-200"
              style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
                color: 'rgba(239,68,68,0.6)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.15)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(239,68,68,0.9)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.08)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(239,68,68,0.6)';
              }}
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
  />
)}

      {editingPlayer && (
        <EditPlayerModal
          player={editingPlayer}
          onClose={() => setEditingPlayer(null)}
          onSave={handleSavePlayer}
        />
      )}
    </div>
  );
}