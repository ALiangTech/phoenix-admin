import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { registerRouter } from '@/plugins';

// 批量导入src router.ts 文件下的路由文件
type batchModules = Record<string, RouteRecordRaw>;
const asyncModules: batchModules = import.meta.glob('./../**/router.ts', {
  eager: true,
  import: 'default',
});
// 从批量导入路由模块中获取 路由模块数据
const asyncRoutes = Object.values(asyncModules);
// 挂载到实例上面
export const MountRouterToApp = async (app: App) => {
  const router = await registerRouter(asyncRoutes);
  app.use(router);
  await router.isReady();
  return { router };
};
