import { neon } from '@neondatabase/serverless';

export const handler = async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      SELECT id, name, data FROM players ORDER BY id
    `;
    // Retorna os dados no formato que seu frontend espera (Player[])
    const players = result.map(row => ({
      id: row.id,
      ...row.data, // spread do JSON
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(players),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};