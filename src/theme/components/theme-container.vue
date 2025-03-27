<template>
  <NConfigProvider abstract :theme="themeStore.theme" :theme-overrides="themeStore.overrides">
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