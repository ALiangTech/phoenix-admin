<template>
  <NConfigProvider abstract :theme="themeStore.getTheme" :theme-overrides="themeStore.getThemeOverride">
    <slot></slot>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/theme'
defineOptions({
  name: 'ThemeContainer',
})
const themeStore = useThemeStore()
</script>