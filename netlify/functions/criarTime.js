import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { nome, escudo, jogadores, dono_id } = JSON.parse(event.body); // <-- RECEBE dono_id

    if (!dono_id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'dono_id é obrigatório' }) };
    }

    // Verifica limite de times (1 por usuário)
    const count = await sql`SELECT COUNT(*) FROM times WHERE dono_id = ${dono_id}`;
    if (count[0].count >= 1) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Você já tem um time. Apenas 1 por usuário.' }) };
    }

    // Verifica se os jogadores estão no acervo do dono
    const acervo = await sql`SELECT player_id FROM acervo_usuario WHERE usuario_id = ${dono_id}`;
    const idsNoAcervo = acervo.map((r) => r.player_id);
    if (!jogadores.every((id) => idsNoAcervo.includes(id))) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Um ou mais players não estão no acervo' }) };
    }

    await sql`
      INSERT INTO times (nome, escudo, dono_id, jogadores)
      VALUES (${nome}, ${escudo}, ${dono_id}, ${JSON.stringify(jogadores)})
    `;

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    console.error('Erro em criarTime:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};