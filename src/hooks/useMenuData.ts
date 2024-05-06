// 用于构建菜单数据
import type { RouteRecordRaw } from 'vue-router';
import { useRouter } from 'vue-router';
import { createRouterMenuData } from '@/plugins';
import { cloneDeep } from 'lodash-es';

export function useMenuData() {
  const route = useRouter();
  const { routes } = route.options;
  // why cloneDeep 因为createRouterMenuData 内部会修改path 构建成完整的路径 options中的routers是readonly 防止引发莫名其妙的问题 故深拷贝一份
  const tempRoutes = cloneDeep(routes) as RouteRecordRaw[];
  return createRouterMenuData({ routes: tempRoutes });
}
