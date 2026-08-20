// ===== netlify/functions/savePlayer.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const player = JSON.parse(event.body);
    await sql`
      INSERT INTO players (id, data) VALUES (${player.id}, ${JSON.stringify(player)}::jsonb)
      ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(player)}::jsonb
    `;
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error('Erro em savePlayer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};