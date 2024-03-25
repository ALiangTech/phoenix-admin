import type { App, Plugin } from 'vue';
import HasPermission from './HasPermission.vue';
import type { PluginInstallFunction, Options, PermissionSet } from './types';

const install: PluginInstallFunction = (app, ...options) => {
  const { permissionSet } = options[0];
  window.$can = checkPermissions.bind(null, permissionSet);
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
