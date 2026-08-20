import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { usuario_id } = event.queryStringParameters || {};
    if (!usuario_id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'usuario_id é obrigatório' }) };
    }
    const rows = await sql`
      SELECT id, nick, moedas, moedas_dia_kick, login_streak, ultimo_login
      FROM usuarios
      WHERE id = ${usuario_id}
    `;
    return {
      statusCode: 200,
      body: JSON.stringify(rows[0] || {}),
    };
  } catch (error) {
    console.error('Erro em getUser:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};