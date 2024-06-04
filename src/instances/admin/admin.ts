import type { App } from 'vue';
import { createApp } from 'vue';
import APP from './App.vue';
import { MountRouterToApp } from './routers';
import { registerPermission } from '@/plugins';
import registerGlobalComponents from './components/index.ts';
import http from '@/axios';

export default async function MountAdminInstance() {
  const app: App = createApp(APP);
  registerGlobalComponents(app);

  // 获取用户信息后挂载权限组件相关
  // 注册权限插件
  const permissionSet = await fetchPermissions();
  registerPermission(app, { permissionSet });
  // 路由挂载
  await MountRouterToApp(app);
  // 页面挂载
  app.mount('#subApp');
  return app;
}

interface PermissionData {
  data: string[];
}

async function fetchPermissions() {
  // 获取权限码的逻辑
  const result = await http.get<any, PermissionData>('/v1/permission');
  return new Set(result.data);
}
