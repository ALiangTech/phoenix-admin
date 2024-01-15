import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';

export type componentsMapKey =
  | 'default-desktop'
  | 'default-phone'
  | 'default-tablet';

export const componentMap: Map<componentsMapKey, Component> = new Map();
componentMap.set(
  'default-desktop',
  defineAsyncComponent(() => import('./desktop/index.vue')),
);
componentMap.set(
  'default-phone',
  defineAsyncComponent(() => import('./phone/index.vue')),
);
componentMap.set(
  'default-tablet',
  defineAsyncComponent(() => import('./tablet/index.vue')),
);
