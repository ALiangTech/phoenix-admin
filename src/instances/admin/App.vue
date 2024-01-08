<template>
  <n-loading-bar-provider>
    <NConfigProvider
      :theme="theme.theme"
      :theme-overrides="theme.themeOverrides"
      inline-theme-disabled
      abstract
    >
      <router-view></router-view>
    </NConfigProvider>
    <z-smart-island @change="handleChange"></z-smart-island>
  </n-loading-bar-provider>
</template>
<script setup lang="ts">
import useTheme, { setTheme } from './theme/index.ts';
const { theme } = useTheme();
function handleChange(type: string) {
  if (type === 'set-theme') {
    setTheme();
  }
}
</script>
