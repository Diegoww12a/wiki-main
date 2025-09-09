import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
import FactionsPage from './components/FactionsPage';
import WarsPage from './components/WarsPage';
import RankingsPage from './components/RankingsPage';
import PlayerModal from './components/PlayerModal';
import FactionModal from './components/FactionModal';
import WarModal from './components/WarModal';
import { Player, Faction, War } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [selectedWar, setSelectedWar] = useState<War | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveSection('players');
    }
  };

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleFactionClick = (faction: Faction) => {
    setSelectedFaction(faction);
  };

  const handleWarClick = (war: War) => {
    setSelectedWar(war);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
    setSelectedFaction(null);
    setSelectedWar(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'players':
        return <PlayersPage onPlayerClick={handlePlayerClick} searchQuery={searchQuery} />;
      case 'factions':
        return <FactionsPage onFactionClick={handleFactionClick} searchQuery={searchQuery} />;
      case 'wars':
        return <WarsPage onWarClick={handleWarClick} searchQuery={searchQuery} />;
      case 'rankings':
        return <RankingsPage onPlayerClick={handlePlayerClick} />;
      default:
        return <HomePage onPlayerClick={handlePlayerClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
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

        {selectedFaction && (
          <FactionModal faction={selectedFaction} onClose={handleCloseModal} />
        )}

        {selectedWar && (
          <WarModal war={selectedWar} onClose={handleCloseModal} />
        )}

        <footer className="border-t border-gray-700/50 mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2025 FiveM Wiki. Feito pela comunidade, para a comunidade.</p>
             <div className="mt-4">
              {/* eu quero meu privado do discord */}
                <span className="text-blue-300 hover:underline cursor-pointer">Me chame no Discord:  ghost_xxz</span>   

            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}