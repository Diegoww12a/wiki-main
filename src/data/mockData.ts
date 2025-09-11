import { Player, Server, Faction, War } from '../types';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'KROOZZNS',
    avatar: '/images/avatars/KROOZZ.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '2',
    name: 'FACADA',
    avatar: '/images/avatars/FACADA.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '4',
    name: 'LUANZ7',
    avatar: '/images/avatars/luan.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 2,
      deaths: 0,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '5',
    name: 'VINAOLEK',
    avatar: '/images/avatars/VINAO.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '6',
    name: 'LELEOZN',
    avatar: '/images/avatars/LELEON.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '7',
    name: 'UBLACK',
    avatar: '/images/avatars/UBLACK.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '8',
    name: 'GORDAONS',
    avatar: '/images/avatars/GORDAO.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 3,
      deaths: 2,
      playtime: '0',
      missions: 2
    }
  },
  {
    id: '9',
    name: 'OVOTZ',
    faction: 'FRANÇA',
    avatar: '/images/avatars/OVOTZ.png', // caminho correto
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 4,
      deaths: 2,
      playtime: '0',
      missions: 3
    }
  },
  {
    id: '10',
    name: 'MITSUKE',
    avatar: '/images/avatars/MITSUKE.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 2,
      deaths: 1,
      playtime: '0',
      missions: 2
    }
  },
  {
    id: '11',
    name: 'LENONS',
    avatar: '/images/avatars/LENONS.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '12',
    name: 'PURPOU',
    avatar: '/images/avatars/PURPOU.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 6,
      deaths: 1,
      playtime: '0',
      missions: 3
    }
  },
  {
    id: '13',
    name: 'BISNAGA',
    avatar: '/images/avatars/BISNAGA.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '14',
    name: 'PANIICZ',
    avatar: '/images/avatars/PANICZ.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 4,
      deaths: 1,
      playtime: '0',
      missions: 2
    }
  },
  {
    id: '15',
    name: 'LOCKING',
    avatar: '/images/avatars/LOCKING.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '16',
    name: 'BIRO',
    avatar: '/images/avatars/BIRO.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '17',
    name: 'SHEIK',
    avatar: '/images/avatars/SHEIK.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '18',
    name: 'NARA',
    avatar: '/images/avatars/NARA.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '19',
    name: 'LUNA',
    avatar: '/images/avatars/LUNA.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '20',
    name: 'IVYBANKS',
    avatar: '/images/avatars/IVY.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '21',
    name: 'ALBARA',
    avatar: '/images/avatars/ALBARA.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 3,
      deaths: 0,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '22',
    name: 'BAIANONS',
    avatar: '/images/avatars/BAIANO.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 2,
      playtime: '0',
      missions: 2
    }
  },
  {
    id: '23',
    name: 'DEDE',
    avatar: '/images/avatars/DEDE.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '24',
    name: 'GALEGUINS',
    avatar: '/images/avatars/GALEGUIN.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '25',
    name: 'DUMAL',
    avatar: '/images/avatars/DUMAL.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '26',
    name: 'RAFINHA',
    avatar: '/images/avatars/RAFINHA.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 2,
    reputation: 7,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 3,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '12',
    name: 'CLOUDNS',
    avatar: '/images/avatars/CLOUD.png',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },


];

export const mockServers: Server[] = [
  {
      id: '1',
      name: 'Capital',
      type: 'RP',
      players: 620,
      maxPlayers: 700,
      rating: 5.8,
      description: 'Servidor premium de roleplay com economia realista e facções ativas'
    },
  {
    id: '2',
    name: 'Complexo ',
    type: 'RP',
    players: 480,
    maxPlayers: 1000,
    rating: 5.1,
    description: 'Experiência de roleplay autêntica com sistema de empregos únicos'
  },
  {
    id: '3',
    name: 'GOAT',
    type: 'PVP',
    players: 700,
    maxPlayers: 2000,
    rating: 4.9,
    description: 'Servidor focado em combate intenso e guerra entre facções'
  },
  {
    id: '4',
    name: 'Metropole',
    type: 'RP',
    players: 520,
    maxPlayers: 2000,
    rating: 5.4,
    description: 'Servidor exclusivo com whitelist para roleplay de alta qualidade'
  },
  {
    id: '5',
    name: 'PLF PVP',
    type: 'PVP',
    players: 500,
    maxPlayers: 900,
    rating: 4.5,
    description: 'Combate hardcore com sistema de ranking competitivo'
  }
];
// FRANCA

