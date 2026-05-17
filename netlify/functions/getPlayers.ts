import { neon } from '@neondatabase/serverless';

export const handler = async () => {
  const sql = neon(process.env.DATABASE_URL!);
  const rows = await sql`SELECT data FROM players`;
  const players = rows.map((r: any) => r.data);

  return {
    statusCode: 200,
    body: JSON.stringify(players),
  };
};