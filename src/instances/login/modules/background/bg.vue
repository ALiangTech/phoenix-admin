<template>
  <section class="login-bg h-full w-full relative overflow-auto" :class="themeStore.isDark ? 'bg-dark' : ''">
    <slot></slot>
  </section>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/theme';

defineOptions({
  name: 'LoginBackground',
});
const themeStore = useThemeStore();

</script>
<style scoped>
.login-bg {
  background-image: url('@/assets/png/login2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.bg-dark::before {
  filter: invert(1) hue-rotate(180deg);
}
</style>
