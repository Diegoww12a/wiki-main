import { useState } from 'react';
import { Player } from '../types';
import {
  Twitch,
  Link as LinkIcon,
  Search,
  Upload,
  CheckCircle,
  Image as ImageIcon,
} from 'lucide-react';

interface Props {
  onAddPlayer: (player: Player) => void;
}

type AvatarMode = 'manual' | 'kick';

export default function AdminPanel({ onAddPlayer }: Props) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [kickChannel, setKickChannel] = useState('');

  const [avatarMode, setAvatarMode] = useState<AvatarMode>('manual');

  const [loadingKickAvatar, setLoadingKickAvatar] = useState(false);
  const [kickAvatarFound, setKickAvatarFound] = useState(false);

  const [notification, setNotification] = useState('');

  // =====================================================
  // UPLOAD MANUAL
  // =====================================================

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 5MB.');
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      // Imagens grandes são comprimidas
      if (file.size > 500 * 1024) {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) return;

          const size = 300;

          canvas.width = size;
          canvas.height = size;

          const aspect = img.width / img.height;

          let drawWidth = size;
          let drawHeight = size;

          let offsetX = 0;
          let offsetY = 0;

          if (aspect > 1) {
            drawHeight = size / aspect;
            offsetY = (size - drawHeight) / 2;
          } else {
            drawWidth = size * aspect;
            offsetX = (size - drawWidth) / 2;
          }

          ctx.drawImage(
            img,
            offsetX,
            offsetY,
            drawWidth,
            drawHeight
          );

          const compressed = canvas.toDataURL(
            'image/jpeg',
            0.8
          );

          setAvatar(compressed);
          setKickAvatarFound(false);
        };

        img.src = result;
      } else {
        setAvatar(result);
        setKickAvatarFound(false);
      }
    };

    reader.readAsDataURL(file);
  };

  // =====================================================
  // BUSCAR AVATAR DA KICK
  // =====================================================

  const buscarAvatarKick = async () => {
    const channel = kickChannel.trim();

    if (!channel) {
      alert('Digite o nome do canal da Kick.');
      return;
    }

    setLoadingKickAvatar(true);
    setKickAvatarFound(false);

    try {
      const response = await fetch(
        `/.netlify/functions/getKickStatus?channel=${encodeURIComponent(channel)}`
      );

      const data = await response.json();

      if (!response.ok || !data.avatar) {
        throw new Error(
          data?.error || 'Avatar não encontrado.'
        );
      }

      setAvatar(data.avatar);
      setKickAvatarFound(true);

      setNotification('✅ Avatar da KICK encontrado!');

      setTimeout(() => {
        setNotification('');
      }, 2500);
    } catch (error) {
      console.error(error);

      alert(
        'Não foi possível encontrar o avatar desse canal da KICK.'
      );
    } finally {
      setLoadingKickAvatar(false);
    }
  };

  // =====================================================
  // ADICIONAR PLAYER
  // =====================================================

  const addPlayer = () => {
    if (!name.trim()) {
      alert('Digite o nome do player.');
      return;
    }

    if (!avatar) {
      alert(
        avatarMode === 'kick'
          ? 'Busque o avatar da KICK primeiro.'
          : 'Envie uma imagem para o avatar.'
      );

      return;
    }

    const newPlayer: Player = {
      id: Date.now().toString(),

      name: name.trim(),

      avatar,

      faction: 'FRANÇA',

      role: 'PVP',

      server: 'COMPLEXO',

      // Mantido apenas por compatibilidade
      // com seu tipo/dados existentes.
      status: 'offline',

      level: 0,

      reputation: 0,

      joinDate: new Date()
        .toISOString()
        .split('T')[0],

      stats: {
        kills: 0,
        deaths: 0,
        playtime: '0',
        missions: 0,
      },

      kickChannel:
        kickChannel.trim() || undefined,

      // Não usamos mais isso para controlar o live.
      isLive: false,
    };

    onAddPlayer(newPlayer);

    // Reset
    setName('');
    setAvatar('');
    setKickChannel('');
    setAvatarMode('manual');
    setKickAvatarFound(false);

    setNotification(
      '✅ Player adicionado com sucesso!'
    );

    setTimeout(() => {
      setNotification('');
    }, 2500);
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#0f0f13] via-[#13131a] to-[#0b0b10] shadow-2xl">

      {/* HEADER */}

      <div className="px-8 py-6 bg-[#141419] border-b border-white/5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="border border-[#442962] text-xl p-2 rounded-xl bg-[#2c1f3b]">
            ⚡
          </div>

          <div className="text-white">

            <h2 className="text-xl font-bold">
              Painel Admin
            </h2>

            <p className="text-[#6b7080] text-sm">
              Criar e gerenciar players
            </p>

          </div>

        </div>

        <div className="py-1.5 px-3 border-[#452963] rounded-2xl bg-purple-500/10 flex items-center justify-center">

          <p className="text-sm text-[#805aa7]">
            Admin
          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}

        <div className="space-y-6">

          {/* NAME */}

          <div>

            <label className="text-xs font-semibold uppercase text-gray-400 mb-2 block">
              Nome do Player
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Digite o nome..."
              className="w-full bg-[#17171d] placeholder:text-[#4b5563] border text-sm border-gray-700 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none"
            />

          </div>

          {/* AVATAR MODE */}

          <div>

            <label className="text-xs font-semibold uppercase text-gray-400 mb-3 block">
              Avatar
            </label>

            <div className="grid grid-cols-2 gap-2 mb-4">

              <button
                type="button"
                onClick={() =>
                  setAvatarMode('manual')
                }
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm transition ${
                  avatarMode === 'manual'
                    ? 'bg-purple-500/15 border-purple-500/40 text-purple-300'
                    : 'bg-[#17171d] border-gray-700 text-gray-500 hover:border-gray-500'
                }`}
              >
                <Upload className="w-4 h-4" />
                Manual
              </button>

              <button
                type="button"
                onClick={() =>
                  setAvatarMode('kick')
                }
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm transition ${
                  avatarMode === 'kick'
                    ? 'bg-green-500/15 border-green-500/40 text-green-300'
                    : 'bg-[#17171d] border-gray-700 text-gray-500 hover:border-gray-500'
                }`}
              >
                <Twitch className="w-4 h-4" />
                KICK
              </button>

            </div>

            {/* MANUAL */}

            {avatarMode === 'manual' && (

              <label className="flex items-center justify-center w-full h-44 border-2 border-dashed border-[#2d2d32] rounded-2xl bg-[#18181f] cursor-pointer hover:border-purple-400 hover:bg-purple-500/5 transition">

                <div className="text-center flex flex-col text-[#4b5464] pointer-events-none">

                  <div className="text-3xl mb-2">
                    📤
                  </div>

                  <p>
                    Clique para enviar avatar
                  </p>

                  <p className="text-sm text-[#374049]">
                    PNG, JPG até 5MB
                  </p>

                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

              </label>

            )}

            {/* KICK */}

            {avatarMode === 'kick' && (

              <div className="space-y-3">

                <div className="relative">

                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />

                  <input
                    value={kickChannel}
                    onChange={(e) => {
                      setKickChannel(e.target.value);
                      setKickAvatarFound(false);
                    }}
                    placeholder="ex: ovotz"
                    className="w-full pl-9 pr-32 py-3 bg-[#17171d] border border-gray-700 rounded-2xl text-sm text-white placeholder-gray-500 focus:border-purple-500 outline-none"
                  />

                  <button
                    type="button"
                    onClick={buscarAvatarKick}
                    disabled={loadingKickAvatar}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition"
                  >

                    <Search className="w-3.5 h-3.5" />

                    {loadingKickAvatar
                      ? 'Buscando...'
                      : 'Buscar'}

                  </button>

                </div>

                {kickAvatarFound && (

                  <div className="flex items-center gap-2 text-green-400 text-xs">

                    <CheckCircle className="w-4 h-4" />

                    Avatar da KICK encontrado

                  </div>

                )}

                <p className="text-[10px] text-gray-500">
                  Digite somente o nome do canal, sem @.
                </p>

              </div>

            )}

          </div>

          {/* KICK CHANNEL */}

          <div>

            <label className="text-xs font-semibold uppercase text-gray-400 mb-2 block flex items-center gap-2">

              <Twitch className="w-4 h-4" />

              Canal na Kick

            </label>

            <div className="relative">

              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

              <input
                value={kickChannel}
                onChange={(e) =>
                  setKickChannel(e.target.value)
                }
                placeholder="ex: canal_do_jogador"
                className="w-full pl-9 pr-4 py-3 bg-[#17171d] border border-gray-700 rounded-2xl text-sm text-white placeholder-gray-500 focus:border-purple-500 outline-none"
              />

            </div>

            <p className="text-[10px] text-gray-500 mt-1">
              Esse canal também será usado para detectar AO VIVO automaticamente.
            </p>

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

        {/* RIGHT PREVIEW */}

        <div className="flex items-center justify-center bg-[#18181f] border border-gray-800 rounded-3xl p-8">

          {avatar || name ? (

            <div className="text-center">

              {avatar ? (

                <img
                  src={avatar}
                  className="w-52 h-52 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.35)] mx-auto"
                  alt={name || 'Preview'}
                />

              ) : (

                <div className="w-52 h-52 rounded-full border-4 border-gray-700 flex items-center justify-center mx-auto">

                  <ImageIcon className="w-16 h-16 text-gray-700" />

                </div>

              )}

              <p className="text-white font-bold mt-4 text-lg">
                {name || 'Sem nome'}
              </p>

              {kickChannel && (

                <p className="text-xs text-purple-400 mt-1">
                  🎥 {kickChannel}
                </p>

              )}

              {kickAvatarFound && (

                <p className="text-xs text-green-400 mt-2">
                  ✓ Avatar automático da KICK
                </p>

              )}

              <p className="text-gray-400 text-sm mt-2">
                Preview do player
              </p>

            </div>

          ) : (

            <div className="text-center text-[#384053]">

              <div className="border w-16 h-16 text-2xl mb-2 mx-auto flex items-center justify-center rounded-full bg-[#1d1b23] border-[#26252d]">
                👤
              </div>

              Sem preview

            </div>

          )}

        </div>

      </div>

    </div>
  );
}