// 查找第一个有权限的路由
import type { RouteRecordRaw } from 'vue-router';

type TempRouteRecordRaw = RouteRecordRaw | undefined;
interface FindFirstPermissionParams {
  routes: TempRouteRecordRaw[];
}
type Find = FindFirstPermissionParams;
export default function findFirstPermissionRoute({
  routes,
}: FindFirstPermissionParams) {
  let route: RouteRecordRaw | undefined;
  function Find({ routes }: Find) {
    const [first] = routes;
    if (first?.children?.length) {
      Find({ routes: first.children });
    } else {
      route = first;
    }
  }
  Find({ routes });
  return route;
}
