import './style.css';
import { createApp } from 'vue';
import type { App } from 'vue';
import APP from './App.vue';
import { MountRouterToApp } from './routers';
import { registerPermission } from './plugins';
import registerGlobalComponents from './components/index.ts';
import http from '@/axios';

export default async function MountAdminInstance() {
  const app: App = createApp(APP);
  registerGlobalComponents(app);
  // 路由挂载
  await MountRouterToApp(app);

  // 获取用户信息后挂载权限组件相关
  // 注册权限插件
  await fetchPermissions();
  const permissionCodeSet = ['xx']; // 权限集合
  registerPermission(app, { permissionCodeSet });
  // 页面挂载
  app.mount('#app');
}

interface PermissionData {
  [key: string]: string[];
}
async function fetchPermissions() {
  // 获取权限码的逻辑
  const result = await http.get<PermissionData>('/permission');
  console.log(result);
}
