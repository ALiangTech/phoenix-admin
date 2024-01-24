import type { App } from 'vue';

export type PermissionCode = string[];
export interface Options {
  permission: Permission;
  [key: string]: any;
}
export type PluginInstallFunction = (app: App, ...options: Options[]) => any;

export interface Permission {
  [key: string]: string[];
}
