// ===== netlify/functions/getMeusTimes.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { usuario_id } = event.queryStringParameters || {};
    if (!usuario_id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'usuario_id é obrigatório' }) };
    }
    const rows = await sql`
      SELECT * FROM times
      WHERE dono_id = ${usuario_id}
    `;
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Erro em getMeusTimes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};