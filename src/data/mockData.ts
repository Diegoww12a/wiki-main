import { Player, Server, Faction } from '../types';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'DragonSlayer47',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    faction: 'Los Santos Police',
    role: 'PVP',
    level: 87,
    reputation: 2450,
    server: 'Brasil RP #1',
    status: 'online',
    joinDate: '2023-01-15',
    stats: {
      kills: 1247,
      deaths: 892,
      playtime: '847h 23m',
      missions: 156
    }
  },
  {
    id: '2',
    name: 'ShadowKnight',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    faction: 'Grove Street Families',
    role: 'P1',
    level: 92,
    reputation: 2890,
    server: 'City Life RP',
    status: 'online',
    joinDate: '2022-11-08',
    stats: {
      kills: 890,
      deaths: 445,
      playtime: '1024h 17m',
      missions: 203
    }
  },
  {
    id: '3',
    name: 'PhoenixRider',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    faction: 'Ballas Gang',
    role: 'PVP',
    level: 76,
    reputation: 1890,
    server: 'Santos RP',
    status: 'offline',
    joinDate: '2023-03-22',
    stats: {
      kills: 756,
      deaths: 634,
      playtime: '623h 45m',
      missions: 134
    }
  },
  {
    id: '4',
    name: 'VortexMaster',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
    faction: 'Vagos',
    role: 'P1',
    level: 95,
    reputation: 3120,
    server: 'Brasil RP #1',
    status: 'online',
    joinDate: '2022-09-14',
    stats: {
      kills: 1456,
      deaths: 723,
      playtime: '1245h 32m',
      missions: 287
    }
  },
  {
    id: '5',
    name: 'NeonGhost',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    faction: 'Marabunta Grande',
    role: 'PVP',
    level: 83,
    reputation: 2234,
    server: 'Elite RP',
    status: 'offline',
    joinDate: '2023-02-01',
    stats: {
      kills: 923,
      deaths: 567,
      playtime: '734h 12m',
      missions: 167
    }
  }
];

export const mockServers: Server[] = [
  {
    id: '1',
    name: 'Brasil RP #1',
    type: 'RP',
    players: 247,
    maxPlayers: 250,
    rating: 4.8,
    description: 'Servidor premium de roleplay com economia realista e facções ativas'
  },
  {
    id: '2',
    name: 'City Life RP',
    type: 'RP',
    players: 198,
    maxPlayers: 200,
    rating: 4.6,
    description: 'Experiência de roleplay autêntica com sistema de empregos únicos'
  },
  {
    id: '3',
    name: 'Santos PVP Arena',
    type: 'PVP',
    players: 156,
    maxPlayers: 200,
    rating: 4.7,
    description: 'Servidor focado em combate intenso e guerra entre facções'
  },
  {
    id: '4',
    name: 'Elite RP',
    type: 'RP',
    players: 234,
    maxPlayers: 250,
    rating: 4.9,
    description: 'Servidor exclusivo com whitelist para roleplay de alta qualidade'
  },
  {
    id: '5',
    name: 'Warzone PVP',
    type: 'PVP',
    players: 178,
    maxPlayers: 200,
    rating: 4.5,
    description: 'Combate hardcore com sistema de ranking competitivo'
  }
];

