// ===== netlify/functions/getDesafios.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { usuario_id } = event.queryStringParameters || {};
    if (!usuario_id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'usuario_id é obrigatório' }) };
    }

    // Verifica se o usuário tem times
    const timesCheck = await sql`SELECT id FROM times WHERE dono_id = ${usuario_id}`;
    if (timesCheck.length === 0) {
      // Se não tem times, retorna array vazio (sem erro)
      return {
        statusCode: 200,
        body: JSON.stringify([]),
      };
    }

    const rows = await sql`
      SELECT d.*
      FROM desafios d
      JOIN times t1 ON d.time_desafiante_id = t1.id
      JOIN times t2 ON d.time_desafiado_id = t2.id
      WHERE t1.dono_id = ${usuario_id} OR t2.dono_id = ${usuario_id}
      ORDER BY d.data DESC
    `;
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Erro em getDesafios:', error);
    // Retorna array vazio em caso de erro (para não quebrar a UI)
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    };
  }
};