// ===== netlify/functions/syncFiveM.js =====
import { neon } from '@neondatabase/serverless';

// =============================================
// 🔥 LISTA DE JOGADORES BLOQUEADOS (NUNCA SERÃO ADICIONADOS AO BANCO)
// =============================================
// Coloque aqui os nomes EXATOS dos jogadores que você NÃO quer no banco
// (Case-insensitive, ou seja, 'laysa' bloqueia 'Laysa', 'LAYSA', etc.)
const BLOCKLIST = [
  'laysa',        // Exemplo: bloqueia a "laysa"
  // 'hacker',     // Adicione outros nomes aqui
  // 'admin_teste'
];

// =============================================
// FUNÇÕES AUXILIARES
// =============================================

function sanitizeName(name) {
  if (!name) return null;
  return name.trim().slice(0, 64);
}

function normalizePlayer(fivemPlayer) {
  const name = sanitizeName(fivemPlayer.name);
  if (!name) return null;

  // 🚫 VERIFICA SE O JOGADOR ESTÁ NA BLOCKLIST
  if (BLOCKLIST.some(blocked => name.toLowerCase() === blocked.toLowerCase())) {
    console.log(`⛔ Jogador bloqueado (não será salvo): ${name}`);
    return null;
  }

  // Retorna os dados básicos (ping e status)
  return {
    name,
    ping: fivemPlayer.ping || 0,
    status: 'online',
    last_seen: new Date().toISOString(),
  };
}

// =============================================
// HANDLER PRINCIPAL
// =============================================

export const handler = async (event) => {
  // 🔐 Autenticação
  const authHeader = event.headers.authorization;
  const expectedToken = process.env.SYNC_TOKEN;
  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    };
  }

  const startTime = Date.now();

  try {
    // 1. Pegar IP e Porta do .env
    const ip = process.env.FIVEM_IP;
    const port = process.env.FIVEM_PORT || '30120';

    if (!ip) {
      throw new Error('FIVEM_IP não definido no .env');
    }

    const playersUrl = `http://${ip}:${port}/players.json`;
    console.log(`🌐 Buscando players em: ${playersUrl}`);

    // 2. Buscar jogadores da FiveM
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const playersResp = await fetch(playersUrl, {
      headers: { 'Accept': 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!playersResp.ok) {
      throw new Error(`Erro ao buscar /players.json: ${playersResp.status}`);
    }

    const rawPlayers = await playersResp.json();
    if (!Array.isArray(rawPlayers)) {
      throw new Error('Resposta de players não é um array');
    }

    // 3. Normalizar e aplicar a BLOCKLIST
    const onlinePlayers = rawPlayers
      .map(p => normalizePlayer(p))
      .filter(p => p !== null);

    if (onlinePlayers.length === 0) {
      console.warn('⚠️ Nenhum jogador válido encontrado (todos foram bloqueados ou servidor vazio)');
    }

    const onlineNames = onlinePlayers.map(p => p.name.toLowerCase());

    // 4. Conectar ao banco
    const sql = neon(process.env.DATABASE_URL);
    const now = new Date().toISOString();

    // Buscar TODOS os jogadores que já existem no banco
    const allPlayers = await sql`
      SELECT id, name, data FROM players
    `;

    // Mapa nome -> dados atuais (para consulta rápida)
    const playerMap = {};
    for (const p of allPlayers) {
      playerMap[p.name.toLowerCase()] = { id: p.id, data: p.data };
    }

    let updatedCount = 0;
    let insertedCount = 0;
    let blockedCount = rawPlayers.length - onlinePlayers.length;

    // 5. Processar jogadores ONLINE (que passaram na blocklist)
    for (const player of onlinePlayers) {
      const lowerName = player.name.toLowerCase();
      const existing = playerMap[lowerName];

      if (existing) {
        // Jogador já existe – ATUALIZAR
        const oldData = existing.data;
        const wasOffline = oldData.status !== 'online';

        // Se estava offline, inicia uma nova sessão
        const sessionStart = wasOffline ? now : (oldData.session_start || now);
        const firstSeen = oldData.first_seen || now;

        const merged = {
          ...oldData,
          ping: player.ping,
          status: 'online',
          last_seen: now,
          session_start: sessionStart,
          first_seen: firstSeen,
          total_online_time: oldData.total_online_time || 0,
        };

        await sql`
          UPDATE players
          SET data = ${JSON.stringify(merged)}::jsonb
          WHERE id = ${existing.id}
        `;
        updatedCount++;
      } else {
        // Novo jogador – INSERIR
        const newData = {
          name: player.name,
          ping: player.ping,
          status: 'online',
          first_seen: now,
          last_seen: now,
          session_start: now,
          total_online_time: 0,
          created_at: now,
        };
        await sql`
          INSERT INTO players (name, data)
          VALUES (${player.name}, ${JSON.stringify(newData)}::jsonb)
        `;
        insertedCount++;
      }
    }

    // 6. Marcar OFFLINE os que não apareceram e calcular tempo da sessão
    if (onlineNames.length > 0) {
      // Busca jogadores que estão ONLINE no banco mas NÃO estão na lista atual
      const offlinePlayers = await sql`
        SELECT id, data FROM players
        WHERE NOT (LOWER(data->>'name') = ANY(${onlineNames}))
          AND data->>'status' = 'online'
      `;

      for (const off of offlinePlayers) {
        const data = off.data;
        const sessionStart = data.session_start;
        const lastSeen = data.last_seen || now;

        // Calcula duração da sessão em segundos
        let sessionDuration = 0;
        if (sessionStart && lastSeen) {
          const start = new Date(sessionStart);
          const end = new Date(lastSeen);
          sessionDuration = Math.floor((end - start) / 1000);
        }
        const total = (data.total_online_time || 0) + sessionDuration;

        const merged = {
          ...data,
          status: 'offline',
          last_seen: now,
          session_start: null,        // limpa a sessão atual
          total_online_time: total,
          last_session_duration: sessionDuration,
        };

        await sql`
          UPDATE players
          SET data = ${JSON.stringify(merged)}::jsonb
          WHERE id = ${off.id}
        `;
      }
    }

    const elapsed = Date.now() - startTime;
    console.log(`✅ Sincronização concluída em ${elapsed}ms`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        updated: updatedCount,
        inserted: insertedCount,
        blocked: blockedCount,
        totalOnline: onlinePlayers.length,
        server: `${ip}:${port}`,
        elapsedMs: elapsed,
        timestamp: now,
      }),
    };
  } catch (error) {
    console.error('❌ Erro fatal:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      }),
    };
  }
};