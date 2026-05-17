import { useState } from 'react';
import { Player } from '../types';

interface Props {
  onAddPlayer: (player: Player) => void;
}

export default function AdminPanel({ onAddPlayer }: Props) {

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [notification, setNotification] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setAvatar(reader.result as string);
  };
  reader.readAsDataURL(file);
};

  const addPlayer = () => {
    if (!name || !avatar) {
      alert('Preencha nome e imagem');
      return;
    }

    const newPlayer: Player = {
      id: Date.now().toString(),
      name,
      avatar,
      faction: 'FRANÇA',
      role: 'PVP',
      server: 'METROPOLE',
      status: 'online',
      level: 0,
      reputation: 0,
      joinDate: new Date().toISOString().split('T')[0],
      stats: {
        kills: 0,
        deaths: 0,
        playtime: '0',
        missions: 0
      }
    };

    onAddPlayer(newPlayer);
    setName('');
    setAvatar('');
    setNotification('Player adicionado com sucesso!');

    setTimeout(() => {''
      setNotification('');
    }, 2500);
  };

  return (
    <div className="max-w-5xl  mx-auto rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#0f0f13] via-[#13131a] to-[#0b0b10] shadow-2xl">

      {/* HEADER */}
      <div className="px-8 py-6 bg-[#141419]  border-b border-white/5 flex justify-between items-center">
        <div className='flex items-center gap-3'>
          <div className='border border-[#442962] text-xl p-2 rounded-xl bg-[#2c1f3b]'>
            ⚡
          </div>
          <div className='text-white'>
            <h2 className='text-xl font-bold'>Painel Admin</h2>
            <p className='text-[#6b7080] text-sm'>Criar e gerenciar players</p>
          </div>
        </div>

        <div className="py-1.5 px-3 border-[#452963] rounded-2xl bg-purple-500/10 flex items-center justify-center text-xl">
          <p className='text-sm text-[#805aa7]'>Admin</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6">

          {/* NAME */}
          <div>
            <label className="text-xs font-semibold uppercase  text-gray-400 mb-2 block">
              Nome do Player
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome..."
              className="w-full bg-[#17171d] placeholder:text-[#4b5563] border text-sm  border-gray-700 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none"
            />
          </div>

          {/* UPLOAD — correção aplicada aqui */}
          <div>
            <label className="text-xs font-semibold uppercase text-gray-400 mb-2 block">
              Avatar
            </label>

            <label className="flex items-center  justify-center w-full h-44 border-2 border-dashed border-[#2d2d32] rounded-2xl bg-[#18181f] cursor-pointer hover:border-purple-400 hover:bg-purple-500/5 transition">

              <div className="text-center flex flex-col text-[#4b5464] pointer-events-none"> {/* 👈 fix */}
                <div className="text-3xl mb-2">📤</div>
                <p>Clique para enviar avatar</p>
                <p className='text-sm text-[#374049]'>PNG, JPG até 5MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden "
              />

            </label>
          </div>

          {/* NOTIFICATION */}
          {notification && (
            <div className="fixed top-6 right-6 z-[999] bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-3 rounded-2xl shadow-lg backdrop-blur-md animate-pulse">
              {notification}
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={addPlayer}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-2xl font-semibold text-white hover:scale-[1.02] transition"
          >
            + Adicionar Player
          </button>

        </div>

        {/* RIGHT — PREVIEW */}
        <div className="flex items-center justify-center bg-[#18181f] border border-gray-800 rounded-3xl p-8">

          {avatar || name ? (
            <div className="text-center">

              <img
                src={avatar || ''}
                className="w-52 h-52  rounded-full object-cover border-4 border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.35)] mx-auto"
              />

              <p className="text-white font-bold mt-4 text-lg">
                {name || 'Sem nome'}
              </p>

              <p className="text-gray-400 text-sm">
                Preview do player
              </p>

            </div>
          ) : (
            <div className="text-center text-[#384053]">
              <div className="border w-16 h-16 text-2xl mb-2  mx-auto flex items-center justify-center rounded-full bg-[#1d1b23] border-[#26252d]">👤</div>
              Sem preview
            </div>
          )}

        </div>

      </div>
    </div>
  );
}