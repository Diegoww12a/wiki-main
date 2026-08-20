// ===== src/types/index.ts =====
// Mantenha todas as interfaces existentes (Player, Server, Faction, War, etc.)
// e ADICIONE as seguintes interfaces NO FINAL do arquivo:

export interface PlayerExtended extends Player {
  acoes?: number;
  kd?: number;
  posicao?: string;
}

// ===== src/types/index.ts (adicione no final da interface Player) =====
export interface Player {
  // ... campos existentes ...
  kickChannel?: string;  // Nome ou URL do canal na Kick
  isLive?: boolean;      // true = está ao vivo agora
}

export interface User {
  id: string;
  nick: string;
  moedas: number;
  moedas_dia_kick: number;
  login_streak: number;
  ultimo_login: string;
  created_at: string;
}

export interface AcervoItem {
  id: string;
  usuario_id: string;
  player_id: string;
  data_aquisicao: string;
  preco_pago: number;
}

export interface Team {
  id: string;
  nome: string;
  escudo: string;
  dono_id: string;
  jogadores: string[]; // até 5 player ids
  elo: number;
  vitorias: number;
  derrotas: number;
  data_criacao: string;
}

export interface Challenge {
  id: string;
  time_desafiante_id: string;
  time_desafiado_id: string;
  aposta: number;
  status: 'pendente' | 'aceito' | 'finalizado' | 'recusado';
  placar_desafiante?: number;
  placar_desafiado?: number;
  vencedor_id?: string;
  data: string;
  expira_em: string;
}

export interface Transaction {
  id: string;
  usuario_id: string;
  tipo: 'compra' | 'venda' | 'aposta_ganho' | 'aposta_perda' |
        'recompensa_kick' | 'recompensa_login' | 'recompensa_desafio' | 'taxa_sistema';
  valor: number;
  descricao: string;
  data_hora: string;
}