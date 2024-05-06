import type { RouteRecordRaw } from 'vue-router';

// 构建完整的path路径的菜单数据
export function createFullPathMenuData(
  data: RouteRecordRaw[],
  lastRouteData: RouteRecordRaw | null,
): RouteRecordRaw[] {
  return data.map(item => {
    const { children } = item;
    if (lastRouteData) {
      const split = lastRouteData.path === '/' ? '' : '/';
      item.path = `${lastRouteData.path}${split}${item.path}`;
    }
    if (children?.length) {
      item.children = createFullPathMenuData(children, item);
    }
    return item;
  });
}
