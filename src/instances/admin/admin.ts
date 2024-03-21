import './style.css';
import { createApp } from 'vue';
import type { App } from 'vue';
import APP from './App.vue';
import { MountRouterToApp } from './routers';
import { registerPermission } from '@/plugins';
import registerGlobalComponents from './components/index.ts';

export default async function MountAdminInstance() {
  const app: App = createApp(APP);
  registerGlobalComponents(app);

  // 获取用户信息后挂载权限组件相关
  // 注册权限插件
  await registerPermission(app, { role: 'test' }); // 通过接口获取角色
  // 路由挂载
  await MountRouterToApp(app);
  // 页面挂载
  app.mount('#app');
}