export const mockFactions: Faction[] = [
  {
    id: '1',
    name: 'França',
    tag: '[FR]',
    logo: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Military',
    status: 'active',
    level: 95,
    reputation: 8750,
    territory: 'Norte de Los Santos',
    foundedDate: '2022-03-15',
    leader: 'Napoleon_BR',
    memberCount: 47,
    maxMembers: 50,
    description: 'Facção militar francesa com tradição em operações táticas e controle territorial estratégico.',
    achievements: [
      {
        id: '1',
        title: 'Conquistadores',
        description: 'Controlou 5 territórios simultaneamente',
        icon: '🏆',
        rarity: 'legendary',
        unlockedDate: '2024-01-15'
      },
      {
        id: '2',
        title: 'Força Militar',
        description: 'Venceu 10 guerras consecutivas',
        icon: '⚔️',
        rarity: 'epic',
        unlockedDate: '2023-11-20'
      }
    ],
    stats: {
      totalKills: 2847,
      totalDeaths: 1203,
      territoriesControlled: 3,
      warsWon: 15,
      warsLost: 4,
      totalMoney: 15750000
    },
    members: [
      {
        playerId: '1',
        playerName: 'Napoleon_BR',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
        rank: 'Comandante',
        joinDate: '2022-03-15',
        status: 'online',
        contributions: { kills: 456, missions: 89, moneyEarned: 2500000 }
      }
    ]
  },
  {
    id: '2',
    name: 'LA7',
    tag: '[LA7]',
    logo: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Gang',
    status: 'active',
    level: 87,
    reputation: 7230,
    territory: 'Grove Street',
    foundedDate: '2022-07-08',
    leader: 'King_LA7',
    memberCount: 32,
    maxMembers: 40,
    description: 'Gang de rua especializada em operações urbanas e controle de território no coração de Los Santos.',
    achievements: [
      {
        id: '3',
        title: 'Reis da Rua',
        description: 'Dominou Grove Street por 6 meses',
        icon: '👑',
        rarity: 'epic',
        unlockedDate: '2023-12-01'
      }
    ],
    stats: {
      totalKills: 1923,
      totalDeaths: 1456,
      territoriesControlled: 2,
      warsWon: 8,
      warsLost: 6,
      totalMoney: 8900000
    },
    members: [
      {
        playerId: '2',
        playerName: 'King_LA7',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
        rank: 'Líder',
        joinDate: '2022-07-08',
        status: 'online',
        contributions: { kills: 234, missions: 67, moneyEarned: 1800000 }
      }
    ]
  },
  {
    id: '3',
    name: '187',
    tag: '[187]',
    logo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Gang',
    status: 'war',
    level: 92,
    reputation: 8120,
    territory: 'East Los Santos',
    foundedDate: '2021-11-22',
    leader: 'Reaper_187',
    memberCount: 38,
    maxMembers: 45,
    description: 'Gang violenta conhecida por suas táticas agressivas e rivalidade histórica com outras facções.',
    achievements: [
      {
        id: '4',
        title: 'Sem Piedade',
        description: 'Eliminou 1000 inimigos',
        icon: '💀',
        rarity: 'legendary',
        unlockedDate: '2024-02-10'
      }
    ],
    stats: {
      totalKills: 3456,
      totalDeaths: 1789,
      territoriesControlled: 2,
      warsWon: 12,
      warsLost: 8,
      totalMoney: 12300000
    },
    members: []
  },
  {
    id: '4',
    name: 'Russia',
    tag: '[RUS]',
    logo: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Mafia',
    status: 'active',
    level: 89,
    reputation: 7890,
    territory: 'Vinewood Hills',
    foundedDate: '2022-01-30',
    leader: 'Volkov_Boss',
    memberCount: 29,
    maxMembers: 35,
    description: 'Máfia russa com operações sofisticadas em negócios ilegais e controle de territórios nobres.',
    achievements: [
      {
        id: '5',
        title: 'Império do Crime',
        description: 'Gerou mais de 10 milhões em lucros',
        icon: '💰',
        rarity: 'epic',
        unlockedDate: '2023-09-15'
      }
    ],
    stats: {
      totalKills: 1567,
      totalDeaths: 892,
      territoriesControlled: 3,
      warsWon: 9,
      warsLost: 3,
      totalMoney: 18900000
    },
    members: []
  },
  {
    id: '5',
    name: 'Savage',
    tag: '[SVG]',
    logo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Biker',
    status: 'active',
    level: 84,
    reputation: 6750,
    territory: 'Sandy Shores',
    foundedDate: '2022-05-12',
    leader: 'WildRider_SVG',
    memberCount: 25,
    maxMembers: 30,
    description: 'Clube de motociclistas selvagens que domina as estradas e o deserto de Blaine County.',
    achievements: [
      {
        id: '6',
        title: 'Reis da Estrada',
        description: 'Controlou todas as rotas do deserto',
        icon: '🏍️',
        rarity: 'rare',
        unlockedDate: '2023-08-20'
      }
    ],
    stats: {
      totalKills: 1234,
      totalDeaths: 987,
      territoriesControlled: 2,
      warsWon: 6,
      warsLost: 4,
      totalMoney: 7500000
    },
    members: []
  },
  {
    id: '6',
    name: 'Underground',
    tag: '[UG]',
    logo: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Gang',
    status: 'active',
    level: 78,
    reputation: 5890,
    territory: 'Los Santos Underground',
    foundedDate: '2023-02-14',
    leader: 'Shadow_UG',
    memberCount: 22,
    maxMembers: 25,
    description: 'Organização clandestina que opera nas sombras dos túneis e esgotos de Los Santos.',
    achievements: [
      {
        id: '7',
        title: 'Nas Sombras',
        description: 'Completou 50 missões stealth',
        icon: '🕶️',
        rarity: 'rare',
        unlockedDate: '2023-10-05'
      }
    ],
    stats: {
      totalKills: 892,
      totalDeaths: 654,
      territoriesControlled: 1,
      warsWon: 4,
      warsLost: 2,
      totalMoney: 4200000
    },
    members: []
  },
  {
    id: '7',
    name: 'Tática',
    tag: '[TAT]',
    logo: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Military',
    status: 'active',
    level: 91,
    reputation: 8340,
    territory: 'Fort Zancudo',
    foundedDate: '2021-12-03',
    leader: 'Commander_TAT',
    memberCount: 35,
    maxMembers: 40,
    description: 'Unidade militar de elite especializada em operações táticas e missões de alta precisão.',
    achievements: [
      {
        id: '8',
        title: 'Precisão Militar',
        description: 'Completou 100 missões sem baixas',
        icon: '🎯',
        rarity: 'legendary',
        unlockedDate: '2024-01-20'
      }
    ],
    stats: {
      totalKills: 2156,
      totalDeaths: 743,
      territoriesControlled: 2,
      warsWon: 11,
      warsLost: 2,
      totalMoney: 13400000
    },
    members: []
  },
  {
    id: '8',
    name: 'Bate Estoura',
    tag: '[BE]',
    logo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Gang',
    status: 'active',
    level: 73,
    reputation: 5120,
    territory: 'Davis',
    foundedDate: '2023-04-18',
    leader: 'Destroyer_BE',
    memberCount: 18,
    maxMembers: 25,
    description: 'Gang conhecida por sua abordagem direta e confrontos intensos nas ruas de Davis.',
    achievements: [
      {
        id: '9',
        title: 'Força Bruta',
        description: 'Venceu 20 confrontos diretos',
        icon: '💥',
        rarity: 'rare',
        unlockedDate: '2023-11-12'
      }
    ],
    stats: {
      totalKills: 756,
      totalDeaths: 892,
      territoriesControlled: 1,
      warsWon: 3,
      warsLost: 5,
      totalMoney: 3100000
    },
    members: []
  },
  {
    id: '9',
    name: 'Italia',
    tag: '[ITA]',
    logo: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Mafia',
    status: 'active',
    level: 88,
    reputation: 7650,
    territory: 'Rockford Hills',
    foundedDate: '2022-06-25',
    leader: 'Don_Corleone',
    memberCount: 31,
    maxMembers: 35,
    description: 'Família italiana tradicional com negócios em cassinos, restaurantes e operações de alto nível.',
    achievements: [
      {
        id: '10',
        title: 'Família Respeitada',
        description: 'Manteve território por 1 ano sem perdas',
        icon: '🤝',
        rarity: 'epic',
        unlockedDate: '2023-06-25'
      }
    ],
    stats: {
      totalKills: 1345,
      totalDeaths: 678,
      territoriesControlled: 2,
      warsWon: 8,
      warsLost: 2,
      totalMoney: 16800000
    },
    members: []
  },
  {
    id: '10',
    name: 'Reset',
    tag: '[RST]',
    logo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Gang',
    status: 'inactive',
    level: 65,
    reputation: 3890,
    territory: 'Mirror Park',
    foundedDate: '2023-08-10',
    leader: 'Phoenix_RST',
    memberCount: 12,
    maxMembers: 20,
    description: 'Gang em reconstrução após grandes perdas, buscando reconquistar seu lugar no cenário criminal.',
    achievements: [
      {
        id: '11',
        title: 'Renascimento',
        description: 'Reconstruiu a facção após derrota total',
        icon: '🔄',
        rarity: 'rare',
        unlockedDate: '2023-12-15'
      }
    ],
    stats: {
      totalKills: 423,
      totalDeaths: 756,
      territoriesControlled: 0,
      warsWon: 1,
      warsLost: 8,
      totalMoney: 1200000
    },
    members: []
  },
  {
    id: '11',
    name: 'YOLO',
    tag: '[YOLO]',
    logo: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Gang',
    status: 'active',
    level: 76,
    reputation: 5670,
    territory: 'Vespucci Beach',
    foundedDate: '2023-01-20',
    leader: 'Crazy_YOLO',
    memberCount: 21,
    maxMembers: 25,
    description: 'Gang jovem e imprudente que vive intensamente cada momento, conhecida por ações arriscadas.',
    achievements: [
      {
        id: '12',
        title: 'Sem Medo',
        description: 'Completou 25 missões de alto risco',
        icon: '🎲',
        rarity: 'rare',
        unlockedDate: '2023-09-30'
      }
    ],
    stats: {
      totalKills: 987,
      totalDeaths: 1123,
      territoriesControlled: 1,
      warsWon: 5,
      warsLost: 7,
      totalMoney: 4500000
    },
    members: []
  },
  {
    id: '12',
    name: 'Albania',
    tag: '[ALB]',
    logo: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300',
    type: 'Mafia',
    status: 'active',
    level: 82,
    reputation: 6890,
    territory: 'Little Seoul',
    foundedDate: '2022-09-05',
    leader: 'Eagle_ALB',
    memberCount: 27,
    maxMembers: 30,
    description: 'Organização albanesa focada em tráfico internacional e operações de contrabando sofisticadas.',
    achievements: [
      {
        id: '13',
        title: 'Rede Internacional',
        description: 'Estabeleceu rotas de contrabando globais',
        icon: '🌍',
        rarity: 'epic',
        unlockedDate: '2023-07-18'
      }
    ],
    stats: {
      totalKills: 1123,
      totalDeaths: 567,
      territoriesControlled: 2,
      warsWon: 7,
      warsLost: 3,
      totalMoney: 11200000
    },
    members: []
  }
];