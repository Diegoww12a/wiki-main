// ===== netlify/functions/getAcervo.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { usuario_id } = event.queryStringParameters || {};
    if (!usuario_id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'usuario_id é obrigatório' }) };
    }
    const rows = await sql`
      SELECT * FROM acervo_usuario
      WHERE usuario_id = ${usuario_id}
    `;
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Erro em getAcervo:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};