-- ===== migrations.sql =====
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nick VARCHAR(50) UNIQUE NOT NULL,
  moedas INT NOT NULL DEFAULT 500,
  moedas_dia_kick INT NOT NULL DEFAULT 0,
  login_streak INT NOT NULL DEFAULT 0,
  ultimo_login DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS acervo_usuario (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  player_id VARCHAR(50) NOT NULL,
  data_aquisicao TIMESTAMP DEFAULT NOW(),
  preco_pago INT NOT NULL,
  UNIQUE(usuario_id, player_id)
);

CREATE TABLE IF NOT EXISTS times (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(100) NOT NULL,
  escudo TEXT,
  dono_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  jogadores JSONB NOT NULL DEFAULT '[]',
  elo INT NOT NULL DEFAULT 1200,
  vitorias INT NOT NULL DEFAULT 0,
  derrotas INT NOT NULL DEFAULT 0,
  data_criacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS desafios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  time_desafiante_id UUID REFERENCES times(id) ON DELETE CASCADE,
  time_desafiado_id UUID REFERENCES times(id) ON DELETE CASCADE,
  aposta INT NOT NULL CHECK (aposta BETWEEN 10 AND 1000),
  status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente','aceito','finalizado','recusado')),
  placar_desafiante INT,
  placar_desafiado INT,
  vencedor_id UUID REFERENCES times(id),
  data TIMESTAMP DEFAULT NOW(),
  expira_em TIMESTAMP DEFAULT NOW() + INTERVAL '24 hours'
);

CREATE TABLE IF NOT EXISTS transacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id VARCHAR(50) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  valor INT NOT NULL,
  descricao TEXT,
  data_hora TIMESTAMP DEFAULT NOW()
);

INSERT INTO usuarios (id, nick, moedas) 
VALUES ('user-fixo', 'Admin', 5000)
ON CONFLICT (id) DO NOTHING;

CREATE INDEX IF NOT EXISTS idx_acervo_usuario ON acervo_usuario(usuario_id);
CREATE INDEX IF NOT EXISTS idx_times_dono ON times(dono_id);
CREATE INDEX IF NOT EXISTS idx_desafios_times ON desafios(time_desafiante_id, time_desafiado_id);
