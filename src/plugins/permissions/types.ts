import type { App } from 'vue';

export type PermissionSet = Set<string>;
export interface Options {
  permissionSet: PermissionSet;
  [key: string]: any;
}
export type PluginInstallFunction = (app: App, ...options: Options[]) => any;

export interface Permission {
  [key: string]: string[];
}
