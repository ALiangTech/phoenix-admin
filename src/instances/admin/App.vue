<script setup lang="ts">
import { useLayoutType } from '@admin/layout';
import { createThemeConfigProvider } from '@/theme';

defineOptions({
  name: 'APP',
});
const { currentLayout } = useLayoutType();
const ThemeProvider = createThemeConfigProvider();
</script>
<template>
  <ThemeProvider>
    <component :is="currentLayout"></component>
  </ThemeProvider>
</template>
