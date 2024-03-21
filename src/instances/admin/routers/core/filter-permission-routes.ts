// 过滤掉无权限的路由
import type { RouteRecordRaw } from 'vue-router';
type Routes = RouteRecordRaw[];

interface Filter {
  routes: Routes;
}

export default async function filterPermissionRoutes(
  params: Filter,
): Promise<Routes> {
  const { routes } = params;

  async function filter({ routes }: Filter): Promise<Routes> {
    const filteredRoutes: Routes = [];

    for (const route of routes) {
      const { meta, children = [] } = route;

      if (meta) {
        const { code } = meta;

        if (code) {
          const result = await window.$authorizer.can('post', 'account_add');

          if (result) {
            // 递归调用也是异步函数，使用 await 等待结果
            route.children = await filter({ routes: children });
            filteredRoutes.push(route);
          }
        } else {
          filteredRoutes.push(route);
        }
      } else {
        filteredRoutes.push(route);
      }
    }

    return filteredRoutes;
  }

  return filter({ routes });
}
