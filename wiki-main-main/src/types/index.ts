export interface Player {
  id: string;
  name: string;
  avatar: string;
  faction: string;
  role: 'PVP' | 'P1';
  level: number;
  reputation: number;
  server: string;
  status: 'online' | 'offline';
  joinDate: string;
  stats: {
    kills: number;
    deaths: number;
    playtime: string;
    missions: number;
  };
}

export interface Server {
  id: string;
  name: string;
  type: 'RP' | 'PVP';
  players: number;
  maxPlayers: number;
  rating: number;
  description: string;
}

export interface Faction {
  id: string;
  name: string;
  tag: string;
  logo: string;
  type: 'Gang' | 'Police' | 'Mafia' | 'Military' | 'Biker';
  status: 'active' | 'inactive' | 'war';
  level: number;
  reputation: number;
  territory: string;
  foundedDate: string;
  leader: string;
  memberCount: number;
  maxMembers: number;
  description: string;
  achievements: Achievement[];
  stats: {
    totalKills: number;
    totalDeaths: number;
    territoriesControlled: number;
    warsWon: number;
    warsLost: number;
    totalMoney: number;
  };
  members: FactionMember[];
}

export interface War {
  id: string;
  name: string;
  faction1: {
    id: string;
    name: string;
    tag: string;
    logo: string;
  };
  faction2: {
    id: string;
    name: string;
    tag: string;
    logo: string;
  };
  status: 'active' | 'ended' | 'scheduled';
  startDate: string;
  timeDate: string;
  endDate?: string;
  winner?: string;
  territory: string;
  reason: string;
  description: string;
  stats: {
    faction1Kills: number;
    faction2Kills: number;
    totalBattles: number;
    duration: string;
  };
  escalation: {
    faction1Players: WarPlayer[];
    faction2Players: WarPlayer[];
  };
  battles: Battle[];
}

export interface WarPlayer {
  playerId: string;
  playerName: string;
  avatar: string;
  role: 'Leader' | 'Commander' | 'Soldier' | 'Support';
  kills: number;
  deaths: number;
  status: 'active' | 'injured' | 'eliminated';
}

export interface Battle {
  id: string;
  date: string;
  location: string;
  winner: string;
  faction1Kills: number;
  faction2Kills: number;
  duration: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedDate: string;
}

export interface FactionMember {
  playerId: string;
  playerName: string;
  avatar: string;
  rank: string;
  joinDate: string;
  status: 'online' | 'offline';
  contributions: {
    kills: number;
    missions: number;
    moneyEarned: number;
  };
}