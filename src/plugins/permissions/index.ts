import type { App, Plugin } from 'vue';
import HasPermission from './HasPermission.vue';
import type { PluginInstallFunction, Options } from './types';
import createCasbinInstance from './casbin';
const install: PluginInstallFunction = (app, ...options) => {
  const { permission } = options[0];
  const authorizer = createCasbinInstance(permission);
  app.config.globalProperties.$authorizer = authorizer;
  window.$authorizer = authorizer; // 挂载到全局
  app.component('HasPermissionControl', HasPermission);
};
const permission: Plugin = {
  install,
};
// 注册权限组件
export const registerPermission = (app: App, options: Options) => {
  app.use(permission, options);
};
