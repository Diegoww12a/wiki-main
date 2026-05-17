import { neon } from '@neondatabase/serverless';

export const handler = async (event: any) => {
  const sql = neon(process.env.DATABASE_URL!);
  const player = JSON.parse(event.body);

  await sql`
    INSERT INTO players (id, data) VALUES (${player.id}, ${JSON.stringify(player)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(player)}::jsonb
  `;

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};