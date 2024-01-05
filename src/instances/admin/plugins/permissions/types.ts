import type { App } from 'vue';

export type PermissionCode = string[];
export interface Options {
  permissionCodeSet: PermissionCode;
  [key: string]: any;
}
export type PluginInstallFunction = (app: App, ...options: Options[]) => any;
