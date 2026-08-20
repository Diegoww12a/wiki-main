import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { id, nome, escudo, jogadores, delete: isDelete } = JSON.parse(event.body);

    if (isDelete) {
      // Permite deletar apenas se o usuário for o dono (mas não temos usuario_id no body? O front envia?)
      // O front não está enviando usuario_id para delete, então assumimos que o dono é o usuário logado.
      // Para simplificar, vamos receber `usuario_id` também.
      // Ajuste no front: enviar usuario_id no body.
      // Vou adaptar para receber dono_id
      const { usuario_id } = JSON.parse(event.body); // você precisa adicionar no front
      if (!usuario_id) {
        return { statusCode: 400, body: JSON.stringify({ error: 'usuario_id é obrigatório para deletar' }) };
      }
      const verify = await sql`SELECT dono_id FROM times WHERE id = ${id}`;
      if (verify.length === 0 || verify[0].dono_id !== usuario_id) {
        return { statusCode: 403, body: JSON.stringify({ error: 'Sem permissão para deletar este time' }) };
      }
      await sql`DELETE FROM times WHERE id = ${id}`;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    // Editar
    // Também verifica permissão
    const { usuario_id } = JSON.parse(event.body); // envie usuario_id no front
    const verify = await sql`SELECT dono_id FROM times WHERE id = ${id}`;
    if (verify.length === 0 || verify[0].dono_id !== usuario_id) {
      return { statusCode: 403, body: JSON.stringify({ error: 'Sem permissão para editar este time' }) };
    }

    await sql`
      UPDATE times
      SET nome = ${nome}, escudo = ${escudo}, jogadores = ${JSON.stringify(jogadores)}
      WHERE id = ${id}
    `;
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    console.error('Erro em editarTime:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};