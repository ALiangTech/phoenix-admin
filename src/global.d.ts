import type { App } from 'vue';

export {};
declare global {
  type PermissionChecker = (code: string | string[]) => boolean;

  interface Window {
    $can: PermissionChecker;
  }

  type InstanceRenderFun = () => Promise<App>;
}
