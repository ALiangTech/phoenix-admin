import type { RouterOptions, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import {
  filterPermissionRoutes,
  findFirstPermissionRoute,
  createMenuData,
} from './core';

// 无权限页面
// 当通过url进入 无权限 就跳转无权限页面
const noPermissionRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NoPermission',
  component: () => import('./exceptional/no-permission.vue'),
};
const rootRoute: RouteRecordRaw = {
  children: [],
  component: undefined,
  path: '/',
};

// 给root设置 重定向到 有权限的第一个路由
function setRootRedirect(
  root: RouteRecordRaw,
  redirect: RouteRecordRaw | undefined,
) {
  if (redirect) {
    root.redirect = () => {
      return { path: redirect.path };
    };
  }
}

const registerRouter = async (
  asyncRoutes: RouteRecordRaw[],
  routerOptions?: RouterOptions,
) => {
  const hasPermissionRoutes = await filterPermissionRoutes({
    routes: asyncRoutes,
  });
  const firstPermissionRoute = findFirstPermissionRoute({
    routes: hasPermissionRoutes,
  });
  setRootRedirect(rootRoute, firstPermissionRoute);
  const options: RouterOptions = {
    history: createWebHistory(),
    routes: [rootRoute, ...hasPermissionRoutes, noPermissionRoute],
    strict: true, // 严格匹配
    sensitive: true, // 区分路径的大小写
    ...(routerOptions || {}),
  };
  return createRouter(options);
};
export default registerRouter;
export const createRouterMenuData = createMenuData;
