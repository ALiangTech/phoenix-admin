// 构建菜单数据
import type { RouteRecordRaw } from 'vue-router';

interface CreateMenuDataParams {
  routes: RouteRecordRaw[];
}
type Map = CreateMenuDataParams;
export interface Menu {
  path: string;
  routeName: RouteRecordRaw['name'];
  label: string;
  icon?: string | null;
  children: Menu[];
}
export default function createMenuData({ routes }: CreateMenuDataParams) {
  let menu: Menu[];
  function mapRoutes({ routes }: Map) {
    return routes
      .map(route => {
        const { meta, name, children = [], path } = route;
        const temp: Menu = { routeName: name, children: [], label: '', path };
        if (meta?.menu) {
          const { label, icon } = meta.menu;
          temp.label = label;
          temp.icon = icon ?? null;
          temp.children = mapRoutes({ routes: children });
        }
        return temp;
      })
      .filter(({ label }) => label); // filter no menu data
  }
  menu = mapRoutes({ routes });
  return menu;
}
