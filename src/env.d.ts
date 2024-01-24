/// <reference types="vite/client" />
/// <reference types="casbin.js/lib/Authorizer" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_HTTP_URL: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface Window {
  $authorizer: Authorizer;
}
