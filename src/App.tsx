import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
// import FactionsPage from './components/FactionsPage';
// import WarsPage from './components/WarsPage';
import RankingsPage from './components/RankingsPage';
import PlayerModal from './components/PlayerModal';
// import FactionModal from './components/FactionModal';
// import WarModal from './components/WarModal';
import { Player } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // ===== BANNER TIPO COOKIES (ADICIONADO) =====
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const closed = localStorage.setItem('clipBanner', 'true');
    if (closed) setShowBanner(false);
  }, []);

  const closeBanner = () => {
    localStorage.setItem('clipBanner', 'true');
    setShowBanner(false);
  };
  // ==========================================

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveSection('players');
    }
  };

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'players':
        return (
          <PlayersPage
            onPlayerClick={handlePlayerClick}
            searchQuery={searchQuery}
          />
        );
      case 'rankings':
        return <RankingsPage onPlayerClick={handlePlayerClick} />;
      default:
        return <HomePage onPlayerClick={handlePlayerClick} />;
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br select-none from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden"
      style={{
        background: "#000000",
        backgroundImage: `
          linear-gradient(to right, rgba(75, 85, 99, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(75, 85, 99, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      {/* Bolinhas caindo */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 12}s`,
          }}
        />
      ))}

      <div className="relative">
        <Header
          onSearch={handleSearch}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>

        {selectedPlayer && (
          <PlayerModal player={selectedPlayer} onClose={handleCloseModal} />
        )}

        <footer className="border-t border-gray-700/50 mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>
              &copy; 2025 FrançaRp. Feito pela comunidade, para a comunidade.
              Feito por Snowfps_x
            </p>

            <a
              href="https://discord.gg/PG8DBgX9"
              target="_blank"
              className="flex justify-center items-center gap-2 mt-4 hover:text-indigo-400 transition"
            >
              <i className="fa-brands fa-discord text-xl"></i>
              <span>Discord</span>
            </a>
          </div>
        </footer>
      </div>

      {/* ===== BANNER EM BAIXO TIPO COOKIES ===== */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 border-t border-gray-700 px-4 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-200">
            <p className="text-md text-center sm:text-left">
              Se quiser suas kills aqui, mandem os clips no Discord:
              <a
                href="https://discord.gg/PG8DBgX9"
                target="_blank"
                className="text-indigo-400 hover:underline ml-1"
              >
                discord.gg/PG8DBgX9
              </a>
            </p>

            <button
              onClick={closeBanner}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {/* ===================================== */}
    </div>
  );
}
