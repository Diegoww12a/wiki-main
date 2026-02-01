import { useState } from 'react';
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
  // const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  // const [selectedWar, setSelectedWar] = useState<War | null>(null);

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
    // setSelectedFaction(null);
    // setSelectedWar(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'players':
        return <PlayersPage onPlayerClick={handlePlayerClick} searchQuery={searchQuery} />;
      // case 'factions':
      // case 'wars':
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
        <p>&copy; 2025 FrançaRp. Feito pela comunidade, para a comunidade. Feito por Snowfps_x</p>
      </div>
    </footer>
  </div>
</div>
  );
}