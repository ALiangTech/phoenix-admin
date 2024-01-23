<script setup lang="ts">
import type { componentsMapKey } from '@admin/layout';
import { componentMap } from '@admin/layout';
import { ref, unref } from 'vue';
import { createThemeConfigProvider } from '@/theme';

defineOptions({
  name: 'APP',
});
const currentComponentMapKey = ref<componentsMapKey>('default-desktop');
const component = componentMap.get(unref(currentComponentMapKey));
const ThemeProvider = createThemeConfigProvider();
</script>
<template>
  <ThemeProvider>
    <component :is="component"></component>
  </ThemeProvider>
</template>
