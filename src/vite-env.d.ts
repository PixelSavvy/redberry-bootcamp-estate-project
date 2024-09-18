/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_TOKEN: string;
  readonly VITE_REGIONS_API: string;
  readonly VITE_CITIES_API: string;
  readonly VITE_AGENTS_API: string;
  readonly VITE_LISTINGS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
