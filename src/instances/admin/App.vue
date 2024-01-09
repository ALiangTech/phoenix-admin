<script setup lang="ts">
import useTheme from './theme/index.ts';
import type { componentsMapKey } from '@admin/layout';
import { componentMap } from '@admin/layout';
import { ref, unref } from 'vue';
import Menu from '@admin/routers/components/menu/menu.vue';
import { menu } from '@admin/routers';
defineOptions({
  name: 'APP',
});
const currentComponentMapKey = ref<componentsMapKey>('default-desktop');
const component = componentMap.get(unref(currentComponentMapKey));
const { theme } = useTheme();
</script>
<template>
  <NConfigProvider
    :theme="theme.theme"
    :theme-overrides="theme.themeOverrides"
    abstract
  >
    <component :is="component">
      <template #content>
        <router-view></router-view>
      </template>
      <template #menu>
        <Menu :menu-list="menu"></Menu>
      </template>
    </component>
  </NConfigProvider>
</template>
