// 查找第一个有权限的路由
import type { RouteRecordRaw } from 'vue-router';
import { cloneDeep } from 'lodash-es';

type TempRouteRecordRaw = RouteRecordRaw;

interface FindFirstPermissionParams {
  routes: TempRouteRecordRaw[];
}

type Find = FindFirstPermissionParams;
export default function findFirstPermissionRoute({
  routes,
}: FindFirstPermissionParams) {
  const route: RouteRecordRaw[] = [];

  function Find({ routes }: Find) {
    const [first] = routes;
    if (first?.children?.length) {
      route.push(first);
      Find({ routes: first.children });
    } else {
      route.push(first);
    }
  }

  Find({ routes: cloneDeep(routes) }); // 防止隐式修改path 下面的reduce就会修改path 导致路径重复问题
  // reduce 目的是构建完成的path路径
  return route.reduce((acc, route) => {
    const routePath = route.path;
    const accPath = acc.path;
    route.path = `${accPath}/${routePath}`;
    return route;
  });
}
