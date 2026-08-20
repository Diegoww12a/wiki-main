// ===== netlify/functions/criarDesafio.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { time_desafiante_id, time_desafiado_id, aposta } = JSON.parse(event.body);
    const usuario_id = 'user-fixo';

    // Verifica saldo do desafiante
    const user = await sql`SELECT moedas FROM usuarios WHERE id = ${usuario_id}`;
    if (user.length === 0) throw new Error('Usuário não encontrado');
    if (user[0].moedas < aposta) throw new Error('Saldo insuficiente');

    // Verifica se o time desafiado existe e não é o próprio
    const team = await sql`SELECT dono_id FROM times WHERE id = ${time_desafiado_id}`;
    if (team.length === 0) throw new Error('Time desafiado não existe');
    if (team[0].dono_id === usuario_id) throw new Error('Não pode desafiar a si mesmo');

    await sql`
      INSERT INTO desafios (time_desafiante_id, time_desafiado_id, aposta)
      VALUES (${time_desafiante_id}, ${time_desafiado_id}, ${aposta})
    `;
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Erro em criarDesafio:', error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};