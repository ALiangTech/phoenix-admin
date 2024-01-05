import type { App, Plugin } from 'vue';
import HasPermission from './HasPermission.vue';
import type { PluginInstallFunction, Options } from './types';
const install: PluginInstallFunction = (app, ...options) => {
  const { permissionCodeSet } = options[0];
  // 全局权限组件
  app.component('HasPermissionControl', {
    extends: HasPermission,
    props: {
      permissionCodeSet: {
        type: Array,
        default: () => permissionCodeSet,
      },
    },
  });
};
const permission: Plugin = {
  install,
};
// 注册权限组件
export const registerPermission = (app: App, options: Options) => {
  app.use(permission, options);
};
