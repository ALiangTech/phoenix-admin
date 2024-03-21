import type { App, Plugin } from 'vue';
import HasPermission from './HasPermission.vue';
import type { PluginInstallFunction, Options } from './types';
import createCasbinInstance from './casbin';
const install: PluginInstallFunction = (app, ...options) => {
  const { authorizer } = options[0];
  app.config.globalProperties.$authorizer = authorizer;
  app.component('HasPermissionControl', HasPermission);
};
const permission: Plugin = {
  install,
};
// 注册权限组件
export const registerPermission = async (app: App, options: Options) => {
  const { role } = options;
  const authorizer = await createCasbinInstance(role);
  window.$authorizer = authorizer; // 挂载到全局
  console.log(authorizer);
  console.log('Test2');
  const res = await window.$authorizer.can('post', 'account_add');
  console.log(res);
  console.log('Test');
  app.use(permission, { authorizer });
};
