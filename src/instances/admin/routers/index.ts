import type {
  RouterOptions,
  RouteRecordRaw,
  RouteRecordName,
} from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import { ref } from 'vue';
import {
  createMenuData,
  filterPermissionRoutes,
  findFirstPermissionRoute,
  type Menu,
} from './core';
// 批量导入src router.ts 文件下的路由文件
type batchModules = Record<string, Record<string, RouteRecordRaw>>;
const asyncModules: batchModules = import.meta.glob('./../**/router.ts', {
  eager: true,
});
// 从批量导入路由模块中获取 路由模块数据
const getRoutes = (modules: batchModules) => {
  const routesModule = Object.values(modules);
  const routers = Object.values(routesModule);
  return routers.map(item => {
    const [module] = Object.values(item);
    return module;
  });
};
export const asyncRoutes = getRoutes(asyncModules);

export const menu = ref<Menu[]>([]);
export const firstPermissionRoute = ref<RouteRecordRaw>();
// 无权限页面
// 当通过url进入 无权限 就跳转无权限页面
const noPermissionRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NoPermission',
  component: () => import('./exceptional/no-permission.vue'),
};
const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'RootPage',
  component: () => import('./components/root/root.vue'),
  children: [],
};

// 给root设置 重定向到 有权限的第一个路由

function setRootRedirect(
  root: RouteRecordRaw,
  redirect: RouteRecordName | undefined,
) {
  if (redirect) {
    root.redirect = () => {
      return { name: redirect };
    };
  }
}

// 挂载到实例上面
export const MountRouterToApp = async (app: App) => {
  const hasPermissionRoutes = filterPermissionRoutes({
    codes: ['xx'],
    routes: asyncRoutes,
  });
  firstPermissionRoute.value = findFirstPermissionRoute({
    routes: hasPermissionRoutes,
  });
  menu.value = createMenuData({ routes: hasPermissionRoutes });
  setRootRedirect(rootRoute, firstPermissionRoute.value?.name);
  rootRoute.children = hasPermissionRoutes;
  const options: RouterOptions = {
    history: createWebHistory(),
    routes: [rootRoute, noPermissionRoute],
    strict: true,
    sensitive: true,
  };
  const router = createRouter(options);
  app.use(router);
  await router.isReady();
  return { router };
};