export const mockFactions: Faction[] = [
  
  {
    id: '1',
    name: 'França',
    tag: '[FR]',
    logo: '/images/avatars/franca.png',
    type: 'Gang',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: 'Favela da barragem',
    foundedDate: '2021-07-18',
    leader: 'Connor dygeras scott',
    memberCount: 26,
    maxMembers: 30,
    description: 'Facção francesa, com o melhor elenco de todos',
    achievements: [
      {
        id: '1',
        title: 'Conquistas',
        description: 'Baguncinha 2.0  Baguncinha 3.0',
        icon: '🏆',
        rarity: 'legendary',
        unlockedDate: '2023-01-01'
      },
      {
        id: '2',
        title: 'Força Militar',
        description: 'Venceu várias guerras consecutivas, sem perder nenhuma',
        icon: '⚔️',
        rarity: 'legendary',
        unlockedDate: '2025-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 0,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
        playerId: '1',
        playerName: 'Connor',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Líder',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '2',
        playerName: 'KroozzNS',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
       joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '3',
        playerName: 'GaleguiNS',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '4',
        playerName: 'Luanz7',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '5',
        playerName: 'Tsukii',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      // ---- membros normais ----
      {
        playerId: '6',
        playerName: 'Ovotz',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '7',
        playerName: 'GordaoNS',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '8',
        playerName: 'Locking',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '9',
        playerName: 'Facada',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '10',
        playerName: 'PaNiiCz',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
       joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '11',
        playerName: 'Bisnaga',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '12',
    playerName: 'Purpou',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '13',
    playerName: 'LenoNs',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '14',
    playerName: 'Mitsuke',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '15',
    playerName: 'Rafinha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '16',
    playerName: 'Ublack',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '17',
    playerName: 'Leleozn',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '18',
    playerName: 'Dubem',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '19',
    playerName: 'Luna',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '20',
    playerName: 'Nara',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '21',
    playerName: 'Ivybanks',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '22',
    playerName: 'Albara',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '23',
    playerName: 'Baiano',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '24',
    playerName: 'Dede',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '25',
    playerName: 'Sheik',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '26',
    playerName: 'Biro',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  }
]


    
  },// FIM FRANCA
  {
    id: '2',
    name: 'LA7',
    tag: '[LA7]',
    logo: 'https://pbs.twimg.com/profile_images/1953883985701982208/Jf-_y1h0_400x400.jpg',
    type: 'Gang',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: 'BEBETO CANALHA',
    memberCount: 30,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '3',
        title: '0',
        description: '0',
        icon: '👑',
        rarity: 'epic',
        unlockedDate: '2025-08-09'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 1,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
        playerId: '1',
        playerName: 'BEBETO CANALHA',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Líder',
        joinDate: '2025-09-08',
        status: 'online',
        contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
        {
          playerId: '2',
          playerName: 'KOLAROVNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '3',
          playerName: 'BRASIL',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '4',
          playerName: 'SIDOKANS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '5',
          playerName: 'GUIJHOW',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '6',
          playerName: 'PETER',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'GERENTE DE AÇÃO',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '7',
          playerName: 'ENRICONS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '8',
          playerName: 'PRICE9J',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '9',
          playerName: '2F',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '10',
          playerName: 'GOKURS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '11',
          playerName: 'NITRAM',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '12',
          playerName: 'MAJUSL',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '13',
          playerName: 'RMZIN',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '14',
          playerName: 'BECA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '15',
          playerName: 'SOIUDOTSM',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '16',
          playerName: 'CAIOTSM',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '17',
          playerName: 'CARIOCA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'GERENTE',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '18',
          playerName: 'LUCKZINV3',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '19',
          playerName: 'DORIZZI',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '20',
          playerName: 'PVTINNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '21',
          playerName: 'TRIVELA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '22',
          playerName: 'ZINA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '23',
          playerName: 'TRALHANS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '24',
          playerName: 'JANUARIO',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '25',
          playerName: 'KAUE7',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '26',
          playerName: 'SPAWNNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '27',
          playerName: 'GOLD',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '28',
          playerName: 'SOLONNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '29',
          playerName: 'OWENNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
      ]
  },
  // fim la7
  // inicio 187
  {
    id: '3',
    name: '187',// COMPLET
    tag: '[187]',
    logo: 'https://pbs.twimg.com/profile_images/1951404435059478528/K0kij3yr_400x400.jpg',
    type: 'Gang',
    status: 'war',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: '',
    memberCount: 29,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '4',
        title: '0',
        description: '0',
        icon: '💀',
        rarity: 'legendary',
        unlockedDate: '2024-02-10'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 0,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },

    members: [
      {
  playerId: '1',
  playerName: 'jo brazt',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},

{
  playerId: '2',
  playerName: 'kani',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '3',
  playerName: 'von',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '4',
  playerName: 'joaozin7',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '5',
  playerName: 'fxzk',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '6',
  playerName: 'triz ferri',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '7',
  playerName: 'kznn',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '8',
  playerName: 'chefin',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '9',
  playerName: 'nzfps',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '10',
  playerName: 'bahiafpss',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '11',
  playerName: 'capone',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '12',
  playerName: 'eduardowr',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '13',
  playerName: 'thzinmlv',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '14',
  playerName: 'rubi',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '15',
  playerName: 'skn7',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '16',
  playerName: 'reuel',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '17',
  playerName: 'poeira',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '18',
  playerName: 'vilao',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '19',
  playerName: 'jhow',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '20',
  playerName: 'hirossefps',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '21',
  playerName: 'hempa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '22',
  playerName: 'hash',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '23',
  playerName: 'gordinhofpss',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '24',
  playerName: 'noah',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '25',
  playerName: 'marechal',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '26',
  playerName: 'lemos',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '27',
  playerName: 'doisr',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '28',
  playerName: 'doisg',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '29',
  playerName: 'docinho',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '30',
  playerName: 'destxw',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '31',
  playerName: 'danike',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '32',
  playerName: 'curioso',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
}

    ]
  },
  {
    id: '4',
    name: 'Russia',
    tag: '[RUS]',
    logo: 'https://pbs.twimg.com/profile_images/1728174424908603392/ZQRzPsnz_400x400.jpg',
    type: 'Mafia',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: 'todurooficial',
    memberCount: 19,
    maxMembers: 30,
    description: '0',
    achievements: [
      {
        id: '5',
        title: '0',
        description: '0',
        icon: '💰',
        rarity: 'epic',
        unlockedDate: '2025-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 0,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    
    members: [
  {
    playerId: '1',
    playerName: 'Souza',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '2',
    playerName: 'Morais',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '3',
    playerName: 'Helpzin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '4',
    playerName: 'Rockstar',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '5',
    playerName: 'Canalha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '6',
    playerName: 'Jotaeme',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '7',
    playerName: 'Doguin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '8',
    playerName: 'Abnt',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
    
  },
  {
    playerId: '9',
    playerName: 'Briel',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }

  },
  {
    playerId: '10',
    playerName: 'Veloso',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
    
    
    
  },
  {
    playerId: '11',
    playerName: 'GabrielBest',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '12',
    playerName: 'Mito7',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '13',
    playerName: 'Luqzz',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '14',
    playerName: 'Skye',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '15',
    playerName: 'Estrela',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '16',
    playerName: 'Karlinha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '17',
    playerName: 'Pablin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '18',
    playerName: 'Zanzunky',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '19',
    playerName: 'Haridade',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  }
]

  },
  // fim russia
  // inicio underground
  {
    id: '6',
    name: 'Underground', // COMPLET
    tag: '[UG]',
    logo: 'https://pbs.twimg.com/profile_images/1893088002110341120/aQD2WusN_400x400.jpg',
    type: 'Gang',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: '',
    memberCount: 30,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '7',
        title: '',
        description: '',
        icon: '🕶️',
        rarity: 'rare',
        unlockedDate: '2025-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 1,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
  playerId: '1',
  playerName: 'AUDAZ',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '2',
  playerName: 'CAIOBA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '3',
  playerName: 'ESCOBAR',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '4',
  playerName: 'THAY',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '5',
  playerName: 'BAIANO',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '6',
  playerName: 'NABRIZA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '7',
  playerName: 'ONE',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '8',
  playerName: 'FER',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '9',
  playerName: 'ADAL',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '10',
  playerName: 'XND',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '11',
  playerName: 'GONZA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '12',
  playerName: 'FLOW',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '13',
  playerName: 'VITIN',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '14',
  playerName: 'SAM',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '15',
  playerName: 'RAVAZ',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '16',
  playerName: 'SILVA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '17',
  playerName: 'PATRICK',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '18',
  playerName: 'DONIZETE',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '19',
  playerName: 'FEBEM',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '20',
  playerName: 'NITTSZ',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '21',
  playerName: 'Maryzlp',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '22',
  playerName: 'HIDAKA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '23',
  playerName: 'KLEITO',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '24',
  playerName: 'PX',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '25',
  playerName: 'RAFFASETE',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '26',
  playerName: 'BRUNIN',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '27',
  playerName: 'GL',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '28',
  playerName: 'SAMAMBAIA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '29',
  playerName: 'SEVEN',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '30',
  playerName: 'PIOZZERA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},



    ]
  },  // fim underground
  // inicio italia
  {
    id: '9',
    name: 'Italia',// complet
    tag: '[ITA]',
    logo: 'https://pbs.twimg.com/profile_images/1959077725966159872/WMKBcXMv_400x400.jpg',
    type: 'Mafia',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: 'Commander_TAT',
    memberCount: 20,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '8',
        title: '',
        description: '',
        icon: '🎯',
        rarity: 'legendary',
        unlockedDate: '2024-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 1,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
  playerId: '1',
  playerName: 'katarina',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '2',
  playerName: 'fera',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '3',
  playerName: 'fael',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '4',
  playerName: 'soledtsm',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '5',
  playerName: 'arthurtsm',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '6',
  playerName: 'fptsm',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '7',
  playerName: 'machado',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '8',
  playerName: 'maite',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '9',
  playerName: 'curry',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '10',
  playerName: 'artur',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '11',
  playerName: 'agapito',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '12',
  playerName: 'bento',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '13',
  playerName: 'allen',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '14',
  playerName: 'mottaa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '15',
  playerName: 'samba',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '16',
  playerName: 'baronesa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '17',
  playerName: 'ysa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '18',
  playerName: 'astrid',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '19',
  playerName: 'biel',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '20',
  playerName: 'jzn',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '21',
  playerName: 'hd',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '22',
  playerName: 'vilch',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '23',
  playerName: 'leo',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '24',
  playerName: 'arraxca',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '25',
  playerName: 'lima',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '26',
  playerName: 'vic',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '27',
  playerName: 'zarsao',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '28',
  playerName: 'souza',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '29',
  playerName: 'lfzyn',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '30',
  playerName: 'vico',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
}

    ]
  },
 
];
// guerras
export const mockWars: War[] = [
  {
    id: '1',
    name: 'Guerra dos Melhores',
    faction1: {
      id: '1',
      name: 'França',
      tag: '[FR]',
      logo: '/images/avatars/franca.jpg'
    },
    faction2: {
      id: '4',
      name: 'Russia',
      tag: '[RUS]',
      logo: '/images/avatars/russia.jpg'
    },
    status: 'ended',
    startDate: '2025-09-11',
    territory: 'Norte',
    winner: 'França',
    timeDate: '21:00',
    reason: 'Disputa de poder',
    description: '🇫🇷 França x Rússia 🇷🇺 A guerra mais esperada dos tempos finalmente chegou! As duas facções mais fortes da metrópole entram em confronto direto, prometendo um embate épico.',

    stats: {
      faction1Kills: 30,
      faction2Kills: 9,
      totalBattles: 1,
      duration: '2 Horas'
    },
    escalation: {
      faction1Players: [
      
          {
    playerId: '1',
    playerName: 'Connor',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '2',
    playerName: 'Tsuuki',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '3',
    playerName: 'Luna',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '4',
    playerName: 'Nara',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '5',
    playerName: 'Luanz7',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '6',
    playerName: 'Facada',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '7',
    playerName: 'KroozzNS',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '8',
    playerName: 'Bisnaga',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '9',
    playerName: 'GaleguiNS',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '10',
    playerName: 'Biro',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '11',
    playerName: 'Rafinha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '12',
    playerName: 'Dede',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '13',
    playerName: 'Mitsuke',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '14',
    playerName: 'Locking',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '15',
    playerName: 'Purpou',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '16',
    playerName: 'Sheik',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '17',
    playerName: 'Ublack',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '18',
    playerName: 'Ovotz',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '19',
    playerName: 'Dubem',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '20',
    playerName: 'PaNiiCz',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '21',
    playerName: 'Gordão',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '22',
    playerName: 'Leleozn',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '23',
    playerName: 'BaianoNS',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '24',
    playerName: 'Albara',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '25',
    playerName: 'Ivy',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '26',
    playerName: 'LenoNS',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '27',
    playerName: 'CloudNs',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '28',
    playerName: 'lUIZA',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '30',
    playerName: 'Bernadin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
        

      ],
      faction2Players: [
  {
    playerId: '31',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '32',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '33',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '34',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '35',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '36',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '37',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '38',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '39',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '40',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '41',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '42',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '43',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '44',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '45',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '46',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '47',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '48',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '49',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '50',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '51',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '52',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '53',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '54',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '55',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '56',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '57',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '58',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '59',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
      ]
    },
    battles: [
      {
        id: '1',
        date: '2025-09-11',
        location: 'Norte',
        winner: 'FRANÇA',
        faction1Kills: 30,
        faction2Kills: 9,
        duration: '2 Horas',
        description: ''
      },
    ]
  },]
  
