<script setup lang="ts">
import type { componentsMapKey } from '@admin/layout';
import { componentMap } from '@admin/layout';
import { ref, unref } from 'vue';
import Menu from '@admin/routers/components/menu/menu.vue';
import { menu } from '@admin/routers';
import { createThemeProvider } from '@/theme';

defineOptions({
  name: 'APP',
});
const currentComponentMapKey = ref<componentsMapKey>('default-desktop');
const component = componentMap.get(unref(currentComponentMapKey));
const ThemeProvider = createThemeProvider();
</script>
<template>
  <ThemeProvider>
    <component :is="component">
      <template #content>
        <router-view></router-view>
      </template>
      <template #menu>
        <Menu :menu-list="menu"></Menu>
      </template>
    </component>
  </ThemeProvider>
</template>
