// ===== netlify/functions/loginDiario.js =====
import { neon } from '@neondatabase/serverless';

export const handler = async (event) => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const usuario_id = 'user-fixo';

    const user = await sql`SELECT login_streak, ultimo_login FROM usuarios WHERE id = ${usuario_id}`;
    if (user.length === 0) throw new Error('Usuário não encontrado');

    const hoje = new Date().toISOString().split('T')[0];
    const ultimo = user[0].ultimo_login;
    let streak = user[0].login_streak;

    if (ultimo === hoje) {
      return {
        statusCode: 200,
        body: JSON.stringify({ ok: true, mensagem: 'Já fez login hoje' }),
      };
    }

    const ontem = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (ultimo === ontem) {
      streak += 1;
    } else {
      streak = 1;
    }

    const bonus = streak >= 7 ? 100 : streak * 10;

    await sql.begin(async (tx) => {
      await tx`
        UPDATE usuarios
        SET login_streak = ${streak},
            ultimo_login = ${hoje},
            moedas = moedas + ${bonus}
        WHERE id = ${usuario_id}
      `;
      await tx`
        INSERT INTO transacoes (usuario_id, tipo, valor, descricao)
        VALUES (${usuario_id}, 'recompensa_login', ${bonus}, 'Login diário (streak ${streak})')
      `;
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, bonus }),
    };
  } catch (error) {
    console.error('Erro em loginDiario:', error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};