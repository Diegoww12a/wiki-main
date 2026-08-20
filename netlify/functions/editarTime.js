// ===== netlify/functions/editarTime.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const body = JSON.parse(event.body);
    const { id, delete: deletar, nome, escudo, jogadores } = body;

    if (deletar) {
      await sql`DELETE FROM times WHERE id = ${id}`;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    // Se for edição (não delete)
    await sql`
      UPDATE times
      SET nome = COALESCE(${nome}, nome),
          escudo = COALESCE(${escudo}, escudo),
          jogadores = COALESCE(${JSON.stringify(jogadores)}, jogadores)
      WHERE id = ${id}
    `;

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    console.error('Erro em editarTime:', error);
    return { statusCode: 400, body: JSON.stringify({ error: error.message }) };
  }
};