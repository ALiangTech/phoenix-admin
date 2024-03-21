import type { App } from 'vue';

export interface Options {
  role: string;
  [key: string]: any;
}
export type PluginInstallFunction = (app: App, ...options: Options[]) => any;
