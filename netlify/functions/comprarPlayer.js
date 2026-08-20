// ===== netlify/functions/comprarPlayer.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  console.log('🚀 comprarPlayer iniciado');
  
  try {
    const body = JSON.parse(event.body);
    console.log('📦 Body recebido:', body);

    const { player_id } = body;

    if (!player_id) {
      console.error('❌ player_id não fornecido');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'player_id é obrigatório' }),
      };
    }

    const sql = neon(process.env.DATABASE_URL);
    const usuario_id = 'user-fixo';

    // 1. Buscar player
    console.log('🔍 Buscando player:', player_id);
    const rows = await sql`SELECT data FROM players WHERE id = ${player_id}`;
    if (rows.length === 0) {
      console.error('❌ Player não encontrado:', player_id);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Player não encontrado' }),
      };
    }
    const player = rows[0].data;
    console.log('✅ Player encontrado:', player.name);

    // 2. Calcular preço
    const kills = player.stats?.kills || 0;
    const deaths = player.stats?.deaths || 0;
    const kd = deaths > 0 ? kills / deaths : kills;
    const poderBruto = (kills * 2) + (player.stats?.missions || 0) - (deaths * 0.8) + (kd * 5);
    const poder = Math.min(100, Math.max(0, poderBruto / 2));
    const preco = Math.round(100 + (poder / 100) * 400);
    console.log('💰 Preço calculado:', preco);

    // 3. Verificar saldo
    console.log('🔍 Buscando usuário:', usuario_id);
    const userRows = await sql`SELECT moedas FROM usuarios WHERE id = ${usuario_id}`;
    if (userRows.length === 0) {
      console.error('❌ Usuário não encontrado:', usuario_id);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Usuário não encontrado' }),
      };
    }
    const saldo = userRows[0].moedas;
    console.log('💰 Saldo do usuário:', saldo);

    if (saldo < preco) {
      console.error('❌ Saldo insuficiente');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Saldo insuficiente' }),
      };
    }

    // 4. Verificar acervo
    console.log('🔍 Verificando se player já está no acervo...');
    const acervoCheck = await sql`
      SELECT id FROM acervo_usuario
      WHERE usuario_id = ${usuario_id} AND player_id = ${player_id}
    `;
    if (acervoCheck.length > 0) {
      console.error('❌ Player já está no acervo');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Player já está no acervo' }),
      };
    }

    // 5. Atualizar (sucesso!)
    console.log('🔄 Atualizando banco...');
    await sql`UPDATE usuarios SET moedas = moedas - ${preco} WHERE id = ${usuario_id}`;
    await sql`
      INSERT INTO acervo_usuario (usuario_id, player_id, preco_pago)
      VALUES (${usuario_id}, ${player_id}, ${preco})
    `;

    console.log('✅ Compra realizada com sucesso');
    // ⚠️ IMPORTANTE: statusCode 200 para sucesso!
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, preco }),
    };
  } catch (error) {
    console.error('🔥 Erro em comprarPlayer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};