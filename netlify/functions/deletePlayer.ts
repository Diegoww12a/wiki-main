import { neon } from '@neondatabase/serverless';

export const handler = async (event: any) => {
  const sql = neon(process.env.DATABASE_URL!);
  const { id } = JSON.parse(event.body);

  await sql`DELETE FROM players WHERE id = ${id}`;

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};