// 路由跳转
import type { RouteLocationRaw } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
export function useRouterForMenu() {
  const route = useRoute();
  const router = useRouter();

  /* 路由跳转 */
  function navigateToRoute(to: RouteLocationRaw) {
    router.push(to);
  }
  return { route, navigateToRoute };
}
