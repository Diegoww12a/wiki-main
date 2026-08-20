import React from 'react';
import { Player } from '../types';
import { Archive } from 'lucide-react';

interface AcervoPageProps {
  players: Player[];
  acervoIds: string[];
  onVender: (playerId: string, valorRecebido: number) => void;
}

export default function AcervoPage({
  players,
  acervoIds,
  onVender,
}: AcervoPageProps) {
  const acervoPlayers = players.filter((player) =>
    acervoIds.includes(player.id)
  );

  const handleSell = (player: Player) => {
    const kills = player.stats?.kills || 0;
    const deaths = player.stats?.deaths || 0;

    const kd =
      deaths > 0
        ? kills / deaths
        : kills;

    const poderBruto =
      kills * 2 +
      (player.stats?.missions || 0) -
      deaths * 0.8 +
      kd * 5;

    const poder = Math.min(
      100,
      Math.max(0, poderBruto / 2)
    );

    const precoPago = Math.round(
      100 + (poder / 100) * 400
    );

    const valorRecebido = Math.round(
      precoPago * 0.7
    );

    const confirmar = confirm(
      `Vender ${player.name} por ${valorRecebido} 🪙?`
    );

    if (!confirmar) {
      return;
    }

    onVender(
      player.id,
      valorRecebido
    );
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Archive className="w-5 h-5 text-purple-400" />
        </div>

        <h2 className="text-xl font-black text-white">
          Meu Time
        </h2>

        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />

        <span className="text-gray-400 text-xs bg-white/5 px-3 py-1 rounded-full">
          {acervoPlayers.length} / 50
        </span>
      </div>

      {/* Acervo vazio */}
      {acervoPlayers.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Seu acervo está vazio. Compre players na loja!
        </div>
      ) : (
        /* Players */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {acervoPlayers.map((player) => (
            <div
              key={player.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:-translate-y-0.5"
            >
              <div className="aspect-square w-full">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-full h-full object-cover rounded-lg border border-white/5 group-hover:border-purple-500/30 transition-all"
                  loading="lazy"
                />
              </div>

              <h4 className="text-white font-bold text-sm truncate mt-2">
                {player.name}
              </h4>

              <button
                onClick={() => handleSell(player)}
                className="w-full mt-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-xs hover:bg-red-500/30 transition"
              >
                Vender (70%)
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}