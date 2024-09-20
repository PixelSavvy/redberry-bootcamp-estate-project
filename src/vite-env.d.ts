/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_TOKEN: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_REGIONS_URL: string;
  readonly VITE_AGENTS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
