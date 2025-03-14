import type { App, Plugin } from 'vue';
import HasPermission from './HasPermission.vue';
import type { Options, PermissionSet, PluginInstallFunction } from './types';

const install: PluginInstallFunction = (app, ...options) => {
  const { permissionSet } = options[0];
  window.$can = checkPermissions.bind(null, permissionSet); // 挂载在window上 js里面也可以访问 不仅仅是vue里面
  app.config.globalProperties.$can = window.$can;
  app.component('HasPermissionControl', HasPermission);
};
const permission: Plugin = {
  install,
};
// 注册权限组件
export const registerPermission = (app: App, options: Options) => {
  app.use(permission, options);
};

// 判断是否有这个权限code
export function checkPermissions(
  codes: PermissionSet,
  code: string | string[],
) {
  function checkSinglePermission(code: string) {
    return codes.has(code);
  }

  if (Array.isArray(code)) {
    // 确保每一个code都存在于codes中
    return code.every(checkSinglePermission);
  } else {
    return checkSinglePermission(code);
  }
}
