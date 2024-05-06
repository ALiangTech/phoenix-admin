// 构建菜单数据
import type { RouteRecordRaw } from 'vue-router';
import { createFullPathMenuData } from './../utils';

interface CreateMenuDataParams {
  routes: RouteRecordRaw[];
}

type Map = CreateMenuDataParams;

export interface Menu {
  path: string;
  label: string;
  icon: string;
  children: Menu[];
}

export default function createMenuData({ routes }: CreateMenuDataParams) {
  let menu: Menu[];

  function mapRoutes({ routes }: Map) {
    return routes
      .map(route => {
        const { meta, children = [], path } = route;
        const temp: Menu = { children: [], label: '', path, icon: '' };
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

  menu = mapRoutes({ routes: createFullPathMenuData(routes, null) });
  return menu;
}
