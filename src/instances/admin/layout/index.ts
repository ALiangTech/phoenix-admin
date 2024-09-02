import type { Component } from 'vue';
import { computed, defineAsyncComponent, unref } from 'vue';
import { useWindowSize } from '@vueuse/core';

// enum 枚举组件类型
export enum DeviceType {
  Desktop = 'desktop',
  Phone = 'phone',
  Tablet = 'tablet',
}

export type componentsMapKey =
  | DeviceType.Desktop
  | DeviceType.Phone
  | DeviceType.Tablet;

export const componentMap: Map<componentsMapKey, Component> = new Map();
componentMap.set(
  DeviceType.Desktop,
  defineAsyncComponent(() => import('./desktop/index.vue')),
);
componentMap.set(
  DeviceType.Phone,
  defineAsyncComponent(() => import('./phone/index.vue')),
);
componentMap.set(
  DeviceType.Tablet,
  defineAsyncComponent(() => import('./tablet/index.vue')),
);

// 屏幕大于1200 认为是pc端
// 屏幕大于768 认为是平板
// 屏幕小于768 认为是手机端
export const getDeviceType = (width: number) => {
  if (width > 1200) return DeviceType.Desktop;
  if (width > 768) return DeviceType.Tablet;
  return DeviceType.Phone;
};

export function useLayoutType() {
  const { width } = useWindowSize();
  const currentDeviceType = computed(() => {
    return getDeviceType(unref(width));
  });
  const currentLayout = computed(() => {
    return componentMap.get(unref(currentDeviceType));
  });
  return { currentLayout };
}




















