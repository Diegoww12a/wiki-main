// ===== netlify/functions/getRankingTimes.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT * FROM times
      ORDER BY elo DESC
    `;
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Erro em getRankingTimes:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};