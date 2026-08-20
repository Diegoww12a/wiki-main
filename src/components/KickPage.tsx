// ===== src/components/KickPage.tsx =====
import React, { useState, useEffect } from 'react';
import { Play, Clock, Coins, AlertCircle } from 'lucide-react';

interface KickPageProps {
  moedasDiaKick: number;
  onPing: () => void;
}

export default function KickPage({ moedasDiaKick, onPing }: KickPageProps) {
  const [isWatching, setIsWatching] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [canPing, setCanPing] = useState(true);

  useEffect(() => {
    let interval: any;
    if (isWatching && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isWatching && timeLeft === 0 && canPing) {
      handlePing();
    }
    return () => clearInterval(interval);
  }, [isWatching, timeLeft]);

  const handleStart = () => {
    setIsWatching(true);
    setTimeLeft(300);
    setCanPing(true);
  };

  const handlePing = async () => {
    if (!canPing) return;
    setCanPing(false);
    try {
      const res = await fetch('/.netlify/functions/kickPing', { method: 'POST' });
      if (res.ok) {
        onPing();
        setTimeLeft(300);
        setTimeout(() => setCanPing(true), 45000);
      } else {
        alert('Erro ao registrar ping. Limite diário pode ter sido atingido.');
        setIsWatching(false);
      }
    } catch (e) {
      alert('Erro de rede. Tente novamente.');
      setIsWatching(false);
    }
  };

  const progress = Math.min(100, (moedasDiaKick / 500) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Play className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-2xl font-black text-white">Farm de Moedas via Kick</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
      </div>

      <div className="bg-[#0d0d12] border border-white/5 rounded-2xl p-6 space-y-6">
        <p className="text-gray-400 text-sm">
          Assista lives na Kick e ganhe <span className="text-yellow-400 font-bold">10 moedas</span> a cada 5 minutos.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-yellow-400 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
            <Coins className="w-5 h-5" />
            <span className="font-bold">{moedasDiaKick} / 500 🪙</span>
          </div>

          {isWatching ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="font-mono">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-gray-500">próximo ping</span>
            </div>
          ) : (
            <button
              onClick={handleStart}
              className="px-6 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition flex items-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.2)]"
            >
              <Play className="w-4 h-4" /> Estou Assistindo
            </button>
          )}
        </div>

        {moedasDiaKick >= 500 && (
          <div className="flex items-center gap-2 text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Limite diário de 500 moedas atingido!</span>
          </div>
        )}

        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}