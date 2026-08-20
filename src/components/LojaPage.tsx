import React, { useState } from 'react';
import { Player } from '../types';
import {
  ShoppingCart,
  Search,
  Coins,
} from 'lucide-react';

interface LojaPageProps {
  players: Player[];
  acervoIds: string[];
  moedas: number;

  // Primeiro PREÇO
  // Depois PLAYER ID
  onCompra: (
    preco: number,
    playerId: string
  ) => void;
}

export default function LojaPage({
  players,
  acervoIds,
  moedas,
  onCompra,
}: LojaPageProps) {
  const [search, setSearch] = useState('');

  const [filterRole, setFilterRole] = useState<
    'all' | 'PVP' | 'P1'
  >('all');

  const [sortBy, setSortBy] = useState<
    'preco' | 'poder'
  >('preco');

  const getPlayerData = (player: Player) => {
    const kills = player.stats?.kills || 0;

    const deaths =
      player.stats?.deaths || 0;

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

    const preco = Math.round(
      100 + (poder / 100) * 400
    );

    return {
      poder,
      preco,
    };
  };

  const filtered = players
    .filter((player) => {
      const matchName = player.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchRole =
        filterRole === 'all' ||
        player.role === filterRole;

      return matchName && matchRole;
    })
    .map((player) => ({
      ...player,
      ...getPlayerData(player),
    }));

  const sorted = [...filtered].sort(
    (a, b) => {
      if (sortBy === 'preco') {
        return a.preco - b.preco;
      }

      return b.poder - a.poder;
    }
  );

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <ShoppingCart className="w-5 h-5 text-purple-400" />
        </div>

        <h2 className="text-xl font-black text-white">
          Loja de Players
        </h2>

        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />

        <div className="flex items-center gap-2 text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20 text-sm">
          <Coins className="w-4 h-4" />

          <span className="font-bold">
            {moedas}
          </span>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3">
        {/* Busca */}
        <div className="flex-1 min-w-[180px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Buscar player..."
              className="w-full pl-9 pr-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Função */}
        <select
          value={filterRole}
          onChange={(event) =>
            setFilterRole(
              event.target.value as
                | 'all'
                | 'PVP'
                | 'P1'
            )
          }
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:border-purple-500/50 outline-none"
        >
          <option value="all">
            Todas funções
          </option>

          <option value="PVP">
            PVP
          </option>

          <option value="P1">
            P1
          </option>
        </select>

        {/* Ordenação */}
        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(
              event.target.value as
                | 'preco'
                | 'poder'
            )
          }
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:border-purple-500/50 outline-none"
        >
          <option value="preco">
            Ordenar por Preço
          </option>

          <option value="poder">
            Ordenar por Poder
          </option>
        </select>
      </div>

      {/* Lista */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {sorted.map((player) => {
          const jaPossui = acervoIds.includes(
            player.id
          );

          const saldoInsuficiente =
            moedas < player.preco;

          return (
            <div
              key={player.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:-translate-y-0.5"
            >
              {/* Imagem */}
              <div className="relative aspect-square w-full">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-full h-full object-cover rounded-lg border border-white/5 group-hover:border-purple-500/30 transition-all"
                  loading="lazy"
                />

                {/* Poder */}
                <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-sm rounded-full px-1.5 py-0.5 text-[10px] text-yellow-400 border border-yellow-500/20">
                  ⚡
                  {Math.round(player.poder)}
                </div>
              </div>

              {/* Nome */}
              <h4 className="text-white font-bold text-sm truncate mt-2">
                {player.name}
              </h4>

              {/* Função */}
              <p className="text-[11px] text-gray-400">
                Função: {player.role}
              </p>

              {/* Compra */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-400 text-xs font-semibold">
                  {player.preco} 🪙
                </span>

                {jaPossui ? (
                  <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                    ✅ Possui
                  </span>
                ) : (
                  <button
                    onClick={() =>
                      onCompra(
                        player.preco,
                        player.id
                      )
                    }
                    className="px-3 py-1 bg-purple-600 rounded-lg text-white text-xs hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={saldoInsuficiente}
                  >
                    Comprar
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}