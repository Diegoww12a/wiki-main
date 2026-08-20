// ===== netlify/functions/getAllTimes.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT t.*, u.nick as dono_nick
      FROM times t
      LEFT JOIN usuarios u ON t.dono_id = u.id
      ORDER BY t.elo DESC
    `;
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Erro em getAllTimes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
