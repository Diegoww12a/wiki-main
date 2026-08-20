import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { usuario_id } = event.queryStringParameters || {};

    if (!usuario_id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'usuario_id é obrigatório' }) };
    }

    // 1. Tenta buscar o usuário
    let rows = await sql`
      SELECT id, nick, moedas, moedas_dia_kick, login_streak, ultimo_login
      FROM usuarios
      WHERE id = ${usuario_id}
    `;

    // 2. Se não existir, CRIA automaticamente com 10.000 moedas
    if (rows.length === 0) {
      console.log(`🆕 Criando usuário: ${usuario_id}`);
      await sql`
        INSERT INTO usuarios (id, nick, moedas, moedas_dia_kick, login_streak, ultimo_login)
        VALUES (${usuario_id}, ${usuario_id}, 10000, 0, 0, NOW())
      `;
      // Busca novamente após criar
      rows = await sql`
        SELECT id, nick, moedas, moedas_dia_kick, login_streak, ultimo_login
        FROM usuarios
        WHERE id = ${usuario_id}
      `;
    }

    return {
      statusCode: 200,
      body: JSON.stringify(rows[0] || {}),
    };
  } catch (error) {
    console.error('Erro em getUser:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};