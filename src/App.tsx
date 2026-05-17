import { useState, useEffect } from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
import RankingsPage from './components/RankingsPage';
import AdminPanel from './components/AdminPanel';
import PlayerModal from './components/PlayerModal';
import EditPlayerModal from './components/EditPlayerModal';

import { Player } from './types';
import { mockPlayers } from './data/mockData';

export default function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 BUSCA DO BANCO AO INICIAR
  useEffect(() => {
  fetch('/.netlify/functions/getPlayers')
    .then(r => r.json())
    .then(async (data) => {
      if (data.length > 0) {
        setPlayers(data);
      } else {
        // Banco vazio — popula com mockPlayers
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

    if (password === '1234') {
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
          <div className="text-gray-400 text-sm animate-pulse">Carregando players...</div>
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
          <div className="text-center text-gray-400 mt-20">
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
      className="min-h-screen select-none relative overflow-hidden"
      style={{
        background: "#000000",
        backgroundImage: `
          linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 pointer-events-none rounded-full bg-white animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 12}s`,
          }}
        />
      ))}

      <Header
        onSearch={handleSearch}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="max-w-7xl mx-auto px-4 pt-6">
        {!isAdmin ? (
          <button
            onClick={handleAdminLogin}
            className="fixed bottom-5 right-5 text-white uppercase text-xs font-medium bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full shadow-lg z-50"
          >
            Entrar Admin
          </button>
        ) : (
          <button
            onClick={handleAdminLogout}
            className="fixed bottom-5 right-5 text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full shadow-lg z-50"
          >
            Sair Admin
          </button>
        )}
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={handleCloseModal}
          onEdit={isAdmin ? setEditingPlayer : undefined}
          onDelete={isAdmin ? handleDeletePlayer : undefined}
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