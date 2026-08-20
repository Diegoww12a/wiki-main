// netlify/functions/criarDesafio.js
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const body = JSON.parse(event.body);
    const { time_desafiante_id, time_desafiado_id, aposta, usuario_id } = body;

    // Validações básicas
    if (!time_desafiante_id || !time_desafiado_id || aposta === undefined || !usuario_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos obrigatórios: time_desafiante_id, time_desafiado_id, aposta, usuario_id' }),
      };
    }

    if (time_desafiante_id === time_desafiado_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Não pode desafiar o próprio time' }),
      };
    }

    // Verificar se o time desafiante existe e pertence ao usuário
    const timeDesafiante = await sql`
      SELECT dono_id, jogadores FROM times WHERE id = ${time_desafiante_id}
    `;
    if (timeDesafiante.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Time desafiante não encontrado' }) };
    }
    if (timeDesafiante[0].dono_id !== usuario_id) {
      return { statusCode: 403, body: JSON.stringify({ error: 'Você não é dono deste time' }) };
    }

    // Verificar se o time desafiado existe
    const timeDesafiado = await sql`
      SELECT dono_id FROM times WHERE id = ${time_desafiado_id}
    `;
    if (timeDesafiado.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Time desafiado não encontrado' }) };
    }

    // Verificar se o time desafiante tem jogadores (pelo menos 1)
    const jogadoresDesafiante = timeDesafiante[0].jogadores || [];
    if (jogadoresDesafiante.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Time desafiante não tem jogadores' }) };
    }

    // Verificar saldo do usuário (moedas) para a aposta
    const userRows = await sql`SELECT moedas FROM usuarios WHERE id = ${usuario_id}`;
    if (userRows.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Usuário não encontrado' }) };
    }
    if (userRows[0].moedas < aposta) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Saldo insuficiente para a aposta' }) };
    }

    // Bloquear a aposta (subtrair do saldo) - opcional, pode desbloquear depois
    // Vamos deixar para descontar apenas quando o desafio for aceito e resultado definido, por segurança.
    // Mas podemos já reservar: vou apenas criar o desafio com status 'pendente'.

    // Inserir desafio
    await sql`
      INSERT INTO desafios (time_desafiante_id, time_desafiado_id, aposta, status, data_criacao)
      VALUES (${time_desafiante_id}, ${time_desafiado_id}, ${aposta}, 'pendente', NOW())
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, message: 'Desafio enviado com sucesso' }),
    };
  } catch (error) {
    console.error('Erro em criarDesafio:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};