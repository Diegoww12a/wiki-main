// ===== netlify/functions/criarTime.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { nome, escudo, jogadores } = JSON.parse(event.body);
    const usuario_id = 'user-fixo'; // Substituir por autenticação real

    // Verifica limite de times (apenas 1 por usuário, mas garantimos)
    const count = await sql`SELECT COUNT(*) FROM times WHERE dono_id = ${usuario_id}`;
    if (count[0].count >= 1) {
      throw new Error('Você já tem um time. Apenas 1 time por usuário.');
    }

    // Verifica se os jogadores estão no acervo
    const acervo = await sql`SELECT player_id FROM acervo_usuario WHERE usuario_id = ${usuario_id}`;
    const idsNoAcervo = acervo.map((r) => r.player_id);
    if (!jogadores.every((id) => idsNoAcervo.includes(id))) {
      throw new Error('Um ou mais players não estão no acervo');
    }

    await sql`
      INSERT INTO times (nome, escudo, dono_id, jogadores)
      VALUES (${nome}, ${escudo}, ${usuario_id}, ${JSON.stringify(jogadores)})
    `;
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Erro em criarTime:', error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};