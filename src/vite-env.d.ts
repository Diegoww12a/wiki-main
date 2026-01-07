/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
  // você pode adicionar outras variáveis do .env aqui se quiser
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
