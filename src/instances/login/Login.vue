<template>
  <ThemeConfig>
    <main class="grid h-screen w-screen login-layout xl:grid-cols-7/3">
      <LoginLogo class="hidden xl:grid"></LoginLogo>
      <LoginForm></LoginForm>
    </main>
  </ThemeConfig>
</template>
<script setup lang="ts">
import { createThemeConfigProvider } from '@/theme';
import LoginForm from './LoginForm.vue';
import LoginLogo from './LoginLogo.vue';

const ThemeConfig = createThemeConfigProvider();

defineOptions({
  name: 'LoginApp',
});
</script>

<style scoped>
.login-layout {
  --linear-gradient-direction: #130c1a;

  background: var(--linear-gradient-direction);
}
</style>
