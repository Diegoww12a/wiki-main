import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { player_id, usuario_id } = body;

    if (!player_id || !usuario_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'player_id e usuario_id são obrigatórios' }),
      };
    }

    const sql = neon(process.env.DATABASE_URL);

    // Verifica se o player está no acervo do usuário
    const acervoRows = await sql`
      SELECT preco_pago FROM acervo_usuario
      WHERE usuario_id = ${usuario_id} AND player_id = ${player_id}
    `;
    if (acervoRows.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Player não está no acervo' }) };
    }

    // Verifica se o player está em algum time
    const timeRows = await sql`
      SELECT id FROM times WHERE ${player_id} = ANY(jogadores)
    `;
    if (timeRows.length > 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Player está em um time, remova-o antes de vender' }) };
    }

    const precoPago = acervoRows[0].preco_pago;
    const valorRecebido = Math.round(precoPago * 0.7); // 70% do valor pago

    await sql`UPDATE usuarios SET moedas = moedas + ${valorRecebido} WHERE id = ${usuario_id}`;
    await sql`DELETE FROM acervo_usuario WHERE usuario_id = ${usuario_id} AND player_id = ${player_id}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, valorRecebido }),
    };
  } catch (error) {
    console.error('Erro em venderPlayer:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};