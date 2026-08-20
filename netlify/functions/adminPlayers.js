import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const authHeader = event.headers?.authorization || '';
    const token = authHeader.replace('Bearer ', '');

    if (token !== process.env.ADMIN_TOKEN) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Não autorizado' }),
      };
    }

    const method = event.httpMethod;

    // =========================
    // ADICIONAR
    // =========================
    if (method === 'POST') {
      const player = JSON.parse(event.body || '{}');

      if (!player.id || !player.name) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: 'ID e nome são obrigatórios',
          }),
        };
      }

      await sql`
        INSERT INTO players (id, name, data)
        VALUES (
          ${player.id},
          ${player.name},
          ${JSON.stringify(player)}::jsonb
        )
      `;

      return {
        statusCode: 201,
        body: JSON.stringify({
          success: true,
          player,
        }),
      };
    }

    // =========================
    // EDITAR
    // =========================
    if (method === 'PUT') {
      const player = JSON.parse(event.body || '{}');

      if (!player.id || !player.name) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: 'ID e nome são obrigatórios',
          }),
        };
      }

      await sql`
        UPDATE players
        SET
          name = ${player.name},
          data = ${JSON.stringify(player)}::jsonb
        WHERE id = ${player.id}
      `;

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          player,
        }),
      };
    }

    // =========================
    // DELETAR
    // =========================
    if (method === 'DELETE') {
      const { id } = JSON.parse(event.body || '{}');

      if (!id) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: 'ID do player é obrigatório',
          }),
        };
      }

      await sql`
        DELETE FROM players
        WHERE id = ${id}
      `;

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
        }),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({
        error: 'Método não permitido',
      }),
    };
  } catch (error) {
    console.error('Erro em adminPlayers:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Erro interno',
      }),
    };
  }
};