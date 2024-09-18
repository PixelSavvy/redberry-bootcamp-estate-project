/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TOKEN: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
