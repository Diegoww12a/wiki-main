import { useState } from 'react';
import { Player } from '../types';
import { X } from 'lucide-react';

interface AddPlayerModalProps {
  onClose: () => void;
  onAdd: (player: Player) => void;
}

export default function AddPlayerModal({
  onClose,
  onAdd
}: AddPlayerModalProps) {

  const [avatar, setAvatar] =
    useState('');

  const [name, setName] =
    useState('');

  const [faction, setFaction] =
    useState('');

  const [role, setRole] =
    useState('PVP');

  const [server, setServer] =
    useState('');

  const [kills, setKills] =
    useState(0);

  const [deaths, setDeaths] =
    useState(0);

  const [missions, setMissions] =
    useState(0);

  // UPLOAD
  const handleAvatarUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setAvatar(
        reader.result as string
      );

    };

    reader.readAsDataURL(file);

  };

  // SALVAR
  const handleSave = () => {

    const newPlayer: Player = {

      id: Date.now().toString(),

      name,
      avatar,

      faction,
      role,
      server,

      level: 0,
      reputation: 0,

      status: 'online',

      joinDate:
        new Date().toISOString(),

      stats: {
        kills: Number(kills),
        deaths: Number(deaths),
        playtime: '0',
        missions: Number(missions),
      },

    };

    onAdd(newPlayer);

    onClose();

  };

  return (

    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">

      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-white">
            Adicionar Player
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X />
          </button>

        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          />

          <input
            type="text"
            placeholder="Facção"
            value={faction}
            onChange={(e) =>
              setFaction(e.target.value)
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          />

          <input
            type="text"
            placeholder="Servidor"
            value={server}
            onChange={(e) =>
              setServer(e.target.value)
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          >
            <option value="PVP">
              PVP
            </option>

            <option value="PVP + P1">
              PVP + P1
            </option>

            <option value="P1">
              P1
            </option>

          </select>

          <input
            type="number"
            placeholder="Kills"
            value={kills}
            onChange={(e) =>
              setKills(Number(e.target.value))
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          />

          <input
            type="number"
            placeholder="Deaths"
            value={deaths}
            onChange={(e) =>
              setDeaths(Number(e.target.value))
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          />

          <input
            type="number"
            placeholder="Missões"
            value={missions}
            onChange={(e) =>
              setMissions(Number(e.target.value))
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="w-full text-white"
          />

          {avatar && (

            <img
              src={avatar}
              className="w-24 h-24 rounded-xl object-cover border border-purple-500"
            />

          )}

          <button
            onClick={handleSave}
            className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-xl text-white font-semibold"
          >
            Adicionar Player
          </button>

        </div>

      </div>

    </div>

  );

}