import { useState } from 'react';
import { mockPlayers } from '../data/mockData';
import { X, Save, RotateCcw, Skull, Target, Crosshair, Flag, Shield, Users } from 'lucide-react';
import { Player } from '../types';

interface EditPlayerModalProps {
  player: Player;
  onClose: () => void;
  onSave: (updatedPlayer: Player) => void;
}

export default function EditPlayerModal({ player, onClose, onSave }: EditPlayerModalProps) {
  const [form, setForm] = useState({
    kills:    player.stats.kills,
    deaths:   player.stats.deaths,
    missions: player.stats.missions,
    playtime: player.stats.playtime,
    status:   player.status,
    role:     player.role,
    faction:  player.faction,
    server:   player.server,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: string | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    const updated: Player = {
      ...player,
      status:  form.status as Player['status'],
      role:    form.role,
      faction: form.faction,
      server:  form.server,
      stats: {
        ...player.stats,
        kills:    Number(form.kills),
        deaths:   Number(form.deaths),
        missions: Number(form.missions),
        playtime: form.playtime,
      },
    };
    onSave(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

 const handleReset = () => {

  const resetPlayer: Player = {

    ...player,

    faction: '',
    role: '',
    server: '',
    status: 'offline',

    stats: {
      kills: 0,
      deaths: 0,
      missions: 0,
      playtime: '0',
    }

  };

  setForm({
    kills: 0,
    deaths: 0,
    missions: 0,
    playtime: '0',
    status: 'offline',
    role: '',
    faction: '',
    server: '',
  });

  onSave(resetPlayer);

  setSaved(false);

};

  const kd = Number(form.kills) / Math.max(Number(form.deaths), 1);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/10">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <img
              src={player.avatar}
              alt={player.name}
              className="w-10 h-10 rounded-lg object-cover border border-purple-500/50"
            />
            <div>
              <h2 className="text-white font-semibold text-base">{player.name}</h2>
              <p className="text-gray-400 text-xs">Editar estatísticas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">

          {/* Stats numéricos */}
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Estatísticas de combate</p>
            <div className="grid grid-cols-2 gap-3">

              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Crosshair className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-xs font-medium">Kills</span>
                </div>
                <input
                  type="number"
                  min={0}
                  value={form.kills}
                  onChange={e => handleChange('kills', e.target.value)}
                  className="w-full bg-transparent text-white text-2xl font-bold focus:outline-none focus:text-green-400 transition-colors"
                />
              </div>

              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Skull className="w-4 h-4 text-red-400" />
                  <span className="text-red-300 text-xs font-medium">Deaths</span>
                </div>
                <input
                  type="number"
                  min={0}
                  value={form.deaths}
                  onChange={e => handleChange('deaths', e.target.value)}
                  className="w-full bg-transparent text-white text-2xl font-bold focus:outline-none focus:text-red-400 transition-colors"
                />
              </div>

              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Flag className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 text-xs font-medium">Ações (missões)</span>
                </div>
                <input
                  type="number"
                  min={0}
                  value={form.missions}
                  onChange={e => handleChange('missions', e.target.value)}
                  className="w-full bg-transparent text-white text-2xl font-bold focus:outline-none focus:text-cyan-400 transition-colors"
                />
              </div>

              {/* K/D calculado automaticamente */}
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-xs font-medium">K/D (auto)</span>
                </div>
                <p className="text-white text-2xl font-bold">{kd.toFixed(2)}</p>
              </div>

            </div>
          </div>

          {/* Playtime */}
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Tempo de jogo</p>
            <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 flex items-center gap-3">
              <input
                type="text"
                value={form.playtime}
                onChange={e => handleChange('playtime', e.target.value)}
                placeholder="ex: 42h30m"
                className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-gray-600"
              />
              <span className="text-gray-500 text-xs">horas</span>
            </div>
          </div>

          {/* Status + Role */}
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Status e função</p>
            <div className="grid grid-cols-2 gap-3">

              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <p className="text-gray-400 text-xs mb-2">Status</p>
                <div className="flex gap-2">
                  {['online', 'offline'].map(s => (
                    <button
                      key={s}
                      onClick={() => handleChange('status', s)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        form.status === s
                          ? s === 'online'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                            : 'bg-gray-500/20 text-gray-300 border border-gray-500/40'
                          : 'text-gray-600 border border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <p className="text-gray-400 text-xs mb-2">Role</p>
                <div className="flex flex-col gap-1.5">
                  {['PVP', 'PVP + P1', 'P1'].map(r => (
                    <button
                      key={r}
                      onClick={() => handleChange('role', r)}
                      className={`py-1 rounded-lg text-xs font-medium transition-all ${
                        form.role === r
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                          : 'text-gray-600 border border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Facção e Servidor */}
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Facção e servidor</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-xs">Facção</span>
                </div>
                <input
                  type="text"
                  value={form.faction}
                  onChange={e => handleChange('faction', e.target.value)}
                  className="w-full bg-transparent text-white text-sm font-medium focus:outline-none"
                />
              </div>
              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 text-xs">Servidor</span>
                </div>
                <input
                  type="text"
                  value={form.server}
                  onChange={e => handleChange('server', e.target.value)}
                  className="w-full bg-transparent text-white text-sm font-medium focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-6 pb-6">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 text-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Resetar
          </button>
          <button
            onClick={handleSave}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${
              saved
                ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                : 'bg-purple-600 hover:bg-purple-500 text-white'
            }`}
          >
            <Save className="w-4 h-4" />
            {saved ? 'Salvo!' : 'Salvar alterações'}
          </button>
        </div>

      </div>
    </div>
  );
}