// 目前有account advanced 两种菜单

import type { Component } from 'vue';

export type MenusType = 'account' | 'advanced';

export interface MenuItem {
  label: string;
  value: MenusType;
}

export type ComponentMap = {
  [key in MenusType]: Component;
};
