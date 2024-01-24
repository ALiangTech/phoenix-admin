/// <reference types="vite/client" />
/// <reference types="casbin.js/lib/Authorizer" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  interface ComponentCustomProperties {
    $authorizer: Authorizer;
  }
  export default component;
}
