// ===== netlify/functions/kickPing.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const usuario_id = 'user-fixo';

    const user = await sql`SELECT moedas_dia_kick FROM usuarios WHERE id = ${usuario_id}`;
    if (user.length === 0) throw new Error('Usuário não encontrado');
    if (user[0].moedas_dia_kick >= 500) throw new Error('Limite diário atingido');

    await sql.begin(async (tx) => {
      await tx`
        UPDATE usuarios
        SET moedas = moedas + 10,
            moedas_dia_kick = moedas_dia_kick + 10
        WHERE id = ${usuario_id}
      `;
      await tx`
        INSERT INTO transacoes (usuario_id, tipo, valor, descricao)
        VALUES (${usuario_id}, 'recompensa_kick', 10, 'Farm Kick')
      `;
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Erro em kickPing:', error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};