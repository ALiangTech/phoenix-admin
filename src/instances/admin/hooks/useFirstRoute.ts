// 多children 下跳转第一个有权限的菜单

import { useRoute, useRouter } from 'vue-router';
import createMenuData from '@/plugins/routers/core/create-menu-data';

interface Options {
  routeName: string;
}

export default function useFirstRoute(options: Options) {
  const route = useRoute();
  const router = useRouter();
  const currentRoute = router
    .getRoutes()
    .find(item => item.name === options.routeName)!;

  function getChildren() {
    return currentRoute.children;
  }

  function getMenus() {
    const routes = getChildren();
    return createMenuData({ routes });
  }

  return { getMenus, getChildren, router, route };
}
