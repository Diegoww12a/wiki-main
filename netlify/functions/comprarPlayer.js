import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { player_id, usuario_id } = body; // <-- RECEBE DO FRONT

    if (!player_id || !usuario_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'player_id e usuario_id são obrigatórios' }),
      };
    }

    const sql = neon(process.env.DATABASE_URL);

    // 1. Buscar player
    const rows = await sql`SELECT data FROM players WHERE id = ${player_id}`;
    if (rows.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Player não encontrado' }) };
    }
    const player = rows[0].data;

    // 2. Calcular preço
    const kills = player.stats?.kills || 0;
    const deaths = player.stats?.deaths || 0;
    const kd = deaths > 0 ? kills / deaths : kills;
    const poderBruto = (kills * 2) + (player.stats?.missions || 0) - (deaths * 0.8) + (kd * 5);
    const poder = Math.min(100, Math.max(0, poderBruto / 2));
    const preco = Math.round(100 + (poder / 100) * 400);

    // 3. Verificar saldo do usuário (usando `usuario_id` dinâmico)
    const userRows = await sql`SELECT moedas FROM usuarios WHERE id = ${usuario_id}`;
    if (userRows.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Usuário não encontrado' }) };
    }
    const saldo = userRows[0].moedas;

    if (saldo < preco) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Saldo insuficiente' }) };
    }

    // 4. Verificar se já possui
    const acervoCheck = await sql`
      SELECT id FROM acervo_usuario
      WHERE usuario_id = ${usuario_id} AND player_id = ${player_id}
    `;
    if (acervoCheck.length > 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Player já está no acervo' }) };
    }

    // 5. Efetivar compra
    await sql`UPDATE usuarios SET moedas = moedas - ${preco} WHERE id = ${usuario_id}`;
    await sql`
      INSERT INTO acervo_usuario (usuario_id, player_id, preco_pago)
      VALUES (${usuario_id}, ${player_id}, ${preco})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, preco }),
    };
  } catch (error) {
    console.error('Erro em comprarPlayer:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};