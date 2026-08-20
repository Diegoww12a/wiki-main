// ===== netlify/functions/aceitarDesafio.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { challenge_id, recusar } = JSON.parse(event.body);

    if (recusar) {
      await sql`UPDATE desafios SET status = 'recusado' WHERE id = ${challenge_id}`;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    // Buscar desafio
    const desafio = await sql`SELECT * FROM desafios WHERE id = ${challenge_id}`;
    if (desafio.length === 0) throw new Error('Desafio não encontrado');
    const ch = desafio[0];

    // Buscar times e players
    const timeA = await sql`SELECT * FROM times WHERE id = ${ch.time_desafiante_id}`;
    const timeB = await sql`SELECT * FROM times WHERE id = ${ch.time_desafiado_id}`;
    if (timeA.length === 0 || timeB.length === 0) {
      throw new Error('Um dos times não existe');
    }

    // Buscar dados dos players
    const allPlayerIds = [...timeA[0].jogadores, ...timeB[0].jogadores];
    const playersData = await sql`SELECT data FROM players WHERE id = ANY(${allPlayerIds})`;
    const playerMap = playersData.reduce((acc, p) => { acc[p.id] = p.data; return acc; }, {});

    // Função para calcular poder do time
    const calcularPoderTime = (jogadoresIds) => {
      let total = 0;
      for (const id of jogadoresIds) {
        const p = playerMap[id];
        if (p) {
          const kills = p.stats?.kills || 0;
          const deaths = p.stats?.deaths || 0;
          const kd = deaths > 0 ? kills / deaths : kills;
          const poderBruto = (kills * 2) + (p.stats?.missions || 0) - (deaths * 0.8) + (kd * 5);
          total += Math.min(100, Math.max(0, poderBruto / 2));
        }
      }
      return total || 50;
    };

    // Simulação (abates)
    const poderA = calcularPoderTime(timeA[0].jogadores);
    const poderB = calcularPoderTime(timeB[0].jogadores);
    const sorteA = 0.7 + Math.random() * 0.6;
    const sorteB = 0.7 + Math.random() * 0.6;
    const scoreA = (poderA / (poderA + poderB)) * sorteA * 5;
    const scoreB = (poderB / (poderA + poderB)) * sorteB * 5;
    let abatesA = Math.round(scoreA);
    let abatesB = Math.round(scoreB);
    if (abatesA === 0 && abatesB === 0) {
      abatesA = Math.random() < 0.5 ? 1 : 0;
      abatesB = abatesA === 0 ? 1 : 0;
    }
    const vencedor = abatesA > abatesB ? timeA[0].id : (abatesB > abatesA ? timeB[0].id : null);

    // Atualizar ELO (K=30)
    const K = 30;
    const eloA = timeA[0].elo;
    const eloB = timeB[0].elo;
    const expectedA = 1 / (1 + Math.pow(10, (eloB - eloA) / 400));
    const expectedB = 1 / (1 + Math.pow(10, (eloA - eloB) / 400));
    let novoEloA = eloA,
      novoEloB = eloB;
    if (vencedor === timeA[0].id) {
      novoEloA = Math.round(eloA + K * (1 - expectedA));
      novoEloB = Math.round(eloB + K * (0 - expectedB));
    } else if (vencedor === timeB[0].id) {
      novoEloA = Math.round(eloA + K * (0 - expectedA));
      novoEloB = Math.round(eloB + K * (1 - expectedB));
    } else {
      novoEloA = Math.round(eloA + K * (0.5 - expectedA));
      novoEloB = Math.round(eloB + K * (0.5 - expectedB));
    }
    novoEloA = Math.max(800, novoEloA);
    novoEloB = Math.max(800, novoEloB);

    // Atualizar moedas
    const pote = ch.aposta * 2;
    const premio = pote - Math.floor(pote * 0.1);
    let ganhadorId = null;
    if (vencedor === timeA[0].id) ganhadorId = timeA[0].dono_id;
    else if (vencedor === timeB[0].id) ganhadorId = timeB[0].dono_id;

    await sql.begin(async (tx) => {
      // Atualizar times
      await tx`
        UPDATE times
        SET elo = ${novoEloA},
            vitorias = vitorias + ${vencedor === timeA[0].id ? 1 : 0},
            derrotas = derrotas + ${vencedor === timeB[0].id ? 1 : 0}
        WHERE id = ${timeA[0].id}
      `;
      await tx`
        UPDATE times
        SET elo = ${novoEloB},
            vitorias = vitorias + ${vencedor === timeB[0].id ? 1 : 0},
            derrotas = derrotas + ${vencedor === timeA[0].id ? 1 : 0}
        WHERE id = ${timeB[0].id}
      `;
      // Atualizar desafio
      await tx`
        UPDATE desafios
        SET status = 'finalizado',
            placar_desafiante = ${abatesA},
            placar_desafiado = ${abatesB},
            vencedor_id = ${vencedor}
        WHERE id = ${challenge_id}
      `;
      // Atualizar moedas do vencedor
      if (ganhadorId) {
        await tx`UPDATE usuarios SET moedas = moedas + ${premio} WHERE id = ${ganhadorId}`;
        await tx`
          INSERT INTO transacoes (usuario_id, tipo, valor, descricao)
          VALUES (${ganhadorId}, 'aposta_ganho', ${premio}, 'Ganho em desafio')
        `;
        await tx`
          INSERT INTO transacoes (usuario_id, tipo, valor, descricao)
          VALUES ('sistema', 'taxa_sistema', ${Math.floor(pote * 0.1)}, 'Taxa do desafio')
        `;
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Erro em aceitarDesafio:', error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};