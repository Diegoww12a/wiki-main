// ===== src/components/SaldoWidget.tsx =====
import React from 'react';
import { Coins } from 'lucide-react';

interface SaldoWidgetProps {
  moedas: number;
  onClick?: () => void;
}

export default function SaldoWidget({ moedas, onClick }: SaldoWidgetProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 text-yellow-400 hover:from-yellow-500/20 hover:to-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300"
    >
      <Coins className="w-4 h-4" />
      <span className="font-bold text-sm">{moedas.toLocaleString()}</span>
    </button>
  );
}