// ===== netlify/functions/venderPlayer.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  console.log('🚀 venderPlayer iniciado');
  
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

    // 1. Buscar no acervo
    console.log('🔍 Buscando player no acervo...');
    const acervo = await sql`
      SELECT preco_pago FROM acervo_usuario
      WHERE usuario_id = ${usuario_id} AND player_id = ${player_id}
    `;
    if (acervo.length === 0) {
      console.error('❌ Player não está no acervo');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Player não está no acervo' }),
      };
    }
    const valorRecebido = Math.round(acervo[0].preco_pago * 0.7);
    console.log('💰 Valor a receber:', valorRecebido);

    // 2. Verificar se está em algum time (corrigido para JSONB)
    console.log('🔍 Verificando se player está em algum time...');
    const timesCheck = await sql`
      SELECT id FROM times
      WHERE dono_id = ${usuario_id}
      AND EXISTS (
        SELECT 1 FROM jsonb_array_elements_text(jogadores) AS elem
        WHERE elem = ${player_id}
      )
    `;
    if (timesCheck.length > 0) {
      console.error('❌ Player está em um time');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Player está em um time, remova-o antes de vender' }),
      };
    }

    // 3. Executar atualizações
    console.log('🔄 Atualizando banco...');
    await sql`DELETE FROM acervo_usuario WHERE usuario_id = ${usuario_id} AND player_id = ${player_id}`;
    await sql`UPDATE usuarios SET moedas = moedas + ${valorRecebido} WHERE id = ${usuario_id}`;

    console.log('✅ Venda realizada com sucesso');
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, valorRecebido }),
    };
  } catch (error) {
    console.error('🔥 Erro em venderPlayer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};